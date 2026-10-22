import React from 'react';
import { 
  Compass, 
  AlertTriangle, 
  SlidersHorizontal, 
  GitCompare, 
  Sparkles, 
  Moon, 
  Sun, 
  Search,
  FileText
} from 'lucide-react';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  isDark: boolean;
  toggleTheme: () => void;
  onOpenAi: () => void;
  onOpenExport: () => void;
  onOpenIngest?: () => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  setCurrentTab,
  isDark,
  toggleTheme,
  onOpenAi,
  onOpenExport,
  onOpenSearch,
}) => {
  const navTabs = [
    { id: 'overview', label: 'District Overview', icon: Compass },
    { id: 'bottlenecks', label: 'Bottlenecks & Solutions', icon: AlertTriangle },
    { id: 'simulator', label: 'What-If Simulator', icon: SlidersHorizontal },
    { id: 'compare', label: 'Compare Districts', icon: GitCompare },
  ];

  return (
    <header className="navbar">
      <div className="navbar-inner">
        {/* Brand */}
        <div className="brand-wrapper" onClick={() => setCurrentTab('overview')} style={{ cursor: 'pointer' }}>
          <div className="brand-logo-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.2" strokeDasharray="3 3" />
              <circle cx="12" cy="12" r="5" fill="#38BDF8" />
              <path d="M12 2V6M12 18V22M2 12H6M18 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div className="brand-text-col">
            <span className="brand-title">EconLens AI</span>
            <span className="brand-tagline">District Economic Intelligence</span>
          </div>
        </div>

        {/* Clean, Simple Navigation Tabs (Only 4 core tabs!) */}
        <nav className="nav-tabs-simple" aria-label="Main Navigation">
          {navTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = currentTab === tab.id || (tab.id === 'overview' && (currentTab === 'home' || currentTab === 'dashboard' || currentTab === 'geospatial'));
            return (
              <button
                key={tab.id}
                onClick={() => setCurrentTab(tab.id)}
                className={`nav-tab-btn ${isActive ? 'active' : ''}`}
                title={tab.label}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Action Tools - Clean and uncluttered */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button 
            className="btn-icon" 
            onClick={onOpenSearch} 
            title="Search districts or indicators (Ctrl+K)"
            aria-label="Search"
          >
            <Search size={18} />
          </button>

          <button 
            className="btn-icon" 
            onClick={onOpenExport} 
            title="Download District Report"
            aria-label="Download Report"
          >
            <FileText size={18} />
          </button>

          <button 
            className="btn-icon" 
            onClick={toggleTheme} 
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} color="#FBBF24" /> : <Moon size={18} />}
          </button>

          <button 
            className="btn-primary" 
            onClick={onOpenAi} 
            style={{ padding: '8px 16px', fontSize: '0.84rem', gap: '6px' }}
          >
            <Sparkles size={16} />
            <span>Ask AI</span>
          </button>
        </div>
      </div>
    </header>
  );
};

