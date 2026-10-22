import React, { useState } from 'react';
import { REGIONS_DATA } from '../data/regionsData';
import { RegionData } from '../types';
import { 
  Scale, 
  Sparkles, 
  Activity, 
  ArrowRight, 
  AlertCircle, 
  CheckCircle2, 
  HelpCircle, 
  TrendingDown, 
  Layers, 
  Filter, 
  Download,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

interface OpportunityGapViewProps {
  region: RegionData;
  onSelectRegion: (regionId: string) => void;
  onNavigateToTab: (tab: string) => void;
}

export const OpportunityGapView: React.FC<OpportunityGapViewProps> = ({
  region,
  onSelectRegion,
  onNavigateToTab,
}) => {
  const [selectedQuadrantPoint, setSelectedQuadrantPoint] = useState<RegionData>(region);
  const allRegions = Object.values(REGIONS_DATA);

  // Quadrant classification
  const getQuadrant = (r: RegionData) => {
    const highPot = r.potentialIndex >= 80;
    const highObs = r.observedActivityIndex >= 65;
    if (highPot && highObs) return { name: 'Mature Growth Engine', color: '#10B981', desc: 'High potential & high realized throughput' };
    if (highPot && !highObs) return { name: 'Priority Opportunity Zone', color: '#EA580C', desc: 'High potential hindered by structural bottlenecks' };
    if (!highPot && highObs) return { name: 'Efficiency Outperformer', color: '#2563EB', desc: 'Moderate resources with high capital turnover' };
    return { name: 'Developing Cluster', color: '#64748B', desc: 'Foundational capacity building required' };
  };

  return (
    <div style={{ marginBottom: '48px' }}>
      {/* Title Header */}
      <div style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
          <span className="badge-demo" style={{ background: 'var(--blue-subtle)', color: 'var(--blue-primary)', borderColor: 'var(--blue-border)' }}>
            SIGNATURE METHODOLOGY
          </span>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
            BAICONF Stage 1 & 2 Framework (Slide 2 & 10)
          </span>
        </div>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 800 }}>
          The Economic Opportunity Gap Analysis
        </h1>
        <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', maxWidth: '960px' }}>
          Diagnosing the discrepancy between innate resource capacity and empirical economic throughput: 
          <strong> Potential ≠ Actual Economic Activity</strong>. Where is economic potential being lost, and why?
        </p>
      </div>

      {/* The 3-Stage Visual Pipeline Card (Slide 2 Direct Translation) */}
      <div className="card" style={{ padding: '28px', marginBottom: '32px', background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%)' }}>
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 800 }}>
            {region.name} — Same Region, Two Diverging Realities
          </h2>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            Deconstructing why a region with everything it needs to grow may still experience suppressed expansion
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', alignItems: 'stretch' }}>
          {/* Potential Column */}
          <div
            style={{
              background: 'var(--bg-secondary)',
              border: '2px solid var(--blue-border)',
              borderRadius: 'var(--radius-lg)',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Sparkles size={20} color="var(--blue-primary)" />
                <strong style={{ fontSize: '1.05rem', color: 'var(--blue-primary)' }}>Economic Potential</strong>
              </div>
              <span style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--blue-primary)' }}>
                {region.potentialIndex.toFixed(1)}
              </span>
            </div>

            <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
              The intrinsic resources and capabilities already present in the region:
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.82rem', flex: 1 }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ color: 'var(--blue-primary)', fontWeight: 800 }}>•</span>
                <span><strong>Large Working Population:</strong> {region.workingAgePercent}% aged 15-59; young, skilled technical workforce.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ color: 'var(--blue-primary)', fontWeight: 800 }}>•</span>
                <span><strong>Strong Agriculture Base:</strong> {region.indicators.agriculturalProductivity} tonnes/ha yield; fertile agro-climatic belts.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ color: 'var(--blue-primary)', fontWeight: 800 }}>•</span>
                <span><strong>Existing Industries:</strong> {region.indicators.activeEnterprises.toLocaleString()} registered enterprises; foundry, textile & pump clusters.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ color: 'var(--blue-primary)', fontWeight: 800 }}>•</span>
                <span><strong>Educated Talent Pool:</strong> {region.literacyRate}% literacy, {region.higherEduPercent}% tertiary qualification.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ color: 'var(--blue-primary)', fontWeight: 800 }}>•</span>
                <span><strong>Core Infrastructure:</strong> {region.indicators.roadDensity} km/100km² road density, {region.indicators.powerReliabilityHrs} hrs industrial power.</span>
              </li>
            </ul>
          </div>

          {/* Observed Reality Column */}
          <div
            style={{
              background: 'var(--bg-secondary)',
              border: '2px solid var(--orange-border)',
              borderRadius: 'var(--radius-lg)',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Activity size={20} color="var(--orange-warning)" />
                <strong style={{ fontSize: '1.05rem', color: 'var(--orange-warning)' }}>The Observed Reality</strong>
              </div>
              <span style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--orange-warning)' }}>
                {region.observedActivityIndex.toFixed(1)}
              </span>
            </div>

            <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
              The current realized economic throughput captured across empirical feeds:
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.82rem', flex: 1 }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ color: 'var(--orange-warning)', fontWeight: 800 }}>•</span>
                <span><strong>Low Employment Growth:</strong> Youth unemployment at {region.indicators.youthUnemployment}%; formal payroll jobs not keeping pace.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ color: 'var(--orange-warning)', fontWeight: 800 }}>•</span>
                <span><strong>Suppressed Business Margins:</strong> Raw material volatility & power tariffs dampening foundry/MSME expansion.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ color: 'var(--orange-warning)', fontWeight: 800 }}>•</span>
                <span><strong>Critical Skill Mismatch:</strong> {region.indicators.skillMismatchIndex}% vacancy friction in automation & robotics.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ color: 'var(--orange-warning)', fontWeight: 800 }}>•</span>
                <span><strong>Logistics Impedance:</strong> {region.indicators.portDistanceKm} km freight haulage; 28% higher transport friction than coastal peers.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ color: 'var(--orange-warning)', fontWeight: 800 }}>•</span>
                <span><strong>Post-Harvest Wastage:</strong> {region.indicators.coldStorageGapPercent}% cold chain deficit across rural horticulture belts.</span>
              </li>
            </ul>
          </div>

          {/* Resulting Gap Column */}
          <div
            style={{
              background: 'radial-gradient(circle at 50% 0%, rgba(234, 88, 12, 0.12) 0%, var(--bg-secondary) 100%)',
              border: '2px solid var(--border-strong)',
              borderRadius: 'var(--radius-lg)',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: 'var(--shadow-md)'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Scale size={20} color="var(--orange-warning)" />
                  <strong style={{ fontSize: '1.05rem' }}>Opportunity Gap</strong>
                </div>
                <span style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--orange-warning)' }}>
                  {region.opportunityGap.toFixed(1)} pts
                </span>
              </div>

              <div className="badge-demo" style={{ marginBottom: '14px' }}>
                STATUS: {region.opportunityStatus.replace(/_/g, ' ')}
              </div>

              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '14px' }}>
                This represents <strong>{((region.opportunityGap / region.potentialIndex) * 100).toFixed(0)}%</strong> of the region's total economic potential remaining unactivated due to identifiable structural bottlenecks.
              </p>

              <div style={{ background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-md)', padding: '12px', fontSize: '0.76rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
                <strong>Mathematical Formulation:</strong><br />
                <code>GAP = Potential_Score − Observed_Score</code><br />
                Normalized via Min-Max scale [0–100] across 700+ Indian districts.
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <button
                onClick={() => onNavigateToTab('bottlenecks')}
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', fontSize: '0.82rem' }}
              >
                <span>Diagnose Why (XAI)</span>
                <ArrowRight size={14} />
              </button>
              <button
                onClick={() => onNavigateToTab('simulator')}
                className="btn-secondary"
                style={{ width: '100%', justifyContent: 'center', fontSize: '0.82rem' }}
              >
                <span>Simulate Unlocking Gap</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive 4-Quadrant Scatter Plot & Peer Comparison */}
      <div className="card" style={{ padding: '24px', marginBottom: '32px' }}>
        <div className="card-header">
          <div>
            <div className="card-title">
              <Layers size={18} color="var(--blue-primary)" />
              <span>Regional Potential vs. Observed Activity Quadrant Matrix</span>
            </div>
            <div className="card-subtitle">
              Locating benchmark districts across the resource-throughput frontier
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', alignItems: 'center' }}>
          {/* Scatter Plot SVG */}
          <div style={{ background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-lg)', padding: '16px', position: 'relative' }}>
            <svg viewBox="0 0 420 340" width="100%" height="320">
              {/* Axes lines */}
              <line x1="50" y1="20" x2="50" y2="290" stroke="var(--border-strong)" strokeWidth="1.5" />
              <line x1="50" y1="290" x2="390" y2="290" stroke="var(--border-strong)" strokeWidth="1.5" />

              {/* Quadrant Dividers (Potential = 80, Observed = 65) */}
              {/* Map: X: 50 -> 390 is 0 -> 100; Y: 290 -> 20 is 0 -> 100 */}
              {/* X=65 => 50 + 0.65*340 = 271 */}
              {/* Y=80 => 290 - 0.80*270 = 74 */}
              <line x1="271" y1="20" x2="271" y2="290" stroke="#94A3B8" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="50" y1="74" x2="390" y2="74" stroke="#94A3B8" strokeWidth="1" strokeDasharray="3 3" />

              {/* Quadrant Labels */}
              <text x="70" y="55" fontSize="10" fontWeight="700" fill="#EA580C">
                Q2: PRIORITY OPPORTUNITY ZONE
              </text>
              <text x="280" y="55" fontSize="10" fontWeight="700" fill="#10B981">
                Q1: MATURE GROWTH ENGINE
              </text>
              <text x="70" y="270" fontSize="10" fontWeight="700" fill="#64748B">
                Q4: DEVELOPING / BASELINE
              </text>
              <text x="280" y="270" fontSize="10" fontWeight="700" fill="#2563EB">
                Q3: EFFICIENCY OUTPERFORMER
              </text>

              {/* Axis labels */}
              <text x="220" y="315" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--text-secondary)">
                Observed Economic Activity Index →
              </text>
              <text x="18" y="160" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--text-secondary)" transform="rotate(-90 18 160)">
                Economic Potential Index →
              </text>

              {/* Plot Points */}
              {allRegions.map((r) => {
                const cx = 50 + (r.observedActivityIndex / 100) * 340;
                const cy = 290 - (r.potentialIndex / 100) * 270;
                const isSelected = selectedQuadrantPoint.id === r.id;
                const isCurrent = region.id === r.id;

                return (
                  <g
                    key={r.id}
                    onClick={() => {
                      setSelectedQuadrantPoint(r);
                      onSelectRegion(r.id);
                    }}
                    style={{ cursor: 'pointer' }}
                  >
                    <circle
                      cx={cx}
                      cy={cy}
                      r={isSelected ? '9' : '6'}
                      fill={isCurrent ? '#EA580C' : isSelected ? '#2563EB' : '#3B82F6'}
                      stroke="white"
                      strokeWidth="2"
                    />
                    {isSelected && (
                      <circle
                        cx={cx}
                        cy={cy}
                        r="15"
                        fill="none"
                        stroke="#2563EB"
                        strokeWidth="1.5"
                        strokeDasharray="2 2"
                      />
                    )}
                    <text
                      x={cx + 9}
                      y={cy + 3}
                      fontSize="10"
                      fontWeight={isSelected ? '800' : '600'}
                      fill="var(--text-primary)"
                    >
                      {r.name}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Inspector Panel for Selected Point */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span className="badge-info">
                {selectedQuadrantPoint.state}
              </span>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: getQuadrant(selectedQuadrantPoint).color }}>
                {getQuadrant(selectedQuadrantPoint).name}
              </span>
            </div>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '4px' }}>
              {selectedQuadrantPoint.name}
            </h3>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
              {getQuadrant(selectedQuadrantPoint).desc}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '16px' }}>
              <div style={{ background: 'var(--bg-secondary)', padding: '10px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block' }}>Potential</span>
                <strong style={{ fontSize: '1.1rem', color: 'var(--blue-primary)' }}>{selectedQuadrantPoint.potentialIndex.toFixed(1)}</strong>
              </div>
              <div style={{ background: 'var(--bg-secondary)', padding: '10px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block' }}>Observed</span>
                <strong style={{ fontSize: '1.1rem', color: 'var(--teal-primary)' }}>{selectedQuadrantPoint.observedActivityIndex.toFixed(1)}</strong>
              </div>
              <div style={{ background: 'var(--bg-secondary)', padding: '10px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block' }}>Net Gap</span>
                <strong style={{ fontSize: '1.1rem', color: 'var(--orange-warning)' }}>{selectedQuadrantPoint.opportunityGap.toFixed(1)}</strong>
              </div>
            </div>

            <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginBottom: '16px', background: 'var(--bg-tertiary)', padding: '12px', borderRadius: 'var(--radius-md)' }}>
              <strong>Primary Diagnostic Finding:</strong><br />
              {selectedQuadrantPoint.bottlenecks[0]?.name || 'Structural supply chain constraints'}: {selectedQuadrantPoint.bottlenecks[0]?.economicConsequence}
            </div>

            <button
              onClick={() => onSelectRegion(selectedQuadrantPoint.id)}
              className="btn-primary"
              style={{ padding: '8px 16px', fontSize: '0.82rem' }}
            >
              <span>Load {selectedQuadrantPoint.name} Into Active Workspace</span>
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Peer District Benchmark Table */}
      <div className="card" style={{ padding: '24px' }}>
        <div className="card-header">
          <div>
            <div className="card-title">
              <Scale size={18} color="var(--blue-primary)" />
              <span>Cross-District Peer Benchmark Comparison</span>
            </div>
            <div className="card-subtitle">
              Evaluating regions with comparable demographic endowment but divergent economic outcomes
            </div>
          </div>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.82rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--border-strong)', textAlign: 'left', color: 'var(--text-muted)' }}>
                <th style={{ padding: '10px 12px' }}>Region & State</th>
                <th style={{ padding: '10px 12px' }}>Potential Index</th>
                <th style={{ padding: '10px 12px' }}>Observed Activity</th>
                <th style={{ padding: '10px 12px' }}>Opportunity Gap</th>
                <th style={{ padding: '10px 12px' }}>Working Age Pop</th>
                <th style={{ padding: '10px 12px' }}>MSME Density</th>
                <th style={{ padding: '10px 12px' }}>Top Bottleneck Driver</th>
                <th style={{ padding: '10px 12px' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {allRegions.map((r) => {
                const isCurrent = r.id === region.id;
                return (
                  <tr
                    key={r.id}
                    style={{
                      borderBottom: '1px solid var(--border-subtle)',
                      background: isCurrent ? 'var(--blue-subtle)' : 'transparent',
                      fontWeight: isCurrent ? 700 : 500
                    }}
                  >
                    <td style={{ padding: '12px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span>{r.name}</span>
                        {isCurrent && <span style={{ fontSize: '0.7rem', color: 'var(--blue-primary)' }}>(Active)</span>}
                      </div>
                      <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{r.state}</span>
                    </td>
                    <td style={{ padding: '12px', color: 'var(--blue-primary)', fontWeight: 700 }}>
                      {r.potentialIndex.toFixed(1)}
                    </td>
                    <td style={{ padding: '12px', color: 'var(--teal-primary)', fontWeight: 700 }}>
                      {r.observedActivityIndex.toFixed(1)}
                    </td>
                    <td style={{ padding: '12px', color: r.opportunityGap > 20 ? 'var(--orange-warning)' : 'var(--green-success)', fontWeight: 700 }}>
                      {r.opportunityGap.toFixed(1)} pts
                    </td>
                    <td style={{ padding: '12px' }}>{r.workingAgePercent}%</td>
                    <td style={{ padding: '12px' }}>{r.indicators.msmeDensity}</td>
                    <td style={{ padding: '12px', maxWidth: '220px', color: 'var(--text-secondary)' }}>
                      {r.bottlenecks[0]?.name.split('&')[0]}
                    </td>
                    <td style={{ padding: '12px' }}>
                      <button
                        onClick={() => onSelectRegion(r.id)}
                        className="btn-secondary"
                        style={{ padding: '4px 8px', fontSize: '0.72rem' }}
                      >
                        Select
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
