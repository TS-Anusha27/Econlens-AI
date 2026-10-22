import React, { useState, useEffect } from 'react';
import { REGIONS_DATA } from './data/regionsData';
import { RegionData } from './types';

// Core Navigation & Layout Components
import { Navbar } from './components/Navbar';
import { GeographicSelector } from './components/GeographicSelector';
import { HeroSection } from './components/HeroSection';
import { UnifiedEconomicAnalysis } from './components/UnifiedEconomicAnalysis';
import { InteractiveMap } from './components/InteractiveMap';
import { BottleneckDiagnosisView } from './components/BottleneckDiagnosisView';
import { ScenarioSimulatorView } from './components/ScenarioSimulatorView';
import { CompareRegionsView } from './components/CompareRegionsView';
import { DataMethodologyView } from './components/DataMethodologyView';

// Interactive Modals
import { AskEconLensModal } from './components/AskEconLensModal';
import { ReportExportModal } from './components/ReportExportModal';
import { DataIngestionModal } from './components/DataIngestionModal';
import { SearchModal } from './components/SearchModal';

// Lucide Icons
import { Compass } from 'lucide-react';

export const App: React.FC = () => {
  // Navigation Tab: 'explore' | 'bottlenecks' | 'simulator' | 'compare' | 'methodology'
  const [currentTab, setCurrentTab] = useState<string>('explore');

  // Active Geographic Region (Default: 'pollachi' showcase pilot)
  const [selectedRegionId, setSelectedRegionId] = useState<string>('pollachi');
  const [customRegionOverrides, setCustomRegionOverrides] = useState<Record<string, Partial<RegionData>>>({});

  // Active Map vs Workspace sub-toggle in Explore tab
  const [showMapPreview, setShowMapPreview] = useState<boolean>(false);

  // Modals state
  const [isAiOpen, setIsAiOpen] = useState<boolean>(false);
  const [isExportOpen, setIsExportOpen] = useState<boolean>(false);
  const [isIngestOpen, setIsIngestOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  // Active Region data resolution
  const baseRegion = REGIONS_DATA[selectedRegionId] || REGIONS_DATA['pollachi'] || REGIONS_DATA['coimbatore'];
  const activeRegion: RegionData = {
    ...baseRegion,
    ...(customRegionOverrides[selectedRegionId] || {})
  };

  // Enforce light theme permanently across page refreshes
  useEffect(() => {
    document.body.classList.add('theme-light');
    document.body.classList.remove('theme-dark');
  }, []);

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
    setSelectedRegionId('pollachi');
  };

  const activeBreadcrumbLabel = activeRegion.parentRegionId 
    ? `${activeRegion.name}, ${activeRegion.parentRegionId.charAt(0).toUpperCase() + activeRegion.parentRegionId.slice(1)}` 
    : `${activeRegion.name}, ${activeRegion.state}`;

  return (
    <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#F7F9FC' }}>
      
      {/* 1. Global Navigation Bar (Pure Light Theme) */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        activeLocationName={activeBreadcrumbLabel}
        onOpenAi={() => setIsAiOpen(true)}
        onOpenExport={() => setIsExportOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* 2. Main Application Workspace */}
      <main className="main-content" style={{ flex: 1, padding: '24px 32px 64px', maxWidth: '1540px', margin: '0 auto', width: '100%' }}>
        
        {/* VIEW 1: EXPLORE & UNIFIED ECONOMIC ANALYSIS (Default Primary Workspace) */}
        {(currentTab === 'explore' || currentTab === 'overview' || currentTab === 'home') && (
          <div>
            {/* A. Minimal Modern Hero Banner with Headline & 5-Stage Journey */}
            <HeroSection
              region={activeRegion}
              onNavigateToTab={setCurrentTab}
              onOpenAi={() => setIsAiOpen(true)}
              onSelectStage={(stageNum) => {
                if (stageNum === 1) {
                  const el = document.getElementById('geo-selector-container');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                } else if (stageNum === 2) {
                  const el = document.getElementById('section-economic-drivers');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                } else if (stageNum === 3) {
                  const el = document.getElementById('section-bottlenecks');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                } else if (stageNum === 4) {
                  const el = document.getElementById('section-action-plan');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                } else if (stageNum === 5) {
                  const el = document.getElementById('section-future-simulator');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            />

            {/* B. Prominent 4-Dependent Geographical Selector */}
            <div id="geo-selector-container">
              <GeographicSelector
                selectedRegion={activeRegion}
                onSelectRegion={(id) => setSelectedRegionId(id)}
                onNavigateToCompare={() => setCurrentTab('compare')}
                onResetFilters={handleResetFilters}
                onAnalyseThisArea={() => {
                  const el = document.getElementById('section-executive-summary');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              />
            </div>

            {/* Optional Map Visual Preview Toggle */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
              <div style={{ fontSize: '0.84rem', color: '#64748B' }}>
                Showing economic intelligence for <strong>{activeRegion.name}</strong> ({activeRegion.state}, {activeRegion.country})
              </div>

              <button
                onClick={() => setShowMapPreview(prev => !prev)}
                style={{
                  background: showMapPreview ? '#EFF6FF' : '#FFFFFF',
                  color: '#2563EB',
                  border: '1px solid #CBD5E1',
                  padding: '6px 14px',
                  borderRadius: '8px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <Compass size={14} />
                <span>{showMapPreview ? 'Hide Geographic Map' : 'Show Geographic Map Preview'}</span>
              </button>
            </div>

            {/* Geographic Map Preview if toggled */}
            {showMapPreview && (
              <div style={{ marginBottom: '28px' }}>
                <InteractiveMap
                  selectedRegion={activeRegion}
                  onSelectRegion={(id) => setSelectedRegionId(id)}
                  onNavigateToTab={setCurrentTab}
                />
              </div>
            )}

            {/* C. The Unified Economic Analysis Workspace */}
            <UnifiedEconomicAnalysis
              region={activeRegion}
              onNavigateToTab={setCurrentTab}
              onOpenAiAssistant={() => setIsAiOpen(true)}
              onOpenExportReport={() => setIsExportOpen(true)}
            />
          </div>
        )}

        {/* VIEW 2: ACTION PLAN & BOTTLENECK DIAGNOSIS DEEP DIVE */}
        {currentTab === 'bottlenecks' && (
          <div>
            <GeographicSelector
              selectedRegion={activeRegion}
              onSelectRegion={(id) => setSelectedRegionId(id)}
              onNavigateToCompare={() => setCurrentTab('compare')}
              onResetFilters={handleResetFilters}
            />

            <BottleneckDiagnosisView
              region={activeRegion}
              onNavigateToTab={setCurrentTab}
            />
          </div>
        )}

        {/* VIEW 3: WHAT-IF SCENARIO SIMULATOR DEEP DIVE */}
        {currentTab === 'simulator' && (
          <div>
            <GeographicSelector
              selectedRegion={activeRegion}
              onSelectRegion={(id) => setSelectedRegionId(id)}
              onNavigateToCompare={() => setCurrentTab('compare')}
              onResetFilters={handleResetFilters}
            />

            <ScenarioSimulatorView
              region={activeRegion}
              onNavigateToTab={setCurrentTab}
            />
          </div>
        )}

        {/* VIEW 4: COMPARE REGIONS */}
        {currentTab === 'compare' && (
          <div>
            <CompareRegionsView
              currentRegion={activeRegion}
              onSelectRegion={(id) => setSelectedRegionId(id)}
            />
          </div>
        )}

        {/* VIEW 5: DATA SOURCES & METHODOLOGY */}
        {currentTab === 'methodology' && (
          <div>
            <DataMethodologyView
              onOpenIngest={() => setIsIngestOpen(true)}
            />
          </div>
        )}
      </main>

      {/* 3. Clean, Light-Themed Footer */}
      <footer 
        style={{ 
          borderTop: '1px solid #E2E8F0', 
          backgroundColor: '#FFFFFF', 
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
            color: '#64748B'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <strong style={{ color: '#14213D' }}>EconLens AI</strong>
            <span>•</span>
            <span>Discovering Hidden Economic Opportunities & Bottlenecks</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <button 
              onClick={() => setCurrentTab('methodology')} 
              style={{ color: '#64748B', fontSize: '0.82rem', cursor: 'pointer', background: 'none', border: 'none' }}
            >
              Data Methodology
            </button>
            <button 
              onClick={() => setIsExportOpen(true)} 
              style={{ color: '#64748B', fontSize: '0.82rem', cursor: 'pointer', background: 'none', border: 'none' }}
            >
              Export Report
            </button>
            <button 
              onClick={() => setIsAiOpen(true)} 
              style={{ color: '#2563EB', fontWeight: 700, fontSize: '0.82rem', cursor: 'pointer', background: 'none', border: 'none' }}
            >
              Ask EconLens AI
            </button>
          </div>
        </div>
      </footer>

      {/* 4. Interactive Modals */}
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
          setIsSearchOpen(false);
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
