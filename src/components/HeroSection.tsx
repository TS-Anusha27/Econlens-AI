import React from 'react';
import { RegionData } from '../types';
import { 
  Sparkles, 
  MapPin, 
  Compass, 
  AlertTriangle, 
  SlidersHorizontal, 
  ArrowRight,
  TrendingUp,
  Activity,
  CheckCircle2,
  FileCheck2
} from 'lucide-react';

interface HeroSectionProps {
  region: RegionData;
  activeStage?: number; // 1 to 5
  onSelectStage?: (stageIndex: number) => void;
  onNavigateToTab: (tab: string) => void;
  onOpenAi: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  region,
  activeStage = 1,
  onSelectStage,
  onNavigateToTab,
  onOpenAi
}) => {
  const stages = [
    { num: 1, title: 'Select Location', desc: 'Pinpoint area' },
    { num: 2, title: 'Understand Economy', desc: 'Current drivers' },
    { num: 3, title: 'Identify Problems', desc: 'Root bottlenecks' },
    { num: 4, title: 'Explore Solutions', desc: 'Action roadmap' },
    { num: 5, title: 'Simulate Future', desc: 'What-if scenarios' },
  ];

  return (
    <div style={{ marginBottom: '28px' }}>
      {/* Main Hero Card */}
      <div
        style={{
          borderRadius: '20px',
          background: 'linear-gradient(135deg, #FFFFFF 0%, #F0F7FF 60%, #EBF4FF 100%)',
          border: '1px solid #E2E8F0',
          padding: '36px 36px 30px',
          boxShadow: '0 4px 16px rgba(37, 99, 235, 0.05)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px', alignItems: 'center' }}>
          {/* Left Column: Simple Headline & Purpose */}
          <div>
            <div 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '6px', 
                padding: '4px 12px', 
                borderRadius: '9999px', 
                background: '#EFF6FF', 
                border: '1px solid #BFDBFE', 
                marginBottom: '16px' 
              }}
            >
              <span className="pulse-dot"></span>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#2563EB' }}>
                Economic Opportunity & Bottleneck Intelligence
              </span>
            </div>

            <h1 
              style={{ 
                fontSize: '2.3rem', 
                fontWeight: 800, 
                lineHeight: '1.2', 
                marginBottom: '14px', 
                color: '#14213D', 
                letterSpacing: '-0.025em' 
              }}
            >
              Understand Your Region. <br />
              <span style={{ color: '#2563EB' }}>
                Unlock Its Economic Potential.
              </span>
            </h1>

            <p 
              style={{ 
                fontSize: '1rem', 
                color: '#64748B', 
                lineHeight: '1.6', 
                marginBottom: '24px', 
                maxWidth: '560px' 
              }}
            >
              Explore any region, discover what's holding it back, and see how the right decisions could shape its future.
            </p>

            {/* Quick action buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <button
                onClick={() => onNavigateToTab('bottlenecks')}
                style={{
                  background: '#2563EB',
                  color: '#FFFFFF',
                  padding: '10px 22px',
                  borderRadius: '10px',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(37, 99, 235, 0.25)'
                }}
              >
                <span>View Action Plan</span>
                <ArrowRight size={15} />
              </button>

              <button
                onClick={() => onNavigateToTab('simulator')}
                style={{
                  background: '#FFFFFF',
                  color: '#14213D',
                  padding: '10px 18px',
                  borderRadius: '10px',
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  border: '1px solid #CBD5E1',
                  cursor: 'pointer'
                }}
              >
                <SlidersHorizontal size={15} color="#2563EB" />
                <span>What-If Simulator</span>
              </button>

              <button
                onClick={onOpenAi}
                style={{
                  background: '#F0FDFA',
                  color: '#0D9488',
                  padding: '10px 18px',
                  borderRadius: '10px',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  border: '1px solid #99F6E4',
                  cursor: 'pointer'
                }}
              >
                <Sparkles size={15} />
                <span>Ask AI</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Location Preview & Summary */}
          <div
            style={{
              background: '#FFFFFF',
              border: '1px solid #E2E8F0',
              borderRadius: '16px',
              padding: '24px',
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.05)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={20} color="#2563EB" />
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#14213D', lineHeight: 1.1 }}>
                    {region.name}
                  </h3>
                  <span style={{ fontSize: '0.78rem', color: '#64748B' }}>
                    {region.parentRegionId ? `${region.parentRegionId.toUpperCase()} DISTRICT, ` : ''}{region.state}, {region.country}
                  </span>
                </div>
              </div>

              <span 
                style={{ 
                  fontSize: '0.72rem', 
                  fontWeight: 700, 
                  padding: '4px 10px', 
                  borderRadius: '9999px', 
                  background: region.opportunityGap > 25 ? '#FFF7ED' : '#F0FDFA', 
                  color: region.opportunityGap > 25 ? '#F97316' : '#0D9488',
                  border: region.opportunityGap > 25 ? '1px solid #FFEDD5' : '1px solid #99F6E4'
                }}
              >
                {region.type === 'local' ? 'LOCAL AREA ANALYSIS' : 'DISTRICT ANALYSIS'}
              </span>
            </div>

            {/* Plain English Summary Snippet */}
            <div 
              style={{ 
                background: '#F8FAFC', 
                borderRadius: '12px', 
                padding: '16px', 
                marginBottom: '16px',
                border: '1px solid #E2E8F0',
                fontSize: '0.86rem',
                color: '#14213D',
                lineHeight: '1.5'
              }}
            >
              <div style={{ fontSize: '0.74rem', fontWeight: 700, color: '#2563EB', textTransform: 'uppercase', marginBottom: '4px' }}>
                Overview Assessment
              </div>
              {region.summaryText || `${region.name} displays strong underlying structural potential, but realizes only a portion of its maximum economic output due to localized bottlenecks.`}
            </div>

            {/* Gap Metric Comparison */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', textAlign: 'center' }}>
              <div style={{ background: '#EFF6FF', padding: '10px 8px', borderRadius: '10px', border: '1px solid #BFDBFE' }}>
                <div style={{ fontSize: '0.7rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>Potential</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#2563EB' }}>{region.potentialIndex.toFixed(1)}</div>
              </div>
              <div style={{ background: '#F0FDFA', padding: '10px 8px', borderRadius: '10px', border: '1px solid #99F6E4' }}>
                <div style={{ fontSize: '0.7rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>Output</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0D9488' }}>{region.observedActivityIndex.toFixed(1)}</div>
              </div>
              <div style={{ background: '#FFF7ED', padding: '10px 8px', borderRadius: '10px', border: '1px solid #FED7AA' }}>
                <div style={{ fontSize: '0.7rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>Gap</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#F97316' }}>{region.opportunityGap.toFixed(1)}</div>
              </div>
            </div>
          </div>
        </div>

        {/* 5-Stage User Journey Progress Indicator */}
        <div 
          style={{ 
            marginTop: '28px', 
            paddingTop: '20px', 
            borderTop: '1px solid rgba(226, 232, 240, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '8px',
            overflowX: 'auto',
            scrollbarWidth: 'none'
          }}
        >
          {stages.map((stage) => {
            const isActive = activeStage === stage.num;
            return (
              <button
                key={stage.num}
                onClick={() => onSelectStage && onSelectStage(stage.num)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: isActive ? '#FFFFFF' : 'transparent',
                  padding: '8px 14px',
                  borderRadius: '10px',
                  border: isActive ? '1px solid #BFDBFE' : '1px solid transparent',
                  boxShadow: isActive ? '0 2px 6px rgba(37, 99, 235, 0.08)' : 'none',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  textAlign: 'left'
                }}
              >
                <div
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: isActive ? '#2563EB' : '#E2E8F0',
                    color: isActive ? '#FFFFFF' : '#64748B',
                    fontSize: '0.76rem',
                    fontWeight: 800,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {stage.num}
                </div>
                <div>
                  <div style={{ fontSize: '0.82rem', fontWeight: isActive ? 800 : 600, color: isActive ? '#2563EB' : '#14213D' }}>
                    {stage.title}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#64748B' }}>
                    {stage.desc}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
