"use client"

import * as React from "react"
import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  ShieldCheck, 
  Users, 
  TrendingUp, 
  Layers, 
  Workflow, 
  BarChart3, 
  Boxes, 
  HelpCircle,
  Laptop
} from "lucide-react"

export default function RequestDemoPage() {
  const [loading, setLoading] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    industry: "Manufacturing & Engineering",
    teamSize: "11 - 50 Employees",
    requirements: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          formType: "Dedicated Demo Page Request",
          message: `Industry: ${formData.industry} | Team Size: ${formData.teamSize} | Notes: ${formData.requirements}`,
        }),
      })
    } catch (err) {
      console.error("Demo request error:", err)
    } finally {
      setLoading(false)
      setSubmitted(true)
    }
  }

  return (
    <div className="bg-white min-h-screen">
      
      {/* ========================================================= */}
      {/* SECTION 1: HERO & INTERACTIVE DEMO FORM                   */}
      {/* ========================================================= */}
      <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 lg:py-24 border-b border-gray-200">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Value Prop (span 6) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#125486]/10 text-[#125486] text-xs font-bold uppercase tracking-widest">
                <Clock className="w-3.5 h-3.5" />
                20-MINUTE PERSONALIZED WALKTHROUGH
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-950 tracking-tight leading-[1.15]">
                Experience <span className="text-[#125486]">RVM CRM</span> Live in Action
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-normal">
                Discover how one connected platform unifies lead generation, sales quotations, field force tracking, inventory control, and AMC service management.
              </p>

              {/* Bullet Points */}
              <div className="space-y-3.5 pt-2">
                {[
                  "Tailored directly to your company's workflows and industry sector",
                  "Live walkthrough of desktop suite and field mobile applications",
                  "Hands-on demonstration of quotation approvals and order tracking",
                  "Practical implementation roadmap and transparent pricing breakdown",
                  "Live Q&A with dedicated enterprise software consultants",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#125486] shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-base font-medium">{item}</span>
                  </div>
                ))}
              </div>

              {/* Trust Callout */}
              <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#125486] uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" /> Zero Obligation &bull; 100% Confidential
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Join hundreds of growing organizations that boosted their operational productivity and sales closing velocity with RVM CRM.
                </p>
              </div>
            </div>

            {/* Right Column: Form (span 6) */}
            <div className="lg:col-span-6">
              <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-gray-200">
                
                {submitted ? (
                  <div className="py-16 text-center space-y-5">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Demo Request Confirmed!</h3>
                    <p className="text-gray-600 max-w-md mx-auto text-sm leading-relaxed">
                      Thank you! Your demo request has been dispatched to our product consultants at <strong>{siteConfig.contact.inquiryEmail}</strong>. We will reach out to you within 2 business hours to confirm your preferred session time.
                    </p>
                    <Button 
                      onClick={() => setSubmitted(false)}
                      variant="outline"
                      className="rounded-full px-6"
                    >
                      Book Another Session
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Request Your Free Demo</h3>
                      <p className="text-sm text-gray-500 mt-1">
                        Complete the short form below to arrange a convenient live demonstration.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                          First Name <span className="text-red-500">*</span>
                        </label>
                        <Input 
                          name="firstName" 
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="e.g. John" 
                          required 
                          className="h-11 rounded-xl"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                          Last Name <span className="text-red-500">*</span>
                        </label>
                        <Input 
                          name="lastName" 
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="e.g. Doe" 
                          required 
                          className="h-11 rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                          Work Email <span className="text-red-500">*</span>
                        </label>
                        <Input 
                          type="email" 
                          name="email" 
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com" 
                          required 
                          className="h-11 rounded-xl"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <Input 
                          type="tel" 
                          name="phone" 
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210" 
                          required 
                          className="h-11 rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                        Company Name <span className="text-red-500">*</span>
                      </label>
                      <Input 
                        name="company" 
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Acme Precision Tools Pvt. Ltd." 
                        required 
                        className="h-11 rounded-xl"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                          Primary Industry
                        </label>
                        <select
                          name="industry"
                          value={formData.industry}
                          onChange={handleChange}
                          className="w-full h-11 px-3.5 rounded-xl border border-gray-300 focus:border-[#125486] focus:ring-2 focus:ring-[#125486]/10 text-sm outline-none transition-all bg-white"
                        >
                          <option>Manufacturing & Engineering</option>
                          <option>Garments & Textiles</option>
                          <option>Distribution & Wholesale</option>
                          <option>Automotive & Auto Components</option>
                          <option>Pharmaceuticals & Healthcare</option>
                          <option>Construction & Real Estate</option>
                          <option>Logistics & Transport</option>
                          <option>Other Commercial Enterprise</option>
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
                          className="w-full h-11 px-3.5 rounded-xl border border-gray-300 focus:border-[#125486] focus:ring-2 focus:ring-[#125486]/10 text-sm outline-none transition-all bg-white"
                        >
                          <option>1 - 10 Employees</option>
                          <option>11 - 50 Employees</option>
                          <option>51 - 200 Employees</option>
                          <option>201+ Enterprise</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                        Main Workflow Goals / Requirements
                      </label>
                      <Textarea 
                        name="requirements" 
                        value={formData.requirements}
                        onChange={handleChange}
                        placeholder="e.g. Field force GPS tracking, faster quotation turnaround, AMC service reminders..." 
                        className="min-h-[85px] rounded-xl text-sm" 
                      />
                    </div>

                    <Button 
                      type="submit" 
                      disabled={loading}
                      size="lg" 
                      className="w-full h-13 font-bold text-base bg-[#125486] hover:bg-[#0d3e63] text-white rounded-xl shadow-lg transition-all"
                    >
                      {loading ? "Scheduling Session..." : "Schedule My 20-Min Demo →"}
                    </Button>

                    <p className="text-xs text-gray-400 text-center">
                      Form routed directly to {siteConfig.contact.inquiryEmail}. We never share your data.
                    </p>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: WHY CHOOSE RVM CRM?                             */}
      {/* ========================================================= */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#125486] bg-[#125486]/10 px-3 py-1 rounded-full">
              ENTERPRISE ADVANTAGES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight">
              Why Choose RVM CRM?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Most businesses struggle with scattered apps for sales, field tasks, inventory, and billing. RVM CRM replaces disconnected silos with one harmonious, dependable platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Layers,
                title: "Unified Business Suite",
                desc: "Never re-enter data between CRM, dispatch, and accounting. Quotations convert to orders, and orders trigger inventory updates automatically.",
              },
              {
                icon: Workflow,
                title: "Connected Field Workforce",
                desc: "Real-time GPS check-ins, employee movement logs, and instant on-site order booking bridge the gap between field reps and management.",
              },
              {
                icon: Boxes,
                title: "Tailored to Your Industry",
                desc: "Whether you operate in manufacturing, distribution, garments, automotive, or biomedical services, workflows fit your actual processes.",
              },
              {
                icon: BarChart3,
                title: "Total Operational Visibility",
                desc: "Get crystal-clear visibility into active pipeline revenue, pending AMC service renewals, inventory stock thresholds, and team productivity.",
              },
            ].map((col, idx) => {
              const IconComp = col.icon
              return (
                <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-gray-200 hover:border-[#125486]/50 hover:bg-white hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 rounded-2xl bg-[#125486]/10 text-[#125486] flex items-center justify-center font-bold mb-6">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{col.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{col.desc}</p>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: WHAT YOU'LL DISCOVER IN YOUR DEMO              */}
      {/* ========================================================= */}
      <section className="py-24 bg-slate-50 border-b border-gray-200">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#125486] bg-[#125486]/10 px-3 py-1 rounded-full">
              AGENDA & HIGHLIGHTS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight">
              What You'll Discover in Your Demo
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              In just 20 focused minutes, we will walk you through live scenarios that directly mirror your everyday business activities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm space-y-4">
              <span className="w-10 h-10 rounded-xl bg-[#125486] text-white flex items-center justify-center font-bold text-sm">
                01
              </span>
              <h3 className="text-xl font-bold text-gray-900">Lead-to-Order Pipeline Flow</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                See how inbound enquiries from website forms, WhatsApp, and portals convert into structured leads, automated follow-up reminders, and multi-tier quotation approvals.
              </p>
              <ul className="text-xs text-gray-500 space-y-2 pt-2 border-t border-gray-100">
                <li className="flex items-center gap-2">✓ Pipeline stage tracking & probability</li>
                <li className="flex items-center gap-2">✓ PDF Quotation generation in 60 seconds</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm space-y-4">
              <span className="w-10 h-10 rounded-xl bg-[#125486] text-white flex items-center justify-center font-bold text-sm">
                02
              </span>
              <h3 className="text-xl font-bold text-gray-900">Mobile Field Force & Geo-Check-In</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Explore how field engineers and sales representatives punch in with GPS verification, log client meetings, view nearby customers on map, and claim on-site expenses.
              </p>
              <ul className="text-xs text-gray-500 space-y-2 pt-2 border-t border-gray-100">
                <li className="flex items-center gap-2">✓ Geo-fenced site check-in & checkout</li>
                <li className="flex items-center gap-2">✓ Real-time employee route timeline</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm space-y-4">
              <span className="w-10 h-10 rounded-xl bg-[#125486] text-white flex items-center justify-center font-bold text-sm">
                03
              </span>
              <h3 className="text-xl font-bold text-gray-900">AMC Contracts & Service Tickets</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Experience how service contracts (AMC/PMC) are organized with automated expiry alerts, scheduled preventive maintenance visits, and customer resolution tickets.
              </p>
              <ul className="text-xs text-gray-500 space-y-2 pt-2 border-t border-gray-100">
                <li className="flex items-center gap-2">✓ Automated renewal notice dispatch</li>
                <li className="flex items-center gap-2">✓ SLA ticket escalation & rating capture</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 4: WHO CAN BENEFIT FROM RVM CRM?                   */}
      {/* ========================================================= */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#125486] bg-[#125486]/10 px-3 py-1 rounded-full">
              BUILT FOR ALL TEAMS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight">
              Who Can Benefit from RVM CRM?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              RVM CRM is designed for every level of your organization — from field representatives to business owners.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="p-7 rounded-3xl bg-slate-50 border border-gray-200 space-y-3">
              <div className="text-3xl mb-2">💼</div>
              <h3 className="text-lg font-bold text-gray-900">Sales Teams</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Never lose a prospect. Track every lead interaction, schedule follow-ups, send standardized quotations, and close deals faster.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-slate-50 border border-gray-200 space-y-3">
              <div className="text-3xl mb-2">🛠️</div>
              <h3 className="text-lg font-bold text-gray-900">Service & AMC Engineers</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Receive scheduled service calls on mobile, record equipment serial numbers, track warranty validity, and collect client signatures.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-slate-50 border border-gray-200 space-y-3">
              <div className="text-3xl mb-2">📦</div>
              <h3 className="text-lg font-bold text-gray-900">Operations & Inventory</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Coordinate order fulfillment, monitor multi-warehouse stock movements, allocate installations, and manage verified employee expense claims.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-slate-50 border border-gray-200 space-y-3">
              <div className="text-3xl mb-2">📈</div>
              <h3 className="text-lg font-bold text-gray-900">Directors & Business Owners</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Access 360-degree executive dashboards on desktop or mobile. Monitor daily revenue, team attendance, cash flows, and key operational bottlenecks.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 5: DEMO FAQs                                      */}
      {/* ========================================================= */}
      <section className="py-20 bg-slate-50 border-b border-gray-200">
        <div className="w-full max-w-4xl mx-auto px-6 space-y-8">
          <div className="text-center space-y-3">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Frequently Asked Questions About the Demo
            </h3>
            <p className="text-sm text-gray-600">
              Everything you need to know prior to your personalized demonstration.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How long does the demo take?",
                a: "Our standard personalized walkthrough takes approximately 20 minutes. We focus strictly on your company's operational bottlenecks, followed by a brief Q&A session.",
              },
              {
                q: "Can other members of my team join the session?",
                a: "Absolutely! We encourage you to invite department heads, sales managers, and IT stakeholders so everyone can review how RVM CRM fits their day-to-day workflow.",
              },
              {
                q: "Do I need to install any software beforehand?",
                a: "No software installation is required. The session is conducted securely via Google Meet or Zoom, accessible from any web browser.",
              },
              {
                q: "What happens after the demonstration?",
                a: "We provide you with a tailored implementation roadmap, module recommendations, transparent pricing proposal, and trial workspace access.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs space-y-2">
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
        </div>
      </section>

    </div>
  )
}
