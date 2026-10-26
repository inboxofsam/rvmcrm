import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { industries, siteConfig } from "@/config/site"
import { industriesDetailData } from "@/config/industries-detail"
import { Button } from "@/components/ui/button"
import { 
  Building2, 
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
  Wrench, 
  ShieldAlert, 
  Receipt, 
  MapPin, 
  Package, 
  FileCheck, 
  CheckCircle2, 
  Send, 
  Timer, 
  CalendarDays, 
  Sparkles, 
  Navigation, 
  Zap, 
  Users, 
  Landmark,
  ArrowRight,
  PhoneCall,
  MessageSquare,
  AlertCircle,
  TrendingUp,
  CheckCircle
} from "lucide-react"

// Dynamic icon map resolver
const iconMap: Record<string, any> = {
  Building2,
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
  Wrench,
  ShieldAlert,
  Receipt,
  MapPin,
  Package,
  FileCheck,
  CheckCircle2,
  Send,
  Timer,
  CalendarDays,
  Sparkles,
  Navigation,
  Zap,
  Users,
  Landmark
}

export async function generateStaticParams() {
  return industries.map((ind) => ({
    slug: ind.slug,
  }))
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const industry = industries.find((i) => i.slug === slug)
  const detail = industriesDetailData[slug]
  if (!industry) return {}

  return {
    title: `CRM Software for ${industry.name} Industry | RVM CRM`,
    description: detail?.description || `Explore RVM CRM tailored specifically for ${industry.name} companies. Unify sales pipelines, field teams, inventory, and post-sales service.`,
  }
}

export default async function IndustryDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const industry = industries.find((i) => i.slug === slug)
  const detail = industriesDetailData[slug]

  if (!industry || !detail) {
    notFound()
  }

  // Filter other industries for cross-navigation
  const otherIndustries = industries.filter(i => i.slug !== slug).slice(0, 4)

  return (
    <div className="bg-white min-h-screen">
      
      {/* ========================================================= */}
      {/* SECTION 1: HERO & INTERACTIVE SECTOR CONSOLE              */}
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
                CRM Software for <span className="text-[#125486]">{industry.name}</span>
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
                    Request Free {industry.name} Demo
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto h-14 px-8 text-base font-bold rounded-full border-gray-300 hover:border-[#125486] hover:text-[#125486] bg-white transition-all"
                  >
                    Talk to Sector Consultant
                  </Button>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-sm font-semibold text-gray-600">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#125486]" /> GST & E-Way Bill Compliant
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#125486]" /> Multi-Plant & Field Sync
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#125486]" /> 7–14 Day Implementation
                </span>
              </div>
            </div>

            {/* Right Visual: Feature Device Mockup Console (span 5) */}
            <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
              <div className="relative w-full max-w-lg lg:max-w-none">
                
                {/* Ambient glow backdrop */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-[#125486]/30 via-sky-400/20 to-transparent rounded-3xl blur-2xl opacity-70 -z-10" />

                {/* Device Console Frame */}
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
                      rvmcrm.com/industries/{slug}
                    </div>
                    <span className="text-[10px] font-bold text-sky-400">Industry Edition</span>
                  </div>

                  {/* Screen Content */}
                  <div className="bg-gradient-to-br from-[#07243c] via-[#0e3b61] to-[#081f34] p-6 space-y-4">
                    
                    <div className="flex items-center justify-between">
                      <div className="bg-white px-3 py-1 rounded-lg shadow inline-flex items-center">
                        <img src="/rvm-crm-logo.png" alt="RVM CRM" className="h-6 w-auto object-contain" />
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                        Sector Active
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

                    {/* Solutions Preview */}
                    <div className="space-y-2 pt-2">
                      {detail.solutions.slice(0, 3).map((sol, i) => (
                        <div key={i} className="flex items-center justify-between p-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 text-xs">
                          <span className="font-semibold text-white">{sol.title}</span>
                          <span className="text-sky-300 font-bold text-[11px]">Configured ✓</span>
                        </div>
                      ))}
                    </div>

                    {/* In-Preview CTA */}
                    <div className="pt-2">
                      <Link href="/request-demo" className="block text-center py-2.5 px-4 rounded-xl bg-white text-[#125486] font-bold text-xs shadow-lg hover:bg-sky-50 transition-colors">
                        Request Live Industry Walkthrough →
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
      {/* SECTION 2: COMMON INDUSTRY CHALLENGES WE SOLVE            */}
      {/* ========================================================= */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#125486] bg-[#125486]/10 px-3 py-1 rounded-full">
              OPERATIONAL BOTTLENECKS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight">
              Challenges Faced by {industry.name} Enterprises
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Standard generic CRMs fail to address the complex shop-floor, distribution, and field service requirements unique to this sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {detail.challenges.map((ch, idx) => (
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
      {/* SECTION 3: TAILORED CRM CAPABILITIES FOR THIS SECTOR      */}
      {/* ========================================================= */}
      <section className="py-24 bg-slate-50 border-b border-gray-200">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#125486] bg-[#125486]/10 px-3 py-1 rounded-full">
              TAILORED SOLUTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight">
              Specialized Solutions for {industry.name}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Pre-configured workflows, document formats, and field mobile tools tailored to the operational rhythm of your industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {detail.solutions.map((item, idx) => {
              const IconComponent = iconMap[item.icon] || Zap
              return (
                <div 
                  key={idx}
                  className="p-8 rounded-3xl bg-white border border-gray-200 hover:border-[#125486]/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
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
      {/* SECTION 4: END-TO-END OPERATIONAL WORKFLOW                */}
      {/* ========================================================= */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#125486] bg-[#125486]/10 px-3 py-1 rounded-full">
              STEP-BY-STEP PROCESS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight">
              The {industry.name} Operational Lifecycle
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              How RVM CRM coordinates sales, execution, site operations, and financial settlement in one synchronized flow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {detail.workflow.map((item, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 p-8 rounded-3xl border border-gray-200 shadow-sm relative space-y-4 hover:shadow-lg transition-all"
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
      {/* SECTION 5: MEASURABLE BUSINESS IMPACT & ROI               */}
      {/* ========================================================= */}
      <section className="py-24 bg-slate-50 border-b border-gray-200">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#125486] bg-[#125486]/10 px-3 py-1 rounded-full">
              VERIFIED ROI
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight">
              Proven Commercial Impact in {industry.name}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Real metrics achieved by enterprise clients after standardizing their operational workflows on RVM CRM.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {detail.results.map((r, idx) => (
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
      {/* SECTION 6: RECOMMENDED RVM CRM MODULES                   */}
      {/* ========================================================= */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#125486] bg-[#125486]/10 px-3 py-1 rounded-full">
              MODULAR FIT
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight">
              Essential Modules for {industry.name}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              While RVM CRM includes 14 connected modules, these three form the operational backbone for this sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {detail.recommendedModules.map((item, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 p-8 rounded-3xl border border-gray-200 shadow-sm space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="inline-block px-3 py-1 rounded-md bg-[#125486]/10 text-[#125486] text-xs font-bold uppercase tracking-wider">
                    Core Sector Fit
                  </div>
                  <h3 className="text-xl font-bold text-gray-950">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.role}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <Link href={`/modules/${item.slug}`} className="text-sm font-bold text-[#125486] hover:underline flex items-center gap-1.5">
                    <span>Explore {item.name} Module</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 7: SECTOR FAQS                                    */}
      {/* ========================================================= */}
      <section className="py-24 bg-slate-50 border-b border-gray-200">
        <div className="w-full max-w-4xl mx-auto px-6 space-y-12">
          
          <div className="text-center space-y-3">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Questions from {industry.name} Leaders
            </h3>
            <p className="text-sm text-gray-600">
              Clear answers to technical, operational, and integration queries.
            </p>
          </div>

          <div className="space-y-4">
            {detail.faqs.map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200/80 space-y-2">
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
      {/* SECTION 8: SECTOR DEMO CTA BANNER                         */}
      {/* ========================================================= */}
      <section className="py-20 bg-white">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="bg-gradient-to-br from-[#125486] to-[#0a3252] rounded-3xl p-8 sm:p-12 lg:p-16 text-white max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sky-200 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  TAILORED INDUSTRY DEMONSTRATION
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  Transform Your {industry.name} Operations Today
                </h2>
                <p className="text-gray-200 text-base sm:text-lg leading-relaxed max-w-2xl">
                  Schedule a 20-minute tailored demonstration to see how RVM CRM handles your company&apos;s exact commercial and field challenges.
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
                <Link href="/industries" className="w-full">
                  <Button 
                    size="lg"
                    variant="outline"
                    className="w-full h-14 text-base font-bold rounded-2xl border-white/30 text-white hover:bg-white/10 bg-transparent"
                  >
                    View All Industries
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 9: EXPLORE OTHER INDUSTRIES                       */}
      {/* ========================================================= */}
      <section className="py-16 bg-slate-50 border-t border-gray-200">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-gray-950">Explore Solutions for Other Sectors</h3>
                <p className="text-sm text-gray-600">Discover specialized CRM editions tailored for complementary business domains.</p>
              </div>
              <Link href="/industries" className="text-sm font-bold text-[#125486] hover:underline flex items-center gap-1.5 shrink-0">
                <span>View Full Industries Directory</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {otherIndustries.map((item) => (
                <Link key={item.slug} href={`/industries/${item.slug}`} className="group">
                  <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-[#125486]/50 hover:shadow-md transition-all h-full flex flex-col justify-between">
                    <div className="space-y-2">
                      <h4 className="font-bold text-gray-900 group-hover:text-[#125486] transition-colors text-base">
                        {item.name}
                      </h4>
                      <p className="text-xs text-gray-500 line-clamp-2">
                        {industriesDetailData[item.slug]?.tagline || "Connected industry-tailored CRM solution."}
                      </p>
                    </div>
                    <div className="pt-4 flex items-center gap-1 text-xs font-bold text-[#125486]">
                      <span>View solution</span>
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
