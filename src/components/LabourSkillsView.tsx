import React, { useState } from 'react';
import { RegionData, SkillDemandItem } from '../types';
import { 
  GraduationCap, 
  Briefcase, 
  AlertCircle, 
  TrendingUp, 
  BookOpen, 
  Users, 
  Building, 
  ExternalLink,
  Search,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

interface LabourSkillsViewProps {
  region: RegionData;
  onNavigateToTab: (tab: string) => void;
}

export const LabourSkillsView: React.FC<LabourSkillsViewProps> = ({ region, onNavigateToTab }) => {
  const [selectedSkill, setSelectedSkill] = useState<SkillDemandItem | null>(region.skills[0] || null);
  const [filterPriority, setFilterPriority] = useState<string>('ALL');
  const [searchSkill, setSearchSkill] = useState<string>('');

  const filteredSkills = region.skills.filter(s => {
    const matchesPriority = filterPriority === 'ALL' || s.emergingPriority === filterPriority;
    const matchesSearch = s.name.toLowerCase().includes(searchSkill.toLowerCase()) || 
                          s.category.toLowerCase().includes(searchSkill.toLowerCase());
    return matchesPriority && matchesSearch;
  });

  return (
    <div style={{ marginBottom: '48px' }}>
      {/* Title Header */}
      <div style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
          <span className="badge-demo" style={{ background: 'var(--blue-subtle)', color: 'var(--blue-primary)', borderColor: 'var(--blue-border)' }}>
            LABOUR MARKET INTELLIGENCE
          </span>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
            PLFS MoSPI + Employer Requisition Synthesis (Slide 7 & 12)
          </span>
        </div>

        <h1 style={{ fontSize: '1.8rem', fontWeight: 800 }}>
          Labour-Market & Skill Intelligence — {region.name}
        </h1>
        <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', maxWidth: '960px' }}>
          Comparing local vocational qualification supply against real employer hiring requisitions.
          Identify emerging high-priority occupations to align university curricula and workforce skilling.
        </p>
      </div>

      {/* Top Labour Market Macro Indicators Bar */}
      <div className="grid-4" style={{ marginBottom: '28px' }}>
        <div className="card" style={{ padding: '16px 20px' }}>
          <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)', display: 'block' }}>Labour Force Participation (LFPR)</span>
          <strong style={{ fontSize: '1.5rem', color: 'var(--blue-primary)' }}>{region.indicators.lfpr}%</strong>
          <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
            Working age (15-59): {region.workingAgePercent}%
          </div>
        </div>

        <div className="card" style={{ padding: '16px 20px' }}>
          <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)', display: 'block' }}>Youth Unemployment (18-29)</span>
          <strong style={{ fontSize: '1.5rem', color: 'var(--orange-warning)' }}>{region.indicators.youthUnemployment}%</strong>
          <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
            Overall Unemployment: {region.indicators.unemploymentRate}%
          </div>
        </div>

        <div className="card" style={{ padding: '16px 20px' }}>
          <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)', display: 'block' }}>Tertiary Higher Education</span>
          <strong style={{ fontSize: '1.5rem', color: 'var(--teal-primary)' }}>{region.higherEduPercent}%</strong>
          <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
            Literacy: {region.literacyRate}%
          </div>
        </div>

        <div className="card" style={{ padding: '16px 20px' }}>
          <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)', display: 'block' }}>Structural Skill Mismatch Index</span>
          <strong style={{ fontSize: '1.5rem', color: 'var(--red-critical)' }}>{region.indicators.skillMismatchIndex}%</strong>
          <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
            Severe vacancy friction in automation
          </div>
        </div>
      </div>

      {/* Interactive Skill Gap Matrix (Section 10 Table Requirement) */}
      <div className="card" style={{ padding: '24px', marginBottom: '32px' }}>
        <div className="card-header">
          <div>
            <div className="card-title">
              <GraduationCap size={18} color="var(--blue-primary)" />
              <span>Interactive Regional Skill-Gap Matrix</span>
            </div>
            <div className="card-subtitle">
              Calculated variance between local workforce availability and observed employer demand
            </div>
          </div>

          {/* Search & Filters */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                placeholder="Search skills or sector..."
                value={searchSkill}
                onChange={(e) => setSearchSkill(e.target.value)}
                style={{
                  padding: '6px 12px 6px 30px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-strong)',
                  fontSize: '0.78rem',
                  background: 'var(--bg-secondary)',
                  width: '180px'
                }}
              />
              <Search size={14} color="var(--text-muted)" style={{ position: 'absolute', left: '10px', top: '9px' }} />
            </div>

            <select
              value={filterPriority}
              onChange={(e) => setFilterPriority(e.target.value)}
              style={{
                padding: '6px 10px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-strong)',
                fontSize: '0.78rem',
                background: 'var(--bg-secondary)',
                fontWeight: 600
              }}
            >
              <option value="ALL">All Priorities</option>
              <option value="CRITICAL">Critical Shortage</option>
              <option value="HIGH">High Priority</option>
              <option value="MODERATE">Moderate</option>
            </select>
          </div>
        </div>

        {/* Matrix Table */}
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.82rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--border-strong)', textAlign: 'left', color: 'var(--text-muted)' }}>
                <th style={{ padding: '10px 12px' }}>Skill Competency</th>
                <th style={{ padding: '10px 12px' }}>Sector / Domain</th>
                <th style={{ padding: '10px 12px' }}>Estimated Availability</th>
                <th style={{ padding: '10px 12px' }}>Observed Demand</th>
                <th style={{ padding: '10px 12px' }}>Calculated Gap</th>
                <th style={{ padding: '10px 12px' }}>Priority Status</th>
                <th style={{ padding: '10px 12px' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredSkills.map((s) => {
                const isSelected = selectedSkill?.id === s.id;
                return (
                  <tr
                    key={s.id}
                    onClick={() => setSelectedSkill(s)}
                    style={{
                      borderBottom: '1px solid var(--border-subtle)',
                      background: isSelected ? 'var(--blue-subtle)' : 'transparent',
                      cursor: 'pointer',
                      transition: 'background var(--transition-fast)'
                    }}
                  >
                    <td style={{ padding: '12px', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {s.name}
                    </td>
                    <td style={{ padding: '12px', color: 'var(--text-secondary)' }}>
                      {s.category}
                    </td>
                    <td style={{ padding: '12px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span>{s.localAvailability}%</span>
                        <div style={{ width: '60px', height: '6px', background: 'var(--border-subtle)', borderRadius: '3px', overflow: 'hidden' }}>
                          <div style={{ width: `${s.localAvailability}%`, height: '100%', background: 'var(--teal-primary)' }} />
                        </div>
                      </div>
                    </td>
                    <td style={{ padding: '12px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span>{s.observedDemand}%</span>
                        <div style={{ width: '60px', height: '6px', background: 'var(--border-subtle)', borderRadius: '3px', overflow: 'hidden' }}>
                          <div style={{ width: `${s.observedDemand}%`, height: '100%', background: 'var(--blue-primary)' }} />
                        </div>
                      </div>
                    </td>
                    <td style={{ padding: '12px', fontWeight: 800, color: s.gap > 35 ? 'var(--red-critical)' : 'var(--orange-warning)' }}>
                      +{s.gap}% Shortage
                    </td>
                    <td style={{ padding: '12px' }}>
                      <span
                        style={{
                          padding: '3px 8px',
                          borderRadius: 'var(--radius-sm)',
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          background: s.emergingPriority === 'CRITICAL' ? 'var(--red-subtle)' : 'var(--blue-subtle)',
                          color: s.emergingPriority === 'CRITICAL' ? 'var(--red-critical)' : 'var(--blue-primary)'
                        }}
                      >
                        {s.emergingPriority}
                      </span>
                    </td>
                    <td style={{ padding: '12px' }}>
                      <button
                        className="btn-secondary"
                        style={{ padding: '4px 8px', fontSize: '0.72rem' }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedSkill(s);
                        }}
                      >
                        Curriculum Spec
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Selected Skill Curriculum Alignment Card */}
      {selectedSkill && (
        <div className="card" style={{ padding: '24px', borderLeft: '4px solid var(--teal-primary)' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '14px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <span className="badge-info">{selectedSkill.category}</span>
                <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                  Benchmark Hiring Clusters: {selectedSkill.benchmarkSectors.join(', ')}
                </span>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>
                Curriculum & Skilling Blueprint: {selectedSkill.name}
              </h3>
            </div>

            <div style={{ textAlign: 'right' }}>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Local Talent Deficit</span>
              <div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--red-critical)' }}>
                +{selectedSkill.gap}% Unmet Demand
              </div>
            </div>
          </div>

          <div style={{ background: 'var(--bg-tertiary)', padding: '16px', borderRadius: 'var(--radius-md)', marginBottom: '16px' }}>
            <h4 style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '6px' }}>
              Recommended Technical Curriculum Modules for Universities & ITIs:
            </h4>
            <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
              {selectedSkill.suggestedCurricula}
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', fontSize: '0.76rem', color: 'var(--text-muted)' }}>
            <span>
              Applicable to: Anna University Regional Campus, CODISSIA ITI Labs, Polytechnic Board of Tamil Nadu.
            </span>
            <button
              onClick={() => onNavigateToTab('recommendations')}
              className="btn-primary"
              style={{ padding: '6px 14px', fontSize: '0.76rem' }}
            >
              <span>View Policy Interventions for Skills</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
