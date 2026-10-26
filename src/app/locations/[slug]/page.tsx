import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { locations, siteConfig } from "@/config/site"
import { locationsDetailData } from "@/config/locations-detail"
import { Button } from "@/components/ui/button"
import { 
  MapPin, 
  Building2, 
  Factory, 
  Car, 
  Navigation, 
  Receipt, 
  ShieldCheck, 
  CheckCircle2, 
  Zap, 
  Users, 
  Wrench, 
  Clock, 
  Sparkles, 
  Globe2, 
  TrendingUp, 
  Send, 
  Package, 
  PhoneCall, 
  MessageSquare, 
  ArrowRight,
  AlertCircle,
  FileCheck,
  Timer,
  HeartPulse,
  Landmark,
  FileText,
  BarChart3,
  ShoppingBag,
  FlaskConical
} from "lucide-react"

// Icon resolver helper for dynamic location capabilities
const iconMap: Record<string, any> = {
  MapPin,
  Building2,
  Factory,
  Car,
  Navigation,
  Receipt,
  ShieldCheck,
  CheckCircle2,
  Zap,
  Users,
  Wrench,
  Clock,
  Sparkles,
  Globe2,
  TrendingUp,
  Send,
  Package,
  PhoneCall,
  MessageSquare,
  ArrowRight,
  AlertCircle,
  FileCheck,
  Timer,
  HeartPulse,
  Landmark,
  FileText,
  BarChart3,
  ShoppingBag,
  FlaskConical
}

export async function generateStaticParams() {
  return locations.map((loc) => ({
    slug: loc.slug,
  }))
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const location = locations.find((l) => l.slug === slug)
  const detail = locationsDetailData[slug]
  if (!location) return {}

  return {
    title: `Best CRM Software in ${location.name} | RVM CRM`,
    description: detail?.description || `Top-rated CRM software in ${location.name}. Empowering local sales pipelines, field technician GPS tracking, inventory, and Tally Prime accounting.`,
  }
}

export default async function LocationDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const location = locations.find((l) => l.slug === slug)
  const detail = locationsDetailData[slug]

  if (!location || !detail) {
    notFound()
  }

  // Cross-navigation for related locations
  const otherLocations = locations.filter(l => l.slug !== slug).slice(0, 4)

  return (
    <div className="bg-white min-h-screen">
      
      {/* ========================================================= */}
      {/* SECTION 1: HERO & REGIONAL CONSOLE MOCKUP                 */}
      {/* ========================================================= */}
      <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 lg:py-24 border-b border-gray-200">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Copy (span 7) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#125486]/10 text-[#125486] text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                {detail.badge}
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-950 tracking-tight leading-[1.12]">
                Best CRM Software in <span className="text-[#125486]">{location.name}</span>
              </h1>

              <div className="text-xl sm:text-2xl text-[#125486] font-bold leading-snug">
                {detail.tagline}
              </div>

              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-normal max-w-2xl">
                {detail.description}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link href="/request-demo">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto h-14 px-8 text-base font-bold rounded-full bg-[#125486] hover:bg-[#0d3e63] text-white shadow-lg hover:shadow-[#125486]/25 transition-all hover:scale-105"
                  >
                    Request Demo in {location.name}
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto h-14 px-8 text-base font-bold rounded-full border-gray-300 hover:border-[#125486] hover:text-[#125486] bg-white transition-all"
                  >
                    Talk to Regional Consultant
                  </Button>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-sm font-semibold text-gray-600">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#125486]" /> Local Tax Compliant
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#125486]" /> Field GPS Tracking
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#125486]" /> 7–14 Day Go-Live
                </span>
              </div>
            </div>

            {/* Right Visual: Feature Device Mockup Console (span 5) */}
            <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
              <div className="relative w-full max-w-lg lg:max-w-none">
                
                {/* Ambient glow backdrop */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-[#125486]/30 via-sky-400/20 to-transparent rounded-3xl blur-2xl opacity-70 -z-10" />

                {/* Device Frame */}
                <div className="bg-slate-900 border-[10px] border-slate-900 rounded-[32px] shadow-2xl overflow-hidden text-white">
                  
                  {/* Top Bar */}
                  <div className="bg-slate-950 px-4 py-3 flex items-center justify-between border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    </div>
                    <div className="text-[11px] font-mono text-slate-400 bg-slate-900 px-3 py-0.5 rounded-md flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      rvmcrm.com/locations/{slug}
                    </div>
                    <span className="text-[10px] font-bold text-sky-400">{location.name} Hub</span>
                  </div>

                  {/* Screen Content */}
                  <div className="bg-gradient-to-br from-[#07243c] via-[#0e3b61] to-[#081f34] p-6 space-y-4">
                    
                    <div className="flex items-center justify-between">
                      <div className="bg-white px-3 py-1 rounded-lg shadow inline-flex items-center">
                        <img src="/rvm-crm-logo.png" alt="RVM CRM" className="h-6 w-auto object-contain" />
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                        Regional Live
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-xl font-extrabold text-white">
                        {detail.heroPreviewTitle}
                      </h3>
                      <p className="text-xs text-sky-200">
                        {detail.heroPreviewSubtitle}
                      </p>
                    </div>

                    {/* Regional Capabilities preview */}
                    <div className="space-y-2 pt-2">
                      {detail.tailoredCapabilities.slice(0, 3).map((cap, i) => (
                        <div key={i} className="flex items-center justify-between p-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 text-xs">
                          <span className="font-semibold text-white">{cap.title}</span>
                          <span className="text-sky-300 font-bold text-[11px]">Active ✓</span>
                        </div>
                      ))}
                    </div>

                    {/* In-Preview CTA */}
                    <div className="pt-2">
                      <Link href="/request-demo" className="block text-center py-2.5 px-4 rounded-xl bg-white text-[#125486] font-bold text-xs shadow-lg hover:bg-sky-50 transition-colors">
                        Book Local 1-on-1 Walkthrough →
                      </Link>
                    </div>

                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: INDUSTRIAL HUBS & CORRIDORS IN THIS REGION     */}
      {/* ========================================================= */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          
          <div className="text-center max-w-4xl mx-auto mb-14 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#125486] bg-[#125486]/10 px-3 py-1 rounded-full">
              REGIONAL ECOSYSTEM
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight">
              Major Industrial Hubs & Commercial Corridors in {location.name}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Serving enterprises situated in key commercial belts, manufacturing clusters, and trade corridors across the region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {detail.industrialHubs.map((hub, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 p-6 rounded-2xl border border-gray-200 space-y-3 hover:border-[#125486]/50 hover:bg-white transition-all shadow-sm"
              >
                <div className="w-9 h-9 rounded-xl bg-[#125486]/10 text-[#125486] flex items-center justify-center font-bold">
                  <MapPin className="w-4.5 h-4.5" />
                </div>
                <h3 className="font-bold text-gray-950 text-base">
                  {hub.zone}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {hub.focus}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: REGIONAL OPERATIONAL CHALLENGES                */}
      {/* ========================================================= */}
      <section className="py-20 bg-slate-50 border-b border-gray-200">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          
          <div className="text-center max-w-4xl mx-auto mb-14 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#125486] bg-[#125486]/10 px-3 py-1 rounded-full">
              LOCAL OPERATIONAL BOTTLENECKS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight">
              Operational Challenges Facing Businesses in {location.name}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Standard generic CRMs fail to address the regional transport distances, local tax compliance, and field coordination requirements unique to {location.name}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {detail.regionalChallenges.map((ch, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-3xl bg-rose-50/50 border border-rose-200/80 shadow-sm space-y-4 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {ch.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {ch.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 4: TAILORED CAPABILITIES FOR THIS LOCATION        */}
      {/* ========================================================= */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          
          <div className="text-center max-w-4xl mx-auto mb-14 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#125486] bg-[#125486]/10 px-3 py-1 rounded-full">
              LOCALIZED CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight">
              How RVM CRM is Tailored for {location.name}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Engineered with specific features matching local commercial tax practices, field transport patterns, and regional buyer communication channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {detail.tailoredCapabilities.map((item, idx) => {
              const IconComponent = iconMap[item.icon] || Zap
              return (
                <div 
                  key={idx}
                  className="p-8 rounded-3xl bg-slate-50 border border-gray-200 hover:border-[#125486]/50 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#125486]/10 text-[#125486] flex items-center justify-center font-bold mb-6 group-hover:bg-[#125486] group-hover:text-white transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#125486] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 5: LOCALIZED OPERATIONAL WORKFLOW                 */}
      {/* ========================================================= */}
      <section className="py-20 bg-slate-50 border-b border-gray-200">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          
          <div className="text-center max-w-4xl mx-auto mb-14 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#125486] bg-[#125486]/10 px-3 py-1 rounded-full">
              LOCAL WORKFLOW
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight">
              Operational Execution in {location.name}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              How information moves seamlessly from regional inquiry capture to geofenced on-site visit, dispatch, and final accounting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {detail.localizedWorkflow.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm relative space-y-4 hover:shadow-lg transition-all"
              >
                <span className="w-12 h-12 rounded-2xl bg-[#125486] text-white flex items-center justify-center font-black text-lg shadow-sm">
                  {item.step}
                </span>
                <h3 className="text-xl font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 6: DOMINANT INDUSTRY VERTICALS SERVED             */}
      {/* ========================================================= */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          
          <div className="text-center max-w-4xl mx-auto mb-14 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#125486] bg-[#125486]/10 px-3 py-1 rounded-full">
              DOMINANT LOCAL SECTORS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight">
              Prominent Industry Verticals in {location.name}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Proven operational templates and specialized modules configured for key sectors driving the local economy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {detail.keyIndustries.map((ind, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 p-7 rounded-2xl border border-gray-200 space-y-3 hover:border-[#125486]/50 hover:bg-white transition-all shadow-sm"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-[#125486]" />
                <h3 className="text-lg font-bold text-gray-950">
                  {ind.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {ind.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 7: MEASURABLE ROI & REGIONAL RESULTS              */}
      {/* ========================================================= */}
      <section className="py-20 bg-slate-50 border-b border-gray-200">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          
          <div className="text-center max-w-4xl mx-auto mb-14 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#125486] bg-[#125486]/10 px-3 py-1 rounded-full">
              MEASURABLE RESULTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight">
              Verified ROI for Enterprises in {location.name}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Proven speed, transparency, and operational cost savings achieved by organizations operating in this region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {detail.roiResults.map((r, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm text-center space-y-3"
              >
                <div className="text-4xl sm:text-5xl font-black text-[#125486]">
                  {r.metric}
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {r.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {r.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 8: REGIONAL CLIENT TESTIMONIAL SPOTLIGHT          */}
      {/* ========================================================= */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-50 via-sky-50/30 to-slate-50 rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-md space-y-6 relative">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#125486] bg-[#125486]/10 px-3 py-1 rounded-full uppercase tracking-wider">
                {detail.clientTestimonial.metricBadge}
              </span>
              <span className="text-amber-500 font-bold text-sm">★★★★★ Verified Customer</span>
            </div>

            <p className="text-lg sm:text-xl text-gray-800 leading-relaxed italic">
              &quot;{detail.clientTestimonial.quote}&quot;
            </p>

            <div className="pt-4 border-t border-gray-200/80 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-gray-950 text-base">
                  {detail.clientTestimonial.author}
                </h4>
                <p className="text-sm text-gray-600">
                  {detail.clientTestimonial.role} • <strong className="text-gray-800">{detail.clientTestimonial.company}</strong>
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#125486] text-white flex items-center justify-center font-bold text-sm">
                {detail.clientTestimonial.author[0]}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 9: REGULATORY & LOCAL TAX COMPLIANCE              */}
      {/* ========================================================= */}
      <section className="py-20 bg-slate-50 border-b border-gray-200">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="text-center space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#125486] bg-[#125486]/10 px-3 py-1 rounded-full">
                LEGAL & TAX SOVEREIGNTY
              </span>
              <h2 className="text-3xl font-extrabold text-gray-950">
                {detail.complianceInfo.title}
              </h2>
              <p className="text-sm sm:text-base text-gray-600">
                {detail.complianceInfo.desc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="bg-white p-6 rounded-2xl border border-gray-200 space-y-2">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Tax & Invoicing Standards</span>
                <p className="text-sm font-semibold text-gray-900">{detail.complianceInfo.taxStandards}</p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200 space-y-2">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Data Hosting & Encryption</span>
                <p className="text-sm font-semibold text-gray-900">{detail.complianceInfo.dataHosting}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 10: REGIONAL FAQS ACCORDION                       */}
      {/* ========================================================= */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="w-full max-w-4xl mx-auto px-6 space-y-12">
          
          <div className="text-center space-y-3">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Frequently Asked Questions for {location.name}
            </h3>
            <p className="text-sm text-gray-600">
              Direct operational answers from our regional implementation specialists.
            </p>
          </div>

          <div className="space-y-4">
            {detail.faqs.map((faq, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-gray-200/80 space-y-2">
                <h4 className="text-base font-bold text-gray-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#125486] text-white flex items-center justify-center text-xs shrink-0 font-bold">
                    Q
                  </span>
                  {faq.q}
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed pl-8">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 11: REGIONAL DEMO CTA HERO BANNER                 */}
      {/* ========================================================= */}
      <section className="py-20 bg-white">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="bg-gradient-to-br from-[#125486] to-[#0a3252] rounded-3xl p-8 sm:p-12 lg:p-16 text-white max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sky-200 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  EXPERIENCE RVM CRM IN {location.name.toUpperCase()}
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  Ready to Transform Your Operations in {location.name}?
                </h2>
                <p className="text-gray-200 text-base sm:text-lg leading-relaxed max-w-2xl">
                  Schedule a 20-minute tailored demonstration to see how RVM CRM solves your local commercial, field workforce, and Tally accounting challenges.
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
                <Link href="/locations" className="w-full">
                  <Button 
                    size="lg"
                    variant="outline"
                    className="w-full h-14 text-base font-bold rounded-2xl border-white/30 text-white hover:bg-white/10 bg-transparent"
                  >
                    View All Locations
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 12: EXPLORE OTHER REGIONS                         */}
      {/* ========================================================= */}
      <section className="py-16 bg-slate-50 border-t border-gray-200">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-gray-950">Explore Other Major Business Hubs</h3>
                <p className="text-sm text-gray-600">Discover localized CRM editions configured for complementary domestic and international markets.</p>
              </div>
              <Link href="/locations" className="text-sm font-bold text-[#125486] hover:underline flex items-center gap-1.5 shrink-0">
                <span>View Full Locations Directory</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {otherLocations.map((item) => (
                <Link key={item.slug} href={`/locations/${item.slug}`} className="group">
                  <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-[#125486]/50 hover:shadow-md transition-all h-full flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#125486]" />
                        <h4 className="font-bold text-gray-900 group-hover:text-[#125486] transition-colors text-base">
                          {item.name}
                        </h4>
                      </div>
                      <p className="text-xs text-gray-500 line-clamp-2">
                        {locationsDetailData[item.slug]?.tagline || "Regional enterprise CRM solution."}
                      </p>
                    </div>
                    <div className="pt-4 flex items-center gap-1 text-xs font-bold text-[#125486]">
                      <span>View local edition</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
