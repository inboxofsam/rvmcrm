export interface LocationDetail {
  slug: string
  name: string
  tagline: string
  badge: string
  regionType: "Domestic Metros" | "Industrial States & Belts" | "Global & International"
  description: string
  heroPreviewTitle: string
  heroPreviewSubtitle: string
  industrialHubs: {
    zone: string
    focus: string
  }[]
  regionalChallenges: {
    title: string
    desc: string
  }[]
  tailoredCapabilities: {
    title: string
    desc: string
    icon: string
  }[]
  localizedWorkflow: {
    step: string
    title: string
    desc: string
  }[]
  keyIndustries: {
    name: string
    desc: string
  }[]
  roiResults: {
    metric: string
    title: string
    desc: string
  }[]
  clientTestimonial: {
    quote: string
    author: string
    role: string
    company: string
    metricBadge: string
  }
  complianceInfo: {
    title: string
    desc: string
    taxStandards: string
    dataHosting: string
  }
  faqs: {
    q: string
    a: string
  }[]
}

export const locationsDetailData: Record<string, LocationDetail> = {
  india: {
    slug: "india",
    name: "India",
    tagline: "Nationwide Pan-India Operations, Multi-Branch GST & Multi-Lingual Field Forces",
    badge: "PAN-INDIA ENTERPRISE SUITE",
    regionType: "Domestic Metros",
    description:
      "The ultimate connected business management platform engineered for Indian enterprises. Unify sales reps across 28 states, automate GST e-invoicing and e-way bills, synchronize with Tally Prime in real time, and verify field technician visits with geofenced GPS tracking.",
    heroPreviewTitle: "Pan-India Multi-Branch Command Center",
    heroPreviewSubtitle: "National sales pipeline, state-wise GST compliance, pan-India field GPS tracking & Tally Prime sync.",
    industrialHubs: [
      { zone: "Delhi NCR & Northern Corridor", focus: "Automotive, Consumer Durables, Machinery & Corporate HQs" },
      { zone: "Mumbai-Pune-Gujarat Belt", focus: "Chemicals, Pharmaceuticals, Heavy Engineering & Financial Services" },
      { zone: "Bangalore-Chennai-Hyderabad Triangle", focus: "Electronics, Defense Aerospace, Automotive OEM & IT Services" },
      { zone: "Eastern Industrial Cluster (Kolkata-Durgapur)", focus: "Metals, Mining Machinery, Tea Exports & Heavy Fabrication" },
    ],
    regionalChallenges: [
      {
        title: "Multi-State Inter-Branch Coordination",
        desc: "Managing decentralized regional branch offices, depots, and field forces without a unified database causes data silos and lost opportunities.",
      },
      {
        title: "Manual Field Travel & Fake Conveyance",
        desc: "Sales executives traveling across Tier-1, Tier-2, and Tier-3 cities claim inflated manual travel vouchers, costing companies millions annually.",
      },
      {
        title: "Tally Double-Entry & GST Invoicing Delays",
        desc: "Sales teams and accounts departments operate in disconnected tools, creating GST calculation errors and delayed commercial receivables.",
      },
    ],
    tailoredCapabilities: [
      {
        title: "Pan-India GPS Shift Attendance & Route Logs",
        desc: "Field executives punch in from anywhere across India with precise GPS coordinates, auto-calculating vehicle conveyance rates.",
        icon: "Navigation",
      },
      {
        title: "Two-Way Tally Prime Real-Time Sync",
        desc: "Synchronize client ledgers, sales orders, GST tax invoices, and payment receipts directly with your central Tally Prime ERP.",
        icon: "Receipt",
      },
      {
        title: "B2B Marketplace Push (IndiaMART & TradeIndia)",
        desc: "Instantly capture and distribute buyer inquiries from IndiaMART, TradeIndia, and Justdial directly to designated regional sales reps.",
        icon: "Zap",
      },
      {
        title: "Multi-Location Inventory & Van Stock",
        desc: "Maintain real-time visibility over inventory stocked in central plants, regional CFAs, branch depots, and technician service vans.",
        icon: "Package",
      },
    ],
    localizedWorkflow: [
      {
        step: "01",
        title: "National Marketplace Ingestion",
        desc: "Inquiries from IndiaMART, TradeIndia, and Meta Ads auto-allocate to branch sales officers based on geographical pincodes.",
      },
      {
        step: "02",
        title: "Geofenced Client Visit & 90-Sec Quote",
        desc: "Sales officer marks GPS check-in at client factory; drafts formal GST quotation on mobile and sends via WhatsApp.",
      },
      {
        step: "03",
        title: "Dispatch Challan & Tally Push",
        desc: "Warehouse dispatches order with e-way bill; system pushes sales voucher into Tally Prime, alerting accounts for collection.",
      },
    ],
    keyIndustries: [
      { name: "Manufacturing & Heavy Machinery", desc: "Custom BOM quoting, equipment serial passports, and preventive maintenance AMC contracts." },
      { name: "Automotive & OEM Aftermarket", desc: "Distributor secondary sales, dealer territory mapping, and mobile van inventory billing." },
      { name: "Pharmaceuticals & Healthcare", desc: "MR clinic visit tracking, doctor detailing logs, and hospital biomedical AMC service tickets." },
      { name: "Chemicals & Process Industries", desc: "Batch tracking, automated Certificate of Analysis (COA) dispatch, and returnable container audits." },
    ],
    roiResults: [
      { metric: "65%", title: "Faster Proposal Turnaround", desc: "Automated GST CPQ engine generates multi-page proposals in 90 seconds." },
      { metric: "99.8%", title: "Field Visit Accuracy", desc: "Eliminate proxy attendance across all branches with geofenced GPS check-ins." },
      { metric: "35%", title: "Travel Expense Cut", desc: "GPS route verification eliminates inflated manual distance conveyance claims." },
    ],
    clientTestimonial: {
      quote: "RVM CRM connected our manufacturing plant in Haryana with our 14 regional sales branches across India. The live Tally integration and IndiaMART lead ingestion transformed our sales velocity.",
      author: "Rajeev Goel",
      role: "Managing Director",
      company: "Bharat Precision Machinery Ltd.",
      metricBadge: "Pan-India Deployment (240+ Users)",
    },
    complianceInfo: {
      title: "Indian Regulatory & Data Sovereignty Compliance",
      desc: "Fully compliant with Indian Goods and Services Tax (GST) laws, TRAI DLT communication regulations, and the Digital Personal Data Protection (DPDP) Act 2023.",
      taxStandards: "CGST, SGST, IGST, HSN/SAC Codes, E-Way Bill & E-Invoice Integration",
      dataHosting: "Tier-IV Indian Data Centers (Mumbai & Delhi NCR Cloud Clusters with AES-256 Encryption)",
    },
    faqs: [
      {
        q: "Does RVM CRM support multiple GST numbers for companies with branches in different Indian states?",
        a: "Yes. RVM CRM allows you to configure state-wise GSTIN numbers, billing addresses, and bank accounts for multi-state corporate entities.",
      },
      {
        q: "Can sales representatives use the mobile app in regional Indian languages?",
        a: "Yes. The mobile interface supports multi-lingual prompts, Hindi and regional language voice notes, and vernacular speech-to-text dictation.",
      },
      {
        q: "Where is our business data stored?",
        a: "All customer databases and files are hosted domestically in Tier-IV ISO 27001 data centers located within India, guaranteeing 100% data sovereignty.",
      },
    ],
  },

  jaipur: {
    slug: "jaipur",
    name: "Jaipur",
    tagline: "Sitapura, Vishwakarma & VKI Industrial Belts, Gems, Handicraft Exports & Machinery",
    badge: "RAJASTHAN INDUSTRIAL HUB",
    regionType: "Domestic Metros",
    description:
      "Built for Jaipur's dynamic industrial landscape. From Sitapura Industrial Area and Vishwakarma (VKI) machinery clusters to gemstone exporters, textile printing units, and marble processors—RVM CRM unifies international buyers, factory fabrication, and field installations.",
    heroPreviewTitle: "Jaipur & Rajasthan Industrial Operations Console",
    heroPreviewSubtitle: "Sitapura & VKI factory workflows, export documentation, stone & machinery serials & dealer networks.",
    industrialHubs: [
      { zone: "Sitapura Industrial Area & EPIP", focus: "Garment Exports, Gems & Jewellery, Electronics & Auto Components" },
      { zone: "Vishwakarma Industrial Area (VKI)", focus: "Heavy Engineering, Steel Fabrication, Transformer Manufacturing & Stone Processing" },
      { zone: "Mansarovar & Bagru RIICO Hub", focus: "Hand-Block Printing, Textile Processing & Chemical Auxiliaries" },
      { zone: "Ajmer Road & Mahindra World City SEZ", focus: "IT Services, Light Engineering, Packaging & Logistics Depots" },
    ],
    regionalChallenges: [
      {
        title: "Export & Domestic Multi-Currency Quoting",
        desc: "Jaipur exporters juggle foreign currency proposals (USD, EUR, GBP) alongside domestic GST quotations without unified margins.",
      },
      {
        title: "Scattered RIICO Industrial Belt Travel",
        desc: "Field sales teams cover wide distances between Sitapura, Bagru, and VKI, causing delays in meeting updates and unchecked fuel vouchers.",
      },
      {
        title: "Post-Installation Stone & Machine Service",
        desc: "Heavy marble saws, packaging machines, and stone polishing equipment require scheduled maintenance across Rajasthan mining belts.",
      },
    ],
    tailoredCapabilities: [
      {
        title: "Dual-Currency Quotation Engine (INR & Foreign)",
        desc: "Generate professional export proposals with Incoterms (FOB, CIF) or domestic GST invoices with state tax splits in 90 seconds.",
        icon: "Receipt",
      },
      {
        title: "RIICO Corridor GPS Check-Ins & Travel Claims",
        desc: "Validate field visits across Sitapura, VKI, and Bagru; app automatically computes two-wheeler and car travel allowance.",
        icon: "Navigation",
      },
      {
        title: "Mining & Machinery Asset Passports",
        desc: "Track machine serial numbers, cutter blade replacement schedules, and quarterly preventive maintenance (PPM) contracts.",
        icon: "Wrench",
      },
      {
        title: "Jaipur Lead Portal Integration",
        desc: "Ingest inquiries from TradeIndia, IndiaMART, and international exhibition stalls directly into regional sales queues.",
        icon: "Zap",
      },
    ],
    localizedWorkflow: [
      {
        step: "01",
        title: "Domestic & Export Inquiry Intake",
        desc: "Inquiries from overseas buyers or domestic dealers auto-assign to designated commercial managers in Jaipur HQ.",
      },
      {
        step: "02",
        title: "Factory Drawing & BOM Sign-Off",
        desc: "Engineers in VKI or Sitapura upload technical CAD drawings and approve custom production costings.",
      },
      {
        step: "03",
        title: "Dispatch Challan & Tally Ledger Sync",
        desc: "Goods dispatched with e-way bill; transaction synchronizes instantly with Jaipur corporate Tally Prime accounts.",
      },
    ],
    keyIndustries: [
      { name: "Heavy Machinery & Fabrication", desc: "Stone processing saws, transformers, agricultural equipment, and industrial valves." },
      { name: "Textiles & Hand-Block Exports", desc: "Foreign buyer order tracking, batch color dye recipes, and export shipping manifests." },
      { name: "Gems, Jewellery & Handicrafts", desc: "High-value serialized inventory tracking, exhibition lead capture, and secure invoicing." },
      { name: "Chemicals & Mineral Processing", desc: "Marble slurry, silica processing, industrial salts, and drum logistics." },
    ],
    roiResults: [
      { metric: "70%", title: "Faster Export Proposals", desc: "Generate multi-currency quotations with packaging specs in 2 minutes." },
      { metric: "+42%", title: "AMC Service Renewals", desc: "Automated reminders ensure stone cutting machinery AMC contracts never lapse." },
      { metric: "Zero", title: "Unverified Field Visits", desc: "GPS geofencing across RIICO industrial zones guarantees 100% meeting compliance." },
    ],
    clientTestimonial: {
      quote: "Managing our machinery fabrication unit in VKI Area and sales across Rajasthan was chaos with Excel. RVM CRM streamlined our quotations, dealer visits, and service ticketing completely.",
      author: "Harish Shekhawat",
      role: "Director of Operations",
      company: "Rajputana Heavy Tools & Fab, Jaipur",
      metricBadge: "VKI Industrial Zone, Jaipur",
    },
    complianceInfo: {
      title: "Rajasthan GST & RIICO Industrial Standards",
      desc: "Fully aligned with Rajasthan state GST mandates, E-Way Bill compliance for mining transport, and export document standards.",
      taxStandards: "Rajasthan SGST, CGST, IGST, E-Invoicing & Export Shipping Bill Records",
      dataHosting: "Encrypted Cloud Infrastructure with Hourly Off-Site Backups in India",
    },
    faqs: [
      {
        q: "Can we track sales executives traveling between Jaipur, Jodhpur, and Udaipur?",
        a: "Yes. RVM CRM tracks inter-city travel routes, logs meeting check-ins at client factories across Rajasthan, and auto-calculates highway tolls.",
      },
      {
        q: "Does the system support both export orders (USD/EUR) and domestic GST invoices?",
        a: "Yes. You can switch between domestic GST invoicing and foreign export documentation with custom currency exchange rate masters.",
      },
      {
        q: "Can we manage equipment installed in marble quarries in Makrana and Kishangarh?",
        a: "Yes. The AMC module tracks machine serial numbers, motor operating hours, and scheduled technician service visits in remote quarry sites.",
      },
    ],
  },

  bangalore: {
    slug: "bangalore",
    name: "Bangalore",
    tagline: "Peenya Industrial Cluster, Electronic City, Whitefield Tech & Aerospace Ecosystem",
    badge: "SILICON VALLEY OF INDIA",
    regionType: "Domestic Metros",
    description:
      "Powering Bangalore's cutting-edge electronic manufacturers, aerospace tier-suppliers, and fast-growing B2B tech enterprises. Navigate city-wide traffic with optimized field visit routes, integrate open RESTful APIs, manage complex IT/hardware AMCs, and scale effortlessly.",
    heroPreviewTitle: "Bangalore Tech & Precision Manufacturing Terminal",
    heroPreviewSubtitle: "Peenya manufacturing tracking, Whitefield & Electronic City sales, hardware AMCs & API pipelines.",
    industrialHubs: [
      { zone: "Peenya Industrial Area", focus: "Precision Machine Tools, CNC Machining, Hydraulics & Industrial Fabrication" },
      { zone: "Electronic City & Bommasandra", focus: "Electronics Manufacturing, Hardware IoT, Medical Devices & Automotive Parts" },
      { zone: "Whitefield & Outer Ring Road (ORR)", focus: "Enterprise Tech Solutions, B2B SaaS, Telecom Hardware & Corporate HQs" },
      { zone: "Aerospace Park Devanahalli", focus: "Defense Components, Aviation Avionics, Precision Sheet Metal & Tooling" },
    ],
    regionalChallenges: [
      {
        title: "Severe Urban Traffic Congestion",
        desc: "Sales reps spend 3+ hours stuck on Silk Board, Outer Ring Road, or Hebbal, causing missed client meetings and wasted fuel.",
      },
      {
        title: "High Employee Turnover",
        desc: "High mobility among technical sales staff means customer interaction history is lost unless strictly centralized in an enterprise CRM.",
      },
      {
        title: "Demanding 24/7 Tech Uptime SLAs",
        desc: "Data centers, semiconductor firms, and IT campuses demand rapid 2-hour response times for critical facility and hardware failures.",
      },
    ],
    tailoredCapabilities: [
      {
        title: "Traffic-Aware Route Planning & Nearby Customers",
        desc: "Sales reps filter client accounts by geographic proximity (e.g. Peenya cluster or Whitefield corridor) to avoid crisscrossing traffic.",
        icon: "Navigation",
      },
      {
        title: "Hardware Asset & Strict SLA Ticketing",
        desc: "Track server racks, UPS systems, and CNC machines with Severity-1 countdown timers and automatic manager escalations.",
        icon: "Timer",
      },
      {
        title: "Developer RESTful APIs & Webhooks",
        desc: "Plug RVM CRM directly into your proprietary ERP, custom web portals, and billing engines using authenticated JSON endpoints.",
        icon: "Zap",
      },
      {
        title: "Two-Way Tally Prime Synchronization",
        desc: "Maintain clean commercial billing with real-time voucher and ledger synchronization between sales teams and Bangalore accounts.",
        icon: "Receipt",
      },
    ],
    localizedWorkflow: [
      {
        step: "01",
        title: "Inquiry Ingestion & Technical Triage",
        desc: "Digital inquiries from Bangalore tech parks or Peenya industrial buyers auto-allocate to specialized solution engineers.",
      },
      {
        step: "02",
        title: "Proximity Field Meeting Check-In",
        desc: "Sales engineer conducts technical presentation; marks geofenced mobile check-in and logs client requirement specs.",
      },
      {
        step: "03",
        title: "SLA-Backed Installation & Handover",
        desc: "Equipment installed; client signs digital commissioning certificate on tablet; initializes enterprise AMC contract.",
      },
    ],
    keyIndustries: [
      { name: "Precision CNC & Aerospace Tooling", desc: "AS9100 quality compliance, custom engineering drawings, and defense subcontracts." },
      { name: "Electronics & IoT Hardware", desc: "Component serial tracking, PCB assembly batch logs, and rapid warranty repairs." },
      { name: "Biomedical & Diagnostic Devices", desc: "Hospital equipment calibration, ICU asset registers, and preventive maintenance." },
      { name: "B2B SaaS & Tech Equipment", desc: "Contract renewals, multi-year enterprise licenses, and dedicated customer success workflows." },
    ],
    roiResults: [
      { metric: "+35%", title: "More Client Visits / Week", desc: "Proximity route planning allows sales reps to conduct 4 meetings a day instead of 2." },
      { metric: "< 2 Hrs", title: "Emergency Service MTTR", desc: "Proximity technician dispatch meets stringent tech park hardware SLAs." },
      { metric: "100%", title: "Customer Context Retention", desc: "Zero pipeline disruption when sales engineers switch roles." },
    ],
    clientTestimonial: {
      quote: "In Bangalore, traffic was killing our sales team's productivity. With RVM CRM's Nearby Customers feature and geofenced check-in, our reps plan cluster visits in Peenya and Bommasandra with 40% less driving.",
      author: "Karthik Subramanian",
      role: "VP of Sales",
      company: "Apex Precision Instruments, Bangalore",
      metricBadge: "Peenya Industrial Area, Bangalore",
    },
    complianceInfo: {
      title: "Karnataka Commercial & Cyber Security Compliance",
      desc: "Compliant with Karnataka state commercial tax laws, Karnataka Shops & Commercial Establishments Act, and ISO 27001 data security standards.",
      taxStandards: "Karnataka SGST, CGST, IGST, E-Invoicing & Reverse Charge Mechanisms",
      dataHosting: "Tier-IV Indian Cloud Infrastructure with End-to-End TLS 1.3 Encryption",
    },
    faqs: [
      {
        q: "How does the 'Nearby Customers' feature help navigate Bangalore traffic?",
        a: "When a sales engineer finishes a meeting in Whitefield or Peenya, they can tap 'Nearby Customers' to see all client accounts within a 5 km radius.",
      },
      {
        q: "Can our development team integrate RVM CRM with our internal software?",
        a: "Yes. RVM CRM provides a comprehensive RESTful API and real-time outbound webhooks for bi-directional data exchange.",
      },
      {
        q: "Does RVM CRM support hardware warranty tracking for IT equipment and CNC machinery?",
        a: "Yes. You can manage asset serial numbers, warranty expiry dates, preventive service intervals, and spare part replacements.",
      },
    ],
  },

  "delhi-ncr": {
    slug: "delhi-ncr",
    name: "Delhi NCR",
    tagline: "Noida, Greater Noida, Okhla, Faridabad & Ghaziabad Cross-Border Commercial Engine",
    badge: "NATIONAL CAPITAL REGION HUB",
    regionType: "Domestic Metros",
    description:
      "Engineered for the multi-state commercial dynamism of Delhi NCR. Coordinate field sales and service across New Delhi, Noida (Sector 62, 63, 16B), Greater Noida, Okhla Industrial Area, and Faridabad manufacturing clusters with multi-state GST and seamless cross-border logistics.",
    heroPreviewTitle: "Delhi NCR Cross-Border Operations Console",
    heroPreviewSubtitle: "Multi-state GST (Delhi/UP/Haryana), Okhla & Noida factory tracking, transit e-way bills & field fleets.",
    industrialHubs: [
      { zone: "Noida & Greater Noida (Phase II & TechZone)", focus: "Electronics, IT Hardware, Automotive Ancillaries & Corporate HQs" },
      { zone: "Okhla Industrial Area (Phases I, II & III)", focus: "Garment Manufacturing, Printing & Packaging, Medical Devices & Light Engineering" },
      { zone: "Faridabad Industrial Corridor", focus: "Tractors, Heavy Fabrication, Sheet Metal, Switchgears & Hydraulic Machinery" },
      { zone: "Ghaziabad & Sahibabad Industrial Area", focus: "Steel Tubes, Industrial Chemical Formulations, Electroplating & Food Processing" },
    ],
    regionalChallenges: [
      {
        title: "Multi-State GST Billing (Delhi, UP, Haryana)",
        desc: "Supplying goods across state borders requires careful management of Delhi, Uttar Pradesh, and Haryana GSTINs to avoid tax discrepancies.",
      },
      {
        title: "Sprawling Cross-State Field Movement",
        desc: "Sales reps traveling between Okhla, Noida, and Faridabad need clear route tracking, inter-state toll verification, and attendance validation.",
      },
      {
        title: "Fierce Trading & Manufacturing Competition",
        desc: "Delhi NCR buyers demand instant quotations; delaying bids by even 2 hours leads to lost orders to regional competitors.",
      },
    ],
    tailoredCapabilities: [
      {
        title: "Multi-State GST Logic (Delhi, UP, Haryana)",
        desc: "Automatically calculate IGST vs. CGST/SGST based on customer billing location, generating compliant invoices with zero errors.",
        icon: "Receipt",
      },
      {
        title: "Inter-State Route Verification & Toll Audits",
        desc: "Track actual distance traversed across Delhi, Noida, and Faridabad; automatically verify toll booth receipts and parking vouchers.",
        icon: "Navigation",
      },
      {
        title: "90-Second Instant Quotation CPQ",
        desc: "Equip sales reps with mobile CPQ to draft, approve, and dispatch branded PDF quotations with GST calculations on-site.",
        icon: "Zap",
      },
      {
        title: "Two-Way Tally Prime Synchronization",
        desc: "Sync all commercial vouchers, ledger accounts, and outstanding payment records directly into central corporate Tally Prime.",
        icon: "Landmark",
      },
    ],
    localizedWorkflow: [
      {
        step: "01",
        title: "Lead Capture & Territory Assignment",
        desc: "Inquiries from Delhi, Noida, or Faridabad auto-route to designated regional territory managers.",
      },
      {
        step: "02",
        title: "Cross-Border Client Meeting & Quotation",
        desc: "Sales rep marks GPS check-in at client factory; drafts GST quote and dispatches via WhatsApp instantly.",
      },
      {
        step: "03",
        title: "Dispatch Challan & E-Way Bill Sync",
        desc: "Goods shipped with verified inter-state e-way bill; commercial invoice syncs directly with accounts.",
      },
    ],
    keyIndustries: [
      { name: "Heavy Machinery & Auto Parts (Faridabad)", desc: "Production stage-gates, machine serial passports, and industrial AMC contracts." },
      { name: "Packaging & Garment Manufacturing (Okhla)", desc: "Multi-item catalogue estimating, fabric batch tracking, and delivery challans." },
      { name: "Electronics & Tech Products (Noida)", desc: "Hardware serial tracking, 24/7 service desk ticketing, and distributor secondary sales." },
      { name: "Trading & Wholesale Distribution", desc: "B2B portal lead ingestion, credit limit enforcement, and rapid payment collections." },
    ],
    roiResults: [
      { metric: "90 Secs", title: "Quotation Drafting Speed", desc: "Sales reps issue formal GST proposals before leaving the client meeting." },
      { metric: "35%", title: "Cut in NCR Travel Expense Fraud", desc: "GPS route verification eliminates fabricated inter-state travel claims." },
      { metric: "100%", title: "GST & E-Way Bill Compliance", desc: "Zero tax code errors between Delhi, Uttar Pradesh, and Haryana dispatches." },
    ],
    clientTestimonial: {
      quote: "Our head office is in New Delhi and our manufacturing plant is in Greater Noida. RVM CRM unified our sales reps in Okhla, Faridabad, and Noida into one real-time dashboard. Our quote turnaround dropped from 2 days to 10 minutes.",
      author: "Vipin Agarwal",
      role: "Director of Business Development",
      company: "Nordic Engineering & Automation, Delhi NCR",
      metricBadge: "Delhi NCR Operations (180+ Users)",
    },
    complianceInfo: {
      title: "Delhi NCR Tri-State Tax & Regulatory Compliance",
      desc: "Seamless compliance with New Delhi, Uttar Pradesh, and Haryana state tax mandates, E-Invoicing portals, and inter-state E-Way Bill validation.",
      taxStandards: "Delhi/UP/Haryana SGST, CGST, IGST, E-Invoicing & E-Way Bill Automation",
      dataHosting: "Encrypted Indian Cloud Servers Located in Noida & Delhi Data Center Clusters",
    },
    faqs: [
      {
        q: "Can RVM CRM handle sales reps operating across Delhi, Noida, and Gurgaon with different tax rules?",
        a: "Yes. The system automatically detects client state codes and applies appropriate CGST/SGST (intra-state) or IGST (inter-state) tax rates.",
      },
      {
        q: "How does the mobile app track travel distance between Delhi, Noida, and Faridabad?",
        a: "The app calculates actual distance traversed between verified customer check-ins during working shift hours, auto-generating travel reimbursement claims.",
      },
      {
        q: "Where is RVM CRM's corporate office in Delhi NCR?",
        a: "Our corporate headquarters is located at 512, 17th Floor, Plot – C, Sector – 16B, Noida – 201301, Uttar Pradesh, with registered office in New Delhi.",
      },
    ],
  },

  chennai: {
    slug: "chennai",
    name: "Chennai",
    tagline: "Sriperumbudur, Oragadam, Guindy & Ambattur Automotive OEM & Port Logistics",
    badge: "AUTOMOTIVE & HARDWARE CAPITAL",
    regionType: "Domestic Metros",
    description:
      "Tailored for Chennai's automotive giants, electronics manufacturing corridors, and sea-freight logistics operators. Coordinate supplier networks across Sriperumbudur and Oragadam, track dealer secondary orders, manage port logistics e-PODs, and guarantee heavy machinery AMC uptime.",
    heroPreviewTitle: "Chennai Automotive OEM & Industrial Command Hub",
    heroPreviewSubtitle: "Sriperumbudur & Oragadam auto corridors, port logistics e-PODs, dealer networks & machinery AMCs.",
    industrialHubs: [
      { zone: "Sriperumbudur & Oragadam Corridor", focus: "Automotive OEMs, Tier-1 Auto Ancillaries, Heavy Vehicles & Electronics" },
      { zone: "Ambattur & Guindy Industrial Estates", focus: "Precision Machining, Textile Machinery, Tooling & Electroplating" },
      { zone: "Ennore & Chennai Port Logistics Hub", focus: "Container Freight Stations (CFS), Customs Clearance & Sea Logistics" },
      { zone: "OMR & Guindy Tech Corridor", focus: "Enterprise Software, Telecom Hardware & Engineering R&D Centers" },
    ],
    regionalChallenges: [
      {
        title: "Stringent Automotive Tier-1 Audits",
        desc: "Auto OEM tier-suppliers require strict lot traceability, calibration logs, and defect checklists to satisfy customer supplier audits.",
      },
      {
        title: "Extended Corridors Across Sriperumbudur",
        desc: "Industrial parks spread across 50+ kilometers make field engineer dispatch and client visit tracking difficult without live GPS.",
      },
      {
        title: "Port Logistics Documentation Bottlenecks",
        desc: "Container trucking and customs dispatch require immediate digital Proof of Delivery (e-POD) to release freight shipping bills.",
      },
    ],
    tailoredCapabilities: [
      {
        title: "Automotive Component Serial & Lot Tracking",
        desc: "Maintain complete traceability for automotive parts, linking component serials to casting lots and quality test certifications.",
        icon: "Car",
      },
      {
        title: "Sriperumbudur-Oragadam Field GPS Dispatch",
        desc: "Assign breakdown tickets and machinery commissioning tasks to field engineers stationed along the automotive industrial corridor.",
        icon: "Navigation",
      },
      {
        title: "Port Consignment e-POD & Logistics Billing",
        desc: "Capture consignee signatures, container seal numbers, and offloading photos on mobile; instantly release freight invoices.",
        icon: "Truck",
      },
      {
        title: "Two-Way Tally Prime Synchronization",
        desc: "Sync manufacturing bills, GST delivery challans, and customer payment collections with corporate Tally Prime accounts.",
        icon: "Receipt",
      },
    ],
    localizedWorkflow: [
      {
        step: "01",
        title: "RFQ Intake & Technical Specs",
        desc: "Component inquiry received from auto OEM; engineering attaches CAD drawings and approves margin thresholds.",
      },
      {
        step: "02",
        title: "Production Stage-Gate & Quality Check",
        desc: "Order fabricated; QC lab validates tensile and dimensional tolerances, generating digital inspection certificate.",
      },
      {
        step: "03",
        title: "Dispatch, e-POD & AMC Service",
        desc: "Goods shipped to assembly plant; digital delivery receipt captured on mobile; preventive maintenance scheduled.",
      },
    ],
    keyIndustries: [
      { name: "Automotive & Heavy Vehicles", desc: "OEM tier-1 supplier workflows, dealer warranty claim audits, and secondary sales." },
      { name: "Precision Machining & Tooling (Ambattur)", desc: "Custom machine shop estimates, tooling wear tracking, and client approvals." },
      { name: "Container Freight & Sea Logistics", desc: "Digital lorry receipts, container seal validation, and transporter freight ledgers." },
      { name: "Leather & Textile Processing", desc: "Export proposal CPQ, chemical batch formulations, and delivery tracking." },
    ],
    roiResults: [
      { metric: "100%", title: "Automotive Audit Compliance", desc: "Every component lot, calibration certificate, and test log is digitally indexed." },
      { metric: "12 Days", title: "Faster Logistics Billing", desc: "Digital mobile e-POD eliminates delays waiting for paper physical lorry receipts." },
      { metric: "+34%", title: "Preventive AMC Retention", desc: "Scheduled maintenance alerts keep industrial equipment running at peak efficiency." },
    ],
    clientTestimonial: {
      quote: "Operating out of Ambattur and supplying auto components to Sriperumbudur, we needed a CRM that understood manufacturing and field visits. RVM CRM gave us total control over orders, quotes, and engineer dispatches.",
      author: "M. Ramanathan",
      role: "Chief Operating Officer",
      company: "Coromandel Auto Components Pvt. Ltd., Chennai",
      metricBadge: "Ambattur Industrial Estate, Chennai",
    },
    complianceInfo: {
      title: "Tamil Nadu Commercial & Industrial Standards",
      desc: "Fully compliant with Tamil Nadu state GST regulations, port logistics e-way bill mandates, and industrial safety compliance standards.",
      taxStandards: "Tamil Nadu SGST, CGST, IGST, E-Invoicing & Export CFS Logistics Documentation",
      dataHosting: "High-Availability Indian Cloud Infrastructure with Multi-Region Failover",
    },
    faqs: [
      {
        q: "Can RVM CRM manage equipment warranties for automotive manufacturing lines?",
        a: "Yes. You can track machine serial numbers, preventive lubrication intervals, sensor calibration dates, and spare parts consumption.",
      },
      {
        q: "Does the mobile app support field engineers in areas around Sriperumbudur and Kanchipuram?",
        a: "Yes. The mobile app operates seamlessly in offline mode, auto-synchronizing job sheets and site photos when internet restores.",
      },
      {
        q: "Can logistics operators track container deliveries to Chennai Port and Ennore Port?",
        a: "Yes. Drivers can capture container seal numbers, delivery stamps, and receiver signatures on mobile, generating immediate digital e-PODs.",
      },
    ],
  },

  mumbai: {
    slug: "mumbai",
    name: "Mumbai",
    tagline: "BKC Financial HQs, Andheri Trading, Navi Mumbai Logistics & Thane Manufacturing",
    badge: "FINANCIAL & COMMERCIAL METROPOLIS",
    regionType: "Domestic Metros",
    description:
      "Engineered for Mumbai's fast-paced corporate boardrooms, high-volume trading distributors, and industrial manufacturing belts. Bridge corporate HQs in BKC and Lower Parel with fabrication hubs in Navi Mumbai and Thane, streamlining multi-tier commercial approvals and field sales mobility.",
    heroPreviewTitle: "Mumbai Corporate & Industrial Operations Center",
    heroPreviewSubtitle: "BKC executive reporting, Navi Mumbai & Thane manufacturing, port logistics & Tally sync.",
    industrialHubs: [
      { zone: "Bandra Kurla Complex (BKC) & Lower Parel", focus: "Corporate Headquarters, Financial Services, Private Equity & B2B Conglomerates" },
      { zone: "Andheri & MIDC Marol", focus: "Trading & Import/Export Agencies, FMCG Distribution & Commercial Services" },
      { zone: "Thane-Belapur & Navi Mumbai MIDC", focus: "Chemicals, Pharmaceuticals, Heavy Engineering, Data Centers & Precision Tools" },
      { zone: "JNPT & Nhava Sheva Freight Corridor", focus: "Container Freight Stations, Customs Warehousing & Intermodal Logistics" },
    ],
    regionalChallenges: [
      {
        title: "Massive Suburban Commute Distances",
        desc: "Sales reps traveling between South Mumbai, Western Suburbs, and Navi Mumbai lose hours in transit without optimized territory planning.",
      },
      {
        title: "Demanding Commercial Turnaround",
        desc: "Corporate procurement in BKC and Nariman Point expects immediate proposal turnarounds and transparent pricing approvals.",
      },
      {
        title: "High Office Real Estate Costs",
        desc: "Companies cannot afford bloated administrative back-offices; operations must be automated digitally on mobile and cloud.",
      },
    ],
    tailoredCapabilities: [
      {
        title: "Executive BI Dashboards & Board Reports",
        desc: "C-suite directors monitor live revenue pipelines, regional team productivity, and cash flow projections on desktop and mobile.",
        icon: "BarChart3",
      },
      {
        title: "Cluster Route Planning Across Mumbai",
        desc: "Sales executives organize visits by railway corridors and industrial hubs (e.g. Navi Mumbai cluster vs. Andheri cluster).",
        icon: "Navigation",
      },
      {
        title: "JNPT Logistics & Mobile e-POD Integration",
        desc: "Drivers and freight handlers capture digital signatures and container photos directly from Navi Mumbai freight terminals.",
        icon: "Truck",
      },
      {
        title: "Two-Way Tally Prime Synchronization",
        desc: "Synchronize approved sales orders, GST invoices, and debtor aging ledgers directly with Mumbai finance teams.",
        icon: "Landmark",
      },
    ],
    localizedWorkflow: [
      {
        step: "01",
        title: "Corporate Inquiry & Pre-Sales Qualify",
        desc: "Commercial inquiry ingested from B2B channels; pre-sales team in Mumbai qualifies requirement within 5 minutes.",
      },
      {
        step: "02",
        title: "On-Site Presentation & Margin CPQ",
        desc: "Executive conducts client presentation in BKC or Thane; generates formal GST quotation with approved gross margin.",
      },
      {
        step: "03",
        title: "Navi Mumbai Dispatch & Tally Sync",
        desc: "Goods shipped from warehouse; commercial invoice synchronizes with Tally; automated payment reminder scheduled.",
      },
    ],
    keyIndustries: [
      { name: "Chemicals & Petrochemicals (Thane-Belapur)", desc: "Batch test parameters, COA generation, and returnable barrel asset tracking." },
      { name: "Pharmaceuticals & Healthcare", desc: "Pharma formulation distribution, hospital medical equipment AMCs, and chemist orders." },
      { name: "Freight Forwarding & Shipping (JNPT)", desc: "Consignment tracking, mobile e-POD capture, and transporter freight reconciliation." },
      { name: "B2B Trading & Distribution (Andheri)", desc: "Fast-moving wholesale catalogues, credit limit enforcement, and instant UPI billing." },
    ],
    roiResults: [
      { metric: "60%", title: "Faster Proposal Approval", desc: "Mobile discount approval triggers allow directors to greenlight high-value deals in seconds." },
      { metric: "-35%", title: "Reduction in Days Sales Outstanding", desc: "Automated WhatsApp payment reminders speed up corporate invoice collections." },
      { metric: "100%", title: "Field Workforce Transparency", desc: "GPS geofenced check-in ensures complete visibility over suburban sales calls." },
    ],
    clientTestimonial: {
      quote: "Our corporate headquarters is in Andheri East and our chemical plant is in Navi Mumbai. RVM CRM gave our management real-time visibility over field sales, factory dispatches, and outstanding customer payments in one screen.",
      author: "Sanjay Doshi",
      role: "Executive Director",
      company: "Western India Chemical Synthetics, Mumbai",
      metricBadge: "Andheri & Navi Mumbai MIDC",
    },
    complianceInfo: {
      title: "Maharashtra Commercial & GST Compliance",
      desc: "Fully aligned with Maharashtra state GST mandates, JNPT port documentation standards, and Indian data protection guidelines.",
      taxStandards: "Maharashtra SGST, CGST, IGST, E-Invoicing & E-Way Bill Automation",
      dataHosting: "Tier-IV Data Center Facilities in Mumbai Cloud Zone with Full Redundancy",
    },
    faqs: [
      {
        q: "Can sales managers approve discounts on high-value corporate deals from their phones?",
        a: "Yes. When a sales rep drafts a quote requiring special commercial concessions, directors receive instant push notifications to approve or revise.",
      },
      {
        q: "How does the system help sales reps navigate Mumbai's suburban travel?",
        a: "The app features geographic customer mapping, allowing sales reps to plan meetings concentrated in specific areas (e.g. Thane, MIDC, or BKC).",
      },
      {
        q: "Does RVM CRM integrate with our existing Tally Prime accounting system?",
        a: "Yes. RVM CRM features a direct, lightweight XML connector that keeps client ledgers, tax invoices, and receipts synchronized in real time.",
      },
    ],
  },

  pune: {
    slug: "pune",
    name: "Pune",
    tagline: "Bhosari, Chakan & Talegaon Auto Hub, Hinjewadi Tech & Heavy Machinery",
    badge: "ENGINEERING & AUTOMATION EPICENTER",
    regionType: "Domestic Metros",
    description:
      "Purpose-built for Pune's powerhouse industrial ecosystems: Chakan automobile plants, Bhosari engineering MIDCs, Talegaon manufacturing zones, and Hinjewadi tech campuses. Unify custom engineering drawing approvals, stage-gated fabrication, and on-site machinery commissioning.",
    heroPreviewTitle: "Pune Engineering & Auto Manufacturing Hub",
    heroPreviewSubtitle: "Chakan & Bhosari plant fabrication, machine tool CPQ, on-site commissioning & Tally sync.",
    industrialHubs: [
      { zone: "Chakan Industrial Area (Phases I to IV)", focus: "Automobile Assembly Plants, Heavy Commercial Vehicles & Tier-1 Suppliers" },
      { zone: "Bhosari & Pimpri-Chinchwad MIDC", focus: "Precision Machine Tools, Sheet Metal Stamping, Hydraulics & Electrical Panels" },
      { zone: "Talegaon & Khed City SEZ", focus: "Heavy Engineering, Electronics Assembly, Packaging & Cold Storage Machinery" },
      { zone: "Hinjewadi & Kharadi Tech Parks", focus: "Engineering Design (CAD/CAM), Automation Software & Embedded Systems" },
    ],
    regionalChallenges: [
      {
        title: "Complex Auto Ancillary Part Specifications",
        desc: "Manufacturers deal with hundreds of precision tooling variants, demanding strict drawing version control and tolerance approvals.",
      },
      {
        title: "Extended Travel Between Pimpri & Chakan",
        desc: "Technicians and sales engineers traversing Pimpri, Bhosari, and Chakan need clear task allocation to prevent idle transit hours.",
      },
      {
        title: "Machine Tool Warranty & Maintenance Costs",
        desc: "Expensive CNC routers, laser cutters, and injection molds require scheduled preventive maintenance to avoid warranty disputes.",
      },
    ],
    tailoredCapabilities: [
      {
        title: "CAD Drawing Approvals & Custom BOM CPQ",
        desc: "Attach engineering drawings and customized BOM line items directly to customer quotation and production order records.",
        icon: "Cog",
      },
      {
        title: "Chakan-Bhosari Field GPS Dispatch",
        desc: "Dispatch breakdown service technicians to automotive assembly plants based on proximity and technical skill set.",
        icon: "Navigation",
      },
      {
        title: "Machine Tool Serial & Asset Passports",
        desc: "Track equipment serial numbers, preventive oil/filter intervals, sensor calibrations, and replacement spare parts.",
        icon: "Wrench",
      },
      {
        title: "Two-Way Tally Prime Synchronization",
        desc: "Synchronize factory delivery challans, GST invoices, and supplier ledgers directly with your central Tally Prime ERP.",
        icon: "Receipt",
      },
    ],
    localizedWorkflow: [
      {
        step: "01",
        title: "Technical RFQ & Drawing Sign-Off",
        desc: "Auto supplier inquiry ingested; Pune engineering team reviews CAD drawings and defines production tooling cost.",
      },
      {
        step: "02",
        title: "Stage-Gated Machining & Quality Test",
        desc: "Order machined in Bhosari or Chakan plant; QA team logs dimensional tolerances and generates inspection sheet.",
      },
      {
        step: "03",
        title: "Dispatch, Commissioning & AMC Setup",
        desc: "Tooling delivered to client plant; field engineer completes on-site commissioning and initializes AMC warranty passport.",
      },
    ],
    keyIndustries: [
      { name: "Automotive Ancillaries & Tooling", desc: "Tier-1 component production, stamping dies, and auto OEM supply schedules." },
      { name: "Industrial Machinery & Automation", desc: "Robotics, packaging machinery, CNC machine tools, and electrical switchgear panels." },
      { name: "Precision Hydraulics & Valves", desc: "Pressure testing certifications, batch traceability, and export documentation." },
      { name: "Engineering Design Services", desc: "Project milestone billings, client revision tracking, and technical consultant logging." },
    ],
    roiResults: [
      { metric: "65%", title: "Faster Tooling Estimates", desc: "Technical CPQ engine drafts multi-item engineering estimates in minutes." },
      { metric: "+40%", title: "Machine AMC Contract Renewals", desc: "Automated preventive service notices guarantee post-warranty revenue retention." },
      { metric: "Zero", title: "Unrecorded Engineering Revisions", desc: "Formal change order management prevents unbilled modifications from eroding margins." },
    ],
    clientTestimonial: {
      quote: "Our fabrication plant is in Bhosari and our automotive OEM clients are in Chakan. RVM CRM connected our shop-floor engineering with our commercial sales team. We know exact order fabrication status and technician locations in real time.",
      author: "Prakash Deshmukh",
      role: "Managing Director",
      company: "Deccan Precision Tools Pvt. Ltd., Pune",
      metricBadge: "Bhosari MIDC, Pune",
    },
    complianceInfo: {
      title: "Maharashtra Industrial & Environmental Standards",
      desc: "Fully aligned with Maharashtra MIDC industrial standards, state GST mandates, and ISO 9001/IATF 16949 automotive quality systems.",
      taxStandards: "Maharashtra SGST, CGST, IGST, E-Invoicing & E-Way Bill Integration",
      dataHosting: "Encrypted Cloud Data Architecture with 99.9% Uptime Commitment",
    },
    faqs: [
      {
        q: "Can RVM CRM track engineering drawing versions (v1, v2, v3) for automotive client approvals?",
        a: "Yes. You can upload CAD drawings, revise specifications, and preserve complete version histories with customer digital sign-offs.",
      },
      {
        q: "How does the system handle preventive maintenance for machine tools installed in client factories?",
        a: "The AMC module auto-generates periodic maintenance tickets (monthly, quarterly), assigning nearby technicians with spare parts lists.",
      },
      {
        q: "Can we track sales engineers visiting factories in Chakan, Bhosari, and Talegaon?",
        a: "Yes. Sales engineers mark GPS check-ins upon arrival at client plant gates, recording meeting minutes and auto-computing travel mileage.",
      },
    ],
  },

  indore: {
    slug: "indore",
    name: "Indore",
    tagline: "Pithampur Auto & Pharma Hub, Sanwer Road Industrial Area & Central India Logistics",
    badge: "COMMERCIAL CAPITAL OF MADHYA PRADESH",
    regionType: "Domestic Metros",
    description:
      "The dedicated operational platform for Central India's industrial engine: Pithampur's automotive and pharmaceutical giants, Sanwer Road engineering units, and Dewas chemical corridors. Bridge factory production, distributor secondary sales, and regional field teams seamlessly.",
    heroPreviewTitle: "Indore & Central India Industrial Hub Terminal",
    heroPreviewSubtitle: "Pithampur auto & pharma manufacturing, Sanwer Road engineering, FMCG distribution & Tally sync.",
    industrialHubs: [
      { zone: "Pithampur Industrial Area (Sectors 1 to 5 & SEZ)", focus: "Automobile Manufacturing, Pharmaceuticals, Engineering & Packaging" },
      { zone: "Sanwer Road Industrial Area", focus: "Steel Rerolling, Sheet Metal Fabrication, Plastic Molding & Food Processing" },
      { zone: "Dewas Industrial Belt", focus: "Industrial Chemical Formulations, Leather Goods, Agro-Processing & Textiles" },
      { zone: "Palda & Nemawar Road Logistics Hub", focus: "Central India Warehousing, FMCG Distribution & Agro-Commodities" },
    ],
    regionalChallenges: [
      {
        title: "Extended Travel Between Indore & Pithampur",
        desc: "Executives traveling daily between Indore city offices and Pithampur industrial plants lose hours without unified mobile coordination.",
      },
      {
        title: "Pharma Regulatory Compliance & Batch Tracking",
        desc: "Pharmaceutical formulations produced in Pithampur require strict batch expiry management and verified chemist distribution records.",
      },
      {
        title: "Distributor & Stockist Replenishment Lags",
        desc: "Supplying consumer goods across Madhya Pradesh, Rajasthan, and Gujarat requires automated secondary sales order booking.",
      },
    ],
    tailoredCapabilities: [
      {
        title: "Pithampur Corridor GPS Visit Verification",
        desc: "Field executives check in at client plant premises with verified GPS coordinates, auto-calculating highway travel conveyance.",
        icon: "Navigation",
      },
      {
        title: "Pharma Batch Tracking & Quality Logs",
        desc: "Maintain batch numbers, manufacturing dates, and Certificates of Analysis (COA) linked to customer dispatches.",
        icon: "FlaskConical",
      },
      {
        title: "Mobile Van Sales & Secondary Order Booking",
        desc: "Sales reps take retailer orders on mobile, checking stock availability, dealer credit limits, and promotional trade schemes.",
        icon: "ShoppingBag",
      },
      {
        title: "Two-Way Tally Prime Synchronization",
        desc: "Sync sales orders, delivery challans, and customer ledgers directly with your central Tally Prime accounts.",
        icon: "Receipt",
      },
    ],
    localizedWorkflow: [
      {
        step: "01",
        title: "Inquiry Ingestion & Pithampur Route",
        desc: "Inquiries from B2B portals auto-assign to Indore sales team; rep schedules plant visit along Pithampur highway.",
      },
      {
        step: "02",
        title: "On-Site Check-In & Instant Quote",
        desc: "Sales officer checks in at customer factory; drafts formal GST quotation on mobile with agreed pricing terms.",
      },
      {
        step: "03",
        title: "Sanwer Road Dispatch & Ledger Push",
        desc: "Warehouse dispatches order with digital challan; transaction updates inventory and pushes voucher to Tally Prime.",
      },
    ],
    keyIndustries: [
      { name: "Automotive & Heavy Vehicles (Pithampur)", desc: "OEM component supplier workflows, tooling maintenance, and factory dispatches." },
      { name: "Pharmaceuticals & Formulations", desc: "Batch records, COA generation, and chemist secondary distribution tracking." },
      { name: "Food Processing & Agro-Commodities", desc: "Soybean processing, flour milling machinery, and multi-depot stock monitoring." },
      { name: "Fabrication & Electrical Panels (Sanwer Road)", desc: "Custom sheet metal quotations, drawing approvals, and site installations." },
    ],
    roiResults: [
      { metric: "35%", title: "Reduction in Travel Expense Fraud", desc: "GPS route verification eliminates fabricated Indore-Pithampur travel claims." },
      { metric: "+28%", title: "Faster Retail Order Replenishment", desc: "Instant mobile order booking routes demand directly to regional stockists." },
      { metric: "100%", title: "Batch & Regulatory Traceability", desc: "End-to-end digital tracking satisfies stringent FDA and pharma audits." },
    ],
    clientTestimonial: {
      quote: "Operating between our head office in Indore and our auto components factory in Pithampur Sector 3, RVM CRM gave us complete control. Our sales reps visit 30% more clients every week and our Tally invoices match dispatch records 100%.",
      author: "Anurag Sharma",
      role: "Director of Operations",
      company: "Malwa Automotive & Engineering Ltd., Indore",
      metricBadge: "Pithampur Industrial Area, Indore",
    },
    complianceInfo: {
      title: "Madhya Pradesh Commercial & Industrial Standards",
      desc: "Fully aligned with Madhya Pradesh state commercial tax laws, MPIDC industrial guidelines, and national GST mandates.",
      taxStandards: "Madhya Pradesh SGST, CGST, IGST, E-Invoicing & E-Way Bill Integration",
      dataHosting: "Encrypted Indian Cloud Infrastructure with Multi-Layered Backups",
    },
    faqs: [
      {
        q: "Can sales officers book retailer orders across towns in Madhya Pradesh (Ujjain, Dewas, Bhopal)?",
        a: "Yes. The mobile app works in full offline mode: sales officers can capture orders, check dealer balances, and sync automatically once online.",
      },
      {
        q: "How does the system track field engineers traveling between Indore and Pithampur?",
        a: "The app logs actual distance traversed between verified customer visits, calculating vehicle conveyance based on your company's per-km allowance.",
      },
      {
        q: "Does RVM CRM support batch tracking for pharmaceutical and food processing companies?",
        a: "Yes. You can manage batch numbers, expiry dates, quality testing certificates, and lot traceability for every dispatch.",
      },
    ],
  },

  hyderabad: {
    slug: "hyderabad",
    name: "Hyderabad",
    tagline: "Genome Valley Pharma, Cherlapally Engineering, HITEC City Tech & Defense Aerospace",
    badge: "PHARMA & AEROSPACE CAPITAL",
    regionType: "Domestic Metros",
    description:
      "Designed for Hyderabad's world-class pharmaceutical manufacturing hubs, defense aerospace suppliers, and HITEC City technology leaders. Coordinate clinical equipment calibrations in Genome Valley, manage fabrication in Cherlapally, and maintain strict SLAs for enterprise tech clients.",
    heroPreviewTitle: "Hyderabad Pharma, Defense & Tech Operations Console",
    heroPreviewSubtitle: "Genome Valley batch compliance, Cherlapally engineering, defense aerospace & HITEC City IT AMCs.",
    industrialHubs: [
      { zone: "Genome Valley & Shamirpet Biotech Hub", focus: "Pharmaceutical Formulations, Vaccines, Clinical Research & Biotech Laboratories" },
      { zone: "Cherlapally & Jeedimetla Industrial Estates", focus: "Heavy Fabrication, Precision Machine Tools, Plastics & Industrial Chemicals" },
      { zone: "Aerospace & Defense Park (Adibatla)", focus: "Aviation Structures, Defense Avionics, Missiles Ancillaries & Precision CNC" },
      { zone: "HITEC City & Gachibowli Cyber Corridor", focus: "Enterprise Software, Cloud Infrastructure, Medical Technology & Corporate HQs" },
    ],
    regionalChallenges: [
      {
        title: "Stringent US-FDA & WHO-GMP Standards",
        desc: "Pharma and biotech manufacturers face severe regulatory penalties if batch tracking, temperature records, or calibration logs are incomplete.",
      },
      {
        title: "Extended Travel Across Cyberabad & Industrial Belts",
        desc: "Sales and service personnel traveling between Cherlapally, Shamirpet, and HITEC City waste hours without geographic route grouping.",
      },
      {
        title: "High-Precision Defense Delivery Deadlines",
        desc: "Aerospace subcontractors face steep liquidated damages if component inspection sign-offs or delivery milestones slip.",
      },
    ],
    tailoredCapabilities: [
      {
        title: "Pharma Batch Master & Automated COA Dispatch",
        desc: "Link laboratory test readings to chemical batches; auto-deliver verified Certificate of Analysis PDFs to clients via WhatsApp.",
        icon: "FlaskConical",
      },
      {
        title: "Biomedical & High-Precision Calibration Records",
        desc: "Field service engineers record machine calibration tolerances and generate formal calibration certificates on mobile tablets.",
        icon: "HeartPulse",
      },
      {
        title: "Cluster Route Planning Across Cyberabad",
        desc: "Sales reps group client meetings by industrial zone (Cherlapally cluster vs. Gachibowli cluster) to minimize commute delays.",
        icon: "Navigation",
      },
      {
        title: "Two-Way Tally Prime Synchronization",
        desc: "Sync all sales orders, delivery challans, and customer ledgers directly with your central corporate Tally Prime ERP.",
        icon: "Receipt",
      },
    ],
    localizedWorkflow: [
      {
        step: "01",
        title: "Inquiry Intake & Technical Vetting",
        desc: "Inquiry from pharma plant or defense contractor received; technical team in Hyderabad reviews specs and approves margin.",
      },
      {
        step: "02",
        title: "Fabrication & Quality Inspection (QA)",
        desc: "Order produced in Cherlapally or Jeedimetla; QA attaches dimensional and chemical test certifications.",
      },
      {
        step: "03",
        title: "Dispatch, Sign-Off & AMC Setup",
        desc: "Goods delivered; client signs digital inspection report on tablet; system initializes preventive maintenance AMC passport.",
      },
    ],
    keyIndustries: [
      { name: "Pharmaceuticals & Biotech (Genome Valley)", desc: "Batch traceability, clinical equipment maintenance, and wholesale distribution." },
      { name: "Aerospace & Defense (Adibatla)", desc: "Precision tooling CPQ, milestone delivery tracking, and defense inspection sign-offs." },
      { name: "Heavy Engineering (Cherlapally)", desc: "Custom machine shop estimates, steel fabrication orders, and plant AMC contracts." },
      { name: "Medical Devices & IT Hardware", desc: "Hospital equipment service ticketing, 24/7 SLA escalations, and hardware AMC renewals." },
    ],
    roiResults: [
      { metric: "100%", title: "Pharma & FDA Audit Readiness", desc: "Complete digital batch histories, COA documents, and calibration certificates." },
      { metric: "65%", title: "Faster Technical Proposals", desc: "Automated CPQ engine drafts multi-item engineering bids in 90 seconds." },
      { metric: "+38%", title: "Preventive AMC Retention", desc: "Automated reminders ensure clinical and industrial machinery contracts never expire." },
    ],
    clientTestimonial: {
      quote: "Supplying precision engineering components to defense and pharma clients across Hyderabad, we needed complete traceability. RVM CRM unified our drawing approvals in Cherlapally with client accounts in HITEC City.",
      author: "Venkata Rao",
      role: "Director of Technical Operations",
      company: "Deccan Advanced Technologies Pvt. Ltd., Hyderabad",
      metricBadge: "Cherlapally Industrial Estate, Hyderabad",
    },
    complianceInfo: {
      title: "Telangana Commercial & Regulatory Standards",
      desc: "Fully aligned with Telangana state GST regulations, TSIIC industrial guidelines, and national defense procurement standards.",
      taxStandards: "Telangana SGST, CGST, IGST, E-Invoicing & E-Way Bill Integration",
      dataHosting: "High-Availability Indian Cloud Infrastructure with AES-256 Encryption",
    },
    faqs: [
      {
        q: "Can RVM CRM manage equipment calibration certificates for pharmaceutical laboratories?",
        a: "Yes. Engineers can input calibration test readings, attach inspection photos, and generate branded PDF calibration certificates on-site.",
      },
      {
        q: "How does the system help sales engineers manage travel between HITEC City and Cherlapally?",
        a: "The app features geographic customer mapping, enabling reps to schedule clustered client visits in specific industrial zones.",
      },
      {
        q: "Does RVM CRM support defense aerospace subcontract documentation?",
        a: "Yes. You can manage project milestones, third-party inspection sign-offs, and custom CAD drawings with full version histories.",
      },
    ],
  },

  gujarat: {
    slug: "gujarat",
    name: "Gujarat",
    tagline: "Ahmedabad, Sanand, Surat, Vapi, Ankleshwar & Vadodara Industrial Golden Corridor",
    badge: "INDIA'S MANUFACTURING POWERHOUSE",
    regionType: "Industrial States & Belts",
    description:
      "Purpose-built for Gujarat's industrial powerhouse: Sanand automobile plants, Surat textile and diamond hubs, Ankleshwar and Vapi chemical estates, and Vadodara engineering clusters. Manage multi-city dealer networks, batch chemical compliance, and heavy machinery AMC services.",
    heroPreviewTitle: "Gujarat Industrial Golden Corridor Console",
    heroPreviewSubtitle: "Sanand auto, Vapi & Ankleshwar chemicals, Surat textiles & Vadodara engineering.",
    industrialHubs: [
      { zone: "Sanand & Changodar Industrial Hub", focus: "Automobile Assembly Plants, Heavy Machinery & Fast-Moving Consumer Goods" },
      { zone: "Vapi & Ankleshwar Chemical Estate", focus: "Specialty Chemicals, Dyes & Pigments, Active Pharmaceutical Ingredients (API)" },
      { zone: "Surat Diamond & Textile Belt", focus: "Synthetic Textiles, Diamond Processing, Loom Machinery & Garment Exports" },
      { zone: "Vadodara & Savli Engineering Cluster", focus: "Power Transformers, Electrical Switchgear, Pumps & Heat Exchangers" },
    ],
    regionalChallenges: [
      {
        title: "Managing Extended Multi-City Belts",
        desc: "Operations spread across Ahmedabad, Vadodara, Surat, and Vapi require centralized tracking of regional sales reps and distributors.",
      },
      {
        title: "Chemical Drum & Hazardous Material Tracking",
        desc: "Chemical and solvent producers in Ankleshwar and Vapi lose track of returnable IBC drums and safety compliance certificates.",
      },
      {
        title: "Fast-Paced Commercial Bargaining",
        desc: "Gujarat's commercial markets move rapidly; delayed quotations or slow discount approvals lead directly to lost deals.",
      },
    ],
    tailoredCapabilities: [
      {
        title: "Multi-City Golden Corridor GPS Tracking",
        desc: "Verify client site visits across Sanand, Vadodara, and Vapi; auto-calculate highway vehicle travel allowances.",
        icon: "Navigation",
      },
      {
        title: "Chemical Batch Tracking & Returnable Drum Ledgers",
        desc: "Track chemical test batches, auto-dispatch COA PDFs via WhatsApp, and manage returnable IBC drum deposits.",
        icon: "FlaskConical",
      },
      {
        title: "Instant Mobile Quotation CPQ with Margin Locks",
        desc: "Sales reps issue formal GST proposals on mobile in 90 seconds, with automated gross margin thresholds.",
        icon: "Receipt",
      },
      {
        title: "Two-Way Tally Prime Synchronization",
        desc: "Sync sales orders, delivery challans, and customer ledgers directly with your central Tally Prime ERP.",
        icon: "Landmark",
      },
    ],
    localizedWorkflow: [
      {
        step: "01",
        title: "Inquiry Capture & Corridor Allocation",
        desc: "Inquiries from B2B portals auto-assign to sales officers based on regional GIDC industrial estates.",
      },
      {
        step: "02",
        title: "Factory Visit & Instant Proposal",
        desc: "Officer checks in at client plant; drafts formal GST quotation on mobile with approved commercial terms.",
      },
      {
        step: "03",
        title: "GIDC Dispatch & Tally Integration",
        desc: "Goods shipped with digital e-way bill; inventory updates live; commercial invoice syncs with Tally Prime.",
      },
    ],
    keyIndustries: [
      { name: "Specialty Chemicals & Dyes (Vapi/Ankleshwar)", desc: "Batch test parameters, automated COA generation, and returnable container audits." },
      { name: "Electrical Equipment & Power (Vadodara)", desc: "Transformer specifications, custom BOM quotations, and utility tender tracking." },
      { name: "Textiles & Loom Machinery (Surat)", desc: "Weaving machine AMC contracts, spare parts inventory, and dealer order booking." },
      { name: "Automotive & Heavy Engineering (Sanand)", desc: "OEM tier-1 supplier workflows, production stage-gates, and delivery challans." },
    ],
    roiResults: [
      { metric: "65%", title: "Faster Proposal Turnaround", desc: "Issue branded GST quotations before competitors can draft spreadsheets." },
      { metric: "+45%", title: "Returnable Container Recovery", desc: "Barcode tracking of IBC totes and chemical drums eliminates lost container costs." },
      { metric: "100%", title: "GIDC Field Visit Verification", desc: "GPS geofencing ensures sales teams maintain regular touchpoints across Gujarat." },
    ],
    clientTestimonial: {
      quote: "Our chemical plant is in Ankleshwar GIDC and our sales office is in Ahmedabad. RVM CRM completely connected our sales pipeline with our factory dispatches. We recover 100% of our returnable chemical drums now.",
      author: "Hiren Patel",
      role: "Managing Director",
      company: "Gujarat Polymer Formulations Ltd., Ahmedabad",
      metricBadge: "Ankleshwar & Ahmedabad, Gujarat",
    },
    complianceInfo: {
      title: "Gujarat GIDC & Commercial Tax Standards",
      desc: "Fully aligned with Gujarat state GST mandates, GIDC industrial estate guidelines, and GPCB environmental transport standards.",
      taxStandards: "Gujarat SGST, CGST, IGST, E-Invoicing & Hazardous Chemical Manifests",
      dataHosting: "Encrypted Indian Cloud Servers with Automated Multi-Zone Backups",
    },
    faqs: [
      {
        q: "Can sales managers track reps traveling between Ahmedabad, Vadodara, and Surat?",
        a: "Yes. The app logs actual distance traversed between verified customer check-ins along the Golden Corridor, auto-calculating travel allowances.",
      },
      {
        q: "Does RVM CRM support chemical batch tracking and Certificate of Analysis (COA) generation?",
        a: "Yes. You can attach purity and viscosity test parameters to batches; the system auto-generates verified COA PDFs for customer delivery.",
      },
      {
        q: "Can we manage equipment installed across different GIDC industrial estates?",
        a: "Yes. The AMC module tracks machine serial numbers, warranty terms, and scheduled technician service visits across all GIDC locations.",
      },
    ],
  },

  kolkata: {
    slug: "kolkata",
    name: "Kolkata",
    tagline: "Howrah Engineering, Taratala, Durgapur Steel Corridor & Tea Export Logistics",
    badge: "EASTERN COMMERCIAL & INDUSTRIAL HUB",
    regionType: "Domestic Metros",
    description:
      "The dedicated operational management platform for Eastern India. Powering Howrah's foundry and engineering hubs, Taratala manufacturing, Durgapur steel fabrication, and Kolkata port tea and jute exports with robust lead tracking, field visit verification, and Tally Prime sync.",
    heroPreviewTitle: "Eastern India Industrial & Trade Hub Terminal",
    heroPreviewSubtitle: "Howrah foundry & engineering, Durgapur steel tracking, port logistics & tea export CPQ.",
    industrialHubs: [
      { zone: "Howrah & Jalan Industrial Complex", focus: "Foundries, Heavy Metal Castings, Fasteners, Wire Ropes & Rail Ancillaries" },
      { zone: "Taratala & Hyde Road Industrial Area", focus: "Pharmaceuticals, Paints & Varnishes, Food Processing & Packaging" },
      { zone: "Durgapur-Asansol Steel Corridor", focus: "Steel Rerolling, Sponge Iron, Coal Mining Machinery & Heavy Fabrications" },
      { zone: "Kolkata Port & Haldia Logistics Belt", focus: "Tea Exports, Jute Goods, Container Freight Stations & Chemical Storage" },
    ],
    regionalChallenges: [
      {
        title: "Delayed Paper-Based Field Workflows",
        desc: "Many industrial suppliers in Howrah and Eastern India still rely on manual registers and physical bills, delaying reporting by weeks.",
      },
      {
        title: "Extended Travel Across River & Congestion",
        desc: "Commuting across the Hooghly River between Kolkata and Howrah creates severe transit delays without optimized route planning.",
      },
      {
        title: "Heavy Foundry & Mining Machinery Servicing",
        desc: "Crushers, foundries, and mining equipment require rugged on-site maintenance tracking and replacement spare part auditing.",
      },
    ],
    tailoredCapabilities: [
      {
        title: "Mobile GPS Shift & Plant Visit Check-In",
        desc: "Field executives verify client visits across Howrah, Taratala, and Durgapur, auto-calculating travel conveyance claims.",
        icon: "Navigation",
      },
      {
        title: "Foundry & Metal Casting CPQ with Weight Logic",
        desc: "Calculate component quotes based on metal casting weight (per-kg rate), machining charges, and heat-treatment specifications.",
        icon: "Factory",
      },
      {
        title: "Mining Machinery Asset Passports & AMC",
        desc: "Track heavy machinery serial numbers, hydraulic oil change schedules, and replacement liner wear on client mining sites.",
        icon: "Wrench",
      },
      {
        title: "Two-Way Tally Prime Synchronization",
        desc: "Sync sales orders, delivery challans, and customer ledgers directly with your central Tally Prime accounts.",
        icon: "Receipt",
      },
    ],
    localizedWorkflow: [
      {
        step: "01",
        title: "Inquiry Ingestion & Weight Estimating",
        desc: "Inquiry from rail ancillary or mining client received; sales engineer calculates per-kg casting cost and margin.",
      },
      {
        step: "02",
        title: "Foundry Pour & Quality Certification",
        desc: "Casting fabricated in Howrah; metallurgical lab attaches ultrasonic and chemical test reports.",
      },
      {
        step: "03",
        title: "Dispatch, e-Way Bill & Tally Push",
        desc: "Goods shipped with verified e-way bill; digital delivery receipt captured; transaction pushes to Tally Prime.",
      },
    ],
    keyIndustries: [
      { name: "Foundries & Heavy Metal Castings (Howrah)", desc: "Per-kg weight pricing, metallurgical test certs, and railway supply tracking." },
      { name: "Steel & Mining Machinery (Durgapur)", desc: "Crusher serial tracking, hydraulic replacement spares, and on-site AMC visits." },
      { name: "Tea & Agricultural Exports", desc: "Blend auction tracking, export currency proposals, and shipping container manifests." },
      { name: "Paints & Specialty Chemicals (Taratala)", desc: "Batch formulation records, automated COA dispatch, and dealer order booking." },
    ],
    roiResults: [
      { metric: "70%", title: "Reduction in Paper Delays", desc: "Replace physical registers with instant mobile quotations and digital delivery receipts." },
      { metric: "100%", title: "Field Visit Verification", desc: "GPS geofencing across Howrah and Kolkata ensures complete sales rep accountability." },
      { metric: "+35%", title: "Post-Sales Spare Retention", desc: "Scheduled maintenance alerts prevent customers from turning to unbranded spare parts." },
    ],
    clientTestimonial: {
      quote: "Our foundry in Howrah supplies railway and mining equipment across India. RVM CRM modernized our operations from quotation drafting to factory dispatch. Our sales reps quote deals in 10 minutes instead of 2 days.",
      author: "Debabrata Mukherjee",
      role: "Managing Director",
      company: "Howrah Alloy & Engineering Castings Ltd.",
      metricBadge: "Howrah Industrial Belt, West Bengal",
    },
    complianceInfo: {
      title: "West Bengal Commercial & Industrial Standards",
      desc: "Fully compliant with West Bengal state GST regulations, Kolkata Port Trust documentation, and national E-Invoicing standards.",
      taxStandards: "West Bengal SGST, CGST, IGST, E-Invoicing & E-Way Bill Integration",
      dataHosting: "Encrypted Indian Cloud Infrastructure with Full Redundancy",
    },
    faqs: [
      {
        q: "Does RVM CRM support per-kg weight-based pricing for foundries and steel rerollers?",
        a: "Yes. The quotation module can compute prices based on net casting weight, alloy grade surcharges, and machining operations.",
      },
      {
        q: "Can field service technicians use the app in remote mining areas in West Bengal and Jharkhand?",
        a: "Yes. The mobile app works in full offline mode: technicians log inspection checklists and spare part replacements, syncing when connected.",
      },
      {
        q: "Does RVM CRM integrate with Tally Prime for West Bengal GST billing?",
        a: "Yes. The direct XML connector syncs sales orders, delivery challans, and customer ledgers seamlessly with Tally Prime.",
      },
    ],
  },

  gurugram: {
    slug: "gurugram",
    name: "Gurugram",
    tagline: "Cyber City Corporate HQs, Udyog Vihar & IMT Manesar Automotive Corridor",
    badge: "MILLENNIUM CITY B2B ENGINE",
    regionType: "Domestic Metros",
    description:
      "The premier business management platform for Gurugram's Fortune 500 corporate towers, fast-growing B2B technology enterprises, and IMT Manesar automotive powerhouses. Streamline multi-tier sales approvals, optimize highway field visits, and coordinate high-value corporate contracts.",
    heroPreviewTitle: "Gurugram Corporate & IMT Manesar Operations Hub",
    heroPreviewSubtitle: "Cyber City corporate sales, IMT Manesar auto fabrication, executive BI & Tally sync.",
    industrialHubs: [
      { zone: "Cyber City & Golf Course Road", focus: "Corporate Headquarters, Enterprise Technology, Private Equity & Management Consulting" },
      { zone: "Udyog Vihar (Phases I to V)", focus: "Apparel Exports, Light Engineering, Software Development & B2B Trading" },
      { zone: "IMT Manesar Industrial Belt", focus: "Automobile Manufacturing, Heavy Fabrication, Packaging & Precision Electronics" },
      { zone: "Sohna Road & Southern Peripheral Road (SPR)", focus: "Commercial Real Estate, Warehousing Depots & Logistics Parks" },
    ],
    regionalChallenges: [
      {
        title: "Extended Travel Between Cyber City & Manesar",
        desc: "Executives traveling along the NH-48 corridor between DLF Cyber City and IMT Manesar lose productive hours in heavy traffic.",
      },
      {
        title: "Demanding Corporate Enterprise SLAs",
        desc: "Corporate clients in Cyber City demand rapid turnaround on proposals, contract revisions, and 24/7 service desk escalations.",
      },
      {
        title: "Automotive Ancillary Audit Stringency",
        desc: "Suppliers in IMT Manesar require complete lot traceability, calibration logs, and defect checklists for OEM customer audits.",
      },
    ],
    tailoredCapabilities: [
      {
        title: "NH-48 Corridor GPS Route Verification",
        desc: "Track sales rep and field engineer travel between Gurgaon and IMT Manesar; auto-calculate vehicle conveyance and toll claims.",
        icon: "Navigation",
      },
      {
        title: "Enterprise CPQ with Multi-Tier Approvals",
        desc: "Issue multi-million corporate proposals in minutes, enforcing discount caps and automated executive director sign-offs.",
        icon: "Receipt",
      },
      {
        title: "Automotive OEM Component Traceability",
        desc: "Link component serial numbers to casting lots and quality test certificates for automotive clients in IMT Manesar.",
        icon: "Car",
      },
      {
        title: "Two-Way Tally Prime Synchronization",
        desc: "Sync all approved sales vouchers, GST tax invoices, and customer payment records directly with central corporate Tally accounts.",
        icon: "Landmark",
      },
    ],
    localizedWorkflow: [
      {
        step: "01",
        title: "Corporate Lead Capture & Triage",
        desc: "Enterprise inquiries from digital campaigns auto-assign to designated corporate relationship managers in Cyber City.",
      },
      {
        step: "02",
        title: "On-Site IMT Manesar Meeting & Quote",
        desc: "Sales engineer marks GPS check-in at client factory; drafts formal GST proposal on mobile with approved gross margin.",
      },
      {
        step: "03",
        title: "Factory Dispatch & Tally Integration",
        desc: "Goods shipped with verified e-way bill; commercial invoice syncs with Tally; automated payment reminder scheduled.",
      },
    ],
    keyIndustries: [
      { name: "Automotive Ancillaries & Tooling (IMT Manesar)", desc: "Production stage-gates, machine serial passports, and industrial AMC contracts." },
      { name: "Enterprise Technology & SaaS", desc: "Contract renewals, multi-year software licenses, and dedicated customer success workflows." },
      { name: "Apparel & Light Manufacturing (Udyog Vihar)", desc: "Export proposal CPQ, fabric batch tracking, and delivery challans." },
      { name: "Commercial Real Estate & Coworking", desc: "Portal lead distribution, site tour booking, and channel partner commission portals." },
    ],
    roiResults: [
      { metric: "90 Secs", title: "Quotation Drafting Speed", desc: "Sales reps issue formal GST proposals before leaving the client meeting." },
      { metric: "35%", title: "Cut in NH-48 Travel Claims Fraud", desc: "GPS route verification eliminates fabricated inter-city travel claims." },
      { metric: "100%", title: "Corporate Audit Compliance", desc: "Every component lot, calibration certificate, and test log is digitally indexed." },
    ],
    clientTestimonial: {
      quote: "Our head office is in Cyber City and our manufacturing plant is in IMT Manesar. RVM CRM completely unified our corporate sales pipeline with our factory dispatches. Our quote turnaround dropped from 2 days to 15 minutes.",
      author: "Vikramaditya Rao",
      role: "Vice President of Commercial Sales",
      company: "Sterling Automotive Technologies, Gurugram",
      metricBadge: "Cyber City & IMT Manesar, Gurugram",
    },
    complianceInfo: {
      title: "Haryana Commercial & Industrial Standards",
      desc: "Fully aligned with Haryana state GST mandates, HSIIDC industrial guidelines, and national data privacy standards.",
      taxStandards: "Haryana SGST, CGST, IGST, E-Invoicing & E-Way Bill Integration",
      dataHosting: "Tier-IV Indian Cloud Infrastructure with End-to-End Encryption",
    },
    faqs: [
      {
        q: "Can sales managers approve discounts on high-value corporate deals from their phones?",
        a: "Yes. When a sales rep drafts a quote requiring special commercial concessions, directors receive instant push notifications to approve or revise.",
      },
      {
        q: "How does the mobile app track travel distance between Cyber City, Udyog Vihar, and IMT Manesar?",
        a: "The app calculates actual distance traversed between verified customer check-ins during working shift hours, auto-generating travel reimbursement claims.",
      },
      {
        q: "Can we track equipment warranties for machinery installed in factories in Manesar?",
        a: "Yes. You can manage asset serial numbers, warranty expiry dates, preventive service intervals, and spare part replacements.",
      },
    ],
  },

  chandigarh: {
    slug: "chandigarh",
    name: "Chandigarh",
    tagline: "Tricity Hub: Mohali IT & Pharma, Panchkula Light Engineering & Baddi Pharma Gateway",
    badge: "TRICITY & PUNJAB REGIONAL CAPITAL",
    regionType: "Domestic Metros",
    description:
      "Tailored for the Chandigarh Tricity commercial ecosystem (Chandigarh, Mohali, Panchkula) and serving as the primary commercial command center for Baddi pharmaceutical plants and Punjab agro-machinery suppliers. Unify multi-territory field staff, dealer orders, and Tally accounting.",
    heroPreviewTitle: "Tricity Regional Commercial & Industrial Console",
    heroPreviewSubtitle: "Mohali IT & pharma, Panchkula engineering, Baddi gateway tracking & Tricity field mobility.",
    industrialHubs: [
      { zone: "Mohali Industrial Area (Phases VII, VIII & VIII-B)", focus: "Pharmaceuticals, Biotechnology, Electronics Assembly & IT Parks" },
      { zone: "Panchkula Industrial Area (Phases I & II)", focus: "Precision Engineering, Electrical Cables, Automotive Components & Food Processing" },
      { zone: "Chandigarh Industrial Area (Phases I & II)", focus: "Commercial Printing, Light Fabrication, Machine Tool Showrooms & Trading" },
      { zone: "Baddi-Barotiwala-Nalagarh Gateway", focus: "Central India's Largest Pharmaceutical Formulation & Packaging Manufacturing Zone" },
    ],
    regionalChallenges: [
      {
        title: "Tricity Cross-Border Transit (PB, HR, UT)",
        desc: "Sales reps operating across Chandigarh UT, Mohali (Punjab), and Panchkula (Haryana) face multi-state GST and travel coordination challenges.",
      },
      {
        title: "Remote Baddi Industrial Plant Servicing",
        desc: "Field service engineers traveling to Baddi pharmaceutical plants require offline mobile job sheets and digital calibration certificates.",
      },
      {
        title: "Dealer & Stockist Replenishment Delays",
        desc: "Supplying agro-equipment and consumer goods across Punjab and Haryana requires automated mobile order booking.",
      },
    ],
    tailoredCapabilities: [
      {
        title: "Tricity Cross-Border Route Tracking",
        desc: "Track sales rep visits across Chandigarh, Mohali, and Panchkula; auto-calculate vehicle conveyance without manual paperwork.",
        icon: "Navigation",
      },
      {
        title: "Baddi Pharma Offline Calibration & AMC",
        desc: "Technicians log machine calibration readings and spare replacements on mobile in low-connectivity plant basements.",
        icon: "Wrench",
      },
      {
        title: "Mobile Dealer & Retail Order Booking",
        desc: "Sales reps take stockist replenishment orders on mobile, checking credit limits and promotional schemes.",
        icon: "ShoppingBag",
      },
      {
        title: "Two-Way Tally Prime Synchronization",
        desc: "Sync all approved sales orders, GST delivery challans, and customer ledgers directly with central corporate Tally accounts.",
        icon: "Receipt",
      },
    ],
    localizedWorkflow: [
      {
        step: "01",
        title: "Regional Lead Ingestion",
        desc: "Inquiries from Punjab, Haryana, and Himachal auto-assign to commercial relationship managers in Chandigarh.",
      },
      {
        step: "02",
        title: "On-Site Check-In & Quotation",
        desc: "Officer checks in at client plant in Mohali or Baddi; drafts formal GST quotation on mobile with approved terms.",
      },
      {
        step: "03",
        title: "Dispatch & Tally Integration",
        desc: "Goods shipped with digital e-way bill; inventory updates live; commercial invoice syncs with Tally Prime.",
      },
    ],
    keyIndustries: [
      { name: "Pharmaceuticals & Formulations (Baddi/Mohali)", desc: "Batch records, COA generation, and chemist secondary distribution tracking." },
      { name: "Precision Engineering (Panchkula)", desc: "Custom machine shop estimates, sheet metal orders, and plant AMC contracts." },
      { name: "IT Services & Telecom Hardware (Mohali)", desc: "Contract renewals, multi-year software licenses, and dedicated customer success workflows." },
      { name: "Agricultural Equipment & Machinery", desc: "Tractor ancillaries, harvesters, seeders, and dealer network order management." },
    ],
    roiResults: [
      { metric: "65%", title: "Faster Proposal Turnaround", desc: "Issue branded GST quotations before competitors can draft spreadsheets." },
      { metric: "100%", title: "Tricity Field Visit Verification", desc: "GPS geofencing across Chandigarh, Mohali, and Panchkula ensures sales accountability." },
      { metric: "+35%", title: "Post-Sales AMC Retention", desc: "Automated maintenance alerts ensure critical plant machinery never breaks down." },
    ],
    clientTestimonial: {
      quote: "Operating across Chandigarh, Mohali, and supplying pharmaceutical plants in Baddi, we needed a CRM that works offline and syncs with Tally. RVM CRM transformed our sales team's speed and our field service response times.",
      author: "Harpreet Singh Sodhi",
      role: "Managing Director",
      company: "Tricity Process Equipment Ltd., Chandigarh",
      metricBadge: "Mohali & Chandigarh Industrial Area",
    },
    complianceInfo: {
      title: "Tricity (UT/Punjab/Haryana) Tax & Regulatory Standards",
      desc: "Fully aligned with Chandigarh UT, Punjab, and Haryana state GST mandates, E-Invoicing requirements, and E-Way Bill validation.",
      taxStandards: "UTGST, Punjab/Haryana SGST, CGST, IGST & E-Way Bill Automation",
      dataHosting: "Encrypted Indian Cloud Servers with Automated Multi-Zone Backups",
    },
    faqs: [
      {
        q: "Can sales managers track reps traveling between Chandigarh, Mohali, and Panchkula?",
        a: "Yes. The app logs actual distance traversed between verified customer check-ins across the Tricity, auto-calculating travel allowances.",
      },
      {
        q: "Does the mobile app work for field engineers visiting pharma plants in Baddi without mobile internet?",
        a: "Yes. The mobile app operates in full offline mode: engineers can complete job sheets, record test readings, and capture photos, syncing when online.",
      },
      {
        q: "Does RVM CRM support multi-state GST billing for Chandigarh UT, Punjab, and Haryana?",
        a: "Yes. The system automatically detects customer state codes and applies appropriate UTGST, SGST, or IGST tax rates.",
      },
    ],
  },

  "uttar-pradesh": {
    slug: "uttar-pradesh",
    name: "Uttar Pradesh",
    tagline: "Noida, Kanpur, Lucknow, Agra & Varanasi Industrial & Consumer Goods Engine",
    badge: "STATEWIDE ENTERPRISE OPERATIONS",
    regionType: "Industrial States & Belts",
    description:
      "Powering businesses across India's largest consumer state. From Noida and Greater Noida technology and auto hubs to Kanpur leather and heavy machinery, Lucknow biotech, and Agra shoe manufacturing—RVM CRM unifies sprawling retail dealer networks, factory fabrication, and field teams.",
    heroPreviewTitle: "Uttar Pradesh Statewide Commercial Hub",
    heroPreviewSubtitle: "Noida & Greater Noida tech, Kanpur heavy industry, Agra manufacturing & statewide dealer beats.",
    industrialHubs: [
      { zone: "Noida & Greater Noida (Phase II & TechZone)", focus: "Electronics, IT Hardware, Automotive Ancillaries & Corporate HQs" },
      { zone: "Kanpur Industrial Hub (Panki & Fazalganj)", focus: "Leather Goods, Heavy Machinery Fabrication, Defense Ordnance & Chemicals" },
      { zone: "Lucknow Industrial Corridor (Amausi & Chinhat)", focus: "Biotechnology, Aerospace Ancillaries, Precision Tooling & Packaging" },
      { zone: "Agra & Aligarh Manufacturing Clusters", focus: "Footwear & Leather Export, Locks & Hardware Manufacturing, Foundry Castings" },
    ],
    regionalChallenges: [
      {
        title: "Vast Geographic Sprawl Across 75 Districts",
        desc: "Managing territory sales managers and stockists across Western, Central, and Eastern UP without live GPS tracking leads to unmonitored territories.",
      },
      {
        title: "Retail Dealer Beat Inefficiency",
        desc: "FMCG, hardware, and consumer goods distributors lose sales when sales officers skip retail counter visits or fail to book orders promptly.",
      },
      {
        title: "Delayed Payment Collections & Disputed Invoices",
        desc: "High volume of trade receivables requires automated balance reminders and strict customer credit limit enforcement.",
      },
    ],
    tailoredCapabilities: [
      {
        title: "Statewide Retail Beat & Route Optimization",
        desc: "Assign predefined daily beat routes across UP districts with geofenced GPS retail store check-ins.",
        icon: "Navigation",
      },
      {
        title: "Mobile Secondary Order Booking & Van Sales",
        desc: "Sales reps take stockist replenishment orders on mobile, checking dealer credit limits and promotional trade schemes.",
        icon: "ShoppingBag",
      },
      {
        title: "Instant GST Quotation CPQ with Margin Locks",
        desc: "Draft multi-line industrial estimates in 90 seconds with automated HSN codes, GST calculations, and gross margin locks.",
        icon: "Receipt",
      },
      {
        title: "Two-Way Tally Prime Synchronization",
        desc: "Sync all approved sales orders, delivery challans, and customer ledgers directly with your central Tally Prime accounts.",
        icon: "Landmark",
      },
    ],
    localizedWorkflow: [
      {
        step: "01",
        title: "Inquiry Ingestion & District Allocation",
        desc: "Inquiries from B2B portals auto-assign to sales officers based on geographical district pincodes across Uttar Pradesh.",
      },
      {
        step: "02",
        title: "On-Site Check-In & Mobile Order",
        desc: "Sales officer marks GPS check-in at client counter; drafts formal GST quotation or books replenishment order.",
      },
      {
        step: "03",
        title: "Dispatch Challan & Tally Integration",
        desc: "Goods shipped with verified e-way bill; inventory updates live; commercial invoice syncs with Tally Prime.",
      },
    ],
    keyIndustries: [
      { name: "Heavy Machinery & Fabrication (Kanpur)", desc: "Production stage-gates, machine serial passports, and industrial AMC contracts." },
      { name: "Footwear, Leather & Hardware (Agra/Aligarh)", desc: "Batch tracking, export proposal CPQ, and multi-depot stock monitoring." },
      { name: "Electronics & Tech Products (Noida)", desc: "Hardware serial tracking, 24/7 service desk ticketing, and distributor secondary sales." },
      { name: "FMCG & Consumer Goods Distribution", desc: "Permanent journey plans, van inventory billing, and stockist secondary order routing." },
    ],
    roiResults: [
      { metric: "+32%", title: "Retail Counter Coverage", desc: "Structured journey plans allow sales reps to cover 35+ retail stores per day across UP." },
      { metric: "35%", title: "Reduction in Travel Expense Fraud", desc: "GPS route verification eliminates fabricated inter-city travel claims." },
      { metric: "100%", title: "GST & E-Way Bill Compliance", desc: "Zero tax code errors between intra-state UP dispatches and inter-state consignments." },
    ],
    clientTestimonial: {
      quote: "Managing sales reps and distributors across 40 districts in Uttar Pradesh was a nightmare on WhatsApp. RVM CRM gave our Lucknow head office complete visibility over daily retail beat visits, orders, and Tally payments.",
      author: "Akhilesh Srivastava",
      role: "Vice President of Sales",
      company: "Awadh Consumer Goods & Packaging Ltd., Lucknow",
      metricBadge: "Statewide UP Operations (320+ Users)",
    },
    complianceInfo: {
      title: "Uttar Pradesh Commercial & Industrial Standards",
      desc: "Fully aligned with Uttar Pradesh state GST mandates, UPSIDA industrial estate guidelines, and national data privacy standards.",
      taxStandards: "Uttar Pradesh SGST, CGST, IGST, E-Invoicing & E-Way Bill Integration",
      dataHosting: "Encrypted Indian Cloud Infrastructure with Multi-Layered Backups",
    },
    faqs: [
      {
        q: "Can sales officers book retailer orders across small towns in Uttar Pradesh without internet?",
        a: "Yes. The mobile app works in full offline mode: sales officers can capture orders, check dealer balances, and sync automatically once online.",
      },
      {
        q: "How does the system track field staff traveling across different UP districts?",
        a: "The app logs actual distance traversed between verified customer visits, calculating vehicle conveyance based on your company's per-km allowance.",
      },
      {
        q: "Can we manage equipment installed in factories in Kanpur, Noida, and Ghaziabad?",
        a: "Yes. The AMC module tracks machine serial numbers, warranty terms, and scheduled technician service visits across all UP industrial zones.",
      },
    ],
  },

  punjab: {
    slug: "punjab",
    name: "Punjab",
    tagline: "Ludhiana Auto Ancillaries, Jalandhar Sports & Tools, Mandi Gobindgarh Steel",
    badge: "AGRO-INDUSTRIAL & MANUFACTURING BELT",
    regionType: "Industrial States & Belts",
    description:
      "Purpose-built for Punjab's manufacturing heavyweights: Ludhiana's bicycle, auto ancillary, and knitwear giants; Jalandhar's sports goods and hand tools exporters; Mandi Gobindgarh steel rerollers; and Amritsar processing hubs. Streamline factory orders, export CPQ, and dealer networks.",
    heroPreviewTitle: "Punjab Industrial & Export Manufacturing Hub",
    heroPreviewSubtitle: "Ludhiana auto & cycles, Jalandhar hand tools & sports goods, Mandi Gobindgarh steel & Tally sync.",
    industrialHubs: [
      { zone: "Ludhiana Industrial Hub (Focal Point & Phase V-VIII)", focus: "Bicycle Components, Automotive Ancillaries, Textile Machinery & Hosiery" },
      { zone: "Jalandhar Industrial Area & Leather Complex", focus: "Hand Tools, Sports Goods, Pipe Fittings, Sanitaryware & Leather Tanning" },
      { zone: "Mandi Gobindgarh Steel Cluster", focus: "Steel Rerolling Mills, Ingot Casting, Structural Steel & Wire Drawing" },
      { zone: "Amritsar & Batala Industrial Belts", focus: "Agricultural Machinery, Machine Tools, Foundry Castings & Food Processing" },
    ],
    regionalChallenges: [
      {
        title: "Export & Domestic Quotation Complexity",
        desc: "Jalandhar hand tool and sports manufacturers manage foreign currency export orders (USD, EUR) alongside domestic dealer GST orders.",
      },
      {
        title: "Weight-Based Steel & Metal Invoicing",
        desc: "Mandi Gobindgarh steel rerollers require automated calculations based on section weight, bundle counts, and rolling tolerances.",
      },
      {
        title: "Multi-State Distributor Networks Across North India",
        desc: "Manufacturers supplying dealers across Punjab, Haryana, and J&K need real-time order booking and credit limit tracking.",
      },
    ],
    tailoredCapabilities: [
      {
        title: "Dual-Currency Export & Domestic CPQ",
        desc: "Generate professional export proposals with Incoterms (FOB, CIF) or domestic GST invoices with state tax splits in 90 seconds.",
        icon: "Receipt",
      },
      {
        title: "Steel Section & Weight-Based Billing",
        desc: "Calculate component quotes based on metal casting weight (per-kg rate), section dimensions, and heat-treatment specifications.",
        icon: "Factory",
      },
      {
        title: "Dealer & Stockist Mobile Order Booking",
        desc: "Sales reps take stockist replenishment orders on mobile, checking dealer credit limits and promotional schemes.",
        icon: "ShoppingBag",
      },
      {
        title: "Two-Way Tally Prime Synchronization",
        desc: "Sync all approved sales orders, delivery challans, and customer ledgers directly with your central Tally Prime ERP.",
        icon: "Landmark",
      },
    ],
    localizedWorkflow: [
      {
        step: "01",
        title: "Inquiry Ingestion & Technical Triage",
        desc: "Inquiries from domestic dealers or international buyers auto-assign to designated commercial managers in Ludhiana.",
      },
      {
        step: "02",
        title: "Factory Fabrication & Quality Sign-Off",
        desc: "Order produced in Focal Point or Mandi Gobindgarh; QA attaches dimensional and metallurgical test certifications.",
      },
      {
        step: "03",
        title: "Dispatch Challan & Tally Ledger Sync",
        desc: "Goods shipped with verified e-way bill; commercial invoice syncs directly with corporate Tally Prime accounts.",
      },
    ],
    keyIndustries: [
      { name: "Bicycle & Auto Ancillaries (Ludhiana)", desc: "Production stage-gates, machine serial passports, and industrial AMC contracts." },
      { name: "Hand Tools & Sports Goods (Jalandhar)", desc: "Export proposal CPQ, batch packing tracking, and international shipping manifests." },
      { name: "Steel Rerolling & Metals (Mandi Gobindgarh)", desc: "Per-ton weight pricing, chemical test certs, and transport e-way bill integration." },
      { name: "Agricultural Implements (Batala/Amritsar)", desc: "Tractor parts, harvesters, seeders, and dealer network order management." },
    ],
    roiResults: [
      { metric: "65%", title: "Faster Proposal Turnaround", desc: "Issue branded GST quotations before competitors can draft spreadsheets." },
      { metric: "100%", title: "Dealer Visit Verification", desc: "GPS geofencing across Punjab industrial zones ensures sales accountability." },
      { metric: "+38%", title: "Export Order Velocity", desc: "Multi-currency proposals and automated packing lists speed up international contracts." },
    ],
    clientTestimonial: {
      quote: "Operating out of Focal Point Ludhiana and exporting hand tools and automotive components globally, RVM CRM transformed our sales team's speed. We generate export quotations in 2 minutes and track all dealer visits across North India.",
      author: "Gurpreet Singh Bindra",
      role: "Managing Director",
      company: "Bindra Precision Hand Tools Ltd., Ludhiana",
      metricBadge: "Focal Point, Ludhiana, Punjab",
    },
    complianceInfo: {
      title: "Punjab Commercial & Industrial Standards",
      desc: "Fully aligned with Punjab state GST mandates, PSIEC industrial estate guidelines, and international export documentation standards.",
      taxStandards: "Punjab SGST, CGST, IGST, E-Invoicing & Export Shipping Bill Integration",
      dataHosting: "Encrypted Indian Cloud Infrastructure with Full Redundancy",
    },
    faqs: [
      {
        q: "Does RVM CRM support export documentation for Jalandhar hand tool and sports goods exporters?",
        a: "Yes. You can generate export quotations with Incoterms (FOB, CIF), foreign currency conversions (USD/EUR), and automated packing lists.",
      },
      {
        q: "Can steel rerollers in Mandi Gobindgarh calculate quotes based on per-ton metal weights?",
        a: "Yes. The quotation module can compute prices based on section dimensions, bundle counts, per-ton base rates, and rolling allowances.",
      },
      {
        q: "Can sales managers track reps visiting dealers across Punjab (Ludhiana, Jalandhar, Amritsar, Bathinda)?",
        a: "Yes. The app logs actual distance traversed between verified customer check-ins, auto-calculating vehicle travel allowances.",
      },
    ],
  },

  haryana: {
    slug: "haryana",
    name: "Haryana",
    tagline: "Faridabad Heavy Engineering, Panipat Textiles, Kundli & Bahadurgarh Manufacturing",
    badge: "INDUSTRIAL CORRIDOR OF NORTH INDIA",
    regionType: "Industrial States & Belts",
    description:
      "Engineered for Haryana's manufacturing backbone: Faridabad's tractor and switchgear factories, Panipat's global home textile and yarn mills, Kundli food processing parks, and Bahadurgarh footwear clusters. Bridge shop-floor fabrication, export proposals, and field service teams.",
    heroPreviewTitle: "Haryana Industrial Manufacturing & Export Hub",
    heroPreviewSubtitle: "Faridabad engineering, Panipat textiles, Kundli food processing & Bahadurgarh manufacturing.",
    industrialHubs: [
      { zone: "Faridabad Industrial Corridor", focus: "Tractors, Heavy Fabrication, Sheet Metal Stamping, Switchgears & Hydraulics" },
      { zone: "Panipat Textile & Shoddy Yarn Cluster", focus: "Home Textiles, Blankets, Carpets, Export Handlooms & Processing Chemicals" },
      { zone: "Kundli & Rai Industrial Areas (Sonipat)", focus: "Food Processing, Stainless Steel Utensils, Cold Chains & Packaging Machinery" },
      { zone: "Bahadurgarh & Rohtak Industrial Belt", focus: "Footwear & Footwear Polymers, Fasteners, Structural Pipes & Sanitaryware" },
    ],
    regionalChallenges: [
      {
        title: "High Heavy-Machinery Capital Costs",
        desc: "Faridabad manufacturers produce expensive capital equipment, requiring detailed multi-page proposals and formal discount approvals.",
      },
      {
        title: "Export Batch Consistency for Textiles",
        desc: "Panipat textile exporters face customer lot rejections if dye lot variations or shipping schedules are mismanaged.",
      },
      {
        title: "Multi-State Cross-Border Dispatches",
        desc: "Supplying goods across Delhi, UP, Punjab, and Rajasthan requires seamless e-way bill management and automated tax splits.",
      },
    ],
    tailoredCapabilities: [
      {
        title: "Heavy Equipment Technical CPQ with Margin Locks",
        desc: "Draft multi-line industrial estimates in 90 seconds with automated HSN codes, GST calculations, and gross margin locks.",
        icon: "Receipt",
      },
      {
        title: "Textile Batch & Fabric Lot Traceability",
        desc: "Track dye lot numbers, yarn counts, and fabric test parameters linked directly to customer export sales orders.",
        icon: "Package",
      },
      {
        title: "Faridabad-Kundli Corridor GPS Tracking",
        desc: "Verify client site visits across Faridabad, Kundli, and Panipat; auto-calculate vehicle conveyance without manual paperwork.",
        icon: "Navigation",
      },
      {
        title: "Two-Way Tally Prime Synchronization",
        desc: "Sync all approved sales orders, delivery challans, and customer ledgers directly with your central Tally Prime ERP.",
        icon: "Landmark",
      },
    ],
    localizedWorkflow: [
      {
        step: "01",
        title: "Technical RFQ & Costing Review",
        desc: "Inquiry ingested; engineering team in Faridabad or Panipat reviews specifications and approves profit margins.",
      },
      {
        step: "02",
        title: "Factory Fabrication & Quality Sign-Off",
        desc: "Order machined or woven; QA team logs dimensional tolerances and generates digital inspection certificate.",
      },
      {
        step: "03",
        title: "Dispatch, e-Way Bill & Tally Integration",
        desc: "Goods shipped with verified e-way bill; commercial invoice syncs with Tally; automated payment reminder scheduled.",
      },
    ],
    keyIndustries: [
      { name: "Heavy Machinery & Switchgear (Faridabad)", desc: "Production stage-gates, machine serial passports, and industrial AMC contracts." },
      { name: "Home Textiles & Yarn (Panipat)", desc: "Export proposal CPQ, dye lot tracking, and international shipping container manifests." },
      { name: "Food Processing & Packaging (Kundli)", desc: "Cold storage machinery AMCs, batch expiration tracking, and delivery challans." },
      { name: "Footwear & Footwear Polymers (Bahadurgarh)", desc: "Multi-item catalogue estimating, dealer beat mapping, and distributor orders." },
    ],
    roiResults: [
      { metric: "65%", title: "Faster Proposal Turnaround", desc: "Issue branded GST quotations before competitors can draft spreadsheets." },
      { metric: "100%", title: "Field Visit Verification", desc: "GPS geofencing across Haryana industrial zones ensures complete sales accountability." },
      { metric: "+40%", title: "Machine AMC Contract Renewals", desc: "Automated preventive service notices guarantee post-warranty revenue retention." },
    ],
    clientTestimonial: {
      quote: "Our fabrication plant in Faridabad supplies switchgear and hydraulic equipment across North India. RVM CRM connected our shop-floor engineering with our commercial sales team. Our quote turnaround dropped from 2 days to 15 minutes.",
      author: "Rajeshwar Malik",
      role: "Managing Director",
      company: "Haryana Heavy Engineering & Hydraulics Ltd., Faridabad",
      metricBadge: "Faridabad Industrial Area, Haryana",
    },
    complianceInfo: {
      title: "Haryana Industrial & Environmental Standards",
      desc: "Fully aligned with Haryana state GST mandates, HSIIDC industrial guidelines, and national data privacy standards.",
      taxStandards: "Haryana SGST, CGST, IGST, E-Invoicing & E-Way Bill Integration",
      dataHosting: "Encrypted Indian Cloud Servers Located in NCR Cloud Zone",
    },
    faqs: [
      {
        q: "Can sales managers approve discounts on high-value machinery deals from their phones?",
        a: "Yes. When a sales rep drafts a quote requiring special commercial concessions, directors receive instant push notifications to approve or revise.",
      },
      {
        q: "How does the mobile app track travel distance between Faridabad, Kundli, and Panipat?",
        a: "The app calculates actual distance traversed between verified customer check-ins during working shift hours, auto-generating travel reimbursement claims.",
      },
      {
        q: "Can we track equipment warranties for machinery installed in factories across Haryana?",
        a: "Yes. You can manage asset serial numbers, warranty expiry dates, preventive service intervals, and spare part replacements.",
      },
    ],
  },

  "united-kingdom": {
    slug: "united-kingdom",
    name: "United Kingdom",
    tagline: "London Financial Services, Midlands Manufacturing & UK-Wide Field Engineering",
    badge: "UK & EUROPEAN HEADQUARTERS",
    regionType: "Global & International",
    description:
      "Engineered for UK mid-market enterprises, London corporate consultancies, and Midlands manufacturing and field service contractors. Ensure strict GDPR compliance, HMRC Making Tax Digital (MTD) VAT integration, multi-currency proposals, and live field engineer scheduling across British postcodes.",
    heroPreviewTitle: "UK Enterprise Commercial & Field Service Hub",
    heroPreviewSubtitle: "HMRC MTD VAT compliance, UK postcode route planning, engineer dispatch & GDPR audit vault.",
    industrialHubs: [
      { zone: "Greater London & City Tech Corridor", focus: "Corporate Consultancies, Financial Technology, SaaS & Commercial Services" },
      { zone: "The Midlands (Birmingham & Coventry)", focus: "Automotive Engineering, Aerospace Components, Tooling & Precision Machining" },
      { zone: "Manchester & Northern Industrial Belt", focus: "Chemicals, Advanced Materials, Logistics Depots & Biomedical Sciences" },
      { zone: "Thames Valley & South East Tech Belt", focus: "Hardware Distribution, Telecom Systems, Data Centers & Facility Management" },
    ],
    regionalChallenges: [
      {
        title: "Strict UK GDPR & Data Protection Mandates",
        desc: "UK enterprises face severe Information Commissioner's Office (ICO) penalties if customer consent records or employee data lack encryption.",
      },
      {
        title: "HMRC Making Tax Digital (MTD) VAT Alignment",
        desc: "Invoicing and commercial billing must adhere strictly to UK HMRC standard, reduced, and reverse-charge VAT regulations.",
      },
      {
        title: "High Field Engineer Labor Costs",
        desc: "UK field service technicians cost £35–£65 per hour; inefficient routing across UK postcodes severely damages service margins.",
      },
    ],
    tailoredCapabilities: [
      {
        title: "UK Postcode Route Optimization & Geofencing",
        desc: "Engineers plan daily routes by British postcode sectors (e.g. EC1, B1, M1), reducing transit hours and vehicle fuel consumption.",
        icon: "Navigation",
      },
      {
        title: "HMRC MTD-Compliant VAT Billing (GBP, EUR, USD)",
        desc: "Generate professional VAT invoices supporting standard 20%, reduced 5%, and reverse-charge VAT with export to Xero/QuickBooks.",
        icon: "Receipt",
      },
      {
        title: "Strict UK GDPR Data Governance Vault",
        desc: "Enforce granular role-based access, employee consent management, and automated right-to-be-forgotten data sanitation.",
        icon: "ShieldCheck",
      },
      {
        title: "Planned Preventive Maintenance (PPM) & SLAs",
        desc: "Schedule periodic HVAC, commercial catering, and machinery inspections with digital client signature sign-offs on mobile.",
        icon: "Wrench",
      },
    ],
    localizedWorkflow: [
      {
        step: "01",
        title: "UK Commercial Lead Intake",
        desc: "Inquiries from UK digital channels and web forms auto-assign to designated account managers in London or Birmingham.",
      },
      {
        step: "02",
        title: "Postcode-Grouped Engineer Dispatch",
        desc: "Service call dispatched to nearest certified engineer; client receives live arrival estimate and engineer credentials.",
      },
      {
        step: "03",
        title: "Digital Job Sheet & MTD VAT Invoice",
        desc: "Client signs digital job report on mobile; system auto-generates HMRC-compliant VAT invoice with instant accounting export.",
      },
    ],
    keyIndustries: [
      { name: "Field Engineering & Facility Services", desc: "HVAC maintenance, commercial catering equipment, and electrical compliance inspections." },
      { name: "Midlands Precision Manufacturing", desc: "Automotive aerospace tooling, precision CNC parts, and ISO 9001 compliance logs." },
      { name: "B2B Technology & Consulting", desc: "Multi-year recurring contract billing, project milestone delivery, and client account health." },
      { name: "Wholesale Import & Distribution", desc: "Container tracking, multi-warehouse stock monitoring, and customer portal ordering." },
    ],
    roiResults: [
      { metric: "£42,000", title: "Average Annual Fleet Savings", desc: "Postcode route optimization eliminates wasted van transit hours across UK cities." },
      { metric: "100%", title: "HMRC & GDPR Audit Readiness", desc: "Automated VAT calculations and encrypted client data eliminate regulatory compliance risk." },
      { metric: "+32%", title: "Preventive Service Contract Growth", desc: "Automated 60-day renewal alerts secure high-margin recurring maintenance revenue." },
    ],
    clientTestimonial: {
      quote: "Operating across London and the South East with 45 field service technicians, RVM CRM transformed our dispatch efficiency. Postcode routing cut our engineer travel time by 30% and our digital job sheets integrate with our accounts seamlessly.",
      author: "Edward Thornton",
      role: "Operations Director",
      company: "Thornton Commercial Facilities Ltd., London",
      metricBadge: "London & Home Counties, UK",
    },
    complianceInfo: {
      title: "United Kingdom Regulatory & Data Standards",
      desc: "Fully aligned with UK GDPR, Data Protection Act 2018, HMRC Making Tax Digital (MTD) VAT standards, and ISO 27001 data governance.",
      taxStandards: "UK Standard 20% VAT, Reduced 5% VAT, Domestic Reverse Charge & Multi-Currency CPQ",
      dataHosting: "Encrypted Enterprise Cloud Infrastructure with ISO 27001 & SOC-2 Certification",
    },
    faqs: [
      {
        q: "Does RVM CRM support UK Making Tax Digital (MTD) VAT regulations?",
        a: "Yes. The platform generates fully compliant UK VAT invoices supporting 20% standard rate, reduced rates, and domestic reverse-charge rules.",
      },
      {
        q: "Is RVM CRM compliant with UK GDPR regulations?",
        a: "Yes. We enforce strict role-based access, full encryption at rest and in transit, audit logging, and data subject access request (DSAR) workflows.",
      },
      {
        q: "Can field service engineers use the mobile app across UK postcodes without mobile signal?",
        a: "Yes. The mobile app operates in full offline mode: engineers can complete job sheets, record test readings, and capture customer signatures, syncing when online.",
      },
    ],
  },

  "united-states": {
    slug: "united-states",
    name: "United States",
    tagline: "Multi-State Sales Tax, Field Service Fleet Dispatch & B2B Commercial Enterprise",
    badge: "US ENTERPRISE COMMERCE",
    regionType: "Global & International",
    description:
      "Tailored for US mid-market equipment manufacturers, nationwide B2B distributors, and multi-state field service contractors. Manage complex multi-state sales tax rates, track nationwide sales pipelines, coordinate field service fleets across time zones, and enforce strict enterprise SLAs.",
    heroPreviewTitle: "US Multi-State Enterprise Command Center",
    heroPreviewSubtitle: "State sales tax calculation, nationwide territory pipelines, field service fleet dispatch & SOC2 cloud.",
    industrialHubs: [
      { zone: "Midwest Industrial Belt (Chicago, Detroit, Cleveland)", focus: "Automotive Tooling, Heavy Machinery, Industrial Automation & Metal Fabrication" },
      { zone: "Texas Commercial Corridor (Dallas, Houston, Austin)", focus: "Energy Equipment, Oilfield Services, Tech Hardware & Regional Distribution" },
      { zone: "East Coast Hub (New York, New Jersey, Pennsylvania)", focus: "Biomedical Devices, Specialty Chemicals, B2B Commerce & Corporate Services" },
      { zone: "West Coast Tech & Distribution (California & Pacific NW)", focus: "Electronics Hardware, Clean Energy Equipment & Precision Aerospace" },
    ],
    regionalChallenges: [
      {
        title: "Complex Multi-State Sales Tax (Nexus)",
        desc: "Operating across multiple US states requires managing varying state, county, and municipal sales tax rates to avoid severe audit liabilities.",
      },
      {
        title: "Multi-Timezone Sales & Field Coordination",
        desc: "Coordinating sales teams and field technicians across Eastern, Central, Mountain, and Pacific time zones demands unified scheduling.",
      },
      {
        title: "High Customer SLA Penalty Costs",
        desc: "Commercial contracts in the US carry strict liquidated damages if facility equipment or data center machinery downtime exceeds agreed hours.",
      },
    ],
    tailoredCapabilities: [
      {
        title: "Multi-State Sales Tax Calculation Engine",
        desc: "Automatically determine appropriate state, county, and local sales tax rates based on client delivery zip codes.",
        icon: "Receipt",
      },
      {
        title: "Timezone-Intelligent Field Scheduling",
        desc: "Dispatch and schedule sales calls and field service appointments respecting local client time zones (EST, CST, MST, PST).",
        icon: "Clock",
      },
      {
        title: "Nationwide Territory & Account Management",
        desc: "Organize accounts by regional sales territories, sales rep quotas, and multi-location corporate client hierarchies.",
        icon: "Globe2",
      },
      {
        title: "Serialized Equipment Asset Passports",
        desc: "Maintain machine serial numbers, preventive maintenance schedules, and replacement spare parts inventories across US depots.",
        icon: "Wrench",
      },
    ],
    localizedWorkflow: [
      {
        step: "01",
        title: "Nationwide Ingestion & Territory Routing",
        desc: "Inquiries from US digital marketing channels auto-route to designated regional territory managers based on zip codes.",
      },
      {
        step: "02",
        title: "Zip-Code Tax Quoting & Digital Approval",
        desc: "Commercial proposal drafted with exact state sales tax; client reviews and signs agreement with e-signature.",
      },
      {
        step: "03",
        title: "Depot Dispatch & Field Commissioning",
        desc: "Goods shipped from regional depot; local technician conducts on-site installation and initializes annual service contract.",
      },
    ],
    keyIndustries: [
      { name: "Commercial Equipment & Machinery", desc: "Packaging machinery, CNC routers, industrial compressors, and preventive maintenance AMCs." },
      { name: "Field Service & Facility Maintenance", desc: "HVAC commercial systems, refrigeration fleets, and electrical inspection ticketing." },
      { name: "B2B Wholesale & Distribution", desc: "Multi-warehouse inventory, customer portal ordering, and freight manifest tracking." },
      { name: "Medical Devices & Laboratory Hardware", desc: "Hospital asset registers, FDA calibration certificates, and 24/7 emergency dispatch." },
    ],
    roiResults: [
      { metric: "$120,000", title: "Average Annual Operational Savings", desc: "Centralized quote-to-order automation eliminates manual administrative overhead." },
      { metric: "100%", title: "State Sales Tax Compliance", desc: "Automated zip-code tax calculations eliminate multi-state tax audit liabilities." },
      { metric: "< 3 Hrs", title: "Emergency Field Service MTTR", desc: "Proximity technician dispatch meets demanding enterprise customer SLAs." },
    ],
    clientTestimonial: {
      quote: "Operating across 18 US states with distribution depots in Texas and Ohio, RVM CRM gave us a unified platform to manage quotes, state sales tax, and field service technicians. Our proposal turnaround went from 48 hours to under 30 minutes.",
      author: "David Miller",
      role: "Vice President of Operations",
      company: "Great Lakes Industrial Equipment LLC, Chicago, IL",
      metricBadge: "Midwest & National US Operations",
    },
    complianceInfo: {
      title: "United States Commercial & Data Security Compliance",
      desc: "Engineered to satisfy US commercial contract standards, state sales tax nexus requirements, and SOC-2 Type II data security benchmarks.",
      taxStandards: "US Multi-State Sales Tax Calculation, Federal Tax ID (EIN), and Automated Zip-Code Tax Lookups",
      dataHosting: "Tier-IV Enterprise Cloud Infrastructure with AES-256 Encryption at Rest & TLS 1.3 in Transit",
    },
    faqs: [
      {
        q: "Does RVM CRM support varying sales tax rates across different US states and counties?",
        a: "Yes. The platform applies state-specific and local municipal tax rules based on customer shipping zip codes.",
      },
      {
        q: "How does the system handle multi-timezone scheduling across EST, CST, MST, and PST?",
        a: "All calendar appointments, task deadlines, and client meetings are localized to the user's and client's respective time zones automatically.",
      },
      {
        q: "Can field service technicians use the mobile app in remote client facilities without cell coverage?",
        a: "Yes. The mobile app operates in full offline mode: technicians log inspection checklists and spare part replacements, syncing when connected.",
      },
    ],
  },

  dubai: {
    slug: "dubai",
    name: "Dubai",
    tagline: "Free-Zone & Mainland Commerce, GCC Re-Export Hub & Heavy Equipment Servicing",
    badge: "UAE & GCC BUSINESS CAPITAL",
    regionType: "Global & International",
    description:
      "Purpose-built for Dubai's dynamic business environment: JAFZA import-export traders, DIFC and Business Bay corporate firms, Al Quoz manufacturing workshops, and regional GCC distributors. Manage UAE FTA 5% VAT, free-zone dual-entity invoicing, and cross-border logistics.",
    heroPreviewTitle: "Dubai & UAE Commercial Operations Hub",
    heroPreviewSubtitle: "UAE FTA VAT compliance, Free-Zone vs. Mainland billing, GCC re-export & equipment AMCs.",
    industrialHubs: [
      { zone: "Jebel Ali Free Zone (JAFZA)", focus: "Global Re-Export Logistics, Petrochemicals, Heavy Machinery & Automotive Spares" },
      { zone: "Business Bay & DIFC Financial Hub", focus: "Corporate Headquarters, Real Estate Developers, Consulting & B2B Trading" },
      { zone: "Al Quoz & Ras Al Khor Industrial Areas", focus: "Industrial Fabrication, Luxury Vehicle Servicing, Building Materials & Printing" },
      { zone: "Dubai South & Al Maktoum Airport Logistics", focus: "Aviation Logistics, Cold-Chain Distribution, E-Commerce Fulfillment & Depots" },
    ],
    regionalChallenges: [
      {
        title: "Free-Zone vs. Mainland VAT Regulations",
        desc: "Trading companies operating between designated free zones (e.g. JAFZA) and UAE mainland require strict compliance with FTA VAT rules.",
      },
      {
        title: "High-Paced Re-Export & GCC Cross-Border Trade",
        desc: "Supplying goods across Saudi Arabia, Oman, and Qatar requires multi-currency proposals and international transit documentation.",
      },
      {
        title: "Extreme Summer Climate Equipment Breakdowns",
        desc: "HVAC chillers, commercial refrigeration, and construction equipment suffer heavy breakdown rates under 50°C summer heat.",
      },
    ],
    tailoredCapabilities: [
      {
        title: "UAE FTA 5% VAT & Free-Zone Invoicing",
        desc: "Generate tax-compliant UAE VAT invoices (AED, USD, EUR) supporting standard 5%, zero-rated export, and out-of-scope free-zone transactions.",
        icon: "Receipt",
      },
      {
        title: "Cross-Border GCC Re-Export Documentation",
        desc: "Draft multi-currency proposals with international commercial terms (FOB, CIF) and automated export packing lists.",
        icon: "Globe2",
      },
      {
        title: "Heavy Equipment Chiller & Machinery AMC",
        desc: "Track commercial refrigeration and construction machinery with strict 2-hour emergency breakdown SLAs and preventive maintenance.",
        icon: "Wrench",
      },
      {
        title: "Multi-Language Quotations (English & Arabic)",
        desc: "Produce professional multi-page commercial proposals with bilingual English and Arabic company letterhead and terms.",
        icon: "FileText",
      },
    ],
    localizedWorkflow: [
      {
        step: "01",
        title: "Inquiry Intake & Trade Compliance",
        desc: "Inquiry received from GCC buyer; commercial manager verifies mainland vs. free-zone delivery status and currency.",
      },
      {
        step: "02",
        title: "Bilingual Proposal with FTA VAT",
        desc: "Commercial quotation drafted with 5% VAT or zero-rated export status; dispatched via WhatsApp and email.",
      },
      {
        step: "03",
        title: "JAFZA Dispatch & Customs Manifest",
        desc: "Goods shipped with verified customs exit certificate; transaction synchronizes with corporate financial ledger.",
      },
    ],
    keyIndustries: [
      { name: "Heavy Equipment & Commercial HVAC", desc: "Chiller maintenance, construction cranes, preventive maintenance, and spare parts." },
      { name: "Import-Export & Wholesale Trading (JAFZA)", desc: "Multi-warehouse inventory, container tracking, and foreign currency re-export." },
      { name: "Real Estate Developers & Brokerages", desc: "High-velocity portal lead routing, client property presentations, and broker commissions." },
      { name: "Building Materials & Contracting (Al Quoz)", desc: "Structural fabrication estimates, site delivery sign-offs, and contractor billing." },
    ],
    roiResults: [
      { metric: "100%", title: "UAE FTA VAT Compliance", desc: "Automated 5% VAT calculations eliminate fines from the Federal Tax Authority." },
      { metric: "< 2 Hrs", title: "Emergency Chiller Repair MTTR", desc: "Proximity technician dispatch prevents catastrophic refrigeration breakdowns in summer." },
      { metric: "+35%", title: "Faster GCC Deal Closures", desc: "Multi-currency proposals and instant WhatsApp PDF delivery accelerate commercial sign-offs." },
    ],
    clientTestimonial: {
      quote: "Operating out of JAFZA and trading machinery across the UAE and Saudi Arabia, RVM CRM gave us a unified platform to manage multi-currency quotes, FTA VAT compliance, and field technician dispatches. It is the best CRM for GCC operations.",
      author: "Tariq Al-Hashemi",
      role: "Managing Director",
      company: "Gulf Oasis Industrial Supplies FZE, Dubai",
      metricBadge: "JAFZA Free Zone, Dubai, UAE",
    },
    complianceInfo: {
      title: "United Arab Emirates Regulatory & Tax Standards",
      desc: "Fully compliant with UAE Federal Tax Authority (FTA) 5% VAT regulations, Dubai DED commercial licensing, and GCC customs documentation standards.",
      taxStandards: "UAE FTA 5% VAT, Zero-Rated Export Invoicing, Designated Free-Zone Rules & TRN Validation",
      dataHosting: "Encrypted Cloud Infrastructure Compliant with UAE National Data Protection Laws",
    },
    faqs: [
      {
        q: "Does RVM CRM support UAE Federal Tax Authority (FTA) 5% VAT compliance?",
        a: "Yes. The platform generates fully compliant UAE VAT tax invoices displaying Tax Registration Numbers (TRN), 5% VAT, and designated free-zone rules.",
      },
      {
        q: "Can we issue quotations in UAE Dirhams (AED), US Dollars (USD), and Saudi Riyals (SAR)?",
        a: "Yes. RVM CRM supports multi-currency CPQ with dynamic foreign exchange rate masters for seamless GCC trade.",
      },
      {
        q: "Can field service engineers use the mobile app in Dubai industrial areas and desert job sites?",
        a: "Yes. The mobile app operates in full offline mode, auto-synchronizing job sheets and site photos when internet restores.",
      },
    ],
  },

  canada: {
    slug: "canada",
    name: "Canada",
    tagline: "Toronto Industrial Hub, Montreal Manufacturing & Vancouver Pacific Gateway",
    badge: "CANADIAN NATIONAL COMMERCE",
    regionType: "Global & International",
    description:
      "Engineered for Canadian commercial enterprises, equipment distributors, and industrial field contractors. Seamlessly handle provincial tax variations (GST, HST, PST, QST), manage nationwide sales territories from Ontario to British Columbia, and coordinate cold-weather field service fleets.",
    heroPreviewTitle: "Canada Nationwide Commercial Operations Hub",
    heroPreviewSubtitle: "Provincial GST/HST/PST tax compliance, multi-province territory tracking & field service fleets.",
    industrialHubs: [
      { zone: "Greater Toronto Area (GTA) & Southern Ontario", focus: "Automotive Manufacturing, Precision Tooling, Heavy Machinery & Food Processing" },
      { zone: "Montreal & Greater Quebec Corridor", focus: "Aerospace Avionics, Pharmaceuticals, Chemical Formulations & Clean Energy" },
      { zone: "Vancouver & Lower Mainland (BC)", focus: "Pacific Rim Logistics, Forestry Equipment, Marine Systems & Clean Tech" },
      { zone: "Calgary & Edmonton Energy Corridor (Alberta)", focus: "Oil & Gas Equipment, Industrial Valves, Pumps & Heavy Fleet Maintenance" },
    ],
    regionalChallenges: [
      {
        title: "Varying Provincial Sales Taxes (GST/HST/PST/QST)",
        desc: "Shipping equipment across Canadian provinces requires managing varying combinations of federal GST (5%), harmonized HST (13%–15%), and provincial PST/QST.",
      },
      {
        title: "Bilingual Packaging & Legal Compliance",
        desc: "Supplying corporate clients in Quebec and eastern provinces demands bilingual English and French commercial documentation.",
      },
      {
        title: "Harsh Winter Field Service Conditions",
        desc: "Sub-zero Canadian winters require robust preventive maintenance tracking to prevent industrial boiler, heating, and machinery freeze-ups.",
      },
    ],
    tailoredCapabilities: [
      {
        title: "Automated Provincial Tax Engine (GST/HST/PST/QST)",
        desc: "Automatically determine exact provincial taxes based on customer delivery province (Ontario 13% HST, BC 12% GST+PST, Quebec GST+QST).",
        icon: "Receipt",
      },
      {
        title: "Bilingual English & French Proposal Templates",
        desc: "Generate professional commercial proposals with bilingual English and French terms, product descriptions, and payment details.",
        icon: "FileText",
      },
      {
        title: "Winter Preventive Maintenance & Emergency Dispatch",
        desc: "Schedule automated pre-winter boiler and machinery maintenance, dispatching certified technicians with spare parts lists.",
        icon: "Wrench",
      },
      {
        title: "Nationwide Territory & Depots Tracking",
        desc: "Manage customer accounts across provinces, coordinating warehouse dispatches from Ontario, Alberta, and British Columbia depots.",
        icon: "Globe2",
      },
    ],
    localizedWorkflow: [
      {
        step: "01",
        title: "Provincial Lead Capture & Triage",
        desc: "Inquiries from Canadian provinces auto-assign to designated regional account managers based on postal codes.",
      },
      {
        step: "02",
        title: "Provincial Tax CPQ & E-Sign",
        desc: "Commercial quotation drafted with exact provincial taxes (HST/PST); client signs agreement with digital signature.",
      },
      {
        step: "03",
        title: "Regional Depot Dispatch & Commissioning",
        desc: "Goods shipped from Toronto or Vancouver depot; local field engineer completes site commissioning and sets up AMC.",
      },
    ],
    keyIndustries: [
      { name: "Heavy Equipment & Forestry Machinery", desc: "Excavator attachments, industrial saws, preventive maintenance, and spare parts." },
      { name: "Automotive Ancillaries (Ontario Corridor)", desc: "Tier-1 component production, tooling maintenance, and automotive OEM supply schedules." },
      { name: "Commercial HVAC & Refrigeration", desc: "Pre-winter heating audits, commercial chiller servicing, and 24/7 emergency dispatch." },
      { name: "Industrial Chemicals & Pharmaceuticals (Quebec)", desc: "Batch test parameters, bilingual COA generation, and returnable container audits." },
    ],
    roiResults: [
      { metric: "100%", title: "Provincial Tax Accuracy", desc: "Automated GST/HST/PST lookups eliminate costly CRA tax re-assessments." },
      { metric: "60%", title: "Faster Proposal Turnaround", desc: "Bilingual CPQ engine drafts multi-item proposals in under 2 minutes." },
      { metric: "+35%", title: "Pre-Winter AMC Retention", desc: "Proactive maintenance schedules ensure critical heating and industrial equipment never freezes." },
    ],
    clientTestimonial: {
      quote: "Operating out of Mississauga, ON and supplying industrial packaging machinery across Ontario, Quebec, and British Columbia, RVM CRM automated our provincial tax calculations and bilingual quotes. Our sales team operates twice as fast.",
      author: "Marc Tremblay",
      role: "VP of Sales & Operations",
      company: "Laurentian Industrial Systems Inc., Toronto, ON",
      metricBadge: "Greater Toronto Area, Ontario",
    },
    complianceInfo: {
      title: "Canadian Commercial & Privacy Standards",
      desc: "Fully aligned with Canada Revenue Agency (CRA) GST/HST/PST mandates, Quebec Bill 96 language standards, and PIPEDA privacy legislation.",
      taxStandards: "Federal GST (5%), Harmonized HST (13%-15%), British Columbia PST (7%), Quebec QST (9.975%)",
      dataHosting: "Encrypted Cloud Data Architecture with SOC-2 & ISO 27001 Certified Security Standards",
    },
    faqs: [
      {
        q: "Does RVM CRM automatically calculate provincial tax rates across Canadian provinces?",
        a: "Yes. The platform applies correct provincial taxes (e.g. 13% HST in Ontario, 15% in Nova Scotia, 5% GST + 7% PST in BC, and GST + QST in Quebec).",
      },
      {
        q: "Does the system support bilingual English and French quotations for clients in Quebec?",
        a: "Yes. You can generate bilingual English and French quotations, invoices, and service job sheets to comply with Quebec commercial regulations.",
      },
      {
        q: "Can field service technicians use the mobile app in remote industrial job sites without cellular signal?",
        a: "Yes. The mobile app operates in full offline mode: technicians log inspection checklists and spare part replacements, syncing when connected.",
      },
    ],
  },
}
