import { Metadata } from "next"
import Link from "next/link"
import { features, siteConfig } from "@/config/site"
import { featuresDetailData } from "@/config/features-detail"
import { Button } from "@/components/ui/button"
import { 
  Zap, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Smartphone, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Route, 
  Bell, 
  Radar, 
  MessagesSquare, 
  Megaphone, 
  Calendar, 
  BarChart3 
} from "lucide-react"

export const metadata: Metadata = {
  title: `Features | ${siteConfig.name}`,
  description: "Explore the comprehensive features of RVM CRM — from GPS field check-in to automated SLA alerts, route tracking, and executive BI dashboards.",
}

const iconMap: Record<string, any> = {
  "check-in-and-check-out": MapPin,
  "employee-movement": Route,
  "notifications-and-alerts": Bell,
  "nearby-customers": Radar,
  "team-chats": MessagesSquare,
  "news-and-updates": Megaphone,
  "calendar": Calendar,
  "reports-and-dashboard": BarChart3,
  "mobile-application": Smartphone,
}

export default function FeaturesPage() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* ========================================================= */}
      {/* SECTION 1: HERO SECTION                                   */}
      {/* ========================================================= */}
      <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 lg:py-24 border-b border-gray-200">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#125486]/10 text-[#125486] text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              INTELLIGENT WORKFLOW ENGINE
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-950 tracking-tight leading-[1.15]">
              Built for High-Velocity <span className="text-[#125486]">Business Execution</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-normal max-w-3xl mx-auto">
              Discover the built-in capabilities that empower sales representatives, service engineers, branch managers, and leadership to collaborate seamlessly across desktop and mobile devices.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Link href="/request-demo">
                <Button
                  size="lg"
                  className="w-full sm:w-auto h-14 px-8 text-base font-bold rounded-full bg-[#125486] hover:bg-[#0d3e63] text-white shadow-lg transition-all"
                >
                  Request Free Demo
                </Button>
              </Link>
              <Link href="/modules">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto h-14 px-8 text-base font-bold rounded-full border-gray-300 hover:border-[#125486] hover:text-[#125486] bg-white transition-all"
                >
                  Explore All Modules
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: ALL 9 FEATURES GRID                            */}
      {/* ========================================================= */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#125486] bg-[#125486]/10 px-3 py-1 rounded-full">
              ENTERPRISE CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight">
              Explore Every RVM CRM Feature
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Click into any feature to view deep workflow walkthroughs, capabilities, and business benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((item, idx) => {
              const detail = featuresDetailData[item.slug]
              const IconComp = iconMap[item.slug] || Zap
              return (
                <Link key={item.slug} href={`/features/${item.slug}`} className="group">
                  <div className="p-8 rounded-3xl bg-slate-50/70 border border-gray-200 hover:border-[#125486] hover:bg-white hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-white border border-gray-200 group-hover:bg-[#125486] group-hover:border-[#125486] text-[#125486] group-hover:text-white flex items-center justify-center font-bold shadow-xs transition-colors">
                          <IconComp className="w-7 h-7" />
                        </div>
                        <span className="text-xs font-black text-gray-400 group-hover:text-[#125486] transition-colors">
                          0{idx + 1}
                        </span>
                      </div>

                      <span className="text-[11px] font-bold text-[#125486] uppercase tracking-wider block mb-1">
                        {detail?.badge || "CORE CAPABILITY"}
                      </span>

                      <h3 className="text-xl font-bold text-gray-950 mb-3 group-hover:text-[#125486] transition-colors">
                        {item.name}
                      </h3>

                      <p className="text-sm text-gray-600 leading-relaxed mb-6">
                        {detail?.description || "Explore this powerful feature and discover how it boosts daily team productivity."}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#125486] group-hover:translate-x-1 transition-transform">
                      <span>View Feature Guide</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: FIELD & OFFICE COLLABORATION ARCHITECTURE       */}
      {/* ========================================================= */}
      <section className="py-24 bg-slate-50 border-b border-gray-200">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#125486] bg-[#125486]/10 px-3 py-1 rounded-full">
                SYNCHRONIZED OPERATIONS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                Closing the Gap Between Field & Headquarters
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                Traditional CRMs were designed solely for desk workers. RVM CRM is engineered from the ground up to connect remote field staff, on-site service engineers, and centralized management.
              </p>
              
              <div className="space-y-3">
                {[
                  "Field staff punch in with GPS-verified coordinates directly on mobile",
                  "Travel kilometers automatically calculate for transparent conveyance expenses",
                  "Quotations and service completion slips signed digitally on site",
                  "Supervisors view real-time fleet map of active client visits",
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span className="text-sm text-gray-700 font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-200 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-gray-900">Standardized Software Identity</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Consistent modules, clean navigation, and intuitive user experiences across desktop browsers and smartphone apps:
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs font-semibold">
                {["Sales", "Service", "Operation", "Inventory", "Marketing", "Finance & Accounts"].map((m, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-gray-200 flex items-center justify-between">
                    <span className="text-gray-800">{m}</span>
                    <span className="text-[#125486] font-bold">✓ Ready</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link href="/request-demo" className="block">
                  <Button className="w-full h-12 bg-[#125486] hover:bg-[#0d3e63] text-white font-bold text-sm rounded-xl">
                    Request Free 20-Min Demo
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
