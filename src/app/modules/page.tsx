"use client"

import * as React from "react"
import Link from "next/link"
import { siteConfig, modules } from "@/config/site"
import { modulesDetailData } from "@/config/modules-detail"
import { Button } from "@/components/ui/button"
import { 
  Boxes, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Layers, 
  Users, 
  PhoneCall, 
  MessageSquare,
  ShieldCheck,
  TrendingUp,
  Workflow,
  Search,
  Filter
} from "lucide-react"

const CATEGORIES = [
  "All Modules",
  "Sales & Growth",
  "Operations & Delivery",
  "Workforce & Field",
  "Finance & Intelligence"
] as const

export default function ModulesHubPage() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("All Modules")
  const [searchQuery, setSearchQuery] = React.useState<string>("")

  const filteredModules = React.useMemo(() => {
    return modules.filter((m) => {
      const detail = modulesDetailData[m.slug]
      if (!detail) return false

      const matchesCat = 
        selectedCategory === "All Modules" || detail.category === selectedCategory

      const matchesSearch = 
        searchQuery.trim() === "" ||
        detail.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        detail.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        detail.description.toLowerCase().includes(searchQuery.toLowerCase())

      return matchesCat && matchesSearch
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
              <Boxes className="w-3.5 h-3.5" />
              THE CONNECTED MODULAR ARCHITECTURE
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-950 tracking-tight leading-[1.15]">
              14 Intelligent Modules. <span className="text-[#125486]">One Unified Engine.</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-normal max-w-3xl mx-auto">
              From prospective customer inquiries to order fulfillment, field installations, AMC renewals, and Tally accounting—RVM CRM bridges your teams, processes, and data in one cohesive workspace.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Link href="/request-demo">
                <Button
                  size="lg"
                  className="w-full sm:w-auto h-14 px-8 text-base font-bold rounded-full bg-[#125486] hover:bg-[#0d3e63] text-white shadow-lg hover:shadow-[#125486]/25 transition-all hover:scale-105"
                >
                  Request Free 20-Min Demo
                </Button>
              </Link>
              <Link href="/why-rvm-crm">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto h-14 px-8 text-base font-bold rounded-full border-gray-300 hover:border-[#125486] hover:text-[#125486] bg-white transition-all"
                >
                  Why RVM CRM?
                </Button>
              </Link>
            </div>

            {/* Live Search and Filter Bar */}
            <div className="pt-8 max-w-2xl mx-auto space-y-4">
              <div className="relative flex items-center">
                <Search className="w-5 h-5 text-gray-400 absolute left-4 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search modules (e.g. Quotations, AMC, Inventory, Leads, Expenses)..."
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

              {/* Category Filter Pills */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
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
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: INTERACTIVE MODULE CARDS GRID                  */}
      {/* ========================================================= */}
      <section className="py-20 bg-white">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          
          <div className="flex items-center justify-between pb-6 border-b border-gray-100 mb-10 text-xs font-bold text-gray-400 uppercase tracking-wider">
            <span>Showing {filteredModules.length} of 14 Enterprise Modules</span>
            <span>Category: {selectedCategory}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredModules.map((item) => {
              const detail = modulesDetailData[item.slug]
              if (!detail) return null

              return (
                <div
                  key={item.slug}
                  className="bg-white rounded-3xl p-7 border border-gray-200/90 hover:border-[#125486]/60 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative"
                >
                  <div className="space-y-4">
                    {/* Top badges */}
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-[#125486] bg-[#125486]/10 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                        {detail.badge}
                      </span>
                      <span className="text-[11px] font-semibold text-gray-400">
                        {detail.category}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <div>
                      <h2 className="text-2xl font-bold text-gray-950 group-hover:text-[#125486] transition-colors">
                        {detail.name}
                      </h2>
                      <p className="text-xs font-semibold text-[#125486] mt-1 line-clamp-1">
                        {detail.tagline}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                      {detail.description}
                    </p>

                    {/* Capabilities preview */}
                    <div className="space-y-2 pt-3 border-t border-gray-100">
                      {detail.capabilities.slice(0, 3).map((cap, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-2 text-xs text-gray-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1 font-medium">{cap.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                    <Link 
                      href={`/modules/${item.slug}`} 
                      className="text-sm font-bold text-[#125486] hover:text-[#0b3c63] flex items-center gap-1.5 group-hover:gap-2 transition-all"
                    >
                      <span>Explore Module</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <span className="text-[11px] font-semibold text-gray-400">
                      v4.2 Live
                    </span>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: THE CONNECTED WORKFLOW BACKBONE                */}
      {/* ========================================================= */}
      <section className="py-24 bg-slate-50 border-t border-b border-gray-200">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#125486] bg-[#125486]/10 px-3 py-1 rounded-full">
              CONTINUOUS DATA FLOW
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight">
              How the 14 Modules Power Your Business
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Standalone apps create painful data silos. RVM CRM replaces disconnected spreadsheets with an automated, synchronized operational cycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            
            {/* Stage 1 */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm space-y-4 relative">
              <span className="w-10 h-10 rounded-xl bg-[#125486] text-white flex items-center justify-center font-bold text-base shadow-sm">
                1
              </span>
              <h3 className="text-xl font-bold text-gray-950">Acquisition & Sales</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Leads ingested from IndiaMART & Meta → Enriched in Contact dossiers → Instant GST Quotation dispatch with WhatsApp alerts.
              </p>
              <div className="pt-2 text-xs font-semibold text-[#125486]">
                Leads • Contacts • Quotes • Marketing
              </div>
            </div>

            {/* Stage 2 */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm space-y-4 relative">
              <span className="w-10 h-10 rounded-xl bg-[#125486] text-white flex items-center justify-center font-bold text-base shadow-sm">
                2
              </span>
              <h3 className="text-xl font-bold text-gray-950">Fulfillment & Operations</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Sales Order approval → Warehouse stock reservation → Stage-gated dispatch → On-site technical commissioning handover.
              </p>
              <div className="pt-2 text-xs font-semibold text-[#125486]">
                Orders • Inventory • Installation
              </div>
            </div>

            {/* Stage 3 */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm space-y-4 relative">
              <span className="w-10 h-10 rounded-xl bg-[#125486] text-white flex items-center justify-center font-bold text-base shadow-sm">
                3
              </span>
              <h3 className="text-xl font-bold text-gray-950">After-Sales & Retention</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Warranty asset tracking → Automated preventive maintenance (PPM) → Proximity field technician dispatch → 60-day renewal alerts.
              </p>
              <div className="pt-2 text-xs font-semibold text-[#125486]">
                AMC • Complaints & Tickets
              </div>
            </div>

            {/* Stage 4 */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm space-y-4 relative">
              <span className="w-10 h-10 rounded-xl bg-[#125486] text-white flex items-center justify-center font-bold text-base shadow-sm">
                4
              </span>
              <h3 className="text-xl font-bold text-gray-950">Governance & Finance</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                GPS check-in logs → Automated distance conveyance claims → Two-way Tally Prime ledger sync → Executive BI charts.
              </p>
              <div className="pt-2 text-xs font-semibold text-[#125486]">
                Attendance • Expenses • Finance • Analytics
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 4: ENTERPRISE ROI STATS BANNER                    */}
      {/* ========================================================= */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            <div className="space-y-2">
              <div className="text-4xl sm:text-5xl font-black text-[#125486]">65%</div>
              <div className="text-sm font-bold text-gray-900">Faster Quotations</div>
              <p className="text-xs text-gray-500">Drafted in 90 seconds on mobile</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl sm:text-5xl font-black text-[#125486]">99.8%</div>
              <div className="text-sm font-bold text-gray-900">Attendance Accuracy</div>
              <p className="text-xs text-gray-500">Zero proxy check-ins with GPS</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl sm:text-5xl font-black text-[#125486]">+40%</div>
              <div className="text-sm font-bold text-gray-900">AMC Renewal Rate</div>
              <p className="text-xs text-gray-500">Automated pre-expiry proposals</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl sm:text-5xl font-black text-[#125486]">35%</div>
              <div className="text-sm font-bold text-gray-900">Travel Cost Cut</div>
              <p className="text-xs text-gray-500">Actual GPS route reimbursement</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 5: CALL TO ACTION HERO BANNER                     */}
      {/* ========================================================= */}
      <section className="py-20 bg-white">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="bg-gradient-to-br from-[#125486] to-[#0a3252] rounded-3xl p-8 sm:p-12 lg:p-16 text-white max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sky-200 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  CUSTOMIZED WORKFLOW DEMO
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  Ready to See How All 14 Modules Work Together?
                </h2>
                <p className="text-gray-200 text-base sm:text-lg leading-relaxed max-w-2xl">
                  Book a free 20-minute consultation with our solution architects. We will demonstrate the exact modules and workflows tailored to your industry.
                </p>
                <div className="flex flex-wrap items-center gap-6 pt-2 text-sm text-sky-100">
                  <span className="flex items-center gap-2">
                    <PhoneCall className="w-4 h-4 text-sky-300" />
                    +91 9310990051
                  </span>
                  <span className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    Instant WhatsApp Demo Booking
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
                <Link href="/contact" className="w-full">
                  <Button 
                    size="lg"
                    variant="outline"
                    className="w-full h-14 text-base font-bold rounded-2xl border-white/30 text-white hover:bg-white/10 bg-transparent"
                  >
                    Contact Sales Desk
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
