import React, { useState } from 'react';
import { RegionData } from '../types';
import { 
  TrendingUp, 
  TrendingDown, 
  Sparkles, 
  Activity, 
  Scale, 
  Users, 
  Briefcase, 
  Truck, 
  GraduationCap, 
  Moon, 
  Info,
  HelpCircle
} from 'lucide-react';

interface KpiCardsGridProps {
  region: RegionData;
  onNavigateToTab: (tab: string) => void;
}

export const KpiCardsGrid: React.FC<KpiCardsGridProps> = ({ region, onNavigateToTab }) => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  // Helper sparkline generator
  const renderSparkline = (data: number[], color: string) => {
    if (!data || data.length < 2) return null;
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min === 0 ? 1 : max - min;
    const width = 80;
    const height = 28;
    const points = data
      .map((val, idx) => {
        const x = (idx / (data.length - 1)) * width;
        const y = height - ((val - min) / range) * (height - 6) - 3;
        return `${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join(' ');

    return (
      <svg width={width} height={height} style={{ overflow: 'visible' }}>
        <polyline
          fill="none"
          stroke={color}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          points={points}
        />
        <circle
          cx={(width).toString()}
          cy={(height - ((data[data.length - 1] - min) / range) * (height - 6) - 3).toString()}
          r="3"
          fill={color}
        />
      </svg>
    );
  };

  const cards = [
    {
      id: 'potential',
      title: 'Economic Potential Index',
      value: `${region.potentialIndex.toFixed(1)}`,
      unit: '/ 100',
      subtitle: 'Upper quartile regional resource endowment',
      delta: '+2.4 pts YoY',
      isPositive: true,
      sparklineData: [81, 82.5, 83.1, 84.0, 85.2, 86.4],
      color: 'var(--blue-primary)',
      icon: Sparkles,
      period: '2024 Benchmark',
      source: 'Composite: Demographic, Spatial & Infrastructure Capital',
      definition: 'Composite model estimating maximum sustainable gross value output given working population, spatial access, and asset endowment.',
      targetTab: 'opportunity_gap'
    },
    {
      id: 'observed',
      title: 'Observed Economic Activity',
      value: `${region.observedActivityIndex.toFixed(1)}`,
      unit: '/ 100',
      subtitle: 'Current realized economic output index',
      delta: '+3.1% YoY',
      isPositive: true,
      sparklineData: [50, 52.3, 53.8, 55.0, 56.8, 58.2],
      color: 'var(--teal-primary)',
      icon: Activity,
      period: '2024 Actual',
      source: 'MoSPI GVA, Enterprise Udyam & Electricity Consumption',
      definition: 'Empirical index capturing current registered business revenues, formal jobs, and energy radiance.',
      targetTab: 'dashboard'
    },
    {
      id: 'gap',
      title: 'Economic Opportunity Gap',
      value: `${region.opportunityGap.toFixed(1)}`,
      unit: 'pts',
      subtitle: region.opportunityStatus === 'HIGH_POTENTIAL_BOTTLENECK' 
        ? 'High Potential Unlocked Opportunity' 
        : region.opportunityStatus === 'HIGH_ACTIVITY_MATURE'
        ? 'Mature High-Efficiency Cluster'
        : 'Balanced Growth Cluster',
      delta: '-1.8 pts (Narrowing)',
      isPositive: true, // Narrowing gap is good
      sparklineData: [34.0, 33.2, 31.8, 30.5, 29.1, 28.2],
      color: region.opportunityGap > 20 ? 'var(--orange-warning)' : 'var(--blue-primary)',
      icon: Scale,
      period: '2024 Net Gap',
      source: 'EconLens Diagnostic Algorithm',
      definition: 'The calculated discrepancy between a region’s innate economic capacity and its observed economic throughput: Potential − Observed.',
      targetTab: 'opportunity_gap'
    },
    {
      id: 'labour',
      title: 'Employment & Labour Participation',
      value: `${region.indicators.lfpr.toFixed(1)}%`,
      unit: 'LFPR',
      subtitle: `Unemployment: ${region.indicators.unemploymentRate}% • Youth: ${region.indicators.youthUnemployment}%`,
      delta: '+1.2% LFPR YoY',
      isPositive: true,
      sparklineData: [51.2, 52.0, 52.8, 53.5, 54.1, 54.8],
      color: 'var(--navy-light)',
      icon: Users,
      period: 'PLFS 2023-2024',
      source: 'MoSPI Periodic Labour Force Survey',
      definition: 'Share of working-age population (15-59) either employed or actively seeking employment, with youth-cohort disaggregation.',
      targetTab: 'labour_skills'
    },
    {
      id: 'business',
      title: 'Business & Industrial Density',
      value: `${region.indicators.msmeDensity}`,
      unit: 'units / 10k pop',
      subtitle: `${region.indicators.activeEnterprises.toLocaleString()} active formal enterprises`,
      delta: '+6.8% YoY',
      isPositive: true,
      sparklineData: [210, 218, 225, 232, 239, 245],
      color: 'var(--purple-accent)',
      icon: Briefcase,
      period: '2024 Q3 Registry',
      source: 'Ministry of MSME / Udyam Database',
      definition: 'Number of active micro, small, and medium manufacturing and service enterprises per 10,000 residents.',
      targetTab: 'business_agri'
    },
    {
      id: 'infrastructure',
      title: 'Infrastructure & Freight Access',
      value: `${(region.indicators.transportAccessIndex * 100).toFixed(0)}%`,
      unit: 'Score',
      subtitle: `Roads: ${region.indicators.roadDensity} km/100km² • Port: ${region.indicators.portDistanceKm} km`,
      delta: 'Transit Friction: 1.28x',
      isPositive: false,
      sparklineData: [62, 63, 65, 66, 67, 68],
      color: 'var(--orange-warning)',
      icon: Truck,
      period: 'OSM 2024 Live GIS',
      source: 'OpenStreetMap Network Topology & MoRTH',
      definition: 'Composite spatial accessibility index measuring highway proximity, inter-modal terminal travel time, and port freight friction.',
      targetTab: 'geospatial'
    },
    {
      id: 'skills',
      title: 'Skill-Demand Mismatch Index',
      value: `${region.indicators.skillMismatchIndex.toFixed(0)}%`,
      unit: 'Gap',
      subtitle: 'Critical shortage in Automation & EV tech',
      delta: '+3.4% gap expansion',
      isPositive: false,
      sparklineData: [32, 35, 37, 39, 41, 42],
      color: 'var(--red-critical)',
      icon: GraduationCap,
      period: '2024 Employer Audit',
      source: 'Employer Chamber Filings & PLFS Skills',
      definition: 'Measures structural variance between vocational skill qualifications produced and employer hiring requisitions in local clusters.',
      targetTab: 'labour_skills'
    },
    {
      id: 'trend',
      title: 'Economic Radiance Trend (VIIRS)',
      value: `${region.indicators.nighttimeRadiance.toFixed(1)}`,
      unit: 'nW/cm²/sr',
      subtitle: `Annual GVA Growth: +${region.indicators.economicGrowthYoY}%`,
      delta: '+4.5% Radiance YoY',
      isPositive: true,
      sparklineData: [28.4, 30.2, 26.5, 31.1, 33.7, 36.8],
      color: '#38BDF8',
      icon: Moon,
      period: 'VIIRS Aug 2024',
      source: 'NASA / NOAA Black Marble Satellite Feed',
      definition: 'Mean calibrated nighttime satellite radiance emissions, acting as an unbiased spatial proxy for electrification, urbanization, and factory activity.',
      targetTab: 'geospatial'
    }
  ];

  return (
    <div style={{ marginBottom: '32px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
        <div>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>
            Core Economic Health KPIs — {region.name}
          </h2>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            Empirical measurements, normalized indices, and historical trend trajectories for the selected geography
          </p>
        </div>
        <span style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>
          Click any card to inspect methodology & evidence deep-dive
        </span>
      </div>

      <div className="grid-4">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.id}
              className="card"
              onClick={() => onNavigateToTab(card.targetTab)}
              style={{
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '18px 20px',
                position: 'relative'
              }}
            >
              <div>
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px', marginBottom: '12px' }}>
                  <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-secondary)' }}>
                    {card.title}
                  </span>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--bg-tertiary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: card.color
                    }}
                  >
                    <Icon size={17} />
                  </div>
                </div>

                {/* Primary Metric Value */}
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '6px' }}>
                  <span style={{ fontSize: '1.9rem', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text-primary)' }}>
                    {card.value}
                  </span>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                    {card.unit}
                  </span>
                </div>

                <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginBottom: '12px' }}>
                  {card.subtitle}
                </div>
              </div>

              {/* Sparkline & Trend footer */}
              <div style={{ paddingTop: '10px', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.74rem', fontWeight: 700, color: card.isPositive ? 'var(--green-success)' : 'var(--orange-warning)' }}>
                  {card.isPositive ? <TrendingUp size={13} /> : <TrendingDown size={13} />}
                  <span>{card.delta}</span>
                </div>

                <div>
                  {renderSparkline(card.sparklineData, card.color)}
                </div>
              </div>

              {/* Metadata definition info pill */}
              <div style={{ marginTop: '8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                <span>{card.period}</span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveTooltip(activeTooltip === card.id ? null : card.id);
                  }}
                  style={{ display: 'flex', alignItems: 'center', gap: '3px', color: 'var(--blue-primary)', fontWeight: 600 }}
                  title="View definition & source"
                >
                  <HelpCircle size={11} />
                  <span>Method</span>
                </button>
              </div>

              {/* Tooltip Overlay */}
              {activeTooltip === card.id && (
                <div
                  style={{
                    position: 'absolute',
                    bottom: '105%',
                    left: '10px',
                    right: '10px',
                    background: 'var(--bg-elevated)',
                    border: '1px solid var(--border-strong)',
                    borderRadius: 'var(--radius-md)',
                    padding: '12px',
                    boxShadow: 'var(--shadow-xl)',
                    zIndex: 20,
                    fontSize: '0.74rem',
                    color: 'var(--text-primary)'
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div style={{ fontWeight: 700, color: 'var(--blue-primary)', marginBottom: '4px' }}>
                    {card.title} Methodology
                  </div>
                  <p style={{ marginBottom: '6px' }}>{card.definition}</p>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.7rem' }}>
                    <strong>Source:</strong> {card.source}
                  </div>
                  <button
                    onClick={() => setActiveTooltip(null)}
                    style={{ position: 'absolute', top: '6px', right: '8px', color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: 700 }}
                  >
                    ✕
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
