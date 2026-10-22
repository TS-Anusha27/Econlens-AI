import React, { useState } from 'react';
import { REGIONS_DATA } from '../data/regionsData';
import { RegionData } from '../types';
import { 
  GitCompare, 
  Download, 
  ArrowRight, 
  Layers, 
  Scale, 
  TrendingUp, 
  TrendingDown, 
  Check, 
  Plus, 
  Trash2,
  SlidersHorizontal
} from 'lucide-react';

interface CompareRegionsViewProps {
  currentRegion: RegionData;
  onSelectRegion: (id: string) => void;
}

export const CompareRegionsView: React.FC<CompareRegionsViewProps> = ({
  currentRegion,
  onSelectRegion
}) => {
  const allRegions = Object.values(REGIONS_DATA);
  const [selectedIds, setSelectedIds] = useState<string[]>([currentRegion.id, 'tiruppur', 'pune']);
  const [sortKey, setSortKey] = useState<string>('opportunityGap');

  const handleToggleRegion = (id: string) => {
    if (selectedIds.includes(id)) {
      if (selectedIds.length > 1) {
        setSelectedIds(selectedIds.filter(i => i !== id));
      }
    } else {
      if (selectedIds.length < 4) {
        setSelectedIds([...selectedIds, id]);
      }
    }
  };

  const comparedRegions = selectedIds.map(id => REGIONS_DATA[id]).filter(Boolean);

  // Download comparative table CSV
  const handleExportCsv = () => {
    const headers = ['Metric', ...comparedRegions.map(r => `${r.name}_${r.state}`)];
    const metrics = [
      ['Potential Index', ...comparedRegions.map(r => r.potentialIndex.toFixed(1))],
      ['Observed Activity Index', ...comparedRegions.map(r => r.observedActivityIndex.toFixed(1))],
      ['Opportunity Gap Points', ...comparedRegions.map(r => r.opportunityGap.toFixed(1))],
      ['Population (Lakhs)', ...comparedRegions.map(r => r.population)],
      ['Working Age Pop (%)', ...comparedRegions.map(r => r.workingAgePercent)],
      ['LFPR (%)', ...comparedRegions.map(r => r.indicators.lfpr)],
      ['Unemployment Rate (%)', ...comparedRegions.map(r => r.indicators.unemploymentRate)],
      ['Youth Unemployment (%)', ...comparedRegions.map(r => r.indicators.youthUnemployment)],
      ['MSME Density (per 10k)', ...comparedRegions.map(r => r.indicators.msmeDensity)],
      ['Transport Accessibility', ...comparedRegions.map(r => `${(r.indicators.transportAccessIndex * 100).toFixed(0)}%`)],
      ['Port Distance (km)', ...comparedRegions.map(r => r.indicators.portDistanceKm)],
      ['Skill Mismatch Index (%)', ...comparedRegions.map(r => r.indicators.skillMismatchIndex)],
      ['Nighttime Radiance (nW)', ...comparedRegions.map(r => r.indicators.nighttimeRadiance)],
    ];

    const csvRows = [headers.join(','), ...metrics.map(m => m.join(','))];
    const blob = new Blob([csvRows.join('\n')], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `EconLens_Regional_Comparison_${Date.now()}.csv`;
    a.click();
  };

  return (
    <div style={{ marginBottom: '48px' }}>
      {/* Title Header */}
      <div style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
          <span className="badge-demo" style={{ background: 'var(--blue-subtle)', color: 'var(--blue-primary)', borderColor: 'var(--blue-border)' }}>
            MULTI-REGIONAL BENCHMARKING
          </span>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
            Cross-District Capability & Outcome Synthesis (Section 15)
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 800 }}>
              Discover & Compare Regional Opportunities
            </h1>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', maxWidth: '960px' }}>
              Side-by-side comparative diagnostics across economic potential, logistics friction, skill mismatches, 
              and realized output to discover high-capacity growth zones.
            </p>
          </div>

          <button
            onClick={handleExportCsv}
            className="btn-secondary"
            style={{ padding: '8px 16px', fontSize: '0.82rem' }}
          >
            <Download size={15} />
            <span>Export Comparison CSV</span>
          </button>
        </div>
      </div>

      {/* Region Selection Chips */}
      <div className="card" style={{ padding: '18px 20px', marginBottom: '28px' }}>
        <div style={{ fontSize: '0.76rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '10px', textTransform: 'uppercase' }}>
          Select 2 to 4 Regions to Compare (Active: {comparedRegions.length} selected):
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {allRegions.map((r) => {
            const isChecked = selectedIds.includes(r.id);
            return (
              <button
                key={r.id}
                onClick={() => handleToggleRegion(r.id)}
                style={{
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: isChecked ? 'var(--blue-primary)' : 'var(--bg-tertiary)',
                  color: isChecked ? 'white' : 'var(--text-secondary)',
                  border: isChecked ? '1px solid var(--blue-primary)' : '1px solid var(--border-subtle)',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)'
                }}
              >
                {isChecked && <Check size={13} />}
                <span>{r.name}</span>
                <span style={{ fontSize: '0.7rem', opacity: 0.8 }}>({r.state})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Comparative Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${comparedRegions.length}, minmax(240px, 1fr))`, gap: '16px', marginBottom: '32px', overflowX: 'auto' }}>
        {comparedRegions.map((r) => {
          const isCurrent = r.id === currentRegion.id;
          return (
            <div
              key={r.id}
              className="card"
              style={{
                padding: '20px',
                borderTop: isCurrent ? '4px solid var(--blue-primary)' : '4px solid var(--border-strong)',
                background: isCurrent ? 'radial-gradient(circle at 100% 0%, var(--blue-subtle) 0%, var(--bg-secondary) 100%)' : 'var(--bg-secondary)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                <span className="badge-info" style={{ fontSize: '0.68rem' }}>
                  {r.state}
                </span>
                {isCurrent && (
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--blue-primary)' }}>
                    ACTIVE WORKSPACE
                  </span>
                )}
              </div>

              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '4px' }}>
                {r.name}
              </h3>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '14px' }}>
                {r.opportunityStatus.replace(/_/g, ' ')}
              </div>

              {/* Big KPI Trio */}
              <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border-subtle)', paddingTop: '10px', marginBottom: '14px' }}>
                <div>
                  <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', display: 'block' }}>Potential</span>
                  <strong style={{ fontSize: '1.1rem', color: 'var(--blue-primary)' }}>{r.potentialIndex.toFixed(1)}</strong>
                </div>
                <div>
                  <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', display: 'block' }}>Observed</span>
                  <strong style={{ fontSize: '1.1rem', color: 'var(--teal-primary)' }}>{r.observedActivityIndex.toFixed(1)}</strong>
                </div>
                <div>
                  <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', display: 'block' }}>Net Gap</span>
                  <strong style={{ fontSize: '1.1rem', color: r.opportunityGap > 20 ? 'var(--orange-warning)' : 'var(--green-success)' }}>
                    {r.opportunityGap.toFixed(1)}
                  </strong>
                </div>
              </div>

              <button
                onClick={() => onSelectRegion(r.id)}
                className="btn-secondary"
                style={{ width: '100%', justifyContent: 'center', fontSize: '0.76rem', padding: '6px' }}
              >
                <span>Select for Deep-Dive</span>
              </button>
            </div>
          );
        })}
      </div>

      {/* Side-by-Side Detailed Metrics Matrix */}
      <div className="card" style={{ padding: '24px' }}>
        <div className="card-header">
          <div className="card-title">
            <Scale size={18} color="var(--blue-primary)" />
            <span>Side-by-Side Granular Indicator Matrix</span>
          </div>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.82rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--border-strong)', textAlign: 'left', color: 'var(--text-muted)' }}>
                <th style={{ padding: '12px', minWidth: '220px' }}>Indicator / Domain</th>
                {comparedRegions.map(r => (
                  <th key={r.id} style={{ padding: '12px', minWidth: '160px' }}>
                    {r.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                <td style={{ padding: '10px 12px', fontWeight: 600 }}>Economic Opportunity Gap</td>
                {comparedRegions.map(r => (
                  <td key={r.id} style={{ padding: '10px 12px', fontWeight: 800, color: r.opportunityGap > 20 ? 'var(--orange-warning)' : 'var(--green-success)' }}>
                    {r.opportunityGap.toFixed(1)} pts
                  </td>
                ))}
              </tr>

              <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                <td style={{ padding: '10px 12px', fontWeight: 600 }}>Working Age Population (15-59)</td>
                {comparedRegions.map(r => (
                  <td key={r.id} style={{ padding: '10px 12px' }}>
                    {r.workingAgePercent}%
                  </td>
                ))}
              </tr>

              <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                <td style={{ padding: '10px 12px', fontWeight: 600 }}>Labour Force Participation (LFPR)</td>
                {comparedRegions.map(r => (
                  <td key={r.id} style={{ padding: '10px 12px' }}>
                    {r.indicators.lfpr}%
                  </td>
                ))}
              </tr>

              <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                <td style={{ padding: '10px 12px', fontWeight: 600 }}>Youth Unemployment Rate</td>
                {comparedRegions.map(r => (
                  <td key={r.id} style={{ padding: '10px 12px', color: 'var(--orange-warning)', fontWeight: 600 }}>
                    {r.indicators.youthUnemployment}%
                  </td>
                ))}
              </tr>

              <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                <td style={{ padding: '10px 12px', fontWeight: 600 }}>MSME Enterprise Density</td>
                {comparedRegions.map(r => (
                  <td key={r.id} style={{ padding: '10px 12px' }}>
                    {r.indicators.msmeDensity} / 10k
                  </td>
                ))}
              </tr>

              <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                <td style={{ padding: '10px 12px', fontWeight: 600 }}>Transport Accessibility Score</td>
                {comparedRegions.map(r => (
                  <td key={r.id} style={{ padding: '10px 12px' }}>
                    {(r.indicators.transportAccessIndex * 100).toFixed(0)}%
                  </td>
                ))}
              </tr>

              <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                <td style={{ padding: '10px 12px', fontWeight: 600 }}>Port Haulage Distance</td>
                {comparedRegions.map(r => (
                  <td key={r.id} style={{ padding: '10px 12px' }}>
                    {r.indicators.portDistanceKm} km
                  </td>
                ))}
              </tr>

              <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                <td style={{ padding: '10px 12px', fontWeight: 600 }}>Skill Mismatch Deficit Index</td>
                {comparedRegions.map(r => (
                  <td key={r.id} style={{ padding: '10px 12px', color: 'var(--red-critical)', fontWeight: 700 }}>
                    {r.indicators.skillMismatchIndex}%
                  </td>
                ))}
              </tr>

              <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                <td style={{ padding: '10px 12px', fontWeight: 600 }}>VIIRS Nighttime Radiance</td>
                {comparedRegions.map(r => (
                  <td key={r.id} style={{ padding: '10px 12px', color: '#0284C7', fontWeight: 700 }}>
                    {r.indicators.nighttimeRadiance} nW
                  </td>
                ))}
              </tr>

              <tr>
                <td style={{ padding: '10px 12px', fontWeight: 600 }}>Primary Constraint Isolated</td>
                {comparedRegions.map(r => (
                  <td key={r.id} style={{ padding: '10px 12px', fontSize: '0.76rem', color: 'var(--text-secondary)' }}>
                    {r.bottlenecks[0]?.name.split('&')[0]}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
