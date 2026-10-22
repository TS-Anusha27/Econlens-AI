import { RegionData, ActionRecommendation } from '../types';

export interface LocalAreaDef {
  id: string;
  name: string;
  typeLabel: string; // e.g. "Taluk", "Sub-District", "Municipal Zone", "Township"
  regionData: RegionData;
}

export interface DistrictDef {
  id: string;
  name: string;
  typeLabel: string;
  localAreas: LocalAreaDef[];
}

export interface StateDef {
  name: string;
  districts: DistrictDef[];
}

export interface CountryDef {
  code: string;
  name: string;
  states: StateDef[];
}

// Dedicated Local Area Data for Pollachi (Showcase Pilot for Local-Level Economic Analysis)
export const POLLACHI_DATA: RegionData = {
  id: 'pollachi',
  name: 'Pollachi',
  state: 'Tamil Nadu',
  country: 'India',
  type: 'local',
  parentRegionId: 'coimbatore',
  lat: 10.6609,
  lng: 77.0048,
  areaKm2: 720,
  population: 4.8, // 4.8 Lakhs / 480,000 residents
  workingAgePercent: 65.4,
  literacyRate: 82.1,
  higherEduPercent: 26.4,

  // Indices
  potentialIndex: 84.2,
  observedActivityIndex: 52.6,
  opportunityGap: 31.6,
  opportunityStatus: 'HIGH_POTENTIAL_BOTTLENECK',

  administrativeHierarchy: {
    country: 'India',
    state: 'Tamil Nadu',
    district: 'Coimbatore',
    localArea: 'Pollachi'
  },

  summaryText: 'Pollachi has a strong agricultural and coconut-based economic foundation. Its future growth depends on improving processing capacity, cold-chain logistics, market access, and developing higher-value coir, virgin oil, and horticultural export businesses.',

  indicators: {
    lfpr: 56.2,
    unemploymentRate: 6.1,
    youthUnemployment: 16.4,
    msmeDensity: 182,
    activeEnterprises: 8740,
    gvaShare: {
      agriculture: 42.5,
      manufacturing: 26.2,
      services: 31.3
    },
    roadDensity: 118.0,
    transportAccessIndex: 0.62,
    freightLogisticsIndex: 1.32, // Logistics delay to export ports
    portDistanceKm: 145, // to Cochin Port via Palakkad Gap
    digitalPenetration: 68.5,
    powerReliabilityHrs: 21.6,
    nighttimeRadiance: 19.4,
    agriculturalProductivity: 5.6, // High coconut yield per hectare
    coldStorageGapPercent: 44.5, // 44.5% unmet localized cold chain
    skillMismatchIndex: 38.6,
    economicGrowthYoY: 4.2
  },

  keyDrivers: {
    primarySectors: [
      {
        name: 'Coconut & Plantation Agriculture',
        sharePercent: 42.5,
        employmentPercent: 48.0,
        description: 'World-renowned coconut hub harvesting over 50 crore nuts annually across Pollachi, Anaimalai, and Kinathukadavu groves.'
      },
      {
        name: 'Coir Fiber & Agro-Processing',
        sharePercent: 26.2,
        employmentPercent: 24.0,
        description: 'Over 600 coir extraction units producing brown fiber, coir yarn, geo-textile rolls, and horticultural coco-peat blocks.'
      },
      {
        name: 'Agri-Logistics & Mandi Trading',
        sharePercent: 16.8,
        employmentPercent: 15.0,
        description: 'Regional trading hub centered around the famous Pollachi APMC Cattle & Tender Coconut Mandi handling inter-state transit.'
      },
      {
        name: 'Eco-Tourism & Hospitality',
        sharePercent: 14.5,
        employmentPercent: 13.0,
        description: 'Gateway to the Western Ghats, Topslip, and Anamalai Tiger Reserve, driving farm stays and ecological heritage travel.'
      }
    ],
    livelihoodsDescription: 'Nearly half of Pollachi’s workforce earns their livelihood directly from coconut farming, coir fiber spinning, and seasonal agro-allied occupations. Family-owned micro-enterprises operate alongside smallholder cultivators, while youth seek higher-value opportunities in modern food technology and logistics.',
    keyProducts: [
      'Tender Coconut & Fresh Green Nuts',
      'High-Grade Edible Copra & Virgin Coconut Oil',
      'Coir Pith Blocks & Soil Substrates',
      'Coir Geotextiles for Soil Erosion Control',
      'Nutmeg, Pepper & Cocoa Beans',
      'Dairy & Cattle Trading'
    ],
    comparativeAdvantages: [
      'Unique micro-climate nestled in the Palakkad Gap with perennial irrigation from Parambikulam-Aliyar Project (PAP)',
      'Global recognition as India’s premier coconut capital with established raw supply chains',
      'Direct highway corridor (NH-83) connecting interior Tamil Nadu directly to Kerala and Kochi International Container Transshipment Terminal',
      'Rich biodiversity and scenic plantation landscape ideal for sustainable agro-eco tourism'
    ],
    expansionOpportunities: [
      'Transition from raw coconut export to packaged tender coconut water, spray-dried milk powder, and virgin coconut oil',
      'High-value coco-peat export for international greenhouse horticulture in Europe and North America',
      'Decentralized cold-chain aggregation to service direct farm-to-flight air cargo departures from Coimbatore Airport'
    ]
  },

  strengths: [
    {
      title: 'Premier Coconut & Coir Production Center',
      description: 'Produces over 500 million coconuts annually with deep generational agronomic knowledge and a dense base of de-husking units.',
      evidence: 'Tamil Nadu Horticulture Dept reports Pollachi taluk accounts for ~22% of state coconut output.',
      benchmark: 'Highest coconut density per hectare in South India'
    },
    {
      title: 'Strategic Transport Gateway via Palakkad Gap',
      description: 'Sits on the primary natural lowland pass through the Western Ghats, providing seamless inter-state road connectivity to Kochi Port.',
      evidence: 'NH-83 freight corridor supports continuous commercial truck movement between Tamil Nadu and Kerala.',
      benchmark: '145 km to maritime container berths'
    },
    {
      title: 'Established Coir By-Product Export Foundation',
      description: 'Well-recognized presence in global coco-peat and geo-textile markets with active Coir Board registration.',
      evidence: 'Export shipments from local clusters generate over ₹650 Cr in foreign exchange annually.',
      benchmark: 'Top 3 coir pith exporters nationwide'
    }
  ],

  challenges: [
    {
      title: 'Severe Post-Harvest Perishable Losses',
      description: 'Absence of temperature-controlled packhouses within 20 km leads to high spoilage in tender coconuts, nutmeg, and horticultural crops.',
      evidence: 'District agri-marketing audits record a 28.5% post-harvest loss during peak monsoon and summer harvesting peaks.',
      benchmark: 'Cold chain capacity deficit of 44.5%'
    },
    {
      title: 'Low Raw Material Value-Addition',
      description: 'Over 80% of coconuts leave Pollachi as raw nuts or raw copra, forfeiting 3x to 5x higher margins achievable through processed derivatives.',
      evidence: 'Only 7 commercial virgin coconut oil and certified organic coconut water units operate in the taluk.',
      benchmark: 'Processed share is 11% vs 46% in benchmark ASEAN clusters'
    },
    {
      title: 'Mandi Price Volatility & Farmgate Price Realization',
      description: 'Smallholder farmers are highly vulnerable to seasonal mandi price crashes due to lack of direct digital market access and collective bargaining.',
      evidence: 'Farmgate tender coconut prices fluctuate between ₹12 and ₹38 per nut within a single calendar quarter.',
      benchmark: 'Intermediary margin captures ~48% of end-consumer price'
    }
  ],

  bottlenecks: [
    {
      id: 'pol-btn-1',
      name: 'Perishable Cold-Chain Deficit & Packhouse Absence in Coconut Belt',
      category: 'AGRI_LOGISTICS',
      severity: 'HIGH',
      shapImportance: 38,
      evidenceMetric: '28.5% post-harvest loss in tender coconut and plantation spices due to zero solar-powered cold stores within a 20 km radius of southern harvesting clusters.',
      historicalTrend: 'Cold chain deficit widened as horticultural production grew 18% over 5 years without matching pre-cooling infrastructure.',
      dataSource: 'Department of Agricultural Marketing (TN) & World Bank Agri-GIS Assessment',
      timePeriod: '2023-2024',
      economicConsequence: 'Farmers lose an estimated ₹120 Cr annually to premature spoilage and distressed spot sales.',
      recommendedInvestigation: 'Conduct GIS site suitability mapping for 6 decentralized solar packhouses at primary FPO collection points.',
      possibleInterventions: [
        'Deploy 6 decentralized 50-tonne solar-powered cold stores across coconut FPOs',
        'Subsidize refrigerated reefer vans for farmgate-to-airport dispatch',
        'Establish automated sorting, grading, and waxing facilities for tender coconuts'
      ],
      confidence: 91,
      limitations: 'Calculated using mandi arrivals and registered cooperative harvest audits; on-farm unrecorded losses estimated.'
    },
    {
      id: 'pol-btn-2',
      name: 'Coir Processing Modernization & Effluent Water Recycling Gap',
      category: 'INFRASTRUCTURE',
      severity: 'HIGH',
      shapImportance: 31,
      evidenceMetric: '84% of traditional coir pith retting and washing yards rely on open drying grounds, halting production for 4 months during monsoon rainfall.',
      historicalTrend: 'European export buyers increasingly mandate certified low-EC washed coco peat with strict wastewater zero-discharge standards.',
      dataSource: 'Coir Board Regional Office & TNPCB Environmental Compliance Register',
      timePeriod: '2023-2024',
      economicConsequence: 'Sub-optimal processing capacity utilization caps export realizations at basic grade prices.',
      recommendedInvestigation: 'Techno-economic feasibility of common mechanized drying tunnels and closed-loop wash-water recovery.',
      possibleInterventions: [
        'Establish a Common Facility Center (CFC) for mechanized coir drying and automated block compaction',
        'Capital grants for closed-loop wash-water recycling systems across coir clusters',
        'Coir Board skill certification for automated hydraulic baling press operation'
      ],
      confidence: 86,
      limitations: 'Coir cluster data reflects registered Coir Board units; unregistered backyard retting yards not included.'
    },
    {
      id: 'pol-btn-3',
      name: 'Absence of Dedicated Air-Cargo Export Consolidation Node',
      category: 'INFRASTRUCTURE',
      severity: 'MEDIUM',
      shapImportance: 19,
      evidenceMetric: 'Export horticulture must be trucked 55 km through congested city bottlenecks to Coimbatore Airport or 145 km to Kochi without dedicated express clearance.',
      historicalTrend: 'Transit delay of 3.8 hours degrades shelf life of fresh export tender coconuts bound for Gulf and European markets.',
      dataSource: 'Airports Authority of India (CJB Cargo Wing) & Agricultural Export Promotion Forum',
      timePeriod: '2023-2024',
      economicConsequence: 'Direct international air freight costs 18% higher than comparable Western coastal export hubs.',
      recommendedInvestigation: 'Audit dedicated cargo staging dry-hub at Pollachi junction connecting directly to Coimbatore Airport bypass.',
      possibleInterventions: [
        'Set up a certified agricultural export cargo aggregation center with customs inspection in Pollachi',
        'Direct scheduled reefer shuttle service connecting Pollachi to Coimbatore International Airport',
        'APEDA phytosanitary testing laboratory at Pollachi Sub-Collectorate'
      ],
      confidence: 84,
      limitations: 'Air cargo estimates based on scheduled international departures from Coimbatore and Kochi.'
    },
    {
      id: 'pol-btn-4',
      name: 'Intermediary Auction Volatility & Digital Mandi Disconnection',
      category: 'ECOSYSTEM',
      severity: 'MEDIUM',
      shapImportance: 12,
      evidenceMetric: 'Over 72% of smallholder farmers sell to commission agents at farmgate with a 35% discount below wholesale terminal market value.',
      historicalTrend: 'Digital electronic trading adoption under e-NAM remains below 14% due to lack of local quality-assaying labs.',
      dataSource: 'Pollachi Regulated Market Committee & NABARD FPO Study',
      timePeriod: '2023-2024',
      economicConsequence: 'Limits capital accumulation among smallholders, depressing on-farm productivity reinvestment.',
      recommendedInvestigation: 'Evaluate ONDC digital onboarding protocol and mobile quality assaying units for FPO members.',
      possibleInterventions: [
        'Onboard 14 coconut and spice FPOs onto ONDC digital buyer networks',
        'Install digital spectroscopy quality testing kiosks at 8 regulated mandi points',
        'Form cooperative bargaining consortia for bulk tender coconut supply to retail chains'
      ],
      confidence: 82,
      limitations: 'Informal commission agent transactions captured through farmer sample interviews.'
    }
  ],

  recommendations: [
    {
      id: 'rec-pol-1',
      title: 'Decentralized Solar Packhouses & Cold Chain for Coconut FPOs',
      category: 'AGRO_FOOD',
      planningCategory: 'QUICK_WINS',
      timeline: 'SHORT_TERM',
      estimatedCost: '₹14.5 Cr ($1.75M)',
      implementationPeriod: '6–12 months',
      issueIdentified: '28.5% post-harvest loss in tender coconut, spices, and horticulture due to lack of localized cold storage within a 20 km radius.',
      supportingEvidence: 'MoSPI and Agri-Marketing GIS data confirm 44.5% cold chain gap in southern Pollachi taluk.',
      suggestedIntervention: 'Deploy 6 decentralized 50-tonne solar-powered cold stores with automated sorting, grading, and packing lines managed directly by registered Farmer Producer Organizations (FPOs).',
      intendedBeneficiaries: '12,500 smallholder coconut, nutmeg, and horticulture farmers across Pollachi and Anaimalai.',
      stakeholders: ['NABARD', 'Department of Agricultural Marketing (TN)', 'TNAU Coimbatore', 'Pollachi Coconut Producers Federation'],
      feasibilityChecks: 'Available panchayat land parcels at 6 FPO collection centers; grid-tied solar microgrid viability verified.',
      potentialBenefits: 'Extends fresh produce shelf life by 16 days; cuts post-harvest spoilage from 28.5% to under 6%; increases farmer net realization by 24%.',
      tradeoffsAndCosts: 'Capital expenditure: ₹14.5 Cr (eligible for 60% subsidy under Agri Infrastructure Fund); ongoing refrigeration technician training required.',
      prerequisites: ['FPO cooperative resolution', 'Site electrical connection approval', 'TNAU post-harvest protocol adoption'],
      risks: ['Monsoon solar generation intermittency (mitigated via dual-grid backup)', 'Initial grower adoption inertia'],
      measurableSuccessIndicator: 'Post-harvest loss reduced below 8%; 12,000+ MT of graded produce handled annually.',
      evidenceStrength: 'STRONG',
      relevantIndicators: ['coldStorageGapPercent', 'agriculturalProductivity', 'economicGrowthYoY']
    },
    {
      id: 'rec-pol-2',
      title: 'Direct ONDC & Digital Mandi Assaying for Coconut Producers',
      category: 'DIGITAL_CONNECTIVITY',
      planningCategory: 'QUICK_WINS',
      timeline: 'SHORT_TERM',
      estimatedCost: '₹4.8 Cr ($580K)',
      implementationPeriod: '4–8 months',
      issueIdentified: '72% of growers sell to intermediaries, losing ~35% of end-market value to middleman margins.',
      supportingEvidence: 'Pollachi Regulated Market Committee data reveals tender coconut spot price spreads of up to ₹24 per nut between farmgate and retail consumer.',
      suggestedIntervention: 'Integrate Pollachi coconut FPOs directly onto the Open Network for Digital Commerce (ONDC) and establish 8 digital assaying kiosks with rapid infrared sugar/fat content testing.',
      intendedBeneficiaries: '18,000+ coconut and agro-allied cultivators.',
      stakeholders: ['Open Network for Digital Commerce (ONDC)', 'Regulated Market Committee', 'FPO Federation', 'State Agri Dept'],
      feasibilityChecks: 'Software integration with existing e-NAM platform; smartphone penetration among FPO lead farmers exceeds 78%.',
      potentialBenefits: 'Direct farm-to-retail buyer contracts; boosts farmgate unit realization by ₹4 to ₹7 per tender coconut.',
      tradeoffsAndCosts: 'Low capital expenditure: ₹4.8 Cr; requires farmer digital literacy workshops and logistics fulfillment partnerships.',
      prerequisites: ['FPO seller registration on ONDC', 'Logistics partner tie-ups for local collection'],
      risks: ['Buyer return dispute management', 'Payment gateway settlement timing'],
      measurableSuccessIndicator: '₹45 Cr in direct-to-buyer transactions processed within 12 months.',
      evidenceStrength: 'STRONG',
      relevantIndicators: ['activeEnterprises', 'digitalPenetration', 'lfpr']
    },
    {
      id: 'rec-pol-3',
      title: 'Pollachi Coir Pith Value-Addition & Mechanized Drying Cluster',
      category: 'MSME_INDUSTRY',
      planningCategory: 'MEDIUM_TERM',
      timeline: 'MEDIUM_TERM',
      estimatedCost: '₹32.0 Cr ($3.85M)',
      implementationPeriod: '1–2 years',
      issueIdentified: 'Monsoon rainfall halts open-air coir pith drying for 4 months, depressing annual export output by 30%.',
      supportingEvidence: 'Coir Board data indicates export realizations for washed, low-EC compressed blocks are 3.8x higher than raw unwashed fiber.',
      suggestedIntervention: 'Establish a shared Common Facility Center (CFC) featuring rotary biomass dryers, closed-loop wash-water recovery, and automated 5-kg block hydraulic compaction presses.',
      intendedBeneficiaries: '240+ coir processing MSMEs and 4,800 workers (predominantly rural women).',
      stakeholders: ['Coir Board of India', 'Ministry of MSME (MSE-CDP Scheme)', 'Pollachi Coir Industrial Cooperative', 'TIDCO'],
      feasibilityChecks: 'Industrial cluster site identified at Kinathukadavu SIDCO industrial estate; environmental clearance for water recycling.',
      potentialBenefits: 'Eliminates 4-month monsoon shutdown; enables premium export certification for European greenhouse substrates; generates ₹180 Cr in incremental export earnings.',
      tradeoffsAndCosts: 'Capital outlay: ₹32 Cr (70% central grant via MSE-CDP); requires water recycling operational oversight.',
      prerequisites: ['SPV formation by 40 coir units', 'SIDCO land allotment', 'Effluent recycling blueprint approval'],
      risks: ['Biomass fuel supply price swings', 'Global container freight rate volatility'],
      measurableSuccessIndicator: 'Year-round operating capacity utilization >85%; zero industrial wastewater discharge.',
      evidenceStrength: 'STRONG',
      relevantIndicators: ['msmeDensity', 'activeEnterprises', 'economicGrowthYoY']
    },
    {
      id: 'rec-pol-4',
      title: 'Farm-to-Flight Cold Logistics Link to Coimbatore Airport',
      category: 'TRANSPORT_INFRA',
      planningCategory: 'MEDIUM_TERM',
      timeline: 'MEDIUM_TERM',
      estimatedCost: '₹22.0 Cr ($2.65M)',
      implementationPeriod: '12–18 months',
      issueIdentified: 'Export horticulture suffers a 3.8-hour logistics delay navigating city traffic bottlenecks to Coimbatore Airport.',
      supportingEvidence: 'MoRTH freight GPS speed probes indicate transit speeds on the Pollachi-Coimbatore arterial corridor drop below 22 km/h during peak hours.',
      suggestedIntervention: 'Construct a bonded agro-export cargo consolidation hub in Pollachi with pre-cooling, phytosanitary clearance, and scheduled direct reefer transit to Coimbatore International Airport air-cargo apron.',
      intendedBeneficiaries: 'Regional horticulture exporters, fresh fruit producers, and air-cargo logistics operators.',
      stakeholders: ['Airports Authority of India (AAI Cargo)', 'APEDA', 'District Administration', 'State Highways Dept'],
      feasibilityChecks: 'Available site near Pollachi bypass; customs air-cargo bonded transshipment regulations permit inland hub sealing.',
      potentialBenefits: 'Reduces export processing time by 4 hours; enables premium same-day harvest delivery to Middle East and Southeast Asian retail shelves.',
      tradeoffsAndCosts: 'Capital outlay: ₹22 Cr; requires inter-agency coordination between customs, airport authorities, and state police.',
      prerequisites: ['Customs bonded inland cargo approval', 'APEDA accredited testing laboratory setup'],
      risks: ['Airport cargo apron expansion schedule', 'Airline belly-cargo capacity availability on regional routes'],
      measurableSuccessIndicator: 'Air-cargo export volume from Pollachi reaches 450 tonnes/month within 18 months.',
      evidenceStrength: 'STRONG',
      relevantIndicators: ['freightLogisticsIndex', 'roadDensity', 'transportAccessIndex']
    },
    {
      id: 'rec-pol-5',
      title: 'Pollachi Agro-Eco Tourism & Sustainable Coconut Brand Consortium',
      category: 'EMPLOYMENT_SKILLS',
      planningCategory: 'LONG_TERM',
      timeline: 'LONG_TERM',
      estimatedCost: '₹48.0 Cr ($5.8M)',
      implementationPeriod: '3–5 years',
      issueIdentified: 'Underutilized tourism potential and lack of GI-branded premium identity for Pollachi organic produce.',
      supportingEvidence: 'Over 650,000 tourists visit Topslip and Anamalai annually, but average stay duration is under 1.2 days with minimal farmgate spending.',
      suggestedIntervention: 'Create a designated Pollachi Agro-Eco Tourism Corridor linking organic coconut plantations, indigenous cultural craft villages, and nature trails with a unified "Pollachi Origin" certified brand identity.',
      intendedBeneficiaries: 'Over 25,000 residents across hospitality, artisan crafts, retail, and plantation ownership.',
      stakeholders: ['Tamil Nadu Tourism Development Corporation (TTDC)', 'Forest Department', 'Local Gram Panchayats', 'Hospitality Association'],
      feasibilityChecks: 'Eco-sensitive zoning guidelines compliance; homestay licensing regularization framework.',
      potentialBenefits: 'Extends average tourist stay to 3.4 days; creates 4,200 non-agricultural rural jobs; triples retail farmgate souvenir earnings.',
      tradeoffsAndCosts: 'Capital investment: ₹48 Cr across infrastructure, wayfinding, sanitation, and brand marketing; requires strict ecological carrying capacity caps.',
      prerequisites: ['District eco-tourism master plan', 'Community homestay standards certification'],
      risks: ['Over-tourism ecological pressure on forest fringes', 'Commercial exploitation of indigenous tribal communities'],
      measurableSuccessIndicator: 'Average tourist stay exceeds 3 days; ₹120 Cr annual local hospitality and farmstay economy generated.',
      evidenceStrength: 'MODERATE',
      relevantIndicators: ['lfpr', 'youthUnemployment', 'higherEduPercent']
    }
  ],

  multiYearProjections: {
    horizons: [
      {
        years: 1,
        label: '1 Year (Quick Wins Active)',
        baseline: { gva: 52.6, gap: 31.6, jobsAffected: 1200, msmeGrowth: 4.2 },
        plan: { gva: 56.4, gap: 27.8, jobsAffected: 4800, msmeGrowth: 6.8 },
        accelerated: { gva: 58.2, gap: 26.0, jobsAffected: 7200, msmeGrowth: 8.5 }
      },
      {
        years: 3,
        label: '3 Years (Coir & Air Link Operational)',
        baseline: { gva: 54.8, gap: 31.0, jobsAffected: 2800, msmeGrowth: 4.5 },
        plan: { gva: 64.2, gap: 21.6, jobsAffected: 11400, msmeGrowth: 9.8 },
        accelerated: { gva: 68.8, gap: 17.0, jobsAffected: 16800, msmeGrowth: 13.2 }
      },
      {
        years: 5,
        label: '5 Years (Integrated Value-Chain)',
        baseline: { gva: 57.2, gap: 30.2, jobsAffected: 4500, msmeGrowth: 4.8 },
        plan: { gva: 73.5, gap: 14.8, jobsAffected: 18200, msmeGrowth: 14.5 },
        accelerated: { gva: 81.0, gap: 9.5, jobsAffected: 26500, msmeGrowth: 18.4 }
      },
      {
        years: 10,
        label: '10 Years (Matured Agro-Industrial Hub)',
        baseline: { gva: 63.5, gap: 28.5, jobsAffected: 8200, msmeGrowth: 5.2 },
        plan: { gva: 88.0, gap: 7.2, jobsAffected: 32000, msmeGrowth: 22.0 },
        accelerated: { gva: 98.4, gap: 3.8, jobsAffected: 46000, msmeGrowth: 28.5 }
      }
    ],
    assumptions: [
      'Solar packhouses operational within 8 months, maintaining 50-tonne refrigerated storage per facility',
      'Coir pith value-addition cluster captures export price premium of 3.8x over raw fiber',
      'Air-cargo feeder shuttle reduces fresh produce transit times by 4 hours to Gulf markets',
      'Macroeconomic agricultural commodity price inflation assumed at 5% CAGR',
      'No catastrophic climate weather event exceeding 1-in-50 year return frequency'
    ],
    uncertaintyRange: '±8.5% sensitivity variation based on global coconut commodity price fluctuations and monsoon PAP canal water allocation.'
  },

  timeSeries: [
    { year: 2018, gvaIndex: 42.1, nighttimeLight: 14.2, formalJobs: 42, opportunityGap: 36.8, unemploymentRate: 5.1 },
    { year: 2019, gvaIndex: 44.8, nighttimeLight: 15.5, formalJobs: 44, opportunityGap: 35.2, unemploymentRate: 5.3 },
    { year: 2020, gvaIndex: 40.2, nighttimeLight: 13.8, formalJobs: 40, opportunityGap: 39.5, unemploymentRate: 7.6 },
    { year: 2021, gvaIndex: 43.5, nighttimeLight: 16.2, formalJobs: 43, opportunityGap: 36.1, unemploymentRate: 6.8 },
    { year: 2022, gvaIndex: 47.2, nighttimeLight: 17.8, formalJobs: 47, opportunityGap: 33.8, unemploymentRate: 6.4 },
    { year: 2023, gvaIndex: 50.1, nighttimeLight: 18.6, formalJobs: 49, opportunityGap: 32.5, unemploymentRate: 6.2 },
    { year: 2024, gvaIndex: 52.6, nighttimeLight: 19.4, formalJobs: 52, opportunityGap: 31.6, unemploymentRate: 6.1 }
  ],

  skills: [
    {
      id: 'sk-pol-1',
      name: 'Cold-Chain Refrigeration & Controlled Atmosphere Maintenance',
      category: 'Agro-Logistics',
      localAvailability: 24,
      observedDemand: 78,
      gap: 54,
      emergingPriority: 'CRITICAL',
      benchmarkSectors: ['Coconut FPOs', 'Spices Warehousing', 'Horticulture Export'],
      suggestedCurricula: 'Solar PV inverter maintenance, ammonia/freon leak detection, HACCP food hygiene compliance.'
    },
    {
      id: 'sk-pol-2',
      name: 'Automated Coir Hydraulic Compaction & Moisture Testing',
      category: 'Manufacturing',
      localAvailability: 35,
      observedDemand: 72,
      gap: 37,
      emergingPriority: 'HIGH',
      benchmarkSectors: ['Coir Board Export Units', 'Greenhouse Substrates'],
      suggestedCurricula: 'Electrical EC testing, hydraulic cylinder servicing, automated packing line maintenance.'
    },
    {
      id: 'sk-pol-3',
      name: 'E-Commerce Mandi Listing & ONDC Catalog Management',
      category: 'Digital Trade',
      localAvailability: 28,
      observedDemand: 65,
      gap: 37,
      emergingPriority: 'HIGH',
      benchmarkSectors: ['Farmer Producer Companies', 'Direct-to-Consumer Brands'],
      suggestedCurricula: 'Digital catalog photography, ONDC taxonomy tagging, digital invoice reconciliation.'
    }
  ],

  dataProvenance: 'OFFICIAL_MOSPI',
  lastUpdated: '2024-Q3 (Harmonized Local Taluk Ingestion)'
};

// Complete Geographical Hierarchy Structure
export const GEOGRAPHY_HIERARCHY: CountryDef[] = [
  {
    code: 'IN',
    name: 'India',
    states: [
      {
        name: 'Tamil Nadu',
        districts: [
          {
            id: 'coimbatore',
            name: 'Coimbatore District',
            typeLabel: 'District',
            localAreas: [
              { id: 'pollachi', name: 'Pollachi', typeLabel: 'Taluk / Local Area', regionData: POLLACHI_DATA },
              { id: 'sulur', name: 'Sulur (Defense & Foundry Cluster)', typeLabel: 'Taluk', regionData: { ...POLLACHI_DATA, id: 'sulur', name: 'Sulur', summaryText: 'Sulur features strong precision engineering, foundry clusters, and aeronautical defense support infrastructure.' } },
              { id: 'mettupalayam', name: 'Mettupalayam (Nilgiris Agro-Transit Hub)', typeLabel: 'Taluk', regionData: { ...POLLACHI_DATA, id: 'mettupalayam', name: 'Mettupalayam', summaryText: 'Mettupalayam serves as the primary potato, tea, and vegetable transit terminal at the foothills of the Nilgiris.' } },
              { id: 'coimbatore-urban', name: 'Coimbatore Urban / North & South', typeLabel: 'City Corporation', regionData: { ...POLLACHI_DATA, id: 'coimbatore-urban', name: 'Coimbatore Urban', summaryText: 'Coimbatore Urban forms the core industrial engineering, pump manufacturing, and IT tech corridor.' } }
            ]
          },
          {
            id: 'chennai',
            name: 'Chennai District',
            typeLabel: 'Metropolitan District',
            localAreas: [
              { id: 'sholinganallur', name: 'Sholinganallur / OMR Tech Corridor', typeLabel: 'Zone / Sub-district', regionData: { ...POLLACHI_DATA, id: 'sholinganallur', name: 'Sholinganallur (OMR)', summaryText: 'Chennai’s premier IT, SaaS, and financial services corridor along Old Mahabalipuram Road.' } },
              { id: 'ambattur', name: 'Ambattur Industrial Estate', typeLabel: 'Industrial Zone', regionData: { ...POLLACHI_DATA, id: 'ambattur', name: 'Ambattur', summaryText: 'One of South Asia’s largest small-scale industrial estates housing over 1,800 precision manufacturing units.' } },
              { id: 'guindy', name: 'Guindy & Central Chennai', typeLabel: 'Commercial Zone', regionData: { ...POLLACHI_DATA, id: 'guindy', name: 'Guindy', summaryText: 'Central logistics and commercial enterprise node with direct proximity to Chennai International Airport.' } }
            ]
          },
          {
            id: 'tiruppur',
            name: 'Tiruppur District',
            typeLabel: 'District',
            localAreas: [
              { id: 'tiruppur-urban', name: 'Tiruppur Urban (Knitwear Hub)', typeLabel: 'Municipal City', regionData: { ...POLLACHI_DATA, id: 'tiruppur-urban', name: 'Tiruppur Urban', summaryText: 'Global capital of cotton knitwear and garment export with 10,000+ manufacturing units.' } },
              { id: 'palladam', name: 'Palladam (Poultry & Hi-Tech Weaving)', typeLabel: 'Taluk', regionData: { ...POLLACHI_DATA, id: 'palladam', name: 'Palladam', summaryText: 'Key power-loom weaving belt and one of India’s leading commercial broiler poultry farming clusters.' } },
              { id: 'avinashi', name: 'Avinashi (Logistics & Auto Ancillary)', typeLabel: 'Taluk', regionData: { ...POLLACHI_DATA, id: 'avinashi', name: 'Avinashi', summaryText: 'Strategic national highway node with rapidly expanding logistics warehousing and precision job shops.' } }
            ]
          },
          {
            id: 'salem',
            name: 'Salem District',
            typeLabel: 'District',
            localAreas: [
              { id: 'mettur', name: 'Mettur (Thermal Power & Chemicals)', typeLabel: 'Taluk', regionData: { ...POLLACHI_DATA, id: 'mettur', name: 'Mettur', summaryText: 'Major industrial powerhouse driven by Mettur Dam hydroelectric and heavy chemical manufacturing.' } },
              { id: 'attur', name: 'Attur (Sago & Agricultural Belt)', typeLabel: 'Taluk', regionData: { ...POLLACHI_DATA, id: 'attur', name: 'Attur', summaryText: 'India’s center of tapioca sago processing and agricultural trading.' } }
            ]
          }
        ]
      },
      {
        name: 'Karnataka',
        districts: [
          {
            id: 'bengaluru',
            name: 'Bengaluru Urban District',
            typeLabel: 'Metropolitan District',
            localAreas: [
              { id: 'whitefield', name: 'Whitefield (Tech & GCC Hub)', typeLabel: 'Tech Sub-Zone', regionData: { ...POLLACHI_DATA, id: 'whitefield', name: 'Whitefield', summaryText: 'Premier Global Capability Center (GCC) cluster with heavy concentration of software enterprise parks.' } },
              { id: 'electronic-city', name: 'Electronic City', typeLabel: 'Industrial Township', regionData: { ...POLLACHI_DATA, id: 'electronic-city', name: 'Electronic City', summaryText: 'Pioneering electronics and IT park supporting international semiconductor and software firms.' } },
              { id: 'peenya', name: 'Peenya Industrial Area', typeLabel: 'Industrial Estate', regionData: { ...POLLACHI_DATA, id: 'peenya', name: 'Peenya', summaryText: 'One of the largest industrial estates in South East Asia hosting precision engineering and machine tools.' } }
            ]
          }
        ]
      },
      {
        name: 'Maharashtra',
        districts: [
          {
            id: 'pune',
            name: 'Pune District',
            typeLabel: 'District',
            localAreas: [
              { id: 'chakan', name: 'Chakan & Khed (Automotive & EV Hub)', typeLabel: 'MIDC Industrial Zone', regionData: { ...POLLACHI_DATA, id: 'chakan', name: 'Chakan', summaryText: 'Major automotive and EV OEM manufacturing corridor housing leading international automakers.' } },
              { id: 'hinjawadi', name: 'Hinjawadi Rajiv Gandhi Infotech Park', typeLabel: 'Special Economic Zone', regionData: { ...POLLACHI_DATA, id: 'hinjawadi', name: 'Hinjawadi', summaryText: 'World-renowned software export hub employing over 200,000 technology professionals.' } },
              { id: 'baramati', name: 'Baramati (Agro-Processing & Dairy)', typeLabel: 'Taluk', regionData: { ...POLLACHI_DATA, id: 'baramati', name: 'Baramati', summaryText: 'Advanced sugarcane processing, dairy cooperative, and agricultural biotechnology hub.' } }
            ]
          },
          {
            id: 'vidarbha',
            name: 'Vidarbha / Nagpur District',
            typeLabel: 'District',
            localAreas: [
              { id: 'mihan', name: 'MIHAN Multi-Modal Cargo Hub', typeLabel: 'Special Economic Zone', regionData: { ...POLLACHI_DATA, id: 'mihan', name: 'MIHAN', summaryText: 'India’s central multi-modal international cargo hub and aircraft maintenance cluster.' } },
              { id: 'katol', name: 'Katol (Citrus & Orange Belt)', typeLabel: 'Taluk', regionData: { ...POLLACHI_DATA, id: 'katol', name: 'Katol', summaryText: 'Famous orange growing belt with emerging citrus processing and cold-chain aggregation.' } }
            ]
          }
        ]
      },
      {
        name: 'Uttar Pradesh',
        districts: [
          {
            id: 'eastern_up',
            name: 'Varanasi / Eastern UP District',
            typeLabel: 'District',
            localAreas: [
              { id: 'varanasi-city', name: 'Varanasi City (Silk & Craft Clusters)', typeLabel: 'Municipal City', regionData: { ...POLLACHI_DATA, id: 'varanasi-city', name: 'Varanasi City', summaryText: 'Centuries-old heritage cluster for Banarasi silk weaving, GI crafts, and cultural tourism.' } },
              { id: 'ramnagar', name: 'Ramnagar (Inland Waterway Terminal Node)', typeLabel: 'Industrial Area', regionData: { ...POLLACHI_DATA, id: 'ramnagar', name: 'Ramnagar', summaryText: 'Site of National Waterway-1 multi-modal freight terminal on the Ganga River.' } }
            ]
          }
        ]
      }
    ]
  },
  {
    code: 'US',
    name: 'United States',
    states: [
      {
        name: 'California',
        districts: [
          {
            id: 'santa_clara',
            name: 'Santa Clara County (Silicon Valley)',
            typeLabel: 'County',
            localAreas: [
              { id: 'san_jose', name: 'San Jose (Capital of Silicon Valley)', typeLabel: 'City', regionData: { ...POLLACHI_DATA, id: 'san_jose', name: 'San Jose', country: 'United States', state: 'California', summaryText: 'Economic, cultural, and political center of Silicon Valley with high AI and hardware concentration.' } },
              { id: 'cupertino_sunnyvale', name: 'Cupertino & Sunnyvale (Tech HQ Corridor)', typeLabel: 'Municipal Corridor', regionData: { ...POLLACHI_DATA, id: 'cupertino_sunnyvale', name: 'Cupertino / Sunnyvale', country: 'United States', state: 'California', summaryText: 'Global corporate headquarters for leading enterprise tech, consumer electronics, and semiconductor firms.' } }
            ]
          }
        ]
      }
    ]
  }
];

// Helper to look up any geographic node
export const getHierarchyForSelection = (countryName: string, stateName: string, districtId: string) => {
  const country = GEOGRAPHY_HIERARCHY.find(c => c.name.toLowerCase() === countryName.toLowerCase()) || GEOGRAPHY_HIERARCHY[0];
  const state = country.states.find(s => s.name.toLowerCase() === stateName.toLowerCase()) || country.states[0];
  const district = state.districts.find(d => d.id === districtId) || state.districts[0];
  return { country, state, district };
};

// Recommended quick-switch suggestions
export const SUGGESTED_LOCATIONS = [
  { country: 'India', state: 'Tamil Nadu', districtId: 'coimbatore', localId: 'pollachi', label: 'Pollachi (Coconut & Agro)', badge: 'Showcase Pilot' },
  { country: 'India', state: 'Tamil Nadu', districtId: 'coimbatore', localId: null, label: 'Coimbatore (Engineering MSMEs)', badge: 'Industrial' },
  { country: 'India', state: 'Tamil Nadu', districtId: 'chennai', localId: 'sholinganallur', label: 'Chennai (OMR Tech Corridor)', badge: 'Services & IT' },
  { country: 'India', state: 'Karnataka', districtId: 'bengaluru', localId: 'whitefield', label: 'Bengaluru (Whitefield GCC)', badge: 'Tech Innovation' },
  { country: 'India', state: 'Maharashtra', districtId: 'pune', localId: 'chakan', label: 'Pune (Chakan Auto Hub)', badge: 'EV Manufacturing' },
  { country: 'India', state: 'Uttar Pradesh', districtId: 'eastern_up', localId: 'ramnagar', label: 'Varanasi (Inland Waterway)', badge: 'Logistics Corridor' },
  { country: 'United States', state: 'California', districtId: 'santa_clara', localId: 'san_jose', label: 'Silicon Valley (San Jose)', badge: 'Global Benchmark' }
];
