import React, { useState } from 'react';
import { RegionData, RegionTimeSeriesPoint } from '../types';
import { 
  BarChart3, 
  TrendingUp, 
  Download, 
  PieChart, 
  Layers, 
  Info, 
  Calendar,
  Share2
} from 'lucide-react';

interface EconomicChartsProps {
  region: RegionData;
}

export const EconomicCharts: React.FC<EconomicChartsProps> = ({ region }) => {
  const [activeMetric, setActiveMetric] = useState<'gvaIndex' | 'nighttimeLight' | 'formalJobs' | 'opportunityGap'>('gvaIndex');
  const [hoveredPoint, setHoveredPoint] = useState<RegionTimeSeriesPoint | null>(null);

  const metricConfigs = {
    gvaIndex: {
      label: 'Gross Value Added (GVA) Index',
      unit: 'Index (Base 2018=100)',
      color: '#2563EB',
      source: 'MoSPI State & District Domestic Product',
      desc: 'Real economic output normalized across price deflators.'
    },
    nighttimeLight: {
      label: 'VIIRS Satellite Nighttime Radiance',
      unit: 'nW/cm²/sr',
      color: '#06B6D4',
      source: 'NASA/NOAA Black Marble Space2Stats',
      desc: 'Spatial energy emission proxying electrification and commercial density.'
    },
    formalJobs: {
      label: 'Formal Registered Employment',
      unit: 'Thousand Workers',
      color: '#10B981',
      source: 'EPFO & PLFS Formal Enterprise Filings',
      desc: 'Count of contributing active social security payroll employees.'
    },
    opportunityGap: {
      label: 'Economic Opportunity Gap',
      unit: 'Gap Points',
      color: '#EA580C',
      source: 'EconLens Algorithmic Evaluation',
      desc: 'Variance between theoretical capacity and empirical output.'
    }
  };

  const currentCfg = metricConfigs[activeMetric];

  // Prepare CSV Download
  const handleDownloadCsv = () => {
    const headers = ['Year', 'GVA_Index', 'Nighttime_Radiance_nW_cm2_sr', 'Formal_Jobs_Thousands', 'Opportunity_Gap_Pts', 'Unemployment_Rate_Pct'];
    const rows = region.timeSeries.map(pt => [
      pt.year,
      pt.gvaIndex,
      pt.nighttimeLight,
      pt.formalJobs,
      pt.opportunityGap,
      pt.unemploymentRate
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `EconLens_${region.name}_TimeSeries_Data.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Helper for rendering high-precision SVG Line & Area Chart
  const renderLineChart = () => {
    const data = region.timeSeries;
    const values = data.map(d => d[activeMetric]);
    const minVal = Math.min(...values) * 0.92;
    const maxVal = Math.max(...values) * 1.05;
    const range = maxVal - minVal === 0 ? 1 : maxVal - minVal;

    const svgWidth = 600;
    const svgHeight = 240;
    const padding = { top: 20, right: 30, bottom: 40, left: 50 };
    const chartW = svgWidth - padding.left - padding.right;
    const chartH = svgHeight - padding.top - padding.bottom;

    const points = data.map((d, i) => {
      const x = padding.left + (i / (data.length - 1)) * chartW;
      const y = padding.top + chartH - ((d[activeMetric] - minVal) / range) * chartH;
      return { x, y, dataPoint: d };
    });

    const pathD = points.reduce((acc, curr, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${curr.x} ${curr.y}`, '');
    const areaD = `${pathD} L ${points[points.length - 1].x} ${padding.top + chartH} L ${points[0].x} ${padding.top + chartH} Z`;

    return (
      <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} width="100%" height="240" style={{ overflow: 'visible' }}>
        <defs>
          <linearGradient id={`chart-grad-${activeMetric}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={currentCfg.color} stopOpacity="0.35" />
            <stop offset="100%" stopColor={currentCfg.color} stopOpacity="0.0" />
          </linearGradient>
        </defs>

        {/* Grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((pct, idx) => {
          const y = padding.top + chartH * (1 - pct);
          const gridVal = (minVal + range * pct).toFixed(1);
          return (
            <g key={idx}>
              <line
                x1={padding.left}
                y1={y}
                x2={svgWidth - padding.right}
                y2={y}
                stroke="var(--border-subtle)"
                strokeDasharray="3 3"
              />
              <text
                x={padding.left - 8}
                y={y + 4}
                textAnchor="end"
                fontSize="10"
                fill="var(--text-muted)"
              >
                {gridVal}
              </text>
            </g>
          );
        })}

        {/* Area fill */}
        <path d={areaD} fill={`url(#chart-grad-${activeMetric})`} />

        {/* Line stroke */}
        <path
          d={pathD}
          fill="none"
          stroke={currentCfg.color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Data points & X axis labels */}
        {points.map((pt, i) => (
          <g
            key={i}
            onMouseEnter={() => setHoveredPoint(pt.dataPoint)}
            onMouseLeave={() => setHoveredPoint(null)}
            style={{ cursor: 'pointer' }}
          >
            {/* Year label */}
            <text
              x={pt.x}
              y={svgHeight - 12}
              textAnchor="middle"
              fontSize="11"
              fontWeight="600"
              fill={hoveredPoint?.year === pt.dataPoint.year ? currentCfg.color : 'var(--text-muted)'}
            >
              {pt.dataPoint.year}
            </text>

            {/* Circle dot */}
            <circle
              cx={pt.x}
              cy={pt.y}
              r={hoveredPoint?.year === pt.dataPoint.year ? '6' : '4'}
              fill={currentCfg.color}
              stroke="white"
              strokeWidth="2"
            />
          </g>
        ))}
      </svg>
    );
  };

  // 6-Axis Radar Spider Chart for the 6 Research Dimensions (from Slide 3 & 6)
  const renderRadarChart = () => {
    const dimensions = [
      { name: 'People (Labor/Edu)', val: region.workingAgePercent, max: 100 },
      { name: 'Infrastructure (Roads/Port)', val: region.indicators.transportAccessIndex * 100, max: 100 },
      { name: 'Satellite (Radiance)', val: Math.min((region.indicators.nighttimeRadiance / 80) * 100, 100), max: 100 },
      { name: 'Economy (Enterprises)', val: Math.min((region.indicators.msmeDensity / 350) * 100, 100), max: 100 },
      { name: 'Labour Demand', val: 100 - region.indicators.skillMismatchIndex, max: 100 },
      { name: 'External Conditions', val: 78, max: 100 }
    ];

    const size = 260;
    const center = size / 2;
    const radius = 95;
    const numAxes = dimensions.length;

    const angleStep = (Math.PI * 2) / numAxes;

    // Build polygon points
    const radarPoints = dimensions.map((d, i) => {
      const angle = i * angleStep - Math.PI / 2;
      const r = (d.val / d.max) * radius;
      const x = center + r * Math.cos(angle);
      const y = center + r * Math.sin(angle);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    }).join(' ');

    return (
      <svg viewBox={`0 0 ${size} ${size}`} width="100%" height={size}>
        {/* Concentric rings */}
        {[0.25, 0.5, 0.75, 1.0].map((level, idx) => (
          <circle
            key={idx}
            cx={center}
            cy={center}
            r={radius * level}
            fill="none"
            stroke="var(--border-subtle)"
            strokeDasharray="2 2"
          />
        ))}

        {/* Axis spokes & labels */}
        {dimensions.map((d, i) => {
          const angle = i * angleStep - Math.PI / 2;
          const x = center + radius * Math.cos(angle);
          const y = center + radius * Math.sin(angle);
          const labelX = center + (radius + 24) * Math.cos(angle);
          const labelY = center + (radius + 18) * Math.sin(angle);

          return (
            <g key={i}>
              <line x1={center} y1={center} x2={x} y2={y} stroke="var(--border-subtle)" />
              <text
                x={labelX}
                y={labelY}
                textAnchor="middle"
                fontSize="9"
                fontWeight="700"
                fill="var(--text-secondary)"
              >
                {d.name}
              </text>
            </g>
          );
        })}

        {/* Data polygon */}
        <polygon
          points={radarPoints}
          fill="rgba(37, 99, 235, 0.25)"
          stroke="#2563EB"
          strokeWidth="2.5"
        />
      </svg>
    );
  };

  return (
    <div style={{ marginBottom: '32px' }}>
      <div className="grid-2">
        {/* Time-Series Trajectory Chart */}
        <div className="card" style={{ padding: '24px' }}>
          <div className="card-header">
            <div>
              <div className="card-title">
                <TrendingUp size={18} color="var(--blue-primary)" />
                <span>Historical Economic Trajectory (2018–2024)</span>
              </div>
              <div className="card-subtitle">
                {currentCfg.desc}
              </div>
            </div>

            <button
              onClick={handleDownloadCsv}
              className="btn-secondary"
              style={{ padding: '6px 12px', fontSize: '0.78rem' }}
              title="Download clean tabular CSV"
            >
              <Download size={13} />
              <span>Export CSV</span>
            </button>
          </div>

          {/* Metric Selector Tabs */}
          <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', marginBottom: '16px', paddingBottom: '6px' }}>
            {(Object.keys(metricConfigs) as Array<keyof typeof metricConfigs>).map((key) => (
              <button
                key={key}
                onClick={() => setActiveMetric(key)}
                style={{
                  padding: '5px 10px',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  background: activeMetric === key ? 'var(--blue-subtle)' : 'var(--bg-tertiary)',
                  color: activeMetric === key ? 'var(--blue-primary)' : 'var(--text-muted)',
                  border: activeMetric === key ? '1px solid var(--blue-border)' : '1px solid transparent'
                }}
              >
                {metricConfigs[key].label.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Hover Status Box */}
          <div style={{ height: '24px', fontSize: '0.78rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>
            {hoveredPoint ? (
              <span>
                <strong>{hoveredPoint.year}:</strong> {hoveredPoint[activeMetric]} {currentCfg.unit} • Unemployment: {hoveredPoint.unemploymentRate}%
              </span>
            ) : (
              <span style={{ color: 'var(--text-muted)' }}>
                Hover over data points to inspect verified annual readings
              </span>
            )}
          </div>

          {/* Render SVG chart */}
          {renderLineChart()}

          {/* Source Attribution footer */}
          <div style={{ marginTop: '14px', paddingTop: '10px', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
            <span><strong>Source:</strong> {currentCfg.source}</span>
            <span>Annual Harmonized Observations</span>
          </div>
        </div>

        {/* Structural Radar & Sectoral Share */}
        <div className="card" style={{ padding: '24px' }}>
          <div className="card-header">
            <div>
              <div className="card-title">
                <Layers size={18} color="var(--teal-primary)" />
                <span>Structural Dimensions & Sectoral Share</span>
              </div>
              <div className="card-subtitle">
                Cross-layer integration of People, Infrastructure, Satellite, and Industry
              </div>
            </div>
          </div>

          {/* 6-Axis Radar Spider Diagram */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
            {renderRadarChart()}
          </div>

          {/* Sectoral Breakdown GVA Bar */}
          <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '14px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', fontWeight: 700, marginBottom: '6px' }}>
              <span>Gross Value Added (GVA) by Sector:</span>
              <span>100% Total Output</span>
            </div>

            {/* Stacked Progress Bar */}
            <div style={{ display: 'flex', height: '14px', borderRadius: 'var(--radius-full)', overflow: 'hidden', marginBottom: '10px' }}>
              <div
                style={{ width: `${region.indicators.gvaShare.manufacturing}%`, background: 'var(--blue-primary)' }}
                title={`Manufacturing: ${region.indicators.gvaShare.manufacturing}%`}
              />
              <div
                style={{ width: `${region.indicators.gvaShare.services}%`, background: 'var(--teal-primary)' }}
                title={`Services: ${region.indicators.gvaShare.services}%`}
              />
              <div
                style={{ width: `${region.indicators.gvaShare.agriculture}%`, background: 'var(--orange-warning)' }}
                title={`Agriculture: ${region.indicators.gvaShare.agriculture}%`}
              />
            </div>

            {/* Legend */}
            <div style={{ display: 'flex', justifyContent: 'space-around', fontSize: '0.74rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '2px', background: 'var(--blue-primary)' }}></span>
                <span>Manufacturing: <strong>{region.indicators.gvaShare.manufacturing}%</strong></span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '2px', background: 'var(--teal-primary)' }}></span>
                <span>Services: <strong>{region.indicators.gvaShare.services}%</strong></span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '2px', background: 'var(--orange-warning)' }}></span>
                <span>Agri: <strong>{region.indicators.gvaShare.agriculture}%</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
