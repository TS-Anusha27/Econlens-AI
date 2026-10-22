import React, { useState, useEffect } from 'react';
import { RegionData } from '../types';
import { 
  GEOGRAPHY_HIERARCHY, 
  SUGGESTED_LOCATIONS, 
  CountryDef, 
  StateDef, 
  DistrictDef 
} from '../data/geographyRegistry';
import { 
  MapPin, 
  ChevronDown, 
  Search, 
  RotateCcw, 
  GitCompare, 
  Check, 
  Sparkles, 
  Compass,
  ArrowRight
} from 'lucide-react';

interface GeographicSelectorProps {
  selectedRegion: RegionData;
  onSelectRegion: (regionId: string) => void;
  selectedSubRegion?: string | null;
  onSelectSubRegion?: (sub: string | null) => void;
  onNavigateToCompare?: () => void;
  onResetFilters?: () => void;
  onAnalyseThisArea?: () => void;
}

export const GeographicSelector: React.FC<GeographicSelectorProps> = ({
  selectedRegion,
  onSelectRegion,
  onNavigateToCompare,
  onResetFilters,
  onAnalyseThisArea
}) => {
  // Determine initial dropdown levels from active region
  const initialCountry = selectedRegion.country || 'India';
  const initialState = selectedRegion.state || 'Tamil Nadu';
  const initialDistrictId = selectedRegion.parentRegionId || (selectedRegion.type === 'district' ? selectedRegion.id : 'coimbatore');
  const initialLocalId = selectedRegion.type === 'local' ? selectedRegion.id : (selectedRegion.id === 'pollachi' ? 'pollachi' : '');

  const [countryName, setCountryName] = useState<string>(initialCountry);
  const [stateName, setStateName] = useState<string>(initialState);
  const [districtId, setDistrictId] = useState<string>(initialDistrictId);
  const [localAreaId, setLocalAreaId] = useState<string>(initialLocalId);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [recentLocations, setRecentLocations] = useState<Array<{ id: string; name: string; state: string }>>([
    { id: 'pollachi', name: 'Pollachi', state: 'Tamil Nadu' },
    { id: 'coimbatore', name: 'Coimbatore', state: 'Tamil Nadu' },
    { id: 'chennai', name: 'Chennai', state: 'Tamil Nadu' },
    { id: 'bengaluru', name: 'Bengaluru Urban', state: 'Karnataka' }
  ]);

  // Keep dropdown state synchronized with external activeRegion updates
  useEffect(() => {
    setCountryName(selectedRegion.country || 'India');
    setStateName(selectedRegion.state || 'Tamil Nadu');
    if (selectedRegion.type === 'local') {
      setDistrictId(selectedRegion.parentRegionId || 'coimbatore');
      setLocalAreaId(selectedRegion.id);
    } else {
      setDistrictId(selectedRegion.id);
      setLocalAreaId('');
    }
  }, [selectedRegion]);

  // 1. Current Country Definition
  const currentCountry: CountryDef = 
    GEOGRAPHY_HIERARCHY.find(c => c.name.toLowerCase() === countryName.toLowerCase()) || 
    GEOGRAPHY_HIERARCHY[0];

  // 2. Current State Definition (dependent on Country)
  const currentState: StateDef = 
    currentCountry.states.find(s => s.name.toLowerCase() === stateName.toLowerCase()) || 
    currentCountry.states[0];

  // 3. Current District Definition (dependent on State)
  const currentDistrict: DistrictDef = 
    currentState.districts.find(d => d.id === districtId) || 
    currentState.districts[0];

  // 4. Current Local Areas list
  const availableLocalAreas = currentDistrict?.localAreas || [];

  // Handle Country change: Reset downstream selections to valid defaults
  const handleCountryChange = (newCountryName: string) => {
    setCountryName(newCountryName);
    const countryObj = GEOGRAPHY_HIERARCHY.find(c => c.name === newCountryName) || GEOGRAPHY_HIERARCHY[0];
    const firstState = countryObj.states[0];
    const firstDistrict = firstState?.districts[0];
    setStateName(firstState?.name || '');
    setDistrictId(firstDistrict?.id || '');
    setLocalAreaId('');
  };

  // Handle State change: Reset district and local area
  const handleStateChange = (newStateName: string) => {
    setStateName(newStateName);
    const stateObj = currentCountry.states.find(s => s.name === newStateName) || currentCountry.states[0];
    const firstDistrict = stateObj?.districts[0];
    setDistrictId(firstDistrict?.id || '');
    setLocalAreaId('');
  };

  // Handle District change: Reset local area
  const handleDistrictChange = (newDistrictId: string) => {
    setDistrictId(newDistrictId);
    setLocalAreaId('');
  };

  // Submit / Commit the analysis
  const handleTriggerAnalysis = (targetId?: string) => {
    const finalId = targetId || (localAreaId ? localAreaId : districtId);
    onSelectRegion(finalId);

    // Track recently viewed locations
    const foundArea = availableLocalAreas.find(l => l.id === finalId);
    const newEntryName = foundArea ? foundArea.name : currentDistrict.name;
    setRecentLocations(prev => {
      const filtered = prev.filter(p => p.id !== finalId);
      return [{ id: finalId, name: newEntryName, state: stateName }, ...filtered].slice(0, 5);
    });

    if (onAnalyseThisArea) {
      onAnalyseThisArea();
    }
  };

  // Suggested location pill click
  const handleSelectSuggested = (s: typeof SUGGESTED_LOCATIONS[0]) => {
    setCountryName(s.country);
    setStateName(s.state);
    setDistrictId(s.districtId);
    if (s.localId) {
      setLocalAreaId(s.localId);
      handleTriggerAnalysis(s.localId);
    } else {
      setLocalAreaId('');
      handleTriggerAnalysis(s.districtId);
    }
  };

  return (
    <div 
      className="card" 
      style={{ 
        padding: '24px 28px', 
        marginBottom: '28px',
        background: '#FFFFFF',
        border: '1px solid #E2E8F0',
        borderRadius: '16px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
      }}
    >
      {/* Header bar: Title & Fast Reset */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '18px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#EFF6FF', color: '#2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Compass size={18} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#14213D' }}>
              Select Geographical Location
            </h3>
            <p style={{ fontSize: '0.78rem', color: '#64748B' }}>
              Navigate from country to district and local area to generate calibrated economic intelligence.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {onNavigateToCompare && (
            <button
              onClick={onNavigateToCompare}
              className="btn-secondary"
              style={{ padding: '6px 14px', fontSize: '0.8rem', gap: '6px', border: '1px solid #CBD5E1' }}
            >
              <GitCompare size={14} color="#2563EB" />
              <span>Compare Regions</span>
            </button>
          )}

          {onResetFilters && (
            <button
              onClick={() => {
                setCountryName('India');
                setStateName('Tamil Nadu');
                setDistrictId('coimbatore');
                setLocalAreaId('pollachi');
                onResetFilters();
              }}
              style={{ fontSize: '0.8rem', color: '#64748B', display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', background: 'none', border: 'none', padding: '6px' }}
              title="Reset to showcase benchmark (Pollachi, Coimbatore)"
            >
              <RotateCcw size={13} />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

      {/* 4 Dependent Selectors Grid */}
      <div 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', 
          gap: '14px', 
          marginBottom: '20px' 
        }}
      >
        {/* Level 1: Country */}
        <div>
          <label style={{ display: 'block', fontSize: '0.74rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', marginBottom: '6px' }}>
            1. Country
          </label>
          <div style={{ position: 'relative' }}>
            <select
              value={countryName}
              onChange={(e) => handleCountryChange(e.target.value)}
              aria-label="Select Country"
              style={{
                width: '100%',
                appearance: 'none',
                WebkitAppearance: 'none',
                padding: '10px 32px 10px 14px',
                borderRadius: '10px',
                border: '1px solid #CBD5E1',
                background: '#FFFFFF',
                color: '#14213D',
                fontWeight: 600,
                fontSize: '0.88rem',
                cursor: 'pointer',
                outline: 'none',
                transition: 'border-color 150ms'
              }}
            >
              {GEOGRAPHY_HIERARCHY.map((c) => (
                <option key={c.code} value={c.name}>
                  {c.name}
                </option>
              ))}
            </select>
            <ChevronDown size={15} color="#64748B" style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
          </div>
        </div>

        {/* Level 2: State / Province */}
        <div>
          <label style={{ display: 'block', fontSize: '0.74rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', marginBottom: '6px' }}>
            2. State / Province / Region
          </label>
          <div style={{ position: 'relative' }}>
            <select
              value={stateName}
              onChange={(e) => handleStateChange(e.target.value)}
              aria-label="Select State or Province"
              style={{
                width: '100%',
                appearance: 'none',
                WebkitAppearance: 'none',
                padding: '10px 32px 10px 14px',
                borderRadius: '10px',
                border: '1px solid #CBD5E1',
                background: '#FFFFFF',
                color: '#14213D',
                fontWeight: 600,
                fontSize: '0.88rem',
                cursor: 'pointer',
                outline: 'none'
              }}
            >
              {currentCountry.states.map((s) => (
                <option key={s.name} value={s.name}>
                  {s.name}
                </option>
              ))}
            </select>
            <ChevronDown size={15} color="#64748B" style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
          </div>
        </div>

        {/* Level 3: City / District */}
        <div>
          <label style={{ display: 'block', fontSize: '0.74rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', marginBottom: '6px' }}>
            3. City / District
          </label>
          <div style={{ position: 'relative' }}>
            <select
              value={districtId}
              onChange={(e) => handleDistrictChange(e.target.value)}
              aria-label="Select City or District"
              style={{
                width: '100%',
                appearance: 'none',
                WebkitAppearance: 'none',
                padding: '10px 32px 10px 14px',
                borderRadius: '10px',
                border: '1px solid #CBD5E1',
                background: '#FFFFFF',
                color: '#14213D',
                fontWeight: 600,
                fontSize: '0.88rem',
                cursor: 'pointer',
                outline: 'none'
              }}
            >
              {currentState.districts.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.name}
                </option>
              ))}
            </select>
            <ChevronDown size={15} color="#64748B" style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
          </div>
        </div>

        {/* Level 4: Local Area / Taluk / Block */}
        <div>
          <label style={{ display: 'block', fontSize: '0.74rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', marginBottom: '6px' }}>
            4. Local Area / Taluk
          </label>
          <div style={{ position: 'relative' }}>
            <select
              value={localAreaId}
              onChange={(e) => setLocalAreaId(e.target.value)}
              aria-label="Select Local Area or Taluk"
              style={{
                width: '100%',
                appearance: 'none',
                WebkitAppearance: 'none',
                padding: '10px 32px 10px 14px',
                borderRadius: '10px',
                border: localAreaId ? '2px solid #2563EB' : '1px solid #CBD5E1',
                background: localAreaId ? '#EFF6FF' : '#FFFFFF',
                color: localAreaId ? '#2563EB' : '#14213D',
                fontWeight: localAreaId ? 700 : 500,
                fontSize: '0.88rem',
                cursor: 'pointer',
                outline: 'none'
              }}
            >
              <option value="">Whole District Average</option>
              {availableLocalAreas.map((la) => (
                <option key={la.id} value={la.id}>
                  {la.name} ({la.typeLabel})
                </option>
              ))}
            </select>
            <ChevronDown size={15} color={localAreaId ? "#2563EB" : "#64748B"} style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
          </div>
        </div>
      </div>

      {/* Prominent Action Bar: Breadcrumb + Analyse Button */}
      <div 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          flexWrap: 'wrap', 
          gap: '14px',
          padding: '14px 18px',
          borderRadius: '12px',
          background: '#F8FAFC',
          border: '1px solid #E2E8F0'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: '#64748B', flexWrap: 'wrap' }}>
          <MapPin size={16} color="#2563EB" />
          <span style={{ fontWeight: 500 }}>Target:</span>
          <span style={{ color: '#14213D', fontWeight: 700 }}>{countryName}</span>
          <span>›</span>
          <span style={{ color: '#14213D', fontWeight: 700 }}>{stateName}</span>
          <span>›</span>
          <span style={{ color: '#14213D', fontWeight: 700 }}>{currentDistrict.name}</span>
          {localAreaId && (
            <>
              <span>›</span>
              <span style={{ color: '#2563EB', fontWeight: 800, background: '#EFF6FF', padding: '2px 8px', borderRadius: '6px' }}>
                {availableLocalAreas.find(l => l.id === localAreaId)?.name || localAreaId}
              </span>
            </>
          )}
        </div>

        <button
          onClick={() => handleTriggerAnalysis()}
          style={{
            background: '#2563EB',
            color: '#FFFFFF',
            padding: '10px 24px',
            borderRadius: '10px',
            fontWeight: 700,
            fontSize: '0.9rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 4px 12px rgba(37, 99, 235, 0.25)',
            cursor: 'pointer',
            border: 'none',
            transition: 'background-color 150ms'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1D4ED8')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#2563EB')}
        >
          <span>Analyse This Area</span>
          <ArrowRight size={16} />
        </button>
      </div>

      {/* Suggested & Recently Viewed Shortcuts */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginTop: '16px', paddingTop: '14px', borderTop: '1px solid #E2E8F0' }}>
        <span style={{ fontSize: '0.74rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
          Suggested Locations:
        </span>
        {SUGGESTED_LOCATIONS.map((s) => {
          const isCurrent = (s.localId ? s.localId === selectedRegion.id : s.districtId === selectedRegion.id);
          return (
            <button
              key={`${s.districtId}-${s.localId}`}
              onClick={() => handleSelectSuggested(s)}
              style={{
                padding: '4px 12px',
                borderRadius: '9999px',
                fontSize: '0.76rem',
                fontWeight: isCurrent ? 700 : 500,
                border: isCurrent ? '1px solid #2563EB' : '1px solid #CBD5E1',
                background: isCurrent ? '#EFF6FF' : '#FFFFFF',
                color: isCurrent ? '#2563EB' : '#475569',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 150ms'
              }}
            >
              <span>{s.label}</span>
              {s.badge && (
                <span 
                  style={{ 
                    fontSize: '0.65rem', 
                    padding: '1px 5px', 
                    borderRadius: '4px', 
                    background: isCurrent ? '#2563EB' : '#F1F5F9', 
                    color: isCurrent ? '#FFFFFF' : '#64748B',
                    fontWeight: 600
                  }}
                >
                  {s.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
