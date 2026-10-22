import React from 'react';
import { 
  Compass, 
  AlertTriangle, 
  SlidersHorizontal, 
  GitCompare, 
  Sparkles, 
  Search,
  FileText,
  MapPin,
  Layers,
  BookOpen
} from 'lucide-react';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  activeLocationName?: string;
  onOpenAi: () => void;
  onOpenExport: () => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  setCurrentTab,
  activeLocationName = 'Pollachi, Coimbatore',
  onOpenAi,
  onOpenExport,
  onOpenSearch,
}) => {
  const navTabs = [
    { id: 'explore', label: 'Explore & Analysis', icon: Compass },
    { id: 'bottlenecks', label: 'Action Plan', icon: AlertTriangle },
    { id: 'simulator', label: 'Future Simulator', icon: SlidersHorizontal },
    { id: 'compare', label: 'Compare Regions', icon: GitCompare },
    { id: 'methodology', label: 'Methodology', icon: BookOpen },
  ];

  return (
    <header 
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E2E8F0',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.04)'
      }}
    >
      <div 
        style={{
          maxWidth: '1540px',
          margin: '0 auto',
          padding: '12px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px'
        }}
      >
        {/* Brand Logo & Title */}
        <div 
          onClick={() => setCurrentTab('explore')} 
          style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}
        >
          <div 
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #14213D 0%, #2563EB 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              boxShadow: '0 4px 10px rgba(37, 99, 235, 0.25)'
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.2" strokeDasharray="3 3" />
              <circle cx="12" cy="12" r="5" fill="#38BDF8" />
              <path d="M12 2V6M12 18V22M2 12H6M18 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '1.22rem', fontWeight: 800, color: '#14213D', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              EconLens AI
            </span>
            <span style={{ fontSize: '0.66rem', fontWeight: 700, color: '#0D9488', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Economic Opportunity & Intelligence
            </span>
          </div>
        </div>

        {/* Minimal Navigation Tabs */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '6px' }} aria-label="Main Navigation">
          {navTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = currentTab === tab.id || (tab.id === 'explore' && (currentTab === 'overview' || currentTab === 'home'));
            return (
              <button
                key={tab.id}
                onClick={() => setCurrentTab(tab.id)}
                style={{
                  padding: '8px 14px',
                  borderRadius: '8px',
                  fontSize: '0.84rem',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? '#2563EB' : '#64748B',
                  background: isActive ? '#EFF6FF' : 'transparent',
                  border: isActive ? '1px solid #BFDBFE' : '1px solid transparent',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 150ms'
                }}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Controls: Location Badge, Search, Export, Ask AI */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Active location chip */}
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              borderRadius: '8px',
              background: '#F8FAFC',
              border: '1px solid #E2E8F0',
              fontSize: '0.78rem',
              color: '#14213D',
              fontWeight: 600
            }}
          >
            <MapPin size={14} color="#2563EB" />
            <span>{activeLocationName}</span>
          </div>

          <button 
            onClick={onOpenSearch} 
            title="Search districts or indicators (Ctrl+K)"
            aria-label="Search"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              border: '1px solid #E2E8F0',
              background: '#FFFFFF',
              color: '#64748B',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <Search size={16} />
          </button>

          <button 
            onClick={onOpenExport} 
            title="Export Economic Intelligence Report"
            aria-label="Export Report"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              border: '1px solid #E2E8F0',
              background: '#FFFFFF',
              color: '#64748B',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <FileText size={16} />
          </button>

          <button 
            onClick={onOpenAi} 
            style={{
              background: '#2563EB',
              color: '#FFFFFF',
              padding: '8px 16px',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '0.84rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(37, 99, 235, 0.25)'
            }}
          >
            <Sparkles size={15} />
            <span>Ask EconLens AI</span>
          </button>
        </div>
      </div>
    </header>
  );
};
