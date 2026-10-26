"use client"

import * as React from "react"
import { CheckCircle2, Phone, Calendar, Clock, ShieldCheck, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

const moduleOptions = [
  "Lead & Sales Management",
  "Order & Quotations",
  "Inventory & Stock",
  "AMC & Ticket Service",
  "Field Workforce & Attendance",
  "Expense & Finance",
  "All Enterprise Modules",
]

export function DemoBookingSection() {
  const [submitted, setSubmitted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [selectedModules, setSelectedModules] = React.useState<string[]>([
    "Lead & Sales Management",
    "All Enterprise Modules",
  ])
  const [formData, setFormData] = React.useState({
    businessName: "",
    contactPerson: "",
    email: "",
    phone: "",
    industry: "Manufacturing & Engineering",
    teamSize: "11 - 50 Employees",
  })

  const toggleModule = (name: string) => {
    setSelectedModules((prev) =>
      prev.includes(name) ? prev.filter((m) => m !== name) : [...prev, name]
    )
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.contactPerson,
          company: formData.businessName,
          email: formData.email,
          phone: formData.phone,
          formType: "Home Page 20-Minute Demo Request",
          message: `Industry: ${formData.industry} | Team Size: ${formData.teamSize}`,
          selectedModules,
        }),
      })
    } catch (err) {
      console.error("Demo submission error:", err)
    } finally {
      setLoading(false)
      setSubmitted(true)
    }
  }

  return (
    <section id="book-demo" className="py-24 bg-gray-50 border-t border-gray-200 scroll-mt-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#125486]/10 text-[#125486] font-bold text-xs uppercase tracking-widest rounded-full mb-4">
            YOUR NEXT STEP STARTS HERE
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Ready to See RVM CRM in Action?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Discover how connected CRM, sales, service, inventory, and workforce workflows can support your business. Request a personalized walkthrough based on your requirements.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Left Column: Why schedule a demo & Quick call */}
          <div className="lg:col-span-5 bg-[#125486] text-white p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10 space-y-8">
              <div>
                <span className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/10 rounded-full text-xs font-semibold text-white/90 mb-4 backdrop-blur-sm">
                  <Clock className="w-3.5 h-3.5" /> 20-Minute Tailored Session
                </span>
                <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                  One Platform. Connected Teams. Smarter Business Operations.
                </h3>
              </div>

              <div className="space-y-4">
                {[
                  "Personalized walkthrough tailored to your exact industry workflows",
                  "Live exploration of Sales, Service, Inventory, and Field team modules",
                  "Direct Q&A with CRM solution architects for deployment timelines",
                  "Complimentary workflow audit and modular setup guidance",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-white/90 text-sm md:text-base leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 mt-10 pt-8 border-t border-white/15 space-y-4">
              <p className="text-xs uppercase font-bold tracking-wider text-white/70">
                Prefer to speak with an executive right now?
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${siteConfig.contact.phones[0].replace(/[^0-9+]/g, "")}`}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-white text-[#125486] hover:bg-gray-100 font-bold rounded-xl text-sm transition-all shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  Call: {siteConfig.contact.phones[0]}
                </a>
                {siteConfig.contact.phones[1] && (
                  <a
                    href={`tel:${siteConfig.contact.phones[1].replace(/[^0-9+]/g, "")}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl text-sm transition-colors border border-white/20"
                  >
                    Call: {siteConfig.contact.phones[1]}
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Demo Form */}
          <div className="lg:col-span-7 p-8 md:p-12">
            {submitted ? (
              <div className="h-full min-h-[460px] flex flex-col items-center justify-center text-center p-8 bg-emerald-50/50 rounded-2xl border border-emerald-200">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Demo Request Received!</h3>
                <p className="text-gray-600 max-w-md mb-6 leading-relaxed">
                  Thank you for your interest in RVM CRM. Our product specialist will contact you within 2 business hours to schedule your personalized 20-minute demonstration.
                </p>
                <Button
                  onClick={() => setSubmitted(false)}
                  variant="outline"
                  className="rounded-full px-6"
                >
                  Submit Another Request
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Request Your Personalized Demo</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Fill out your organization details to schedule a live walkthrough with our CRM specialists.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                      Business Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      placeholder="e.g. Acme Industries Ltd."
                      className="w-full h-11 px-3.5 rounded-lg border border-gray-300 focus:border-[#125486] focus:ring-2 focus:ring-[#125486]/10 text-sm outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                      Contact Person <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full h-11 px-3.5 rounded-lg border border-gray-300 focus:border-[#125486] focus:ring-2 focus:ring-[#125486]/10 text-sm outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                      Work Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full h-11 px-3.5 rounded-lg border border-gray-300 focus:border-[#125486] focus:ring-2 focus:ring-[#125486]/10 text-sm outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full h-11 px-3.5 rounded-lg border border-gray-300 focus:border-[#125486] focus:ring-2 focus:ring-[#125486]/10 text-sm outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                      Industry
                    </label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full h-11 px-3.5 rounded-lg border border-gray-300 focus:border-[#125486] focus:ring-2 focus:ring-[#125486]/10 text-sm outline-none transition-all bg-white"
                    >
                      <option>Manufacturing & Engineering</option>
                      <option>Garments & Textiles</option>
                      <option>Distribution & Wholesale</option>
                      <option>Automotive & Auto Components</option>
                      <option>Pharmaceuticals & Healthcare Products</option>
                      <option>Construction & Real Estate</option>
                      <option>FMCG & Consumer Goods</option>
                      <option>Logistics & Transport</option>
                      <option>Other Commercial Sector</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                      Team Size
                    </label>
                    <select
                      name="teamSize"
                      value={formData.teamSize}
                      onChange={handleChange}
                      className="w-full h-11 px-3.5 rounded-lg border border-gray-300 focus:border-[#125486] focus:ring-2 focus:ring-[#125486]/10 text-sm outline-none transition-all bg-white"
                    >
                      <option>1 - 10 Employees</option>
                      <option>11 - 50 Employees</option>
                      <option>51 - 200 Employees</option>
                      <option>201+ Enterprise</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                    Modules of Interest (Select all that apply)
                  </label>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {moduleOptions.map((mod) => {
                      const isSelected = selectedModules.includes(mod)
                      return (
                        <button
                          key={mod}
                          type="button"
                          onClick={() => toggleModule(mod)}
                          className={`text-xs px-3 py-1.5 rounded-full border transition-all font-medium ${
                            isSelected
                              ? "bg-[#125486] border-[#125486] text-white"
                              : "bg-gray-50 border-gray-200 text-gray-700 hover:border-gray-300"
                          }`}
                        >
                          {isSelected ? "✓ " : "+ "}
                          {mod}
                        </button>
                      )
                    })}
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full h-13 text-base font-bold bg-[#125486] hover:bg-[#0d3e63] text-white rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-70"
                >
                  {loading ? "Forwarding to Specialists..." : "Schedule My Free Demo"}
                </Button>

                <p className="text-xs text-gray-400 text-center flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-gray-400" />
                  Your information is strictly protected and never shared. No credit card required.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
