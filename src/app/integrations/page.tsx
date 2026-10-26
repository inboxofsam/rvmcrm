"use client"

import * as React from "react"
import Link from "next/link"
import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { 
  Puzzle, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  MessageSquare, 
  PhoneCall, 
  CreditCard, 
  FileSpreadsheet, 
  Globe2, 
  Code2, 
  Lock, 
  Sparkles,
  Send,
  Loader2,
  CheckCircle
} from "lucide-react"

interface IntegrationCategory {
  title: string
  subtitle: string
  icon: any
  color: string
  integrations: {
    name: string
    category: string
    description: string
    features: string[]
    badge: string
    status: "Live & Supported" | "Instant Plug-and-Play" | "Native Webhook"
  }[]
}

const INTEGRATION_CATEGORIES: IntegrationCategory[] = [
  {
    title: "B2B Lead Marketplaces & Portals",
    subtitle: "Automate lead capture instantly as soon as a prospective buyer posts an enquiry.",
    icon: Globe2,
    color: "from-blue-500/10 to-indigo-500/10 text-blue-600",
    integrations: [
      {
        name: "IndiaMART Webhook Sync",
        category: "B2B Portals",
        description: "Direct instant CRM lead injection via IndiaMART Push API. Automatically parses buyer contact details, query parameters, product requirements, and city.",
        features: ["Instant real-time webhook ingestion", "Automated executive assignment", "Auto WhatsApp acknowledgment to buyer"],
        badge: "Most Popular",
        status: "Live & Supported"
      },
      {
        name: "TradeIndia Lead Connector",
        category: "B2B Portals",
        description: "Continuous synchronization of buyer RFQs and business inquiries directly into your active RVM CRM sales pipeline without manual copy-paste.",
        features: ["Instant inquiry alert notifications", "Product category mapping", "Duplicate lead deduplication"],
        badge: "Enterprise Ready",
        status: "Live & Supported"
      },
      {
        name: "Justdial Lead Ingestion",
        category: "B2B Portals",
        description: "Capture verified local telephone and web leads directly from Justdial campaign streams into designated regional sales reps.",
        features: ["Caller ID & geography capture", "Immediate SMS dispatch", "Lead aging tracking"],
        badge: "Verified API",
        status: "Live & Supported"
      },
      {
        name: "Facebook & Meta Lead Ads",
        category: "Digital Ads",
        description: "Connect your Facebook and Instagram lead gen ad forms directly to RVM CRM. Zero response latency for high-intent paid prospects.",
        features: ["Live ad campaign attribution", "Instant sales rep mobile alert", "Custom campaign tagging"],
        badge: "Official Meta API",
        status: "Live & Supported"
      }
    ]
  },
  {
    title: "Conversational Messaging & Omnichannel Comms",
    subtitle: "Deliver quotations, service updates, and automated notifications directly to your clients' phones.",
    icon: MessageSquare,
    color: "from-emerald-500/10 to-teal-500/10 text-emerald-600",
    integrations: [
      {
        name: "WhatsApp Business Cloud API",
        category: "Messaging",
        description: "Send official verified WhatsApp templates, one-click PDF quotations, AMC renewal alerts, service ticket status updates, and interactive menus.",
        features: ["Green tick verified template support", "Automated PDF quote delivery", "Two-way customer reply logging in CRM"],
        badge: "Essential",
        status: "Instant Plug-and-Play"
      },
      {
        name: "SMS Transactional Gateways",
        category: "SMS",
        description: "High-deliverability DLT-compliant SMS notifications powered by MSG91, Textlocal, and Twilio for OTP verification, visit alerts, and invoices.",
        features: ["DLT template compliance", "Dynamic variable insertion", "Delivery confirmation telemetry"],
        badge: "High Throughput",
        status: "Live & Supported"
      },
      {
        name: "Corporate Email Systems",
        category: "Email",
        description: "Seamless synchronization with Google Workspace, Microsoft 365, and custom SMTP/IMAP corporate mail servers for complete client interaction trails.",
        features: ["Full email thread history in client dossier", "Automated PDF dispatch", "Open & click analytics"],
        badge: "Native Sync",
        status: "Live & Supported"
      }
    ]
  },
  {
    title: "Accounting Packages & Financial ERPs",
    subtitle: "Eliminate double data entry between your sales team and your accounts department.",
    icon: FileSpreadsheet,
    color: "from-amber-500/10 to-orange-500/10 text-amber-600",
    integrations: [
      {
        name: "Tally Prime Two-Way Bridge",
        category: "Accounting",
        description: "Synchronize client ledgers, GST tax invoices, proformas, inventory items, and payment receipts bi-directionally between RVM CRM and Tally Prime.",
        features: ["Automatic ledger master creation", "Sales voucher XML sync", "Outstanding payment aging alerts"],
        badge: "Industry Favorite",
        status: "Live & Supported"
      },
      {
        name: "Busy Accounting Software",
        category: "Accounting",
        description: "Direct integration with Busy ERP for automated dispatch orders, stock debiting, and invoice synchronization for trading and manufacturing firms.",
        features: ["Item-level tax sync", "Customer credit limit enforcement", "Automated voucher posting"],
        badge: "Seamless Sync",
        status: "Live & Supported"
      },
      {
        name: "Marg ERP Connector",
        category: "Accounting",
        description: "Integrated workflows for pharmaceutical, FMCG, and multi-depot distribution companies running Marg ERP for central billing.",
        features: ["Batch & expiry tracking sync", "Retailer order booking push", "Sales return reconciliation"],
        badge: "Specialized",
        status: "Live & Supported"
      }
    ]
  },
  {
    title: "Digital Payments & Cloud Telephony",
    subtitle: "Accelerate invoice collections and track every customer phone conversation automatically.",
    icon: CreditCard,
    color: "from-purple-500/10 to-pink-500/10 text-purple-600",
    integrations: [
      {
        name: "Razorpay & Cashfree Gateways",
        category: "Payments",
        description: "Embed dynamic instant payment links and dynamic UPI QR codes directly onto quotations and service invoices with real-time status settlement.",
        features: ["Instant webhook payment confirmation", "Auto-receipt generation", "Auto-close of pending invoice dues"],
        badge: "Instant Settlement",
        status: "Instant Plug-and-Play"
      },
      {
        name: "Cloud Telephony & CTI (Exotel / Knowlarity)",
        category: "Telephony",
        description: "Click-to-call directly from RVM CRM contact cards. Inbound caller screen pop-up shows customer purchase history before answering the call.",
        features: ["Automatic call recording storage", "Missed call notification alerts", "Agent call duration analytics"],
        badge: "Smart CTI",
        status: "Live & Supported"
      }
    ]
  }
]

export default function IntegrationsPage() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    systemToIntegrate: "",
    message: ""
  })
  const [submitting, setSubmitting] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)
  const [errorMsg, setErrorMsg] = React.useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setErrorMsg("")

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "Custom Integration Request",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: `Integration Target: ${formData.systemToIntegrate}\nDetails: ${formData.message}`
        })
      })

      const data = await res.json()
      if (data.success) {
        setSubmitted(true)
      } else {
        setErrorMsg("Failed to dispatch request. Please contact us directly at rvmcrm@gmail.com.")
      }
    } catch (err) {
      setErrorMsg("Network error occurred. Please call +91 9310990051 for immediate assistance.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="bg-white min-h-screen">
      
      {/* ========================================================= */}
      {/* SECTION 1: HERO SECTION                                   */}
      {/* ========================================================= */}
      <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 lg:py-24 border-b border-gray-200">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#125486]/10 text-[#125486] text-xs font-bold uppercase tracking-widest">
              <Puzzle className="w-3.5 h-3.5" />
              ECOSYSTEM & INTEGRATION HUB
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-950 tracking-tight leading-[1.15]">
              Connect RVM CRM With the <span className="text-[#125486]">Tools You Rely On</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-normal max-w-3xl mx-auto">
              Unify your B2B lead generation portals, WhatsApp messaging, Tally accounting, cloud telephony, and payment gateways into one seamless operational command center.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <a href="#integration-categories">
                <Button
                  size="lg"
                  className="w-full sm:w-auto h-14 px-8 text-base font-bold rounded-full bg-[#125486] hover:bg-[#0d3e63] text-white shadow-lg transition-all hover:scale-105"
                >
                  Explore Supported Connectors
                </Button>
              </a>
              <a href="#request-integration">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto h-14 px-8 text-base font-bold rounded-full border-gray-300 hover:border-[#125486] hover:text-[#125486] bg-white transition-all"
                >
                  Request Custom Integration
                </Button>
              </a>
            </div>

            {/* Platform Trust Logos Banner */}
            <div className="pt-12">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
                Native Connectors for Leading Enterprise Platforms
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
                <span className="font-extrabold text-gray-800 text-lg">WhatsApp Cloud API</span>
                <span className="font-extrabold text-gray-800 text-lg">Tally Prime</span>
                <span className="font-extrabold text-gray-800 text-lg">IndiaMART</span>
                <span className="font-extrabold text-gray-800 text-lg">TradeIndia</span>
                <span className="font-extrabold text-gray-800 text-lg">Razorpay</span>
                <span className="font-extrabold text-gray-800 text-lg">Exotel CTI</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: HOW INTEGRATIONS WORK IN 3 EASY STEPS          */}
      {/* ========================================================= */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#125486] bg-[#125486]/10 px-3 py-1 rounded-full">
              EFFORTLESS ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight">
              Connect in 3 Simple Steps
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              No months of expensive development. Plug into your existing software stack quickly and securely.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-slate-50 p-8 rounded-2xl border border-gray-200 space-y-4 relative">
              <div className="w-10 h-10 rounded-xl bg-[#125486] text-white flex items-center justify-center font-bold text-lg shadow-md shadow-[#125486]/20">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-950">Authenticate & Authorize</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Connect your account using encrypted API keys, OAuth2 authorization, or webhooks directly from the RVM CRM integrations dashboard.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-gray-200 space-y-4 relative">
              <div className="w-10 h-10 rounded-xl bg-[#125486] text-white flex items-center justify-center font-bold text-lg shadow-md shadow-[#125486]/20">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-950">Map Data & Workflows</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Visually configure field mappings (e.g., IndiaMART contact to CRM lead stage, or CRM approved quote to Tally sales voucher).
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-gray-200 space-y-4 relative">
              <div className="w-10 h-10 rounded-xl bg-[#125486] text-white flex items-center justify-center font-bold text-lg shadow-md shadow-[#125486]/20">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-950">Automate in Real Time</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Enjoy continuous two-way synchronization. Records update automatically across devices, departments, and external accounting tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: INTEGRATIONS BY CATEGORY                       */}
      {/* ========================================================= */}
      <section id="integration-categories" className="py-24 bg-slate-50">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="space-y-20">
            {INTEGRATION_CATEGORIES.map((category, idx) => {
              const CategoryIcon = category.icon
              return (
                <div key={idx} className="space-y-8">
                  {/* Category Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-200 pb-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-2xl bg-white border border-gray-200 flex items-center justify-center shadow-sm ${category.color}`}>
                        <CategoryIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950">
                          {category.title}
                        </h2>
                        <p className="text-sm sm:text-base text-gray-600 mt-1">
                          {category.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Integration Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {category.integrations.map((item, i) => (
                      <div
                        key={i}
                        className="bg-white p-7 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#125486]/40 transition-all duration-300 flex flex-col justify-between"
                      >
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-[11px] font-bold text-sky-800 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-100 uppercase tracking-wider">
                              {item.badge}
                            </span>
                            <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              {item.status}
                            </span>
                          </div>

                          <h3 className="text-xl font-bold text-gray-950">
                            {item.name}
                          </h3>

                          <p className="text-sm text-gray-600 leading-relaxed">
                            {item.description}
                          </p>

                          <div className="space-y-2 pt-2 border-t border-gray-100">
                            {item.features.map((feat, fIdx) => (
                              <div key={fIdx} className="flex items-start gap-2 text-xs text-gray-700">
                                <CheckCircle className="w-3.5 h-3.5 text-[#125486] shrink-0 mt-0.5" />
                                <span>{feat}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="pt-6 mt-6 border-t border-gray-100">
                          <Link href="/request-demo">
                            <Button 
                              variant="outline" 
                              className="w-full text-xs font-bold h-10 border-gray-200 hover:border-[#125486] hover:text-[#125486] rounded-xl"
                            >
                              Explore Live Demo →
                            </Button>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 4: DEVELOPER REST API & WEBHOOKS                  */}
      {/* ========================================================= */}
      <section className="py-20 bg-white border-t border-b border-gray-200">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="max-w-5xl mx-auto bg-[#0a192f] rounded-3xl p-8 sm:p-12 text-white border border-[#162e4e] shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-bold uppercase tracking-wider">
                  <Code2 className="w-3.5 h-3.5" />
                  FOR DEVELOPERS & CUSTOM SYSTEMS
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  Open RESTful API & Real-Time Webhooks
                </h2>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  Building proprietary software or using specialized in-house tools? RVM CRM exposes clean, authenticated REST endpoints with comprehensive JSON documentation and outbound webhook dispatch.
                </p>

                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center gap-2.5 text-sm text-gray-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Bearer token authentication with fine-grained API permissions</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-gray-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Event-driven webhooks for lead creation, quote updates, and ticket resolutions</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-gray-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>High-throughput rate limits engineered for enterprise-scale traffic</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Link href="/contact">
                    <Button className="h-12 px-6 rounded-xl font-bold bg-[#125486] hover:bg-[#1a6ea8] text-white">
                      Request API Access & Docs
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Code snippet preview */}
              <div className="lg:col-span-5 bg-[#071322] rounded-2xl p-5 border border-[#1c385b] font-mono text-xs text-sky-200 overflow-x-auto shadow-inner">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-800 text-[11px] text-gray-400">
                  <span>POST /api/v1/leads/ingest</span>
                  <span className="text-emerald-400">200 OK</span>
                </div>
                <pre className="text-gray-300 leading-relaxed">
{`{
  "api_token": "rvm_sec_...",
  "lead": {
    "name": "Rajesh Sharma",
    "phone": "+919876543210",
    "email": "rajesh@precision.com",
    "source": "IndiaMART",
    "requirements": "5x CNC Spindles",
    "assign_to_branch": "Gurgaon-01"
  }
}`}
                </pre>
                <div className="mt-4 pt-3 border-t border-gray-800 text-[11px] text-gray-400">
                  Response: <span className="text-emerald-400 font-semibold">{`{"lead_id": "LD-8902", "status": "assigned"}`}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 5: REQUEST CUSTOM INTEGRATION FORM                */}
      {/* ========================================================= */}
      <section id="request-integration" className="py-24 bg-white">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="max-w-4xl mx-auto">
            
            <div className="text-center space-y-4 mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#125486] bg-[#125486]/10 px-3 py-1 rounded-full">
                CUSTOM INTEGRATION REQUEST
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight">
                Need to Connect a Specific System?
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Our integration engineers can build customized connectors for your proprietary ERP, specialized hardware, or regional marketplaces.
              </p>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-lg">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-950">Integration Request Received!</h3>
                  <p className="text-gray-600 max-w-lg mx-auto">
                    Thank you. Our technical solutions architect will review your integration requirements and reach out within 24 business hours to discuss feasibility and API mapping.
                  </p>
                  <Button
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({ name: "", email: "", phone: "", company: "", systemToIntegrate: "", message: "" })
                    }}
                    variant="outline"
                    className="rounded-full mt-4"
                  >
                    Submit Another Request
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMsg && (
                    <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-sm">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Vikram Singhal"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:border-[#125486] focus:ring-4 focus:ring-[#125486]/10 outline-none text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. vikram@yourcompany.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:border-[#125486] focus:ring-4 focus:ring-[#125486]/10 outline-none text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:border-[#125486] focus:ring-4 focus:ring-[#125486]/10 outline-none text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Singhal Industrial Components"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:border-[#125486] focus:ring-4 focus:ring-[#125486]/10 outline-none text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      System or Software to Integrate *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. SAP Business One, Custom Legacy Oracle DB, In-House Warehouse App"
                      value={formData.systemToIntegrate}
                      onChange={(e) => setFormData({ ...formData, systemToIntegrate: e.target.value })}
                      className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:border-[#125486] focus:ring-4 focus:ring-[#125486]/10 outline-none text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Integration Workflow Details & Goals
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Describe what data you want to synchronize (e.g. automatically push completed sales orders to warehouse dispatch, or fetch inventory balances daily)..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-4 rounded-xl border border-gray-300 focus:border-[#125486] focus:ring-4 focus:ring-[#125486]/10 outline-none text-sm transition-all"
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      disabled={submitting}
                      className="w-full h-14 text-base font-bold rounded-2xl bg-[#125486] hover:bg-[#0d3e63] text-white shadow-lg transition-all"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Submitting Request...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Custom Integration Request
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
