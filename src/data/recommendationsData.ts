import { ActionRecommendation } from '../types';

export const RECOMMENDATIONS_BY_REGION: Record<string, ActionRecommendation[]> = {
  'coimbatore': [
    {
      id: 'rec-cbe-1',
      title: 'Accelerate Dedicated Irugur Inland Freight Dry-Port & Container Corridor',
      category: 'TRANSPORT_INFRA',
      issueIdentified: 'Container transit to Cochin/Tuticorin ports experiences 10.8 hrs delay (benchmark: 6.2 hrs), incurring 22% higher logistics costs for export foundries and textile machinery.',
      supportingEvidence: 'OpenStreetMap GIS route impedance model shows NH-544 urban congestion adds 3.4 hrs of idle container detention.',
      suggestedIntervention: 'Form a Joint Special Purpose Vehicle (SPV) with Southern Railway and CONCOR to establish a bonded inland container depot (ICD) with direct rail freight scheduled lines to Cochin Vallarpadam and Tuticorin VOC Port.',
      intendedBeneficiaries: 'Over 2,400 precision engineering MSMEs, pump exporters, and automotive component manufacturers.',
      stakeholders: ['District Administration (Collectorate)', 'CONCOR', 'Southern Railway', 'CODISSIA', 'TIDCO'],
      feasibilityChecks: 'Rail siding availability at Irugur junction, land acquisition for 45-acre bonded container yard, environmental clearance.',
      potentialBenefits: 'Reduces export freight transit time by 42%; cuts container logistics cost by ₹14,500 per TEU.',
      tradeoffsAndCosts: 'Estimated capital expenditure: ₹320 Cr; requires coordinate realignment with municipal bypass master plan.',
      timeline: 'MEDIUM_TERM',
      evidenceStrength: 'STRONG',
      relevantIndicators: ['freightLogisticsIndex', 'roadDensity', 'transportAccessIndex']
    },
    {
      id: 'rec-cbe-2',
      title: 'Establish Industry-Funded Mechatronics & CNC Automation Finishing Schools',
      category: 'EMPLOYMENT_SKILLS',
      issueIdentified: '64% of foundries and precision component units experience severe vacancies for automated tooling technicians, despite 21.8% youth underemployment in general diplomas.',
      supportingEvidence: 'PLFS 2024 microdata confirms high educational attainment (32.6% tertiary) paired with a 42% skill mismatch score in automated manufacturing skills.',
      suggestedIntervention: 'Launch "Kovai Skill Guild" — 12 industry-grade micro-credential labs co-financed by CODISSIA and the Directorate of Technical Education inside existing government ITIs and polytechnic colleges.',
      intendedBeneficiaries: '4,500 polytechnic diploma holders and vocational trainees annually.',
      stakeholders: ['Tamil Nadu Skill Development Corporation (TNSDC)', 'CODISSIA', 'AIEMA', 'Anna University Regional Campus'],
      feasibilityChecks: 'Lab equipment procurement via CSR matched funding; dual-apprenticeship stipend structure.',
      potentialBenefits: 'Lowers machine setup downtime from 18% to 6%; increases fresh graduate starting monthly compensation by 35%.',
      tradeoffsAndCosts: 'Estimated seed funding: ₹28 Cr; requires industry mentors to commit 4 hours weekly.',
      timeline: 'SHORT_TERM',
      evidenceStrength: 'STRONG',
      relevantIndicators: ['skillMismatchIndex', 'youthUnemployment', 'higherEduPercent']
    },
    {
      id: 'rec-cbe-3',
      title: 'Decentralized Solar Packhouse & Cold-Chain Network for Pollachi Coconut Belt',
      category: 'AGRO_FOOD',
      issueIdentified: 'Post-harvest losses in tender coconut, nutmeg, and spices reach 28.5% due to absence of temperature-controlled aggregation within 20 km of harvesting nodes.',
      supportingEvidence: 'Department of Agricultural Marketing GIS audits show cold storage capacity deficit is 34.5% across southern taluks.',
      suggestedIntervention: 'Deploy 8 decentralized 50-tonne solar-powered cold stores with automated sorting and grading machines across registered Farmer Producer Companies (FPOs).',
      intendedBeneficiaries: '18,000+ smallholder coconut and horticulture farmers in Pollachi, Anaimalai, and Kinathukadavu.',
      stakeholders: ['NABARD', 'Department of Horticulture & Plantation Crops', 'TNAU Coimbatore', 'Pollachi Coconut Producers Federation'],
      feasibilityChecks: 'Rooftop solar microgrid load balance; 3-phase grid backup; FPO maintenance training.',
      potentialBenefits: 'Extends fresh produce shelf life by 14 days; boosts farm-gate realization by 28% through export grade sorting.',
      tradeoffsAndCosts: 'Capital outlay: ₹18.5 Cr (covered 60% under Agri Infrastructure Fund); requires ongoing cold-chain power auditing.',
      timeline: 'SHORT_TERM',
      evidenceStrength: 'STRONG',
      relevantIndicators: ['coldStorageGapPercent', 'agriculturalProductivity', 'ruralEmployment']
    },
    {
      id: 'rec-cbe-4',
      title: 'Group Captive Renewable Wheeling Framework for MSME Foundry Clusters',
      category: 'MSME_INDUSTRY',
      issueIdentified: 'High commercial/industrial power tariffs and quarterly raw material scrap price swings threaten the economic survival of 600+ traditional cupola casting foundries.',
      supportingEvidence: 'Foundry energy expenses have risen to 22% of gross manufacturing cost, causing margins to drop to 6.8%.',
      suggestedIntervention: 'Form a cluster-level captive solar/wind energy aggregation cooperative enabling small units to wheel green electricity under simplified TNERC open access regulations.',
      intendedBeneficiaries: 'Foundry cluster MSMEs, precision casting units, and downstream pump/auto component makers.',
      stakeholders: ['TANGEDCO', 'Institute of Indian Foundrymen (IIF)', 'CODISSIA', 'State MSME Department'],
      feasibilityChecks: 'Substation wheeling capacity in Annur and Arasur; minimum consortium equity threshold.',
      potentialBenefits: 'Reduces unit electricity cost from ₹8.40/kWh to ~₹4.80/kWh, preserving 35,000 skilled manufacturing jobs.',
      tradeoffsAndCosts: 'Consortium formation friction; grid cross-subsidy surcharge negotiations.',
      timeline: 'MEDIUM_TERM',
      evidenceStrength: 'MODERATE',
      relevantIndicators: ['msmeDensity', 'activeEnterprises', 'powerReliabilityHrs']
    }
  ]
};
