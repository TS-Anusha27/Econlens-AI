import React, { useState } from 'react';
import { DATASET_REGISTRY } from '../data/datasetsRegistry';
import { DatasetMetadata } from '../types';
import { 
  Database, 
  ExternalLink, 
  ShieldCheck, 
  AlertCircle, 
  Search, 
  UploadCloud, 
  FileCheck, 
  BookOpen, 
  Scale, 
  Sparkles,
  Layers,
  Cpu,
  Clock
} from 'lucide-react';

interface DataMethodologyViewProps {
  onOpenIngest: () => void;
}

export const DataMethodologyView: React.FC<DataMethodologyViewProps> = ({ onOpenIngest }) => {
  const [activeTab, setActiveTab] = useState<'registry' | 'methodology' | 'glossary'>('registry');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const filteredDatasets = DATASET_REGISTRY.filter(d => {
    const matchesCat = selectedCategory === 'ALL' || d.category === selectedCategory;
    const matchesSearch = d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          d.publisher.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div style={{ marginBottom: '48px' }}>
      {/* Title Header */}
      <div style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
          <span className="badge-demo" style={{ background: 'var(--green-subtle)', color: 'var(--green-success)', borderColor: 'var(--green-border)' }}>
            DATA INTEGRITY & TRUST
          </span>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
            Transparent Provenance, Open Standards & Mathematical Documentation (Section 14)
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 800 }}>
              Data Sources, Provenance & Methodology Centre
            </h1>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', maxWidth: '960px' }}>
              Complete audit trails for all connected socioeconomic surveys, satellite sensors, and GIS infrastructure graphs. 
              Review normalization formulas, SHAP explainability mechanics, and data-quality confidence scoring.
            </p>
          </div>

          <button
            onClick={onOpenIngest}
            className="btn-primary"
            style={{ padding: '8px 16px', fontSize: '0.82rem' }}
          >
            <UploadCloud size={16} />
            <span>Upload Custom Dataset / CSV</span>
          </button>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '12px' }}>
        <button
          onClick={() => setActiveTab('registry')}
          className={`btn-secondary ${activeTab === 'registry' ? 'active' : ''}`}
          style={{
            background: activeTab === 'registry' ? 'var(--blue-primary)' : 'var(--bg-secondary)',
            color: activeTab === 'registry' ? 'white' : 'var(--text-primary)',
            borderColor: activeTab === 'registry' ? 'var(--blue-primary)' : 'var(--border-strong)'
          }}
        >
          <Database size={16} />
          <span>Dataset Registry ({DATASET_REGISTRY.length} Connected)</span>
        </button>

        <button
          onClick={() => setActiveTab('methodology')}
          className={`btn-secondary ${activeTab === 'methodology' ? 'active' : ''}`}
          style={{
            background: activeTab === 'methodology' ? 'var(--navy-primary)' : 'var(--bg-secondary)',
            color: activeTab === 'methodology' ? 'white' : 'var(--text-primary)',
            borderColor: activeTab === 'methodology' ? 'var(--navy-primary)' : 'var(--border-strong)'
          }}
        >
          <Scale size={16} />
          <span>Index Formulations & XAI Modeling</span>
        </button>

        <button
          onClick={() => setActiveTab('glossary')}
          className={`btn-secondary ${activeTab === 'glossary' ? 'active' : ''}`}
          style={{
            background: activeTab === 'glossary' ? 'var(--teal-primary)' : 'var(--bg-secondary)',
            color: activeTab === 'glossary' ? 'white' : 'var(--text-primary)',
            borderColor: activeTab === 'glossary' ? 'var(--teal-primary)' : 'var(--border-strong)'
          }}
        >
          <BookOpen size={16} />
          <span>Indicator Glossary & Standards</span>
        </button>
      </div>

      {/* TAB 1: DATASET REGISTRY */}
      {activeTab === 'registry' && (
        <div>
          {/* Controls */}
          <div className="card" style={{ padding: '16px 20px', marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '0.76rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Filter:</span>
                {['ALL', 'LABOUR', 'SATELLITE', 'INFRASTRUCTURE', 'ECONOMIC', 'AGRICULTURE', 'GEOSPATIAL'].map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    style={{
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.74rem',
                      fontWeight: 600,
                      background: selectedCategory === cat ? 'var(--blue-subtle)' : 'var(--bg-tertiary)',
                      color: selectedCategory === cat ? 'var(--blue-primary)' : 'var(--text-secondary)',
                      border: selectedCategory === cat ? '1px solid var(--blue-border)' : '1px solid transparent',
                      cursor: 'pointer'
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  placeholder="Search dataset or publisher..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    padding: '6px 12px 6px 30px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-strong)',
                    fontSize: '0.78rem',
                    background: 'var(--bg-secondary)',
                    width: '240px'
                  }}
                />
                <Search size={14} color="var(--text-muted)" style={{ position: 'absolute', left: '10px', top: '9px' }} />
              </div>
            </div>
          </div>

          {/* Datasets Table */}
          <div className="card" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {filteredDatasets.map((ds) => (
                <div
                  key={ds.id}
                  style={{
                    background: 'var(--bg-tertiary)',
                    borderRadius: 'var(--radius-md)',
                    padding: '18px 20px',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '8px' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                        <span className="badge-verified" style={{ fontSize: '0.68rem' }}>
                          {ds.category}
                        </span>
                        <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                          Latest Observation: <strong>{ds.latestObservation}</strong>
                        </span>
                        <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                          Update: <strong>{ds.updateFrequency}</strong>
                        </span>
                      </div>
                      <h3 style={{ fontSize: '1.15rem', fontWeight: 800 }}>
                        {ds.name}
                      </h3>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                        <strong>Publisher:</strong> {ds.publisher}
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ textAlign: 'right' }}>
                        <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', display: 'block' }}>Confidence Score</span>
                        <strong style={{ fontSize: '1.15rem', color: 'var(--green-success)' }}>{ds.confidenceScore}%</strong>
                      </div>
                      <a
                        href={ds.url}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-secondary"
                        style={{ padding: '6px 12px', fontSize: '0.76rem' }}
                      >
                        <span>Official Portal</span>
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px', marginTop: '12px', fontSize: '0.78rem' }}>
                    <div style={{ background: 'var(--bg-secondary)', padding: '10px 12px', borderRadius: 'var(--radius-sm)' }}>
                      <strong>Processing & Harmonization Pipeline:</strong><br />
                      <span style={{ color: 'var(--text-secondary)' }}>{ds.processingSteps}</span>
                    </div>
                    <div style={{ background: 'var(--bg-secondary)', padding: '10px 12px', borderRadius: 'var(--radius-sm)' }}>
                      <strong>Documented Limitations & Scope:</strong><br />
                      <span style={{ color: 'var(--orange-warning)' }}>{ds.limitations}</span>
                    </div>
                  </div>

                  <div style={{ marginTop: '10px', fontSize: '0.72rem', color: 'var(--text-muted)', display: 'flex', justifyContent: 'space-between' }}>
                    <span>License: <strong>{ds.license}</strong></span>
                    <span>Coverage: <strong>{ds.coverage}</strong></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: METHODOLOGY & FORMULATIONS */}
      {activeTab === 'methodology' && (
        <div className="card" style={{ padding: '28px' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px' }}>
            EconLens Mathematical Architecture & Index Formulations
          </h2>
          <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>
            All composite indices are normalized via standard statistical z-score and Min-Max scaling [0, 100].
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ background: 'var(--bg-tertiary)', padding: '20px', borderRadius: 'var(--radius-lg)' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--blue-primary)', marginBottom: '6px' }}>
                1. Economic Potential Index (EPI)
              </h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '10px' }}>
                Quantifies the innate structural productive capacity of a geographic boundary assuming frictionless factor mobility.
              </p>
              <div style={{ background: 'var(--bg-secondary)', padding: '12px', borderRadius: 'var(--radius-md)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-primary)', marginBottom: '10px' }}>
                EPI_i = 0.35 × Demo_i + 0.25 × Infra_i + 0.20 × Agri_i + 0.20 × IndustrialBase_i
              </div>
              <ul style={{ fontSize: '0.78rem', color: 'var(--text-muted)', paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                <li><strong>Demo_i:</strong> Working age population ratio (15-59) weighted by tertiary educational attainment (MoSPI PLFS).</li>
                <li><strong>Infra_i:</strong> Road density (OSM km/100km²), industrial electricity hours, and broadband optical fiber penetration.</li>
                <li><strong>Agri_i:</strong> Agro-climatic yield per hectare and soil fertility index (IMD / Ministry of Agriculture).</li>
                <li><strong>IndustrialBase_i:</strong> Existing registered MSME density per 10k residents (Udyam filings).</li>
              </ul>
            </div>

            <div style={{ background: 'var(--bg-tertiary)', padding: '20px', borderRadius: 'var(--radius-lg)' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--teal-primary)', marginBottom: '6px' }}>
                2. Observed Economic Activity Index (OEA)
              </h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '10px' }}>
                Measures current empirical output across administrative filings and satellite observation.
              </p>
              <div style={{ background: 'var(--bg-secondary)', padding: '12px', borderRadius: 'var(--radius-md)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-primary)', marginBottom: '10px' }}>
                OEA_i = 0.40 × GVA_i + 0.30 × FormalPayroll_i + 0.30 × VIIRS_Radiance_i
              </div>
              <ul style={{ fontSize: '0.78rem', color: 'var(--text-muted)', paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                <li><strong>GVA_i:</strong> Real District Gross Value Added across secondary & tertiary sectors.</li>
                <li><strong>FormalPayroll_i:</strong> EPFO & ESIC active contributing payroll employees per 1,000 workforce.</li>
                <li><strong>VIIRS_Radiance_i:</strong> Calibrated mean annual nocturnal radiance emissions ($nW/cm^2/sr$) masking gas flares.</li>
              </ul>
            </div>

            <div style={{ background: 'var(--bg-tertiary)', padding: '20px', borderRadius: 'var(--radius-lg)' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--orange-warning)', marginBottom: '6px' }}>
                3. The Economic Opportunity Gap
              </h3>
              <div style={{ background: 'var(--bg-secondary)', padding: '12px', borderRadius: 'var(--radius-md)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-primary)', marginBottom: '10px' }}>
                Opportunity_Gap_i = EPI_i − OEA_i
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                A positive gap indicates that observable local assets exceed current realization due to active structural bottlenecks.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: GLOSSARY */}
      {activeTab === 'glossary' && (
        <div className="card" style={{ padding: '28px' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '18px' }}>
            Indicator Glossary & Standard Units
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
            <div style={{ background: 'var(--bg-tertiary)', padding: '14px', borderRadius: 'var(--radius-md)' }}>
              <strong style={{ fontSize: '0.9rem', color: 'var(--blue-primary)' }}>LFPR (Labour Force Participation Rate)</strong>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                Defined by MoSPI as percentage of persons in the labour force (working or seeking work) in the population. Unit: %.
              </p>
            </div>

            <div style={{ background: 'var(--bg-tertiary)', padding: '14px', borderRadius: 'var(--radius-md)' }}>
              <strong style={{ fontSize: '0.9rem', color: 'var(--blue-primary)' }}>VIIRS Nighttime Radiance</strong>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                Top-of-atmosphere radiance detected by the Day/Night Band sensor on NOAA-20 satellite. Unit: nanowatts per square centimeter per steradian ($nW/cm^2/sr$).
              </p>
            </div>

            <div style={{ background: 'var(--bg-tertiary)', padding: '14px', borderRadius: 'var(--radius-md)' }}>
              <strong style={{ fontSize: '0.9rem', color: 'var(--blue-primary)' }}>SHAP (Shapley Additive exPlanations)</strong>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                Game-theoretic approach to explain model predictions by calculating each feature’s marginal contribution across all subset permutations.
              </p>
            </div>

            <div style={{ background: 'var(--bg-tertiary)', padding: '14px', borderRadius: 'var(--radius-md)' }}>
              <strong style={{ fontSize: '0.9rem', color: 'var(--blue-primary)' }}>MSME Density</strong>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                Active registered Udyam micro, small, and medium manufacturing and service establishments per 10,000 population.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
