import React, { useState } from 'react';
import { RegionData } from '../types';
import { 
  Building2, 
  Tractor, 
  TrendingUp, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  Truck, 
  Coins, 
  Layers, 
  Warehouse, 
  Sun,
  Info
} from 'lucide-react';

interface BusinessAgriViewProps {
  region: RegionData;
  onNavigateToTab: (tab: string) => void;
}

export const BusinessAgriView: React.FC<BusinessAgriViewProps> = ({ region, onNavigateToTab }) => {
  const [activeSubTab, setActiveSubTab] = useState<'business' | 'agriculture' | 'investment'>('business');

  return (
    <div style={{ marginBottom: '48px' }}>
      {/* Title Header */}
      <div style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
          <span className="badge-demo" style={{ background: 'var(--teal-subtle)', color: 'var(--teal-primary)', borderColor: 'var(--teal-accent)' }}>
            SECTORAL INTELLIGENCE
          </span>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
            Udyam MSME Registry + Agri-Marketing & Logistics Audit
          </span>
        </div>

        <h1 style={{ fontSize: '1.8rem', fontWeight: 800 }}>
          Business, Agriculture & Regional Investment Intelligence
        </h1>
        <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', maxWidth: '960px' }}>
          Comprehensive sectoral diagnostics for <strong>{region.name}</strong>: evaluating manufacturing clusters, 
          rural agricultural value-chain gaps, and capital investment risk-return profiles.
        </p>
      </div>

      {/* Sub-tab Switcher */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '12px' }}>
        <button
          onClick={() => setActiveSubTab('business')}
          className={`btn-secondary ${activeSubTab === 'business' ? 'active' : ''}`}
          style={{
            background: activeSubTab === 'business' ? 'var(--blue-primary)' : 'var(--bg-secondary)',
            color: activeSubTab === 'business' ? 'white' : 'var(--text-primary)',
            borderColor: activeSubTab === 'business' ? 'var(--blue-primary)' : 'var(--border-strong)'
          }}
        >
          <Building2 size={16} />
          <span>Manufacturing & MSME Clusters</span>
        </button>

        <button
          onClick={() => setActiveSubTab('agriculture')}
          className={`btn-secondary ${activeSubTab === 'agriculture' ? 'active' : ''}`}
          style={{
            background: activeSubTab === 'agriculture' ? 'var(--teal-primary)' : 'var(--bg-secondary)',
            color: activeSubTab === 'agriculture' ? 'white' : 'var(--text-primary)',
            borderColor: activeSubTab === 'agriculture' ? 'var(--teal-primary)' : 'var(--border-strong)'
          }}
        >
          <Tractor size={16} />
          <span>Agriculture & Agro-Processing Value Chain</span>
        </button>

        <button
          onClick={() => setActiveSubTab('investment')}
          className={`btn-secondary ${activeSubTab === 'investment' ? 'active' : ''}`}
          style={{
            background: activeSubTab === 'investment' ? 'var(--navy-primary)' : 'var(--bg-secondary)',
            color: activeSubTab === 'investment' ? 'white' : 'var(--text-primary)',
            borderColor: activeSubTab === 'investment' ? 'var(--navy-primary)' : 'var(--border-strong)'
          }}
        >
          <Coins size={16} />
          <span>Regional Investment Research</span>
        </button>
      </div>

      {/* Tab 1: Business & Industry */}
      {activeSubTab === 'business' && (
        <div>
          <div className="grid-3" style={{ marginBottom: '24px' }}>
            <div className="card" style={{ padding: '20px' }}>
              <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>Registered Enterprises</span>
              <strong style={{ fontSize: '1.6rem', color: 'var(--blue-primary)', display: 'block', marginTop: '4px' }}>
                {region.indicators.activeEnterprises.toLocaleString()}
              </strong>
              <div style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                MSME Density: {region.indicators.msmeDensity} per 10k residents
              </div>
            </div>

            <div className="card" style={{ padding: '20px' }}>
              <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>Manufacturing GVA Share</span>
              <strong style={{ fontSize: '1.6rem', color: 'var(--teal-primary)', display: 'block', marginTop: '4px' }}>
                {region.indicators.gvaShare.manufacturing}%
              </strong>
              <div style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                High industrial concentration in engineering & casting
              </div>
            </div>

            <div className="card" style={{ padding: '20px' }}>
              <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>Logistics Overhead Friction</span>
              <strong style={{ fontSize: '1.6rem', color: 'var(--orange-warning)', display: 'block', marginTop: '4px' }}>
                {region.indicators.freightLogisticsIndex}x
              </strong>
              <div style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                Port transit takes {region.indicators.portDistanceKm} km road haulage
              </div>
            </div>
          </div>

          <div className="card" style={{ padding: '24px', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '12px' }}>
              Industrial Cluster Profile & Supply-Chain Linkages
            </h3>
            <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>
              {region.name} possesses one of Southern India's densest mechanical engineering ecosystems. 
              Over 60% of domestic agricultural pumps and 40% of automotive castings in Tamil Nadu originate in this district.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              <div style={{ background: 'var(--bg-tertiary)', padding: '16px', borderRadius: 'var(--radius-md)' }}>
                <strong style={{ fontSize: '0.86rem', color: 'var(--text-primary)', display: 'block', marginBottom: '4px' }}>
                  Core Anchor Sectors
                </strong>
                <ul style={{ paddingLeft: '16px', fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <li>Pumps, Compressors & Agricultural Motors (CODISSIA cluster)</li>
                  <li>Grey Iron & Spheroidal Graphite (SG) Foundries</li>
                  <li>Automotive Tier-2 & Tier-3 Machined Castings</li>
                  <li>Textile Spindles & Weaving Automation Parts</li>
                </ul>
              </div>

              <div style={{ background: 'var(--bg-tertiary)', padding: '16px', borderRadius: 'var(--radius-md)' }}>
                <strong style={{ fontSize: '0.86rem', color: 'var(--orange-warning)', display: 'block', marginBottom: '4px' }}>
                  Identified Value-Chain Gaps
                </strong>
                <ul style={{ paddingLeft: '16px', fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <li>Absence of local certified testing labs for aerospace/defense AS-9100 specs</li>
                  <li>High exposure to pig iron and steel scrap spot market inflation</li>
                  <li>Lagging adoption of automated robotics due to lack of local integrators</li>
                  <li>Inland dry-port friction requiring multi-day container dwell times</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Agriculture */}
      {activeSubTab === 'agriculture' && (
        <div>
          <div className="grid-3" style={{ marginBottom: '24px' }}>
            <div className="card" style={{ padding: '20px' }}>
              <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>Agri Productivity Yield</span>
              <strong style={{ fontSize: '1.6rem', color: 'var(--green-success)', display: 'block', marginTop: '4px' }}>
                {region.indicators.agriculturalProductivity} t/ha
              </strong>
              <div style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                Fertile Western Ghats foothills & Noyyal basin
              </div>
            </div>

            <div className="card" style={{ padding: '20px' }}>
              <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>Cold Storage Deficit Gap</span>
              <strong style={{ fontSize: '1.6rem', color: 'var(--red-critical)', display: 'block', marginTop: '4px' }}>
                {region.indicators.coldStorageGapPercent}%
              </strong>
              <div style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                High post-harvest loss in Pollachi coconut & spices
              </div>
            </div>

            <div className="card" style={{ padding: '20px' }}>
              <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>Agricultural GVA Share</span>
              <strong style={{ fontSize: '1.6rem', color: 'var(--teal-primary)', display: 'block', marginTop: '4px' }}>
                {region.indicators.gvaShare.agriculture}%
              </strong>
              <div style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                High-value horticulture and perennial plantation crops
              </div>
            </div>
          </div>

          <div className="card" style={{ padding: '24px' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '12px' }}>
              Rural Value-Chain Bottlenecks & Processing Opportunities
            </h3>
            <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>
              While {region.name} is famous for engineering, the southern taluks (Pollachi, Anaimalai, Kinathukadavu) 
              form Asia's premier coconut belt. However, primary produce is sold raw with minimal decentralized value addition.
            </p>

            <div style={{ background: 'var(--bg-tertiary)', padding: '16px', borderRadius: 'var(--radius-md)', marginBottom: '16px' }}>
              <h4 style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px' }}>
                Strategic Agro-Industrial Interventions Under Investigation:
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px', fontSize: '0.8rem' }}>
                <div style={{ background: 'var(--bg-secondary)', padding: '12px', borderRadius: 'var(--radius-sm)' }}>
                  <strong>🥥 Coconut Value Addition:</strong> Processing raw husk into coir geotextiles and activated carbon; packaging virgin coconut oil (VCO) for export.
                </div>
                <div style={{ background: 'var(--bg-secondary)', padding: '12px', borderRadius: 'var(--radius-sm)' }}>
                  <strong>❄️ Decentralized Packhouses:</strong> 50-tonne solar-powered cold stores deployed at FPO aggregation hubs to smooth seasonal mandi gluts.
                </div>
                <div style={{ background: 'var(--bg-secondary)', padding: '12px', borderRadius: 'var(--radius-sm)' }}>
                  <strong>✈️ Air Cargo Cold Feeder:</strong> Direct perishable air freight lane from Coimbatore International Airport to Middle Eastern markets.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Regional Investment Research */}
      {activeSubTab === 'investment' && (
        <div className="card" style={{ padding: '24px' }}>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '12px' }}>
            Regional Investment Radar & Risk Assessment
          </h3>
          <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>
            Multi-dimensional investment climate scorecard evaluated for institutional capital, corporate site selectors, and infrastructure funds.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginBottom: '20px' }}>
            <div style={{ background: 'var(--bg-tertiary)', padding: '14px', borderRadius: 'var(--radius-md)' }}>
              <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>Human Capital Supply</div>
              <strong style={{ fontSize: '1.1rem', color: 'var(--green-success)' }}>High (Score: 88/100)</strong>
              <p style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                45+ engineering colleges; deep technical polytechnic tradition.
              </p>
            </div>

            <div style={{ background: 'var(--bg-tertiary)', padding: '14px', borderRadius: 'var(--radius-md)' }}>
              <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>Utility & Power Reliability</div>
              <strong style={{ fontSize: '1.1rem', color: 'var(--blue-primary)' }}>Very High (Score: 92/100)</strong>
              <p style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                22.8 hrs average continuous industrial feeder availability.
              </p>
            </div>

            <div style={{ background: 'var(--bg-tertiary)', padding: '14px', borderRadius: 'var(--radius-md)' }}>
              <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>Freight & Port Connectivity</div>
              <strong style={{ fontSize: '1.1rem', color: 'var(--orange-warning)' }}>Moderate (Score: 68/100)</strong>
              <p style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                Distance to coastal ports creates 18-22% logistics friction drag.
              </p>
            </div>

            <div style={{ background: 'var(--bg-tertiary)', padding: '14px', borderRadius: 'var(--radius-md)' }}>
              <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>Digital & 5G Readiness</div>
              <strong style={{ fontSize: '1.1rem', color: 'var(--teal-primary)' }}>High (Score: 82/100)</strong>
              <p style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                78.4% broadband optical fiber coverage across urban blocks.
              </p>
            </div>
          </div>

          <div style={{ background: 'var(--blue-subtle)', border: '1px solid var(--blue-border)', borderRadius: 'var(--radius-md)', padding: '12px 16px', fontSize: '0.74rem', color: 'var(--text-secondary)' }}>
            <strong>Disclaimer (Section 11):</strong> EconLens AI does not guarantee investment returns or recommend speculative financial positions. Indicators represent empirical diagnostic evaluations of regional economic fundamentals.
          </div>
        </div>
      )}
    </div>
  );
};
