import { Metadata } from "next"
import Link from "next/link"
import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  Layers, 
  Workflow, 
  Boxes, 
  BarChart3, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  TrendingUp,
  Smartphone,
  Users
} from "lucide-react"

export const metadata: Metadata = {
  title: `Why RVM CRM | The Connected Business Management Platform`,
  description: "Discover why growing businesses choose RVM CRM over fragmented apps and legacy ERPs. Experience true operational continuity from lead to billing.",
}

export default function WhyRvmCrmPage() {
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
              THE CONNECTED PLATFORM ADVANTAGE
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-950 tracking-tight leading-[1.15]">
              Why Fast-Growing Businesses <span className="text-[#125486]">Choose RVM CRM</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-normal max-w-3xl mx-auto">
              Most companies lose 30% of their operational bandwidth juggling disconnected tools for sales, field tasks, inventory, and service. RVM CRM replaces software fragmentation with one powerful, cohesive engine.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Link href="/request-demo">
                <Button
                  size="lg"
                  className="w-full sm:w-auto h-14 px-8 text-base font-bold rounded-full bg-[#125486] hover:bg-[#0d3e63] text-white shadow-lg transition-all hover:scale-105"
                >
                  Request Free 20-Min Demo
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto h-14 px-8 text-base font-bold rounded-full border-gray-300 hover:border-[#125486] hover:text-[#125486] bg-white transition-all"
                >
                  Explore Customer Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: THE PROBLEM VS. THE RVM CRM SOLUTION           */}
      {/* ========================================================= */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#125486] bg-[#125486]/10 px-3 py-1 rounded-full">
              REAL-WORLD COMPARISON
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight">
              Scattered Tools vs. Unified RVM CRM
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              See what happens when you replace manual spreadsheets and personal chat groups with an enterprise workflow platform.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* The Old Disconnected Way */}
            <div className="bg-rose-50/50 p-8 sm:p-10 rounded-3xl border border-rose-200/80 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold">
                  <XCircle className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">The Fragmented Approach</h3>
              </div>
              
              <ul className="space-y-4 text-sm text-gray-700">
                {[
                  "Customer details lost in personal WhatsApp chats when salespeople quit",
                  "Quotation creation takes 24–48 hours due to manual discount checks",
                  "Zero visibility into whether field reps actually visit client job sites",
                  "Dispatched orders frequently stall due to unverified warehouse stock",
                  "Annual maintenance contracts (AMC) expire unrenewed without automated notices",
                  "Management waits until end-of-month to see compiled financial performance",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-rose-500 font-bold shrink-0 mt-0.5">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* The Connected RVM CRM Way */}
            <div className="bg-emerald-50/40 p-8 sm:p-10 rounded-3xl border border-emerald-200/90 space-y-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">The RVM CRM Way</h3>
              </div>
              
              <ul className="space-y-4 text-sm text-gray-800 font-medium">
                {[
                  "100% centralized customer interaction history owned permanently by your company",
                  "Standardized PDF quotations created and approved in under 60 seconds",
                  "GPS-verified Check-In & Check-Out confirms exact client site attendance",
                  "Sales orders trigger automated inventory reservations and dispatch slips",
                  "Automated AMC expiry reminders and preventive maintenance service schedules",
                  "Live executive dashboard updating with every lead, quotation, and collection",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold shrink-0 mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: 6 CORE PILLARS OF RVM CRM                      */}
      {/* ========================================================= */}
      <section className="py-24 bg-slate-50 border-b border-gray-200">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#125486] bg-[#125486]/10 px-3 py-1 rounded-full">
              BUILT FOR GROWING ENTERPRISES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight">
              The 6 Strategic Pillars of RVM CRM
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Every module, screen, and workflow in RVM CRM is designed around practical business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Workflow,
                title: "1. End-to-End Workflow Continuity",
                desc: "Move effortlessly from first inquiry to quotation approval, confirmed order, warehouse dispatch, AMC warranty, and customer billing without re-entering data.",
              },
              {
                icon: Smartphone,
                title: "2. Native Field Force Mobility",
                desc: "GPS-verified shift attendance, live travel route tracking, and offline-capable mobile apps ensure field reps and service technicians perform at full speed.",
              },
              {
                icon: Boxes,
                title: "3. Deep Industry-Specific Workflows",
                desc: "Tailored to real operational challenges in manufacturing, logistics, healthcare equipment, garments, automotive, and commercial distribution.",
              },
              {
                icon: Clock,
                title: "4. Rapid 7–14 Day Go-Live",
                desc: "Forget traditional enterprise software rollouts that take 6–12 months. RVM CRM is modular, structured, and ready to deploy in days with guided data imports.",
              },
              {
                icon: ShieldCheck,
                title: "5. High ROI & Zero Hidden Fees",
                desc: "Transparent licensing tailored to growing businesses. No surprise add-on charges for basic features like exports, mobile apps, or API access.",
              },
              {
                icon: Users,
                title: "6. Dedicated Onboarding & Support",
                desc: "Direct support from experienced solutions engineers based in India who understand local market realities, tax structures, and business practices.",
              },
            ].map((pillar, idx) => {
              const IconComp = pillar.icon
              return (
                <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-200 hover:border-[#125486]/50 hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 rounded-2xl bg-[#125486]/10 text-[#125486] flex items-center justify-center font-bold mb-6">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{pillar.desc}</p>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 4: QUANTITATIVE ROI IMPACT METRICS                */}
      {/* ========================================================= */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#125486] bg-[#125486]/10 px-3 py-1 rounded-full">
              MEASURABLE RESULTS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight">
              Average ROI Achieved by RVM CRM Clients
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Based on client performance audits after 90 days of deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: "65%", label: "Faster Quotation Approvals", desc: "Turn inquiries into signed proposals in under 1 hour." },
              { metric: "99.8%", label: "Attendance Punctuality", desc: "GPS-stamped check-ins completely eradicate proxy punches." },
              { metric: "40%", label: "Increase in AMC Renewals", desc: "Automated expiry notices ensure contracts are renewed on time." },
              { metric: "35%", label: "Reduction in Travel Costs", desc: "GPS route verification audits legitimate conveyance mileage." },
            ].map((stat, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-gray-200 text-center space-y-2">
                <div className="text-4xl sm:text-5xl font-black text-[#125486]">{stat.metric}</div>
                <div className="text-lg font-bold text-gray-900">{stat.label}</div>
                <p className="text-xs text-gray-600 leading-relaxed">{stat.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 5: CONVERSION DEMO CTA BANNER                     */}
      {/* ========================================================= */}
      <section className="py-20 bg-slate-50">
        <div className="w-full max-w-5xl mx-auto px-6 text-center space-y-6">
          <div className="bg-gradient-to-r from-[#0d3455] via-[#125486] to-[#0a2740] rounded-3xl p-8 sm:p-14 text-white shadow-2xl space-y-6">
            <span className="px-3.5 py-1 rounded-full bg-white/10 text-xs font-bold uppercase tracking-wider">
              YOUR TRANSFORMATION STARTS HERE
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Ready to Connect Your People & Workflows?
            </h2>
            <p className="text-base sm:text-lg text-sky-100 max-w-2xl mx-auto">
              Schedule a personalized 20-minute demonstration tailored specifically to your industry, team size, and daily operational bottlenecks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Link href="/request-demo">
                <Button className="w-full sm:w-auto h-13 px-8 bg-white text-[#125486] hover:bg-sky-50 font-bold text-base rounded-xl shadow-lg transition-transform hover:scale-105">
                  Request Free Demo Now →
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="w-full sm:w-auto h-13 px-8 border-white/30 text-white hover:bg-white/10 font-bold text-base rounded-xl">
                  Talk to Sales Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
