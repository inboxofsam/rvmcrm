import { Metadata } from "next"
import Link from "next/link"
import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { 
  Building2, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  TrendingUp, 
  Clock, 
  MapPin, 
  Quote, 
  ShieldCheck 
} from "lucide-react"

export const metadata: Metadata = {
  title: `Customer Case Studies | RVM CRM Success Stories`,
  description: "Explore real-world operational transformation case studies from manufacturing, logistics, healthcare, and distribution enterprises using RVM CRM.",
}

const caseStudies = [
  {
    company: "Apex Precision Tools Pvt. Ltd.",
    industry: "Manufacturing & Engineering",
    sectorIcon: "⚙️",
    badge: "Quotation Turnaround & AMC Service",
    heroMetric: "65% Faster Quotation Approvals",
    metrics: [
      { label: "Quotation Cycle Time", before: "48 Hours", after: "45 Minutes" },
      { label: "AMC Renewal Rate", before: "58%", after: "92%" },
      { label: "Engineer Site Visibility", before: "Manual Logs", after: "100% Real-Time GPS" },
    ],
    challenge:
      "Customer enquiries from trade portals and WhatsApp were lost in individual sales reps' phones. Quotations required manual discount approvals across three departments, causing 48-hour delays. Post-sales service complaints had zero tracking, leading to expired annual maintenance contracts.",
    solution:
      "Deployed RVM CRM's unified Lead Management, standardized Quotation Generation, Order Management, and Complaints/AMC Service modules. Quotation approvals now occur on mobile in minutes, and service engineers receive maintenance alerts directly on site.",
    quote:
      "RVM CRM gave us complete control from initial lead enquiry to final AMC renewal. Our quotation cycle dropped from two days to under an hour, directly driving a 28% increase in closed sales.",
    author: "Rajesh Sharma",
    designation: "Managing Director",
  },
  {
    company: "Vanguard Logistics Solutions",
    industry: "Logistics & Supply Chain",
    sectorIcon: "🚚",
    badge: "Field Force Tracking & Expense Audit",
    heroMetric: "35% Reduction in Travel Expenses",
    metrics: [
      { label: "Legitimate Travel Audit", before: "Manual Slips", after: "GPS Route Calculation" },
      { label: "Client Visits Completed", before: "2.8 / day", after: "4.9 / day" },
      { label: "End-of-Day Reporting", before: "45 Mins", after: "Zero (Instant Sync)" },
    ],
    challenge:
      "Managing 60+ field sales representatives across 14 cities was chaotic. Supervisors had no way of verifying whether scheduled client meetings took place. Fuel and conveyance reimbursement claims were frequently exaggerated without auditable distance verification.",
    solution:
      "Implemented RVM CRM's Geo-Check-In & Check-Out and Employee Movement tracking. The system auto-calculates travel kilometers between client sites and syncs with the Expense Management module, completely eliminating manual travel claim disputes.",
    quote:
      "Our field supervisors now see live stopovers on a fleet map. Fake attendance and inflated fuel claims disappeared overnight, saving us over ₹4.2 Lakhs monthly in conveyance overhead.",
    author: "Vikram Sethi",
    designation: "Head of Sales & Operations",
  },
  {
    company: "Nova Care Biomedical Systems",
    industry: "Healthcare & Medical Equipment",
    sectorIcon: "🩺",
    badge: "AMC Contracts & SLA Escalation",
    heroMetric: "40% Increase in Recurring AMC Revenue",
    metrics: [
      { label: "AMC Expiry Catch Rate", before: "62%", after: "100% Automated" },
      { label: "Breakdown Ticket Resolution", before: "36 Hours", after: "5.5 Hours" },
      { label: "Digital Sign-Off Rate", before: "Paper Receipts", after: "100% Mobile Touchscreen" },
    ],
    challenge:
      "Servicing multi-crore medical equipment in 300+ hospitals required rigorous preventative maintenance. Lapsed annual maintenance contracts went unnoticed until equipment broke down. Hospital service calls took days to assign to qualified field biomedical engineers.",
    solution:
      "Utilized RVM CRM's Complaints & Ticket Management and AMC/PMC Contract modules. The platform dispatches automated contract renewal notices 60 and 30 days before expiration, and assigns emergency hospital service tickets via automated SLA countdowns.",
    quote:
      "Hospitals rely on our machines 24/7. RVM CRM's automated ticket escalation ensures breakdown tickets are resolved within our strict 6-hour SLA, and our recurring AMC revenue jumped by 40%.",
    author: "Priya Nambiar",
    designation: "Operations Director",
  },
  {
    company: "Zenith Apparel Exports",
    industry: "Garments & Export Manufacturing",
    sectorIcon: "🧵",
    badge: "Order Coordination & Production Status",
    heroMetric: "99.2% On-Time Buyer Dispatch",
    metrics: [
      { label: "Buyer Status Email Chains", before: "30+ / order", after: "Real-Time Portal Link" },
      { label: "Sampling Approval Time", before: "5 Days", after: "24 Hours" },
      { label: "Dispatch Error Rate", before: "4.8%", after: "0.2%" },
    ],
    challenge:
      "Coordinating multi-tier garment sampling, fabric inventory approval, cutting floor progress, and container dispatch involved hundreds of disconnected emails and phone calls between international buyers, merchandisers, and factory floors.",
    solution:
      "Standardized order execution through RVM CRM's Order Management, deal-linked Team Chats, and Inventory Management modules. Merchandisers tag production heads on specific buyer orders and share high-res fabric inspection approvals instantly.",
    quote:
      "Having our merchandisers, factory heads, and dispatch team operating on RVM CRM eliminated miscommunication entirely. International buyers get instant visibility, and on-time shipments reached an all-time high.",
    author: "Amitabh Banerjee",
    designation: "VP International Merchandising",
  },
]

export default function CaseStudiesPage() {
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
              CUSTOMER SUCCESS STORIES
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-950 tracking-tight leading-[1.15]">
              Real Businesses. <span className="text-[#125486]">Measurable Transformations.</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-normal max-w-3xl mx-auto">
              Read how growing organizations in manufacturing, logistics, healthcare, and export distribution replaced fragmented tools with RVM CRM to unlock record operational velocity.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-sm font-semibold text-gray-600">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#125486]" /> Verified Enterprise Case Studies
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#125486]" /> Audited Operational Outcomes
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#125486]" /> Multi-City Deployments
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: 4 IN-DEPTH CASE STUDIES                        */}
      {/* ========================================================= */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24 space-y-20">
          
          {caseStudies.map((cs, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden hover:border-[#125486]/40 transition-all duration-300"
            >
              {/* Header Bar */}
              <div className="bg-gradient-to-r from-[#0d3455] via-[#125486] to-[#0a2740] p-8 sm:p-10 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{cs.sectorIcon}</span>
                    <span className="text-xs font-bold uppercase tracking-wider bg-white/15 px-3 py-1 rounded-full border border-white/20">
                      {cs.industry}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                    {cs.company}
                  </h2>
                  <p className="text-xs sm:text-sm text-sky-200">
                    Focus: {cs.badge}
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20 text-center sm:text-right shrink-0">
                  <span className="text-xs text-sky-200 uppercase font-bold tracking-wider block">Key Business Outcome</span>
                  <div className="text-2xl sm:text-3xl font-black text-white mt-0.5">{cs.heroMetric}</div>
                </div>
              </div>

              {/* Metrics Strip */}
              <div className="bg-slate-50 border-b border-gray-200 p-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                {cs.metrics.map((m, i) => (
                  <div key={i} className="p-3 bg-white rounded-xl border border-gray-200/80 shadow-2xs">
                    <div className="text-xs text-gray-500 font-medium">{m.label}</div>
                    <div className="mt-1 flex items-center justify-center gap-2 text-sm font-bold">
                      <span className="text-rose-600 line-through text-xs font-normal">{m.before}</span>
                      <span className="text-gray-400">→</span>
                      <span className="text-emerald-700 font-extrabold">{m.after}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Narrative Content */}
              <div className="p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
                
                {/* Challenge & Solution (span 8) */}
                <div className="lg:col-span-8 space-y-6 text-left">
                  <div className="space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-rose-600 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-rose-500" /> Operational Bottleneck
                    </div>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      {cs.challenge}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#125486] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#125486]" /> RVM CRM Solution Implemented
                    </div>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      {cs.solution}
                    </p>
                  </div>
                </div>

                {/* Verified Testimonial Quote (span 4) */}
                <div className="lg:col-span-4 bg-sky-50/50 p-6 sm:p-8 rounded-2xl border border-sky-100 flex flex-col justify-between space-y-4">
                  <Quote className="w-8 h-8 text-[#125486]/40" />
                  <p className="text-xs sm:text-sm text-gray-800 leading-relaxed italic">
                    "{cs.quote}"
                  </p>
                  <div className="pt-3 border-t border-sky-200/60">
                    <div className="font-bold text-sm text-gray-900">{cs.author}</div>
                    <div className="text-xs text-gray-600">{cs.designation} &bull; {cs.company}</div>
                  </div>
                </div>

              </div>

            </div>
          ))}

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: CALL TO ACTION BANNER                          */}
      {/* ========================================================= */}
      <section className="py-20 bg-slate-50">
        <div className="w-full max-w-5xl mx-auto px-6 text-center space-y-6">
          <div className="bg-gradient-to-r from-[#0d3455] via-[#125486] to-[#0a2740] rounded-3xl p-8 sm:p-14 text-white shadow-2xl space-y-6">
            <span className="px-3.5 py-1 rounded-full bg-white/10 text-xs font-bold uppercase tracking-wider">
              YOUR STORY IS NEXT
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Ready for Similar Results in Your Company?
            </h2>
            <p className="text-base sm:text-lg text-sky-100 max-w-2xl mx-auto">
              Schedule a personalized 20-minute demonstration and explore how RVM CRM solves your exact operational bottlenecks.
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
