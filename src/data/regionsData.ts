import { RegionData } from '../types';
import { POLLACHI_DATA } from './geographyRegistry';

export const REGIONS_DATA: Record<string, RegionData> = {
  'pollachi': POLLACHI_DATA,

  'coimbatore': {
    id: 'coimbatore',
    name: 'Coimbatore',
    state: 'Tamil Nadu',
    country: 'India',
    type: 'district',
    lat: 11.0168,
    lng: 76.9558,
    areaKm2: 4723,
    population: 34.5, // 3.45 million
    workingAgePercent: 68.2,
    literacyRate: 84.3,
    higherEduPercent: 32.6,
    
    // Core Indices (Slide 12 & 2)
    potentialIndex: 86.4,
    observedActivityIndex: 58.2,
    opportunityGap: 28.2,
    opportunityStatus: 'HIGH_POTENTIAL_BOTTLENECK',

    administrativeHierarchy: {
      country: 'India',
      state: 'Tamil Nadu',
      district: 'Coimbatore'
    },

    summaryText: 'Coimbatore is a diversified manufacturing and engineering powerhouse with a strong MSME base. Its future growth depends on resolving port freight delays, modernizing casting and CNC tooling skills, and unlocking agro-processing value in southern taluks like Pollachi.',

    keyDrivers: {
      primarySectors: [
        {
          name: 'Precision Engineering, Pumps & Foundry',
          sharePercent: 42.6,
          employmentPercent: 38.0,
          description: 'Supplies over 45% of India’s domestic and agricultural water pumps alongside critical automotive castings and CNC tooling.'
        },
        {
          name: 'Services, IT & Healthcare',
          sharePercent: 43.2,
          employmentPercent: 36.0,
          description: 'Expanding software service centers, engineering R&D hubs, and tertiary medical health cities servicing western Tamil Nadu.'
        },
        {
          name: 'Textiles, Technical Weaving & Garments',
          sharePercent: 14.2,
          employmentPercent: 26.0,
          description: 'Historic "Manchester of South India" hosting automated spinning mills, technical non-woven fabrics, and garment units.'
        }
      ],
      livelihoodsDescription: 'Over 60% of Coimbatore’s workforce is employed across MSME manufacturing workshops, pump assembly units, spinning mills, and growing IT service centers. Technical diploma holders form the backbone of the district’s industrial ecosystem.',
      keyProducts: [
        'Agricultural & Submersible Water Pumps',
        'Automotive Precision Castings & Forgings',
        'Textile Machinery & Spinning Spindles',
        'Cotton Yarn & Medical Technical Textiles',
        'Wet Grinders & Kitchen Appliances',
        'Coconut, Spices & Horticulture Produce'
      ],
      comparativeAdvantages: [
        'Dense concentration of over 54,000 active MSMEs and specialized casting foundries',
        'Strong technical education ecosystem with 45+ premier engineering colleges and polytechnic institutes',
        'Proactive cooperative industrial bodies including CODISSIA, SIEMA, and Institute of Indian Foundrymen',
        'Favorable inland climatic conditions and proximity to Palakkad Gap trade logistics route'
      ],
      expansionOpportunities: [
        'Transition from conventional ICE auto components to electric vehicle battery pack assemblies and motor drivetrains',
        'Dedicated rail container dry-port connecting to Tuticorin VOC and Cochin ports to cut freight costs by 40%',
        'Decentralized agricultural cold-chain network across southern coconut blocks like Pollachi and Anaimalai'
      ]
    },

    strengths: [
      {
        title: 'Precision Engineering & MSME Density',
        description: 'Produces over 45% of India’s domestic and agricultural water pumps and critical automotive precision components.',
        evidence: 'Over 54,000 registered MSMEs operate across casting, machining, and tooling clusters.',
        benchmark: 'Highest pump manufacturing concentration in India'
      },
      {
        title: 'Robust Polytechnic & Engineering Talent Pool',
        description: 'Dense network of technical institutions graduating over 28,000 engineers and diploma holders annually.',
        evidence: 'Tertiary educational graduation rate reaches 32.6% (state average: 28.4%).',
        benchmark: '45+ accredited engineering colleges'
      },
      {
        title: 'Strong Cluster-Level Institutional Governance',
        description: 'Industry associations like CODISSIA and SIEMA operate shared exhibition centers, defense innovation hubs, and supplier consortiums.',
        evidence: 'Successfully operationalized CODISSIA Industrial Parks with shared infrastructure.',
        benchmark: 'Pioneer of cluster-led SME development models'
      }
    ],

    challenges: [
      {
        title: 'High Freight Logistics Friction to Container Ports',
        description: 'Inland export shipments face average 10.8-hour transit times to Cochin or Tuticorin ports compared to 6.2-hour benchmark.',
        evidence: 'Commercial GPS probes show highway bottleneck friction adds 22% higher container logistics costs.',
        benchmark: '215 km distance with road freight congestion'
      },
      {
        title: 'CNC & Mechatronics Skill Mismatch',
        description: 'Foundries and precision manufacturers struggle with severe vacancies for automated tooling and PLC programmers despite youth underemployment.',
        evidence: 'Employer survey confirms 64% of precision firms report 60+ day vacancy durations for automation technicians.',
        benchmark: '42.0% skill mismatch index'
      },
      {
        title: 'Energy Tariff Escalation in Foundries',
        description: 'Rising industrial electricity tariffs and scrap steel price volatility reduce operating margins in small cupola casting units.',
        evidence: 'Operating margins across traditional foundries dropped from 11.2% in 2018 to 6.8% in 2024.',
        benchmark: '18% power tariff rise over 3 years'
      }
    ],

    multiYearProjections: {
      horizons: [
        {
          years: 1,
          label: '1 Year (Quick Wins Active)',
          baseline: { gva: 90.4, gap: 28.2, jobsAffected: 8500, msmeGrowth: 5.4 },
          plan: { gva: 95.8, gap: 23.4, jobsAffected: 24000, msmeGrowth: 8.2 },
          accelerated: { gva: 99.2, gap: 20.8, jobsAffected: 36000, msmeGrowth: 10.5 }
        },
        {
          years: 3,
          label: '3 Years (Dry Port & Skill Labs Live)',
          baseline: { gva: 94.2, gap: 27.5, jobsAffected: 18000, msmeGrowth: 5.6 },
          plan: { gva: 108.4, gap: 16.2, jobsAffected: 58000, msmeGrowth: 12.4 },
          accelerated: { gva: 116.0, gap: 11.5, jobsAffected: 84000, msmeGrowth: 16.8 }
        },
        {
          years: 5,
          label: '5 Years (Full Mechatronics & Green Foundries)',
          baseline: { gva: 98.6, gap: 26.8, jobsAffected: 26000, msmeGrowth: 5.8 },
          plan: { gva: 124.5, gap: 9.8, jobsAffected: 95000, msmeGrowth: 18.2 },
          accelerated: { gva: 138.2, gap: 5.4, jobsAffected: 142000, msmeGrowth: 24.5 }
        },
        {
          years: 10,
          label: '10 Years (Global Precision Engineering Capital)',
          baseline: { gva: 108.0, gap: 25.0, jobsAffected: 42000, msmeGrowth: 6.0 },
          plan: { gva: 152.0, gap: 4.8, jobsAffected: 165000, msmeGrowth: 26.0 },
          accelerated: { gva: 178.5, gap: 2.1, jobsAffected: 240000, msmeGrowth: 35.0 }
        }
      ],
      assumptions: [
        'Dedicated rail container dry-port at Irugur operational by month 18, cutting export transit times by 40%',
        '12 Kovai Skill Guild automation labs upskill 4,500 diploma technicians annually',
        'Group captive renewable power reduces foundry unit electricity tariffs by 32%',
        'Macro industrial manufacturing growth rate modeled at 7.2% national baseline'
      ],
      uncertaintyRange: '±6.8% sensitivity band depending on global export order demand and raw pig iron price cycles.'
    },
    
    indicators: {
      lfpr: 54.8,
      unemploymentRate: 6.4,
      youthUnemployment: 17.8,
      msmeDensity: 245,
      activeEnterprises: 54200,
      gvaShare: {
        agriculture: 14.2,
        manufacturing: 42.6,
        services: 43.2
      },
      roadDensity: 142.5, // km / 100km²
      transportAccessIndex: 0.68,
      freightLogisticsIndex: 1.28, // 28% higher transit friction than benchmark
      portDistanceKm: 215, // to Cochin / Tuticorin port
      digitalPenetration: 78.4,
      powerReliabilityHrs: 22.8,
      nighttimeRadiance: 36.8, // nW/cm²/sr
      agriculturalProductivity: 4.82,
      coldStorageGapPercent: 34.5,
      skillMismatchIndex: 42.0,
      economicGrowthYoY: 5.4
    },
    
    timeSeries: [
      { year: 2018, gvaIndex: 72.4, nighttimeLight: 28.4, formalJobs: 380, opportunityGap: 33.2, unemploymentRate: 5.2 },
      { year: 2019, gvaIndex: 76.1, nighttimeLight: 30.2, formalJobs: 395, opportunityGap: 31.8, unemploymentRate: 5.6 },
      { year: 2020, gvaIndex: 69.8, nighttimeLight: 26.5, formalJobs: 372, opportunityGap: 36.4, unemploymentRate: 7.8 },
      { year: 2021, gvaIndex: 74.5, nighttimeLight: 31.1, formalJobs: 390, opportunityGap: 34.0, unemploymentRate: 6.9 },
      { year: 2022, gvaIndex: 81.2, nighttimeLight: 33.7, formalJobs: 412, opportunityGap: 30.5, unemploymentRate: 6.5 },
      { year: 2023, gvaIndex: 85.8, nighttimeLight: 35.2, formalJobs: 428, opportunityGap: 29.1, unemploymentRate: 6.4 },
      { year: 2024, gvaIndex: 90.4, nighttimeLight: 36.8, formalJobs: 446, opportunityGap: 28.2, unemploymentRate: 6.4 }
    ],
    
    bottlenecks: [
      {
        id: 'cbe-btn-1',
        name: 'Multi-Modal Freight Logistics & Port Access Friction',
        category: 'INFRASTRUCTURE',
        severity: 'HIGH',
        shapImportance: 31,
        evidenceMetric: 'Logistics transit to Cochin & Tuticorin ports takes 10.8 hrs (benchmark: 6.2 hrs); container detention cost is 22% higher than coastal peers.',
        historicalTrend: 'Average highway commercial freight speeds have plateaued at 24 km/h along NH-544 bottlenecks.',
        dataSource: 'Ministry of Road Transport (MoRTH) & OpenStreetMap GIS Speed Analysis',
        timePeriod: '2022-2024',
        economicConsequence: 'Pumps, textile machinery, and automotive precision exports lose cost competitiveness against Southeast Asian clusters.',
        recommendedInvestigation: 'Conduct detailed feasibility study for dedicated rail cargo inland container dry-port at Irugur junction and highway bypass bypass-tolls.',
        possibleInterventions: [
          'Fast-track Coimbatore-Karur-Tuticorin freight rail corridor',
          'Establish dry port bonded warehousing in Sulur/Irugur',
          'Automated electronic toll lane priority for export freight containers'
        ],
        confidence: 89,
        limitations: 'Calculated using road network topology and commercial GPS probe data; private fleet internal logistics costs are estimated.'
      },
      {
        id: 'cbe-btn-2',
        name: 'Mechatronics & CNC Automation Skill Mismatch',
        category: 'SKILLS',
        severity: 'HIGH',
        shapImportance: 24,
        evidenceMetric: '64% of local pump, foundry, and EV component manufacturers report open vacancies for certified PLC/CNC automation operators, while 21.8% of general polytechnic graduates remain underemployed.',
        historicalTrend: 'Skill deficit widened from 28% in 2019 to 42% in 2024 with the introduction of Industry 4.0 casting equipment.',
        dataSource: 'Periodic Labour Force Survey (PLFS) & CODISSIA / AIEMA Employer Survey',
        timePeriod: '2023-2024',
        economicConsequence: 'Capital investments in automated manufacturing sit idle or run at sub-optimal 60% capacity utilization.',
        recommendedInvestigation: 'Map syllabus gaps between State Board of Technical Education curriculum and CODISSIA manufacturing standards.',
        possibleInterventions: [
          'Industry-funded apprenticeship labs across 12 Coimbatore polytechnic colleges',
          'Subsidized 3-month upskilling micro-credentials in Industrial IoT and PLC programming',
          'Joint curriculum alignment board between MSME clusters and Anna University regional campus'
        ],
        confidence: 84,
        limitations: 'Survey sample covers 420 formal enterprises; unorganized job demand has wider confidence intervals.'
      },
      {
        id: 'cbe-btn-3',
        name: 'Foundry & MSME High Energy Tariffs & Raw Material Scrap Volatility',
        category: 'ECOSYSTEM',
        severity: 'MEDIUM',
        shapImportance: 19,
        evidenceMetric: 'Industrial LT/HT electricity tariffs increased 18% over 3 years; pig iron and scrap price standard deviation exceeds 24% per quarter.',
        historicalTrend: 'Operating profit margins in traditional casting units declined from 11.2% in 2018 to 6.8% in 2024.',
        dataSource: 'TANGEDCO Industrial Filings & Institute of Indian Foundrymen (IIF) Data',
        timePeriod: '2021-2024',
        economicConsequence: 'Slow transition to induction green foundries; ~80 small units suspended operations or converted to subcontract job shops.',
        recommendedInvestigation: 'Assess viability of group captive solar/wind park consortium for MSME clusters in Annur and Arasur.',
        possibleInterventions: [
          'Group captive renewable power wheeling framework for MSME clusters',
          'State raw material scrap hedging buffer bank facility',
          'Capital subsidy for induction furnace conversion from cupola furnaces'
        ],
        confidence: 79,
        limitations: 'Tariff data is official regulatory record; scrap price exposure varies across private vendor contracts.'
      },
      {
        id: 'cbe-btn-4',
        name: 'Perishable Cold-Chain & Agri-Processing Gap in Pollachi Belt',
        category: 'AGRI_LOGISTICS',
        severity: 'MEDIUM',
        shapImportance: 15,
        evidenceMetric: 'Estimated 28.5% post-harvest loss in tender coconut, spices, and horticulture produce due to lack of localized cold storage within a 20 km radius.',
        historicalTrend: 'Processing value addition has remained stagnant at 8.2% of gross agricultural output over 6 years.',
        dataSource: 'Department of Agricultural Marketing & Agri Business (TN) & World Bank Agri-GIS',
        timePeriod: '2022-2023',
        economicConsequence: 'Farmer realization per acre is 35% lower than comparable processed coconut export hubs in Kerala and Southeast Asia.',
        recommendedInvestigation: 'Audit cold storage distribution and APMC mandi packhouse utilization in Pollachi, Anaimalai, and Kinathukadavu.',
        possibleInterventions: [
          'Establish 5 decentralized solar-powered cold stores with packhouse sorting at farmer producer organizations (FPOs)',
          'Incentivize coconut value-addition units (neera, activated carbon, virgin coconut oil)',
          'Direct farm-to-cargo air freight consolidation at Coimbatore International Airport'
        ],
        confidence: 82,
        limitations: 'Cold-chain inventory reflects registered facilities; small farm-level evaporative coolers are not tracked.'
      },
      {
        id: 'cbe-btn-5',
        name: 'Tier-2 Digital Ecosystem & Product Startup Inadequacy',
        category: 'DIGITAL',
        severity: 'LOW',
        shapImportance: 11,
        evidenceMetric: 'Software exports stand at ₹3,200 Cr vs Bengaluru’s ₹1,80,000 Cr, despite 45+ premier engineering colleges in the district.',
        historicalTrend: '78% of local top-quartile IT and CS graduates relocate to Bengaluru, Chennai, or Hyderabad within 2 years of graduation.',
        dataSource: 'STPI Coimbatore & NASSCOM Regional Talent Flow Report',
        timePeriod: '2023-2024',
        economicConsequence: 'Inability to capture high-margin SaaS, embedded systems, and deep-tech intellectual property valuation locally.',
        recommendedInvestigation: 'Evaluate startup incubation density and angel investor syndicate formation in the district.',
        possibleInterventions: [
          'Coimbatore Angel Investor Network tax exemption credit matching fund',
          'Dedicated hardware-software prototyping center at TIDEL Park Phase 2',
          'Return-to-Kovai grant matching for experienced tech leaders establishing teams locally'
        ],
        confidence: 86,
        limitations: 'Talent relocation estimates derived from LinkedIn geographic employment movement and university placement records.'
      }
    ],
    
    skills: [
      {
        id: 'sk-1',
        name: 'Industrial Automation & PLC Programming',
        category: 'Manufacturing',
        localAvailability: 38,
        observedDemand: 82,
        gap: 44,
        emergingPriority: 'CRITICAL',
        benchmarkSectors: ['Pump & Motors', 'Automotive Casting', 'Robotics'],
        suggestedCurricula: 'Siemens/Allen-Bradley PLC certification, SCADA architecture, pneumatic control logic.'
      },
      {
        id: 'sk-2',
        name: 'Python, ML & Applied Data Analytics',
        category: 'Technology',
        localAvailability: 52,
        observedDemand: 88,
        gap: 36,
        emergingPriority: 'CRITICAL',
        benchmarkSectors: ['Industrial IoT', 'SaaS', 'Supply Chain Analytics'],
        suggestedCurricula: 'Python for time series, Computer Vision for defect inspection, SQL database modeling.'
      },
      {
        id: 'sk-3',
        name: 'Solar PV & Renewable Microgrid Installation',
        category: 'Clean Energy',
        localAvailability: 41,
        observedDemand: 74,
        gap: 33,
        emergingPriority: 'HIGH',
        benchmarkSectors: ['Rooftop Solar', 'Energy Auditing', 'TANGEDCO Grid Integration'],
        suggestedCurricula: 'Solar PV string sizing, HT grid interconnection norms, inverter troubleshooting.'
      },
      {
        id: 'sk-4',
        name: 'EV Battery Management & Diagnostics',
        category: 'Automotive',
        localAvailability: 26,
        observedDemand: 68,
        gap: 42,
        emergingPriority: 'CRITICAL',
        benchmarkSectors: ['2W/3W EV Assembly', 'Battery Pack Manufacturing', 'Charging Infrastructure'],
        suggestedCurricula: 'Lithium cell balancing, CAN-bus telemetry diagnostics, thermal runaway prevention.'
      },
      {
        id: 'sk-5',
        name: 'Technical Textiles & Non-Woven Engineering',
        category: 'Textiles',
        localAvailability: 62,
        observedDemand: 79,
        gap: 17,
        emergingPriority: 'HIGH',
        benchmarkSectors: ['Medical Textiles', 'Geotextiles', 'Automotive Upholstery'],
        suggestedCurricula: 'Meltblown polymer extrusion, nanofiber coating, ISO-13485 medical grade compliance.'
      },
      {
        id: 'sk-6',
        name: 'Precision CNC 5-Axis Milling & Tooling',
        category: 'Tool & Die',
        localAvailability: 45,
        observedDemand: 78,
        gap: 33,
        emergingPriority: 'HIGH',
        benchmarkSectors: ['Aerospace Components', 'Defense Machining', 'Surgical Implants'],
        suggestedCurricula: 'Mastercam 5-axis toolpaths, titanium/Inconel machining metallurgy, CMM inspection.'
      },
      {
        id: 'sk-7',
        name: 'Agri-Cold Chain Logistics & Post-Harvest Handling',
        category: 'Agriculture',
        localAvailability: 32,
        observedDemand: 65,
        gap: 33,
        emergingPriority: 'MODERATE',
        benchmarkSectors: ['Coconut Processing', 'Spices Export', 'Horticulture FPOs'],
        suggestedCurricula: 'Controlled atmosphere cold storage maintenance, HACCP food hygiene, ethylene control.'
      }
    ],
    
    localSubRegions: ['Coimbatore North', 'Coimbatore South', 'Pollachi', 'Mettupalayam', 'Sulur', 'Annur', 'Kinathukadavu'],
    dataProvenance: 'OFFICIAL_MOSPI',
    lastUpdated: '2024-Q3 (Ingested Today)',
    sampleNotes: 'Primary Datathon benchmark district (Slides 1, 2, 7, 12). Harmonized with MoSPI PLFS, VIIRS, OpenStreetMap.'
  },

  'chennai': {
    id: 'chennai',
    name: 'Chennai',
    state: 'Tamil Nadu',
    country: 'India',
    type: 'district',
    lat: 13.0827,
    lng: 80.2707,
    areaKm2: 426,
    population: 86.9, // 8.69 million
    workingAgePercent: 71.4,
    literacyRate: 90.2,
    higherEduPercent: 44.8,
    
    potentialIndex: 91.2,
    observedActivityIndex: 82.5,
    opportunityGap: 8.7,
    opportunityStatus: 'HIGH_ACTIVITY_MATURE',
    
    indicators: {
      lfpr: 58.2,
      unemploymentRate: 5.8,
      youthUnemployment: 14.2,
      msmeDensity: 310,
      activeEnterprises: 112000,
      gvaShare: {
        agriculture: 1.2,
        manufacturing: 34.5,
        services: 64.3
      },
      roadDensity: 380.2,
      transportAccessIndex: 0.92,
      freightLogisticsIndex: 0.88,
      portDistanceKm: 12, // Direct port access (Chennai & Ennore ports)
      digitalPenetration: 92.4,
      powerReliabilityHrs: 23.6,
      nighttimeRadiance: 74.2,
      agriculturalProductivity: 1.2,
      coldStorageGapPercent: 12.0,
      skillMismatchIndex: 26.5,
      economicGrowthYoY: 7.2
    },
    
    timeSeries: [
      { year: 2018, gvaIndex: 85.0, nighttimeLight: 62.1, formalJobs: 1100, opportunityGap: 12.4, unemploymentRate: 5.1 },
      { year: 2019, gvaIndex: 89.2, nighttimeLight: 65.4, formalJobs: 1160, opportunityGap: 11.2, unemploymentRate: 5.3 },
      { year: 2020, gvaIndex: 81.0, nighttimeLight: 58.3, formalJobs: 1080, opportunityGap: 15.6, unemploymentRate: 7.2 },
      { year: 2021, gvaIndex: 88.4, nighttimeLight: 66.8, formalJobs: 1175, opportunityGap: 11.8, unemploymentRate: 6.4 },
      { year: 2022, gvaIndex: 94.6, nighttimeLight: 70.1, formalJobs: 1240, opportunityGap: 10.1, unemploymentRate: 6.0 },
      { year: 2023, gvaIndex: 99.8, nighttimeLight: 72.8, formalJobs: 1310, opportunityGap: 9.3, unemploymentRate: 5.9 },
      { year: 2024, gvaIndex: 105.2, nighttimeLight: 74.2, formalJobs: 1375, opportunityGap: 8.7, unemploymentRate: 5.8 }
    ],
    
    bottlenecks: [
      {
        id: 'chn-btn-1',
        name: 'Industrial Land Scarcity & High Real Estate Overhead',
        category: 'ECOSYSTEM',
        severity: 'HIGH',
        shapImportance: 28,
        evidenceMetric: 'Industrial land lease rates in Guindy and Ambattur exceed ₹14,000 / sq.ft, forcing expansion 55 km outward to Sriperumbudur and Oragadam.',
        historicalTrend: 'Average factory land cost increased 46% between 2019 and 2024.',
        dataSource: 'SIPCOT Industrial Land Price Index & DTCP Tamil Nadu',
        timePeriod: '2023-2024',
        economicConsequence: 'Tier-3 MSME suppliers cannot afford proximity to OEM assembly lines.',
        recommendedInvestigation: 'Examine multi-storey flatted factory complexes with shared testing facilities.',
        possibleInterventions: [
          'Subsidized plug-and-play vertical industrial flatted factories in Ambattur',
          'Fast express transit corridor for shift workers to Oragadam'
        ],
        confidence: 88,
        limitations: 'Land costs reflect institutional park leases; non-conforming private plots excluded.'
      },
      {
        id: 'chn-btn-2',
        name: 'Urban Water Resilience & Monsoon Inundation Risks',
        category: 'INFRASTRUCTURE',
        severity: 'HIGH',
        shapImportance: 26,
        evidenceMetric: 'Severe cyclonic flooding disrupted 14,000 industrial units for an average of 9 working days in December 2023.',
        historicalTrend: 'Flood risk index increased by 22% over a decade due to runoff over natural marshlands.',
        dataSource: 'CMDA Master Plan & Disaster Management Authority (TNDMA)',
        timePeriod: '2023-2024',
        economicConsequence: 'Supply chain shock waves impacting national automotive delivery schedules.',
        recommendedInvestigation: 'Evaluate stormwater basin detention ponds and industrial estate dyke defenses.',
        possibleInterventions: [
          'Stormwater drainage master plan completion for Ambattur & Manali belts',
          'Subsidized warehouse floodproofing insurance mechanism'
        ],
        confidence: 91,
        limitations: 'Climate hydrological simulations use 50-year return period precipitation.'
      }
    ],
    
    skills: [
      {
        id: 'sk-c1',
        name: 'Full Stack Cloud & AI System Engineering',
        category: 'Technology',
        localAvailability: 68,
        observedDemand: 94,
        gap: 26,
        emergingPriority: 'HIGH',
        benchmarkSectors: ['SaaS', 'Fintech', 'Global Capability Centers'],
        suggestedCurricula: 'Kubernetes, Microservices architecture, Generative AI agent frameworks.'
      },
      {
        id: 'sk-c2',
        name: 'Automotive Embedded Software & AUTOSAR',
        category: 'Automotive',
        localAvailability: 54,
        observedDemand: 89,
        gap: 35,
        emergingPriority: 'CRITICAL',
        benchmarkSectors: ['OEM R&D', 'EV Powertrain', 'ADAS Sensors'],
        suggestedCurricula: 'AUTOSAR classic/adaptive, ISO-26262 functional safety, Vector CANoe.'
      }
    ],
    
    localSubRegions: ['Egmore', 'Mylapore', 'Ambattur', 'Guindy', 'Sholinganallur', 'Tondiarpet', 'Alandur'],
    dataProvenance: 'OFFICIAL_MOSPI',
    lastUpdated: '2024-Q3 (Ingested Today)'
  },

  'tiruppur': {
    id: 'tiruppur',
    name: 'Tiruppur',
    state: 'Tamil Nadu',
    country: 'India',
    type: 'district',
    lat: 11.1085,
    lng: 77.3411,
    areaKm2: 5187,
    population: 26.8, // 2.68 million
    workingAgePercent: 70.1,
    literacyRate: 78.7,
    higherEduPercent: 21.4,
    
    potentialIndex: 82.5,
    observedActivityIndex: 67.4,
    opportunityGap: 15.1,
    opportunityStatus: 'BALANCED_DEVELOPING',
    
    indicators: {
      lfpr: 66.4,
      unemploymentRate: 4.8,
      youthUnemployment: 12.1,
      msmeDensity: 295,
      activeEnterprises: 48500,
      gvaShare: {
        agriculture: 16.8,
        manufacturing: 54.2,
        services: 29.0
      },
      roadDensity: 118.4,
      transportAccessIndex: 0.71,
      freightLogisticsIndex: 1.14,
      portDistanceKm: 275,
      digitalPenetration: 69.2,
      powerReliabilityHrs: 22.1,
      nighttimeRadiance: 32.4,
      agriculturalProductivity: 3.9,
      coldStorageGapPercent: 31.0,
      skillMismatchIndex: 38.2,
      economicGrowthYoY: 4.9
    },
    
    timeSeries: [
      { year: 2018, gvaIndex: 70.2, nighttimeLight: 24.5, formalJobs: 520, opportunityGap: 18.2, unemploymentRate: 4.2 },
      { year: 2019, gvaIndex: 74.0, nighttimeLight: 26.8, formalJobs: 545, opportunityGap: 17.5, unemploymentRate: 4.4 },
      { year: 2020, gvaIndex: 65.8, nighttimeLight: 21.2, formalJobs: 495, opportunityGap: 22.0, unemploymentRate: 6.8 },
      { year: 2021, gvaIndex: 72.1, nighttimeLight: 27.4, formalJobs: 530, opportunityGap: 18.4, unemploymentRate: 5.3 },
      { year: 2022, gvaIndex: 78.6, nighttimeLight: 29.9, formalJobs: 562, opportunityGap: 16.8, unemploymentRate: 5.0 },
      { year: 2023, gvaIndex: 82.4, nighttimeLight: 31.2, formalJobs: 580, opportunityGap: 15.8, unemploymentRate: 4.9 },
      { year: 2024, gvaIndex: 86.1, nighttimeLight: 32.4, formalJobs: 598, opportunityGap: 15.1, unemploymentRate: 4.8 }
    ],
    
    bottlenecks: [
      {
        id: 'tpr-btn-1',
        name: 'Zero Liquid Discharge (ZLD) Effluent Treatment & Compliance Burden',
        category: 'ECOSYSTEM',
        severity: 'HIGH',
        shapImportance: 33,
        evidenceMetric: 'Common Effluent Treatment Plants (CETPs) operating at ₹0.22 per liter operating cost, eroding garment margins by 4.2% relative to non-ZLD competitors.',
        historicalTrend: 'Environmental compliance overhead escalated 30% with stricter TNPCB brine-crystallization norms.',
        dataSource: 'Tamil Nadu Pollution Control Board (TNPCB) & Tirupur Exporters Association (TEA)',
        timePeriod: '2023-2024',
        economicConsequence: 'Smaller job-working dyeing units struggle to maintain viable economics.',
        recommendedInvestigation: 'Technological evaluation of membrane bio-reactors and government power tariff subvention for CETPs.',
        possibleInterventions: [
          'Subsidized green power tariff for collective CETP operations',
          'Technology upgrade grant for advanced nano-filtration and salt recovery'
        ],
        confidence: 87,
        limitations: 'Calculations based on 18 operational CETPs.'
      },
      {
        id: 'tpr-btn-2',
        name: 'Shift from Cotton to Synthetic & Man-Made Fiber (MMF) Value Chain',
        category: 'SKILLS',
        severity: 'HIGH',
        shapImportance: 27,
        evidenceMetric: 'Global active sportswear demand is 72% synthetic, while Tiruppur capacity remains 82% pure cotton-centric.',
        historicalTrend: 'Loss of market share in EU/US technical sportswear to Vietnam and Bangladesh.',
        dataSource: 'Ministry of Textiles & Apparel Export Promotion Council (AEPC)',
        timePeriod: '2022-2024',
        economicConsequence: 'Missing the highest-margin export category in global apparel.',
        recommendedInvestigation: 'Assess weaver skill gaps in handling polyester, elastane, and blended yarns.',
        possibleInterventions: [
          'MMF textile processing technology mission with dedicated training centers',
          'Import duty rationalization for specialized performance synthetic yarns'
        ],
        confidence: 85,
        limitations: 'Export statistics based on HS code 61 and 62 trade flows.'
      }
    ],
    
    skills: [
      {
        id: 'sk-t1',
        name: 'Synthetic Knitting & Warp Finishing',
        category: 'Textiles',
        localAvailability: 35,
        observedDemand: 78,
        gap: 43,
        emergingPriority: 'CRITICAL',
        benchmarkSectors: ['Sportswear', 'Athleisure', 'Seamless Garments'],
        suggestedCurricula: 'Synthetic filament tension control, circular knitting machinery setup, anti-microbial finishing.'
      },
      {
        id: 'sk-t2',
        name: 'ESG & Carbon Footprint Auditing in Supply Chains',
        category: 'Sustainability',
        localAvailability: 28,
        observedDemand: 68,
        gap: 40,
        emergingPriority: 'HIGH',
        benchmarkSectors: ['Apparel Exports', 'Brand Compliance', 'Retail Audits'],
        suggestedCurricula: 'Higg Index FEM validation, Scope 1-3 GHG accounting, OEKO-TEX standard verification.'
      }
    ],
    
    localSubRegions: ['Tiruppur North', 'Tiruppur South', 'Avinashi', 'Palladam', 'Udumalaipettai', 'Dharapuram', 'Kangeyam'],
    dataProvenance: 'OFFICIAL_MOSPI',
    lastUpdated: '2024-Q3 (Ingested Today)'
  },

  'salem': {
    id: 'salem',
    name: 'Salem',
    state: 'Tamil Nadu',
    country: 'India',
    type: 'district',
    lat: 11.6643,
    lng: 78.1460,
    areaKm2: 5245,
    population: 36.2, // 3.62 million
    workingAgePercent: 67.8,
    literacyRate: 72.8,
    higherEduPercent: 22.9,
    
    potentialIndex: 79.8,
    observedActivityIndex: 54.1,
    opportunityGap: 25.7,
    opportunityStatus: 'HIGH_POTENTIAL_BOTTLENECK',
    
    indicators: {
      lfpr: 61.2,
      unemploymentRate: 5.9,
      youthUnemployment: 15.6,
      msmeDensity: 210,
      activeEnterprises: 39800,
      gvaShare: {
        agriculture: 22.4,
        manufacturing: 38.6,
        services: 39.0
      },
      roadDensity: 125.0,
      transportAccessIndex: 0.64,
      freightLogisticsIndex: 1.18,
      portDistanceKm: 310,
      digitalPenetration: 64.5,
      powerReliabilityHrs: 21.8,
      nighttimeRadiance: 27.5,
      agriculturalProductivity: 3.8,
      coldStorageGapPercent: 41.2,
      skillMismatchIndex: 45.1,
      economicGrowthYoY: 4.8
    },
    
    timeSeries: [
      { year: 2018, gvaIndex: 65.4, nighttimeLight: 20.1, formalJobs: 410, opportunityGap: 29.5, unemploymentRate: 5.1 },
      { year: 2019, gvaIndex: 68.8, nighttimeLight: 22.0, formalJobs: 425, opportunityGap: 28.6, unemploymentRate: 5.3 },
      { year: 2020, gvaIndex: 61.2, nighttimeLight: 18.2, formalJobs: 398, opportunityGap: 33.1, unemploymentRate: 7.4 },
      { year: 2021, gvaIndex: 67.5, nighttimeLight: 22.8, formalJobs: 420, opportunityGap: 29.4, unemploymentRate: 6.2 },
      { year: 2022, gvaIndex: 73.1, nighttimeLight: 24.9, formalJobs: 442, opportunityGap: 27.6, unemploymentRate: 6.0 },
      { year: 2023, gvaIndex: 77.0, nighttimeLight: 26.2, formalJobs: 458, opportunityGap: 26.5, unemploymentRate: 5.9 },
      { year: 2024, gvaIndex: 80.8, nighttimeLight: 27.5, formalJobs: 472, opportunityGap: 25.7, unemploymentRate: 5.9 }
    ],
    
    bottlenecks: [
      {
        id: 'slm-btn-1',
        name: 'Specialty Steel & Defense Corridor Integration Delay',
        category: 'INFRASTRUCTURE',
        severity: 'HIGH',
        shapImportance: 29,
        evidenceMetric: 'Salem Steel Plant (SAIL) operating at 62% downstream capacity; lack of local defense vendor certification ecosystem.',
        historicalTrend: 'Defense industrial corridor node announcements yet to translate into major supplier anchor orders.',
        dataSource: 'Ministry of Defense TIDCO Defense Corridor Progress & SAIL Filings',
        timePeriod: '2023-2024',
        economicConsequence: 'High-grade stainless steel coils exported raw rather than converted to high-margin defense/medical components locally.',
        recommendedInvestigation: 'Evaluate common defense testing lab and precision forging anchor incentives.',
        possibleInterventions: [
          'Establish AS-9100 aerospace and defense certification center in Salem',
          'Anchor tenant capital subsidy for precision surgical instruments manufacturing'
        ],
        confidence: 84,
        limitations: 'Defense orders subject to confidential procurement cycles.'
      },
      {
        id: 'slm-btn-2',
        name: 'Sago & Tapioca Processing Effluent and Modernization Deficit',
        category: 'AGRI_LOGISTICS',
        severity: 'MEDIUM',
        shapImportance: 22,
        evidenceMetric: '80% of India’s sago produced in Salem, but 85% of mills utilize 40-year-old sedimentation technologies facing wastewater shutdowns.',
        historicalTrend: 'Starch mill seasonal shutdowns cause 30% farmgate price volatility for tapioca farmers.',
        dataSource: 'SAGOSERVE & Directorate of Industries and Commerce',
        timePeriod: '2022-2024',
        economicConsequence: 'Loss of domestic industrial starch market share to imported corn starch alternatives.',
        recommendedInvestigation: 'Techno-economic review of closed-loop methane capture biogas systems for sago mills.',
        possibleInterventions: [
          'SAGOSERVE modernization subsidy for automated flash driers and biogas generation',
          'Contract farming price stabilization fund for tapioca growers'
        ],
        confidence: 86,
        limitations: 'Cottage sago processing units without SAGOSERVE membership estimated.'
      }
    ],
    
    skills: [
      {
        id: 'sk-s1',
        name: 'Specialty Metallurgy & Heat Treatment Inspection',
        category: 'Metals',
        localAvailability: 31,
        observedDemand: 69,
        gap: 38,
        emergingPriority: 'HIGH',
        benchmarkSectors: ['Stainless Steel', 'Automotive Forging', 'Defense Hardware'],
        suggestedCurricula: 'Non-destructive testing (NDT Level II), metallurgical phase analysis, vacuum heat treatment.'
      }
    ],
    
    localSubRegions: ['Salem North', 'Salem South', 'Attur', 'Mettur', 'Omalur', 'Sankari', 'Yercaud'],
    dataProvenance: 'OFFICIAL_MOSPI',
    lastUpdated: '2024-Q3 (Ingested Today)'
  },

  'bengaluru': {
    id: 'bengaluru',
    name: 'Bengaluru Urban',
    state: 'Karnataka',
    country: 'India',
    type: 'district',
    lat: 12.9716,
    lng: 77.5946,
    areaKm2: 2190,
    population: 112.5, // 11.25 million
    workingAgePercent: 74.2,
    literacyRate: 88.7,
    higherEduPercent: 49.2,
    
    potentialIndex: 94.8,
    observedActivityIndex: 88.1,
    opportunityGap: 6.7,
    opportunityStatus: 'HIGH_ACTIVITY_MATURE',
    
    indicators: {
      lfpr: 61.5,
      unemploymentRate: 5.2,
      youthUnemployment: 12.8,
      msmeDensity: 340,
      activeEnterprises: 165000,
      gvaShare: {
        agriculture: 0.8,
        manufacturing: 26.2,
        services: 73.0
      },
      roadDensity: 320.5,
      transportAccessIndex: 0.87,
      freightLogisticsIndex: 1.12,
      portDistanceKm: 340, // Mangaluru / Chennai
      digitalPenetration: 95.8,
      powerReliabilityHrs: 23.4,
      nighttimeRadiance: 84.5,
      agriculturalProductivity: 1.1,
      coldStorageGapPercent: 10.4,
      skillMismatchIndex: 21.4,
      economicGrowthYoY: 8.4
    },
    
    timeSeries: [
      { year: 2018, gvaIndex: 92.0, nighttimeLight: 68.2, formalJobs: 1850, opportunityGap: 10.2, unemploymentRate: 4.8 },
      { year: 2019, gvaIndex: 98.4, nighttimeLight: 72.5, formalJobs: 1980, opportunityGap: 9.1, unemploymentRate: 4.9 },
      { year: 2020, gvaIndex: 91.2, nighttimeLight: 66.0, formalJobs: 1910, opportunityGap: 12.8, unemploymentRate: 6.5 },
      { year: 2021, gvaIndex: 102.5, nighttimeLight: 75.8, formalJobs: 2090, opportunityGap: 8.9, unemploymentRate: 5.7 },
      { year: 2022, gvaIndex: 111.0, nighttimeLight: 79.4, formalJobs: 2240, opportunityGap: 7.8, unemploymentRate: 5.4 },
      { year: 2023, gvaIndex: 118.6, nighttimeLight: 82.1, formalJobs: 2390, opportunityGap: 7.1, unemploymentRate: 5.3 },
      { year: 2024, gvaIndex: 126.4, nighttimeLight: 84.5, formalJobs: 2540, opportunityGap: 6.7, unemploymentRate: 5.2 }
    ],
    
    bottlenecks: [
      {
        id: 'blr-btn-1',
        name: 'Severe Urban Traffic Congestion & Commute Productivity Drag',
        category: 'INFRASTRUCTURE',
        severity: 'HIGH',
        shapImportance: 34,
        evidenceMetric: 'Average peak-hour commute speeds in Outer Ring Road / Whitefield corridor drop to 11.2 km/h; TomTom Traffic Index ranks city among global top 3 congested.',
        historicalTrend: 'Commute hours lost per worker increased from 180 hrs/yr (2018) to 260 hrs/yr (2024).',
        dataSource: 'BMRCL, Traffic Police Probe Data & TomTom Index',
        timePeriod: '2023-2024',
        economicConsequence: 'Productivity loss estimated at ₹19,700 Cr annually; talent reluctance to travel to physical offices.',
        recommendedInvestigation: 'Accelerate Suburban Rail and Phase 2A/2B Metro completion along tech corridors.',
        possibleInterventions: [
          'Congestion pricing in core CBD corridors during peak hours',
          'Fast-track Suburban Rail Project with dedicated airport feeder links'
        ],
        confidence: 93,
        limitations: 'Speed probes captured on primary arterial roads; inner residential roads interpolated.'
      }
    ],
    
    skills: [
      {
        id: 'sk-b1',
        name: 'LLM Fine-Tuning & Generative AI Infrastructure',
        category: 'Artificial Intelligence',
        localAvailability: 64,
        observedDemand: 96,
        gap: 32,
        emergingPriority: 'CRITICAL',
        benchmarkSectors: ['AI Labs', 'Global Capability Centers', 'Fintech'],
        suggestedCurricula: 'Distributed PyTorch, vLLM inference optimization, RAG architectural design.'
      }
    ],
    
    localSubRegions: ['Bengaluru East', 'Bengaluru South', 'Bengaluru North', 'Anekal', 'Yelahanka'],
    dataProvenance: 'OFFICIAL_MOSPI',
    lastUpdated: '2024-Q3 (Ingested Today)'
  },

  'pune': {
    id: 'pune',
    name: 'Pune',
    state: 'Maharashtra',
    country: 'India',
    type: 'district',
    lat: 18.5204,
    lng: 73.8567,
    areaKm2: 15643,
    population: 94.3, // 9.43 million
    workingAgePercent: 71.0,
    literacyRate: 86.1,
    higherEduPercent: 38.4,
    
    potentialIndex: 89.2,
    observedActivityIndex: 76.5,
    opportunityGap: 12.7,
    opportunityStatus: 'BALANCED_DEVELOPING',
    
    indicators: {
      lfpr: 59.4,
      unemploymentRate: 5.6,
      youthUnemployment: 14.1,
      msmeDensity: 280,
      activeEnterprises: 94000,
      gvaShare: {
        agriculture: 8.4,
        manufacturing: 43.1,
        services: 48.5
      },
      roadDensity: 165.2,
      transportAccessIndex: 0.79,
      freightLogisticsIndex: 1.05,
      portDistanceKm: 155, // JNPT Mumbai
      digitalPenetration: 86.4,
      powerReliabilityHrs: 23.0,
      nighttimeRadiance: 58.4,
      agriculturalProductivity: 3.5,
      coldStorageGapPercent: 22.0,
      skillMismatchIndex: 29.8,
      economicGrowthYoY: 6.8
    },
    
    timeSeries: [
      { year: 2018, gvaIndex: 78.4, nighttimeLight: 44.2, formalJobs: 980, opportunityGap: 16.5, unemploymentRate: 5.0 },
      { year: 2019, gvaIndex: 83.1, nighttimeLight: 47.5, formalJobs: 1040, opportunityGap: 15.2, unemploymentRate: 5.2 },
      { year: 2020, gvaIndex: 74.0, nighttimeLight: 40.8, formalJobs: 965, opportunityGap: 20.1, unemploymentRate: 7.1 },
      { year: 2021, gvaIndex: 81.8, nighttimeLight: 48.9, formalJobs: 1035, opportunityGap: 16.2, unemploymentRate: 6.1 },
      { year: 2022, gvaIndex: 89.5, nighttimeLight: 52.6, formalJobs: 1110, opportunityGap: 14.5, unemploymentRate: 5.8 },
      { year: 2023, gvaIndex: 96.2, nighttimeLight: 55.8, formalJobs: 1180, opportunityGap: 13.4, unemploymentRate: 5.7 },
      { year: 2024, gvaIndex: 102.8, nighttimeLight: 58.4, formalJobs: 1250, opportunityGap: 12.7, unemploymentRate: 5.6 }
    ],
    
    bottlenecks: [
      {
        id: 'pne-btn-1',
        name: 'Auto-Component Transition to Electric Vehicle Powertrains',
        category: 'SKILLS',
        severity: 'HIGH',
        shapImportance: 29,
        evidenceMetric: 'Chakan & Bhosari auto-clusters contain 3,800 ICE component suppliers; only 14% have transitioned to EV sub-assemblies.',
        historicalTrend: 'ICE component export contracts declining 6.5% annually across EU OEMs.',
        dataSource: 'MCCIA & Automotive Component Manufacturers Association (ACMA)',
        timePeriod: '2023-2024',
        economicConsequence: 'Risk of widespread tier-2 factory downsizing as EV adoption hits 25% by 2028.',
        recommendedInvestigation: 'Establish EV conversion technical advisory center in Pimpri Chinchwad.',
        possibleInterventions: [
          'Technology transition credit line for small forging and machining units',
          'ARAI-partnered EV validation lab with discounted test credits for MSMEs'
        ],
        confidence: 88,
        limitations: 'Transition rates based on ACMA registered membership units.'
      }
    ],
    
    skills: [
      {
        id: 'sk-p1',
        name: 'Automotive Thermal Management & Battery Pack Assembly',
        category: 'Automotive',
        localAvailability: 42,
        observedDemand: 86,
        gap: 44,
        emergingPriority: 'CRITICAL',
        benchmarkSectors: ['EV OEMs', 'Component Tier 1', 'Testing Labs'],
        suggestedCurricula: 'Coolant circuit design, laser welding of busbars, BMS CAN communication.'
      }
    ],
    
    localSubRegions: ['Haveli', 'Pune City', 'Khed', 'Shirur', 'Baramati', 'Maval', 'Mulshi'],
    dataProvenance: 'OFFICIAL_MOSPI',
    lastUpdated: '2024-Q3 (Ingested Today)'
  },

  'eastern_up': {
    id: 'eastern_up',
    name: 'Eastern UP / Varanasi Region',
    state: 'Uttar Pradesh',
    country: 'India',
    type: 'district',
    lat: 25.3176,
    lng: 82.9739,
    areaKm2: 1535,
    population: 39.8, // 3.98 million
    workingAgePercent: 62.4,
    literacyRate: 75.6,
    higherEduPercent: 21.0,
    
    // As highlighted in Slide 9: "Top Emerging Regions: Eastern UP 0.82 Potential Score"
    potentialIndex: 82.0,
    observedActivityIndex: 44.0,
    opportunityGap: 38.0,
    opportunityStatus: 'HIGH_POTENTIAL_BOTTLENECK',
    
    indicators: {
      lfpr: 45.2,
      unemploymentRate: 7.8,
      youthUnemployment: 23.4,
      msmeDensity: 165,
      activeEnterprises: 28500,
      gvaShare: {
        agriculture: 28.5,
        manufacturing: 26.1,
        services: 45.4
      },
      roadDensity: 110.4,
      transportAccessIndex: 0.58,
      freightLogisticsIndex: 1.34,
      portDistanceKm: 680, // Haldia port via inland waterway 1
      digitalPenetration: 61.2,
      powerReliabilityHrs: 20.4,
      nighttimeRadiance: 18.6,
      agriculturalProductivity: 3.2,
      coldStorageGapPercent: 48.0,
      skillMismatchIndex: 51.0,
      economicGrowthYoY: 5.8
    },
    
    timeSeries: [
      { year: 2018, gvaIndex: 52.0, nighttimeLight: 12.4, formalJobs: 210, opportunityGap: 42.1, unemploymentRate: 7.2 },
      { year: 2019, gvaIndex: 55.4, nighttimeLight: 13.8, formalJobs: 224, opportunityGap: 41.0, unemploymentRate: 7.4 },
      { year: 2020, gvaIndex: 49.1, nighttimeLight: 11.5, formalJobs: 202, opportunityGap: 45.8, unemploymentRate: 9.8 },
      { year: 2021, gvaIndex: 54.8, nighttimeLight: 14.6, formalJobs: 220, opportunityGap: 42.0, unemploymentRate: 8.6 },
      { year: 2022, gvaIndex: 61.0, nighttimeLight: 16.2, formalJobs: 238, opportunityGap: 40.2, unemploymentRate: 8.1 },
      { year: 2023, gvaIndex: 66.5, nighttimeLight: 17.5, formalJobs: 254, opportunityGap: 39.0, unemploymentRate: 7.9 },
      { year: 2024, gvaIndex: 71.8, nighttimeLight: 18.6, formalJobs: 270, opportunityGap: 38.0, unemploymentRate: 7.8 }
    ],
    
    bottlenecks: [
      {
        id: 'eup-btn-1',
        name: 'Inland Waterway Multi-Modal Freight Terminal Under-Utilization',
        category: 'INFRASTRUCTURE',
        severity: 'HIGH',
        shapImportance: 35,
        evidenceMetric: 'National Waterway-1 (Ganga) multi-modal terminal at Varanasi operating at only 18% designed cargo capacity due to last-mile road feeder congestion.',
        historicalTrend: 'Barge movements to Kolkata have remained sparse despite ₹5,000 Cr Jal Vikas Marg investments.',
        dataSource: 'Inland Waterways Authority of India (IWAI) & Logistics Division (DPIIT)',
        timePeriod: '2023-2024',
        economicConsequence: 'High inland freight penalties prevent agricultural exports (vegetables, mangoes) from competing on global costs.',
        recommendedInvestigation: 'Study dedicated 4-lane freight spur connecting terminal directly to NH-19.',
        possibleInterventions: [
          'Direct highway elevated connector from IWAI terminal to ring road',
          'Export cold chain cargo aggregation center right at the river terminal jetty'
        ],
        confidence: 89,
        limitations: 'River draft seasonality during summer months impacts barge payload capacity.'
      },
      {
        id: 'eup-btn-2',
        name: 'Handloom & GI Craft Artisans Intermediary Exploitation',
        category: 'ECOSYSTEM',
        severity: 'HIGH',
        shapImportance: 26,
        evidenceMetric: 'Banarasi silk weavers receive only 14% of final retail garment sales value; 42% of master weavers lack direct digital payment accounts.',
        historicalTrend: 'Younger generation artisan retention fell 38% over the past decade.',
        dataSource: 'Handloom Census & National Institute of Fashion Technology (NIFT)',
        timePeriod: '2022-2024',
        economicConsequence: 'Threat to traditional cultural craft survival and severe household underemployment.',
        recommendedInvestigation: 'Evaluate direct ONDC (Open Network for Digital Commerce) onboarding for weaver cooperatives.',
        possibleInterventions: [
          'Direct-to-consumer ONDC seller integration center in Varanasi weaver clusters',
          'Blockchain-enabled GI authenticity verification tags for certified Varanasi silk'
        ],
        confidence: 87,
        limitations: 'Artisan wages derived from cooperative sample surveys.'
      }
    ],
    
    skills: [
      {
        id: 'sk-e1',
        name: 'Digital Commerce, ONDC Cataloging & Global Export Packaging',
        category: 'Trade & Logistics',
        localAvailability: 24,
        observedDemand: 75,
        gap: 51,
        emergingPriority: 'CRITICAL',
        benchmarkSectors: ['Handloom & Handicrafts', 'Perishable Horticulture Exports'],
        suggestedCurricula: 'ONDC schema compliance, digital catalog photography, export phytosanitary documentation.'
      }
    ],
    
    localSubRegions: ['Varanasi City', 'Pindra', 'Raja Talab', 'Chandauli Border'],
    dataProvenance: 'OFFICIAL_MOSPI',
    lastUpdated: '2024-Q3 (Ingested Today)'
  },

  'vidarbha': {
    id: 'vidarbha',
    name: 'Vidarbha / Nagpur Region',
    state: 'Maharashtra',
    country: 'India',
    type: 'district',
    lat: 21.1458,
    lng: 79.0882,
    areaKm2: 9892,
    population: 46.5, // 4.65 million
    workingAgePercent: 65.8,
    literacyRate: 88.4,
    higherEduPercent: 28.5,
    
    potentialIndex: 76.0,
    observedActivityIndex: 48.0,
    opportunityGap: 28.0,
    opportunityStatus: 'HIGH_POTENTIAL_BOTTLENECK',
    
    indicators: {
      lfpr: 52.4,
      unemploymentRate: 6.9,
      youthUnemployment: 18.2,
      msmeDensity: 195,
      activeEnterprises: 42000,
      gvaShare: {
        agriculture: 22.1,
        manufacturing: 31.4,
        services: 46.5
      },
      roadDensity: 135.0,
      transportAccessIndex: 0.74,
      freightLogisticsIndex: 1.08,
      portDistanceKm: 780, // Geographical center of India / Zero Mile
      digitalPenetration: 72.8,
      powerReliabilityHrs: 22.4,
      nighttimeRadiance: 28.2,
      agriculturalProductivity: 2.8,
      coldStorageGapPercent: 44.5,
      skillMismatchIndex: 46.2,
      economicGrowthYoY: 5.6
    },
    
    timeSeries: [
      { year: 2018, gvaIndex: 58.2, nighttimeLight: 19.5, formalJobs: 340, opportunityGap: 33.4, unemploymentRate: 6.1 },
      { year: 2019, gvaIndex: 61.8, nighttimeLight: 21.2, formalJobs: 360, opportunityGap: 32.0, unemploymentRate: 6.3 },
      { year: 2020, gvaIndex: 55.4, nighttimeLight: 18.0, formalJobs: 335, opportunityGap: 36.5, unemploymentRate: 8.5 },
      { year: 2021, gvaIndex: 61.9, nighttimeLight: 22.8, formalJobs: 362, opportunityGap: 32.8, unemploymentRate: 7.4 },
      { year: 2022, gvaIndex: 68.5, nighttimeLight: 25.1, formalJobs: 388, opportunityGap: 30.5, unemploymentRate: 7.1 },
      { year: 2023, gvaIndex: 74.2, nighttimeLight: 26.9, formalJobs: 410, opportunityGap: 29.1, unemploymentRate: 7.0 },
      { year: 2024, gvaIndex: 79.8, nighttimeLight: 28.2, formalJobs: 432, opportunityGap: 28.0, unemploymentRate: 6.9 }
    ],
    
    bottlenecks: [
      {
        id: 'vdb-btn-1',
        name: 'Citrus & Cotton Processing Deficit in Rainfed Hinterlands',
        category: 'AGRI_LOGISTICS',
        severity: 'HIGH',
        shapImportance: 32,
        evidenceMetric: 'Nagpur orange and Wardha cotton produce exported 92% unprocessed; lack of pectin extraction and automated spinning mills.',
        historicalTrend: 'Farmer distress index highest during erratic unseasonal rain events in October-November.',
        dataSource: 'ICAR-Central Citrus Research Institute & Maharashtra Agri Dept',
        timePeriod: '2023-2024',
        economicConsequence: 'High susceptibility of agrarian incomes to commodity price crashes.',
        recommendedInvestigation: 'Assess viability of agro-processing mega food park clusters near Samruddhi Mahamarg interchanges.',
        possibleInterventions: [
          'Dedicated cold-storage and wax-coating packhouse centers along Samruddhi expressway interchanges',
          'Capital grant for private citrus juice concentrate and pectin manufacturing units'
        ],
        confidence: 86,
        limitations: 'Farm-gate prices vary across informal APMC agents.'
      }
    ],
    
    skills: [
      {
        id: 'sk-v1',
        name: 'Expressway Multi-modal Logistics & Warehouse Automation',
        category: 'Logistics',
        localAvailability: 30,
        observedDemand: 72,
        gap: 42,
        emergingPriority: 'HIGH',
        benchmarkSectors: ['MIHAN Logistics Hub', 'E-commerce Fulfillment'],
        suggestedCurricula: 'WMS software operation, automated conveyor maintenance, cross-docking dispatch.'
      }
    ],
    
    localSubRegions: ['Nagpur Urban', 'Nagpur Rural', 'Hingna', 'Kamptee', 'Umred', 'Katol', 'Saoner'],
    dataProvenance: 'OFFICIAL_MOSPI',
    lastUpdated: '2024-Q3 (Ingested Today)'
  }
};
