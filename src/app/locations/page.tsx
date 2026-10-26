"use client"

import * as React from "react"
import Link from "next/link"
import { siteConfig, locations } from "@/config/site"
import { locationsDetailData } from "@/config/locations-detail"
import { Button } from "@/components/ui/button"
import { 
  MapPin, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Search, 
  PhoneCall, 
  MessageSquare,
  Globe2,
  Building2,
  Navigation,
  ShieldCheck,
  TrendingUp,
  Receipt
} from "lucide-react"

const REGION_TABS = [
  "All Locations",
  "Domestic Metros",
  "Industrial States & Belts",
  "Global & International"
] as const

export default function LocationsHubPage() {
  const [selectedTab, setSelectedTab] = React.useState<string>("All Locations")
  const [searchQuery, setSearchQuery] = React.useState<string>("")

  const filteredLocations = React.useMemo(() => {
    return locations.filter((loc) => {
      const detail = locationsDetailData[loc.slug]
      if (!detail) return false

      const matchesTab = 
        selectedTab === "All Locations" || detail.regionType === selectedTab

      const matchesSearch = 
        searchQuery.trim() === "" ||
        detail.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        detail.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        detail.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        detail.industrialHubs.some(h => h.zone.toLowerCase().includes(searchQuery.toLowerCase()) || h.focus.toLowerCase().includes(searchQuery.toLowerCase()))

      return matchesTab && matchesSearch
    })
  }, [selectedTab, searchQuery])

  return (
    <div className="bg-white min-h-screen">
      
      {/* ========================================================= */}
      {/* SECTION 1: HERO SECTION                                   */}
      {/* ========================================================= */}
      <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 lg:py-24 border-b border-gray-200">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#125486]/10 text-[#125486] text-xs font-bold uppercase tracking-widest">
              <Globe2 className="w-3.5 h-3.5" />
              GLOBAL & REGIONAL DEPLOYMENTS
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-950 tracking-tight leading-[1.15]">
              Local CRM Solutions for <span className="text-[#125486]">20 Major Business Hubs</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-normal max-w-3xl mx-auto">
              From Indian industrial belts like Delhi NCR, Gujarat, and Bangalore to international commerce capitals in the United Kingdom, United States, Dubai, and Canada—RVM CRM delivers localized compliance, geofenced GPS field mobility, and seamless multi-branch coordination.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Link href="/request-demo">
                <Button
                  size="lg"
                  className="w-full sm:w-auto h-14 px-8 text-base font-bold rounded-full bg-[#125486] hover:bg-[#0d3e63] text-white shadow-lg hover:shadow-[#125486]/25 transition-all hover:scale-105"
                >
                  Request Regional Demo
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto h-14 px-8 text-base font-bold rounded-full border-gray-300 hover:border-[#125486] hover:text-[#125486] bg-white transition-all"
                >
                  Contact Local Consultant
                </Button>
              </Link>
            </div>

            {/* Live Search and Filter Bar */}
            <div className="pt-8 max-w-2xl mx-auto space-y-4">
              <div className="relative flex items-center">
                <Search className="w-5 h-5 text-gray-400 absolute left-4 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search locations, corridors, or industrial zones (e.g. Peenya, Chakan, Sitapura, Dubai, UK)..."
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

              {/* Region Category Tabs */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                {REGION_TABS.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setSelectedTab(tab)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                      selectedTab === tab
                        ? "bg-[#125486] text-white shadow-md shadow-[#125486]/20 scale-105"
                        : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: INTERACTIVE LOCATIONS GRID                     */}
      {/* ========================================================= */}
      <section className="py-20 bg-white">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          
          <div className="flex items-center justify-between pb-6 border-b border-gray-100 mb-10 text-xs font-bold text-gray-400 uppercase tracking-wider">
            <span>Showing {filteredLocations.length} of 20 Major Business Hubs</span>
            <span>Region: {selectedTab}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredLocations.map((loc) => {
              const detail = locationsDetailData[loc.slug]
              if (!detail) return null

              return (
                <div
                  key={loc.slug}
                  className="bg-white rounded-3xl p-7 border border-gray-200/90 hover:border-[#125486]/60 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative"
                >
                  <div className="space-y-4">
                    {/* Top Row */}
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-[#125486]/10 text-[#125486] flex items-center justify-center font-bold group-hover:bg-[#125486] group-hover:text-white transition-colors">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold text-[#125486] bg-[#125486]/10 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                        {detail.regionType}
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

                    {/* Industrial Hubs preview */}
                    <div className="space-y-1.5 pt-3 border-t border-gray-100">
                      <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">Key Industrial Corridors</span>
                      {detail.industrialHubs.slice(0, 2).map((hub, hIdx) => (
                        <div key={hIdx} className="text-xs text-gray-700 flex items-start gap-1.5">
                          <span className="text-[#125486] font-bold">•</span>
                          <span className="line-clamp-1 font-medium">{hub.zone}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                    <Link 
                      href={`/locations/${loc.slug}`} 
                      className="text-sm font-bold text-[#125486] hover:text-[#0b3c63] flex items-center gap-1.5 group-hover:gap-2 transition-all"
                    >
                      <span>Explore {detail.name} CRM</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <span className="text-[11px] font-semibold text-gray-400">
                      Active Hub
                    </span>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: THE VALUE OF REGIONALLY ADAPTED SOFTWARE       */}
      {/* ========================================================= */}
      <section className="py-24 bg-slate-50 border-t border-b border-gray-200">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#125486] bg-[#125486]/10 px-3 py-1 rounded-full">
              LOCALIZED BUSINESS ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight">
              Why Localized Operations Matter for Growing Enterprises
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Every market operates under unique tax regulations, geographical distances, and buyer communication channels. RVM CRM adapts to your local commercial reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#125486]/10 text-[#125486] flex items-center justify-center font-bold">
                <Receipt className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-950">Localized Tax & Invoicing</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Native GST/E-Way Bill in India, Making Tax Digital (MTD) VAT in the UK, State Sales Tax in the US, FTA VAT in Dubai, and GST/HST in Canada.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#125486]/10 text-[#125486] flex items-center justify-center font-bold">
                <Navigation className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-950">Traffic & Route Optimization</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Group client meetings by industrial corridors (e.g. Peenya in Bangalore, Chakan in Pune, IMT Manesar in Gurgaon) to minimize transit hours and fuel costs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#125486]/10 text-[#125486] flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-950">100% Data Sovereignty</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Hosted in Tier-IV ISO 27001 and SOC-2 certified data centers with regional legal compliance, GDPR alignment, and DPDP Act guarantees.
              </p>
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
              <div className="text-sm font-bold text-gray-900">Faster Local Quotes</div>
              <p className="text-xs text-gray-500">Drafted in 90 seconds on mobile</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl sm:text-5xl font-black text-[#125486]">99.8%</div>
              <div className="text-sm font-bold text-gray-900">Field Visit Accuracy</div>
              <p className="text-xs text-gray-500">Geofenced GPS customer check-ins</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl sm:text-5xl font-black text-[#125486]">100%</div>
              <div className="text-sm font-bold text-gray-900">Regional Tax Compliance</div>
              <p className="text-xs text-gray-500">Zero GST, VAT or sales tax errors</p>
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
                  REGIONAL IMPLEMENTATION CONSULTATION
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  Ready to See RVM CRM Configured for Your Region?
                </h2>
                <p className="text-gray-200 text-base sm:text-lg leading-relaxed max-w-2xl">
                  Schedule a 20-minute tailored demonstration to see how our platform handles your local sales territory, field workforce, and accounting requirements.
                </p>
                <div className="flex flex-wrap items-center gap-6 pt-2 text-sm text-sky-100">
                  <span className="flex items-center gap-2">
                    <PhoneCall className="w-4 h-4 text-sky-300" />
                    +91 9310990051
                  </span>
                  <span className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    Instant WhatsApp Consultation
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
