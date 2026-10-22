export type GeographyLevel = 'country' | 'state' | 'district' | 'local';

export type DataProvenance = 'OFFICIAL_MOSPI' | 'WORLD_BANK_PROCESSED' | 'OPENSTREETMAP_GIS' | 'CALIBRATED_DEMO';

export interface Bottleneck {
  id: string;
  name: string;
  category: 'INFRASTRUCTURE' | 'SKILLS' | 'MARKET_ACCESS' | 'ECOSYSTEM' | 'AGRI_LOGISTICS' | 'DIGITAL';
  severity: 'HIGH' | 'MEDIUM' | 'LOW';
  shapImportance: number; // percentage (e.g. 31%)
  evidenceMetric: string;
  historicalTrend: string;
  dataSource: string;
  timePeriod: string;
  economicConsequence: string;
  recommendedInvestigation: string;
  possibleInterventions: string[];
  confidence: number; // 0-100
  limitations: string;
}

export interface SkillDemandItem {
  id: string;
  name: string;
  category: string;
  localAvailability: number; // 0 - 100
  observedDemand: number; // 0 - 100
  gap: number; // demand - availability
  emergingPriority: 'CRITICAL' | 'HIGH' | 'MODERATE';
  benchmarkSectors: string[];
  suggestedCurricula: string;
}

export interface RegionTimeSeriesPoint {
  year: number;
  gvaIndex: number;
  nighttimeLight: number; // nW/cm²/sr
  formalJobs: number; // in thousands
  opportunityGap: number;
  unemploymentRate: number;
}

export interface RegionData {
  id: string;
  name: string;
  state: string;
  country: string;
  type: GeographyLevel;
  lat: number;
  lng: number;
  areaKm2: number;
  population: number; // in lakhs or millions
  workingAgePercent: number; // %
  literacyRate: number; // %
  higherEduPercent: number; // %
  
  // Core Indices (0-100)
  potentialIndex: number;
  observedActivityIndex: number;
  opportunityGap: number; // potential - observed
  opportunityStatus: 'HIGH_POTENTIAL_BOTTLENECK' | 'HIGH_ACTIVITY_MATURE' | 'BALANCED_DEVELOPING' | 'RESOURCE_CONSTRAINED';
  
  // Key Indicators
  indicators: {
    lfpr: number; // Labour Force Participation Rate %
    unemploymentRate: number; // %
    youthUnemployment: number; // %
    msmeDensity: number; // units per 10,000 population
    activeEnterprises: number;
    gvaShare: {
      agriculture: number;
      manufacturing: number;
      services: number;
    };
    roadDensity: number; // km per 100 km²
    transportAccessIndex: number; // 0 - 1
    freightLogisticsIndex: number; // relative benchmark
    portDistanceKm: number;
    digitalPenetration: number; // broadband/mobile data %
    powerReliabilityHrs: number; // avg daily industrial supply hrs
    nighttimeRadiance: number; // nW/cm²/sr
    agriculturalProductivity: number; // tonnes / ha
    coldStorageGapPercent: number; // % unmet storage need
    skillMismatchIndex: number; // 0 - 100
    economicGrowthYoY: number; // %
  };
  
  timeSeries: RegionTimeSeriesPoint[];
  bottlenecks: Bottleneck[];
  skills: SkillDemandItem[];
  
  localSubRegions?: string[]; // e.g. taluks/blocks
  dataProvenance: DataProvenance;
  lastUpdated: string;
  sampleNotes?: string;
}

export interface DatasetMetadata {
  id: string;
  name: string;
  publisher: string;
  category: 'LABOUR' | 'GEOSPATIAL' | 'ECONOMIC' | 'INFRASTRUCTURE' | 'AGRICULTURE' | 'SATELLITE';
  url: string;
  coverage: string;
  timePeriod: string;
  latestObservation: string;
  updateFrequency: string;
  license: string;
  limitations: string;
  processingSteps: string;
  status: 'LIVE_CONNECTED' | 'HISTORICAL_INGESTED' | 'CALIBRATED_DEMO';
  confidenceScore: number;
}

export interface ScenarioParameters {
  skillImprovement: number; // 0 - 50%
  transportImprovement: number; // 0 - 50%
  digitalImprovement: number; // 0 - 50%
  msmeSupport: number; // 0 - 50%
  agroProcessingImprovement: number; // 0 - 50%
}

export interface ScenarioResult {
  baselineGap: number;
  scenarioGap: number;
  gapDelta: number;
  projectedGvaGrowth: number;
  projectedJobsCreated: number;
  projectedNighttimeRadianceDelta: number;
  assumptions: string[];
}

export interface StructuredAiResponse {
  summary: string;
  evidence: string[];
  possibleExplanation: string;
  optionsToInvestigate: string[];
  expectedTradeoffs: string;
  dataLimitations: string;
  citations: Array<{ source: string; metric: string; period: string }>;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  timestamp: string;
  text?: string;
  structured?: StructuredAiResponse;
}

export interface ActionRecommendation {
  id: string;
  title: string;
  category: 'EMPLOYMENT_SKILLS' | 'TRANSPORT_INFRA' | 'AGRO_FOOD' | 'MSME_INDUSTRY' | 'DIGITAL_CONNECTIVITY';
  issueIdentified: string;
  supportingEvidence: string;
  suggestedIntervention: string;
  intendedBeneficiaries: string;
  stakeholders: string[];
  feasibilityChecks: string;
  potentialBenefits: string;
  tradeoffsAndCosts: string;
  timeline: 'SHORT_TERM' | 'MEDIUM_TERM' | 'LONG_TERM';
  evidenceStrength: 'STRONG' | 'MODERATE' | 'EXPLORATORY';
  relevantIndicators: string[];
}
