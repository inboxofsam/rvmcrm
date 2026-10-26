"use client"

import * as React from "react"
import Link from "next/link"
import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { 
  HelpCircle, 
  Search, 
  ChevronDown, 
  Layers, 
  Smartphone, 
  ShieldCheck, 
  CreditCard, 
  Rocket, 
  PhoneCall, 
  MessageSquare,
  Sparkles,
  ArrowRight,
  CheckCircle2
} from "lucide-react"

interface FaqItem {
  id: string
  category: string
  question: string
  answer: string
  tags?: string[]
}

const FAQ_DATA: FaqItem[] = [
  // General & Platform
  {
    id: "gen-1",
    category: "General",
    question: "What is RVM CRM and how does it differ from traditional CRMs?",
    answer: "RVM CRM is an all-in-one connected business management platform. Traditional CRMs only store contact records and sales pipelines. RVM CRM bridges customer acquisition, field workforce tracking (GPS check-in/out, live travel routes), order execution, warehouse inventory, post-sales AMC/service ticketing, and financial accounting. It eliminates the need for separate standalone tools like attendance apps, spreadsheets, and disconnected messaging groups."
  },
  {
    id: "gen-2",
    category: "General",
    question: "Which industries does RVM CRM cater to?",
    answer: "RVM CRM is engineered for mid-market and growing enterprises across Manufacturing, Field Machinery & Equipment, Wholesale Distribution, Healthcare & Biomedical Services, Facility Management, Logistics & Fleet, Construction & Contracting, and Professional Services. The platform includes customizable workflow templates tailored to these sectors."
  },
  {
    id: "gen-3",
    category: "General",
    question: "Can RVM CRM be customized to match our existing company workflows?",
    answer: "Yes, absolutely. RVM CRM offers deep customizability: you can configure custom lead stages, quotation templates with your branding and GST calculations, automated approval hierarchies, custom ticket categories, and role-based access permissions without requiring any coding."
  },
  {
    id: "gen-4",
    category: "General",
    question: "Can we access RVM CRM on desktop, tablets, and smartphones?",
    answer: "Yes. RVM CRM provides a responsive web application for desktop and laptop browsers, alongside dedicated native mobile applications for Android and iOS devices designed specifically for on-the-go sales executives and field service technicians."
  },

  // Field GPS & Workforce Management
  {
    id: "gps-1",
    category: "Field & GPS",
    question: "How does GPS-based Check-In and Check-Out work in RVM CRM?",
    answer: "Field employees mark their attendance directly from their mobile app. RVM CRM captures precise GPS coordinates and timestamps. Managers can configure geofenced client sites, branches, or job locations, verifying that attendance or client visits are recorded only when staff are physically present on-site."
  },
  {
    id: "gps-2",
    category: "Field & GPS",
    question: "Does RVM CRM track employee locations after work hours or drain their mobile battery?",
    answer: "No. Employee privacy and device performance are core priorities. Location recording is active strictly between 'Check-In' and 'Check-Out' shift hours. Once an employee clocks out, location capture ceases completely. Furthermore, our native mobile SDK uses optimized geolocation sampling that minimizes battery usage to under 4% for a typical 8-hour shift."
  },
  {
    id: "gps-3",
    category: "Field & GPS",
    question: "What happens if a field executive is in a basement or area with no internet connectivity?",
    answer: "RVM CRM's mobile application features full Offline Mode with intelligent auto-sync. Field executives can log visits, collect signatures, capture site photos, and mark tasks without mobile internet. As soon as the device reconnects to Wi-Fi or cellular network, all data securely uploads to the central cloud server."
  },
  {
    id: "gps-4",
    category: "Field & GPS",
    question: "How does automated travel expense calculation work?",
    answer: "The mobile app calculates actual distance traversed between verified client visits during the day. Based on your company's per-kilometer reimbursement rate (e.g. ₹5/km for two-wheelers or ₹10/km for four-wheelers), the system auto-computes the conveyance claim, eliminating exaggerated manual travel vouchers."
  },

  // Modules & Workflows
  {
    id: "mod-1",
    category: "Modules",
    question: "Can we generate GST-compliant Quotations, Proforma Invoices, and Orders directly from RVM CRM?",
    answer: "Yes. RVM CRM features a comprehensive Sales & Quotation module with multi-item catalog support, automatic CGST/SGST/IGST tax computations, HSN codes, custom discounts, and payment terms. You can generate professional PDF quotations in one click and dispatch them directly via email or WhatsApp."
  },
  {
    id: "mod-2",
    category: "Modules",
    question: "How does the Customer Service and AMC (Annual Maintenance Contract) module operate?",
    answer: "The Service module allows you to track customer equipment, warranty validity, and AMC expiry dates. When a customer logs a breakdown or complaint, RVM CRM automatically assigns the ticket to the nearest field service engineer. Preventive maintenance visits are auto-scheduled, and renewal reminders are triggered prior to contract expiration."
  },
  {
    id: "mod-3",
    category: "Modules",
    question: "Does RVM CRM support inventory tracking and stock alerts?",
    answer: "Yes. RVM CRM monitors inventory stock levels across multiple warehouses or branch depots. When a sales order is confirmed or a replacement spare part is utilized during a service visit, stock levels update in real time, with automated low-stock warnings sent to procurement managers."
  },
  {
    id: "mod-4",
    category: "Modules",
    question: "Can we automatically capture leads from IndiaMART, TradeIndia, and our company website?",
    answer: "Yes. RVM CRM integrates seamlessly with IndiaMART, TradeIndia, Justdial, Facebook Lead Ads, and website forms. Leads are ingested instantly and can be automatically allocated to sales executives based on geography, product category, or round-robin logic."
  },

  // Implementation & Onboarding
  {
    id: "imp-1",
    category: "Implementation",
    question: "How long does it take to implement RVM CRM in our business?",
    answer: "Most of our enterprise clients go live within 7 to 14 business days. Our dedicated onboarding team handles initial system configuration, master data migration, user permission setup, and role-specific training sessions for both administrators and field personnel."
  },
  {
    id: "imp-2",
    category: "Implementation",
    question: "Can we import our existing customer databases, product catalogs, and contact lists?",
    answer: "Yes. RVM CRM provides intuitive Excel/CSV data import wizards with automatic column mapping. Our deployment engineers also assist in cleaning, validating, and migrating legacy data from spreadsheets or older CRM/ERP systems at zero extra cost."
  },
  {
    id: "imp-3",
    category: "Implementation",
    question: "What kind of post-launch training and ongoing customer support do you provide?",
    answer: "Every client receives comprehensive interactive training for managers and field staff, recorded video tutorials, and user manuals. Post-launch, you have access to dedicated phone support, WhatsApp priority helpdesk, email assistance, and AnyDesk/TeamViewer remote session support."
  },

  // Security, Cloud & Pricing
  {
    id: "sec-1",
    category: "Security & Pricing",
    question: "Where is our business data stored, and who owns it?",
    answer: "Your data is hosted in high-security, ISO 27001 and SOC2-certified Tier-IV data centers located within India. You retain 100% legal ownership of your business records. We never share, monetize, or inspect your proprietary client or financial data."
  },
  {
    id: "sec-2",
    category: "Security & Pricing",
    question: "What security measures are in place to safeguard our data from breaches?",
    answer: "RVM CRM employs 256-bit AES encryption at rest and TLS 1.3 encryption in transit. We enforce strict role-based access controls (RBAC), multi-factor authentication (MFA), automated hourly encrypted backups, and continuous DDoS mitigation."
  },
  {
    id: "sec-3",
    category: "Security & Pricing",
    question: "How does pricing work, and are there any hidden charges?",
    answer: "RVM CRM follows transparent, predictable subscription pricing based on user tiers. All core modules, mobile applications, ongoing system updates, and standard customer support are included. There are no hidden charges, surprise server fees, or penalty termination clauses."
  },
  {
    id: "sec-4",
    category: "Security & Pricing",
    question: "Can we add or reassign user licenses as our company expands?",
    answer: "Yes. You can scale user seats up or down anytime from your administrator portal. When an employee leaves, their license can be immediately reassigned to a new team member with full history preservation."
  }
]

const CATEGORIES = [
  "All",
  "General",
  "Field & GPS",
  "Modules",
  "Implementation",
  "Security & Pricing"
]

export default function FaqPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("All")
  const [searchQuery, setSearchQuery] = React.useState("")
  const [openIds, setOpenIds] = React.useState<Record<string, boolean>>({
    "gen-1": true,
    "gps-1": true,
    "mod-1": true
  })

  const toggleAccordion = (id: string) => {
    setOpenIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  const filteredFaqs = React.useMemo(() => {
    return FAQ_DATA.filter(item => {
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory
      const matchesQuery = 
        searchQuery.trim() === "" ||
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesQuery
    })
  }, [selectedCategory, searchQuery])

  return (
    <div className="bg-white min-h-screen">
      
      {/* ========================================================= */}
      {/* SECTION 1: HERO SECTION                                   */}
      {/* ========================================================= */}
      <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 lg:py-24 border-b border-gray-200">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#125486]/10 text-[#125486] text-xs font-bold uppercase tracking-widest">
              <HelpCircle className="w-3.5 h-3.5" />
              KNOWLEDGE BASE & FAQ CENTER
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-950 tracking-tight leading-[1.15]">
              Frequently Asked <span className="text-[#125486]">Questions</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-normal max-w-3xl mx-auto">
              Find transparent answers about RVM CRM's unified architecture, GPS field tracking, enterprise security, system onboarding, and subscription plans.
            </p>

            {/* Live Search Input Bar */}
            <div className="max-w-2xl mx-auto relative pt-4">
              <div className="relative flex items-center">
                <Search className="w-5 h-5 text-gray-400 absolute left-4 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search questions (e.g. GPS tracking, GST quotations, data security)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-14 pl-12 pr-4 text-base rounded-2xl border border-gray-300 focus:border-[#125486] focus:ring-4 focus:ring-[#125486]/10 outline-none transition-all shadow-sm"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 text-xs font-semibold text-gray-400 hover:text-gray-600 px-2 py-1 bg-gray-100 rounded-md"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                    selectedCategory === cat
                      ? "bg-[#125486] text-white shadow-md shadow-[#125486]/20 scale-105"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: ACCORDION LIST                                 */}
      {/* ========================================================= */}
      <section className="py-20 bg-white">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          
          <div className="max-w-4xl mx-auto">
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-16 px-4 bg-gray-50 rounded-3xl border border-gray-200">
                <HelpCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">No matching questions found</h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  We couldn't find any questions matching "{searchQuery}". Try a different keyword or contact our support team.
                </p>
                <Button 
                  onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
                  variant="outline"
                  className="rounded-full font-semibold"
                >
                  Reset Search Filters
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 text-xs font-bold text-gray-400 uppercase tracking-wider">
                  <span>Showing {filteredFaqs.length} Question{filteredFaqs.length > 1 ? "s" : ""}</span>
                  <button 
                    onClick={() => {
                      const allOpen: Record<string, boolean> = {}
                      filteredFaqs.forEach(item => { allOpen[item.id] = true })
                      setOpenIds(allOpen)
                    }}
                    className="text-[#125486] hover:underline"
                  >
                    Expand All
                  </button>
                </div>

                {filteredFaqs.map((faq) => {
                  const isOpen = !!openIds[faq.id]
                  return (
                    <div
                      key={faq.id}
                      className={`rounded-2xl border transition-all duration-200 ${
                        isOpen 
                          ? "border-[#125486]/40 bg-sky-50/20 shadow-md shadow-[#125486]/5" 
                          : "border-gray-200 hover:border-gray-300 bg-white"
                      }`}
                    >
                      <button
                        onClick={() => toggleAccordion(faq.id)}
                        className="w-full p-6 text-left flex items-start justify-between gap-4 cursor-pointer focus:outline-none"
                        aria-expanded={isOpen}
                      >
                        <div className="space-y-1.5 flex-1 pr-2">
                          <span className="inline-block text-[11px] font-bold text-[#125486] bg-[#125486]/10 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                            {faq.category}
                          </span>
                          <h3 className="text-lg sm:text-xl font-bold text-gray-950 leading-snug">
                            {faq.question}
                          </h3>
                        </div>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180 bg-[#125486] text-white" : "bg-gray-100 text-gray-600"
                        }`}>
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-6 pb-6 pt-1 text-gray-700 text-base leading-relaxed border-t border-gray-100/80">
                          <p>{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            )}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: KEY PILLARS AT A GLANCE                        */}
      {/* ========================================================= */}
      <section className="py-20 bg-slate-50 border-t border-b border-gray-200">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#125486] bg-[#125486]/10 px-3 py-1 rounded-full">
              CORE ASSURANCES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight">
              Why Businesses Trust RVM CRM
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Clear commitments backed by SLA contracts, transparent pricing, and local enterprise support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-7 rounded-2xl border border-gray-200 shadow-sm space-y-4 hover:border-[#125486]/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#125486]/10 text-[#125486] flex items-center justify-center">
                <Rocket className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">7–14 Day Go-Live</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Fast, friction-free implementation with complimentary legacy data migration and staff training.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-gray-200 shadow-sm space-y-4 hover:border-[#125486]/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">100% Data Sovereignty</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Hosted in Tier-IV Indian data centers with AES-256 encryption. Your company retains full data ownership.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-gray-200 shadow-sm space-y-4 hover:border-[#125486]/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-600 flex items-center justify-center">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Zero Battery Drain</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Intelligent GPS algorithms activate only during active work shifts, with offline-ready sync capabilities.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-gray-200 shadow-sm space-y-4 hover:border-[#125486]/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center">
                <CreditCard className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Zero Hidden Costs</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Predictable per-user licensing with all modules, mobile apps, upgrades, and support included upfront.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 4: STILL HAVE QUESTIONS? CALL-TO-ACTION           */}
      {/* ========================================================= */}
      <section className="py-20 bg-white">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="bg-gradient-to-br from-[#125486] to-[#0a3252] rounded-3xl p-8 sm:p-12 lg:p-16 text-white max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sky-200 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  CAN'T FIND WHAT YOU'RE LOOKING FOR?
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  Speak Directly With Our Solution Specialists
                </h2>
                <p className="text-gray-200 text-base sm:text-lg leading-relaxed max-w-2xl">
                  Every business is unique. Schedule a 20-minute tailored demonstration to see how RVM CRM handles your specific departmental workflows.
                </p>
                <div className="flex flex-wrap items-center gap-6 pt-2 text-sm text-sky-100">
                  <span className="flex items-center gap-2">
                    <PhoneCall className="w-4 h-4 text-sky-300" />
                    +91 9310990051
                  </span>
                  <span className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    Instant WhatsApp Support
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
                <Link href="/request-demo" className="w-full">
                  <Button 
                    size="lg"
                    className="w-full h-14 text-base font-bold rounded-2xl bg-white hover:bg-gray-100 text-[#125486] shadow-xl transition-all hover:scale-105"
                  >
                    Request Free Demo →
                  </Button>
                </Link>
                <Link href="/support" className="w-full">
                  <Button 
                    size="lg"
                    variant="outline"
                    className="w-full h-14 text-base font-bold rounded-2xl border-white/30 text-white hover:bg-white/10 bg-transparent"
                  >
                    Contact Support Desk
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
