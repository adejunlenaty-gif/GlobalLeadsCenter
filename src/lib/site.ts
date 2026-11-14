export const CONTACT = {
  telegram: "https://t.me/premiumleadscenter",
  telegramAlt: "https://t.me/globalleadscenter",
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

export type ServiceCategory = "Promotional" | "Finance & Web3" | "B2B & Outreach" | "Regulated Niches";

export type Service = {
  slug: string;
  name: string;
  category: ServiceCategory;
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

export const CATEGORIES: { id: ServiceCategory; title: string; desc: string }[] = [
  {
    id: "Promotional",
    title: "Promotional & Sweepstakes Audiences",
    desc: "Authorised promotional, lottery-interest, and incentive-driven campaign audiences with verified opt-in collection.",
  },
  {
    id: "Finance & Web3",
    title: "Financial, Trading & Web3 Investors",
    desc: "Active market participants, crypto traders, retail investors, and consumer credit prospects matched to regulatory tiers.",
  },
  {
    id: "B2B & Outreach",
    title: "Enterprise B2B & Regional Targeting",
    desc: "Decision-maker contacts segmented by industry, company revenue, job seniority, and exact geographic radius.",
  },
  {
    id: "Regulated Niches",
    title: "Specialized & Compliance-Sensitive Campaigns",
    desc: "Programs built strictly for licensed gaming operators and verified recovery assistance firms with compliant disclosure copy.",
  },
];

export const SERVICES: Service[] = [
  {
    slug: "first-hit",
    name: "Premium First Hit Lead Generation",
    category: "Promotional",
    summary:
      "Newly acquired prospects delivered within agreed freshness windows, with verified opt-in collection and an unambiguous choice between Standard Fresh and Dedicated Exclusive delivery.",
    focus: [
      "Explicit choice: Standard Fresh (0-24h window) vs. Dedicated Exclusive",
      "Exact capture timestamp included on every single delivered record",
      "HLR line-validation check prior to client handover",
      "Authorised opt-in sourcing and consent documentation",
      "Screened, transparent, and privacy-compliant delivery",
    ],
    details: [
      "First Hit refers specifically to newly acquired leads delivered within agreed freshness windows. To protect buyers and ensure complete commercial transparency, our First Hit programme clearly distinguishes between 'Standard Fresh' and 'Dedicated Exclusive'. Buyers select the exact delivery standard they require before work begins.",
      "In our Standard Fresh tier, leads are freshly acquired and handed over within 0-2 hours (real-time push) or within 24 hours of user opt-in, complete with exact ISO timestamps. In our Dedicated Exclusive tier, the lead record is locked to a single buyer with zero secondary or concurrent distribution for the agreed contractual exclusivity period.",
      "Every batch includes documented origin data, capture URL, IP timestamp, and consent disclosures. We never make unverified conversion guarantees: our commitment is rigorous freshness verification, clean phone line screening, and documented proof of acquisition.",
    ],
    fieldsCaptured: ["Full Name", "Phone (Line-checked)", "Email Address", "Target Country / State", "Capture Timestamp (ISO)", "Opt-in Consent URL / Token"],
    sourcingMethods: ["Dedicated high-converting opt-in landing funnels", "Interactive sweepstakes entry forms", "Targeted search-intent advertising", "Verified digital survey channels"],
    freshnessWindow: "Real-time webhook (0-15 mins) or daily morning batch (under 24 hours)",
    exclusivityNote:
      "CRITICAL BUYER NOTICE: First Hit leads are available either as 'Standard Fresh' (newly acquired within your 24-hr freshness SLA) or 'Dedicated Exclusive' (strictly 1-to-1 client lock). Your campaign agreement explicitly states your chosen exclusivity tier so you know precisely what you are purchasing.",
    minVolume: "500 records",
    popularCountries: ["United States", "United Kingdom", "Canada", "Australia", "European Union"],
  },
  {
    slug: "sweepstakes",
    name: "Premium Sweepstakes Lead Generation",
    category: "Promotional",
    summary:
      "Targeted audience acquisition for authorised sweepstakes, prize promotions, and brand reward giveaways with verifiable opt-in consent and demographic qualification.",
    focus: [
      "Targeted audience and geographic acquisition",
      "Campaign-specific demographic qualification",
      "Authorised opt-in sourcing with clear prize disclosures",
      "Freshness windows agreed upfront (daily or weekly)",
      "Strict compliance with promotional advertising guidelines",
    ],
    details: [
      "Develop an enthusiastic, high-intent audience around your authorised promotional giveaway, prize draw, or reward offer. We define geographic, age, and demographic criteria with your team so acquisition directly supports your campaign.",
      "Capture funnels use transparent promotional terms, clear prize disclosure language, and affirmative opt-in checkboxes. Sourcing documentation is maintained for every record, ensuring you meet regional advertising standards.",
      "Your proposal establishes delivery formats (CSV, Excel, CRM API), freshness criteria, and volume tiers. We assess all deliveries against strict quality benchmarks, filtering out invalid syntax and disconnected phone numbers.",
    ],
    fieldsCaptured: ["Full Name", "Verified Mobile Phone", "Email", "State/City/ZIP", "Age Bracket", "Timestamp & IP"],
    sourcingMethods: ["Incentive giveaway portals", "Mobile consumer sweepstakes pages", "Sponsored social media prize funnels"],
    freshnessWindow: "Daily batches (under 24h) or weekly schedule",
    minVolume: "1,000 records",
    popularCountries: ["USA", "Canada", "UK", "Australia"],
  },
  {
    slug: "pch",
    name: "Premium PCH Lead Generation",
    category: "Promotional",
    summary:
      "Audience acquisition for prize-and-promotion briefs, combining relevant qualification, documented consent, and international delivery schedules.",
    focus: [
      "Prize-and-promotion enthusiast audience targeting",
      "Permitted-country and age-eligibility screening",
      "Brief-led qualification questions",
      "Documented consent with transparent source reporting",
      "Agreed delivery formats and SLA schedules",
    ],
    details: [
      "Our PCH lead programme serves prize-and-promotion-style campaign briefs. Audience criteria, eligible jurisdictions, and campaign qualification fields are defined in partnership with your team prior to launch.",
      "We support only lawful, properly authorised promotional operators. Collection uses transparent opt-in terms, documented consent, and source logging. Data is handled strictly in accordance with regional consumer privacy laws.",
      "The service name represents the prize-and-promotion campaign format and does not imply direct affiliation with, endorsement by, or authorisation from Publishers Clearing House. All campaign operators must hold appropriate licensing for their offers.",
    ],
    fieldsCaptured: ["Full Name", "Phone", "Email", "Address / Postal Code", "Eligibility Confirmation", "Capture Date/Time"],
    sourcingMethods: ["Prize draw registration portals", "Co-registration consumer surveys", "Digital promotion entry hubs"],
    freshnessWindow: "24-48 hour delivery cycles",
    minVolume: "1,000 records",
    popularCountries: ["USA", "Canada", "UK"],
  },
  {
    slug: "mega-millions",
    name: "Premium Mega Millions Lead Generation",
    category: "Promotional",
    summary:
      "Lottery-interest audience acquisition for lawful, appropriately authorised promotions through jurisdiction-aware targeting and documented consent.",
    focus: [
      "Targeted lottery-interest audience segmentation",
      "Jurisdiction and age-eligibility screening (18+ / 21+)",
      "Campaign-specific qualification fields",
      "Opt-in sourcing with verifiable consent records",
      "Freshness verification and delivery manifest",
    ],
    details: [
      "Build an engaged audience for lawful promotional campaigns in the jurisdictions your business is authorised to serve. Geographic targeting and age-eligibility criteria are validated before collection begins.",
      "Collection utilizes clear opt-in disclaimers, transparent terms, and documented consent timestamps. Source reporting, deduplication, and privacy-conscious data handling are core parts of the delivery standard.",
      "This programme does not imply affiliation with or endorsement by Mega Millions lottery operators, nor does it promise winning outcomes. Campaign operators remain solely responsible for local promotional licensing.",
    ],
    fieldsCaptured: ["Full Name", "Phone", "Email", "State / Province", "Age Verification", "Consent Record"],
    sourcingMethods: ["Lottery statistics & results portals", "Number tracking tools", "Incentive-based promotional surveys"],
    freshnessWindow: "Daily batches or bi-weekly drops",
    minVolume: "1,000 records",
    popularCountries: ["United States", "Canada"],
  },
  {
    slug: "crypto",
    name: "Cryptocurrency & Web3 Lead Generation",
    category: "Finance & Web3",
    summary:
      "High-intent lead programmes for digital-asset platforms, trading exchanges, and Web3 projects seeking prospects with active crypto interest and experience.",
    focus: [
      "Crypto experience and wallet interest segmentation",
      "Regional regulatory awareness (FCA, SEC, MiCA guidelines)",
      "Verification of active mobile lines and contact details",
      "Clear risk disclaimers in all capture flows",
      "Documented sourcing and GDPR/TCPA compliance",
    ],
    details: [
      "Reach individuals who have actively expressed interest in digital asset trading, token launches, crypto education, or custodial solutions. We build audience segments tailored to your platform's geographical licenses.",
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
    name: "Forex & Trading Lead Generation",
    category: "Finance & Web3",
    summary:
      "Prospect generation for licensed retail brokers, prop trading firms, and financial educators scoped to your permitted jurisdictions and deposit experience tiers.",
    focus: [
      "Market experience segmentation (Beginner to Experienced)",
      "Jurisdiction-compliant capture flows with mandatory risk disclosures",
      "HLR phone screening to ensure connectable mobile numbers",
      "Custom qualification fields (preferred platform, deposit tier)",
      "Dedicated account management and delivery manifests",
    ],
    details: [
      "Connect with prospective traders who are seeking brokerage accounts, prop firm evaluations, or professional trading education. Every prospect has requested information on forex trading services.",
      "We respect financial promotional regulations across major regions, ensuring capture creatives display appropriate risk notices. All submissions include verifiable digital consent tokens.",
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
    name: "Accredited & Private Investor Leads",
    category: "Finance & Web3",
    summary:
      "Targeted prospecting for wealth management, private equity, alternative asset syndicates, and high-net-worth investment opportunities.",
    focus: [
      "Net worth and investment criteria profiling",
      "High-touch, professional copy and discreet capture flows",
      "Strict data privacy and encryption during transit",
      "Detailed geographic targeting (ZIP/Postal code level)",
      "Consent-verified contact information",
    ],
    details: [
      "Our investor lead programme serves firms looking for qualified prospects interested in alternative investments, real estate syndications, private equity, and wealth planning.",
      "We deploy high-quality, professional landing assets that clearly explain the nature of investment inquiries. Contacts are pre-qualified based on stated liquidity, investment horizon, and geographic location.",
      "All investor data is treated with institutional confidentiality and delivered securely via encrypted channels.",
    ],
    fieldsCaptured: ["Full Name", "Direct Phone", "Business/Personal Email", "City / State / ZIP", "Stated Investment Range", "Consent Token"],
    sourcingMethods: ["Alternative investment whitepapers", "Executive wealth reports", "Accredited investor survey funnels"],
    freshnessWindow: "24-48 hours",
    minVolume: "250 records",
    popularCountries: ["United States", "United Kingdom", "Switzerland", "UAE", "Singapore"],
  },
  {
    slug: "pay-loan",
    name: "Consumer Finance & Pay Loan Inquiries",
    category: "Finance & Web3",
    summary:
      "High-intent inquiry generation for authorised lenders, brokers, and credit assistance providers, scoped strictly to permitted credit jurisdictions.",
    focus: [
      "Permitted-region and state licensing compliance",
      "Transparent APR and loan disclosure terms",
      "Essential qualification fields (employment, amount requested)",
      "Rapid delivery windows for urgent customer inquiries",
      "Strict data protection for financial inquiry records",
    ],
    details: [
      "Generate consumer finance inquiries for licensed lenders and lending networks. Inquiries come from individuals actively seeking loan options or debt relief solutions in your operating states.",
      "Capture forms include all required regulatory disclosures, including representative APR examples and transparent licensing statements. Prospects submit affirmative consent for phone and email follow-up.",
      "Fast delivery is paramount for consumer finance: leads can be delivered via real-time API push directly into your loan origination system or dialer.",
    ],
    fieldsCaptured: ["Full Name", "Phone", "Email", "State / ZIP", "Loan Amount Range", "Employment Status", "Timestamp"],
    sourcingMethods: ["Loan comparison portals", "Financial assistance resources", "Credit education calculators"],
    freshnessWindow: "Real-time API push (0-5 minutes) or hourly drops",
    minVolume: "500 records",
    popularCountries: ["United States", "United Kingdom", "Canada"],
  },
  {
    slug: "ledger",
    name: "Hardware Wallet & Digital Security Campaigns",
    category: "Finance & Web3",
    summary:
      "Audience campaigns for hardware wallets, key security solutions, and crypto custody devices, focused on security-conscious digital asset holders.",
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
    slug: "b2b",
    name: "B2B Decision-Maker Lead Generation",
    category: "B2B & Outreach",
    summary:
      "Targeted prospecting by industry vertical, company revenue, employee headcount, and job title for enterprise sales and partnership desks.",
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
    freshnessWindow: "Curated on-demand within 48-72 hours",
    minVolume: "250 records",
    popularCountries: ["North America", "United Kingdom & Europe", "Australia", "Middle East"],
  },
  {
    slug: "usa",
    name: "USA State & ZIP Targeted Lead Generation",
    category: "B2B & Outreach",
    summary:
      "Precision nationwide and state-specific audience acquisition configured around your exact vertical, age demographics, and US compliance mandates.",
    focus: [
      "State-level, County, or ZIP-code radius targeting",
      "TCPA compliance records with TrustedForm / Jornaya token support",
      "Demographic and household filters",
      "Fast daily handover or automated CRM routing",
      "Replacement guarantee for disconnected US numbers",
    ],
    details: [
      "Execute high-converting campaigns scoped specifically to permitted US states and territories. Whether you require nationwide reach or hyper-local ZIP-radius targeting, we calibrate collection to your operational territory.",
      "All US consumer campaigns adhere strictly to TCPA guidelines. Leads can include verifiable third-party certification tokens (such as Jornaya LeadID or TrustedForm certificates) upon request.",
      "We run phone number validation against US carrier databases to separate wireless from landline and eliminate disconnected lines.",
    ],
    fieldsCaptured: ["Full Name", "Phone (Wireless/Landline flag)", "Email", "Street Address", "City, State, ZIP", "TCPA Consent Token"],
    sourcingMethods: ["US consumer portals", "State-licensed promotional funnels", "Interactive regional surveys"],
    freshnessWindow: "Real-time or daily morning drops (EST)",
    minVolume: "1,000 records",
    popularCountries: ["United States (All 50 States)"],
  },
  {
    slug: "custom",
    name: "Custom Bespoke Lead Generation",
    category: "B2B & Outreach",
    summary:
      "Bespoke audience generation built from scratch for niche verticals, specialized campaigns, and unique qualification requirements.",
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
  {
    slug: "gambling",
    name: "Licensed Gambling & iGaming Lead Generation",
    category: "Regulated Niches",
    summary:
      "Audience acquisition built exclusively for licensed gaming, sports betting, and casino operators, aligned with responsible gambling mandates.",
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
    name: "Recovery & Claims Assistance Lead Generation",
    category: "Regulated Niches",
    summary:
      "Inquiry generation for authorized claims-assistance, fraud dispute, and chargeback services, with transparent, non-misleading communications.",
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
];

export const PACKAGES = [
  {
    id: "starter",
    name: "Starter Pilot Package",
    badge: "Testing & Validation",
    volume: "500 – 1,000 Verified Leads",
    idealFor: "Campaign offer testing, script validation, and baseline conversion benchmarking.",
    freshness: "24-48 Hours batch delivery",
    deliveryMode: "Secure CSV / Excel file transfer",
    features: [
      "Targeted geographic & demographic filtering",
      "Full opt-in consent documentation & timestamp",
      "Automated phone syntax & duplicate scrubbing",
      "100% replacement warranty on invalid phone lines",
      "24-Hour onboarding & campaign launch SLA",
    ],
    replacementPolicy: "100% free replacement on any disconnected or invalid records reported within 48 hours.",
  },
  {
    id: "growth",
    name: "Growth Accelerator Package",
    badge: "Most Popular",
    volume: "2,500 – 5,000 Verified Leads",
    idealFor: "Active outbound sales teams, growing call desks, and established campaign operators.",
    freshness: "12-24 Hours or daily rolling drops",
    deliveryMode: "Daily CSV drops, SFTP, or CRM webhook",
    features: [
      "Everything in Starter Pilot, plus:",
      "Custom qualification questionnaire fields",
      "HLR mobile line-status live ping verification",
      "Choice of Standard Fresh or Dedicated Exclusive tier",
      "Weekly volume pacing & schedule adjustments",
      "Dedicated Campaign Account Manager",
    ],
    replacementPolicy: "100% replacement warranty + proactive carrier verification prior to dispatch.",
  },
  {
    id: "enterprise",
    name: "Enterprise Scale Package",
    badge: "High Volume Desks",
    volume: "10,000+ Verified Leads / Month",
    idealFor: "Enterprise call centers, multi-seat brokerage teams, and global lead aggregators.",
    freshness: "Real-time API push (0-15 mins) or hourly batches",
    deliveryMode: "Direct API Webhook / CRM Integration",
    features: [
      "Everything in Growth Accelerator, plus:",
      "Highest volume-tiered pricing discounts",
      "Real-time webhook API push directly into your dialer",
      "Guaranteed exclusive distribution locks available",
      "Custom landing page creative & domain matching",
      "Priority 24/7 technical and campaign support desk",
    ],
    replacementPolicy: "Automated instant API replacement credit and daily discrepancy audits.",
  },
];

export const BUYER_CONFIDENCE = [
  {
    title: "1. Verifiable Opt-In Sourcing",
    tagline: "100% Consent-Driven Capture",
    desc: "Every record originates from an affirmative opt-in digital funnel—interactive surveys, promotional entry hubs, and targeted intent pages. We never use scraped, recycled, or unverified contact lists.",
  },
  {
    title: "2. Documented Proof of Consent",
    tagline: "TCPA & GDPR Aligned",
    desc: "Every delivered lead is accompanied by a complete digital audit trail: exact capture timestamp (ISO 8601), user IP address, landing page domain, and the specific terms of consent agreed to.",
  },
  {
    title: "3. Timestamped Freshness Guarantee",
    tagline: "Precise Delivery SLAs",
    desc: "Freshness is never left to interpretation. For First Hit and real-time tiers, leads are delivered within minutes of submission. For daily batches, records are delivered within 24 hours with timestamps intact.",
  },
  {
    title: "4. Multi-Stage Quality Screening",
    tagline: "Carrier & Syntax Validation",
    desc: "Before dispatch, data passes automated filters: email syntax verification, HLR phone line validation to eliminate dead numbers, and strict deduplication against your historical delivery log.",
  },
  {
    title: "5. 100% Replacement Warranty",
    tagline: "Zero-Risk Delivery Policy",
    desc: "If any lead in your delivered batch is disconnected, contains corrupted syntax, or was delivered to your team in a previous batch, notify us within 48 hours for immediate 1-to-1 replacement.",
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
