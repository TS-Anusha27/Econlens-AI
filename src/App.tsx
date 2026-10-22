import React, { useState, useEffect } from 'react';
import { REGIONS_DATA } from './data/regionsData';
import { DATASET_REGISTRY } from './data/datasetsRegistry';
import { RegionData } from './types';

// Components
import { Navbar } from './components/Navbar';
import { GeographicSelector } from './components/GeographicSelector';
import { KpiCardsGrid } from './components/KpiCardsGrid';
import { InteractiveMap } from './components/InteractiveMap';
import { EconomicCharts } from './components/EconomicCharts';
import { BottleneckDiagnosisView } from './components/BottleneckDiagnosisView';
import { ScenarioSimulatorView } from './components/ScenarioSimulatorView';
import { CompareRegionsView } from './components/CompareRegionsView';
import { DataMethodologyView } from './components/DataMethodologyView';
import { HeroSection } from './components/HeroSection';

// Modals
import { AskEconLensModal } from './components/AskEconLensModal';
import { ReportExportModal } from './components/ReportExportModal';
import { DataIngestionModal } from './components/DataIngestionModal';
import { SearchModal } from './components/SearchModal';

// Icons
import { 
  Sparkles, 
  ArrowRight, 
  MapPin, 
  BarChart3, 
  AlertTriangle, 
  SlidersHorizontal, 
  Layers
} from 'lucide-react';

export const App: React.FC = () => {
  // Navigation State - defaults to 'overview'
  const [currentTab, setCurrentTab] = useState<string>('overview');

  // Sub-view in District Overview: 'map' | 'trends' | 'indicators'
  const [overviewView, setOverviewView] = useState<'map' | 'trends' | 'indicators'>('map');

  // Geographic Selection State (Default: Coimbatore Showcase Pilot)
  const [selectedRegionId, setSelectedRegionId] = useState<string>('coimbatore');
  const [selectedSubRegion, setSelectedSubRegion] = useState<string | null>(null);

  // Active Region Object with local mutations allowed
  const [customRegionOverrides, setCustomRegionOverrides] = useState<Record<string, Partial<RegionData>>>({});

  // Theme State
  const [isDark, setIsDark] = useState<boolean>(false);

  // Modals
  const [isAiOpen, setIsAiOpen] = useState<boolean>(false);
  const [isExportOpen, setIsExportOpen] = useState<boolean>(false);
  const [isIngestOpen, setIsIngestOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  // Active Region Data
  const baseRegion = REGIONS_DATA[selectedRegionId] || REGIONS_DATA['coimbatore'];
  const activeRegion: RegionData = {
    ...baseRegion,
    ...(customRegionOverrides[selectedRegionId] || {})
  };

  // Keyboard shortcut listener for Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Theme toggle effect
  useEffect(() => {
    if (isDark) {
      document.body.classList.add('theme-dark');
      document.body.classList.remove('theme-light');
    } else {
      document.body.classList.add('theme-light');
      document.body.classList.remove('theme-dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const handleIngestSuccess = (customData: Partial<RegionData>) => {
    setCustomRegionOverrides(prev => ({
      ...prev,
      [selectedRegionId]: {
        ...(prev[selectedRegionId] || {}),
        ...customData
      }
    }));
    setIsIngestOpen(false);
  };

  const handleResetFilters = () => {
    setSelectedRegionId('coimbatore');
    setSelectedSubRegion(null);
  };

  return (
    <div className="app-container">
      {/* Clean Global Header */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        isDark={isDark}
        toggleTheme={toggleTheme}
        onOpenAi={() => setIsAiOpen(true)}
        onOpenExport={() => setIsExportOpen(true)}
        onOpenIngest={() => setIsIngestOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Content Workspace */}
      <main className="main-content">
        {/* VIEW 1: DISTRICT OVERVIEW (Default) */}
        {(currentTab === 'overview' || currentTab === 'home' || currentTab === 'dashboard') && (
          <div>
            {/* Friendly, uncluttered Hero Banner */}
            <HeroSection
              region={activeRegion}
              onExplore={() => setOverviewView('map')}
              onSelectRegion={(id) => {
                setSelectedRegionId(id);
                setSelectedSubRegion(null);
              }}
              onNavigateToTab={setCurrentTab}
              onOpenAi={() => setIsAiOpen(true)}
            />

            {/* Quick District Switcher Bar */}
            <GeographicSelector
              selectedRegion={activeRegion}
              onSelectRegion={(id) => {
                setSelectedRegionId(id);
                setSelectedSubRegion(null);
              }}
              selectedSubRegion={selectedSubRegion}
              onSelectSubRegion={setSelectedSubRegion}
              onNavigateToCompare={() => setCurrentTab('compare')}
              onResetFilters={handleResetFilters}
            />

            {/* 3 Core Highlight Numbers */}
            <div 
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
                gap: '16px', 
                marginBottom: '24px' 
              }}
            >
              <div className="card" style={{ padding: '20px', borderLeft: '4px solid var(--blue-primary)' }}>
                <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>
                  Potential Capacity
                </div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--blue-primary)', marginTop: '4px', marginBottom: '4px' }}>
                  {activeRegion.potentialIndex.toFixed(1)} <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>/ 100</span>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  Estimated maximum capacity based on workforce, location, and infrastructure.
                </div>
              </div>

              <div className="card" style={{ padding: '20px', borderLeft: '4px solid var(--teal-primary)' }}>
                <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>
                  Current Economic Output
                </div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--teal-primary)', marginTop: '4px', marginBottom: '4px' }}>
                  {activeRegion.observedActivityIndex.toFixed(1)} <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>/ 100</span>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  Current measured output from registered businesses, payroll, and activity.
                </div>
              </div>

              <div className="card" style={{ padding: '20px', borderLeft: '4px solid var(--orange-warning)' }}>
                <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>
                  Unlocked Growth Opportunity
                </div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--orange-warning)', marginTop: '4px', marginBottom: '4px' }}>
                  {activeRegion.opportunityGap.toFixed(1)} <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>points gap</span>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  {activeRegion.opportunityGap > 20 
                    ? 'High growth opportunity constrained by specific local bottlenecks.'
                    : 'Balanced performance operating close to regional potential.'}
                </div>
              </div>
            </div>

            {/* View Sub-Tabs: Map, Historical Trends, or All Indicators */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <button
                  onClick={() => setOverviewView('map')}
                  style={{
                    padding: '8px 16px',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.84rem',
                    fontWeight: overviewView === 'map' ? 700 : 500,
                    background: overviewView === 'map' ? 'var(--blue-subtle)' : 'var(--bg-secondary)',
                    color: overviewView === 'map' ? 'var(--blue-primary)' : 'var(--text-secondary)',
                    border: overviewView === 'map' ? '1px solid var(--blue-border)' : '1px solid var(--border-subtle)',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <MapPin size={16} />
                  <span>District Map</span>
                </button>

                <button
                  onClick={() => setOverviewView('trends')}
                  style={{
                    padding: '8px 16px',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.84rem',
                    fontWeight: overviewView === 'trends' ? 700 : 500,
                    background: overviewView === 'trends' ? 'var(--blue-subtle)' : 'var(--bg-secondary)',
                    color: overviewView === 'trends' ? 'var(--blue-primary)' : 'var(--text-secondary)',
                    border: overviewView === 'trends' ? '1px solid var(--blue-border)' : '1px solid var(--border-subtle)',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <BarChart3 size={16} />
                  <span>Growth Trends (2018–2024)</span>
                </button>

                <button
                  onClick={() => setOverviewView('indicators')}
                  style={{
                    padding: '8px 16px',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.84rem',
                    fontWeight: overviewView === 'indicators' ? 700 : 500,
                    background: overviewView === 'indicators' ? 'var(--blue-subtle)' : 'var(--bg-secondary)',
                    color: overviewView === 'indicators' ? 'var(--blue-primary)' : 'var(--text-secondary)',
                    border: overviewView === 'indicators' ? '1px solid var(--blue-border)' : '1px solid var(--border-subtle)',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <Layers size={16} />
                  <span>All Regional Indicators</span>
                </button>
              </div>

              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Showing data for <strong>{activeRegion.name}</strong>
              </div>
            </div>

            {/* Active Sub-View Display */}
            {overviewView === 'map' && (
              <InteractiveMap
                selectedRegion={activeRegion}
                onSelectRegion={(id) => {
                  setSelectedRegionId(id);
                  setSelectedSubRegion(null);
                }}
                onNavigateToTab={setCurrentTab}
              />
            )}

            {overviewView === 'trends' && (
              <EconomicCharts region={activeRegion} />
            )}

            {overviewView === 'indicators' && (
              <KpiCardsGrid
                region={activeRegion}
                onNavigateToTab={setCurrentTab}
              />
            )}

            {/* Bottom Clear Call to Action Cards */}
            <div 
              style={{ 
                marginTop: '32px', 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                gap: '16px' 
              }}
            >
              <div 
                className="card" 
                onClick={() => setCurrentTab('bottlenecks')}
                style={{ 
                  cursor: 'pointer', 
                  padding: '20px', 
                  border: '1px solid var(--border-subtle)',
                  transition: 'transform var(--transition-fast)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: 'var(--radius-md)', background: 'var(--orange-subtle)', color: 'var(--orange-warning)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <AlertTriangle size={18} />
                  </div>
                  <strong style={{ fontSize: '1rem' }}>See Bottlenecks & Fixes</strong>
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '12px' }}>
                  Discover the top infrastructure, skill, and market barriers holding {activeRegion.name} back.
                </p>
                <span style={{ fontSize: '0.82rem', color: 'var(--blue-primary)', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <span>View Solutions</span>
                  <ArrowRight size={14} />
                </span>
              </div>

              <div 
                className="card" 
                onClick={() => setCurrentTab('simulator')}
                style={{ 
                  cursor: 'pointer', 
                  padding: '20px', 
                  border: '1px solid var(--border-subtle)',
                  transition: 'transform var(--transition-fast)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: 'var(--radius-md)', background: 'var(--blue-subtle)', color: 'var(--blue-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <SlidersHorizontal size={18} />
                  </div>
                  <strong style={{ fontSize: '1rem' }}>What-If Policy Simulator</strong>
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '12px' }}>
                  Simulate what happens if transport speed improves by 15% or 5,000 workers are trained.
                </p>
                <span style={{ fontSize: '0.82rem', color: 'var(--blue-primary)', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <span>Test Scenarios</span>
                  <ArrowRight size={14} />
                </span>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 2: BOTTLENECKS & SOLUTIONS */}
        {currentTab === 'bottlenecks' && (
          <div>
            <GeographicSelector
              selectedRegion={activeRegion}
              onSelectRegion={(id) => {
                setSelectedRegionId(id);
                setSelectedSubRegion(null);
              }}
              selectedSubRegion={selectedSubRegion}
              onSelectSubRegion={setSelectedSubRegion}
              onNavigateToCompare={() => setCurrentTab('compare')}
              onResetFilters={handleResetFilters}
            />

            <BottleneckDiagnosisView
              region={activeRegion}
              onNavigateToTab={setCurrentTab}
            />
          </div>
        )}

        {/* VIEW 3: WHAT-IF SCENARIO SIMULATOR */}
        {currentTab === 'simulator' && (
          <div>
            <GeographicSelector
              selectedRegion={activeRegion}
              onSelectRegion={(id) => {
                setSelectedRegionId(id);
                setSelectedSubRegion(null);
              }}
              selectedSubRegion={selectedSubRegion}
              onSelectSubRegion={setSelectedSubRegion}
              onNavigateToCompare={() => setCurrentTab('compare')}
              onResetFilters={handleResetFilters}
            />

            <ScenarioSimulatorView
              region={activeRegion}
              onNavigateToTab={setCurrentTab}
            />
          </div>
        )}

        {/* VIEW 4: COMPARE DISTRICTS */}
        {currentTab === 'compare' && (
          <div>
            <CompareRegionsView
              currentRegion={activeRegion}
              onSelectRegion={(id) => {
                setSelectedRegionId(id);
                setSelectedSubRegion(null);
              }}
            />
          </div>
        )}

        {/* VIEW 5: DATA & METHODOLOGY (Secondary) */}
        {currentTab === 'methodology' && (
          <div>
            <DataMethodologyView
              onOpenIngest={() => setIsIngestOpen(true)}
            />
          </div>
        )}
      </main>

      {/* Clean, Simple Footer */}
      <footer 
        style={{ 
          borderTop: '1px solid var(--border-subtle)', 
          background: 'var(--bg-secondary)', 
          padding: '24px 32px',
          marginTop: 'auto'
        }}
      >
        <div 
          style={{ 
            maxWidth: '1540px', 
            margin: '0 auto', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            flexWrap: 'wrap', 
            gap: '16px',
            fontSize: '0.82rem',
            color: 'var(--text-muted)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <strong style={{ color: 'var(--text-primary)' }}>EconLens AI</strong>
            <span>•</span>
            <span>District Economic Intelligence</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button 
              onClick={() => setCurrentTab('methodology')} 
              style={{ color: 'var(--text-muted)', fontSize: '0.82rem', cursor: 'pointer' }}
            >
              Data Methodology
            </button>
            <button 
              onClick={() => setIsExportOpen(true)} 
              style={{ color: 'var(--text-muted)', fontSize: '0.82rem', cursor: 'pointer' }}
            >
              Export Report
            </button>
            <button 
              onClick={() => setIsAiOpen(true)} 
              style={{ color: 'var(--blue-primary)', fontWeight: 600, fontSize: '0.82rem', cursor: 'pointer' }}
            >
              Ask AI Assistant
            </button>
          </div>
        </div>
      </footer>

      {/* Interactive Modals */}
      <AskEconLensModal
        isOpen={isAiOpen}
        onClose={() => setIsAiOpen(false)}
        region={activeRegion}
        onNavigateToTab={(tab) => {
          setCurrentTab(tab);
          setIsAiOpen(false);
        }}
      />

      <ReportExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
        region={activeRegion}
      />

      <DataIngestionModal
        isOpen={isIngestOpen}
        onClose={() => setIsIngestOpen(false)}
        onIngestSuccess={handleIngestSuccess}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectRegion={(id) => {
          setSelectedRegionId(id);
          setSelectedSubRegion(null);
        }}
        onNavigateToTab={(tab) => {
          setCurrentTab(tab);
          setIsSearchOpen(false);
        }}
      />
    </div>
  );
};

export default App;
