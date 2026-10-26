import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { features, siteConfig } from "@/config/site"
import { featuresDetailData } from "@/config/features-detail"
import { Button } from "@/components/ui/button"
import { 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Layers, 
  Workflow, 
  Clock, 
  TrendingUp, 
  HelpCircle,
  Smartphone,
  Laptop,
  CheckCircle,
  MapPin,
  Route,
  Navigation,
  Timer,
  BatteryCharging,
  Bell,
  BellRing,
  CreditCard,
  AlertTriangle,
  Send,
  Radar,
  Compass,
  CalendarPlus,
  MessagesSquare,
  Paperclip,
  Users2,
  Shield,
  Megaphone,
  CheckCheck,
  FileText,
  Pin,
  CalendarDays,
  RefreshCw,
  Palette,
  MailCheck,
  LineChart,
  Users,
  SlidersHorizontal,
  FileSpreadsheet,
  WifiOff,
  FileCheck,
  PenTool,
  QrCode
} from "lucide-react"

// Icon resolver helper
const iconMap: Record<string, any> = {
  MapPin,
  CheckCircle,
  Clock,
  Bell,
  Route,
  Navigation,
  Timer,
  BatteryCharging,
  BellRing,
  CreditCard,
  AlertTriangle,
  Send,
  Radar,
  Layers,
  Compass,
  CalendarPlus,
  MessagesSquare,
  Paperclip,
  Users2,
  Shield,
  Megaphone,
  CheckCheck,
  FileText,
  Pin,
  CalendarDays,
  RefreshCw,
  Palette,
  MailCheck,
  LineChart,
  Users,
  SlidersHorizontal,
  FileSpreadsheet,
  WifiOff,
  FileCheck,
  PenTool,
  QrCode
}

export async function generateStaticParams() {
  return features.map((feature) => ({
    slug: feature.slug,
  }))
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const feature = features.find((f) => f.slug === slug)
  const detail = featuresDetailData[slug]
  if (!feature) return {}

  return {
    title: `${feature.name} | RVM CRM Features`,
    description: detail?.description || `Explore ${feature.name} capability in RVM CRM. Built to simplify operations and increase profitability.`,
  }
}

export default async function FeaturePage({ 
  params 
}: { 
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const feature = features.find((f) => f.slug === slug)
  const detail = featuresDetailData[slug]
  
  if (!feature || !detail) {
    notFound()
  }

  return (
    <div className="bg-white">
      
      {/* ========================================================= */}
      {/* SECTION 1: HERO & DEVICE MOCKUP PREVIEW                    */}
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
                {feature.name}
              </h1>

              <div className="text-xl sm:text-2xl text-[#125486] font-bold">
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
                    className="w-full sm:w-auto h-14 px-8 text-base font-bold rounded-full bg-[#125486] hover:bg-[#0d3e63] text-white shadow-lg hover:shadow-[#125486]/25 transition-all"
                  >
                    Request Free Demo
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto h-14 px-8 text-base font-bold rounded-full border-gray-300 hover:border-[#125486] hover:text-[#125486] bg-white transition-all"
                  >
                    Talk to Sales Team
                  </Button>
                </Link>
              </div>

              {/* Feature Highlights */}
              <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-sm font-semibold text-gray-600">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#125486]" /> Native Android & iOS
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#125486]" /> Real-Time Cloud Sync
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#125486]" /> 100% Secure & Encrypted
                </span>
              </div>
            </div>

            {/* Right Visual: Feature Device Mockup Console (span 5) */}
            <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
              <div className="relative w-full max-w-lg lg:max-w-none">
                
                {/* Glow backdrop */}
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
                      rvmcrm.com/feature/{slug}
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
                        Feature Active
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

                    {/* Feature Capability Highlights */}
                    <div className="space-y-2 pt-2">
                      {detail.capabilities.slice(0, 3).map((cap, i) => (
                        <div key={i} className="flex items-center justify-between p-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 text-xs">
                          <span className="font-semibold text-white">{cap.title}</span>
                          <span className="text-sky-300 font-bold text-[11px]">Enabled ✓</span>
                        </div>
                      ))}
                    </div>

                    {/* In-Preview CTA */}
                    <div className="pt-2">
                      <Link href="/request-demo" className="block text-center py-2.5 px-4 rounded-xl bg-white text-[#125486] font-bold text-xs shadow-lg hover:bg-sky-50 transition-colors">
                        Request Free Live Demo →
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
              KEY HIGHLIGHTS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight">
              Core Capabilities of {feature.name}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Engineered with enterprise rigor to handle complex field operations, automated alerts, and seamless multi-department coordination.
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
      {/* SECTION 3: OPERATIONAL WORKFLOW (HOW IT WORKS)            */}
      {/* ========================================================= */}
      <section className="py-24 bg-slate-50 border-b border-gray-200">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#125486] bg-[#125486]/10 px-3 py-1 rounded-full">
              STEP-BY-STEP EXECUTION
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight">
              How {feature.name} Works
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Designed for zero friction. From trigger to execution to automated reporting, here is how the workflow operates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      {/* SECTION 4: MEASURABLE BUSINESS IMPACT & ROI               */}
      {/* ========================================================= */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#125486] bg-[#125486]/10 px-3 py-1 rounded-full">
              MEASURABLE ROI
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight">
              Real Business Impact & Outcomes
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Proven efficiency gains and cost reductions experienced by organizations using this capability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      {/* SECTION 5: CROSS-MODULE CONNECTED WORKFLOWS               */}
      {/* ========================================================= */}
      <section className="py-24 bg-slate-50 border-b border-gray-200">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#125486] bg-[#125486]/10 px-3 py-1 rounded-full">
              CONNECTED WORKFLOWS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight">
              Seamlessly Synchronized Across All Modules
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Unlike standalone single-purpose tools, {feature.name} shares live context across your entire operational CRM stack.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      {/* SECTION 6: FAQS & DEMO ACTION BANNER                      */}
      {/* ========================================================= */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="w-full max-w-4xl mx-auto px-6 space-y-12">
          
          <div className="text-center space-y-3">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Questions About {feature.name}?
            </h3>
            <p className="text-sm text-gray-600">
              Common operational questions answered by our solutions team.
            </p>
          </div>

          <div className="space-y-4">
            {detail.faqs.map((faq, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-gray-200/80 space-y-2">
                <h4 className="text-base font-bold text-gray-900 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#125486]" />
                  {faq.q}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          {/* High-Impact Bottom CTA Banner */}
          <div className="bg-gradient-to-r from-[#0d3455] via-[#125486] to-[#0a2740] rounded-3xl p-8 sm:p-12 text-white shadow-xl text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/10 rounded-full text-xs font-bold uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5" /> 20-Minute Live Walkthrough
            </div>
            
            <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              See {feature.name} Configured for Your Team
            </h3>

            <p className="text-sm sm:text-base text-sky-100 max-w-xl mx-auto">
              Schedule a personalized demonstration and explore how RVM CRM eliminates operational bottlenecks for your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Link href="/request-demo">
                <Button className="w-full sm:w-auto h-12 px-8 bg-white text-[#125486] hover:bg-sky-50 font-bold text-sm rounded-xl shadow-lg">
                  Request Free Demo Now
                </Button>
              </Link>
              <Link href="/features">
                <Button variant="outline" className="w-full sm:w-auto h-12 px-8 border-white/30 text-white hover:bg-white/10 font-bold text-sm rounded-xl">
                  Explore All Features
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}
