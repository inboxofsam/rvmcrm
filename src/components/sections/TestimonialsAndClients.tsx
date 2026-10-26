import Link from "next/link"
import { Star, CheckCircle, Building2, Quote, ArrowRight, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TestimonialsAndClients() {
  const clientSectors = [
    { name: "Apex Precision Tools", sector: "Industrial Machinery", icon: "⚙️", tag: "Manufacturing" },
    { name: "Vanguard Logistics", sector: "Supply Chain & Fleet", icon: "🚚", tag: "Logistics" },
    { name: "Zenith Textiles", sector: "Garments & Export", icon: "🧵", tag: "Textiles" },
    { name: "Nova Care Biomedical", sector: "Healthcare Equipment", icon: "🩺", tag: "Medical Devices" },
    { name: "Trident Infrastructure", sector: "Real Estate & EPC", icon: "🏗️", tag: "Construction" },
    { name: "Dynamic Components", sector: "Automotive Distribution", icon: "🚗", tag: "Automotive" },
  ]

  const testimonials = [
    {
      name: "Rajesh Sharma",
      role: "Managing Director",
      company: "Apex Precision Tools Pvt. Ltd.",
      industry: "Manufacturing & Engineering",
      quote:
        "Before deploying RVM CRM, our quotation turnaround took 48 hours and field service tickets were scattered across chat apps. Connecting lead tracking, quotation approval, inventory dispatch, and AMC service tickets into one unified system reduced our sales cycle time by 65% and gave our leadership 100% operational transparency.",
      rating: 5,
      metrics: "65% Faster Quotation Turnaround",
    },
    {
      name: "Vikram Sethi",
      role: "Head of Sales & Operations",
      company: "Vanguard Logistics Solutions",
      industry: "Supply Chain & Distribution",
      quote:
        "The geo-verified Check-In & Check-Out along with Employee Movement tracking transformed our field team's productivity. Managers can view client visit logs in real-time, route travel expenses directly to accounts, and eliminate manual end-of-day reporting entirely.",
      rating: 5,
      metrics: "94% On-Time Field Visit Rate",
    },
    {
      name: "Priya Nambiar",
      role: "Operations Director",
      company: "Nova Care Biomedical Systems",
      industry: "Healthcare & AMC Services",
      quote:
        "RVM CRM's Complaints, Ticket, and AMC Management module handles our preventative maintenance schedules flawlessly. Automated renewal notices and SLA escalations ensure we never miss an annual contract renewal or urgent breakdown call.",
      rating: 5,
      metrics: "40% Increase in AMC Renewals",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50/70 to-slate-100/90 border-t border-gray-200 relative overflow-hidden">
      {/* Ambient background decoration */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#125486]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#125486]/10 text-[#125486] text-xs font-bold uppercase tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5" />
            TRUSTED BY GROWING ENTERPRISES
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight">
            Proven Results Across Diverse Industries
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            Discover how organizations use RVM CRM to organize customer relationships, coordinate field teams, manage inventory workflows, and drive higher profitability.
          </p>
        </div>

        {/* Client Sectors & Partners Strip */}
        <div className="mb-16">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
              Trusted Industry Sectors & Enterprise Deployments
            </span>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {clientSectors.map((client, idx) => (
              <div 
                key={idx}
                className="bg-white p-5 rounded-2xl border border-gray-200/90 hover:border-[#125486]/50 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                  {client.icon}
                </div>
                <div className="font-bold text-sm text-gray-900 group-hover:text-[#125486] transition-colors leading-tight">
                  {client.name}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {client.sector}
                </div>
                <span className="mt-3 px-2 py-0.5 rounded-md bg-slate-100 text-gray-600 text-[10px] font-semibold uppercase tracking-wider group-hover:bg-[#125486]/10 group-hover:text-[#125486] transition-colors">
                  {client.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-3xl p-8 border border-gray-200/80 shadow-md hover:shadow-xl hover:border-[#125486]/40 transition-all duration-300 flex flex-col justify-between relative group"
            >
              {/* Quotation icon badge */}
              <div className="absolute top-6 right-6 text-slate-200 group-hover:text-[#125486]/20 transition-colors">
                <Quote className="w-10 h-10" />
              </div>

              <div>
                {/* Star rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-gray-700 ml-2">5.0 Verified Review</span>
                </div>

                {/* Key metric badge */}
                <div className="inline-block mb-4 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-lg border border-emerald-200/70">
                  ⚡ {item.metrics}
                </div>

                {/* Testimonial body */}
                <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed italic mb-8 relative z-10">
                  "{item.quote}"
                </p>
              </div>

              {/* Author & Company Profile */}
              <div className="pt-5 border-t border-gray-100 flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#125486] to-sky-600 text-white flex items-center justify-center font-black text-base shadow-sm shrink-0">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-gray-950 text-base flex items-center gap-1.5">
                    {item.name}
                    <CheckCircle className="w-3.5 h-3.5 text-[#125486]" />
                  </div>
                  <div className="text-xs font-medium text-gray-500">
                    {item.role} &bull; <span className="text-gray-700 font-semibold">{item.company}</span>
                  </div>
                  <div className="text-[11px] text-[#125486] font-semibold mt-0.5">
                    {item.industry}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Action Banner */}
        <div className="bg-gradient-to-r from-[#0d3455] via-[#125486] to-[#0a2740] rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-sky-400/20">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Ready to Upgrade Your Business Operations?
            </h3>
            <p className="text-sm sm:text-base text-sky-100 max-w-2xl">
              Schedule a personalized 20-minute demonstration tailored specifically to your business workflows and team size.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3.5 shrink-0 w-full md:w-auto">
            <Link href="/request-demo" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto h-12 px-7 bg-white text-[#125486] hover:bg-sky-50 font-bold text-sm rounded-xl shadow-lg transition-transform hover:scale-105">
                Request Free Demo
              </Button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full sm:w-auto h-12 px-7 border-white/30 text-white hover:bg-white/10 font-bold text-sm rounded-xl transition-all">
                Talk to Sales Team
              </Button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}
