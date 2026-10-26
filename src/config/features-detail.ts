export interface FeatureDetail {
  slug: string
  name: string
  tagline: string
  badge: string
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

export const featuresDetailData: Record<string, FeatureDetail> = {
  "check-in-and-check-out": {
    slug: "check-in-and-check-out",
    name: "Check-In & Check-Out",
    tagline: "GPS-Verified Field Attendance & Real-Time Working Hours",
    badge: "WORKFORCE & ATTENDANCE",
    description:
      "Eliminate manual registers and proxy attendance. RVM CRM's Geo-Check-In captures employee location, timestamps, and visit confirmations directly through the mobile app, providing complete transparency for field and office staff.",
    heroPreviewTitle: "Field Geo-Attendance Live Terminal",
    heroPreviewSubtitle: "GPS-stamped daily shift logs, geofenced customer visits & instant manager alerts.",
    capabilities: [
      {
        title: "Geo-Fenced Punch In & Out",
        desc: "Ensure attendance is recorded strictly within authorized office boundaries or client plant premises with high-accuracy GPS coordinates.",
        icon: "MapPin",
      },
      {
        title: "Client Site Visit Verification",
        desc: "Field engineers and sales reps punch in upon reaching client destinations, automatically timestamping meeting start and conclusion times.",
        icon: "CheckCircle",
      },
      {
        title: "Shift & Overtime Automation",
        desc: "System auto-calculates total hours worked, meal intervals, late arrivals, and overtime premiums for direct payroll integration.",
        icon: "Clock",
      },
      {
        title: "Real-Time Manager Notifications",
        desc: "Supervisors receive instant dashboard notifications when remote team members punch in, take breaks, or check out for the day.",
        icon: "Bell",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Mobile App Activation & Location Lock",
        desc: "Employee opens the RVM CRM mobile app at the assigned location; system validates GPS satellites and verifies geofence coordinates.",
      },
      {
        step: "02",
        title: "One-Touch Verification & Shift Start",
        desc: "Employee taps 'Punch In'. Optional facial or selfie capture confirms identity and updates status to 'On Duty'.",
      },
      {
        step: "03",
        title: "Centralized Sync & Payroll Readiness",
        desc: "Attendance record immediately reflects on management dashboards and synchronizes with the monthly Attendance & Leaves module.",
      },
    ],
    benefits: [
      {
        metric: "100%",
        title: "Zero Attendance Fraud",
        desc: "Eliminates proxy attendance, buddy punching, and inaccurate field reporting.",
      },
      {
        metric: "45 mins",
        title: "Saved Daily Per Rep",
        desc: "No need to visit physical offices solely to mark attendance before client visits.",
      },
      {
        metric: "99.8%",
        title: "Payroll Accuracy",
        desc: "Direct integration between shift logs and the HR & Accounts module removes manual disputes.",
      },
    ],
    connectedModules: [
      { module: "Attendance & Leaves", howItConnects: "Feeds verified daily shift timestamps directly into monthly leave and salary ledgers." },
      { module: "Tasks & Planner", howItConnects: "Validates whether planned meetings were attended by checking site-specific punch times." },
      { module: "Expense Management", howItConnects: "Matches travel allowance and daily meal claims against verified check-in locations." },
    ],
    faqs: [
      {
        q: "Does Geo-Check-In work when offline or with poor cellular connectivity?",
        a: "Yes. The mobile app stores the timestamp and GPS coordinates locally on the device, securely pushing the verified record to the server as soon as connection is restored.",
      },
      {
        q: "Can managers set specific geofence perimeters for client sites?",
        a: "Yes. Administrators can configure custom radiuses (e.g. 50m to 500m) around client offices, project sites, and regional branches.",
      },
    ],
  },

  "employee-movement": {
    slug: "employee-movement",
    name: "Employee Movement",
    tagline: "Live Route Tracking, Visit Timelines & Travel Verification",
    badge: "FIELD FORCE INTELLIGENCE",
    description:
      "Gain complete visibility into your field team's daily journey. Track actual travel routes, calculate accurate mileage for fuel allowances, and optimize customer visit schedules without battery-draining continuous background tracking.",
    heroPreviewTitle: "Live Field Route & Movement Console",
    heroPreviewSubtitle: "Breadcrumb route replay, kilometer calculations & stopover duration analytics.",
    capabilities: [
      {
        title: "Breadcrumb Route Playback",
        desc: "Review the exact travel path traversed by field executives throughout the day, including travel duration and stopover intervals.",
        icon: "Route",
      },
      {
        title: "Automated Distance & Kilometers",
        desc: "Calculate precise travel distance (KM) between customer locations to automate verified fuel and conveyance expense reimbursement.",
        icon: "Navigation",
      },
      {
        title: "Stopover Duration Insights",
        desc: "Identify how much time service technicians and sales representatives spend on client meetings versus time spent in transit.",
        icon: "Timer",
      },
      {
        title: "Smart Battery Optimization",
        desc: "Proprietary intelligent location polling activates only during active duty hours, preserving device battery life throughout the day.",
        icon: "BatteryCharging",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Duty Shift Initiation",
        desc: "Movement tracking automatically commences when an employee punches in for duty on the RVM CRM mobile application.",
      },
      {
        step: "02",
        title: "Client Site Stopovers & Activity Logging",
        desc: "As the employee moves between scheduled meetings, the system logs arrival timestamps, transit kilometers, and departure times.",
      },
      {
        step: "03",
        title: "Daily Movement Summary Report",
        desc: "End-of-day reports aggregate total distance traveled, client visits completed, and auto-generates travel expense sheets.",
      },
    ],
    benefits: [
      {
        metric: "35%",
        title: "Reduction in Travel Costs",
        desc: "Verify authentic distance traveled and prevent exaggerated fuel and conveyance expense claims.",
      },
      {
        metric: "2.5x",
        title: "More Client Visits Per Day",
        desc: "Route optimization enables field representatives to schedule more meetings within adjacent geographical clusters.",
      },
      {
        metric: "100%",
        title: "Proof of Customer Presence",
        desc: "Auditable proof of engineer and sales representative visits for clients and managers alike.",
      },
    ],
    connectedModules: [
      { module: "Expense Management", howItConnects: "Auto-populates travel allowance claims based on GPS-calculated kilometers traveled." },
      { module: "Contact Management", howItConnects: "Records meeting timestamps in the customer's chronological interaction timeline." },
      { module: "Order Management", howItConnects: "Links orders captured on field to the physical customer premises timestamp." },
    ],
    faqs: [
      {
        q: "Does the app track employees outside of working hours?",
        a: "No. Privacy is paramount; location polling is strictly bound to active shift hours and shuts down immediately upon Punch-Out.",
      },
      {
        q: "Can managers view all field representatives on a live map simultaneously?",
        a: "Yes. The executive web dashboard provides a live fleet map showing the active status and current stopovers of all on-duty field staff.",
      },
    ],
  },

  "notifications-and-alerts": {
    slug: "notifications-and-alerts",
    name: "Notifications & Alerts",
    tagline: "Automated Escalations, Follow-Up Reminders & SLA Alarms",
    badge: "AUTOMATION & WORKFLOWS",
    description:
      "Never miss a critical business deadline. RVM CRM delivers intelligent, multi-channel alerts across mobile push, email, SMS, and WhatsApp for lead follow-ups, payment milestones, quotation expirations, and service ticket escalations.",
    heroPreviewTitle: "Intelligent Notification Hub",
    heroPreviewSubtitle: "Rule-based triggers, SLA countdown timers & cross-channel broadcast delivery.",
    capabilities: [
      {
        title: "Lead Follow-Up Reminders",
        desc: "Automated notifications prompt sales representatives prior to scheduled customer calls, demos, and proposal revisions.",
        icon: "BellRing",
      },
      {
        title: "Payment & Invoice Due Alerts",
        desc: "Proactive notices remind accounts teams and clients about upcoming invoice due dates, reducing outstanding receivables.",
        icon: "CreditCard",
      },
      {
        title: "SLA Ticket Escalation Matrix",
        desc: "Support tickets approaching response or resolution deadlines automatically trigger senior manager escalation notifications.",
        icon: "AlertTriangle",
      },
      {
        title: "Multi-Channel Delivery Options",
        desc: "Choose where alerts go — in-app notification center, mobile push, automated email, SMS, or WhatsApp Business messages.",
        icon: "Send",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Event Trigger or Deadline Detection",
        desc: "A specific business condition occurs (e.g. lead inactive for 48h, quotation expiring in 24h, or ticket unresolved).",
      },
      {
        step: "02",
        title: "Rule-Based Notification Routing",
        desc: "System evaluates assignee hierarchy, escalation matrix, and preferred delivery channels.",
      },
      {
        step: "03",
        title: "Instant Multi-Device Dispatch",
        desc: "Notification appears on desktop screen, sounds mobile push alert, and sends backup email notification.",
      },
    ],
    benefits: [
      {
        metric: "0",
        title: "Zero Missed Follow-Ups",
        desc: "Every enquiry receives timely attention, increasing lead conversion rates by up to 40%.",
      },
      {
        metric: "80%",
        title: "Faster Ticket Resolution",
        desc: "SLA countdown timers keep customer service teams focused on priority support tickets.",
      },
      {
        metric: "50%",
        title: "Reduction in Overdue Debts",
        desc: "Automated payment reminders prompt customers before invoices become severely delinquent.",
      },
    ],
    connectedModules: [
      { module: "Lead Management", howItConnects: "Alerts sales reps when prospects open quotations or when follow-up dates arrive." },
      { module: "AMC & Tickets", howItConnects: "Warns managers when service tickets exceed contractual resolution timelines." },
      { module: "Finance & Accounts", howItConnects: "Notifies clients and collection agents about pending invoice milestones." },
    ],
    faqs: [
      {
        q: "Can individual team members customize their notification preferences?",
        a: "Yes. Users can configure which notifications they receive via push, email, or in-app bell icon based on their role.",
      },
      {
        q: "Can we set custom escalation rules for VIP clients?",
        a: "Yes. Support tickets for priority accounts can be assigned aggressive SLA timers that notify department heads within 15 minutes.",
      },
    ],
  },

  "nearby-customers": {
    slug: "nearby-customers",
    name: "Nearby Customers",
    tagline: "Map-Based Client Discovery & Field Route Maximization",
    badge: "GEO-SPATIAL SALES",
    description:
      "Turn idle travel time into revenue. When sales or service engineers visit a client, RVM CRM scans the surrounding radius to reveal nearby prospects, existing accounts, and pending service tickets, maximizing daily meeting output.",
    heroPreviewTitle: "Radius-Based Customer Discovery Radar",
    heroPreviewSubtitle: "Visual map pins, distance sorting & instant impromptu meeting scheduling.",
    capabilities: [
      {
        title: "Radius Distance Filter (1–25 KM)",
        desc: "Filter nearby businesses within customizable radial distances from your current mobile location or selected city hub.",
        icon: "Radar",
      },
      {
        title: "Account Status Color Coding",
        desc: "Instantly distinguish active clients (Green), warm leads (Blue), and overdue AMC accounts (Red) on an interactive map.",
        icon: "Layers",
      },
      {
        title: "One-Tap Navigation & Calling",
        desc: "Launch Google Maps navigation directly to the customer's gate or dial their primary contact person with a single tap.",
        icon: "Compass",
      },
      {
        title: "Impromptu Meeting Logging",
        desc: "Walk in to nearby client accounts, conduct unplanned follow-up visits, and log notes immediately on the mobile app.",
        icon: "CalendarPlus",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Primary Client Meeting Concluded",
        desc: "Field representative completes scheduled visit and opens the 'Nearby Customers' tab on the mobile app.",
      },
      {
        step: "02",
        title: "Radial Proximity Scan",
        desc: "App displays map pins of all corporate accounts, distributors, and leads located within 3 km.",
      },
      {
        step: "03",
        title: "Bonus Meeting & Touchpoint Capture",
        desc: "Rep calls nearby contact, arranges quick catchup, and logs meeting outcomes into RVM CRM on the spot.",
      },
    ],
    benefits: [
      {
        metric: "+2",
        title: "Additional Visits Daily",
        desc: "Field reps squeeze extra productive touchpoints into their daily schedules without extra travel overhead.",
      },
      {
        metric: "50%",
        title: "Higher Territory Coverage",
        desc: "Teams visit smaller accounts that are rarely prioritized on dedicated long-distance trips.",
      },
      {
        metric: "20%",
        title: "Reduction in Travel Idle Time",
        desc: "Convert downtime between appointments into valuable business development conversations.",
      },
    ],
    connectedModules: [
      { module: "Contact Management", howItConnects: "Utilizes verified customer geo-coordinates to populate the interactive radar map." },
      { module: "AMC Management", howItConnects: "Highlights nearby equipment installations requiring annual preventative inspection." },
      { module: "Lead Management", howItConnects: "Surfaces uncontacted prospects in the same commercial industrial cluster." },
    ],
    faqs: [
      {
        q: "How does the system know where customer premises are located?",
        a: "Customer coordinates are automatically captured whenever field reps conduct visits, or can be entered via address geocoding.",
      },
      {
        q: "Can sales reps filter nearby contacts by industry sector?",
        a: "Yes. You can filter by industry category, lead pipeline stage, client tier (A/B/C), or assigned sales executive.",
      },
    ],
  },

  "team-chats": {
    slug: "team-chats",
    name: "Team Chats",
    tagline: "Contextual Deal Collaboration & Secure Internal Messaging",
    badge: "ENTERPRISE COLLABORATION",
    description:
      "Stop losing critical deal context in personal chat apps. RVM CRM's built-in Team Chats connect sales reps, technical estimators, field engineers, and billing teams directly inside relevant customer records, quotations, and service tickets.",
    heroPreviewTitle: "Contextual Deal & Ticket Chat Terminal",
    heroPreviewSubtitle: "Direct document sharing, quotation discussions & auditable team message threads.",
    capabilities: [
      {
        title: "Deal-Linked Discussion Threads",
        desc: "Every lead, quotation, and ticket has its own dedicated chat room so conversations stay attached to actual transactions.",
        icon: "MessagesSquare",
      },
      {
        title: "Instant Document & Media Sharing",
        desc: "Share technical drawings, site photos, quotation drafts, and payment proofs with end-to-end security.",
        icon: "Paperclip",
      },
      {
        title: "Cross-Department Collaboration",
        desc: "Tag accounts specialists for pricing approvals or field engineers for site inspection queries using @mentions.",
        icon: "Users2",
      },
      {
        title: "Auditable Communication Archive",
        desc: "Maintain complete company ownership of business chats even when staff members transition or leave the company.",
        icon: "Shield",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Open Transaction or Ticket Record",
        desc: "Sales rep reviewing Quotation QT-8092 opens the integrated chat drawer beside the quotation line items.",
      },
      {
        step: "02",
        title: "Tag Stakeholders & Share Files",
        desc: "Rep tags @InventoryManager for stock confirmation and attaches the client's custom dimension sketch.",
      },
      {
        step: "03",
        title: "Instant Resolution & History Preservation",
        desc: "Inventory manager approves discount in chat; entire interaction remains permanently archived for audit.",
      },
    ],
    benefits: [
      {
        metric: "100%",
        title: "Corporate Data Ownership",
        desc: "Business discussions remain inside your company's secure CRM rather than personal WhatsApp accounts.",
      },
      {
        metric: "60%",
        title: "Faster Quotation Approvals",
        desc: "No back-and-forth email chains for special pricing, inventory availability, or technical feasibility checks.",
      },
      {
        metric: "0",
        title: "Lost Deal Context",
        desc: "When a new sales executive takes over an account, they can read the entire historical team discussion.",
      },
    ],
    connectedModules: [
      { module: "Quotation Management", howItConnects: "Allows sales reps and management to negotiate special pricing within the quotation screen." },
      { module: "Complaints & Tickets", howItConnects: "Enables service coordinators to relay customer breakdown details directly to field engineers." },
      { module: "Order Management", howItConnects: "Coordinates dispatch instructions between billing, production, and logistics teams." },
    ],
    faqs: [
      {
        q: "Is there a desktop and mobile version of Team Chats?",
        a: "Yes. Team Chats sync seamlessly between the web application and the Android / iOS mobile applications.",
      },
      {
        q: "Can clients see internal team chats?",
        a: "No. Team Chats are strictly internal and visible only to authorized employees within your organization.",
      },
    ],
  },

  "news-and-updates": {
    slug: "news-and-updates",
    name: "News & Updates",
    tagline: "Company-Wide Broadcasts, Policy Bulletins & Acknowledgment Tracking",
    badge: "INTERNAL COMMUNICATIONS",
    description:
      "Keep your entire organization aligned on one page. Broadcast price revisions, product brochures, incentive schemes, operating guidelines, and safety policies with automated read-receipts and employee acknowledgments.",
    heroPreviewTitle: "Corporate Broadcast & Bulletin Board",
    heroPreviewSubtitle: "Categorized announcements, attachment downloads & employee read-receipt audits.",
    capabilities: [
      {
        title: "Targeted Audience Broadcasts",
        desc: "Publish bulletins to the entire company or target specific departments, regional branches, or field force tiers.",
        icon: "Megaphone",
      },
      {
        title: "Read & Acknowledgment Tracking",
        desc: "See exactly which employees have viewed and formally acknowledged critical policy updates or safety notices.",
        icon: "CheckCheck",
      },
      {
        title: "Rich Media & Attachment Support",
        desc: "Attach PDF price lists, new product catalogs, training videos, and corporate incentive circulars.",
        icon: "FileText",
      },
      {
        title: "Pinned Priority Announcements",
        desc: "Keep essential guidelines and urgent notifications pinned to the top of every employee's home feed.",
        icon: "Pin",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Draft & Target Bulletin",
        desc: "Management drafts an announcement (e.g. Q3 Sales Incentive Scheme), attaches the PDF, and selects target roles.",
      },
      {
        step: "02",
        title: "Instant Push Notification",
        desc: "All target employees receive a push notification on their desktop and mobile app alerting them to new company news.",
      },
      {
        step: "03",
        title: "Compliance & Read Status Audit",
        desc: "HR and managers review an analytics dashboard showing who read and confirmed acknowledgment.",
      },
    ],
    benefits: [
      {
        metric: "100%",
        title: "Organizational Alignment",
        desc: "Ensure field reps across 20 cities receive price revisions and policy updates simultaneously.",
      },
      {
        metric: "0",
        title: "Outdated Price Quotes",
        desc: "Sales reps always have instant access to the latest approved catalog and commercial terms.",
      },
      {
        metric: "95%",
        title: "Acknowledgment Speed",
        desc: "Employees read and acknowledge company communications within 4 hours of publication.",
      },
    ],
    connectedModules: [
      { module: "Mobile Application", howItConnects: "Displays a prominent news feed card on the mobile app home screen for field staff." },
      { module: "Marketing Management", howItConnects: "Distributes newly launched marketing collateral and sales pitch decks to all teams." },
      { module: "Attendance & Leaves", howItConnects: "Broadcasts annual holiday calendars and HR policy adjustments." },
    ],
    faqs: [
      {
        q: "Can employees comment on news announcements?",
        a: "Admins can choose whether comments and reactions are enabled or if the post is a broadcast-only bulletin.",
      },
      {
        q: "Can we schedule announcements to publish at a future date?",
        a: "Yes. News posts can be drafted and scheduled for automated future release at specified dates and times.",
      },
    ],
  },

  "calendar": {
    slug: "calendar",
    name: "Calendar",
    tagline: "Unified Team Schedules, Task Deadlines & Calendar Sync",
    badge: "TIME & SCHEDULE MANAGEMENT",
    description:
      "Transform chaotic schedules into structured execution. RVM CRM's unified calendar consolidates sales meetings, follow-up calls, technician installations, and project milestones with seamless two-way Google and Outlook sync.",
    heroPreviewTitle: "Enterprise Schedule & Appointment Master",
    heroPreviewSubtitle: "Multi-view scheduling (Day/Week/Month), team availability overlays & automated reminders.",
    capabilities: [
      {
        title: "Unified Team Availability View",
        desc: "View schedules of individual sales reps or entire regional teams simultaneously to assign new meetings without conflicts.",
        icon: "CalendarDays",
      },
      {
        title: "Two-Way Google & Outlook Sync",
        desc: "Synchronize client appointments between RVM CRM and personal calendar applications in real time.",
        icon: "RefreshCw",
      },
      {
        title: "Color-Coded Event Categories",
        desc: "Distinguish between client demos (Blue), service maintenance (Green), internal reviews (Yellow), and urgent deadlines (Red).",
        icon: "Palette",
      },
      {
        title: "Automated Meeting Invites",
        desc: "Send branded calendar invites with Google Meet or Zoom video links to clients automatically upon scheduling.",
        icon: "MailCheck",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Schedule Meeting from Lead or Ticket",
        desc: "Sales rep clicks 'Schedule Meeting' inside lead record; calendar checks representative and manager availability.",
      },
      {
        step: "02",
        title: "Automated Client Invitation Dispatch",
        desc: "Client receives calendar invitation with agenda, location coordinates, and automated reminder alerts.",
      },
      {
        step: "03",
        title: "Meeting Outcome Logging",
        desc: "Post-meeting, system prompts the rep to enter visit notes, update deal stage, and set next action items.",
      },
    ],
    benefits: [
      {
        metric: "75%",
        title: "Fewer Scheduling Conflicts",
        desc: "Managers can see who is busy, on leave, or available before assigning client demos and service visits.",
      },
      {
        metric: "30%",
        title: "Reduction in Meeting No-Shows",
        desc: "Automated client reminders sent 24 hours and 1 hour prior to appointment ensure high attendance.",
      },
      {
        metric: "100%",
        title: "Visibility on Team Commitments",
        desc: "Executive leaders can review upcoming team appointments across regional branches in one glance.",
      },
    ],
    connectedModules: [
      { module: "Tasks & Planner", howItConnects: "Maps daily task deadlines directly onto chronological calendar views." },
      { module: "Installation Management", howItConnects: "Schedules equipment installation dates and technician dispatch slots." },
      { module: "Lead Management", howItConnects: "Presents upcoming product demo dates inside the prospect's pipeline card." },
    ],
    faqs: [
      {
        q: "Does the calendar integrate with Microsoft Outlook and Google Calendar?",
        a: "Yes. Two-way calendar sync ensures events scheduled in RVM CRM reflect on your personal smartphone calendar.",
      },
      {
        q: "Can managers reassign an appointment to another sales rep if someone falls ill?",
        a: "Yes. Drag-and-drop reassignment automatically updates the client and transfers event notifications to the new rep.",
      },
    ],
  },

  "reports-and-dashboard": {
    slug: "reports-and-dashboard",
    name: "Reports & Dashboard",
    tagline: "Real-Time BI Analytics, Revenue Forecasting & Executive Dashboards",
    badge: "BUSINESS INTELLIGENCE",
    description:
      "Turn raw operational data into strategic business clarity. RVM CRM delivers interactive visual dashboards, revenue pipeline forecasting, field performance scorecards, and exportable custom reports designed for data-driven decisions.",
    heroPreviewTitle: "Executive Performance & Revenue Console",
    heroPreviewSubtitle: "Real-time pipeline metrics, conversion funnels, employee KPIs & scheduled automated exports.",
    capabilities: [
      {
        title: "Executive Revenue & Pipeline Dashboards",
        desc: "Monitor active pipeline volume, win/loss ratios, average deal size, and forecasted quarterly revenue in real-time.",
        icon: "LineChart",
      },
      {
        title: "Field Force Productivity Scorecards",
        desc: "Analyze individual representative performance — client visits completed, check-in punctuality, quotation volumes, and sales converted.",
        icon: "Users",
      },
      {
        title: "Custom Multi-Parameter Reports",
        desc: "Build tailored reports filtering by date range, branch, industry vertical, sales representative, or customer tier.",
        icon: "SlidersHorizontal",
      },
      {
        title: "Scheduled Automated Email Exports",
        desc: "Deliver automated daily, weekly, or monthly PDF and Excel reports directly to management inboxes at 8:00 AM.",
        icon: "FileSpreadsheet",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Continuous Multi-Module Data Ingestion",
        desc: "Leads, quotations, orders, service tickets, and field check-ins feed clean operational data into the central analytics engine.",
      },
      {
        step: "02",
        title: "Visual Processing & Metric Calculation",
        desc: "Dashboards automatically generate graphs, trend charts, conversion funnels, and revenue projections.",
      },
      {
        step: "03",
        title: "Strategic Action & Export",
        desc: "Leadership reviews bottlenecks, identifies top performers, and exports auditable management summaries in one click.",
      },
    ],
    benefits: [
      {
        metric: "100%",
        title: "Real-Time Decision Making",
        desc: "No more waiting for weekly manual Excel consolidation — dashboards update live with every transaction.",
      },
      {
        metric: "25%",
        title: "Increase in Pipeline Accuracy",
        desc: "Predict future monthly and quarterly revenue based on historical conversion probabilities and cycle times.",
      },
      {
        metric: "10 hrs",
        title: "Saved Weekly by Management",
        desc: "Eliminates tedious manual reporting routines with scheduled automated PDF/Excel summaries.",
      },
    ],
    connectedModules: [
      { module: "Finance & Accounts", howItConnects: "Tracks invoiced revenue versus collected payments and outstanding accounts receivable." },
      { module: "Inventory Management", howItConnects: "Monitors stock turnover rates, fast-moving items, and reorder point alerts." },
      { module: "Attendance & Leaves", howItConnects: "Aggregates field workforce punctuality and productive hours into monthly scorecards." },
    ],
    faqs: [
      {
        q: "Can we restrict report access based on employee seniority?",
        a: "Yes. Role-based permissions ensure sales reps only see their personal numbers while managers see departmental or company-wide data.",
      },
      {
        q: "Can reports be exported to Excel and CSV?",
        a: "Yes. Every report table supports instant export to Excel (.xlsx), CSV, and formatted PDF presentation documents.",
      },
    ],
  },

  "mobile-application": {
    slug: "mobile-application",
    name: "Mobile Application",
    tagline: "Enterprise CRM in Your Pocket — Native Android & iOS Apps",
    badge: "MOBILE WORKSPACE",
    description:
      "Empower your teams to operate at full velocity wherever business takes them. The RVM CRM mobile application delivers the full power of your desktop suite to smartphones, featuring offline caching, instant photo capture, and digital signatures.",
    heroPreviewTitle: "RVM CRM Native Mobile Suite",
    heroPreviewSubtitle: "Offline-first data sync, biometric login, on-field order booking & instant digital signatures.",
    capabilities: [
      {
        title: "Full Offline Capability & Auto-Sync",
        desc: "Work uninterrupted in remote factories, basements, or rural areas. Changes sync to cloud immediately when internet is detected.",
        icon: "WifiOff",
      },
      {
        title: "On-Site Order & Quotation Booking",
        desc: "Generate professional proposals and record confirmed customer orders on mobile while standing right beside the client.",
        icon: "FileCheck",
      },
      {
        title: "Digital Client Signature Capture",
        desc: "Collect client signatures on touch screens for installation sign-offs, quotation acceptance, and service completion slips.",
        icon: "PenTool",
      },
      {
        title: "Camera & Barcode / QR Scanning",
        desc: "Scan product barcodes during inventory dispatch and snap photos of machinery serial plates for service ticket documentation.",
        icon: "QrCode",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Biometric Login & Shift Activation",
        desc: "Field rep logs in securely using Face ID or fingerprint; offline database syncs overnight updates in seconds.",
      },
      {
        step: "02",
        title: "Field Execution & Media Capture",
        desc: "Rep navigates to client, marks arrival, inspects equipment, takes site photos, and books new orders directly on screen.",
      },
      {
        step: "03",
        title: "Digital Sign-Off & Cloud Dispatch",
        desc: "Client signs on mobile screen; customer immediately receives an automated PDF copy while office billing begins.",
      },
    ],
    benefits: [
      {
        metric: "3x",
        title: "Faster Order Processing",
        desc: "Orders captured on-site reach billing and warehouse dispatch teams instantly without evening office data entry.",
      },
      {
        metric: "100%",
        title: "Offline Reliability",
        desc: "Never get blocked by poor internet connectivity during important client site presentations.",
      },
      {
        metric: "0",
        title: "Paper Documents Required",
        desc: "Eliminate paper service slips, handwritten order books, and physical attendance sheets.",
      },
    ],
    connectedModules: [
      { module: "All 14 Enterprise Modules", howItConnects: "Provides seamless mobile access to Leads, Orders, Quotations, Tickets, Inventory, and HR." },
      { module: "Nearby Customers", howItConnects: "Uses phone GPS sensors to dynamically display surrounding customer accounts on maps." },
      { module: "Team Chats", howItConnects: "Enables instant push-to-chat messaging between field engineers and headquarters." },
    ],
    faqs: [
      {
        q: "Is the RVM CRM mobile app compatible with both Android and iOS devices?",
        a: "Yes. Native applications are optimized for both modern Android smartphones and Apple iOS devices.",
      },
      {
        q: "What security measures protect customer data on mobile devices?",
        a: "Data is protected with AES-256 local database encryption, biometric authentication, and remote-wipe capability if a device is lost.",
      },
    ],
  },
}
