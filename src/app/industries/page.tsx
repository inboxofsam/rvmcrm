"use client"

import * as React from "react"
import Link from "next/link"
import { siteConfig, industries } from "@/config/site"
import { industriesDetailData } from "@/config/industries-detail"
import { Button } from "@/components/ui/button"
import { 
  Building2, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Search, 
  PhoneCall, 
  MessageSquare,
  ShieldAlert,
  Layers,
  Factory,
  Car,
  HardHat,
  Cog,
  FlaskConical,
  Truck,
  HeartPulse,
  Hotel,
  Pill,
  ShoppingBag,
  Building,
  Wrench
} from "lucide-react"

const SECTOR_GROUPS = [
  "All Industries",
  "Heavy Industry & Engineering",
  "Supply Chain & FMCG",
  "Services & Infrastructure"
] as const

const industryIconMap: Record<string, any> = {
  manufacturing: Factory,
  automotive: Car,
  construction: HardHat,
  engineering: Cog,
  chemicals: FlaskConical,
  logistics: Truck,
  healthcare: HeartPulse,
  hospitality: Hotel,
  pharmaceuticals: Pill,
  fmcg: ShoppingBag,
  "real-estate": Building,
  "machinery-and-equipment": Wrench
}

export default function IndustriesHubPage() {
  const [selectedGroup, setSelectedGroup] = React.useState<string>("All Industries")
  const [searchQuery, setSearchQuery] = React.useState<string>("")

  const filteredIndustries = React.useMemo(() => {
    return industries.filter((ind) => {
      const detail = industriesDetailData[ind.slug]
      if (!detail) return false

      const matchesGroup = 
        selectedGroup === "All Industries" || detail.sectorGroup === selectedGroup

      const matchesSearch = 
        searchQuery.trim() === "" ||
        detail.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        detail.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        detail.description.toLowerCase().includes(searchQuery.toLowerCase())

      return matchesGroup && matchesSearch
    })
  }, [selectedGroup, searchQuery])

  return (
    <div className="bg-white min-h-screen">
      
      {/* ========================================================= */}
      {/* SECTION 1: HERO SECTION                                   */}
      {/* ========================================================= */}
      <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 lg:py-24 border-b border-gray-200">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#125486]/10 text-[#125486] text-xs font-bold uppercase tracking-widest">
              <Building2 className="w-3.5 h-3.5" />
              VERTICAL-SPECIFIC CRM WORKFLOWS
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-950 tracking-tight leading-[1.15]">
              Specialized CRM Platforms for <span className="text-[#125486]">12 Core Industries</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-normal max-w-3xl mx-auto">
              Generic off-the-shelf CRMs leave your sales reps and field technicians juggling manual spreadsheets. RVM CRM provides pre-configured workflows, document formats, and field mobile tools tailored to the operational rhythm of your specific sector.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Link href="/request-demo">
                <Button
                  size="lg"
                  className="w-full sm:w-auto h-14 px-8 text-base font-bold rounded-full bg-[#125486] hover:bg-[#0d3e63] text-white shadow-lg hover:shadow-[#125486]/25 transition-all hover:scale-105"
                >
                  Request Industry-Specific Demo
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto h-14 px-8 text-base font-bold rounded-full border-gray-300 hover:border-[#125486] hover:text-[#125486] bg-white transition-all"
                >
                  View Client Case Studies
                </Button>
              </Link>
            </div>

            {/* Live Search and Filter Bar */}
            <div className="pt-8 max-w-2xl mx-auto space-y-4">
              <div className="relative flex items-center">
                <Search className="w-5 h-5 text-gray-400 absolute left-4 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search industries (e.g. Manufacturing, Construction, Pharma, FMCG, Logistics)..."
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

              {/* Sector Group Pills */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                {SECTOR_GROUPS.map((grp) => (
                  <button
                    key={grp}
                    onClick={() => setSelectedGroup(grp)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                      selectedGroup === grp
                        ? "bg-[#125486] text-white shadow-md shadow-[#125486]/20 scale-105"
                        : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                    }`}
                  >
                    {grp}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: INTERACTIVE INDUSTRIES GRID                    */}
      {/* ========================================================= */}
      <section className="py-20 bg-white">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          
          <div className="flex items-center justify-between pb-6 border-b border-gray-100 mb-10 text-xs font-bold text-gray-400 uppercase tracking-wider">
            <span>Showing {filteredIndustries.length} of 12 Specialized Industries</span>
            <span>Sector: {selectedGroup}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredIndustries.map((ind) => {
              const detail = industriesDetailData[ind.slug]
              if (!detail) return null

              const IconComponent = industryIconMap[ind.slug] || Building2

              return (
                <div
                  key={ind.slug}
                  className="bg-white rounded-3xl p-7 border border-gray-200/90 hover:border-[#125486]/60 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative"
                >
                  <div className="space-y-4">
                    {/* Top row */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-[#125486]/10 text-[#125486] flex items-center justify-center font-bold group-hover:bg-[#125486] group-hover:text-white transition-colors">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold text-[#125486] bg-[#125486]/10 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                        {detail.badge.split(" ")[0]}
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

                    {/* Solutions highlights */}
                    <div className="space-y-2 pt-3 border-t border-gray-100">
                      {detail.solutions.slice(0, 3).map((sol, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-2 text-xs text-gray-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1 font-medium">{sol.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                    <Link 
                      href={`/industries/${ind.slug}`} 
                      className="text-sm font-bold text-[#125486] hover:text-[#0b3c63] flex items-center gap-1.5 group-hover:gap-2 transition-all"
                    >
                      <span>Explore {detail.name} Solution</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <span className="text-[11px] font-semibold text-gray-400">
                      Live
                    </span>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: WHY GENERIC CRMS FAIL IN INDUSTRIAL VERTICALS  */}
      {/* ========================================================= */}
      <section className="py-24 bg-slate-50 border-t border-b border-gray-200">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#125486] bg-[#125486]/10 px-3 py-1 rounded-full">
              THE INDUSTRIAL REALITY
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight">
              Why Generic SaaS CRMs Fail in Physical Industries
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Standard CRM software designed for Silicon Valley tech companies cannot handle the physical complexity of manufacturing, contracting, and logistics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* The Generic CRM Way */}
            <div className="bg-rose-50/50 p-8 sm:p-10 rounded-3xl border border-rose-200/80 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Standard Generic CRMs</h3>
              </div>

              <ul className="space-y-4 text-sm sm:text-base text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span><strong>Zero Equipment Tracking:</strong> Cannot track machine serial numbers, warranty dates, or preventive maintenance schedules.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span><strong>No Field GPS Verification:</strong> Field reps fill manual reports without GPS geofencing or distance calculations.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span><strong>No GST or Tally Sync:</strong> Invoices must be re-entered manually into accounting ERPs, creating errors.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span><strong>Disconnected Inventory:</strong> Sales reps promise delivery dates without knowing live stock or factory status.</span>
                </li>
              </ul>
            </div>

            {/* The RVM CRM Industry Edition Way */}
            <div className="bg-sky-50/50 p-8 sm:p-10 rounded-3xl border border-sky-200/80 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#125486] text-white flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">RVM CRM Industry Editions</h3>
              </div>

              <ul className="space-y-4 text-sm sm:text-base text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Serial-Level Asset Dossiers:</strong> Track warranties, service tickets, spare parts, and automated AMC renewals.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>GPS Geofenced Field Operations:</strong> Verified shift check-in, client visits, and automatic distance conveyance claims.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Native Two-Way Tally Prime Bridge:</strong> Direct XML synchronization for invoices, proformas, ledgers, and receipts.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Shop-Floor & Warehouse Sync:</strong> Real-time inventory reservation, batch tracking, and delivery challans.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 4: ENTERPRISE ROI METRICS BANNER                  */}
      {/* ========================================================= */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            <div className="space-y-2">
              <div className="text-4xl sm:text-5xl font-black text-[#125486]">65%</div>
              <div className="text-sm font-bold text-gray-900">Faster Technical Quotes</div>
              <p className="text-xs text-gray-500">Complex BOMs & margin locks</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl sm:text-5xl font-black text-[#125486]">99.8%</div>
              <div className="text-sm font-bold text-gray-900">Field Visit Accuracy</div>
              <p className="text-xs text-gray-500">GPS geofenced customer check-ins</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl sm:text-5xl font-black text-[#125486]">+40%</div>
              <div className="text-sm font-bold text-gray-900">AMC Renewal Retention</div>
              <p className="text-xs text-gray-500">Automated pre-expiry proposals</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl sm:text-5xl font-black text-[#125486]">35%</div>
              <div className="text-sm font-bold text-gray-900">Travel Expense Cut</div>
              <p className="text-xs text-gray-500">Actual GPS route odometer claims</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 5: CALL TO ACTION BANNER                          */}
      {/* ========================================================= */}
      <section className="py-20 bg-white">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="bg-gradient-to-br from-[#125486] to-[#0a3252] rounded-3xl p-8 sm:p-12 lg:p-16 text-white max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sky-200 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  CUSTOMIZED INDUSTRY WALKTHROUGH
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  Ready to See RVM CRM Tailored for Your Sector?
                </h2>
                <p className="text-gray-200 text-base sm:text-lg leading-relaxed max-w-2xl">
                  Schedule a 20-minute tailored demonstration to see how our platform handles your specific production, field, and financial workflows.
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
