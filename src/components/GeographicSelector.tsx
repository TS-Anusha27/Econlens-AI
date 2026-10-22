import React from 'react';
import { REGIONS_DATA } from '../data/regionsData';
import { RegionData } from '../types';
import { 
  MapPin, 
  RotateCcw, 
  GitCompare, 
  ChevronDown
} from 'lucide-react';

interface GeographicSelectorProps {
  selectedRegion: RegionData;
  onSelectRegion: (regionId: string) => void;
  selectedSubRegion: string | null;
  onSelectSubRegion: (sub: string | null) => void;
  onNavigateToCompare: () => void;
  onResetFilters: () => void;
}

export const GeographicSelector: React.FC<GeographicSelectorProps> = ({
  selectedRegion,
  onSelectRegion,
  selectedSubRegion,
  onSelectSubRegion,
  onNavigateToCompare,
  onResetFilters,
}) => {
  const regionsList = Object.values(REGIONS_DATA);

  return (
    <div 
      className="card" 
      style={{ 
        padding: '14px 20px', 
        marginBottom: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}
    >
      {/* Top Row: Active District + Dropdown + Actions */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '0.84rem', fontWeight: 600 }}>
            <MapPin size={16} color="var(--blue-primary)" />
            <span>Select District:</span>
          </div>

          <div style={{ position: 'relative', display: 'inline-block' }}>
            <select
              value={selectedRegion.id}
              onChange={(e) => {
                onSelectRegion(e.target.value);
                onSelectSubRegion(null);
              }}
              aria-label="Select district"
              style={{
                appearance: 'none',
                WebkitAppearance: 'none',
                padding: '6px 32px 6px 14px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--blue-border)',
                background: 'var(--blue-subtle)',
                color: 'var(--blue-primary)',
                fontWeight: 700,
                fontSize: '0.92rem',
                cursor: 'pointer',
                outline: 'none'
              }}
            >
              {regionsList.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.name}, {r.state}
                </option>
              ))}
            </select>
            <ChevronDown 
              size={14} 
              color="var(--blue-primary)" 
              style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} 
            />
          </div>

          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            Population: <strong>{selectedRegion.population} Lakhs</strong> • State: <strong>{selectedRegion.state}</strong>
          </span>
        </div>

        {/* Quick action buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            onClick={onNavigateToCompare}
            className="btn-secondary"
            style={{ padding: '6px 12px', fontSize: '0.8rem', gap: '6px' }}
            title="Compare this district with other regions"
          >
            <GitCompare size={14} />
            <span>Compare District</span>
          </button>

          {selectedRegion.id !== 'coimbatore' && (
            <button
              onClick={onResetFilters}
              className="btn-secondary"
              style={{ padding: '6px 10px', fontSize: '0.8rem', gap: '4px' }}
              title="Reset to default benchmark"
            >
              <RotateCcw size={13} />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

      {/* Quick Switch Pills */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap', paddingTop: '4px', borderTop: '1px solid var(--border-subtle)' }}>
        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginRight: '4px', fontWeight: 600 }}>
          Quick Jump:
        </span>
        {regionsList.map((r) => {
          const isSelected = r.id === selectedRegion.id;
          return (
            <button
              key={r.id}
              onClick={() => {
                onSelectRegion(r.id);
                onSelectSubRegion(null);
              }}
              style={{
                padding: '4px 10px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.76rem',
                fontWeight: isSelected ? 700 : 500,
                border: isSelected ? '1px solid var(--blue-primary)' : '1px solid var(--border-subtle)',
                background: isSelected ? 'var(--blue-primary)' : 'var(--bg-tertiary)',
                color: isSelected ? '#FFFFFF' : 'var(--text-secondary)',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)'
              }}
            >
              {r.name}
            </button>
          );
        })}
      </div>

      {/* Sub-regions (Taluks/Blocks) if available */}
      {selectedRegion.localSubRegions && selectedRegion.localSubRegions.length > 0 && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap', fontSize: '0.74rem' }}>
          <span style={{ color: 'var(--text-muted)' }}>Focus Block:</span>
          <button
            onClick={() => onSelectSubRegion(null)}
            style={{
              padding: '2px 8px',
              borderRadius: 'var(--radius-sm)',
              border: selectedSubRegion === null ? '1px solid var(--teal-primary)' : '1px solid transparent',
              background: selectedSubRegion === null ? 'var(--teal-subtle)' : 'transparent',
              color: selectedSubRegion === null ? 'var(--teal-primary)' : 'var(--text-muted)',
              cursor: 'pointer',
              fontWeight: selectedSubRegion === null ? 700 : 500
            }}
          >
            All Blocks (District Average)
          </button>
          {selectedRegion.localSubRegions.slice(0, 5).map((sr) => (
            <button
              key={sr}
              onClick={() => onSelectSubRegion(sr)}
              style={{
                padding: '2px 8px',
                borderRadius: 'var(--radius-sm)',
                border: selectedSubRegion === sr ? '1px solid var(--teal-primary)' : '1px solid transparent',
                background: selectedSubRegion === sr ? 'var(--teal-subtle)' : 'transparent',
                color: selectedSubRegion === sr ? 'var(--teal-primary)' : 'var(--text-muted)',
                cursor: 'pointer',
                fontWeight: selectedSubRegion === sr ? 700 : 500
              }}
            >
              {sr}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
