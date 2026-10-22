import React, { useState } from 'react';
import { REGIONS_DATA } from '../data/regionsData';
import { RegionData } from '../types';
import { 
  Layers, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Info, 
  MapPin, 
  Sparkles, 
  Activity, 
  Moon, 
  Truck, 
  GraduationCap, 
  AlertTriangle,
  ExternalLink,
  Search,
  CheckCircle2
} from 'lucide-react';

interface InteractiveMapProps {
  selectedRegion: RegionData;
  onSelectRegion: (regionId: string) => void;
  onNavigateToTab?: (tab: string) => void;
}

export type MapLayer = 
  | 'opportunity_gap'
  | 'potential'
  | 'observed'
  | 'nightlights'
  | 'transport'
  | 'skills'
  | 'industry'
  | 'agriculture';

export const InteractiveMap: React.FC<InteractiveMapProps> = ({
  selectedRegion,
  onSelectRegion,
  onNavigateToTab,
}) => {
  const [activeLayer, setActiveLayer] = useState<MapLayer>('opportunity_gap');
  const [mapScope, setMapScope] = useState<'tamil_nadu' | 'india'>('tamil_nadu');
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [hoveredRegion, setHoveredRegion] = useState<RegionData | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const layersList = [
    { id: 'opportunity_gap' as MapLayer, label: 'Opportunity Gap', icon: Sparkles, desc: 'Discrepancy between capacity & actual activity' },
    { id: 'potential' as MapLayer, label: 'Economic Potential', icon: Activity, desc: 'Composite resource & workforce endowment' },
    { id: 'observed' as MapLayer, label: 'Observed Activity', icon: Activity, desc: 'Current registered economic output & revenue' },
    { id: 'nightlights' as MapLayer, label: 'Satellite Nightlights', icon: Moon, desc: 'VIIRS Black Marble nocturnal radiance' },
    { id: 'transport' as MapLayer, label: 'Transport Access', icon: Truck, desc: 'OpenStreetMap highway & freight friction' },
    { id: 'skills' as MapLayer, label: 'Skill Mismatch', icon: GraduationCap, desc: 'Structural vacancy-to-qualification gap' },
  ];

  // Helper to get region value for active layer
  const getLayerValue = (r: RegionData, layer: MapLayer): { val: number; display: string } => {
    switch (layer) {
      case 'opportunity_gap':
        return { val: r.opportunityGap, display: `${r.opportunityGap.toFixed(1)} pts` };
      case 'potential':
        return { val: r.potentialIndex, display: `${r.potentialIndex.toFixed(1)}/100` };
      case 'observed':
        return { val: r.observedActivityIndex, display: `${r.observedActivityIndex.toFixed(1)}/100` };
      case 'nightlights':
        return { val: r.indicators.nighttimeRadiance, display: `${r.indicators.nighttimeRadiance} nW` };
      case 'transport':
        return { val: r.indicators.transportAccessIndex * 100, display: `${(r.indicators.transportAccessIndex * 100).toFixed(0)}%` };
      case 'skills':
        return { val: r.indicators.skillMismatchIndex, display: `${r.indicators.skillMismatchIndex}%` };
      default:
        return { val: r.opportunityGap, display: `${r.opportunityGap.toFixed(1)}` };
    }
  };

  // Helper for choropleth color scale
  const getColorForRegion = (r: RegionData, layer: MapLayer, isSelected: boolean): string => {
    const { val } = getLayerValue(r, layer);
    
    if (layer === 'opportunity_gap') {
      // High gap = orange/red warning (Coimbatore: 28.2, Eastern UP: 38, Chennai: 8.7)
      if (val > 30) return isSelected ? '#EA580C' : '#FB923C';
      if (val > 20) return isSelected ? '#F59E0B' : '#FBBF24';
      if (val > 10) return isSelected ? '#3B82F6' : '#60A5FA';
      return isSelected ? '#10B981' : '#34D399';
    }

    if (layer === 'potential') {
      if (val > 88) return isSelected ? '#1D4ED8' : '#3B82F6';
      if (val > 80) return isSelected ? '#0284C7' : '#38BDF8';
      return isSelected ? '#0D9488' : '#2DD4BF';
    }

    if (layer === 'nightlights') {
      if (val > 60) return isSelected ? '#FACC15' : '#FEF08A';
      if (val > 30) return isSelected ? '#38BDF8' : '#7DD3FC';
      return isSelected ? '#1E293B' : '#334155';
    }

    if (layer === 'skills') {
      if (val > 40) return isSelected ? '#DC2626' : '#F87171';
      if (val > 30) return isSelected ? '#EA580C' : '#FB923C';
      return isSelected ? '#10B981' : '#34D399';
    }

    // Default blue-teal
    return isSelected ? '#2563EB' : '#93C5FD';
  };

  // Tamil Nadu district SVG paths and centroids
  const tnDistricts = [
    {
      id: 'coimbatore',
      name: 'Coimbatore',
      path: 'M 140 220 L 190 200 L 225 240 L 210 300 L 150 310 L 120 270 Z',
      labelX: 165,
      labelY: 255,
      data: REGIONS_DATA['coimbatore']
    },
    {
      id: 'tiruppur',
      name: 'Tiruppur',
      path: 'M 190 200 L 245 190 L 270 250 L 250 310 L 210 300 L 225 240 Z',
      labelX: 230,
      labelY: 250,
      data: REGIONS_DATA['tiruppur']
    },
    {
      id: 'salem',
      name: 'Salem',
      path: 'M 245 140 L 320 120 L 340 180 L 290 210 L 245 190 L 250 150 Z',
      labelX: 285,
      labelY: 165,
      data: REGIONS_DATA['salem']
    },
    {
      id: 'chennai',
      name: 'Chennai',
      path: 'M 390 60 L 430 50 L 440 90 L 400 100 Z',
      labelX: 415,
      labelY: 75,
      data: REGIONS_DATA['chennai']
    },
    {
      id: 'erode',
      name: 'Erode',
      path: 'M 190 150 L 245 140 L 245 190 L 190 200 L 165 170 Z',
      labelX: 205,
      labelY: 170,
      data: REGIONS_DATA['coimbatore'] // regional peer
    },
    {
      id: 'madurai',
      name: 'Madurai',
      path: 'M 210 300 L 270 290 L 300 360 L 240 380 L 190 350 Z',
      labelX: 245,
      labelY: 340,
      data: REGIONS_DATA['coimbatore'] // regional peer
    },
    {
      id: 'tiruchirappalli',
      name: 'Tiruchirappalli',
      path: 'M 270 220 L 340 210 L 360 280 L 290 300 L 270 250 Z',
      labelX: 310,
      labelY: 255,
      data: REGIONS_DATA['tiruppur'] // regional peer
    }
  ];

  // National India regional nodes
  const indiaRegions = [
    { id: 'eastern_up', name: 'Eastern UP / Varanasi', x: 380, y: 190, data: REGIONS_DATA['eastern_up'], desc: 'Top Emerging Region (Potential 0.82)' },
    { id: 'vidarbha', name: 'Vidarbha / Nagpur', x: 310, y: 270, data: REGIONS_DATA['vidarbha'], desc: 'Central Agro-Logistics Cluster' },
    { id: 'pune', name: 'Pune Industrial Belt', x: 200, y: 310, data: REGIONS_DATA['pune'], desc: 'Automotive & Precision Cluster' },
    { id: 'bengaluru', name: 'Bengaluru Tech Hub', x: 260, y: 390, data: REGIONS_DATA['bengaluru'], desc: 'High Activity Mature Engine' },
    { id: 'coimbatore', name: 'Coimbatore Cluster (Pilot)', x: 240, y: 440, data: REGIONS_DATA['coimbatore'], desc: 'Primary Showcase Benchmark' },
    { id: 'chennai', name: 'Chennai Coastal Gateway', x: 300, y: 410, data: REGIONS_DATA['chennai'], desc: 'Port Logistics & Auto Cluster' },
  ];

  return (
    <div className="card" style={{ padding: '24px', marginBottom: '32px' }}>
      {/* Top Map Toolbar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '20px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>
              {mapScope === 'tamil_nadu' ? 'Tamil Nadu Regional Economic GIS Map' : 'India National Opportunity Hotspots Map'}
            </h2>
            <span className="badge-verified">
              <CheckCircle2 size={12} />
              Harmonized Geospatial Boundary
            </span>
          </div>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            Click any district to load local indicators, SHAP bottleneck drivers, and scenario models
          </p>
        </div>

        {/* Scope and Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          {/* Map Scope Switcher */}
          <div style={{ display: 'flex', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-md)', padding: '3px' }}>
            <button
              onClick={() => setMapScope('tamil_nadu')}
              style={{
                padding: '6px 12px',
                fontSize: '0.78rem',
                fontWeight: 700,
                borderRadius: 'var(--radius-sm)',
                background: mapScope === 'tamil_nadu' ? 'var(--bg-secondary)' : 'transparent',
                color: mapScope === 'tamil_nadu' ? 'var(--blue-primary)' : 'var(--text-muted)',
                boxShadow: mapScope === 'tamil_nadu' ? 'var(--shadow-sm)' : 'none'
              }}
            >
              Tamil Nadu (Pilot)
            </button>
            <button
              onClick={() => setMapScope('india')}
              style={{
                padding: '6px 12px',
                fontSize: '0.78rem',
                fontWeight: 700,
                borderRadius: 'var(--radius-sm)',
                background: mapScope === 'india' ? 'var(--bg-secondary)' : 'transparent',
                color: mapScope === 'india' ? 'var(--blue-primary)' : 'var(--text-muted)',
                boxShadow: mapScope === 'india' ? 'var(--shadow-sm)' : 'none'
              }}
            >
              India (National Scale)
            </button>
          </div>

          {/* Zoom controls */}
          <div style={{ display: 'flex', gap: '4px' }}>
            <button
              className="btn-icon"
              style={{ width: '32px', height: '32px' }}
              onClick={() => setZoomLevel(prev => Math.min(prev + 0.25, 2))}
              title="Zoom In"
            >
              <ZoomIn size={15} />
            </button>
            <button
              className="btn-icon"
              style={{ width: '32px', height: '32px' }}
              onClick={() => setZoomLevel(prev => Math.max(prev - 0.25, 0.75))}
              title="Zoom Out"
            >
              <ZoomOut size={15} />
            </button>
            <button
              className="btn-icon"
              style={{ width: '32px', height: '32px' }}
              onClick={() => setZoomLevel(1)}
              title="Reset View"
            >
              <RotateCcw size={15} />
            </button>
          </div>
        </div>
      </div>

      {/* Layer Selector Bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', overflowX: 'auto', paddingBottom: '12px', marginBottom: '16px', borderBottom: '1px solid var(--border-subtle)' }}>
        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>
          Layer Filter:
        </span>
        {layersList.map((layer) => {
          const Icon = layer.icon;
          const isActive = activeLayer === layer.id;
          return (
            <button
              key={layer.id}
              onClick={() => setActiveLayer(layer.id)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.78rem',
                fontWeight: 600,
                whiteSpace: 'nowrap',
                background: isActive ? 'var(--blue-primary)' : 'var(--bg-tertiary)',
                color: isActive ? 'white' : 'var(--text-secondary)',
                transition: 'all var(--transition-fast)'
              }}
              title={layer.desc}
            >
              <Icon size={14} />
              <span>{layer.label}</span>
            </button>
          );
        })}
      </div>

      {/* Main Interactive Map Canvas */}
      <div
        style={{
          background: 'radial-gradient(circle at 50% 50%, var(--bg-tertiary) 0%, var(--bg-primary) 100%)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-subtle)',
          position: 'relative',
          minHeight: '460px',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* SVG Visualization */}
        <div
          style={{
            transform: `scale(${zoomLevel})`,
            transition: 'transform 300ms ease',
            width: '100%',
            maxWidth: '680px',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          {mapScope === 'tamil_nadu' ? (
            /* Tamil Nadu Districts Choropleth */
            <svg viewBox="100 40 380 370" width="100%" height="440" style={{ overflow: 'visible' }}>
              <defs>
                <filter id="glow-selected" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#2563EB" floodOpacity="0.4" />
                </filter>
              </defs>

              {/* State subtle outline shadow */}
              <path
                d="M 120 270 L 140 220 L 190 150 L 245 140 L 320 120 L 390 60 L 440 90 L 400 100 L 360 280 L 300 360 L 240 380 L 190 350 L 120 270 Z"
                fill="none"
                stroke="var(--border-strong)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                opacity="0.6"
              />

              {/* Districts */}
              {tnDistricts.map((d) => {
                const isSelected = selectedRegion.id === d.id || (d.id === 'coimbatore' && selectedRegion.parentRegionId === 'coimbatore');
                const isHovered = hoveredRegion?.id === d.id;
                const fillColor = getColorForRegion(d.data, activeLayer, isSelected);

                return (
                  <g
                    key={d.id}
                    onClick={() => onSelectRegion(d.id)}
                    onMouseEnter={() => setHoveredRegion(d.data)}
                    onMouseLeave={() => setHoveredRegion(null)}
                    style={{ cursor: 'pointer', transition: 'all 200ms ease' }}
                  >
                    <path
                      d={d.path}
                      fill={fillColor}
                      stroke={isSelected ? '#2563EB' : 'var(--bg-secondary)'}
                      strokeWidth={isSelected ? '3.5' : '1.8'}
                      filter={isSelected ? 'url(#glow-selected)' : 'none'}
                      opacity={isHovered || isSelected ? 1 : 0.88}
                    />

                    {/* District centroid label */}
                    <text
                      x={d.labelX}
                      y={d.labelY}
                      textAnchor="middle"
                      fill={isSelected ? '#FFFFFF' : '#0F172A'}
                      fontSize={isSelected ? '12' : '10'}
                      fontWeight={isSelected ? '800' : '600'}
                      style={{ pointerEvents: 'none', textShadow: '0 1px 3px rgba(255,255,255,0.8)' }}
                    >
                      {d.name}
                    </text>
                    <text
                      x={d.labelX}
                      y={d.labelY + 13}
                      textAnchor="middle"
                      fill={isSelected ? '#DBEAFE' : '#334155'}
                      fontSize="9"
                      fontWeight="700"
                      style={{ pointerEvents: 'none' }}
                    >
                      {getLayerValue(d.data, activeLayer).display}
                    </text>
                  </g>
                );
              })}

              {/* Dedicated Centroid Pin for Pollachi (Showcase Pilot Local Area) */}
              <g
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectRegion('pollachi');
                }}
                onMouseEnter={() => setHoveredRegion(REGIONS_DATA['pollachi'] || null)}
                onMouseLeave={() => setHoveredRegion(null)}
                style={{ cursor: 'pointer' }}
              >
                <circle
                  cx="165"
                  cy="282"
                  r={selectedRegion.id === 'pollachi' ? 8 : 5}
                  fill={selectedRegion.id === 'pollachi' ? '#F97316' : '#2563EB'}
                  stroke="#FFFFFF"
                  strokeWidth="2"
                />
                <circle
                  cx="165"
                  cy="282"
                  r={selectedRegion.id === 'pollachi' ? 14 : 9}
                  fill="none"
                  stroke={selectedRegion.id === 'pollachi' ? '#F97316' : '#2563EB'}
                  strokeWidth="1"
                  strokeDasharray="2 2"
                  opacity="0.8"
                />
                <rect
                  x="176"
                  y="273"
                  width="104"
                  height="18"
                  rx="4"
                  fill="#FFFFFF"
                  stroke="#CBD5E1"
                  strokeWidth="1"
                  opacity="0.95"
                />
                <text
                  x="180"
                  y="285"
                  fill="#14213D"
                  fontSize="8.5"
                  fontWeight="700"
                >
                  📍 Pollachi (Agro Hub)
                </text>
              </g>
            </svg>
          ) : (
            /* National India Scale Regional Network Map */
            <svg viewBox="100 80 400 420" width="100%" height="440">
              {/* Generalized India outline */}
              <path
                d="M 230 110 L 290 100 L 320 140 L 370 170 L 420 180 L 390 230 L 340 290 L 310 380 L 280 440 L 250 480 L 230 430 L 180 340 L 170 260 L 190 180 Z"
                fill="var(--bg-secondary)"
                stroke="var(--border-strong)"
                strokeWidth="2"
                opacity="0.8"
              />

              {/* Connecting Economic Corridor Vectors */}
              <line x1="240" y1="440" x2="300" y2="410" stroke="#3B82F6" strokeWidth="2.5" strokeDasharray="3 3" opacity="0.7" />
              <line x1="240" y1="440" x2="260" y2="390" stroke="#3B82F6" strokeWidth="2.5" strokeDasharray="3 3" opacity="0.7" />
              <line x1="260" y1="390" x2="200" y2="310" stroke="#3B82F6" strokeWidth="2" strokeDasharray="3 3" opacity="0.7" />
              <line x1="200" y1="310" x2="310" y2="270" stroke="#0D9488" strokeWidth="2" strokeDasharray="3 3" opacity="0.7" />
              <line x1="310" y1="270" x2="380" y2="190" stroke="#EA580C" strokeWidth="2" strokeDasharray="3 3" opacity="0.7" />

              {/* Regional Hotspot Nodes */}
              {indiaRegions.map((node) => {
                const isSelected = selectedRegion.id === node.id;
                const isHovered = hoveredRegion?.id === node.id;
                const nodeColor = getColorForRegion(node.data, activeLayer, isSelected);

                return (
                  <g
                    key={node.id}
                    onClick={() => onSelectRegion(node.id)}
                    onMouseEnter={() => setHoveredRegion(node.data)}
                    onMouseLeave={() => setHoveredRegion(null)}
                    style={{ cursor: 'pointer' }}
                  >
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={isSelected ? '14' : '10'}
                      fill={nodeColor}
                      stroke={isSelected ? '#1D4ED8' : 'white'}
                      strokeWidth="2.5"
                      opacity={isHovered || isSelected ? 1 : 0.85}
                    />
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={isSelected ? '22' : '16'}
                      fill="none"
                      stroke={nodeColor}
                      strokeWidth="1.5"
                      strokeDasharray="2 2"
                      opacity="0.6"
                    />
                    <text
                      x={node.x + 16}
                      y={node.y + 4}
                      fill="var(--text-primary)"
                      fontSize="11"
                      fontWeight="700"
                    >
                      {node.name}
                    </text>
                  </g>
                );
              })}
            </svg>
          )}
        </div>

        {/* Hover Inspector Tooltip Floating Card */}
        {hoveredRegion && (
          <div
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border-strong)',
              borderRadius: 'var(--radius-md)',
              padding: '12px 16px',
              boxShadow: 'var(--shadow-lg)',
              maxWidth: '260px',
              pointerEvents: 'none',
              animation: 'fadeIn 150ms ease'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
              <MapPin size={14} color="var(--blue-primary)" />
              <strong style={{ fontSize: '0.88rem' }}>{hoveredRegion.name}</strong>
            </div>
            <div style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>
              {hoveredRegion.state} • {hoveredRegion.opportunityStatus.replace(/_/g, ' ')}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.76rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '6px' }}>
              <span>Opportunity Gap:</span>
              <strong style={{ color: 'var(--orange-warning)' }}>{hoveredRegion.opportunityGap.toFixed(1)} pts</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.76rem' }}>
              <span>Potential Index:</span>
              <strong>{hoveredRegion.potentialIndex.toFixed(1)}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.76rem' }}>
              <span>Observed Activity:</span>
              <strong>{hoveredRegion.observedActivityIndex.toFixed(1)}</strong>
            </div>
          </div>
        )}

        {/* Bottom Legend Overlay */}
        <div
          style={{
            position: 'absolute',
            bottom: '12px',
            left: '16px',
            background: 'var(--bg-glass)',
            backdropFilter: 'blur(8px)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: '8px 14px',
            fontSize: '0.72rem',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}
        >
          <span style={{ fontWeight: 700, color: 'var(--text-secondary)' }}>
            Graduated Scale:
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: '12px', height: '12px', borderRadius: '3px', background: '#34D399', display: 'inline-block' }}></span>
            <span>Balanced / Low Gap</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: '12px', height: '12px', borderRadius: '3px', background: '#FBBF24', display: 'inline-block' }}></span>
            <span>Medium Gap</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: '12px', height: '12px', borderRadius: '3px', background: '#EA580C', display: 'inline-block' }}></span>
            <span>High Untapped Gap</span>
          </div>
        </div>
      </div>

      {/* Selected Region Detailed Context Drawer */}
      <div
        style={{
          marginTop: '18px',
          background: 'var(--bg-tertiary)',
          borderRadius: 'var(--radius-md)',
          padding: '16px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px'
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '0.94rem', fontWeight: 800 }}>
              Inspecting: {selectedRegion.name}, {selectedRegion.state}
            </span>
            <span className="badge-info">
              {selectedRegion.type.toUpperCase()}
            </span>
          </div>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
            Identified Top Constraint: <strong>{selectedRegion.bottlenecks[0]?.name || 'Logistics & Skill Alignment'}</strong> (SHAP Importance: {selectedRegion.bottlenecks[0]?.shapImportance || 31}%)
          </p>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          {onNavigateToTab && (
            <>
              <button
                onClick={() => onNavigateToTab('bottlenecks')}
                className="btn-secondary"
                style={{ padding: '6px 12px', fontSize: '0.78rem' }}
              >
                <AlertTriangle size={13} color="var(--orange-warning)" />
                <span>View Bottlenecks</span>
              </button>

              <button
                onClick={() => onNavigateToTab('simulator')}
                className="btn-primary"
                style={{ padding: '6px 12px', fontSize: '0.78rem' }}
              >
                <Sparkles size={13} />
                <span>Simulate Interventions</span>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
