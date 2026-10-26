import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { modules, siteConfig } from "@/config/site"
import { modulesDetailData } from "@/config/modules-detail"
import { Button } from "@/components/ui/button"
import { 
  Users, 
  Clock, 
  Layers, 
  FileText, 
  Zap, 
  Workflow, 
  Send, 
  Kanban, 
  CalendarDays, 
  MapPin, 
  BellRing, 
  ShoppingBag, 
  FileCheck, 
  Truck, 
  Receipt, 
  ShieldAlert, 
  RefreshCw, 
  Wrench, 
  Package, 
  MessagesSquare, 
  Timer, 
  PenTool, 
  Sparkles, 
  CheckCircle, 
  CheckCircle2,
  Navigation, 
  CheckCheck, 
  QrCode, 
  BarChart3, 
  Landmark, 
  CreditCard, 
  FileSpreadsheet, 
  LineChart, 
  MailCheck,
  ArrowRight,
  ShieldCheck,
  PhoneCall,
  MessageSquare
} from "lucide-react"

// Icon resolver helper for dynamic icons
const iconMap: Record<string, any> = {
  Users,
  Clock,
  Layers,
  FileText,
  Zap,
  Workflow,
  Send,
  Kanban,
  CalendarDays,
  MapPin,
  BellRing,
  ShoppingBag,
  FileCheck,
  Truck,
  Receipt,
  ShieldAlert,
  RefreshCw,
  Wrench,
  Package,
  MessagesSquare,
  Timer,
  PenTool,
  Sparkles,
  CheckCircle,
  Navigation,
  CheckCheck,
  QrCode,
  BarChart3,
  Landmark,
  CreditCard,
  FileSpreadsheet,
  LineChart,
  MailCheck
}

export async function generateStaticParams() {
  return modules.map((module) => ({
    slug: module.slug,
  }))
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const moduleItem = modules.find((m) => m.slug === slug)
  const detail = modulesDetailData[slug]
  if (!moduleItem) return {}

  return {
    title: `${moduleItem.name} Software | RVM CRM Connected Platform`,
    description: detail?.description || `Explore ${moduleItem.name} module in RVM CRM. Built to unify departmental workflows, boost team efficiency, and accelerate revenue.`,
  }
}

export default async function ModuleDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const moduleItem = modules.find((m) => m.slug === slug)
  const detail = modulesDetailData[slug]

  if (!moduleItem || !detail) {
    notFound()
  }

  // Filter other modules for recommendations
  const otherModules = modules.filter(m => m.slug !== slug).slice(0, 4)

  return (
    <div className="bg-white min-h-screen">
      
      {/* ========================================================= */}
      {/* SECTION 1: HERO & DEVICE PREVIEW CONSOLE                  */}
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
                {moduleItem.name} <span className="text-[#125486]">Module</span>
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
                    Request Free 20-Min Demo
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto h-14 px-8 text-base font-bold rounded-full border-gray-300 hover:border-[#125486] hover:text-[#125486] bg-white transition-all"
                  >
                    Talk to Solutions Architect
                  </Button>
                </Link>
              </div>

              {/* Trust badges */}
              <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-sm font-semibold text-gray-600">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#125486]" /> Cross-Departmental Sync
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#125486]" /> Native Mobile & Desktop
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#125486]" /> 100% Data Sovereignty
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
                      rvmcrm.com/modules/{slug}
                    </div>
                    <span className="text-[10px] font-bold text-sky-400">RVM CRM v4.2</span>
                  </div>

                  {/* Screen Content */}
                  <div className="bg-gradient-to-br from-[#07243c] via-[#0e3b61] to-[#081f34] p-6 space-y-4">
                    
                    <div className="flex items-center justify-between">
                      <div className="bg-white px-3 py-1 rounded-lg shadow inline-flex items-center">
                        <img src="/rvm-crm-logo.png" alt="RVM CRM" className="h-6 w-auto object-contain" />
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                        Module Active
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

                    {/* Capabilities preview */}
                    <div className="space-y-2 pt-2">
                      {detail.capabilities.slice(0, 3).map((cap, i) => (
                        <div key={i} className="flex items-center justify-between p-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 text-xs">
                          <span className="font-semibold text-white">{cap.title}</span>
                          <span className="text-sky-300 font-bold text-[11px]">Online ✓</span>
                        </div>
                      ))}
                    </div>

                    {/* In-Preview CTA */}
                    <div className="pt-2">
                      <Link href="/request-demo" className="block text-center py-2.5 px-4 rounded-xl bg-white text-[#125486] font-bold text-xs shadow-lg hover:bg-sky-50 transition-colors">
                        Request Live Walkthrough →
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
      {/* SECTION 2: CORE CAPABILITIES MATRIX                       */}
      {/* ========================================================= */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#125486] bg-[#125486]/10 px-3 py-1 rounded-full">
              CORE CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight">
              What the {moduleItem.name} Module Delivers
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Built with enterprise precision to eliminate bottlenecks, automate manual friction, and keep your teams moving forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {detail.capabilities.map((item, idx) => {
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
      {/* SECTION 3: STEP-BY-STEP OPERATIONAL WORKFLOW              */}
      {/* ========================================================= */}
      <section className="py-24 bg-slate-50 border-b border-gray-200">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#125486] bg-[#125486]/10 px-3 py-1 rounded-full">
              OPERATIONAL WORKFLOW
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight">
              How the {moduleItem.name} Workflow Operates
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Every step connects with the next. From initial trigger to closed milestone, here is how information moves smoothly across your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {detail.workflow.map((item, idx) => (
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
      {/* SECTION 4: MEASURABLE ROI & BUSINESS IMPACT               */}
      {/* ========================================================= */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#125486] bg-[#125486]/10 px-3 py-1 rounded-full">
              MEASURABLE ROI
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight">
              Real Commercial Impact & Out-of-the-Box Value
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Verified operational improvements achieved by mid-market enterprises running the {moduleItem.name} module.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {detail.benefits.map((b, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-3xl bg-gradient-to-br from-slate-50 to-sky-50/40 border border-gray-200/90 shadow-sm text-center space-y-3"
              >
                <div className="text-4xl sm:text-5xl font-black text-[#125486]">
                  {b.metric}
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {b.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 5: CROSS-MODULE WORKFLOW CONTINUITY               */}
      {/* ========================================================= */}
      <section className="py-24 bg-slate-50 border-b border-gray-200">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#125486] bg-[#125486]/10 px-3 py-1 rounded-full">
              WORKFLOW CONTINUITY
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight">
              How {moduleItem.name} Connects Across the Platform
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              No software silos. Data created in this module immediately enriches your sales, field, and financial workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {detail.connectedModules.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white p-7 rounded-3xl border border-gray-200 shadow-sm space-y-3"
              >
                <div className="inline-block px-3 py-1 rounded-md bg-[#125486]/10 text-[#125486] text-xs font-bold uppercase tracking-wider">
                  Syncs with {item.module}
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {item.howItConnects}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 6: FAQS & KNOWLEDGE ACCORDION                     */}
      {/* ========================================================= */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="w-full max-w-4xl mx-auto px-6 space-y-12">
          
          <div className="text-center space-y-3">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Questions About {moduleItem.name}?
            </h3>
            <p className="text-sm text-gray-600">
              Direct operational answers from our product specialists.
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
      {/* SECTION 7: DEMO CTA HERO BANNER                           */}
      {/* ========================================================= */}
      <section className="py-20 bg-white">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="bg-gradient-to-br from-[#125486] to-[#0a3252] rounded-3xl p-8 sm:p-12 lg:p-16 text-white max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sky-200 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  EXPERIENCE THIS MODULE LIVE
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  Ready to see {moduleItem.name} in action?
                </h2>
                <p className="text-gray-200 text-base sm:text-lg leading-relaxed max-w-2xl">
                  Schedule a 20-minute tailored demonstration to see how our {moduleItem.name.toLowerCase()} solution solves your exact operational challenges.
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
                <Link href="/modules" className="w-full">
                  <Button 
                    size="lg"
                    variant="outline"
                    className="w-full h-14 text-base font-bold rounded-2xl border-white/30 text-white hover:bg-white/10 bg-transparent"
                  >
                    View All Modules
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 8: EXPLORE MORE MODULES                           */}
      {/* ========================================================= */}
      <section className="py-16 bg-slate-50 border-t border-gray-200">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-gray-950">Explore Other RVM CRM Modules</h3>
                <p className="text-sm text-gray-600">Discover complementary modules designed to streamline your business end-to-end.</p>
              </div>
              <Link href="/modules" className="text-sm font-bold text-[#125486] hover:underline flex items-center gap-1.5 shrink-0">
                <span>View Full Modules Directory</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {otherModules.map((item) => (
                <Link key={item.slug} href={`/modules/${item.slug}`} className="group">
                  <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-[#125486]/50 hover:shadow-md transition-all h-full flex flex-col justify-between">
                    <div className="space-y-2">
                      <h4 className="font-bold text-gray-900 group-hover:text-[#125486] transition-colors text-base">
                        {item.name}
                      </h4>
                      <p className="text-xs text-gray-500 line-clamp-2">
                        {modulesDetailData[item.slug]?.tagline || "Connected business management module."}
                      </p>
                    </div>
                    <div className="pt-4 flex items-center gap-1 text-xs font-bold text-[#125486]">
                      <span>Learn more</span>
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
