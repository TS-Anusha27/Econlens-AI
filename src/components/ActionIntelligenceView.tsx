import React, { useState } from 'react';
import { RegionData, ActionRecommendation } from '../types';
import { RECOMMENDATIONS_BY_REGION } from '../data/recommendationsData';
import { 
  FileText, 
  Printer, 
  Download, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  Users, 
  Building, 
  Truck, 
  Tractor, 
  GraduationCap, 
  ExternalLink,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface ActionIntelligenceViewProps {
  region: RegionData;
  onOpenExportReport: () => void;
}

export const ActionIntelligenceView: React.FC<ActionIntelligenceViewProps> = ({
  region,
  onOpenExportReport
}) => {
  const recommendations = RECOMMENDATIONS_BY_REGION[region.id] || RECOMMENDATIONS_BY_REGION['coimbatore'];
  const [expandedRecId, setExpandedRecId] = useState<string | null>(recommendations[0]?.id || null);
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = ['ALL', 'TRANSPORT_INFRA', 'EMPLOYMENT_SKILLS', 'AGRO_FOOD', 'MSME_INDUSTRY'];

  const filteredRecs = recommendations.filter(r => 
    selectedCategory === 'ALL' || r.category === selectedCategory
  );

  return (
    <div style={{ marginBottom: '48px' }}>
      {/* Title Header */}
      <div style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
          <span className="badge-demo" style={{ background: 'var(--green-subtle)', color: 'var(--green-success)', borderColor: 'var(--green-border)' }}>
            POLICY DECISION SUPPORT
          </span>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
            Evidence-Linked Intervention Pathways (Section 9 & Slide 13)
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 800 }}>
              Regional Action Intelligence — {region.name}
            </h1>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', maxWidth: '960px' }}>
              Structured, data-grounded policy options and feasibility studies to assist district administrators, 
              development agencies, and local industry associations in unlocking untapped capacity.
            </p>
          </div>

          <button
            onClick={onOpenExportReport}
            className="btn-primary"
            style={{ padding: '10px 18px', fontSize: '0.84rem' }}
          >
            <Printer size={16} />
            <span>Generate Official Briefing (Print/PDF)</span>
          </button>
        </div>
      </div>

      {/* Slide 13 Stakeholder Impact Matrix Card */}
      <div className="card" style={{ padding: '24px', marginBottom: '32px', background: 'radial-gradient(circle at 50% 0%, var(--bg-tertiary) 0%, var(--bg-secondary) 100%)' }}>
        <div style={{ textAlign: 'center', marginBottom: '18px' }}>
          <h2 style={{ fontSize: '1.15rem', fontWeight: 800 }}>
            Who Benefits From These Interventions? (Stakeholder Matrix)
          </h2>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            Converting data signals into actionable impact across six institutional roles (Slide 13)
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
          <div style={{ background: 'var(--bg-secondary)', padding: '14px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
            <strong style={{ fontSize: '0.86rem', color: 'var(--blue-primary)', display: 'block', marginBottom: '4px' }}>
              🏛️ Government & Planners
            </strong>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
              Targeted capital allocation, logistics dry-port feasibility, and objective regional budgeting.
            </p>
          </div>

          <div style={{ background: 'var(--bg-secondary)', padding: '14px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
            <strong style={{ fontSize: '0.86rem', color: 'var(--purple-accent)', display: 'block', marginBottom: '4px' }}>
              🏢 MSMEs & Businesses
            </strong>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
              Location intelligence, group captive renewable wheeling, and automated supply chain linkages.
            </p>
          </div>

          <div style={{ background: 'var(--bg-secondary)', padding: '14px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
            <strong style={{ fontSize: '0.86rem', color: 'var(--teal-primary)', display: 'block', marginBottom: '4px' }}>
              🎓 Universities & ITIs
            </strong>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
              Aligning vocational polytechnic syllabi with critical mechatronics and EV diagnostic hiring demand.
            </p>
          </div>

          <div style={{ background: 'var(--bg-secondary)', padding: '14px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
            <strong style={{ fontSize: '0.86rem', color: 'var(--green-success)', display: 'block', marginBottom: '4px' }}>
              🌾 Farmers & FPOs
            </strong>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
              Decentralized cold storage and direct farm-to-cargo export value chain capture.
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', marginBottom: '20px', paddingBottom: '6px' }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              padding: '6px 14px',
              borderRadius: 'var(--radius-md)',
              fontSize: '0.78rem',
              fontWeight: 600,
              background: selectedCategory === cat ? 'var(--blue-primary)' : 'var(--bg-tertiary)',
              color: selectedCategory === cat ? 'white' : 'var(--text-secondary)',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            {cat.replace(/_/g, ' ')}
          </button>
        ))}
      </div>

      {/* Recommendations Cards List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {filteredRecs.map((rec) => {
          const isExpanded = expandedRecId === rec.id;
          return (
            <div
              key={rec.id}
              className="card"
              style={{
                padding: '24px',
                borderLeft: rec.timeline === 'SHORT_TERM' 
                  ? '5px solid var(--green-success)' 
                  : '5px solid var(--blue-primary)',
                transition: 'all var(--transition-fast)'
              }}
            >
              {/* Header */}
              <div
                onClick={() => setExpandedRecId(isExpanded ? null : rec.id)}
                style={{ cursor: 'pointer', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px' }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <span
                      style={{
                        padding: '2px 8px',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        background: rec.timeline === 'SHORT_TERM' ? 'var(--green-subtle)' : 'var(--blue-subtle)',
                        color: rec.timeline === 'SHORT_TERM' ? 'var(--green-success)' : 'var(--blue-primary)'
                      }}
                    >
                      {rec.timeline.replace(/_/g, ' ')}
                    </span>
                    <span className="badge-demo" style={{ fontSize: '0.7rem' }}>
                      {rec.category.replace(/_/g, ' ')}
                    </span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                      Evidence Strength: <strong>{rec.evidenceStrength}</strong>
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                    {rec.title}
                  </h3>
                </div>

                <button className="btn-icon" style={{ flexShrink: 0 }}>
                  {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
              </div>

              {/* Collapsed Brief Preview */}
              {!isExpanded && (
                <div style={{ marginTop: '10px', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                  <strong>Identified Issue:</strong> {rec.issueIdentified.slice(0, 150)}...
                </div>
              )}

              {/* Full Expanded 11-Item Structured Dossier */}
              {isExpanded && (
                <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {/* Issue & Evidence */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
                    <div style={{ background: 'var(--bg-tertiary)', padding: '14px', borderRadius: 'var(--radius-md)' }}>
                      <strong style={{ fontSize: '0.8rem', color: 'var(--orange-warning)', display: 'block', marginBottom: '4px' }}>
                        1. Empirical Issue Identified
                      </strong>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                        {rec.issueIdentified}
                      </p>
                    </div>

                    <div style={{ background: 'var(--bg-tertiary)', padding: '14px', borderRadius: 'var(--radius-md)' }}>
                      <strong style={{ fontSize: '0.8rem', color: 'var(--blue-primary)', display: 'block', marginBottom: '4px' }}>
                        2. Supporting Data Evidence
                      </strong>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                        {rec.supportingEvidence}
                      </p>
                    </div>
                  </div>

                  {/* Suggested Intervention & Beneficiaries */}
                  <div style={{ background: 'var(--blue-subtle)', border: '1px solid var(--blue-border)', padding: '16px', borderRadius: 'var(--radius-md)' }}>
                    <strong style={{ fontSize: '0.86rem', color: 'var(--blue-primary)', display: 'block', marginBottom: '4px' }}>
                      3. Suggested Policy Intervention to Investigate
                    </strong>
                    <p style={{ fontSize: '0.84rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                      {rec.suggestedIntervention}
                    </p>
                  </div>

                  {/* Implementation Grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px', fontSize: '0.78rem' }}>
                    <div style={{ background: 'var(--bg-tertiary)', padding: '12px', borderRadius: 'var(--radius-sm)' }}>
                      <strong>Implementing Stakeholders:</strong><br />
                      <span style={{ color: 'var(--text-secondary)' }}>{rec.stakeholders.join(' • ')}</span>
                    </div>

                    <div style={{ background: 'var(--bg-tertiary)', padding: '12px', borderRadius: 'var(--radius-sm)' }}>
                      <strong>Intended Beneficiaries:</strong><br />
                      <span style={{ color: 'var(--text-secondary)' }}>{rec.intendedBeneficiaries}</span>
                    </div>

                    <div style={{ background: 'var(--bg-tertiary)', padding: '12px', borderRadius: 'var(--radius-sm)' }}>
                      <strong>Required Feasibility Checks:</strong><br />
                      <span style={{ color: 'var(--text-secondary)' }}>{rec.feasibilityChecks}</span>
                    </div>

                    <div style={{ background: 'var(--bg-tertiary)', padding: '12px', borderRadius: 'var(--radius-sm)' }}>
                      <strong>Estimated Potential Benefits:</strong><br />
                      <span style={{ color: 'var(--green-success)', fontWeight: 600 }}>{rec.potentialBenefits}</span>
                    </div>
                  </div>

                  {/* Tradeoffs and Costs */}
                  <div style={{ background: 'var(--orange-subtle)', border: '1px solid var(--orange-border)', padding: '12px 16px', borderRadius: 'var(--radius-md)', fontSize: '0.76rem', color: 'var(--text-primary)' }}>
                    <strong style={{ color: 'var(--orange-warning)' }}>Trade-offs, Capital Outlays & Risk Factors:</strong> {rec.tradeoffsAndCosts}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
