import React, { useState } from 'react';
import { REGIONS_DATA } from '../data/regionsData';
import { DATASET_REGISTRY } from '../data/datasetsRegistry';
import { 
  Search, 
  MapPin, 
  Database, 
  AlertTriangle, 
  X, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectRegion: (id: string) => void;
  onNavigateToTab: (tab: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectRegion,
  onNavigateToTab
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const regions = Object.values(REGIONS_DATA);

  const matchedRegions = regions.filter(r => 
    r.name.toLowerCase().includes(query.toLowerCase()) ||
    r.state.toLowerCase().includes(query.toLowerCase())
  );

  const matchedBottlenecks = regions.flatMap(r => 
    r.bottlenecks.map(b => ({ ...b, regionName: r.name, regionId: r.id }))
  ).filter(b => 
    b.name.toLowerCase().includes(query.toLowerCase()) ||
    b.evidenceMetric.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 4);

  const matchedDatasets = DATASET_REGISTRY.filter(d =>
    d.name.toLowerCase().includes(query.toLowerCase()) ||
    d.publisher.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 3);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-card" 
        onClick={(e) => e.stopPropagation()} 
        style={{ maxWidth: '640px', padding: '0' }}
      >
        {/* Search Bar Input */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px 20px', borderBottom: '1px solid var(--border-subtle)' }}>
          <Search size={20} color="var(--blue-primary)" />
          <input
            autoFocus
            type="text"
            placeholder="Search districts, bottlenecks, skills, or data sources..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              background: 'transparent',
              fontSize: '1rem',
              fontWeight: 600
            }}
          />
          <button className="btn-icon" onClick={onClose} style={{ width: '28px', height: '28px' }}>
            <X size={16} />
          </button>
        </div>

        {/* Results List */}
        <div style={{ maxHeight: '420px', overflowY: 'auto', padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {/* Regions */}
          <div>
            <div style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '8px' }}>
              Districts & Geographies
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {matchedRegions.map(r => (
                <div
                  key={r.id}
                  onClick={() => {
                    onSelectRegion(r.id);
                    onNavigateToTab('explore');
                    onClose();
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '8px 12px',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-tertiary)',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <MapPin size={16} color="var(--blue-primary)" />
                    <span style={{ fontWeight: 700, fontSize: '0.86rem' }}>{r.name}</span>
                    <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>({r.state})</span>
                  </div>
                  <span style={{ fontSize: '0.76rem', fontWeight: 700, color: 'var(--orange-warning)' }}>
                    Gap: {r.opportunityGap.toFixed(1)} pts
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottlenecks */}
          {matchedBottlenecks.length > 0 && (
            <div>
              <div style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '8px' }}>
                Diagnosed Bottlenecks
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {matchedBottlenecks.map(b => (
                  <div
                    key={b.id}
                    onClick={() => {
                      onSelectRegion(b.regionId);
                      onNavigateToTab('bottlenecks');
                      onClose();
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '8px 12px',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--bg-tertiary)',
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <AlertTriangle size={15} color="var(--orange-warning)" />
                      <span style={{ fontSize: '0.82rem', fontWeight: 600 }}>{b.name}</span>
                    </div>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{b.regionName}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Datasets */}
          {matchedDatasets.length > 0 && (
            <div>
              <div style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '8px' }}>
                Connected Datasets
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {matchedDatasets.map(d => (
                  <div
                    key={d.id}
                    onClick={() => {
                      onNavigateToTab('methodology');
                      onClose();
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '8px 12px',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--bg-tertiary)',
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Database size={15} color="var(--teal-primary)" />
                      <span style={{ fontSize: '0.82rem', fontWeight: 600 }}>{d.name}</span>
                    </div>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{d.category}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
