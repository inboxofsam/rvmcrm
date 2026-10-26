export interface ModuleDetail {
  slug: string
  name: string
  tagline: string
  badge: string
  category: "Sales & Growth" | "Operations & Delivery" | "Workforce & Field" | "Finance & Intelligence"
  description: string
  heroPreviewTitle: string
  heroPreviewSubtitle: string
  capabilities: {
    title: string
    desc: string
    icon: string
  }[]
  workflow: {
    step: string
    title: string
    desc: string
  }[]
  benefits: {
    metric: string
    title: string
    desc: string
  }[]
  connectedModules: {
    module: string
    howItConnects: string
  }[]
  faqs: {
    q: string
    a: string
  }[]
}

export const modulesDetailData: Record<string, ModuleDetail> = {
  "contact-management": {
    slug: "contact-management",
    name: "Contact Management",
    tagline: "360° Unified Customer Profiles, Interaction Trails & Hierarchy Mapping",
    badge: "RELATIONSHIP & DOSSIERS",
    category: "Sales & Growth",
    description:
      "Transform scattered spreadsheets and loose business cards into an organized, centralized customer dossier. Maintain complete multi-contact company hierarchies, past quotation registers, communication histories, and active service contracts in one single click.",
    heroPreviewTitle: "360° Account & Contact Command Console",
    heroPreviewSubtitle: "Complete interaction logs, company branch hierarchies & real-time client activity feeds.",
    capabilities: [
      {
        title: "Multi-Contact Account Hierarchies",
        desc: "Map complex corporate client structures with multiple decision-makers, branch procurement leads, accounts managers, and plant engineers under one master company account.",
        icon: "Users",
      },
      {
        title: "Complete Interaction Timeline",
        desc: "Every phone call, WhatsApp exchange, email thread, meeting note, and site visit automatically logged in a unified chronological activity feed.",
        icon: "Clock",
      },
      {
        title: "Intelligent Custom Tagging & Segments",
        desc: "Segment customer databases by industry vertical, geographic region, turnover tier, product interest, and credit risk score for precision campaigns.",
        icon: "Layers",
      },
      {
        title: "Document Vault & KYC Records",
        desc: "Securely store client GST certificates, MSME documents, signed agreements, and trade licenses directly on the company dossier.",
        icon: "FileText",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Multi-Channel Ingestion & Deduplication",
        desc: "Contacts ingested automatically via website forms, WhatsApp chats, IndiaMART, or bulk Excel imports with automated duplicate detection based on phone and GSTIN.",
      },
      {
        step: "02",
        title: "Hierarchy & Stakeholder Mapping",
        desc: "Organize contacts under corporate parent accounts with dedicated designations, phone numbers, and operational authority levels.",
      },
      {
        step: "03",
        title: "Continuous 360° Engagement Sync",
        desc: "Every quote dispatched, ticket resolved, and order delivered automatically reflects in the customer's permanent lifetime ledger.",
      },
    ],
    benefits: [
      {
        metric: "100%",
        title: "Customer Context Retention",
        desc: "Zero context lost when sales reps transition or take leaves. All client history remains secure inside your company.",
      },
      {
        metric: "4x",
        title: "Faster Account Lookup",
        desc: "Instant search by contact name, phone, email, GST number, or company branch across desktop and mobile apps.",
      },
      {
        metric: "35%",
        title: "Higher Cross-Sell Velocity",
        desc: "Identify repeat buying patterns, expiring contracts, and complementary product opportunities across existing clients.",
      },
    ],
    connectedModules: [
      {
        module: "Lead Management",
        howItConnects: "Qualified leads convert into verified contact dossiers and corporate accounts with one click.",
      },
      {
        module: "Quotation Management",
        howItConnects: "Auto-fills billing address, GSTIN, and preferred payment terms when drafting new sales quotes.",
      },
      {
        module: "Complaints & Ticket Management",
        howItConnects: "Service tickets instantly link to customer equipment records and designated plant engineers.",
      },
    ],
    faqs: [
      {
        q: "Can we import our existing customer databases from Excel or Google Sheets?",
        a: "Yes. RVM CRM provides an intuitive CSV/Excel import wizard with automated column matching and duplicate detection to safely import thousands of client records in minutes.",
      },
      {
        q: "Can sales representatives access contact records while travelling in the field?",
        a: "Yes. The native RVM CRM mobile app allows field sales reps to view client profiles, tap-to-call, tap-to-WhatsApp, and view directions via Google Maps even in low connectivity areas.",
      },
      {
        q: "Can we restrict junior executives from viewing client phone numbers or exporting contacts?",
        a: "Yes. Granular role-based permissions allow administrators to mask sensitive contact numbers and completely disable Excel export rights for specific roles.",
      },
    ],
  },

  "lead-management": {
    slug: "lead-management",
    name: "Lead Management",
    tagline: "Automated Ingestion, Smart Lead Scoring & Stage-Gated Sales Pipelines",
    badge: "PIPELINE & CONVERSION",
    category: "Sales & Growth",
    description:
      "Stop losing prospective buyers to slow response times. Ingest leads instantly from IndiaMART, TradeIndia, Facebook Ads, and website forms. Auto-allocate leads by territory, score by purchase intent, and guide your sales team through structured follow-up stages.",
    heroPreviewTitle: "Live Sales Pipeline & Lead Velocity Terminal",
    heroPreviewSubtitle: "Real-time B2B marketplace ingestion, automated sales rep allocation & follow-up trackers.",
    capabilities: [
      {
        title: "Instant Multi-Source Ingestion",
        desc: "Real-time webhooks ingest buyer inquiries from IndiaMART, TradeIndia, Justdial, Facebook Lead Ads, and website forms with zero latency.",
        icon: "Zap",
      },
      {
        title: "Intelligent Round-Robin Allocation",
        desc: "Automatically distribute incoming leads based on sales rep availability, product category specialization, or regional branch territories.",
        icon: "Workflow",
      },
      {
        title: "Automated WhatsApp & SMS Welcome",
        desc: "Trigger instant branded WhatsApp catalogs and SMS greetings to prospective buyers within 3 seconds of inquiry submission.",
        icon: "Send",
      },
      {
        title: "Visual Kanban Sales Pipeline",
        desc: "Drag-and-drop opportunity cards across customizable sales stages: New Inquiry → Technical Review → Quote Sent → Negotiation → Won.",
        icon: "Kanban",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Instant Ingestion & Deduplication",
        desc: "Inquiries captured from digital channels, scrubbed for duplicates, and enriched with location and company details in real time.",
      },
      {
        step: "02",
        title: "Smart Allocation & Instant Alert",
        desc: "Assigned sales rep receives a push notification on their mobile app with complete inquiry specifications and phone number.",
      },
      {
        step: "03",
        title: "Follow-Up Cadence & Escalations",
        desc: "Automated task reminders guide reps through timely calls. Inquiries untouched for over 2 hours escalate to branch managers.",
      },
    ],
    benefits: [
      {
        metric: "< 5 Mins",
        title: "First Response Speed",
        desc: "Reduce lead response time from hours to under five minutes, capturing buyers before competitors can respond.",
      },
      {
        metric: "+42%",
        title: "Pipeline Conversion Rate",
        desc: "Systematic follow-up alerts and guided sales stages prevent leads from going cold or slipping through the cracks.",
      },
      {
        metric: "0%",
        title: "Lead Leakage",
        desc: "Every buyer interaction is recorded. Leads cannot be deleted or concealed by individual sales representatives.",
      },
    ],
    connectedModules: [
      {
        module: "Quotation Management",
        howItConnects: "Convert qualified leads into formal GST quotations in one tap without retyping line items.",
      },
      {
        module: "Tasks & Planner",
        howItConnects: "Schedules calendar follow-up calls, sample demonstrations, and physical client meetings.",
      },
      {
        module: "Analytics & Reports",
        howItConnects: "Tracks channel ROI, sales conversion bottlenecks, and executive performance metrics.",
      },
    ],
    faqs: [
      {
        q: "How does the IndiaMART and TradeIndia integration work?",
        a: "RVM CRM integrates directly with the push API webhooks of IndiaMART and TradeIndia. The second a buyer clicks 'Send Inquiry', the record lands in your CRM with complete buyer requirements.",
      },
      {
        q: "Can managers set up alerts for delayed follow-ups?",
        a: "Yes. Managers can configure automated escalation rules: if a high-value lead is not contacted within 30 minutes, an automated SMS/app notification alerts the branch head.",
      },
      {
        q: "Can we customize the stages in the sales pipeline?",
        a: "Yes. You can add, edit, or reorder sales stages to match your exact commercial cycle (e.g. Drawing Approval, Lab Sample Testing, Commercial Tender, etc.).",
      },
    ],
  },

  "tasks-and-planner": {
    slug: "tasks-and-planner",
    name: "Tasks & Planner",
    tagline: "Daily Action Cadence, Client Meeting Schedules & Activity Reminders",
    badge: "WORKFORCE CADENCE",
    category: "Workforce & Field",
    description:
      "Equip your sales executives, field engineers, and operations staff with structured daily agendas. Schedule follow-ups, client visits, quotation reviews, and service tasks with automated calendar alerts and mobile notifications.",
    heroPreviewTitle: "Daily Team Planner & Activity Scheduler",
    heroPreviewSubtitle: "Calendar timelines, automated follow-up reminders & overdue task escalations.",
    capabilities: [
      {
        title: "Day-View & Week-View Planner",
        desc: "Unified visual schedule organizing morning client calls, afternoon site inspections, and evening quotation revisions.",
        icon: "CalendarDays",
      },
      {
        title: "Geo-Tagged Client Meeting Visits",
        desc: "Schedule physical client visits linked to Google Maps with automatic distance calculations and client arrival check-ins.",
        icon: "MapPin",
      },
      {
        title: "Automated Follow-up Escalations",
        desc: "Tasks automatically color-code red when overdue, sending supervisor alerts if critical deliverables remain pending.",
        icon: "BellRing",
      },
      {
        title: "Collaborative Team Delegation",
        desc: "Senior managers can delegate operational tasks, attach customer documents, and monitor completion status in real time.",
        icon: "Users",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Task Creation & Assignment",
        desc: "Tasks created automatically from lead follow-ups or manually assigned by team leads with due dates and priority tags.",
      },
      {
        step: "02",
        title: "Mobile Push Notifications",
        desc: "Field reps receive push notifications 15 minutes before scheduled meetings with client history and phone shortcuts.",
      },
      {
        step: "03",
        title: "Visit Outcome & Voice Notes",
        desc: "Employees mark tasks completed, record meeting outcome summaries, take voice notes, and schedule the next follow-up.",
      },
    ],
    benefits: [
      {
        metric: "100%",
        title: "Accountability",
        desc: "Every pending follow-up is transparently tracked. No promises made to prospective buyers are forgotten.",
      },
      {
        metric: "+30%",
        title: "Daily Productive Hours",
        desc: "Field personnel start their morning with a structured, pre-planned route and clear meeting priorities.",
      },
      {
        metric: "0",
        title: "Missed Commitments",
        desc: "Automated mobile notifications ensure sales quotes and service dispatches are delivered on schedule.",
      },
    ],
    connectedModules: [
      {
        module: "Contact Management",
        howItConnects: "All completed tasks and meeting minutes append permanently to the customer's account timeline.",
      },
      {
        module: "Attendance & Leaves",
        howItConnects: "Daily tasks are automatically synchronized with employee shift check-in and check-out logs.",
      },
      {
        module: "Expense Management",
        howItConnects: "Client site visits logged in Planner automatically populate travel distance for conveyance claims.",
      },
    ],
    faqs: [
      {
        q: "Can sales reps dictate meeting notes via voice instead of typing?",
        a: "Yes. The mobile app supports speech-to-text dictation, allowing field executives to dictate meeting notes immediately after stepping out of a client's office.",
      },
      {
        q: "Can managers view the calendar of their entire team in one screen?",
        a: "Yes. Team leads have a centralized Gantt/calendar view to monitor task distribution, workload balances, and physical visit schedules.",
      },
      {
        q: "Does the planner sync with Google Calendar or Outlook?",
        a: "Yes. Two-way calendar sync allows scheduled CRM tasks and client meetings to reflect on your Google Workspace or Microsoft 365 calendar.",
      },
    ],
  },

  "order-management": {
    slug: "order-management",
    name: "Order Management",
    tagline: "Purchase Order Verification, Stage-Gated Production & Delivery Tracking",
    badge: "OPERATIONAL EXECUTION",
    category: "Operations & Delivery",
    description:
      "Bridge the gap between sales promises and operational reality. Convert signed quotations into verified sales orders, manage advance payments, route orders to manufacturing and dispatch, and track customer delivery milestones.",
    heroPreviewTitle: "Sales Order Execution & Fulfillment Console",
    heroPreviewSubtitle: "PO verification, multi-stage order tracking, dispatch staging & delivery receipt sync.",
    capabilities: [
      {
        title: "One-Click Quote-to-Order Conversion",
        desc: "Convert won quotations directly into verified sales orders, locking prices, discounts, and promised delivery dates.",
        icon: "ShoppingBag",
      },
      {
        title: "Customer PO & Payment Verification",
        desc: "Attach customer purchase orders, verify advance payment receipts, and enforce managerial credit approval rules.",
        icon: "FileCheck",
      },
      {
        title: "Stage-Gated Dispatch Workflow",
        desc: "Track orders through: Order Approved → Drawing Verified → Production Ready → Packed → Dispatched → Delivered.",
        icon: "Truck",
      },
      {
        title: "Automated Customer WhatsApp Updates",
        desc: "Send automated dispatch notifications, transporter docket numbers, and tracking links directly to clients via WhatsApp.",
        icon: "Send",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Order Generation & Credit Check",
        desc: "Sales rep generates sales order from approved quote; system verifies advance payment and client credit ceiling.",
      },
      {
        step: "02",
        title: "Warehouse Allocation & Production",
        desc: "Inventory reserved automatically; production department receives item specifications and target completion dates.",
      },
      {
        step: "03",
        title: "Dispatch & Proof of Delivery",
        desc: "Logistics logs docket number; field engineer or customer provides digital signature on delivery confirmation.",
      },
    ],
    benefits: [
      {
        metric: "60%",
        title: "Faster Order Processing",
        desc: "Eliminate manual re-entry between sales, accounts, and factory dispatch departments.",
      },
      {
        metric: "100%",
        title: "Delivery Milestone Visibility",
        desc: "Both sales reps and customers know exact production status without making follow-up phone calls.",
      },
      {
        metric: "Zero",
        title: "Billing Discrepancies",
        desc: "Approved orders match final invoices exactly, avoiding dispute delays in commercial payment releases.",
      },
    ],
    connectedModules: [
      {
        module: "Inventory Management",
        howItConnects: "Instantly commits required raw materials and finished goods, preventing stockouts.",
      },
      {
        module: "Installation Management",
        howItConnects: "Triggers on-site machinery installation tickets as soon as goods are delivered.",
      },
      {
        module: "Finance & Accounts",
        howItConnects: "Pushes final tax invoices and delivery challans into Tally Prime or your core accounting ERP.",
      },
    ],
    faqs: [
      {
        q: "Can we attach customer Purchase Orders (POs) and tax exemption certificates?",
        a: "Yes. You can upload scanned PDF customer POs, advance payment bank transaction proofs, and tax exemption documents to each sales order.",
      },
      {
        q: "How does the system handle partial dispatches?",
        a: "RVM CRM supports split dispatches: you can generate separate delivery challans and partial invoices for items shipped across multiple consignments.",
      },
      {
        q: "Can clients track their order status online?",
        a: "Yes. Clients receive automated SMS and WhatsApp tracking links with real-time dispatch status, carrier details, and docket numbers.",
      },
    ],
  },

  "quotation-management": {
    slug: "quotation-management",
    name: "Quotation Management",
    tagline: "Professional GST Estimates, Margin Controls & 1-Click WhatsApp PDF Dispatch",
    badge: "COMMERCIAL CPQ",
    category: "Sales & Growth",
    description:
      "Generate clean, branded, GST-compliant quotations in under 90 seconds. Access dynamic item rate masters, enforce minimum gross margin thresholds, apply tiered discounts, and dispatch PDF estimates directly to customer WhatsApp and email.",
    heroPreviewTitle: "Commercial Quotation & CPQ Engine",
    heroPreviewSubtitle: "Dynamic price masters, CGST/SGST/IGST tax logic, version revisions & PDF export.",
    capabilities: [
      {
        title: "Instant PDF Generation with Branding",
        desc: "Produce professional multi-page proposals featuring company letterhead, terms, bank details, and digital signatures.",
        icon: "FileText",
      },
      {
        title: "Multi-Tiered GST & Tax Rules",
        desc: "Automatic calculation of CGST, SGST, IGST, and HSN codes based on customer state and product category.",
        icon: "Receipt",
      },
      {
        title: "Margin Thresholds & Discount Approval",
        desc: "Enforce automated discount caps: quotations exceeding permissible margins trigger senior management approval workflows.",
        icon: "ShieldAlert",
      },
      {
        title: "Version Control & Revision History",
        desc: "Track multiple quotation versions (v1, v2, v3) without overwriting original negotiations or pricing concessions.",
        icon: "RefreshCw",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Item Selection & Margin Review",
        desc: "Sales rep selects products from catalog; system auto-populates list price, HSN code, and calculates margin.",
      },
      {
        step: "02",
        title: "Automated Approval (If Required)",
        desc: "Quotes exceeding standard discount tiers route instantly to sales directors for one-click mobile approval.",
      },
      {
        step: "03",
        title: "1-Click PDF Dispatch & Tracking",
        desc: "Quotation dispatches to customer WhatsApp and email. System tracks when the customer opens the proposal.",
      },
    ],
    benefits: [
      {
        metric: "90 Secs",
        title: "Quotation Generation Time",
        desc: "Cut quote drafting time from 45 minutes of manual Excel work down to 90 seconds on desktop or mobile.",
      },
      {
        metric: "+18%",
        title: "Gross Margin Protection",
        desc: "Prevent unauthorized price drops with strict margin rules and mandatory managerial approval triggers.",
      },
      {
        metric: "100%",
        title: "GST & Legal Compliance",
        desc: "Zero errors in tax split calculations, HSN codes, or client billing state codes.",
      },
    ],
    connectedModules: [
      {
        module: "Lead Management",
        howItConnects: "Generates quotes directly from open sales opportunities without re-entering client specifications.",
      },
      {
        module: "Order Management",
        howItConnects: "Approved quotations convert into sales orders with one click, preserving agreed commercial terms.",
      },
      {
        module: "Inventory Management",
        howItConnects: "Checks real-time inventory availability and estimated lead times during quote creation.",
      },
    ],
    faqs: [
      {
        q: "Can we customize the quotation template to match our company branding?",
        a: "Yes. You can customize headers, footers, logos, payment terms, bank details, authorized signatory signatures, and company stamps.",
      },
      {
        q: "Can sales reps send quotations while visiting clients in the field?",
        a: "Yes. Sales executives can generate and dispatch formal PDF quotes directly from the RVM CRM mobile app during client meetings.",
      },
      {
        q: "What happens when a customer requests changes to an existing quotation?",
        a: "You can create a new version (e.g. QT-1024-R1) in one click. The system preserves full version history for historical audit trails.",
      },
    ],
  },

  "amc-management": {
    slug: "amc-management",
    name: "AMC Management",
    tagline: "Annual Maintenance Contracts, Automated Renewals & Preventive Service Schedules",
    badge: "CONTRACTS & RECURRING REVENUE",
    category: "Operations & Delivery",
    description:
      "Turn post-sales service into a reliable recurring revenue stream. Track equipment warranties, scheduled preventive maintenance (PPM) visits, contract expirations, and automated renewal proposals with zero administrative overhead.",
    heroPreviewTitle: "AMC Contract & Preventive Maintenance Terminal",
    heroPreviewSubtitle: "Equipment serial tracking, automated PPM schedules & recurring contract renewal alerts.",
    capabilities: [
      {
        title: "Machine Serial & Asset Dossiers",
        desc: "Maintain detailed equipment records including serial numbers, installation dates, warranty validity, and client location.",
        icon: "Wrench",
      },
      {
        title: "Automated Preventive Maintenance (PPM)",
        desc: "System auto-generates periodic maintenance service visits (monthly, quarterly) and assigns service engineers.",
        icon: "CalendarDays",
      },
      {
        title: "Automated 60/30/15-Day Renewal Alerts",
        desc: "Automated renewal alerts trigger prior to contract expiry, delivering custom renewal proposals via WhatsApp.",
        icon: "BellRing",
      },
      {
        title: "Spare Parts Consumption Tracking",
        desc: "Track which spare parts are covered under Comprehensive AMC vs. Non-Comprehensive billing terms.",
        icon: "Package",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Contract Onboarding & Asset Tagging",
        desc: "Assets registered with serial numbers, warranty terms, and agreed PPM frequency upon commissioning.",
      },
      {
        step: "02",
        title: "PPM Auto-Scheduling & Dispatch",
        desc: "Maintenance visits automatically land in field service technicians' mobile task calendars.",
      },
      {
        step: "03",
        title: "Digital Service Sign-Off & Renewal",
        desc: "Client signs digital job-sheet on mobile; system auto-triggers renewal quotations before contract expiry.",
      },
    ],
    benefits: [
      {
        metric: "+40%",
        title: "Contract Renewal Rate",
        desc: "Never lose high-margin maintenance contracts due to forgotten expiry dates or delayed renewal follow-ups.",
      },
      {
        metric: "100%",
        title: "PPM SLA Compliance",
        desc: "Meet preventive maintenance service commitments consistently, boosting client satisfaction and equipment uptime.",
      },
      {
        metric: "Zero",
        title: "Unbilled Spare Parts",
        desc: "Accurately differentiate between contract-covered parts and billable consumables during field visits.",
      },
    ],
    connectedModules: [
      {
        module: "Complaints & Ticket Management",
        howItConnects: "System instantly validates if an incoming breakdown call is covered under an active AMC contract.",
      },
      {
        module: "Inventory Management",
        howItConnects: "Deducts replacement spare parts consumed during service calls directly from technician van inventory.",
      },
      {
        module: "Finance & Accounts",
        howItConnects: "Generates recurring AMC renewal invoices and synchronizes billing milestones with Tally Prime.",
      },
    ],
    faqs: [
      {
        q: "Can RVM CRM handle both Comprehensive and Non-Comprehensive AMC contracts?",
        a: "Yes. You can specify whether parts, labor, emergency call-outs, and consumables are covered or billed separately on each contract.",
      },
      {
        q: "How does the customer sign off on completed maintenance visits?",
        a: "Field technicians collect the customer's digital signature and site photos on the mobile app, instantly generating a PDF service report.",
      },
      {
        q: "Can we track machinery installed across multiple client branches?",
        a: "Yes. You can manage multi-site equipment fleets with branch-specific asset tagging, local contact persons, and assigned service engineers.",
      },
    ],
  },

  "complaints-and-ticket-management": {
    slug: "complaints-and-ticket-management",
    name: "Complaints & Ticket Management",
    tagline: "Omnichannel Helpdesk, GPS Field Dispatch & Strict SLA Resolution Tracking",
    badge: "SERVICE EXCELLENCE",
    category: "Operations & Delivery",
    description:
      "Resolve customer complaints with speed and accountability. Ingest tickets from WhatsApp, phone, and web forms. Auto-assign tickets to the nearest certified field engineer based on live GPS location, enforce resolution SLAs, and collect digital client feedback.",
    heroPreviewTitle: "Omnichannel Service Helpdesk & Dispatch Terminal",
    heroPreviewSubtitle: "Live ticket queues, technician GPS geofencing, SLA countdowns & digital sign-offs.",
    capabilities: [
      {
        title: "Omnichannel Ticket Ingestion",
        desc: "Customer complaints registered instantly via WhatsApp chatbots, phone calls, web portals, or internal sales transfers.",
        icon: "MessagesSquare",
      },
      {
        title: "Proximity-Based Engineer Dispatch",
        desc: "Assign service requests to the closest available field technician based on live GPS location and technical skill set.",
        icon: "MapPin",
      },
      {
        title: "SLA Priority Timers & Escalations",
        desc: "Automated countdown timers for Severity-1 to Severity-4 tickets with multi-level supervisor escalation alerts.",
        icon: "Timer",
      },
      {
        title: "Digital Job Sheets & Customer Signatures",
        desc: "Field engineers upload machine photos, log corrective actions, and capture client OTP or digital signatures on-site.",
        icon: "PenTool",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Complaint Logging & Triage",
        desc: "Ticket logged with breakdown symptoms, priority tier, and associated machine serial number.",
      },
      {
        step: "02",
        title: "Field Dispatch & Live Tracking",
        desc: "Assigned technician receives mobile job alert; customer receives live technician arrival estimate.",
      },
      {
        step: "03",
        title: "Resolution, Spare Logs & Rating",
        desc: "Technician documents replacement spares, completes inspection checklist, and collects client satisfaction rating.",
      },
    ],
    benefits: [
      {
        metric: "45%",
        title: "Faster Mean Time to Resolution (MTTR)",
        desc: "Eliminate phone tag between dispatchers and field staff. Engineers receive instant job coordinates on mobile.",
      },
      {
        metric: "98.5%",
        title: "SLA Adherence Rate",
        desc: "Automated escalation triggers ensure critical enterprise complaints are acknowledged and addressed within hours.",
      },
      {
        metric: "4.8/5",
        title: "Customer Satisfaction",
        desc: "Instant WhatsApp status updates and professional digital service receipts build lasting client trust.",
      },
    ],
    connectedModules: [
      {
        module: "AMC Management",
        howItConnects: "Validates warranty coverage and logs breakdown frequencies against specific machine serials.",
      },
      {
        module: "Inventory Management",
        howItConnects: "Tracks spare parts utilized by service technicians, triggering restock requests for service vans.",
      },
      {
        module: "Attendance & Leaves",
        howItConnects: "Routes emergency tickets only to technicians who are currently clocked in and actively on shift.",
      },
    ],
    faqs: [
      {
        q: "Can customers log complaints directly via WhatsApp?",
        a: "Yes. Customers can send a WhatsApp message to your official business number, triggering an automated bot that logs the ticket and returns a tracking number.",
      },
      {
        q: "How are field technicians notified of new service tickets?",
        a: "Technicians receive push notifications with sound alerts on their mobile app, displaying the client address, contact person, and problem description.",
      },
      {
        q: "Can we capture before-and-after photos of machine repairs?",
        a: "Yes. Field engineers can capture and attach high-resolution site photos directly to the digital job sheet before closing the ticket.",
      },
    ],
  },

  "installation-management": {
    slug: "installation-management",
    name: "Installation Management",
    tagline: "Site Readiness Audits, Machine Commissioning & Digital Handover Sign-Offs",
    badge: "FIELD COMMISSIONING",
    category: "Operations & Delivery",
    description:
      "Ensure flawless product commissioning and client handovers. Coordinate pre-installation site readiness checks, deploy technical commissioning teams, complete digital inspection checklists, and secure verified customer sign-offs.",
    heroPreviewTitle: "Project Commissioning & Site Readiness Console",
    heroPreviewSubtitle: "Pre-installation audits, technician assignments, digital checklists & handover certificates.",
    capabilities: [
      {
        title: "Pre-Installation Readiness Checklists",
        desc: "Verify site civil work, electrical loads, and pneumatic connections prior to equipment dispatch to avoid abortive trips.",
        icon: "FileCheck",
      },
      {
        title: "Multi-Day Project Commissioning",
        desc: "Track complex, multi-day installation projects with milestone-based progress tracking and daily site logs.",
        icon: "Kanban",
      },
      {
        title: "Digital Handover & Commissioning Reports",
        desc: "Generate professional installation certificates complete with site photographs, serial numbers, and client signatures.",
        icon: "CheckCircle",
      },
      {
        title: "Warranty & AMC Kickoff Automation",
        desc: "Successful commissioning automatically triggers the warranty period and schedules first preventive maintenance visits.",
        icon: "Sparkles",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Order Dispatch & Readiness Audit",
        desc: "Client receives pre-installation checklist; field engineer conducts site inspection to confirm power and foundation.",
      },
      {
        step: "02",
        title: "On-Site Assembly & Testing",
        desc: "Technicians execute standard operating procedure (SOP) calibration steps and trial production runs.",
      },
      {
        step: "03",
        title: "Customer Training & Sign-Off",
        desc: "Operators trained on machinery; client director signs digital installation certificate on technician's mobile device.",
      },
    ],
    benefits: [
      {
        metric: "0",
        title: "Abortive Site Visits",
        desc: "Pre-installation verification ensures technical teams travel only when customer infrastructure is 100% prepared.",
      },
      {
        metric: "50%",
        title: "Faster Handover Cycles",
        desc: "Standardized digital checklists eliminate missing paperwork and accelerate commercial milestone sign-offs.",
      },
      {
        metric: "100%",
        title: "Audit Compliance",
        desc: "Every installation certificate, test log, and operator training sheet is permanently archived on the client dossier.",
      },
    ],
    connectedModules: [
      {
        module: "Order Management",
        howItConnects: "Installation projects trigger automatically upon successful warehouse dispatch and client delivery.",
      },
      {
        module: "AMC Management",
        howItConnects: "Commissioning date initializes equipment warranty and schedules subsequent preventive service visits.",
      },
      {
        module: "Finance & Accounts",
        howItConnects: "Signed installation certificates trigger final commercial retention billing and invoice release.",
      },
    ],
    faqs: [
      {
        q: "Can our engineers use the installation module without active internet at remote client factories?",
        a: "Yes. The mobile app works in full offline mode: engineers can fill checklists, record test readings, and capture photos. Data auto-syncs when internet restores.",
      },
      {
        q: "Can we create custom commissioning checklists for different machine models?",
        a: "Yes. You can define unique technical inspection checklists, testing tolerances, and safety protocols for each product category.",
      },
      {
        q: "Does the system generate a formal Commissioning Certificate for the client?",
        a: "Yes. A branded PDF Commissioning Certificate with company seal, engineer signatures, and photos is auto-generated upon sign-off.",
      },
    ],
  },

  "expense-management": {
    slug: "expense-management",
    name: "Expense Management",
    tagline: "GPS Distance Conveyance, Bill Scanning & Multi-Tier Approval Workflows",
    badge: "FINANCIAL CONTROLS",
    category: "Finance & Intelligence",
    description:
      "Eliminate fake travel claims and tedious receipt paperwork. RVM CRM automatically calculates field travel conveyance based on actual GPS distance traversed, lets staff scan bills with their mobile cameras, and routes claims through customized manager approval workflows.",
    heroPreviewTitle: "Field Conveyance & Employee Expense Console",
    heroPreviewSubtitle: "GPS odometer distance claims, receipt OCR scanning, policy limits & payout approvals.",
    capabilities: [
      {
        title: "GPS-Verified Distance Calculation",
        desc: "Auto-computes travel distance traversed between verified customer visits, applying your company's per-km vehicle allowance rate.",
        icon: "Navigation",
      },
      {
        title: "Mobile Receipt & Bill Capture",
        desc: "Employees snap photos of hotel bills, fuel slips, and food receipts with their mobile cameras; auto-crops and attaches to claim.",
        icon: "Receipt",
      },
      {
        title: "Policy Limits & Exception Flags",
        desc: "Enforce daily per-diem caps and travel grade entitlements; expenditures exceeding policy limits are automatically flagged.",
        icon: "ShieldAlert",
      },
      {
        title: "Multi-Level Manager Approval",
        desc: "Claims route to reporting managers and finance controllers for quick 1-click approvals with full audit trails.",
        icon: "CheckCheck",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Automatic Distance & Receipt Entry",
        desc: "GPS logs daily meeting routes; employee uploads incidental expense receipts and submits claim at day's end.",
      },
      {
        step: "02",
        title: "Automated Policy Validation",
        desc: "System verifies claims against company per-diem limits, checking for duplicate receipts or route deviations.",
      },
      {
        step: "03",
        title: "Manager Approval & Payout Sync",
        desc: "Manager approves on mobile; finance team exports approved expense summaries directly for payroll disbursement.",
      },
    ],
    benefits: [
      {
        metric: "35%",
        title: "Reduction in Travel Costs",
        desc: "GPS-verified route calculations eliminate inflated manual odometer claims and fabricated travel vouchers.",
      },
      {
        metric: "75%",
        title: "Faster Reimbursement Turnaround",
        desc: "Employees receive reimbursements in days rather than waiting weeks for paper vouchers to clear accounting.",
      },
      {
        metric: "100%",
        title: "Digital Receipt Auditing",
        desc: "All fuel slips, toll receipts, and lodging bills are digitally indexed and tax-compliant for financial audits.",
      },
    ],
    connectedModules: [
      {
        module: "Attendance & Leaves",
        howItConnects: "Validates expense claims strictly against active shift check-ins and recorded working hours.",
      },
      {
        module: "Tasks & Planner",
        howItConnects: "Cross-references travel conveyance claims against verified client site visits logged in the planner.",
      },
      {
        module: "Finance & Accounts",
        howItConnects: "Posts approved employee expense vouchers directly into Tally Prime or your company accounting ledger.",
      },
    ],
    faqs: [
      {
        q: "How does GPS distance tracking work for two-wheeler and four-wheeler conveyance?",
        a: "Managers set per-kilometer rates for two-wheelers (e.g. ₹5/km) and four-wheelers (e.g. ₹10/km). The app calculates actual distance between verified client visits and auto-generates the allowance.",
      },
      {
        q: "Can managers reject or edit individual expense items in a claim?",
        a: "Yes. Managers can approve specific items, reject non-compliant bills with written feedback, or adjust amounts before approving.",
      },
      {
        q: "Can we export approved expenses for bank payroll payouts?",
        a: "Yes. Finance teams can download comprehensive Excel/CSV payout sheets formatted for bulk bank NEFT/RTGS transfers.",
      },
    ],
  },

  "inventory-management": {
    slug: "inventory-management",
    name: "Inventory Management",
    tagline: "Multi-Warehouse Tracking, Serial/Batch Management & Low-Stock Alerts",
    badge: "SUPPLY CHAIN & ASSETS",
    category: "Operations & Delivery",
    description:
      "Maintain 100% visibility over warehouse stock, raw materials, service van spare parts, and customer consignments. Track batch numbers, monitor minimum reorder thresholds, and automate stock debiting upon sales order dispatch.",
    heroPreviewTitle: "Multi-Warehouse & Spare Parts Stock Terminal",
    heroPreviewSubtitle: "Depot stock visibility, technician van inventory, serial/batch tracking & low-stock alerts.",
    capabilities: [
      {
        title: "Multi-Depot & Van Stock Tracking",
        desc: "Monitor inventory levels across main manufacturing plants, regional branch warehouses, and field technician service vans.",
        icon: "Package",
      },
      {
        title: "Serial & Batch Tracking",
        desc: "Track high-value equipment and machinery parts by unique serial number, barcode, manufacturing date, and batch code.",
        icon: "QrCode",
      },
      {
        title: "Automated Low-Stock & Reorder Alerts",
        desc: "Set minimum buffer thresholds: automated notifications alert purchase teams before stockouts interrupt production or service.",
        icon: "BellRing",
      },
      {
        title: "Stock Transfer Challans (STN)",
        desc: "Manage inter-warehouse stock transfers with transit tracking, delivery challans, and destination acknowledgment.",
        icon: "Truck",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Goods Receipt & Barcode Tagging",
        desc: "Inward stock inspected against purchase orders; items tagged with serial/batch barcodes and assigned to warehouse bins.",
      },
      {
        step: "02",
        title: "Order Allocation & Van Issuance",
        desc: "Stock automatically reserved for confirmed sales orders or issued to field service technicians for client repairs.",
      },
      {
        step: "03",
        title: "Real-Time Stock Debiting & Audit",
        desc: "Delivery or service completion automatically debits stock; low buffer levels trigger automated procurement notices.",
      },
    ],
    benefits: [
      {
        metric: "100%",
        title: "Real-Time Stock Visibility",
        desc: "Sales reps check live inventory availability on mobile before committing delivery lead times to clients.",
      },
      {
        metric: "-25%",
        title: "Carrying Cost Reduction",
        desc: "Optimize working capital by identifying slow-moving items and preventing accidental over-procurement.",
      },
      {
        metric: "Zero",
        title: "Unaccounted Spare Leakage",
        desc: "Technician van stock is strictly audited against closed customer service tickets and digital job sheets.",
      },
    ],
    connectedModules: [
      {
        module: "Order Management",
        howItConnects: "Automatically reserves stock upon order confirmation and debits inventory upon dispatch challan creation.",
      },
      {
        module: "Complaints & Ticket Management",
        howItConnects: "Tracks spare parts utilized by service technicians on client machinery, updating van stock in real time.",
      },
      {
        module: "Finance & Accounts",
        howItConnects: "Synchronizes stock valuation, inventory ledgers, and purchase vouchers directly with Tally Prime.",
      },
    ],
    faqs: [
      {
        q: "Can sales representatives see stock availability while creating a quotation?",
        a: "Yes. While adding products to a quote, sales reps can see live available quantities across all branch warehouses.",
      },
      {
        q: "How does the system track spare parts carried by service technicians?",
        a: "Each technician's vehicle is treated as a mobile mini-warehouse. Parts issued to the technician are tracked, and debited only when logged on a completed ticket.",
      },
      {
        q: "Can we scan product barcodes using smartphone cameras?",
        a: "Yes. The mobile app utilizes the device camera to scan standard 1D barcodes and 2D QR codes for instant item lookup and stock inwarding.",
      },
    ],
  },

  "marketing-management": {
    slug: "marketing-management",
    name: "Marketing Management",
    tagline: "Targeted WhatsApp Campaigns, Email Broadcasts & Campaign ROI Analytics",
    badge: "DEMAND GENERATION",
    category: "Sales & Growth",
    description:
      "Run targeted marketing campaigns that convert. Broadcast rich WhatsApp messages, send personalized email newsletters, track click-through rates, and measure exact revenue attribution for every rupee spent on marketing.",
    heroPreviewTitle: "Omnichannel Campaign & Demand Generation Console",
    heroPreviewSubtitle: "WhatsApp Cloud broadcasts, segmented email drip sequences & direct revenue attribution.",
    capabilities: [
      {
        title: "Official WhatsApp Cloud Broadcasts",
        desc: "Send approved WhatsApp templates featuring rich media, PDF product brochures, and interactive quick-reply buttons.",
        icon: "MessagesSquare",
      },
      {
        title: "Audience Segmentation Engine",
        desc: "Filter audiences by past purchase history, geographic state, industry vertical, and AMC renewal dates for hyper-relevant messaging.",
        icon: "Users",
      },
      {
        title: "Automated Email Drip Sequences",
        desc: "Nurture cold prospects with automated educational email workflows triggered by specific user actions or inquiry stages.",
        icon: "Send",
      },
      {
        title: "Closed-Loop Campaign ROI Tracking",
        desc: "Track exact revenue generated by each marketing campaign from initial broadcast through closed sales orders.",
        icon: "BarChart3",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Audience Filter & Segment",
        desc: "Define target client list based on specific criteria (e.g. all Pharma clients in Gujarat with expiring warranties).",
      },
      {
        step: "02",
        title: "Template Design & Approval",
        desc: "Compose message with dynamic personalization tags (Client Name, Product Interest) and dispatch via official APIs.",
      },
      {
        step: "03",
        title: "Engagement Tracking & Lead Ingestion",
        desc: "Customer responses automatically ingest as active hot leads assigned to sales representatives for immediate outreach.",
      },
    ],
    benefits: [
      {
        metric: "98%",
        title: "WhatsApp Open Rate",
        desc: "Engage prospective buyers on their preferred messaging channel with 5x higher engagement than traditional cold emails.",
      },
      {
        metric: "+28%",
        title: "Repeat Order Generation",
        desc: "Keep existing clients engaged with seasonal product launches, discount offers, and maintenance reminders.",
      },
      {
        metric: "100%",
        title: "Campaign Attribution",
        desc: "Know exactly which marketing initiatives generate profitable sales orders and which channels to discontinue.",
      },
    ],
    connectedModules: [
      {
        module: "Contact Management",
        howItConnects: "Uses centralized customer contact lists and tags to build precision marketing audience filters.",
      },
      {
        module: "Lead Management",
        howItConnects: "Replies to broadcast campaigns convert instantly into active sales leads assigned to reps.",
      },
      {
        module: "Analytics & Reports",
        howItConnects: "Delivers comprehensive analytics on delivery rates, read rates, and closed revenue per campaign.",
      },
    ],
    faqs: [
      {
        q: "Does RVM CRM support official WhatsApp Business API templates?",
        a: "Yes. RVM CRM integrates with the official Meta WhatsApp Cloud API, supporting verified green-tick sender profiles and pre-approved DLT templates.",
      },
      {
        q: "Can we schedule campaigns to trigger on specific dates and times?",
        a: "Yes. You can schedule broadcasts in advance or configure event-triggered automations (e.g. 30 days before AMC contract expiration).",
      },
      {
        q: "Is there a risk of our WhatsApp number getting banned for bulk messaging?",
        a: "No. By using official WhatsApp Cloud API templates with opt-out mechanisms and rate-limited dispatching, your business phone number remains 100% compliant and secure.",
      },
    ],
  },

  "finance-and-accounts": {
    slug: "finance-and-accounts",
    name: "Finance & Accounts",
    tagline: "Two-Way Tally Prime Bridge, Outstanding Collections & Payment Gateways",
    badge: "FINANCIAL GOVERNANCE",
    category: "Finance & Intelligence",
    description:
      "Bridge the disconnect between commercial sales and your finance department. Synchronize ledgers, GST tax invoices, and payment receipts with Tally Prime in real time. Track overdue customer balances, automate collection reminders, and collect payments via UPI.",
    heroPreviewTitle: "Commercial Finance & Tally Integration Console",
    heroPreviewSubtitle: "Two-way Tally ledger sync, outstanding aging reports, payment links & tax compliance.",
    capabilities: [
      {
        title: "Two-Way Tally Prime Synchronization",
        desc: "Synchronize client master ledgers, approved sales vouchers, GST tax invoices, and payment receipts bi-directionally.",
        icon: "Landmark",
      },
      {
        title: "Outstanding Receivables & Aging Buckets",
        desc: "Monitor overdue receivables categorized into 0–30, 31–60, 61–90, and 90+ day aging buckets with debtor risk scoring.",
        icon: "Clock",
      },
      {
        title: "Automated Payment Follow-Up Reminders",
        desc: "Send polite automated payment reminder statements with attached invoice PDFs to client finance departments via WhatsApp.",
        icon: "BellRing",
      },
      {
        title: "Integrated UPI & Dynamic Payment Links",
        desc: "Embed dynamic Razorpay/UPI QR codes on invoices for instant customer settlement with automated ledger reconciliation.",
        icon: "CreditCard",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Invoice Generation & Tally Push",
        desc: "Approved sales order or service job sheet generates GST invoice; pushes seamlessly into Tally Prime ledger.",
      },
      {
        step: "02",
        title: "Outstanding Aging Tracking",
        desc: "System tracks credit periods; alerts sales executives before client credit limits are exceeded.",
      },
      {
        step: "03",
        title: "Payment Receipt & Auto-Reconcile",
        desc: "Customer settles via UPI or bank transfer; receipt automatically updates CRM and closes pending dues in Tally.",
      },
    ],
    benefits: [
      {
        metric: "-35%",
        title: "Reduction in Days Sales Outstanding (DSO)",
        desc: "Accelerate cash flow collections with automated WhatsApp balance reminders and instant UPI payment links.",
      },
      {
        metric: "100%",
        title: "Double-Entry Elimination",
        desc: "Accounts staff never have to manually re-type sales invoices, customer addresses, or item tax rates into Tally.",
      },
      {
        metric: "Zero",
        title: "Credit Limit Violations",
        desc: "System automatically blocks new quotations or order dispatches for customers with overdue unpaid balances.",
      },
    ],
    connectedModules: [
      {
        module: "Order Management",
        howItConnects: "Generates final tax invoices upon confirmed delivery, ensuring commercial terms match billing.",
      },
      {
        module: "Quotation Management",
        howItConnects: "Alerts sales representatives if a prospective client currently has disputed or overdue payments.",
      },
      {
        module: "Expense Management",
        howItConnects: "Pushes approved employee conveyance and travel vouchers directly into expense ledgers.",
      },
    ],
    faqs: [
      {
        q: "Does the Tally integration require complex third-party software?",
        a: "No. RVM CRM features a direct, lightweight XML sync connector that works seamlessly with Tally Prime and Tally.ERP 9.",
      },
      {
        q: "Can sales executives view customer payment status on their mobile app?",
        a: "Yes. Sales reps can check whether a client has settled previous invoices before negotiating new orders or visiting the client.",
      },
      {
        q: "Can we configure different credit limits for different customers?",
        a: "Yes. You can assign specific credit limits (e.g. ₹5 Lakhs) and payment terms (e.g. Net 30 Days) to each corporate customer account.",
      },
    ],
  },

  "attendance-and-leaves": {
    slug: "attendance-and-leaves",
    name: "Attendance & Leaves",
    tagline: "Geofenced Mobile Punch-In, Shift Rosters & Payroll-Ready Leave Tracking",
    badge: "WORKFORCE HRMS",
    category: "Workforce & Field",
    description:
      "Modernize staff attendance for both office staff and field personnel. Capture GPS-verified mobile check-ins, configure geofenced office premises, manage shift rosters, track sick/casual leave applications, and export payroll-ready attendance reports in one click.",
    heroPreviewTitle: "Workforce Geo-Attendance & Leave Terminal",
    heroPreviewSubtitle: "GPS check-in logs, branch geofencing, leave approval workflows & payroll calculations.",
    capabilities: [
      {
        title: "Geofenced Mobile Punch In & Out",
        desc: "Capture verified attendance with precise GPS coordinates, preventing proxy attendance and unauthorized off-site punches.",
        icon: "MapPin",
      },
      {
        title: "Shift Scheduling & Overtime Tracking",
        desc: "Configure rotational shifts, night rosters, lunch break intervals, and automatic overtime calculations for plant staff.",
        icon: "Clock",
      },
      {
        title: "Paperless Leave Applications & Approvals",
        desc: "Employees apply for Casual, Sick, or Earned leaves via mobile app; managers approve with 1-tap notifications.",
        icon: "FileCheck",
      },
      {
        title: "1-Click Payroll-Ready Attendance Export",
        desc: "Generate monthly salary-ready attendance registers including total days present, half-days, leaves, and overtime.",
        icon: "FileSpreadsheet",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Mobile Punch-In & Geo-Validation",
        desc: "Employee punches in on mobile app; system verifies GPS coordinates against branch boundaries or assigned field territory.",
      },
      {
        step: "02",
        title: "Shift Tracking & Movement Logs",
        desc: "System tracks active working hours, client visits completed, and automatically clocks out at end-of-shift.",
      },
      {
        step: "03",
        title: "Monthly Payroll Calculation",
        desc: "Attendance, approved leaves, and overtime hours automatically compile into a standardized monthly salary report.",
      },
    ],
    benefits: [
      {
        metric: "100%",
        title: "Attendance Accuracy",
        desc: "Completely eliminate buddy punching and paper attendance registers across all your branches and factories.",
      },
      {
        metric: "90%",
        title: "Time Saved on Payroll Processing",
        desc: "HR managers generate monthly attendance summaries in 2 minutes instead of manually tallying register books.",
      },
      {
        metric: "0",
        title: "Off-Shift Privacy Invasions",
        desc: "Location tracking activates strictly between Check-In and Check-Out, safeguarding employee personal privacy.",
      },
    ],
    connectedModules: [
      {
        module: "Tasks & Planner",
        howItConnects: "Ensures tasks are assigned only to staff who are actively present on shift and not on scheduled leave.",
      },
      {
        module: "Expense Management",
        howItConnects: "Validates travel conveyance claims strictly against verified working shift attendance logs.",
      },
      {
        module: "Complaints & Ticket Management",
        howItConnects: "Dispatches emergency breakdown service calls only to field technicians currently on duty.",
      },
    ],
    faqs: [
      {
        q: "Does the mobile check-in require expensive biometric hardware?",
        a: "No. Employees use their own smartphones. The app captures GPS coordinates and time stamps, eliminating hardware maintenance costs.",
      },
      {
        q: "What happens if an employee forgets to check out at the end of their shift?",
        a: "The system can be configured to auto-checkout after maximum shift duration, or notify the employee and reporting manager to submit an attendance regularization request.",
      },
      {
        q: "Can we define different leave policies for office staff versus factory workers?",
        a: "Yes. You can configure multiple leave policy rules, custom leave quotas (Sick, Casual, Earned), and approval hierarchies based on employee grade.",
      },
    ],
  },

  "analytics-and-reports": {
    slug: "analytics-and-reports",
    name: "Analytics & Reports",
    tagline: "Executive BI Dashboards, Sales Funnel Analytics & Operational Reports",
    badge: "BUSINESS INTELLIGENCE",
    category: "Finance & Intelligence",
    description:
      "Transform raw operational data into actionable business intelligence. Monitor company revenue trends, sales team conversion velocities, field engineer performance, inventory turnover rates, and customer service SLA compliance with visual real-time charts.",
    heroPreviewTitle: "Executive Business Intelligence Command Center",
    heroPreviewSubtitle: "Real-time revenue metrics, team performance leaderboards & automated scheduled PDF reports.",
    capabilities: [
      {
        title: "Real-Time Executive Dashboards",
        desc: "High-level overview of active pipeline value, closed revenue, pending service tickets, and team attendance on one screen.",
        icon: "LineChart",
      },
      {
        title: "Sales Funnel & Conversion Analytics",
        desc: "Identify conversion drop-offs across lead stages, average deal sizes, and salesperson win-rates by product category.",
        icon: "BarChart3",
      },
      {
        title: "Field Workforce Leaderboards",
        desc: "Evaluate sales rep and service engineer productivity based on client visits completed, revenue generated, and ticket MTTR.",
        icon: "Users",
      },
      {
        title: "Automated Daily & Weekly Email Reports",
        desc: "Schedule automated PDF performance summaries delivered to directors and department heads every morning at 9:00 AM.",
        icon: "MailCheck",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Cross-Departmental Data Ingestion",
        desc: "Data from sales, inventory, service, and attendance streams continuously into central analytics warehouse.",
      },
      {
        step: "02",
        title: "Interactive Filtering & Drill-Down",
        desc: "Filter reports by branch, product category, sales representative, or fiscal quarter with instant visual chart updates.",
      },
      {
        step: "03",
        title: "Automated Insights & Export",
        desc: "Export raw data to Excel for board meetings or receive automated alert summaries for metrics deviating from targets.",
      },
    ],
    benefits: [
      {
        metric: "100%",
        title: "Real-Time Data Visibility",
        desc: "Directors review live company performance numbers without waiting days for assistants to prepare manual spreadsheets.",
      },
      {
        metric: "+22%",
        title: "Sales Team Productivity",
        desc: "Transparent team leaderboards and deal velocity metrics motivate sales representatives to achieve targets.",
      },
      {
        metric: "Zero",
        title: "Data Blindspots",
        desc: "Identify declining product margins, chronic equipment failures, or delayed collections before they impact profits.",
      },
    ],
    connectedModules: [
      {
        module: "Lead Management",
        howItConnects: "Analyzes lead channel ROI, inquiry velocity, and salesperson conversion ratios.",
      },
      {
        module: "Complaints & Ticket Management",
        howItConnects: "Tracks service SLA compliance percentages, technician resolution speeds, and recurring machine defects.",
      },
      {
        module: "Finance & Accounts",
        howItConnects: "Visualizes cash flow projections, outstanding collection aging curves, and revenue growth by vertical.",
      },
    ],
    faqs: [
      {
        q: "Can different department managers have access to different dashboards?",
        a: "Yes. Role-based permissions ensure the Sales Head views pipeline metrics, the Service Head views ticket SLAs, and the Managing Director sees complete company financials.",
      },
      {
        q: "Can we export reports to Excel and PDF for board meetings?",
        a: "Yes. All visual charts and detailed transaction logs can be exported in one click to high-resolution PDF or raw Excel format.",
      },
      {
        q: "Does the system support custom report building?",
        a: "Yes. Administrators can build custom tabular and graphical reports selecting specific metrics, dimensions, date filters, and grouping rules.",
      },
    ],
  },
}
