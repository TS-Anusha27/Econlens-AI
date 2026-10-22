import React from 'react';
import { RegionData } from '../types';
import { 
  Printer, 
  Download, 
  X, 
  FileText, 
  ShieldCheck, 
  AlertCircle, 
  Calendar,
  Building,
  CheckCircle2
} from 'lucide-react';

interface ReportExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  region: RegionData;
}

export const ReportExportModal: React.FC<ReportExportModalProps> = ({
  isOpen,
  onClose,
  region
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-card" 
        onClick={(e) => e.stopPropagation()} 
        style={{ maxWidth: '900px', height: '90vh' }}
      >
        {/* Modal Controls Bar (Hidden during print) */}
        <div 
          className="no-print"
          style={{
            padding: '16px 24px',
            borderBottom: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'var(--bg-glass)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FileText size={20} color="var(--blue-primary)" />
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800 }}>
              Regional Economic Intelligence Briefing
            </h3>
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            <button onClick={handlePrint} className="btn-primary" style={{ padding: '8px 16px', fontSize: '0.82rem' }}>
              <Printer size={16} />
              <span>Print / Save as PDF</span>
            </button>
            <button className="btn-icon" onClick={onClose}>
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Printable Document Body */}
        <div style={{ padding: '36px', overflowY: 'auto', background: 'white', color: '#0F172A', lineHeight: '1.6' }} id="printable-report">
          {/* Header */}
          <div style={{ borderBottom: '2px solid #0B192C', paddingBottom: '16px', marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#0D9488', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                ECONLENS AI • DECISION INTELLIGENCE PLATFORM
              </div>
              <h1 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#0B192C', marginTop: '2px' }}>
                Regional Economic Intelligence Briefing: {region.name}
              </h1>
              <div style={{ fontSize: '0.85rem', color: '#475569' }}>
                Prepared for: <strong>District Administration & Development Planning Authorities</strong>
              </div>
            </div>

            <div style={{ textAlign: 'right', fontSize: '0.75rem', color: '#64748B' }}>
              <div>Date: <strong>October 2024 (Harmonized)</strong></div>
              <div>Territory: <strong>{region.state}, India</strong></div>
              <div>Status: <strong>Official Statistical Assessment</strong></div>
            </div>
          </div>

          {/* 1. Executive Summary */}
          <section style={{ marginBottom: '20px' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0B192C', borderBottom: '1px solid #E2E8F0', paddingBottom: '4px', marginBottom: '8px' }}>
              1. Executive Summary
            </h2>
            <p style={{ fontSize: '0.85rem', color: '#334155' }}>
              {region.name} represents a high-potential sub-national economy characterized by an Economic Potential Index of <strong>{region.potentialIndex.toFixed(1)}/100</strong> and an empirical Observed Economic Activity Index of <strong>{region.observedActivityIndex.toFixed(1)}/100</strong>. This creates an unactivated <strong>Opportunity Gap of {region.opportunityGap.toFixed(1)} points</strong> ({((region.opportunityGap / region.potentialIndex) * 100).toFixed(0)}% of potential). Structural bottlenecks in mechatronics skill alignment and maritime port freight friction currently constrain higher realization.
            </p>
          </section>

          {/* 2. Core Indicator Snapshot Table */}
          <section style={{ marginBottom: '20px' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0B192C', borderBottom: '1px solid #E2E8F0', paddingBottom: '4px', marginBottom: '10px' }}>
              2. Verified Regional Indicator Snapshot
            </h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8rem', border: '1px solid #CBD5E1' }}>
              <tbody>
                <tr style={{ background: '#F8FAFC' }}>
                  <td style={{ padding: '8px', border: '1px solid #CBD5E1', fontWeight: 700 }}>Population & Demographics</td>
                  <td style={{ padding: '8px', border: '1px solid #CBD5E1' }}>{region.population} Lakh ({region.workingAgePercent}% Working Age 15-59)</td>
                  <td style={{ padding: '8px', border: '1px solid #CBD5E1', fontWeight: 700 }}>Literacy & Higher Ed</td>
                  <td style={{ padding: '8px', border: '1px solid #CBD5E1' }}>{region.literacyRate}% Literacy • {region.higherEduPercent}% Tertiary</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px', border: '1px solid #CBD5E1', fontWeight: 700 }}>Labour Force Participation (LFPR)</td>
                  <td style={{ padding: '8px', border: '1px solid #CBD5E1' }}>{region.indicators.lfpr}%</td>
                  <td style={{ padding: '8px', border: '1px solid #CBD5E1', fontWeight: 700 }}>Youth Unemployment</td>
                  <td style={{ padding: '8px', border: '1px solid #CBD5E1' }}>{region.indicators.youthUnemployment}% (Overall: {region.indicators.unemploymentRate}%)</td>
                </tr>
                <tr style={{ background: '#F8FAFC' }}>
                  <td style={{ padding: '8px', border: '1px solid #CBD5E1', fontWeight: 700 }}>Registered MSMEs</td>
                  <td style={{ padding: '8px', border: '1px solid #CBD5E1' }}>{region.indicators.activeEnterprises.toLocaleString()} ({region.indicators.msmeDensity} per 10k)</td>
                  <td style={{ padding: '8px', border: '1px solid #CBD5E1', fontWeight: 700 }}>GVA Sectoral Share</td>
                  <td style={{ padding: '8px', border: '1px solid #CBD5E1' }}>Mfg: {region.indicators.gvaShare.manufacturing}% | Serv: {region.indicators.gvaShare.services}% | Agri: {region.indicators.gvaShare.agriculture}%</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px', border: '1px solid #CBD5E1', fontWeight: 700 }}>Road Density & Transport</td>
                  <td style={{ padding: '8px', border: '1px solid #CBD5E1' }}>{region.indicators.roadDensity} km/100km² • Score: {(region.indicators.transportAccessIndex * 100).toFixed(0)}%</td>
                  <td style={{ padding: '8px', border: '1px solid #CBD5E1', fontWeight: 700 }}>Satellite VIIRS Radiance</td>
                  <td style={{ padding: '8px', border: '1px solid #CBD5E1' }}>{region.indicators.nighttimeRadiance} nW/cm²/sr (YoY Growth: +{region.indicators.economicGrowthYoY}%)</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* 3. Key Bottlenecks Diagnosed */}
          <section style={{ marginBottom: '20px' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0B192C', borderBottom: '1px solid #E2E8F0', paddingBottom: '4px', marginBottom: '10px' }}>
              3. AI-Detected Bottlenecks (SHAP Attribution)
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {region.bottlenecks.slice(0, 3).map((btn) => (
                <div key={btn.id} style={{ border: '1px solid #E2E8F0', borderRadius: '6px', padding: '10px', fontSize: '0.8rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <strong>{btn.name} ({btn.category})</strong>
                    <span style={{ fontWeight: 700, color: '#2563EB' }}>SHAP Importance: {btn.shapImportance}%</span>
                  </div>
                  <div style={{ color: '#475569', marginBottom: '4px' }}>
                    <strong>Evidence:</strong> {btn.evidenceMetric}
                  </div>
                  <div style={{ color: '#0D9488' }}>
                    <strong>Recommended Study:</strong> {btn.recommendedInvestigation}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 4. Action Recommendations */}
          <section style={{ marginBottom: '24px' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0B192C', borderBottom: '1px solid #E2E8F0', paddingBottom: '4px', marginBottom: '10px' }}>
              4. Evidence-Based Strategic Interventions
            </h2>
            <ol style={{ paddingLeft: '18px', fontSize: '0.82rem', color: '#334155', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>
                <strong>Multi-Modal Freight Rail Inland Container Port:</strong> Establish a dedicated SPV at Irugur rail junction to bypass highway bottlenecks and cut export haulage dwell times to maritime ports.
              </li>
              <li>
                <strong>Kovai Skill Guild Industry Labs:</strong> Equip 12 government polytechnics with Siemens/Fanuc certified CNC/PLC automation cells to absorb underemployed technical youth.
              </li>
              <li>
                <strong>Decentralized Solar Cold Chain in Pollachi:</strong> Deploy 8 Farmer Producer Company packhouses to reduce the 28.5% post-harvest spoilage in coconut and horticulture.
              </li>
            </ol>
          </section>

          {/* 5. Provenance & Scientific Disclaimer */}
          <div style={{ borderTop: '1px solid #CBD5E1', paddingTop: '12px', fontSize: '0.72rem', color: '#64748B' }}>
            <strong>Methodology & Compliance Notice:</strong> Data synthesized from MoSPI Periodic Labour Force Survey 2023-24, World Bank Space2Stats VIIRS Nighttime Lights, OpenStreetMap GIS road topology, and Ministry of MSME Udyam registries. Indices follow published composite Min-Max normalization. Recommendations provide technical decision-support and require local statutory review.
          </div>
        </div>
      </div>
    </div>
  );
};
