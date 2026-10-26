export interface IndustryDetail {
  slug: string
  name: string
  tagline: string
  badge: string
  sectorGroup: "Heavy Industry & Engineering" | "Supply Chain & FMCG" | "Services & Infrastructure"
  description: string
  heroPreviewTitle: string
  heroPreviewSubtitle: string
  challenges: {
    title: string
    desc: string
  }[]
  solutions: {
    title: string
    desc: string
    icon: string
  }[]
  workflow: {
    step: string
    title: string
    desc: string
  }[]
  results: {
    metric: string
    title: string
    desc: string
  }[]
  recommendedModules: {
    name: string
    slug: string
    role: string
  }[]
  faqs: {
    q: string
    a: string
  }[]
}

export const industriesDetailData: Record<string, IndustryDetail> = {
  manufacturing: {
    slug: "manufacturing",
    name: "Manufacturing",
    tagline: "Custom Drawing Approvals, Multi-Stage Production Tracking & Plant AMC Service",
    badge: "DISCRETE & PROCESS MANUFACTURING",
    sectorGroup: "Heavy Industry & Engineering",
    description:
      "Bridge commercial sales with the factory shop floor. Manage custom engineering drawings, generate complex multi-item GST quotations, commit finished goods inventory, track stage-gated production, and dispatch service engineers for on-site machinery commissioning.",
    heroPreviewTitle: "Manufacturing Commercial & Plant Command Center",
    heroPreviewSubtitle: "Technical quotation engine, factory drawing approvals, machine serial dossiers & AMC tracking.",
    challenges: [
      {
        title: "Slow Custom Quotations & Drawing Approvals",
        desc: "Sales reps wait days for engineering teams to calculate bill of materials (BOM), leading to lost bids and competitor undercutting.",
      },
      {
        title: "Disconnection Between Sales & Shop Floor",
        desc: "Once an order is signed, commercial teams have zero visibility into actual fabrication, assembly, or testing status.",
      },
      {
        title: "Warranty & Spare Parts Leakage",
        desc: "Post-delivery equipment breakdowns lack serial-number tracking, leading to unbilled replacement spares and lost AMC renewals.",
      },
    ],
    solutions: [
      {
        title: "Technical CPQ & Margin Protection",
        desc: "Draft multi-line engineering estimates in 90 seconds with automated HSN codes, GST calculations, and minimum gross margin locks.",
        icon: "Receipt",
      },
      {
        title: "Production Stage-Gate Tracking",
        desc: "Track customer orders through Drawing Approved → Raw Material Staged → Machining → Quality Inspection → Ready for Dispatch.",
        icon: "Factory",
      },
      {
        title: "Equipment Serial & Warranty Dossiers",
        desc: "Every dispatched machine is registered by serial number, tracking warranty validity, preventive maintenance schedules, and replacement parts.",
        icon: "Wrench",
      },
      {
        title: "Two-Way Tally Prime Integration",
        desc: "Sync sales orders, proformas, delivery challans, and customer ledgers directly with your central Tally Prime ERP.",
        icon: "Landmark",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "RFQ Ingestion & Drawing Approval",
        desc: "Technical inquiry ingested from IndiaMART or customer portal; engineering attaches approved fabrication drawings.",
      },
      {
        step: "02",
        title: "Sales Order & Production Staging",
        desc: "Commercial quotation converts to production order; warehouse commits raw materials and allocates machine line time.",
      },
      {
        step: "03",
        title: "Dispatch, Commissioning & AMC",
        desc: "Goods shipped with digital challans; field technicians complete site commissioning and initialize warranty/AMC contracts.",
      },
    ],
    results: [
      {
        metric: "65%",
        title: "Faster Quote Turnaround",
        desc: "Engineered quotations drafted in minutes rather than days of manual spreadsheet iterations.",
      },
      {
        metric: "+38%",
        title: "AMC Renewal Revenue",
        desc: "Automated 60-day preventive maintenance and contract renewal alerts ensure zero warranty leakage.",
      },
      {
        metric: "100%",
        title: "Order Fulfillment Transparency",
        desc: "Sales reps and plant managers share real-time visibility over active fabrication milestones.",
      },
    ],
    recommendedModules: [
      { name: "Quotation Management", slug: "quotation-management", role: "Drafts technical GST proposals with BOM items." },
      { name: "Order Management", slug: "order-management", role: "Tracks production stage-gates and delivery challans." },
      { name: "AMC Management", slug: "amc-management", role: "Manages machine serials, PPM visits, and service contracts." },
    ],
    faqs: [
      {
        q: "Can RVM CRM handle custom bill of materials (BOM) and technical drawing attachments?",
        a: "Yes. You can attach CAD drawings, spec sheets, and customized BOM line items directly to customer quotation and order records.",
      },
      {
        q: "How does the system prevent unapproved discounts from eroding gross margins?",
        a: "The CPQ engine enforces minimum gross margin thresholds. Any quotation with discounts below threshold automatically triggers approval workflows for plant directors.",
      },
      {
        q: "Does RVM CRM track machinery installed across multiple client factories?",
        a: "Yes. You can maintain asset dossiers for equipment installed across different client plant locations, linking serial numbers to designated site engineers.",
      },
    ],
  },

  automotive: {
    slug: "automotive",
    name: "Automotive",
    tagline: "OEM Spare Distribution, Dealer Territory Mapping & Field Technician Dispatch",
    badge: "AUTOMOTIVE OEM & AFTERMARKET",
    sectorGroup: "Heavy Industry & Engineering",
    description:
      "Empower automotive component manufacturers, OEM tier-suppliers, and aftermarket dealer networks. Manage secondary sales pipelines, track dealer stock levels, streamline warranty claim inspections, and coordinate emergency roadside breakdown technicians.",
    heroPreviewTitle: "Automotive Dealer Network & Service Operations Hub",
    heroPreviewSubtitle: "Secondary dealer sales tracking, spare parts catalog, field technician dispatch & warranty audits.",
    challenges: [
      {
        title: "Unmonitored Dealer & Distributor Networks",
        desc: "Manufacturers lack live visibility into distributor stock exhaustion, secondary sales volumes, and regional dealer demands.",
      },
      {
        title: "Fraudulent Warranty Claims",
        desc: "Lack of photo verification and serial matching leads to improper warranty replacements for worn-out automotive components.",
      },
      {
        title: "Scattered Field Technical Support",
        desc: "Technicians dispatched to dealership service centers or fleet depots lack access to vehicle repair history or spare availability.",
      },
    ],
    solutions: [
      {
        title: "Dealer & Secondary Order Booking",
        desc: "Field sales officers take distributor orders on mobile, checking stock availability, dealer credit limits, and promotional schemes.",
        icon: "Car",
      },
      {
        title: "Automated Warranty Claim Audits",
        desc: "Service centers log claims with component barcodes, odometer readings, and defect photos before replacement approval.",
        icon: "ShieldAlert",
      },
      {
        title: "GPS-Verified Dealer Visits",
        desc: "Territory sales managers check in at authorized dealerships with geofenced GPS verification, recording stock audits on-site.",
        icon: "MapPin",
      },
      {
        title: "Fast-Moving Spare Part Analytics",
        desc: "Track inventory consumption trends across regional depots, preventing stockouts of critical consumables and replacement parts.",
        icon: "Package",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Dealer Route Plan & Punch-In",
        desc: "Sales officer executes pre-planned daily route; marks GPS check-in upon arriving at authorized dealership.",
      },
      {
        step: "02",
        title: "Order Booking & Credit Check",
        desc: "Officer audits shelf stock and books fresh replenishment order; system verifies dealer credit terms.",
      },
      {
        step: "03",
        title: "Depot Dispatch & Secondary Billing",
        desc: "Regional depot ships components; secondary sales volumes update live on executive territory leaderboards.",
      },
    ],
    results: [
      {
        metric: "+32%",
        title: "Distributor Order Volume",
        desc: "Systematic dealer visit cadences and instant mobile order booking prevent distributor stock exhaustion.",
      },
      {
        metric: "80%",
        title: "Faster Warranty Approvals",
        desc: "Digital photo inspection and serial validation eliminate paper warranty claim delays.",
      },
      {
        metric: "100%",
        title: "Dealer Visit Compliance",
        desc: "Geofenced check-ins ensure field sales teams maintain regular touchpoints across their assigned territories.",
      },
    ],
    recommendedModules: [
      { name: "Order Management", slug: "order-management", role: "Captures distributor orders with credit checks." },
      { name: "Inventory Management", slug: "inventory-management", role: "Tracks spare parts across regional distribution hubs." },
      { name: "Complaints & Ticket Management", slug: "complaints-and-ticket-management", role: "Audits warranty claims and technical repair jobs." },
    ],
    faqs: [
      {
        q: "Can sales officers book dealer orders while visiting retail counters without internet?",
        a: "Yes. The RVM CRM mobile app works offline: sales officers can capture orders, check dealer balances, and sync automatically once connected.",
      },
      {
        q: "How does RVM CRM verify that sales reps actually visited the dealership?",
        a: "The app enforces geofenced GPS check-in within a predefined radius of the dealer's registered showroom or warehouse location.",
      },
      {
        q: "Can we track vehicle fleet service contracts for commercial transport operators?",
        a: "Yes. You can manage fleet service schedules, preventive oil/filter intervals, and spare parts consumption per vehicle registration.",
      },
    ],
  },

  construction: {
    slug: "construction",
    name: "Construction",
    tagline: "Job-Site Material Dispatch, Contractor Billing & Multi-Project Field Audits",
    badge: "INFRASTRUCTURE & CONTRACTING",
    sectorGroup: "Services & Infrastructure",
    description:
      "Keep major civil projects, infrastructure developments, and contracting jobs on schedule and within budget. Coordinate site material requisitions, track concrete and steel deliveries, manage contractor subcontractor claims, and conduct daily site safety inspections.",
    heroPreviewTitle: "Construction Job-Site & Material Command Hub",
    heroPreviewSubtitle: "Site material requisitions, contractor billing milestones, safety audits & daily progress logs.",
    challenges: [
      {
        title: "Material Discrepancies & Site Pilferage",
        desc: "Steel, cement, and aggregates delivered to active construction sites often lack verified gate check-in and digital weighment receipts.",
      },
      {
        title: "Delayed Milestone Invoicing",
        desc: "Contractors wait weeks for site inspection sign-offs before issuing running account (RA) bills, restricting cash flow.",
      },
      {
        title: "Scattered Site Engineer Logs",
        desc: "Project managers struggle to gather daily progress reports (DPR), equipment operating hours, and safety logs from remote job sites.",
      },
    ],
    solutions: [
      {
        title: "Site Material Inward & Gate Passes",
        desc: "Site supervisors scan delivery challans and log vehicle weigh-scale readings directly on mobile before material offloading.",
        icon: "Truck",
      },
      {
        title: "Digital Milestone RA Billing",
        desc: "Site engineers upload structural completion photos and test cube reports; client signs digital milestone verification on-site.",
        icon: "FileCheck",
      },
      {
        title: "Daily Progress Reporting (DPR)",
        desc: "Engineers log daily labor counts, machinery operating hours, concrete pours, and safety inspections with GPS-stamped photos.",
        icon: "HardHat",
      },
      {
        title: "Subcontractor Expense Audits",
        desc: "Track equipment diesel allowances, crane hire hours, and subcontractor conveyance claims against approved work orders.",
        icon: "Receipt",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Material Indent & Warehouse Push",
        desc: "Site manager indents materials; central procurement dispatches goods with automated digital transit challans.",
      },
      {
        step: "02",
        title: "Gate Verification & Quality Testing",
        desc: "Site supervisor logs arrival with photos; lab technicians attach compressive strength test certifications.",
      },
      {
        step: "03",
        title: "Work Measurement & RA Bill Release",
        desc: "Completed work quantities verified on mobile; system generates GST running account invoice for client approval.",
      },
    ],
    results: [
      {
        metric: "100%",
        title: "Site Material Accountability",
        desc: "Digital gate passes and weighment photo uploads eliminate unrecorded material shrinkage.",
      },
      {
        metric: "12 Days",
        title: "Faster Cash Collection",
        desc: "Digital milestone sign-offs eliminate paper bill verification delays between project sites and client offices.",
      },
      {
        metric: "Zero",
        title: "Safety Audit Oversights",
        desc: "Mandatory daily mobile inspection checklists ensure structural and occupational safety compliance.",
      },
    ],
    recommendedModules: [
      { name: "Order Management", slug: "order-management", role: "Manages material supply indents and site dispatches." },
      { name: "Expense Management", slug: "expense-management", role: "Tracks equipment diesel consumption and contractor claims." },
      { name: "Tasks & Planner", slug: "tasks-and-planner", role: "Schedules site safety inspections and concrete pours." },
    ],
    faqs: [
      {
        q: "Can site engineers work in basement construction zones without mobile connectivity?",
        a: "Yes. RVM CRM's mobile application is 100% offline-ready. Engineers can take site photos, fill DPRs, and sync when returning above ground.",
      },
      {
        q: "Does the system support running account (RA) bill generation for government contracts?",
        a: "Yes. You can configure multi-tier measurement sheets (MB records), retention money deductions, and GST tax invoices.",
      },
      {
        q: "Can we track equipment maintenance for excavators, cranes, and batching plants?",
        a: "Yes. The AMC & Service module tracks operating hours, lubrication intervals, and breakdown maintenance for heavy machinery.",
      },
    ],
  },

  engineering: {
    slug: "engineering",
    name: "Engineering",
    tagline: "Custom EPC Proposals, Milestone Project Delivery & On-Site Commissioning",
    badge: "EPC & SPECIALIZED ENGINEERING",
    sectorGroup: "Heavy Industry & Engineering",
    description:
      "Engineered for industrial design houses, turnkey EPC contractors, and automation integrators. Unify complex engineering tenders, technical document submittals, stage-gated fabrication, and on-site testing protocols under one operational umbrella.",
    heroPreviewTitle: "Engineering Project Lifecycle & Commissioning Terminal",
    heroPreviewSubtitle: "Turnkey EPC milestones, technical tender CPQ, drawing approvals & commissioning sign-offs.",
    challenges: [
      {
        title: "Protracted Technical Quotations",
        desc: "Engineering proposals require extensive input from electrical, mechanical, and civil disciplines, slowing response times to public tenders.",
      },
      {
        title: "Scope Creep & Unapproved Revisions",
        desc: "Changes requested during design reviews are implemented without formal commercial change-order documentation, eroding profits.",
      },
      {
        title: "Multi-Party Testing Sign-Offs",
        desc: "Commissioning requires sign-offs from client engineers, third-party inspection agencies (TPI), and internal commissioning managers.",
      },
    ],
    solutions: [
      {
        title: "Multi-Discipline Engineering CPQ",
        desc: "Assemble complex bills of materials covering equipment, cabling, civil works, and labor hours into a cohesive branded proposal.",
        icon: "Cog",
      },
      {
        title: "Formal Change Order Management",
        desc: "Log design modifications and scope changes with automated commercial impact calculations, securing client approval before work starts.",
        icon: "FileCheck",
      },
      {
        title: "Site Acceptance Testing (SAT) Logs",
        desc: "Execute factory acceptance tests (FAT) and on-site acceptance tests (SAT) using standardized digital checklists on mobile tablets.",
        icon: "CheckCircle2",
      },
      {
        title: "Milestone Billing & Retention Tracking",
        desc: "Track retention guarantees, performance bank guarantees (PBG), and milestone invoices linked to project completion certificates.",
        icon: "Receipt",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Tender Review & Estimating",
        desc: "Commercial team compiles multi-discipline cost sheet; directors approve profit margin before submitting tender.",
      },
      {
        step: "02",
        title: "Milestone Engineering & FAT",
        desc: "Design submittals approved; equipment built, tested in factory (FAT), and prepared for site delivery.",
      },
      {
        step: "03",
        title: "SAT, Commissioning & Handover",
        desc: "Engineers execute site acceptance tests; client and inspection agency sign digital commissioning certificate.",
      },
    ],
    results: [
      {
        metric: "+24%",
        title: "Tender Win Rate",
        desc: "Faster technical quotation response and professional proposal formatting win more turnkey contracts.",
      },
      {
        metric: "100%",
        title: "Scope Creep Protection",
        desc: "Formal change order approvals ensure all additional engineering modifications are billed to the client.",
      },
      {
        metric: "3x",
        title: "Faster Commissioning Sign-Off",
        desc: "Digital test checklists and multi-party mobile signatures accelerate final retention payment releases.",
      },
    ],
    recommendedModules: [
      { name: "Quotation Management", slug: "quotation-management", role: "Drafts detailed technical EPC proposals." },
      { name: "Installation Management", slug: "installation-management", role: "Manages on-site commissioning and SAT checklists." },
      { name: "Finance & Accounts", slug: "finance-and-accounts", role: "Tracks milestone billings and bank guarantee expiries." },
    ],
    faqs: [
      {
        q: "Can we manage Performance Bank Guarantees (PBG) and client retention amounts?",
        a: "Yes. Finance teams can track PBG expiry dates, retention deduction percentages, and automated reminder alerts for commercial releases.",
      },
      {
        q: "Can we upload third-party inspection (TPI) agency approval certificates?",
        a: "Yes. Scanned certificates from agencies such as TÜV, Lloyd's, or Bureau Veritas can be attached directly to project milestones.",
      },
      {
        q: "How does the system help control project cost overruns?",
        a: "RVM CRM tracks planned material and labor estimates against actual consumption, flagging cost variances in real time.",
      },
    ],
  },

  chemicals: {
    slug: "chemicals",
    name: "Chemicals",
    tagline: "Batch Quality Tracking, Regulatory Compliance & Drum Inventory Logistics",
    badge: "SPECIALTY CHEMICALS & COATINGS",
    sectorGroup: "Heavy Industry & Engineering",
    description:
      "Purpose-built for specialty chemical manufacturers, industrial solvent distributors, and coatings producers. Track Certificate of Analysis (COA) documents, manage returnable drum assets, enforce Hazmat safety protocols, and monitor customer replenishment cadences.",
    heroPreviewTitle: "Chemical Batch Tracking & Regulatory Operations Hub",
    heroPreviewSubtitle: "COA generation, batch expiration tracking, returnable drum assets & Hazmat compliance.",
    challenges: [
      {
        title: "Strict Batch & Expiration Compliance",
        desc: "Delivering incorrect batch numbers or missing Certificate of Analysis (COA) documents results in costly customer lot rejections.",
      },
      {
        title: "Returnable Drum & IBC Asset Loss",
        desc: "Manufacturers lose millions annually in unrecovered chemical barrels, returnable IBC containers, and specialized gas cylinders.",
      },
      {
        title: "Complex Formula Pricing & Minimum Margins",
        desc: "Fluctuating raw petroleum/solvent prices make manual pricing error-prone, threatening company profitability.",
      },
    ],
    solutions: [
      {
        title: "Batch Master & Automated COA Dispatch",
        desc: "Attach chemical test parameters to batches; system auto-attaches verified Certificate of Analysis PDFs to client WhatsApp.",
        icon: "FlaskConical",
      },
      {
        title: "Returnable Container Asset Tracking",
        desc: "Track IBC totes, cylinders, and chemical drums by unique barcode, monitoring container returns and outstanding client deposits.",
        icon: "Package",
      },
      {
        title: "Dynamic Raw Material Price Indexing",
        desc: "Update base chemical price masters; system automatically recalibrates quotation rate cards across all active sales reps.",
        icon: "Receipt",
      },
      {
        title: "Safety Data Sheet (SDS) Vault",
        desc: "Ensure legal compliance by automatically delivering the latest Hazmat Safety Data Sheets with every product dispatch.",
        icon: "ShieldAlert",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Inquiry & Formula Specification",
        desc: "Client submits technical solvent purity requirement; sales rep generates GST quote based on current raw chemical price index.",
      },
      {
        step: "02",
        title: "Batch Allocation & COA Generation",
        desc: "QC lab validates lot viscosity and purity; system assigns batch number and generates digital Certificate of Analysis.",
      },
      {
        step: "03",
        title: "Dispatch, Drum Tracking & Delivery",
        desc: "Goods dispatched in tagged drums; driver collects digital receiver signature; client receives automated COA via WhatsApp.",
      },
    ],
    results: [
      {
        metric: "100%",
        title: "Batch Traceability",
        desc: "Complete end-to-end audit trail from raw material supplier lot to finished customer barrel.",
      },
      {
        metric: "+45%",
        title: "Returnable Drum Recovery",
        desc: "Barcode tracking of IBC totes and barrels eliminates lost container capital expenditures.",
      },
      {
        metric: "Zero",
        title: "COA Compliance Rejections",
        desc: "Automated digital COA attachment guarantees every delivery meets customer quality gate requirements.",
      },
    ],
    recommendedModules: [
      { name: "Inventory Management", slug: "inventory-management", role: "Manages chemical batch numbers and returnable drums." },
      { name: "Order Management", slug: "order-management", role: "Tracks delivery challans and safety documentation." },
      { name: "Quotation Management", slug: "quotation-management", role: "Enforces dynamic raw material price indexed CPQ." },
    ],
    faqs: [
      {
        q: "Can the system automatically dispatch Certificate of Analysis (COA) PDFs to clients?",
        a: "Yes. As soon as an order is marked dispatched, the verified COA and Safety Data Sheet (SDS) are emailed and sent via WhatsApp to the client QC manager.",
      },
      {
        q: "How does RVM CRM track returnable chemical drums and IBC totes?",
        a: "Each container has a unique barcode. The mobile app scans drums during delivery and again upon empty pickup, maintaining container balance ledgers.",
      },
      {
        q: "Can we restrict sale of restricted chemicals based on client licensing?",
        a: "Yes. You can require customer regulatory licenses (e.g. Drug Control, Explosives, Pollution Control) to be verified before order processing.",
      },
    ],
  },

  logistics: {
    slug: "logistics",
    name: "Logistics",
    tagline: "Fleet Movement Tracking, Proof of Delivery & Transporter Freight Management",
    badge: "FLEET & 3PL LOGISTICS",
    sectorGroup: "Supply Chain & FMCG",
    description:
      "Accelerate supply chain agility for 3PL freight forwarders, fleet operators, and distribution logistics networks. Capture instant digital Proof of Delivery (e-POD), coordinate pickup schedules, monitor driver vehicle movements, and reconcile transporter freight billings.",
    heroPreviewTitle: "Logistics Fleet Operations & Dispatch Command Center",
    heroPreviewSubtitle: "Consignment tracking, mobile e-POD capture, vehicle route optimization & transporter settlements.",
    challenges: [
      {
        title: "Lost Proof of Delivery (POD) Receipts",
        desc: "Delayed or lost paper physical lorry receipts (LR) postpone corporate billing cycles by weeks, locking up working capital.",
      },
      {
        title: "Uncontrolled Driver Route Deviations",
        desc: "Fleet managers lack live verification of delivery halts, unauthorized layovers, and excessive fuel consumption.",
      },
      {
        title: "Customer Consignment Enquiries",
        desc: "Call centers are inundated with frantic phone calls asking for delivery arrival times and driver contact numbers.",
      },
    ],
    solutions: [
      {
        title: "Mobile Digital Proof of Delivery (e-POD)",
        desc: "Drivers capture consignee digital signatures, receiver stamps, and cargo unloading photos on mobile; instantly available in CRM.",
        icon: "FileCheck",
      },
      {
        title: "Real-Time Consignment Tracking Links",
        desc: "Send automated WhatsApp tracking updates to senders and consignees with live dispatch status and estimated delivery time.",
        icon: "Send",
      },
      {
        title: "Driver Trip Expense & Fuel Audits",
        desc: "Verify toll receipts, fuel bills, and per-km mileage claims with automated GPS route calculations, preventing expense fraud.",
        icon: "Receipt",
      },
      {
        title: "Transporter Billing & Freight Ledger",
        desc: "Reconcile vendor freight bills against agreed rate cards per ton/km, automatically exporting verified payments to Tally.",
        icon: "Truck",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Booking & Lorry Receipt (LR) Push",
        desc: "Booking created with freight weight, cargo description, and pickup coordinates; LR generated in one click.",
      },
      {
        step: "02",
        title: "Transit Milestones & Customer Alerts",
        desc: "Truck departs transit hub; consignee receives automated WhatsApp notifications with driver contact and tracking link.",
      },
      {
        step: "03",
        title: "Mobile e-POD & Instant Billing Release",
        desc: "Consignee signs mobile e-POD; system immediately generates freight tax invoice for corporate client billing.",
      },
    ],
    results: [
      {
        metric: "Zero",
        title: "Lost POD Disputes",
        desc: "Instant digital e-POD capture eliminates missing physical lorry receipt paper disputes.",
      },
      {
        metric: "14 Days",
        title: "Reduction in Billing Latency",
        desc: "Generate freight invoices within minutes of delivery sign-off rather than waiting for paper receipts to return to HQ.",
      },
      {
        metric: "70%",
        title: "Fewer Where-Is-My-Order Calls",
        desc: "Automated WhatsApp tracking links keep consignees updated without calling support desks.",
      },
    ],
    recommendedModules: [
      { name: "Order Management", slug: "order-management", role: "Manages consignment bookings and dispatch manifests." },
      { name: "Expense Management", slug: "expense-management", role: "Audits driver fuel claims, tolls, and trip conveyance." },
      { name: "Finance & Accounts", slug: "finance-and-accounts", role: "Synchronizes freight billing and transporter ledgers." },
    ],
    faqs: [
      {
        q: "How does digital Proof of Delivery (e-POD) work for drivers with budget smartphones?",
        a: "The RVM CRM mobile driver interface is extremely lightweight. Drivers simply tap the consignment, take a photo of the signed delivery challan, and capture the receiver's digital signature.",
      },
      {
        q: "Can customers track multiple consignments under one corporate account?",
        a: "Yes. Corporate accounts can view a consolidated dashboard of all ongoing dispatches, completed deliveries, and historical e-PODs.",
      },
      {
        q: "Does RVM CRM support E-Way Bill integration?",
        a: "Yes. E-Way Bill numbers can be linked to consignments, with expiration date alerts preventing transit penalties.",
      },
    ],
  },

  healthcare: {
    slug: "healthcare",
    name: "Healthcare",
    tagline: "Medical Equipment AMC, Hospital Biomedical Audits & Emergency Tech Dispatch",
    badge: "BIOMEDICAL & HEALTHCARE EQUIPMENT",
    sectorGroup: "Services & Infrastructure",
    description:
      "Designed for medical equipment manufacturers, biomedical service providers, and surgical equipment distributors. Track hospital ICU asset uptime, schedule critical preventive calibration visits, deploy emergency repair engineers, and guarantee strict healthcare SLAs.",
    heroPreviewTitle: "Biomedical Asset & Hospital Service Terminal",
    heroPreviewSubtitle: "Hospital asset registers, emergency breakdown dispatch, calibration certificates & AMC contracts.",
    challenges: [
      {
        title: "Zero-Tolerance for Equipment Downtime",
        desc: "Breakdowns in MRI machines, ventilators, or ultrasound scanners require emergency responses within 2 to 4 hours to prevent patient risk.",
      },
      {
        title: "Mandatory Regulatory Calibrations",
        desc: "Hospitals and diagnostic chains face accreditation loss if periodic equipment calibration certificates lapse unrecorded.",
      },
      {
        title: "Multi-Department Hospital Bureaucracy",
        desc: "Biomedical engineers must navigate hospital administration, biomedical departments, and procurement for service sign-offs.",
      },
    ],
    solutions: [
      {
        title: "Emergency Severity-1 Service Dispatch",
        desc: "ICU breakdown calls automatically trigger audio-visual push alerts to the closest certified biomedical field technician.",
        icon: "HeartPulse",
      },
      {
        title: "Hospital Asset Hierarchy Mapping",
        desc: "Maintain complete asset dossiers organized by Hospital → Campus → Department (ICU, Radiology, OT) → Machine Serial Number.",
        icon: "Building",
      },
      {
        title: "Digital Calibration Certificates",
        desc: "Engineers record calibration tolerances and test readings on-site; system auto-generates branded compliance certificates.",
        icon: "CheckCircle2",
      },
      {
        title: "Automated Hospital AMC Renewals",
        desc: "Track Comprehensive and Non-Comprehensive maintenance agreements with automated 60-day renewal notices to hospital procurement.",
        icon: "Wrench",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Hospital Breakdown Intake",
        desc: "Biomedical department logs critical ventilator error via WhatsApp or 24/7 hotline; system triggers Severity-1 priority timer.",
      },
      {
        step: "02",
        title: "Proximity Dispatch & On-Site Repair",
        desc: "Nearest certified technician arrives on-site, replaces spare part from van inventory, and recalibrates equipment.",
      },
      {
        step: "03",
        title: "Digital Job Sheet & Hospital Sign-Off",
        desc: "Hospital biomedical head signs digital service report; calibration certificate auto-delivered to hospital administration.",
      },
    ],
    results: [
      {
        metric: "< 2.5 Hrs",
        title: "Average Emergency MTTR",
        desc: "Rapid proximity dispatch ensures critical ICU and imaging machines return to operation swiftly.",
      },
      {
        metric: "100%",
        title: "NABH / NABL Audit Compliance",
        desc: "Every calibration record, engineer certificate, and service log is digitally archived for hospital inspections.",
      },
      {
        metric: "+42%",
        title: "Hospital AMC Renewal Rate",
        desc: "Proactive preventive maintenance (PPM) visits build hospital trust, securing long-term recurring revenue.",
      },
    ],
    recommendedModules: [
      { name: "AMC Management", slug: "amc-management", role: "Manages hospital biomedical contracts and PPM visits." },
      { name: "Complaints & Ticket Management", slug: "complaints-and-ticket-management", role: "Enforces hospital emergency breakdown SLAs." },
      { name: "Inventory Management", slug: "inventory-management", role: "Tracks high-value medical spare parts and sensor kits." },
    ],
    faqs: [
      {
        q: "Can hospital biomedical teams verify the technician's certifications before allowing OT access?",
        a: "Yes. The mobile app displays technician ID credentials, safety badges, and calibration certifications for hospital security clearance.",
      },
      {
        q: "How does RVM CRM differentiate between hospital equipment covered under warranty versus out-of-warranty?",
        a: "When a service ticket is logged, the system instantly cross-checks the machine serial against warranty and AMC contracts, alerting the engineer if spares are billable.",
      },
      {
        q: "Can the system generate periodic calibration and uptime reports for NABH audits?",
        a: "Yes. Administrators can export comprehensive equipment uptime logs and calibration histories formatted for NABH hospital accreditation.",
      },
    ],
  },

  hospitality: {
    slug: "hospitality",
    name: "Hospitality",
    tagline: "Commercial Kitchen Equipment, Hotel Facility AMC & Rapid Service Tickets",
    badge: "HOTEL CHAINS & COMMERCIAL KITCHENS",
    sectorGroup: "Services & Infrastructure",
    description:
      "Engineered for commercial kitchen equipment suppliers, hotel facility management contractors, and HVAC service providers. Track commercial refrigeration warranties, coordinate preventive maintenance schedules across hotel chains, and dispatch emergency repair teams.",
    heroPreviewTitle: "Hospitality Facility & Equipment Service Hub",
    heroPreviewSubtitle: "Hotel chain asset management, commercial kitchen repair dispatch & preventive maintenance.",
    challenges: [
      {
        title: "Urgent Kitchen Equipment Breakdowns",
        desc: "A broken commercial chiller, combi-oven, or boiler during peak restaurant hours causes immediate menu disruption and food spoilage.",
      },
      {
        title: "Multi-Property Chain Management",
        desc: "Equipment vendors servicing national hotel chains struggle to coordinate service contracts across dozens of remote hotel properties.",
      },
      {
        title: "Unorganized Preventive Servicing",
        desc: "Hotels demand quarterly descaling and deep cleaning for kitchen and laundry machinery; missed visits risk contract cancellation.",
      },
    ],
    solutions: [
      {
        title: "Multi-Hotel Property Asset Mapping",
        desc: "Maintain equipment registries organized by Hotel Brand → City → Specific Property (Kitchen, Laundry, Banquet HVAC).",
        icon: "Hotel",
      },
      {
        title: "Rapid Kitchen Emergency Dispatch",
        desc: "Urgent breakdown requests dispatch the nearest certified refrigeration or gas technician with parts inventory in their van.",
        icon: "Timer",
      },
      {
        title: "Automated Quarterly PPM Schedules",
        desc: "System auto-generates periodic cleaning, gasket replacements, and descaling visits, assigning technicians well in advance.",
        icon: "CalendarDays",
      },
      {
        title: "Corporate Multi-Property Quotations",
        desc: "Draft consolidated AMC proposals covering multiple hotels under one master corporate agreement with tiered discounts.",
        icon: "Receipt",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Hotel Executive Breakdown Log",
        desc: "Hotel Executive Chef logs walk-in freezer failure via WhatsApp; system assigns high-priority ticket to nearest technician.",
      },
      {
        step: "02",
        title: "On-Site Repair & Spares Replacement",
        desc: "Technician arrives, replaces compressor relay from van inventory, and records temperature readings on mobile.",
      },
      {
        step: "03",
        title: "Digital Chef Sign-Off & Preventive Log",
        desc: "Kitchen manager signs job sheet; system logs repair history and schedules upcoming quarterly filter maintenance.",
      },
    ],
    results: [
      {
        metric: "90 Mins",
        title: "Emergency Response Window",
        desc: "Rapid field technician dispatch prevents costly food spoilage and banquet downtime.",
      },
      {
        metric: "100%",
        title: "PPM Schedule Adherence",
        desc: "Automated maintenance scheduling keeps commercial kitchen and HVAC equipment running efficiently.",
      },
      {
        metric: "+35%",
        title: "Corporate Contract Retention",
        desc: "Transparent multi-property performance dashboards satisfy demanding corporate hotel procurement teams.",
      },
    ],
    recommendedModules: [
      { name: "Complaints & Ticket Management", slug: "complaints-and-ticket-management", role: "Dispatches rapid kitchen breakdown service calls." },
      { name: "AMC Management", slug: "amc-management", role: "Manages hotel chain equipment maintenance agreements." },
      { name: "Inventory Management", slug: "inventory-management", role: "Tracks replacement compressors, gaskets, and thermostat spares." },
    ],
    faqs: [
      {
        q: "Can hotel managers log service requests outside normal business hours?",
        a: "Yes. RVM CRM's 24/7 WhatsApp bot allows hotel night managers and chefs to log emergency tickets anytime, routing directly to on-call duty engineers.",
      },
      {
        q: "Can we manage equipment across independent restaurant franchises?",
        a: "Yes. You can organize equipment by master brand, franchise owner, and individual outlet location with independent billing accounts.",
      },
      {
        q: "Does the system track spare parts covered under warranty versus billable items?",
        a: "Yes. The digital job sheet identifies whether the damaged component is covered under manufacturer warranty or requires commercial billing.",
      },
    ],
  },

  pharmaceuticals: {
    slug: "pharmaceuticals",
    name: "Pharmaceuticals",
    tagline: "Medical Representative (MR) Tracking, Doctor Coverage & Pharma Compliance",
    badge: "PHARMA FORMULATIONS & DISTRIBUTION",
    sectorGroup: "Supply Chain & FMCG",
    description:
      "Engineered for pharmaceutical manufacturers, PCD franchise distributors, and life-sciences sales forces. Plan doctor call lists, verify Medical Representative (MR) clinic visits with GPS geofencing, manage sample distributions, and track chemist secondary sales.",
    heroPreviewTitle: "Pharma Field Force & Doctor Coverage Console",
    heroPreviewSubtitle: "Medical representative route plans, doctor detailing logs, sample distribution & chemist orders.",
    challenges: [
      {
        title: "Unverified Doctor & Chemist Calling",
        desc: "Pharma companies lose massive promotional budgets to unverified Medical Representative (MR) daily call reports (DCR).",
      },
      {
        title: "Sample & Promotional Inventory Leakage",
        desc: "Lack of digital tracking leads to missing sample medicine strips, promotional literature, and physician gift allocations.",
      },
      {
        title: "Slow Chemist Secondary Sales Collection",
        desc: "Stockist and chemist replenishment orders written on paper pads delay supply chain distribution by days.",
      },
    ],
    solutions: [
      {
        title: "GPS-Geofenced Doctor Clinic Check-Ins",
        desc: "MRs punch in at doctor clinics and hospital OPDs with verified GPS coordinates, validating actual physical detailing calls.",
        icon: "MapPin",
      },
      {
        title: "Digital Doctor Detailing & Sample Logs",
        desc: "MRs log products detailed, samples disbursed, and doctor feedback directly on mobile, with physician digital signatures.",
        icon: "Pill",
      },
      {
        title: "Chemist Secondary Order Booking",
        desc: "Take chemist replenishment orders on mobile, automatically routing demand to assigned territorial stockists.",
        icon: "ShoppingBag",
      },
      {
        title: "Monthly Tour Program (MTP) Cadence",
        desc: "Managers approve monthly doctor visit plans; system alerts MRs on doctor call frequency compliance (Core vs. Non-Core).",
        icon: "CalendarDays",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Monthly Tour Plan (MTP) Schedule",
        desc: "MR schedules monthly doctor and chemist coverage; regional sales manager reviews and approves route plan.",
      },
      {
        step: "02",
        title: "Clinic Visit, Detailing & Sample Sign-Off",
        desc: "MR checks in at clinic, details formulations using digital tablet visual aids, and records sample medicine units handed over.",
      },
      {
        step: "03",
        title: "Chemist Stock Audit & Daily Call Report (DCR)",
        desc: "MR audits chemist shelf inventory, books stockist order; system auto-compiles end-of-day DCR without manual paperwork.",
      },
    ],
    results: [
      {
        metric: "100%",
        title: "Doctor Coverage Verification",
        desc: "GPS geofencing ensures promotional budgets translate into verified physical physician engagements.",
      },
      {
        metric: "Zero",
        title: "Sample Medicine Discrepancies",
        desc: "Digital physician acknowledgments eliminate diversion of promotional medical samples.",
      },
      {
        metric: "+26%",
        title: "Chemist Secondary Sales",
        desc: "Instant mobile order routing to territorial stockists speeds up retail pharmacy shelf replenishments.",
      },
    ],
    recommendedModules: [
      { name: "Attendance & Leaves", slug: "attendance-and-leaves", role: "Tracks MR shift check-ins and clinic geofencing." },
      { name: "Inventory Management", slug: "inventory-management", role: "Tracks sample medicine stocks and promotional literature." },
      { name: "Order Management", slug: "order-management", role: "Captures chemist secondary orders for territorial stockists." },
    ],
    faqs: [
      {
        q: "Can Medical Representatives use digital visual aids on tablets to detail products to doctors?",
        a: "Yes. MRs can present digital product brochures, clinical trial graphics, and prescription highlights directly from the RVM CRM mobile app.",
      },
      {
        q: "Does the system auto-generate the Daily Call Report (DCR)?",
        a: "Yes. As MRs complete their clinic visits, the DCR compiles automatically, eliminating the need to spend 2 hours typing reports every night.",
      },
      {
        q: "Can managers set up doctor categorization tiers (e.g. VIP, Core, General)?",
        a: "Yes. You can categorize doctors by specialization and prescription potential, enforcing mandatory visit frequency rules (e.g. twice a month for VIPs).",
      },
    ],
  },

  fmcg: {
    slug: "fmcg",
    name: "FMCG",
    tagline: "Van Sales Automation, Retail Beat Mapping & Stockist Secondary Distribution",
    badge: "FAST-MOVING CONSUMER GOODS",
    sectorGroup: "Supply Chain & FMCG",
    description:
      "Accelerate retail distribution for packaged foods, personal care products, beverages, and consumer goods. Optimize daily retail beat routes, automate van sales inventory, book retailer replenishment orders, and enforce promotional trade schemes.",
    heroPreviewTitle: "FMCG Retail Beat & Van Sales Distribution Engine",
    heroPreviewSubtitle: "Permanent journey plans (PJP), van inventory billing, retailer scheme discounts & stockist sync.",
    challenges: [
      {
        title: "Inefficient Retail Beat Traversal",
        desc: "Van sales reps wander randomly without structured beat plans, missing high-volume retail kirana outlets and wasting fuel.",
      },
      {
        title: "Van Inventory Shrinkage",
        desc: "Cash sales and spot delivery from distribution vans lack live stock debiting, creating massive reconciliation shortages.",
      },
      {
        title: "Trade Scheme Confusion",
        desc: "Retailers dispute billing when complex promotional discounts (e.g. Buy 10 Get 1 Free, 5% cash discount) are miscalculated on spot invoices.",
      },
    ],
    solutions: [
      {
        title: "Permanent Journey Plan (PJP) & Route Optimization",
        desc: "Assign predefined daily beat routes (Monday Beat, Tuesday Beat) with geofenced GPS retail store check-ins.",
        icon: "Navigation",
      },
      {
        title: "Spot Invoicing & Mobile Van Billing",
        desc: "Van salesmen issue instant GST thermal-printed invoices, collect cash/UPI payments, and automatically debit van inventory.",
        icon: "Receipt",
      },
      {
        title: "Automated Trade Scheme Engine",
        desc: "Enforce dynamic promotional rules (tiered quantity discounts, combo bundles, free goods) automatically at the checkout screen.",
        icon: "Sparkles",
      },
      {
        title: "Retail Merchandising & Shelf Audits",
        desc: "Sales reps snap photos of retail shelf displays, competitor placements, and POP marketing materials with GPS timestamps.",
        icon: "ShoppingBag",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Morning Van Stock Inwarding",
        desc: "Sales rep verifies loaded stock units in the van against warehouse transfer challan; clocks in on mobile app.",
      },
      {
        step: "02",
        title: "Retail Beat Store Check-In",
        desc: "Rep arrives at retail store; app validates GPS geofence; rep conducts shelf audit and books replenishment order.",
      },
      {
        step: "03",
        title: "Spot Delivery, UPI Payment & Reconciliation",
        desc: "Goods offloaded; retailer pays via dynamic UPI QR code; van inventory debits live; unsold stock reconciles at depot.",
      },
    ],
    results: [
      {
        metric: "+28%",
        title: "Retail Beat Store Coverage",
        desc: "Optimized journey plans allow sales reps to cover 35+ retail stores per day with zero wasted transit time.",
      },
      {
        metric: "100%",
        title: "Van Cash & Stock Reconciliation",
        desc: "Spot billing and UPI QR integration eliminate cash shortages and missing van inventory at end-of-day depot check-ins.",
      },
      {
        metric: "Zero",
        title: "Trade Scheme Disputes",
        desc: "Automated discount calculations eliminate manual billing errors and retailer invoice disputes.",
      },
    ],
    recommendedModules: [
      { name: "Order Management", slug: "order-management", role: "Captures spot retail sales and stockist replenishment orders." },
      { name: "Inventory Management", slug: "inventory-management", role: "Audits van stock balances and depot replenishments." },
      { name: "Finance & Accounts", slug: "finance-and-accounts", role: "Reconciles daily cash collections and UPI settlements." },
    ],
    faqs: [
      {
        q: "Can sales representatives print paper invoices directly from their mobile app inside retail stores?",
        a: "Yes. The mobile app pairs via Bluetooth with standard portable 2-inch and 3-inch thermal printers to issue immediate GST invoices.",
      },
      {
        q: "What happens if a retailer refuses to take delivery of damaged goods?",
        a: "Sales reps can process immediate partial returns on mobile: the app updates the invoice amount and registers damaged stock into quarantine.",
      },
      {
        q: "Can we track competitor pricing and shelf space?",
        a: "Yes. Reps can complete quick merchandising surveys, capturing competitor prices and shelf-share photographs during store visits.",
      },
    ],
  },

  "real-estate": {
    slug: "real-estate",
    name: "Real Estate",
    tagline: "Site Visit Management, Channel Partner Portals & Unit Booking Registries",
    badge: "PROPERTY DEVELOPERS & BROKERS",
    sectorGroup: "Services & Infrastructure",
    description:
      "Purpose-built for property developers, commercial real estate builders, and channel partner networks. Manage high-velocity digital leads, schedule cab pickups for client site visits, track unit inventory availability, and automate broker commissions.",
    heroPreviewTitle: "Real Estate Property Sales & Site Visit Hub",
    heroPreviewSubtitle: "Digital lead distribution, site visit cab tracking, live inventory charts & broker payouts.",
    challenges: [
      {
        title: "High Lead Leakage & Delayed Response",
        desc: "Prospective buyers clicking property ads on 99acres or MagicBricks lose interest if not contacted within 10 minutes by a relationship manager.",
      },
      {
        title: "Disorganized Physical Site Visits",
        desc: "Failed customer cab pickups, unassigned site executives, and long waiting times at project experience centers cause buyers to walk away.",
      },
      {
        title: "Channel Partner Commission Disputes",
        desc: "Disputes between internal sales teams and external real estate brokers regarding lead attribution and payout schedules damage broker loyalty.",
      },
    ],
    solutions: [
      {
        title: "Instant Portal & Meta Lead Distribution",
        desc: "Inquiries from 99acres, MagicBricks, Housing.com, and Facebook Lead Ads allocate to pre-sales reps within 60 seconds.",
        icon: "Zap",
      },
      {
        title: "Client Site Visit & Cab Scheduling",
        desc: "Coordinate prospective buyer site visits with automated driver cab dispatch, gate check-in alerts, and host assignment.",
        icon: "MapPin",
      },
      {
        title: "Live Interactive Inventory Grid",
        desc: "Sales managers view color-coded unit availability (Available, Blocked, Booked, Sold) in real time across towers and floors.",
        icon: "Building",
      },
      {
        title: "Channel Partner (CP) Attribution Portal",
        desc: "Brokers register prospects transparently with phone deduplication, tracking commission slabs and payout milestones online.",
        icon: "Users",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Digital Lead Capture & Pre-Sales Call",
        desc: "Inquiry ingested; pre-sales team calls prospect within 5 minutes to qualify budget, configuration, and purchase timeline.",
      },
      {
        step: "02",
        title: "Site Visit Scheduling & Reception",
        desc: "Prospect arrives at experience center; host checks in visitor on tablet and assigns dedicated senior property consultant.",
      },
      {
        step: "03",
        title: "Unit Blocking, Token & Agreement",
        desc: "Buyer selects apartment unit; pays booking token via UPI/payment link; system blocks unit and generates cost sheet.",
      },
    ],
    results: [
      {
        metric: "3.5x",
        title: "Higher Site Visit Show-Up Rate",
        desc: "Automated WhatsApp directions, cab coordination, and visit reminders ensure prospective buyers attend scheduled tours.",
      },
      {
        metric: "Zero",
        title: "Double-Booking Conflicts",
        desc: "Real-time interactive tower unit charts ensure no two sales managers accidentally sell or hold the same apartment unit.",
      },
      {
        metric: "100%",
        title: "Channel Partner Trust",
        desc: "Transparent lead tagging and automated commission milestone tracking turn local brokers into dedicated sales champions.",
      },
    ],
    recommendedModules: [
      { name: "Lead Management", slug: "lead-management", role: "Captures and routes real estate portal inquiries in real time." },
      { name: "Tasks & Planner", slug: "tasks-and-planner", role: "Schedules prospective buyer site tours and follow-up calls." },
      { name: "Quotation Management", slug: "quotation-management", role: "Generates customized unit payment schedule cost sheets." },
    ],
    faqs: [
      {
        q: "Can the system generate customized unit cost sheets with payment milestones?",
        a: "Yes. You can generate branded PDF payment schedule cost sheets including base price, floor rise charges, PLC, GST, and milestone installments.",
      },
      {
        q: "How does the system prevent conflicts between internal sales reps and channel partner brokers?",
        a: "When a broker registers a lead, RVM CRM verifies the phone number against existing records. If the lead is unique, it tags the broker for 60 to 90 days.",
      },
      {
        q: "Can experience center managers view live visitor counts on tablets?",
        a: "Yes. The experience center reception tablet tracks ongoing client presentations, average discussion times, and consultant closing ratios.",
      },
    ],
  },

  "machinery-and-equipment": {
    slug: "machinery-and-equipment",
    name: "Machinery & Equipment",
    tagline: "Industrial Machinery CPQ, Preventive Maintenance & Spare Parts Management",
    badge: "CAPITAL GOODS & INDUSTRIAL MACHINERY",
    sectorGroup: "Heavy Industry & Engineering",
    description:
      "Engineered for heavy equipment manufacturers, packaging machine builders, CNC tool distributors, and industrial pump suppliers. Unify high-value machinery proposals, factory acceptance testing (FAT), site commissioning checklists, and post-sales AMC spare contracts.",
    heroPreviewTitle: "Capital Equipment Lifecycle & Field Service Command",
    heroPreviewSubtitle: "Heavy machinery CPQ, commissioning certificates, machine serial tracking & AMC renewals.",
    challenges: [
      {
        title: "Long Sales Cycles & Complex Machine Specs",
        desc: "High-value industrial machinery deals involve multi-stakeholder negotiations, custom voltage requirements, and tooling options.",
      },
      {
        title: "Uncoordinated On-Site Commissioning",
        desc: "Machinery arrives at customer plants, but client foundation or power infrastructure is unready, causing expensive technician travel delays.",
      },
      {
        title: "Loss of Lucrative Post-Warranty Spare Revenue",
        desc: "Once original warranties lapse, customers purchase cheaper third-party replacement spares due to lack of OEM follow-up.",
      },
    ],
    solutions: [
      {
        title: "Industrial Machinery CPQ & Custom Options",
        desc: "Configure core machine models with optional attachments, automation feeders, customized tooling, and warranty extensions.",
        icon: "Wrench",
      },
      {
        title: "Pre-Installation Infrastructure Checklists",
        desc: "Verify client site electrical loads, compressed air, and foundation preparation before deploying installation engineers.",
        icon: "FileCheck",
      },
      {
        title: "Machine Serial & Maintenance Passports",
        desc: "Maintain complete asset dossiers per machine serial number: tracking installation date, operating hours, and historical repairs.",
        icon: "CheckCircle2",
      },
      {
        title: "Automated Spare Parts Consumption Alerts",
        desc: "Predictive algorithms alert parts procurement when high-wear consumables (bearings, seals, cutter blades) require scheduled replacement.",
        icon: "Package",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Machine Sizing & Technical Proposal",
        desc: "Sales engineer determines production capacity requirements; generates formal GST machinery quotation with technical specs.",
      },
      {
        step: "02",
        title: "FAT Testing & Site Readiness Audit",
        desc: "Client attends factory acceptance test (FAT); engineer audits client plant infrastructure prior to equipment dispatch.",
      },
      {
        step: "03",
        title: "Site Commissioning & AMC Onboarding",
        desc: "Engineer commissions machine, trains factory operators, secures digital sign-off, and initializes annual AMC contract.",
      },
    ],
    results: [
      {
        metric: "+40%",
        title: "Post-Warranty Spare Revenue",
        desc: "Proactive spare parts replenishment follow-ups prevent customers from turning to counterfeit aftermarket suppliers.",
      },
      {
        metric: "Zero",
        title: "Unready Site Travel Costs",
        desc: "Pre-installation infrastructure verification ensures technicians travel only when client foundation is 100% prepared.",
      },
      {
        metric: "99.2%",
        title: "Guaranteed Machine Uptime",
        desc: "Scheduled preventive maintenance (PPM) visits prevent catastrophic machine breakdowns and production halts.",
      },
    ],
    recommendedModules: [
      { name: "Quotation Management", slug: "quotation-management", role: "Drafts detailed capital machinery CPQ proposals." },
      { name: "Installation Management", slug: "installation-management", role: "Manages on-site machine commissioning and operator training." },
      { name: "AMC Management", slug: "amc-management", role: "Tracks equipment serials, PPM schedules, and spare contracts." },
    ],
    faqs: [
      {
        q: "Can we include optional accessories and spare parts packages in the machine quotation?",
        a: "Yes. The quotation module supports optional item sections, tooling kits, extended warranty options, and freight/installation lines.",
      },
      {
        q: "How does the system handle multi-day commissioning projects?",
        a: "The Installation Management module tracks day-by-day progress milestones (Uncrating, Positioning, Electrical, Dry Run, Trial Production, Sign-off).",
      },
      {
        q: "Can field service engineers view complete machine repair histories on their mobile app?",
        a: "Yes. By scanning the machine serial QR code or entering the serial number, the engineer can see all past breakdowns and replaced parts.",
      },
    ],
  },
}
