import React from 'react';
import { RegionData } from '../types';
import { 
  ArrowRight, 
  Sparkles, 
  AlertTriangle, 
  SlidersHorizontal, 
  MapPin,
  TrendingUp,
  CheckCircle2
} from 'lucide-react';

interface HeroSectionProps {
  region: RegionData;
  onExplore: () => void;
  onSelectRegion: (id: string) => void;
  onNavigateToTab: (tab: string) => void;
  onOpenAi: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  region,
  onNavigateToTab,
  onOpenAi
}) => {
  return (
    <div style={{ marginBottom: '32px' }}>
      {/* 1. Clean, Friendly Hero Banner */}
      <div
        style={{
          borderRadius: 'var(--radius-xl)',
          background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.08) 0%, rgba(6, 182, 212, 0.05) 50%, var(--bg-secondary) 100%)',
          border: '1px solid var(--border-subtle)',
          padding: '36px 32px',
          boxShadow: 'var(--shadow-md)',
          position: 'relative'
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', alignItems: 'center' }}>
          {/* Left Column: Clear Value Proposition */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 12px', borderRadius: 'var(--radius-full)', background: 'var(--blue-subtle)', border: '1px solid var(--blue-border)', marginBottom: '14px' }}>
              <span className="pulse-dot"></span>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--blue-primary)' }}>
                District Economic Intelligence
              </span>
            </div>

            <h1 style={{ fontSize: '2.2rem', fontWeight: 800, lineHeight: '1.2', marginBottom: '12px', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
              Every district has potential. <br />
              <span style={{ background: 'linear-gradient(135deg, var(--blue-primary) 0%, var(--teal-accent) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                See what is holding it back.
              </span>
            </h1>

            <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '24px', maxWidth: '520px' }}>
              EconLens AI analyzes demographic, satellite, and industrial data across India to show why districts fall short of their potential and how to fix it.
            </p>

            {/* Quick 3-Step Guide */}
            <div style={{ display: 'flex', gap: '18px', flexWrap: 'wrap', marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
                <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'var(--blue-primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700 }}>1</span>
                <span>Select District</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
                <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'var(--orange-warning)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700 }}>2</span>
                <span>Diagnose Bottlenecks</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
                <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'var(--green-success)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700 }}>3</span>
                <span>Simulate Solutions</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <button
                onClick={() => onNavigateToTab('bottlenecks')}
                className="btn-primary"
                style={{ padding: '10px 20px', fontSize: '0.9rem', gap: '8px' }}
              >
                <span>View {region.name}'s Bottlenecks</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={() => onNavigateToTab('simulator')}
                className="btn-secondary"
                style={{ padding: '10px 18px', fontSize: '0.9rem', gap: '8px' }}
              >
                <SlidersHorizontal size={16} />
                <span>What-If Simulator</span>
              </button>

              <button
                onClick={onOpenAi}
                className="btn-secondary"
                style={{ padding: '10px 18px', fontSize: '0.9rem', gap: '6px' }}
              >
                <Sparkles size={16} color="var(--blue-primary)" />
                <span>Ask AI</span>
              </button>
            </div>
          </div>

          {/* Right Column: Clean Active District Card */}
          <div
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)',
              padding: '22px',
              boxShadow: 'var(--shadow-md)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={18} color="var(--blue-primary)" />
                <strong style={{ fontSize: '1.15rem' }}>{region.name}, {region.state}</strong>
              </div>
              <span 
                style={{ 
                  fontSize: '0.72rem', 
                  fontWeight: 700, 
                  padding: '3px 8px', 
                  borderRadius: 'var(--radius-full)', 
                  background: 'var(--blue-subtle)', 
                  color: 'var(--blue-primary)' 
                }}
              >
                ACTIVE DISTRICT
              </span>
            </div>

            {/* Opportunity Gap Meter */}
            <div style={{ background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-md)', padding: '16px', marginBottom: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  UNLOCKED GROWTH OPPORTUNITY
                </span>
                <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--orange-warning)' }}>
                  {region.opportunityGap.toFixed(1)} pts
                </span>
              </div>

              {/* Progress split */}
              <div style={{ height: '8px', borderRadius: '4px', background: 'var(--border-subtle)', overflow: 'hidden', display: 'flex', marginBottom: '8px' }}>
                <div style={{ width: `${region.observedActivityIndex}%`, background: 'var(--teal-primary)' }} title="Current Output" />
                <div style={{ width: `${region.opportunityGap}%`, background: 'var(--orange-warning)' }} title="Untapped Opportunity" />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                <span>Current Output: <strong>{region.observedActivityIndex.toFixed(1)}/100</strong></span>
                <span>Potential Capacity: <strong>{region.potentialIndex.toFixed(1)}/100</strong></span>
              </div>
            </div>

            {/* Quick Bottlenecks Summary */}
            <div style={{ fontSize: '0.82rem', marginBottom: '16px' }}>
              <div style={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <AlertTriangle size={15} color="var(--orange-warning)" />
                <span>Main Bottlenecks Limiting Growth:</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {region.bottlenecks.slice(0, 2).map((btn) => (
                  <div 
                    key={btn.id}
                    style={{ 
                      padding: '8px 12px', 
                      borderRadius: 'var(--radius-sm)', 
                      background: 'var(--bg-primary)', 
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <span style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.8rem' }}>
                      {btn.name}
                    </span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--orange-warning)', fontWeight: 700, paddingLeft: '8px' }}>
                      {btn.shapImportance}% impact
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Fast Nav to Bottlenecks */}
            <button
              onClick={() => onNavigateToTab('bottlenecks')}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', fontSize: '0.84rem', padding: '10px' }}
            >
              <span>See How to Solve These Bottlenecks</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
