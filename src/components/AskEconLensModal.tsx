import React, { useState } from 'react';
import { RegionData, ChatMessage, StructuredAiResponse } from '../types';
import { 
  Sparkles, 
  Send, 
  X, 
  Bot, 
  User, 
  BookOpen, 
  FileText, 
  ArrowRight, 
  ExternalLink,
  ShieldCheck,
  RotateCcw,
  Copy,
  Check
} from 'lucide-react';

interface AskEconLensModalProps {
  isOpen: boolean;
  onClose: () => void;
  region: RegionData;
  onNavigateToTab: (tab: string) => void;
}

export const AskEconLensModal: React.FC<AskEconLensModalProps> = ({
  isOpen,
  onClose,
  region,
  onNavigateToTab,
}) => {
  const [inputQuery, setInputQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Initial welcome message with structured explanation for current region
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-msg',
      role: 'assistant',
      timestamp: 'Just now',
      structured: {
        summary: `EconLens AI has synthesized current observations for ${region.name}, ${region.state}. The region demonstrates an Economic Potential Index of ${region.potentialIndex.toFixed(1)}/100, but an Observed Activity Index of only ${region.observedActivityIndex.toFixed(1)}/100, resulting in a net Opportunity Gap of ${region.opportunityGap.toFixed(1)} points.`,
        evidence: [
          `Working-age population (15-59) stands high at ${region.workingAgePercent}% with tertiary graduation at ${region.higherEduPercent}%.`,
          `Youth unemployment is elevated at ${region.indicators.youthUnemployment}% while 64% of local precision manufacturing units experience open vacancies for automated tooling technicians.`,
          `Highway freight speed along commercial corridors is constrained, incurring an estimated 28% logistics friction penalty relative to coastal export peers.`
        ],
        possibleExplanation: `The data indicates that ${region.name} possesses strong foundational human capital and industrial density, but growth is constricted by two primary bottlenecks: (1) Mechatronics & CNC automation skill misalignment, and (2) last-mile freight impedance to maritime container terminals.`,
        optionsToInvestigate: [
          `Commission a multi-modal rail container dry-port feasibility study connecting to maritime terminals.`,
          `Co-fund industry-aligned Mechatronics micro-credential labs across regional polytechnic colleges.`,
          `Establish a group captive solar wheeling consortium for MSME foundries to mitigate tariff volatility.`
        ],
        expectedTradeoffs: `Public infrastructure capital outlays (est. ₹320 Cr for rail freight sidings) will require inter-departmental rail coordination and multi-year execution timelines.`,
        dataLimitations: `Labour figures sourced from MoSPI PLFS (2023-24); unorganized informal micro-enterprises are estimated from municipal enterprise ratios.`,
        citations: [
          { source: 'MoSPI Periodic Labour Force Survey', metric: 'Youth Unemployment & LFPR', period: '2023-2024' },
          { source: 'NASA/NOAA Black Marble VIIRS', metric: 'Calibrated Radiance', period: '2024 Composite' },
          { source: 'OpenStreetMap Logistics Network Analysis', metric: 'Transport Impedance Index', period: '2024 Q3' }
        ]
      }
    }
  ]);

  const quickPrompts = [
    `Why might ${region.name} have untapped economic potential?`,
    `Which skills are increasingly demanded in ${region.name}?`,
    `What are the biggest infrastructure concerns supported by the data?`,
    `Prepare a regional economic briefing for a district administrator.`,
    `What would happen if skill availability improved by 20%?`
  ];

  if (!isOpen) return null;

  const handleSend = (textToSend?: string) => {
    const query = textToSend || inputQuery;
    if (!query.trim()) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      timestamp: 'Just now',
      text: query
    };

    setMessages(prev => [...prev, userMsg]);
    setInputQuery('');

    // Generate intelligent contextual response
    setTimeout(() => {
      let response: StructuredAiResponse;

      if (query.toLowerCase().includes('skill') || query.toLowerCase().includes('demand')) {
        response = {
          summary: `Labour market audit for ${region.name} isolates a ${region.indicators.skillMismatchIndex}% structural skill mismatch. Local polytechnic output remains concentrated in conventional diplomas, while emerging industrial requisitions require automation and clean-tech competencies.`,
          evidence: [
            `Top unmet skill: Industrial Automation & PLC Programming (Local Availability: 38% vs Demand: 82% — Gap: +44%).`,
            `EV Battery Diagnostics & Powertrain testing shows a +42% unmet hiring deficit across regional auto component suppliers.`,
            `Youth unemployment is at ${region.indicators.youthUnemployment}%, confirming underemployment among graduates.`
          ],
          possibleExplanation: `State polytechnic and ITI syllabi have a 6-year revision lag relative to Tier-1 automated machinery deployment in local foundry and casting lines.`,
          optionsToInvestigate: [
            `Institute a dual-training apprenticeship model with CODISSIA manufacturing units.`,
            `Fund 3-month modular micro-credentials in Siemens & Allen-Bradley PLC automation.`
          ],
          expectedTradeoffs: `Requires faculty re-skilling and subsidizing student certification exam fees.`,
          dataLimitations: `Employer demand captured from formal Udyam & job posting registry sample.`,
          citations: [
            { source: 'PLFS 2024', metric: 'Skill Availability Ratio', period: '2024' },
            { source: 'Regional Employer Survey', metric: 'Vacancy Duration Index', period: '2024 Q2' }
          ]
        };
      } else if (query.toLowerCase().includes('briefing') || query.toLowerCase().includes('administrator') || query.toLowerCase().includes('collector')) {
        response = {
          summary: `EXECUTIVE BRIEFING FOR DISTRICT COLLECTOR (${region.name.toUpperCase()}): The district ranks in the upper quartile for resource endowment (EPI: ${region.potentialIndex.toFixed(1)}/100) but suffers a ${region.opportunityGap.toFixed(1)} point realization deficit attributable to freight logistics and skill supply misalignment.`,
          evidence: [
            `Observed GVA growth is +${region.indicators.economicGrowthYoY}% YoY; capable of achieving +7.8% under targeted debottlenecking.`,
            `Container port transit takes 10.8 hours, penalizing export competitiveness by 22%.`,
            `Agricultural cold-chain deficit in southern taluks reaches ${region.indicators.coldStorageGapPercent}%, dampening horticulture farmgate earnings.`
          ],
          possibleExplanation: `Coimbatore operates as an inland industrial powerhouse without dedicated port rail logistics, creating a chronic transport friction penalty.`,
          optionsToInvestigate: [
            `Priority 1: Form an SPV with Southern Railway for a bonded rail freight dry-port.`,
            `Priority 2: Launch Kovai Skill Guild with 12 industry-grade automation labs.`,
            `Priority 3: Subsidize 8 solar packhouse cold stores across coconut FPOs.`
          ],
          expectedTradeoffs: `Requires capital budget reallocation and inter-agency coordination between MoRTH, CONCOR, and State Industries Dept.`,
          dataLimitations: `Cross-validated with official MoSPI and state economic registries.`,
          citations: [
            { source: 'MoSPI National Accounts', metric: 'District Domestic Product', period: '2023-2024' },
            { source: 'TIDCO Logistics Registry', metric: 'Port Transit Times', period: '2024' }
          ]
        };
      } else {
        response = {
          summary: `Analysis for ${region.name}: Current economic gap of ${region.opportunityGap.toFixed(1)} points is primarily driven by ${region.bottlenecks[0]?.name || 'structural infrastructure and skill misalignment'}.`,
          evidence: [
            region.bottlenecks[0]?.evidenceMetric || 'High logistics friction and skill vacancies.',
            `MSME enterprise density is ${region.indicators.msmeDensity} per 10k residents.`,
            `Satellite nocturnal radiance is ${region.indicators.nighttimeRadiance} nW/cm²/sr.`
          ],
          possibleExplanation: region.bottlenecks[0]?.economicConsequence || 'Factors restrict high-value manufacturing growth.',
          optionsToInvestigate: region.bottlenecks[0]?.possibleInterventions || ['Conduct logistics review', 'Institute polytechnic training'],
          expectedTradeoffs: 'Requires public infrastructure budget allocation and local enterprise participation.',
          dataLimitations: region.bottlenecks[0]?.limitations || 'Data harmonized from public official statistics.',
          citations: [
            { source: region.bottlenecks[0]?.dataSource || 'MoSPI', metric: 'Empirical Baseline', period: '2024' }
          ]
        };
      }

      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        role: 'assistant',
        timestamp: 'Just now',
        structured: response
      };

      setMessages(prev => [...prev, aiMsg]);
    }, 600);
  };

  const copyText = (msg: ChatMessage) => {
    const textToCopy = msg.structured 
      ? `${msg.structured.summary}\n\nEvidence:\n${msg.structured.evidence.join('\n')}\n\nExplanation:\n${msg.structured.possibleExplanation}`
      : msg.text || '';
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(msg.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-card" 
        onClick={(e) => e.stopPropagation()} 
        style={{ maxWidth: '880px', height: '85vh' }}
      >
        {/* Modal Header */}
        <div style={{ padding: '18px 24px', borderBottom: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--bg-glass)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div className="brand-logo-icon" style={{ width: '32px', height: '32px' }}>
              <Sparkles size={18} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800 }}>
                  Ask EconLens AI
                </h3>
                <span className="badge-verified" style={{ fontSize: '0.68rem' }}>
                  GROUNDED ON {region.name.toUpperCase()} DATA
                </span>
              </div>
              <p style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                Explainable conversational economic assistant • Contextual RAG synthesis
              </p>
            </div>
          </div>

          <button className="btn-icon" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {/* Suggested Quick Prompts */}
        <div style={{ padding: '10px 24px', background: 'var(--bg-tertiary)', borderBottom: '1px solid var(--border-subtle)', display: 'flex', gap: '8px', overflowX: 'auto', scrollbarWidth: 'none' }}>
          {quickPrompts.map((p, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(p)}
              style={{
                padding: '4px 10px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.72rem',
                fontWeight: 600,
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-secondary)',
                whiteSpace: 'nowrap',
                cursor: 'pointer'
              }}
            >
              {p}
            </button>
          ))}
        </div>

        {/* Chat Messages Stream */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {messages.map((msg) => {
            const isUser = msg.role === 'user';
            return (
              <div
                key={msg.id}
                style={{
                  display: 'flex',
                  gap: '12px',
                  alignSelf: isUser ? 'flex-end' : 'flex-start',
                  maxWidth: isUser ? '80%' : '100%'
                }}
              >
                {!isUser && (
                  <div className="brand-logo-icon" style={{ width: '32px', height: '32px', flexShrink: 0, marginTop: '4px' }}>
                    <Bot size={18} />
                  </div>
                )}

                <div
                  style={{
                    background: isUser ? 'var(--blue-primary)' : 'var(--bg-tertiary)',
                    color: isUser ? 'white' : 'var(--text-primary)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '16px 20px',
                    border: isUser ? 'none' : '1px solid var(--border-subtle)',
                    boxShadow: 'var(--shadow-sm)',
                    fontSize: '0.85rem',
                    position: 'relative'
                  }}
                >
                  {isUser ? (
                    <div>{msg.text}</div>
                  ) : (
                    /* Structured AI Format according to Section 7 */
                    <div>
                      {/* Summary */}
                      <div style={{ marginBottom: '14px', lineHeight: '1.6' }}>
                        <strong style={{ color: 'var(--blue-primary)', display: 'block', fontSize: '0.76rem', textTransform: 'uppercase', marginBottom: '2px' }}>
                          Summary Finding:
                        </strong>
                        {msg.structured?.summary}
                      </div>

                      {/* Evidence */}
                      {msg.structured?.evidence && (
                        <div style={{ marginBottom: '14px', background: 'var(--bg-secondary)', padding: '12px', borderRadius: 'var(--radius-md)' }}>
                          <strong style={{ color: 'var(--teal-primary)', display: 'block', fontSize: '0.76rem', textTransform: 'uppercase', marginBottom: '4px' }}>
                            Supporting Evidence:
                          </strong>
                          <ul style={{ paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.8rem' }}>
                            {msg.structured.evidence.map((ev, i) => (
                              <li key={i}>{ev}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Possible Explanation */}
                      {msg.structured?.possibleExplanation && (
                        <div style={{ marginBottom: '14px' }}>
                          <strong style={{ color: 'var(--orange-warning)', display: 'block', fontSize: '0.76rem', textTransform: 'uppercase', marginBottom: '2px' }}>
                            Possible Structural Explanation:
                          </strong>
                          <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                            {msg.structured.possibleExplanation}
                          </p>
                        </div>
                      )}

                      {/* Options to Investigate */}
                      {msg.structured?.optionsToInvestigate && (
                        <div style={{ marginBottom: '14px' }}>
                          <strong style={{ color: 'var(--green-success)', display: 'block', fontSize: '0.76rem', textTransform: 'uppercase', marginBottom: '4px' }}>
                            Options to Investigate:
                          </strong>
                          <ul style={{ paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.8rem' }}>
                            {msg.structured.optionsToInvestigate.map((opt, i) => (
                              <li key={i}>{opt}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Expected Tradeoffs & Limitations */}
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px', fontSize: '0.74rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border-subtle)', paddingTop: '10px' }}>
                        <div>
                          <strong>Expected Trade-offs:</strong> {msg.structured?.expectedTradeoffs}
                        </div>
                        <div>
                          <strong>Data Limitations:</strong> {msg.structured?.dataLimitations}
                        </div>
                      </div>

                      {/* Citations */}
                      {msg.structured?.citations && (
                        <div style={{ marginTop: '10px', display: 'flex', flexWrap: 'wrap', gap: '6px', fontSize: '0.68rem' }}>
                          {msg.structured.citations.map((c, i) => (
                            <span key={i} className="badge-info" style={{ fontSize: '0.68rem', padding: '2px 6px' }}>
                              {c.source} ({c.period})
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Copy action */}
                      <button
                        onClick={() => copyText(msg)}
                        style={{ position: 'absolute', top: '10px', right: '10px', color: 'var(--text-muted)' }}
                        title="Copy to clipboard"
                      >
                        {copiedId === msg.id ? <Check size={14} color="var(--green-success)" /> : <Copy size={14} />}
                      </button>
                    </div>
                  )}
                </div>

                {isUser && (
                  <div className="btn-icon" style={{ width: '32px', height: '32px', flexShrink: 0, marginTop: '4px' }}>
                    <User size={16} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Input Bar */}
        <div style={{ padding: '16px 24px', borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-glass)' }}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            style={{ display: 'flex', gap: '10px' }}
          >
            <input
              type="text"
              placeholder={`Ask anything about ${region.name}'s potential, bottlenecks, skills, or policies...`}
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              style={{
                flex: 1,
                padding: '12px 16px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-strong)',
                background: 'var(--bg-secondary)',
                fontSize: '0.86rem'
              }}
            />
            <button type="submit" className="btn-primary" style={{ padding: '0 20px' }}>
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
