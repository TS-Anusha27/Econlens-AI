import React, { useState } from 'react';
import { RegionData, Bottleneck } from '../types';
import { 
  AlertTriangle, 
  ArrowRight, 
  CheckCircle2, 
  Building,
  GraduationCap,
  Truck,
  Tractor,
  Wifi,
  Sparkles
} from 'lucide-react';

interface BottleneckDiagnosisViewProps {
  region: RegionData;
  onNavigateToTab: (tab: string) => void;
}

export const BottleneckDiagnosisView: React.FC<BottleneckDiagnosisViewProps> = ({
  region,
  onNavigateToTab,
}) => {
  const [selectedBottleneck, setSelectedBottleneck] = useState<Bottleneck | null>(region.bottlenecks[0] || null);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('ALL');

  const categories = [
    { id: 'ALL', label: 'All Issues' },
    { id: 'INFRASTRUCTURE', label: 'Transport & Infrastructure' },
    { id: 'SKILLS', label: 'Skills & Talent' },
    { id: 'ECOSYSTEM', label: 'Business Climate' },
    { id: 'AGRI_LOGISTICS', label: 'Agriculture & Food' }
  ];

  const filteredBottlenecks = region.bottlenecks.filter(b => 
    activeCategoryFilter === 'ALL' || b.category === activeCategoryFilter
  );

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'INFRASTRUCTURE': return <Truck size={16} />;
      case 'SKILLS': return <GraduationCap size={16} />;
      case 'AGRI_LOGISTICS': return <Tractor size={16} />;
      default: return <Building size={16} />;
    }
  };

  return (
    <div style={{ marginBottom: '40px' }}>
      {/* Title Header */}
      <div style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <span 
            style={{ 
              fontSize: '0.74rem', 
              fontWeight: 700, 
              padding: '3px 10px', 
              borderRadius: 'var(--radius-full)', 
              background: 'var(--orange-subtle)', 
              color: 'var(--orange-warning)',
              border: '1px solid var(--orange-border)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <AlertTriangle size={13} />
            ROOT-CAUSE DIAGNOSIS
          </span>
          <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            Growth Barriers for <strong>{region.name}, {region.state}</strong>
          </span>
        </div>

        <h1 style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
          What is holding {region.name} back?
        </h1>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', maxWidth: '850px', lineHeight: '1.5' }}>
          Our models pinpoint the top structural bottlenecks causing {region.name}'s 
          <strong> {region.opportunityGap.toFixed(1)} point growth gap</strong>, along with actionable solutions.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
        {categories.map((cat) => {
          const isActive = activeCategoryFilter === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategoryFilter(cat.id)}
              style={{
                padding: '6px 14px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.82rem',
                fontWeight: isActive ? 700 : 500,
                border: isActive ? '1px solid var(--blue-primary)' : '1px solid var(--border-subtle)',
                background: isActive ? 'var(--blue-primary)' : 'var(--bg-secondary)',
                color: isActive ? '#FFFFFF' : 'var(--text-secondary)',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)'
              }}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Main Grid: Left List + Right Detail Inspector */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '24px', alignItems: 'start' }}>
        {/* Left List of Bottlenecks */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '4px' }}>
            Identified Barriers ({filteredBottlenecks.length})
          </h3>

          {filteredBottlenecks.map((btn) => {
            const isSelected = selectedBottleneck?.id === btn.id;
            return (
              <div
                key={btn.id}
                onClick={() => setSelectedBottleneck(btn)}
                style={{
                  cursor: 'pointer',
                  padding: '16px 18px',
                  borderRadius: 'var(--radius-lg)',
                  background: isSelected ? 'var(--blue-subtle)' : 'var(--bg-secondary)',
                  border: isSelected ? '2px solid var(--blue-primary)' : '1px solid var(--border-subtle)',
                  boxShadow: isSelected ? 'var(--shadow-md)' : 'none',
                  transition: 'all var(--transition-fast)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span
                      style={{
                        padding: '2px 8px',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        background: btn.severity === 'HIGH' ? 'var(--red-subtle)' : 'var(--orange-subtle)',
                        color: btn.severity === 'HIGH' ? 'var(--red-critical)' : 'var(--orange-warning)'
                      }}
                    >
                      {btn.severity === 'HIGH' ? 'HIGH PRIORITY' : 'MODERATE'}
                    </span>
                    <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                      {btn.category.replace('_', ' ')}
                    </span>
                  </div>
                  <strong style={{ fontSize: '0.95rem', color: 'var(--blue-primary)' }}>
                    {btn.shapImportance}% Impact
                  </strong>
                </div>

                <div style={{ fontSize: '0.94rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px' }}>
                  {btn.name}
                </div>

                {/* Impact Bar */}
                <div style={{ height: '6px', borderRadius: '3px', background: 'var(--border-subtle)', overflow: 'hidden', marginBottom: '8px' }}>
                  <div
                    style={{
                      width: `${btn.shapImportance}%`,
                      height: '100%',
                      background: btn.severity === 'HIGH' 
                        ? 'linear-gradient(90deg, #F97316 0%, #EF4444 100%)' 
                        : 'linear-gradient(90deg, #0284C7 0%, #2563EB 100%)',
                      borderRadius: '3px'
                    }}
                  />
                </div>

                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.4', margin: 0 }}>
                  {btn.economicConsequence}
                </p>
              </div>
            );
          })}
        </div>

        {/* Right Detail Card for Selected Bottleneck */}
        {selectedBottleneck && (
          <div 
            className="card" 
            style={{ 
              padding: '24px', 
              position: 'sticky', 
              top: '80px',
              borderTop: '4px solid var(--blue-primary)' 
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <span 
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '6px',
                  fontSize: '0.76rem', 
                  fontWeight: 700, 
                  color: 'var(--blue-primary)',
                  background: 'var(--blue-subtle)',
                  padding: '3px 10px',
                  borderRadius: 'var(--radius-sm)'
                }}
              >
                {getCategoryIcon(selectedBottleneck.category)}
                {selectedBottleneck.category.replace('_', ' ')}
              </span>

              <span style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                Accounts for <strong>{selectedBottleneck.shapImportance}%</strong> of total gap
              </span>
            </div>

            <h2 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '14px', color: 'var(--text-primary)' }}>
              {selectedBottleneck.name}
            </h2>

            {/* Clear Explanation */}
            <div style={{ background: 'var(--bg-tertiary)', padding: '14px 16px', borderRadius: 'var(--radius-md)', marginBottom: '16px' }}>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '4px' }}>
                WHAT THE DATA SHOWS:
              </div>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-primary)', lineHeight: '1.5', margin: 0 }}>
                {selectedBottleneck.evidenceMetric}
              </p>
            </div>

            {/* Economic Consequence */}
            <div style={{ marginBottom: '18px' }}>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--orange-warning)', marginBottom: '4px' }}>
                WHY IT MATTERS:
              </div>
              <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0 }}>
                {selectedBottleneck.economicConsequence}
              </p>
            </div>

            {/* Actionable Solutions */}
            <div style={{ marginBottom: '22px' }}>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--green-success)', marginBottom: '8px' }}>
                RECOMMENDED ACTION PLAN:
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {selectedBottleneck.possibleInterventions.map((inv, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.83rem', color: 'var(--text-primary)' }}>
                    <CheckCircle2 size={16} color="var(--green-success)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{inv}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Test in Simulator CTA */}
            <div style={{ paddingTop: '16px', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Test policy fixes for this issue:
              </span>
              <button
                onClick={() => onNavigateToTab('simulator')}
                className="btn-primary"
                style={{ padding: '8px 16px', fontSize: '0.84rem', gap: '6px' }}
              >
                <span>Simulate in What-If Tool</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
