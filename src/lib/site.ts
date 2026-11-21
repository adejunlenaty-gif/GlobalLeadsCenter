export const CONTACT = {
  telegram: "https://t.me/+7FcITOhG4GI2NDdk",
  telegramAlt: "https://t.me/+7FcITOhG4GI2NDdk",
  telegramChannel: "https://t.me/+7FcITOhG4GI2NDdk",
  whatsapp: "https://wa.me/447456067627",
  email: "contact@globalleadscenter.com",
  phone: "+44 7456 067627",
  responseSla: "Under 30 minutes during active campaign hours",
};

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Proof & Portfolio" },
  { to: "/solutions", label: "Dialer & Telephony" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Get a Quote" },
] as const;

export type ServiceCategory = "Promotional" | "Financial" | "Specialized";

export type Service = {
  slug: string;
  name: string;
  category: ServiceCategory;
  image: string;
  summary: string;
  focus: string[];
  details: string[];
  fieldsCaptured: string[];
  sourcingMethods: string[];
  freshnessWindow: string;
  exclusivityNote?: string;
  minVolume: string;
  popularCountries: string[];
};

export const CATEGORIES: { id: ServiceCategory; categoryNumber: string; title: string; desc: string }[] = [
  {
    id: "Promotional",
    categoryNumber: "CATEGORY 01",
    title: "Promotional & Sweepstakes Leads",
    desc: "Help authorized promotional operators reach audiences who have expressed relevant interest.",
  },
  {
    id: "Financial",
    categoryNumber: "CATEGORY 02",
    title: "Financial & Investment Leads",
    desc: "Separate each financial category so buyers can specify exactly which audience they need.",
  },
  {
    id: "Specialized",
    categoryNumber: "CATEGORY 03",
    title: "Specialized & High-Intent Outreach",
    desc: "Targeted regional acquisition, high-intent first-hit pipelines, enterprise B2B, and compliant niche campaigns.",
  },
];

export const SERVICES: Service[] = [
  // ── CATEGORY 01: Promotional & Sweepstakes Leads ──
  {
    slug: "sweepstakes",
    name: "Sweepstakes Leads",
    category: "Promotional",
    image: "/sweepstakes-prize-gift.jpg",
    summary: "Targeted audiences for authorized sweepstakes and promotional campaigns.",
    focus: [
      "Targeted audience and geographic acquisition",
      "Campaign-specific demographic qualification",
      "Authorized opt-in sourcing with clear prize disclosures",
      "Guaranteed 24-hour delivery SLA across all packages",
      "Strict compliance with regional promotional advertising guidelines",
    ],
    details: [
      "Develop an enthusiastic, high-intent audience around your authorized promotional giveaway, prize draw, or reward offer. We define geographic, age, and demographic criteria with your team so acquisition directly supports your campaign goals.",
      "Capture funnels use transparent promotional terms, clear prize disclosure language, and affirmative opt-in checkboxes. Sourcing documentation is maintained for every record, ensuring you meet regional advertising standards.",
      "Your proposal establishes delivery formats (CSV, Excel, CRM API), freshness criteria, and volume tiers. We assess all deliveries against strict quality benchmarks, filtering out invalid syntax and disconnected phone numbers.",
    ],
    fieldsCaptured: ["Full Name", "Verified Mobile Phone", "Email", "State/City/ZIP", "Age Bracket", "Timestamp & Consent IP"],
    sourcingMethods: ["Incentive giveaway portals", "Mobile consumer sweepstakes pages", "Sponsored social media prize funnels"],
    freshnessWindow: "Guaranteed 24-Hour Delivery SLA",
    minVolume: "150 records (Starter from $100)",
    popularCountries: ["USA", "Canada", "UK", "Australia"],
  },
  {
    slug: "pch",
    name: "PCH & Prize Leads",
    category: "Promotional",
    image: "/canva-assets/service-2.jpg",
    summary: "Audience acquisition for prize-and-promotion briefs, combining relevant qualification, documented consent, and international delivery schedules.",
    focus: [
      "Prize-and-promotion enthusiast audience targeting",
      "Permitted-country and age-eligibility screening",
      "Brief-led qualification questions",
      "Documented consent with transparent source reporting",
      "Guaranteed 24-hour delivery SLA across all packages",
    ],
    details: [
      "Our PCH lead programme serves prize-and-promotion-style campaign briefs. Audience criteria, eligible jurisdictions, and campaign qualification fields are defined in partnership with your team prior to launch.",
      "We support only lawful, properly authorized promotional operators. Collection uses transparent opt-in terms, documented consent, and source logging. Data is handled strictly in accordance with regional consumer privacy laws.",
      "The service name represents the prize-and-promotion campaign format and does not imply direct affiliation with, endorsement by, or authorization from Publishers Clearing House. All campaign operators must hold appropriate licensing for their offers.",
    ],
    fieldsCaptured: ["Full Name", "Phone", "Email", "Address / Postal Code", "Eligibility Confirmation", "Capture Date/Time"],
    sourcingMethods: ["Prize draw registration portals", "Co-registration consumer surveys", "Digital promotion entry hubs"],
    freshnessWindow: "Guaranteed 24-Hour Delivery SLA",
    minVolume: "150 records (Starter from $100)",
    popularCountries: ["USA", "Canada", "UK"],
  },
  {
    slug: "mega-millions",
    name: "Mega Millions / Lottery-Interest Leads",
    category: "Promotional",
    image: "/lottery-tumbler.jpg",
    summary: "Lottery-interest audiences for authorized, jurisdiction-permitted campaigns.",
    focus: [
      "Targeted lottery-interest audience segmentation",
      "Jurisdiction and age-eligibility screening (18+ / 21+)",
      "Campaign-specific qualification fields",
      "Opt-in sourcing with verifiable consent records",
      "Guaranteed 24-hour delivery SLA across all packages",
    ],
    details: [
      "Build an engaged audience for lawful promotional campaigns in the jurisdictions your business is authorized to serve. Geographic targeting and age-eligibility criteria are validated before collection begins.",
      "Collection utilizes clear opt-in disclaimers, transparent terms, and documented consent timestamps. Source reporting, deduplication, and privacy-conscious data handling are core parts of the delivery standard.",
      "Mega Millions is a registered trademark. This programme does not imply affiliation with or endorsement by Mega Millions lottery operators, nor does it promise winning outcomes. Campaign operators remain solely responsible for local promotional licensing and jurisdiction compliance.",
    ],
    fieldsCaptured: ["Full Name", "Phone", "Email", "State / Province", "Age Verification", "Consent Record"],
    sourcingMethods: ["Lottery statistics & results portals", "Number tracking tools", "Incentive-based promotional surveys"],
    freshnessWindow: "Guaranteed 24-Hour Delivery SLA",
    minVolume: "150 records (Starter from $100)",
    popularCountries: ["United States", "Canada"],
  },

  // ── CATEGORY 02: Financial & Investment Leads ──
  {
    slug: "crypto",
    name: "Cryptocurrency Leads",
    category: "Financial",
    image: "/crypto-blockchain-tokens.jpg",
    summary: "Prospects expressing interest in cryptocurrency, digital assets and related services.",
    focus: [
      "Prospects expressing active interest in crypto, Web3 & digital assets",
      "Regional regulatory awareness (FCA, SEC, MiCA guidelines)",
      "Active mobile line screening and syntax verification",
      "Mandatory financial risk disclosures in capture flows",
      "Documented sourcing origins and consent records",
    ],
    details: [
      "Reach prospects who have actively expressed interest in digital asset trading, cryptocurrency platforms, educational resources, or custodial technologies. We build audience segments tailored to your platform's geographical licensing.",
      "Capture funnels include appropriate financial risk notices and transparent opt-in permissions. Leads are screened to verify phone line validity and remove stale or duplicate entries.",
      "Delivery can be configured via daily encrypted CSV files, secure SFTP, or real-time CRM webhook integrations.",
    ],
    fieldsCaptured: ["Full Name", "Phone", "Email", "Country/Region", "Trading Experience Level", "Opt-in Timestamp"],
    sourcingMethods: ["Crypto news & analysis portals", "Trading signal communities", "Web3 educational content hubs"],
    freshnessWindow: "Daily rolling batches or real-time API push",
    minVolume: "500 records",
    popularCountries: ["UK", "EU", "UAE / GCC", "Canada", "Australia", "Singapore"],
  },
  {
    slug: "forex",
    name: "Forex Leads",
    category: "Financial",
    image: "/forex-trading-station.jpg",
    summary: "Trading-interest prospects for appropriately authorized forex brokers.",
    focus: [
      "Trading-interest prospects for authorized forex brokers & prop desks",
      "Jurisdiction-compliant capture flows with mandatory risk disclosures",
      "HLR phone screening to ensure connectable mobile numbers",
      "Custom qualification fields (experience level, deposit tier)",
      "Dedicated account management and delivery manifests",
    ],
    details: [
      "Connect with prospective traders seeking retail brokerage accounts, prop firm evaluations, or financial trading education. Every prospect has requested information on forex trading services.",
      "We respect financial promotional regulations across major jurisdictions, ensuring capture creatives display appropriate risk notices. All submissions include verifiable digital consent tokens.",
      "Packages range from initial pilot test batches of 500 records up to high-volume recurring monthly broker partnerships.",
    ],
    fieldsCaptured: ["Full Name", "Verified Mobile", "Email", "Country", "Experience Level", "Capital Interest Tier"],
    sourcingMethods: ["Market analysis webinars", "Economic calendar tools", "Trading tutorial opt-in funnels"],
    freshnessWindow: "0-24 hour freshness SLA",
    minVolume: "500 records",
    popularCountries: ["UK", "Germany", "UAE", "South Africa", "Australia", "Southeast Asia"],
  },
  {
    slug: "investor",
    name: "Investor Leads",
    category: "Financial",
    image: "/investor-portfolio-desk.jpg",
    summary: "Investor-interest inquiries matched to campaign-specific criteria.",
    focus: [
      "Investor-interest inquiries matched to campaign-specific criteria",
      "High-touch, professional copy and discreet capture flows",
      "Strict data privacy and encryption during transit",
      "Detailed geographic targeting (ZIP/Postal code level)",
      "Consent-verified contact information",
    ],
    details: [
      "Our investor lead programme connects firms with prospects who have expressed interest in alternative investments, private equity, real estate syndications, and wealth management solutions.",
      "IMPORTANT BUYER DISTINCTION: Investor Leads represent prospects who have expressed interest in investment opportunities according to campaign criteria. They are NOT described as verified accredited investors unless their formal eligibility has been specifically verified through documented certification.",
      "All investor inquiry data is handled with institutional confidentiality and delivered securely via encrypted channels.",
    ],
    fieldsCaptured: ["Full Name", "Direct Phone", "Business/Personal Email", "City / State / ZIP", "Stated Investment Range", "Consent Token"],
    sourcingMethods: ["Alternative investment whitepapers", "Executive wealth reports", "Investment interest survey funnels"],
    freshnessWindow: "Under 24 hours",
    minVolume: "250 records",
    popularCountries: ["United States", "United Kingdom", "Switzerland", "UAE", "Singapore"],
  },
  {
    slug: "banking",
    name: "Banking Leads",
    category: "Financial",
    image: "/banking-office-branch.jpg",
    summary: "Prospects interested in banking products and financial services.",
    focus: [
      "Prospects interested in retail banking, merchant services & commercial accounts",
      "Strict zero-tolerance policy: NO account numbers, balances, or credentials collected",
      "Authorized opt-in inquiries for licensed banks and fintech providers",
      "Pre-qualification by banking product interest and geographic location",
      "Transparent consent records and encrypted delivery manifests",
    ],
    details: [
      "Connect with individuals and commercial enterprises actively seeking information on banking products, business accounts, credit facilities, high-yield savings, merchant processing, and digital fintech solutions.",
      "CRITICAL COMPLIANCE NOTICE: Banking Leads refer strictly to prospective customers who have expressed affirmative interest in receiving information regarding banking and financial products. Under no circumstances does this service collect, broker, or transmit private bank account numbers, passwords, PINs, balances, or confidential financial statements. All inquiries are pure marketing opt-ins generated through transparent educational and promotional funnels.",
      "Delivered with complete opt-in timestamps, campaign source URLs, and line-validated contact records for your customer onboarding desk.",
    ],
    fieldsCaptured: ["Full Name", "Verified Phone", "Email", "Country / State / ZIP", "Product Interest (Checking/Savings/Merchant/Business)", "Opt-in Consent Timestamp"],
    sourcingMethods: ["Banking comparison portals", "Commercial account inquiry forms", "Fintech product educational hubs"],
    freshnessWindow: "Daily batches or real-time webhook",
    minVolume: "500 records",
    popularCountries: ["United States", "United Kingdom", "Canada", "European Union"],
  },
  {
    slug: "pay-loan",
    name: "Pay Loan Leads",
    category: "Financial",
    image: "/pay-loan-consultation.jpg",
    summary: "Loan and consumer-finance inquiries for authorized lenders and brokers.",
    focus: [
      "Inquiries for consumer loans, personal credit & debt relief",
      "Permitted-region and state licensing compliance",
      "Transparent APR disclosures and representative loan terms",
      "Essential qualification fields (employment status, loan amount requested)",
      "Rapid delivery windows for urgent customer inquiries",
    ],
    details: [
      "Generate consumer finance and loan inquiries for authorized lenders and licensed lending networks. Inquiries come from individuals actively seeking credit options, personal loans, or debt relief assistance in your permitted operational jurisdictions.",
      "Capture forms include all required regulatory disclosures, including representative APR examples and transparent licensing statements. Prospects submit affirmative consent for phone and email follow-up.",
      "Fast delivery is paramount for consumer finance: leads can be delivered via real-time API push directly into your loan origination system or dialer.",
    ],
    fieldsCaptured: ["Full Name", "Phone", "Email", "State / ZIP", "Loan Amount Range", "Employment Status", "Timestamp"],
    sourcingMethods: ["Loan comparison portals", "Financial assistance resources", "Credit education calculators"],
    freshnessWindow: "Real-time API push (0-5 minutes) or hourly drops",
    minVolume: "500 records",
    popularCountries: ["United States", "United Kingdom", "Canada"],
  },

  // ── CATEGORY 03: Specialized & High-Intent Outreach ──
  {
    slug: "first-hit",
    name: "First-Hit Leads",
    category: "Specialized",
    image: "/first-hit-target.jpg",
    summary: "Newly acquired leads delivered within a clearly agreed freshness window.",
    focus: [
      "Explicit choice: Standard Fresh (0-24h window) vs. Dedicated Exclusive",
      "Exact capture timestamp included on every single delivered record",
      "HLR line-validation check prior to client handover",
      "Authorized opt-in sourcing and consent documentation",
      "Screened, transparent, and privacy-compliant delivery",
    ],
    details: [
      "First Hit refers specifically to newly acquired leads delivered within clearly agreed freshness windows. To protect buyers and ensure complete commercial transparency, our First Hit programme clearly distinguishes between 'Standard Fresh' and 'Dedicated Exclusive'. Buyers select the exact delivery standard they require before work begins.",
      "In our Standard Fresh tier, leads are freshly acquired and handed over within 0-2 hours (real-time push) or within 24 hours of user opt-in, complete with exact ISO timestamps. In our Dedicated Exclusive tier, the lead record is locked to a single buyer with zero secondary or concurrent distribution for the agreed contractual exclusivity period.",
      "Every batch includes documented origin data, capture URL, IP timestamp, and consent disclosures. We never make unverified conversion guarantees: our commitment is rigorous freshness verification, clean phone line screening, and documented proof of acquisition.",
    ],
    fieldsCaptured: ["Full Name", "Phone (Line-checked)", "Email Address", "Target Country / State", "Capture Timestamp (ISO)", "Opt-in Consent URL / Token"],
    sourcingMethods: ["Dedicated high-converting opt-in landing funnels", "Interactive promotional entry forms", "Targeted search-intent advertising", "Verified digital survey channels"],
    freshnessWindow: "Real-time webhook (0-15 mins) or daily morning batch (under 24 hours)",
    exclusivityNote:
      "CRITICAL BUYER NOTICE: First Hit leads are available either as 'Standard Fresh' (newly acquired within your 24-hr freshness SLA) or 'Dedicated Exclusive' (strictly 1-to-1 client lock). Your campaign agreement explicitly states your chosen exclusivity tier so you know precisely what you are purchasing.",
    minVolume: "500 records",
    popularCountries: ["United States", "United Kingdom", "Canada", "Australia", "European Union"],
  },
  {
    slug: "usa",
    name: "USA Targeted Leads",
    category: "Specialized",
    image: "/usa-regional-network.jpg",
    summary: "Precision nationwide and state-specific audience acquisition configured around your exact vertical, age demographics, and US compliance mandates.",
    focus: [
      "State-level, County, or ZIP-code radius targeting",
      "TCPA consent documentation and compliance review",
      "Demographic and household filters",
      "Fast daily handover or automated CRM routing",
      "Clear replacement policy for disconnected US numbers",
    ],
    details: [
      "Execute high-converting campaigns scoped specifically to permitted US states and territories. Whether you require nationwide reach or hyper-local ZIP-radius targeting, we calibrate collection to your operational territory.",
      "All US consumer campaigns adhere strictly to compliant outreach guidelines. Leads can include verifiable third-party certification tokens (such as Jornaya LeadID or TrustedForm certificates) upon request.",
      "We run phone number validation against US carrier databases to separate wireless from landline and eliminate disconnected lines.",
    ],
    fieldsCaptured: ["Full Name", "Phone (Wireless/Landline flag)", "Email", "Street Address", "City, State, ZIP", "TCPA Consent Token"],
    sourcingMethods: ["US consumer portals", "State-licensed promotional funnels", "Interactive regional surveys"],
    freshnessWindow: "Real-time or daily morning drops (EST)",
    minVolume: "1,000 records",
    popularCountries: ["United States (All 50 States)"],
  },
  {
    slug: "b2b",
    name: "B2B Leads",
    category: "Specialized",
    image: "/b2b-signalx-profiles.jpg",
    summary: "Decision-maker contacts segmented by industry, company revenue, job seniority, and exact geographic radius.",
    focus: [
      "Firmographic and job role targeting (C-level, VP, Director)",
      "Account-Based Marketing (ABM) list construction",
      "Verified direct-dial phone numbers and corporate emails",
      "Strict deduplication against your existing CRM database",
      "Consent-based corporate outreach compliance",
    ],
    details: [
      "Equip your sales executives with verified contact information for key business decision-makers. We filter prospect audiences based on your exact ideal customer profile (ICP).",
      "Target criteria can include industry vertical, annual revenue, tech stack adoption, and geographic headquarters. All corporate emails and direct lines are validated through automated ping and verification checks.",
      "We provide custom data schemas matching your CRM (Salesforce, HubSpot, Zoho, or raw CSV).",
    ],
    fieldsCaptured: ["First & Last Name", "Job Title", "Company Name", "Corporate Email", "Direct Phone / HQ Phone", "Company Size / Revenue", "LinkedIn URL"],
    sourcingMethods: ["B2B research databases", "Industry survey participation", "Executive webinar registrations", "Digital trade publications"],
    freshnessWindow: "Curated on-demand within 24 hours",
    minVolume: "250 records",
    popularCountries: ["North America", "United Kingdom & Europe", "Australia", "Middle East"],
  },
  {
    slug: "gambling",
    name: "Gambling Campaign Leads",
    category: "Specialized",
    image: "/canva-assets/service-1.jpg",
    summary: "Audience acquisition built exclusively for licensed gaming, sports betting, and casino operators, aligned with responsible gambling mandates.",
    focus: [
      "Strict targeting of legally licensed jurisdictions only",
      "Age verification (18+ / 21+ mandatory threshold)",
      "Responsible gambling disclosures and self-exclusion alignment",
      "High-intent player interest segmentation",
      "Consent-verified opt-in documentation",
    ],
    details: [
      "We work solely with licensed, regulated casino and sports wagering operators. Audience acquisition is strictly geographically restricted to states and countries where online gaming is legally permitted.",
      "Every capture funnel features mandatory age-verification gates and prominent responsible gambling helpline resources. We respect self-exclusion lists and local gaming authority guidelines.",
      "Leads represent individuals who have expressed interest in iGaming promotions, VIP loyalty programs, and sportsbook bonus offers.",
    ],
    fieldsCaptured: ["Full Name", "Phone", "Email", "Jurisdiction / State", "Age Confirmation (21+)", "Opt-in Consent Log"],
    sourcingMethods: ["Licensed sports prediction tools", "Odds comparison hubs", "iGaming promotional guides"],
    freshnessWindow: "Daily batches or real-time API push",
    minVolume: "1,000 records",
    popularCountries: ["UK", "Malta / EU Regulated", "US Legal Gaming States", "Canada (Ontario)", "Latin America"],
  },
  {
    slug: "recovery",
    name: "Recovery Inquiry Leads",
    category: "Specialized",
    image: "/lead-dashboard-preview.jpg",
    summary: "Inquiry generation for authorized claims-assistance, fraud dispute, and chargeback services, with transparent, non-misleading communications.",
    focus: [
      "Accurate, non-misleading capture copy with mandatory legal disclaimers",
      "Pre-qualification fields regarding claim type and disputed amount",
      "Strict data privacy and encryption standards",
      "Zero promise of recovery guarantees or unrealistic outcomes",
      "Consent-verified client inquiries",
    ],
    details: [
      "Generate legitimate inquiries for professional claims-recovery specialists, financial dispute consultants, and consumer law firms assisting clients with unauthorized transactions or consumer disputes.",
      "We maintain the highest ethical standards: capture creatives never guarantee recovery of funds, impersonate government agencies, or use deceptive language. Inquiries represent individuals actively seeking professional assistance.",
      "Qualification forms capture essential dispute background so your intake team can promptly assess case viability.",
    ],
    fieldsCaptured: ["Full Name", "Contact Phone", "Email", "Country / Jurisdiction", "Dispute Category", "Approximate Claim Value", "Case Description"],
    sourcingMethods: ["Consumer rights guidance portals", "Chargeback education resources", "Legal advisory opt-in funnels"],
    freshnessWindow: "Daily batches or real-time webhook",
    minVolume: "250 records",
    popularCountries: ["USA", "United Kingdom", "Canada", "Australia", "European Union"],
  },
  {
    slug: "ledger",
    name: "Ledger-Related Leads",
    category: "Specialized",
    image: "/canva-assets/case-phones.jpg",
    summary: "Audience campaigns for hardware wallets, key security solutions, and crypto custody devices, focused on security-conscious digital asset holders.",
    focus: [
      "Security-interest and self-custody segmentation",
      "Brand-safe creative execution without sensitive seed/credential queries",
      "Verified consumer contact information",
      "Privacy-preserving capture and handover standards",
      "Documented opt-in origins",
    ],
    details: [
      "Help digital security providers and hardware wallet resellers reach consumers who own cryptocurrency and prioritize offline cold storage and asset protection.",
      "Our capture mechanisms strictly respect user privacy: we never solicit private keys, seed phrases, or specific wallet balances. Capture focuses purely on device interest, security software upgrades, and hardware purchases.",
      "Delivered with complete source reporting and verified contact records for your sales and fulfillment teams.",
    ],
    fieldsCaptured: ["Full Name", "Phone", "Email", "Country / Postal Code", "Device Interest", "Opt-in Timestamp"],
    sourcingMethods: ["Hardware security guide downloads", "Web3 safety checklists", "Crypto storage review portals"],
    freshnessWindow: "Daily batches or weekly schedule",
    minVolume: "500 records",
    popularCountries: ["Global (USA, EU, UK, Canada, Australia, Japan)"],
  },
  {
    slug: "custom",
    name: "Custom Lead Generation",
    category: "Specialized",
    image: "/canva-assets/case-grid.jpg",
    summary: "Bespoke audience generation built from scratch for niche verticals, specialized campaigns, and unique qualification requirements.",
    focus: [
      "Discovery consultation and custom scope definition",
      "Tailored qualification survey questions",
      "Bespoke landing page and brand-aligned creative design",
      "Custom API webhook delivery into your proprietary software",
      "Dedicated campaign strategist and quality assurance",
    ],
    details: [
      "If your campaign requirements fall outside standard industry categories, our team will engineer a custom acquisition architecture specifically for your business model.",
      "We work collaboratively with your product and compliance teams to design custom questionnaires, screening criteria, and validation workflows that ensure high lead relevance.",
      "Every aspect—from creative copywriting to delivery cadence and data formatting—is custom-tailored to your operational workflow.",
    ],
    fieldsCaptured: ["Configured per client specification", "Standard Contact Data", "Custom Survey Questions", "Consent & Timestamp Logs"],
    sourcingMethods: ["Bespoke digital funnels", "Custom programmatic acquisition", "Multi-step interactive assessments"],
    freshnessWindow: "Configurable per agreement",
    minVolume: "Custom brief",
    popularCountries: ["Global coverage upon request"],
  },
];

export const ADDITIONAL_CAPABILITIES = [
  {
    name: "Insurance Inquiry Leads",
    desc: "Prospects requesting health, life, auto, or commercial insurance quotes with opt-in consent.",
    badge: "Consumer Services",
  },
  {
    name: "Mortgage Inquiry Leads",
    desc: "Homeowners and buyers actively seeking mortgage refinancing, purchase loans, or rate comparisons.",
    badge: "Home Finance",
  },
  {
    name: "Business Owner Leads",
    desc: "Verified SMB decision-makers and founders interested in business banking, equipment loans, or commercial solutions.",
    badge: "Commercial",
  },
  {
    name: "Solar Inquiry Leads",
    desc: "Residential property owners inquiring about renewable energy programs, solar installations, and utility rebates.",
    badge: "Clean Energy",
  },
  {
    name: "E-Commerce Leads",
    desc: "Consumers who actively engage with online shopping promotions, direct-to-consumer deals, and digital reward clubs.",
    badge: "Retail & DTC",
  },
  {
    name: "Home Improvement Leads",
    desc: "Homeowners requesting contractor estimates for roofing, HVAC, windows, remodeling, and residential repair.",
    badge: "Home Services",
  },
  {
    name: "Appointment Setting",
    desc: "Pre-screened, calendar-scheduled appointments for authorized B2B sales teams and professional services desks.",
    badge: "High Intent",
  },
  {
    name: "Custom B2B Acquisition",
    desc: "Targeted Account-Based Marketing (ABM) prospect acquisition campaigns engineered to your exact enterprise criteria.",
    badge: "Enterprise",
  },
];

export const STRUCTURED_APPROACH = [
  {
    step: "01",
    title: "Campaign-specific targeting",
    desc: "Requirements and audience parameters aligned directly with your campaign brief.",
  },
  {
    step: "02",
    title: "Freshness standards",
    desc: "Delivery timeframes, batch schedules, and SLAs clearly defined before ordering.",
  },
  {
    step: "03",
    title: "Sourcing transparency",
    desc: "Available origin URLs, consent documentation, and brokerage disclosure.",
  },
  {
    step: "04",
    title: "Buyer-focused service",
    desc: "Clear communication, dedicated desk coordinator, and agreed delivery requirements.",
  },
];

export const POST_PURCHASE_WORKFLOW = [
  {
    step: "01",
    title: "Targeting & Audience Selection",
    subtitle: "Precision brief alignment before acquisition starts",
    desc: "Buyers define exact campaign parameters: target country, state/region, age criteria, industry vertical, and qualification questions. We verify that all requested criteria comply with local marketing regulations before launching funnels.",
    deliverables: ["Jurisdiction & Geo-filtering", "Custom questionnaire design", "Demographic & age gating", "Offer alignment review"],
    image: "/global-operations-center.jpg",
  },
  {
    step: "02",
    title: "Lead Quality & Verification",
    subtitle: "Multi-layered screening prior to handover",
    desc: "Every record passes automated quality gates: syntax validation, duplicate scrubbing against your historical delivery logs, and live HLR carrier checks to verify that mobile lines are active and connectable.",
    deliverables: ["Live HLR mobile line validation", "Email deliverability ping check", "Duplicate exclusion across batches", "Bot & fraudulent entry scrubbing"],
    image: "/curved-dashboard-monitor.jpg",
  },
  {
    step: "03",
    title: "Consent & Sourcing Transparency",
    subtitle: "Documented audit trail and brokerage disclosure",
    desc: "We operate with total sourcing transparency. Every batch includes capture URL, IP timestamp, and consent documentation. As a professional sourcing coordinator and broker, we clearly disclose whether a batch is directly generated through our internal assets or procured via our vetted partner network.",
    deliverables: ["Exact ISO capture timestamps", "Landing page URL & consent log", "Direct vs partner sourcing disclosure", "Consent documentation & compliance review"],
    image: "/sweepstakes-million-question.jpg",
  },
  {
    step: "04",
    title: "Lead Delivery & Reporting",
    subtitle: "Predictable schedules in your preferred format",
    desc: "Delivered according to your agreed schedule: real-time API webhooks (0-15 minutes), daily morning batch drops, or encrypted weekly archives. Choose between CSV, Excel, CRM integration (HubSpot/Salesforce), or direct dialer feeds.",
    deliverables: ["Secure CSV & Excel spreadsheets", "Real-time CRM webhook push", "Encrypted SFTP transfer", "Batch delivery manifest & stats"],
    image: "/crypto-analytics-dashboard.jpg",
  },
  {
    step: "05",
    title: "Buyer Support & Order Management",
    subtitle: "Clear replacement policy & dedicated coordination",
    desc: "Clients receive proactive updates from a dedicated account coordinator. If any record is found to be disconnected or invalid, submit it within 24 hours for immediate 1-to-1 credit replacement under our transparent warranty.",
    deliverables: ["24-Hour invalid lead replacement policy", "Dedicated Telegram/WhatsApp support", "Delivery discrepancy audits", "Flexible campaign pacing adjustments"],
    image: "/team-operations-center.jpg",
  },
];

export const PACKAGES = [
  {
    id: "tier-100",
    name: "$100 Starter Package",
    badge: "Starter Test",
    price: "$100",
    volume: "150 Verified Leads",
    pricingSummary: "$100 fixed · ~$0.67 / lead",
    idealFor: "Campaign offer testing, script validation, and rapid response benchmarking.",
    freshness: "⚡ Guaranteed 24-Hour Delivery",
    deliveryMode: "Secure CSV / Excel file transfer (within 24h)",
    features: [
      "150 Verified Sweepstakes / PCH & Mega Millions records",
      "⚡ Guaranteed delivery within 24 hours",
      "Targeted geographic & state demographic filtering",
      "Full opt-in consent documentation & timestamp",
      "Automated phone syntax & duplicate scrubbing",
      "Clear replacement policy on invalid phone lines (24h SLA)",
    ],
    replacementPolicy: "Clear replacement policy: 1-to-1 replacement credit on verified disconnected or invalid numbers reported within 24 hours.",
  },
  {
    id: "tier-200",
    name: "$200 Growth Package",
    badge: "Growth Momentum",
    price: "$200",
    volume: "300 Verified Leads",
    pricingSummary: "$200 fixed · ~$0.67 / lead",
    idealFor: "Active daily outbound sales teams, growing call desks, and established campaign operators.",
    freshness: "⚡ Guaranteed 24-Hour Delivery",
    deliveryMode: "Secure CSV / Excel file transfer (within 24h)",
    features: [
      "300 Verified Sweepstakes / PCH & Mega Millions records",
      "⚡ Guaranteed delivery within 24 hours",
      "Multi-country / regional geo-targeting",
      "HLR mobile line-status live ping verification",
      "High-intent promotional survey responders",
      "Clear replacement policy on invalid phone lines (24h SLA)",
    ],
    replacementPolicy: "Clear replacement policy: proactive carrier verification prior to dispatch + priority 24-hour replacement window.",
  },
  {
    id: "tier-300",
    name: "$300 Pro Package",
    badge: "Better Value",
    price: "$300",
    volume: "500 Verified Leads",
    pricingSummary: "$300 fixed · $0.60 / lead (Better Value!)",
    idealFor: "Scaling outbound teams, multiple dialer seats, brokers, and active promotional campaigns.",
    freshness: "⚡ Guaranteed 24-Hour Delivery",
    deliveryMode: "Secure CSV / Excel file transfer (within 24h)",
    features: [
      "500 Verified Sweepstakes / PCH & Mega Millions records",
      "⚡ Guaranteed delivery within 24 hours",
      "Discounted volume rate ($0.60 / lead — Save $35+)",
      "Custom demographic & survey qualification fields",
      "Priority batch extraction & rapid ingestion",
      "Clear replacement policy: priority 24h carrier verification credit",
    ],
    replacementPolicy: "Clear replacement policy: priority carrier verification & 24h replacement credit.",
  },
  {
    id: "tier-500",
    name: "$500 Scale Master",
    badge: "Most Popular · Best Value",
    price: "$500",
    volume: "1,000 Verified Leads",
    pricingSummary: "$500 fixed · $0.50 / lead (Bigger Package, Best Value!)",
    idealFor: "High-volume call centers, multi-line autodialers, enterprise brokers, and heavy campaigns.",
    freshness: "⚡ Guaranteed 24-Hour Delivery",
    deliveryMode: "Secure CSV / Excel file transfer (within 24h)",
    features: [
      "1,000 Verified Sweepstakes / PCH & Mega Millions records",
      "⚡ Guaranteed delivery within 24 hours",
      "Deepest volume discount ($0.50 / lead — Save 25%!)",
      "HLR mobile line-status live ping carrier verification",
      "Flexible package options & priority delivery formats",
      "Dedicated Senior Campaign Account Manager",
      "Clear replacement policy: guaranteed 1-to-1 credit on invalid lines (24h)",
    ],
    replacementPolicy: "Clear replacement policy: priority carrier verification & instant 24h credit.",
  },
];

export const BUYER_CONFIDENCE = [
  {
    title: "1. Verifiable Opt-In Sourcing",
    tagline: "100% Consent-Driven Capture",
    desc: "Every record originates from an affirmative opt-in digital funnel—interactive surveys, promotional entry hubs, and targeted intent pages. We never use scraped, recycled, or unverified contact lists.",
  },
  {
    title: "2. Consent Documentation & Compliance Review",
    tagline: "Audit-Trail Verified",
    desc: "Every delivered lead is accompanied by a complete digital audit trail: exact capture timestamp (ISO 8601), user IP address, landing page domain, and documented affirmative consent wording.",
  },
  {
    title: "3. Timestamped Freshness Guarantee",
    tagline: "Precise Delivery SLAs",
    desc: "Freshness is never left to interpretation. For First Hit and real-time tiers, leads are delivered within minutes of submission. For daily batches, records are delivered within agreed 24-hour windows with timestamps intact.",
  },
  {
    title: "4. Multi-Stage Quality Screening",
    tagline: "Carrier & Syntax Validation",
    desc: "Before dispatch, data passes automated filters: email syntax verification, HLR phone line validation to eliminate dead numbers, and strict deduplication against your historical delivery log.",
  },
  {
    title: "5. Clear Replacement Policy",
    tagline: "Transparent Buyer Protection",
    desc: "If any lead in your delivered batch is disconnected, contains corrupted syntax, or was delivered to your team in a previous batch, notify us within 24 hours for immediate 1-to-1 replacement credit.",
  },
];

export const SOLUTIONS = [
  {
    name: "SIP Trunk Solutions",
    badge: "Carrier Grade",
    desc: "High-capacity SIP trunking arrangements connecting your IP-PBX or dialer directly to premium Tier-1 telecom carriers, sized for high concurrent call concurrency and crisp audio quality.",
    highlights: ["Global voice termination", "Flexible channel scaling", "Competitive international rates"],
  },
  {
    name: "DID Number Solutions",
    badge: "Local Presence",
    desc: "Direct Inward Dialing (DID) numbers across 60+ countries, enabling outbound calling campaigns to display recognizable, local caller IDs that maximize call answer and connection rates.",
    highlights: ["Clean telecom reputation", "Local & toll-free availability", "Rapid bulk number provisioning"],
  },
  {
    name: "Cloud Dialer Solutions",
    badge: "Outbound Infrastructure",
    desc: "Consultation and deployment support for cloud dialer platforms (predictive, power, and progressive) configured for maximum agent talk-time, campaign compliance, and live call analytics.",
    highlights: ["Predictive & power dialing", "Live agent dashboard", "CRM & Webhook automation"],
  },
  {
    name: "Business Calling Systems",
    badge: "Team PBX",
    desc: "Turnkey cloud PBX setups for international remote teams: custom call queues, IVR routing, extension management, encrypted call recording, and real-time supervisor monitoring.",
    highlights: ["Custom IVR routing trees", "Secure call recording storage", "Full remote team mobility"],
  },
  {
    name: "Supported Google Voice Integration",
    badge: "Workflow Support",
    desc: "Technical guidance on structuring Google Voice business workflows for small campaign teams where appropriate under Google Workspace terms of service.",
    highlights: ["Multi-device ringing", "SMS & voicemail routing", "Fast deployment for agile teams"],
  },
];
