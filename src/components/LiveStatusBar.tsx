import React from 'react';
import { RegionData } from '../types';
import { Database, Clock, ShieldCheck, MapPin, RefreshCw, AlertCircle } from 'lucide-react';

interface LiveStatusBarProps {
  region: RegionData;
  datasetsCount: number;
  lastRefresh: string;
  isRefreshing: boolean;
  onTriggerRefresh: () => void;
}

export const LiveStatusBar: React.FC<LiveStatusBarProps> = ({
  region,
  datasetsCount,
  lastRefresh,
  isRefreshing,
  onTriggerRefresh
}) => {
  const isDemo = region.dataProvenance === 'CALIBRATED_DEMO';

  return (
    <aside 
      aria-label="Live data status banner"
      style={{
      background: 'var(--bg-secondary)',
      borderBottom: '1px solid var(--border-subtle)',
      padding: '8px 32px',
      fontSize: '0.78rem',
      color: 'var(--text-secondary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '12px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '18px', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span className="pulse-dot"></span>
          <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>DATA PIPELINE ACTIVE:</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <MapPin size={14} color="var(--blue-primary)" />
          <span>Geography: <strong>{region.name}, {region.state} ({region.type.toUpperCase()})</strong></span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <Database size={14} color="var(--teal-primary)" />
          <span>Connected Datasets: <strong>{datasetsCount} Active Sources</strong></span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <Clock size={14} color="var(--text-muted)" />
          <span>Latest Observation: <strong>{region.lastUpdated}</strong></span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <ShieldCheck size={14} color="var(--green-success)" />
          <span>Pipeline Status: <strong>{lastRefresh}</strong></span>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        {isDemo ? (
          <span className="badge-demo" title="This region uses calibrated model demonstration data">
            <AlertCircle size={13} />
            DEMO DATA — ILLUSTRATIVE, NOT AN OFFICIAL STATISTIC
          </span>
        ) : (
          <span className="badge-verified" title="Ingested from MoSPI PLFS, World Bank VIIRS, and OpenStreetMap">
            <ShieldCheck size={13} />
            VERIFIED OFFICIAL & GEOSPATIAL DATASET
          </span>
        )}

        <button
          onClick={onTriggerRefresh}
          disabled={isRefreshing}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            fontSize: '0.75rem',
            padding: '3px 8px',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-subtle)',
            background: 'var(--bg-tertiary)',
            color: 'var(--text-primary)',
            cursor: isRefreshing ? 'wait' : 'pointer'
          }}
          title="Trigger ingestion pipeline validation"
        >
          <RefreshCw size={12} className={isRefreshing ? 'spin-anim' : ''} />
          {isRefreshing ? 'Syncing...' : 'Sync Data'}
        </button>
      </div>
    </aside>
  );
};
