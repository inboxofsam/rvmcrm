"use client"

import * as React from "react"
import Link from "next/link"
import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Headphones, 
  Phone, 
  Mail, 
  MessageSquare, 
  Laptop, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  HelpCircle, 
  ArrowRight,
  FileText,
  AlertCircle,
  ExternalLink
} from "lucide-react"

export default function SupportPage() {
  const [loading, setLoading] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    priority: "Normal (Within 4 Hours)",
    category: "Mobile App & GPS Attendance",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          formType: `Support Ticket [${formData.priority}] - ${formData.category}`,
          message: formData.message,
        }),
      })
    } catch (err) {
      console.error("Support ticket error:", err)
    } finally {
      setLoading(false)
      setSubmitted(true)
    }
  }

  return (
    <div className="bg-white min-h-screen">
      
      {/* ========================================================= */}
      {/* SECTION 1: HERO & IMMEDIATE ASSISTANCE                     */}
      {/* ========================================================= */}
      <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 lg:py-24 border-b border-gray-200">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#125486]/10 text-[#125486] text-xs font-bold uppercase tracking-widest">
              <Headphones className="w-3.5 h-3.5" />
              DEDICATED CUSTOMER SUCCESS & TECHNICAL SUPPORT
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-950 tracking-tight leading-[1.15]">
              How Can We Help <span className="text-[#125486]">Your Team Today?</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-normal max-w-3xl mx-auto">
              Our enterprise support engineers are here to assist you with user onboarding, workflow configuration, mobile GPS calibration, data migrations, and system training.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a 
                href="tel:+919310990051"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#125486] text-white font-bold text-sm shadow-md hover:bg-[#0d3e63] transition-all hover:scale-105"
              >
                <Phone className="w-4 h-4" /> Call Direct Support: +91 9310990051
              </a>
              <a 
                href="https://wa.me/919310990051"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 text-white font-bold text-sm shadow-md hover:bg-emerald-700 transition-all hover:scale-105"
              >
                <MessageSquare className="w-4 h-4" /> WhatsApp Assistance
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: 4 SUPPORT ACCESS CHANNELS                       */}
      {/* ========================================================= */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#125486] bg-[#125486]/10 px-3 py-1 rounded-full">
              MULTIPLE TOUCHPOINTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight">
              Direct Ways to Reach Our Technical Specialists
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Choose the channel best suited to your operational urgency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* 1. Phone Support */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-gray-200 hover:border-[#125486]/40 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#125486]/10 text-[#125486] flex items-center justify-center font-bold mb-6">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Phone Lines</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Immediate verbal consultation with our level-2 support engineers during business hours.
                </p>
              </div>
              <div className="pt-4 border-t border-gray-100 space-y-1.5 text-xs font-bold text-[#125486]">
                <div>Support & Helpdesk: +91 9310990051</div>
                <div className="text-[11px] text-gray-500 font-normal mt-1">Mon – Sat: 9:30 AM – 6:30 PM IST</div>
              </div>
            </div>

            {/* 2. Priority Email */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-gray-200 hover:border-[#125486]/40 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-700 flex items-center justify-center font-bold mb-6">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Helpdesk Email</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Submit detailed technical issues, error logs, and data import sheets with attachments.
                </p>
              </div>
              <div className="pt-4 border-t border-gray-100 space-y-1.5 text-xs font-bold text-[#125486]">
                <a href="mailto:support@rvmcrm.com" className="block hover:underline">support@rvmcrm.com</a>
                <a href="mailto:rvmcrm@gmail.com" className="block hover:underline text-gray-500 font-medium">rvmcrm@gmail.com</a>
                <div className="text-[11px] text-gray-500 font-normal mt-1">Logged with unique ticket ID</div>
              </div>
            </div>

            {/* 3. WhatsApp Business */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-gray-200 hover:border-[#125486]/40 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold mb-6">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">WhatsApp Channel</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Quick troubleshooting for field reps on site. Send screen captures, voice notes, and location logs.
                </p>
              </div>
              <div className="pt-4 border-t border-gray-100 space-y-1.5 text-xs font-bold text-emerald-600">
                <a href="https://wa.me/919310990051" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1.5">
                  Chat Now →
                </a>
                <div className="text-[11px] text-gray-500 font-normal mt-1">Average response time: &lt; 15 mins</div>
              </div>
            </div>

            {/* 4. Remote Desktop Assistance */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-gray-200 hover:border-[#125486]/40 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold mb-6">
                  <Laptop className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Remote Screen Share</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Live hands-on screen sharing via AnyDesk or TeamViewer for complex workflow adjustments and database setup.
                </p>
              </div>
              <div className="pt-4 border-t border-gray-100 space-y-1.5 text-xs font-bold text-purple-700">
                <div>AnyDesk / TeamViewer Ready</div>
                <div className="text-[11px] text-gray-500 font-normal mt-1">Scheduled by support engineers</div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: SLA COMMITMENTS & PRIORITY MATRIX               */}
      {/* ========================================================= */}
      <section className="py-20 bg-slate-50 border-b border-gray-200">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#125486] bg-[#125486]/10 px-3 py-1 rounded-full">
                ENTERPRISE SERVICE LEVEL COMMITMENT
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                Clear Response Times, Guaranteed Resolution
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                We understand that every minute of operational downtime costs money. That is why RVM CRM enforces a transparent, tiered Service Level Agreement (SLA) for all enterprise customers.
              </p>
              
              <div className="space-y-3 pt-2">
                {[
                  "24/7 Server uptime and automated cloud infrastructure monitoring",
                  "Dedicated Customer Success Manager for enterprise multi-branch accounts",
                  "Free system version upgrades and automated security patches",
                  "Daily encrypted database backups with point-in-time recovery",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span className="text-sm font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden">
                <div className="bg-[#125486] text-white p-6 text-left">
                  <h3 className="text-lg font-bold">Severity Matrix & Target Resolution Timelines</h3>
                  <p className="text-xs text-sky-100 mt-1">Formal SLA targets monitored by executive leadership</p>
                </div>
                
                <div className="divide-y divide-gray-100">
                  {[
                    {
                      severity: "Severity 1 — Critical Outage",
                      desc: "Total platform inaccessibility affecting core operations.",
                      response: "< 30 Minutes",
                      target: "< 2 Hours",
                      badge: "bg-rose-100 text-rose-700",
                    },
                    {
                      severity: "Severity 2 — Major Degradation",
                      desc: "Core module impediment (e.g. quotation generation blocked, GPS check-in error).",
                      response: "< 1 Hour",
                      target: "< 6 Hours",
                      badge: "bg-amber-100 text-amber-700",
                    },
                    {
                      severity: "Severity 3 — Standard Issue",
                      desc: "Individual user issue, permission update, or minor functional discrepancy.",
                      response: "< 2 Hours",
                      target: "< 24 Hours",
                      badge: "bg-blue-100 text-blue-700",
                    },
                    {
                      severity: "Severity 4 — Guidance & Training",
                      desc: "How-to queries, custom report formatting requests, or workflow advisory.",
                      response: "< 4 Hours",
                      target: "Next Business Day",
                      badge: "bg-slate-100 text-slate-700",
                    },
                  ].map((tier, i) => (
                    <div key={i} className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2.5">
                          <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${tier.badge}`}>
                            {tier.severity}
                          </span>
                        </div>
                        <p className="text-xs text-gray-600">{tier.desc}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-xs text-gray-500">Initial Response: <strong className="text-gray-900">{tier.response}</strong></div>
                        <div className="text-xs text-gray-500 mt-0.5">Target Fix: <strong className="text-[#125486]">{tier.target}</strong></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 4: SUBMIT A SUPPORT TICKET FORM                   */}
      {/* ========================================================= */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="w-full max-w-4xl mx-auto px-6">
          
          <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-gray-200">
            <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#125486] bg-[#125486]/10 px-3 py-1 rounded-full">
                ONLINE HELPDESK
              </span>
              <h2 className="text-3xl font-extrabold text-gray-900">
                Submit a Support Request
              </h2>
              <p className="text-sm text-gray-600">
                Tickets are directly dispatched to our engineering team at <strong className="text-[#125486]">{siteConfig.contact.inquiryEmail}</strong>.
              </p>
            </div>

            {submitted ? (
              <div className="py-16 text-center space-y-5">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Support Request Logged!</h3>
                <p className="text-gray-600 max-w-md mx-auto text-sm leading-relaxed">
                  Your ticket has been registered and forwarded to the technical support desk at <strong>{siteConfig.contact.inquiryEmail}</strong>. A support engineer will review your issue and follow up promptly.
                </p>
                <Button 
                  onClick={() => setSubmitted(false)}
                  variant="outline"
                  className="rounded-full px-6"
                >
                  Submit Another Ticket
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <Input 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rajesh Kumar" 
                      required 
                      className="h-11 rounded-xl"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                      Company / Organization <span className="text-red-500">*</span>
                    </label>
                    <Input 
                      name="company" 
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Apex Precision Tools" 
                      required 
                      className="h-11 rounded-xl"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                      Work Email <span className="text-red-500">*</span>
                    </label>
                    <Input 
                      type="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="rajesh@company.com" 
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                      Primary Issue Category
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full h-11 px-3.5 rounded-xl border border-gray-300 focus:border-[#125486] focus:ring-2 focus:ring-[#125486]/10 text-sm outline-none transition-all bg-white"
                    >
                      <option>Mobile App & GPS Attendance</option>
                      <option>Lead & Sales Pipeline Issue</option>
                      <option>Quotation & Invoicing Discrepancy</option>
                      <option>User Login & Role Permissions</option>
                      <option>AMC & Ticket Service Module</option>
                      <option>Inventory & Stock Sync</option>
                      <option>Custom Reports & Data Export</option>
                      <option>Other Operational Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                      Urgency / Severity Level
                    </label>
                    <select
                      name="priority"
                      value={formData.priority}
                      onChange={handleChange}
                      className="w-full h-11 px-3.5 rounded-xl border border-gray-300 focus:border-[#125486] focus:ring-2 focus:ring-[#125486]/10 text-sm outline-none transition-all bg-white"
                    >
                      <option>Normal (Within 4 Hours)</option>
                      <option>High (Urgent — Within 1 Hour)</option>
                      <option>Critical (Operational Blocker)</option>
                      <option>Low (General Inquiry)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                    Describe the Issue in Detail <span className="text-red-500">*</span>
                  </label>
                  <Textarea 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please include error messages, affected employee names, or steps to reproduce the issue..." 
                    className="min-h-[130px] rounded-xl text-sm" 
                    required 
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={loading}
                  size="lg" 
                  className="w-full h-13 font-bold text-base bg-[#125486] hover:bg-[#0d3e63] text-white rounded-xl shadow-lg transition-all"
                >
                  {loading ? "Registering Support Ticket..." : "Submit Support Ticket →"}
                </Button>

                <p className="text-xs text-gray-400 text-center flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-gray-400" />
                  Direct ticket generation to {siteConfig.contact.inquiryEmail}. We protect client data confidentiality.
                </p>
              </form>
            )}

          </div>

        </div>
      </section>

    </div>
  )
}
