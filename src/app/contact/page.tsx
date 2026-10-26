"use client"

import * as React from "react"
import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Building2, 
  CheckCircle2, 
  Headphones, 
  Sparkles, 
  ExternalLink,
  ShieldCheck
} from "lucide-react"

export default function ContactPage() {
  const [activeOffice, setActiveOffice] = React.useState<"head" | "registered">("head")
  const [loading, setLoading] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: "Sales & Demo Inquiry",
    message: "",
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
          subject: formData.inquiryType,
          message: formData.message,
          formType: "Contact Page Message",
        }),
      })
    } catch (err) {
      console.error("Contact form error:", err)
    } finally {
      setLoading(false)
      setSubmitted(true)
    }
  }

  const offices = {
    head: {
      title: "Head Office (Noida)",
      address: siteConfig.contact.headOffice,
      city: "Noida, Uttar Pradesh",
      landmark: "Sector 16B Corporate Park",
      // Google Maps Embed Query for Sector 16B Noida
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14013.911075798993!2d77.419076!3d28.600494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef0107297e59%3A0x6b245e9987819ef3!2sSector%2016B%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
      directionsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.contact.headOffice)}`
    },
    registered: {
      title: "Registered Office (New Delhi)",
      address: siteConfig.contact.registeredOffice,
      city: "New Delhi",
      landmark: "Near NSUT East Campus, Block 2A",
      // Google Maps Embed Query for East Campus NSUT New Delhi
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.204593845942!2d77.295213!3d28.628236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb2e650d53ef%3A0xebe775837651a2f9!2sNetaji%20Subhas%20University%20of%20Technology%20(East%20Campus)!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
      directionsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.contact.registeredOffice)}`
    }
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* ========================================================= */}
      {/* SECTION 1: CONTACT INTRO & ASSISTANCE PILLARS             */}
      {/* ========================================================= */}
      <section className="bg-gradient-to-b from-white to-slate-50 pt-16 pb-20 border-b border-gray-200">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          
          <div className="text-center max-w-4xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#125486]/10 text-[#125486] text-xs font-bold uppercase tracking-widest">
              <Headphones className="w-3.5 h-3.5" />
              WE'RE HERE TO HELP
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-950 tracking-tight">
              Get in Touch with the <span className="text-[#125486]">RVM CRM</span> Team
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Whether you are evaluating RVM CRM for your organization, need product guidance, want to discuss a custom integration, or require dedicated technical support, our team is ready to assist you.
            </p>
          </div>

          {/* 3 Inquiry Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Sales & Product Demos */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200/90 shadow-sm hover:shadow-xl hover:border-[#125486]/50 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#125486]/10 text-[#125486] flex items-center justify-center font-bold mb-6 group-hover:bg-[#125486] group-hover:text-white transition-colors">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Sales & Product Walkthrough</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Schedule a customized 20-minute product demonstration or speak with a solutions expert about licensing and implementation.
                </p>
              </div>
              <div className="pt-4 border-t border-gray-100 space-y-2">
                <a href="tel:+919310990051" className="text-sm font-bold text-[#125486] hover:underline flex items-center gap-2">
                  <Phone className="w-4 h-4" /> +91 9310990051
                </a>
                <a href="mailto:rvmcrm@gmail.com" className="text-xs text-gray-500 hover:text-gray-900 flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5" /> rvmcrm@gmail.com
                </a>
              </div>
            </div>

            {/* Card 2: Technical & Implementation */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200/90 shadow-sm hover:shadow-xl hover:border-[#125486]/50 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-700 flex items-center justify-center font-bold mb-6 group-hover:bg-[#125486] group-hover:text-white transition-colors">
                  <Headphones className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Customer & Tech Support</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Need help with user onboarding, workflows, attendance syncing, or mobile app setup? Our technical team is available.
                </p>
              </div>
              <div className="pt-4 border-t border-gray-100 space-y-2">
                <a href="tel:+919310990051" className="text-sm font-bold text-[#125486] hover:underline flex items-center gap-2">
                  <Phone className="w-4 h-4" /> +91 9310990051
                </a>
                <a href="mailto:support@rvmcrm.com" className="text-xs text-gray-500 hover:text-gray-900 flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5" /> support@rvmcrm.com
                </a>
              </div>
            </div>

            {/* Card 3: Enterprise & Partnerships */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200/90 shadow-sm hover:shadow-xl hover:border-[#125486]/50 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-800 flex items-center justify-center font-bold mb-6 group-hover:bg-[#125486] group-hover:text-white transition-colors">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Corporate & Partnerships</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Discuss corporate contracts, multi-branch deployments, ERP system integrations, or institutional software inquiries.
                </p>
              </div>
              <div className="pt-4 border-t border-gray-100 space-y-2">
                <div className="text-xs font-semibold text-gray-700">RVM Infotech Private Limited</div>
                <a href="mailto:info@rvmcrm.com" className="text-xs text-gray-500 hover:text-gray-900 flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5" /> info@rvmcrm.com
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: OFFICIAL ADDRESSES & INTERACTIVE INQUIRY FORM  */}
      {/* ========================================================= */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
            
            {/* Left Column: Office Addresses Details (span 5) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#125486] bg-[#125486]/10 px-3 py-1 rounded-full">
                  OFFICIAL LOCATIONS
                </span>
                <h2 className="text-3xl font-extrabold text-gray-900 mt-3 mb-4">
                  Our Corporate Addresses
                </h2>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Visit our corporate offices in the Delhi NCR region or connect with our regional representatives for consultation.
                </p>
              </div>

              {/* Head Office Card */}
              <div className="bg-slate-50 p-7 rounded-3xl border border-gray-200 hover:border-[#125486]/40 transition-all space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-[#125486] text-white text-xs font-bold rounded-lg uppercase tracking-wider">
                    Head Office
                  </span>
                  <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Operational Center
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  RVM Infotech Private Limited — Noida
                </h3>
                <div className="flex items-start gap-3 text-gray-700 text-sm leading-relaxed">
                  <MapPin className="w-5 h-5 text-[#125486] shrink-0 mt-0.5" />
                  <span>{siteConfig.contact.headOffice}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 text-xs pt-1">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span>Monday – Saturday: 9:30 AM – 6:30 PM IST</span>
                </div>
              </div>

              {/* Registered Office Card */}
              <div className="bg-slate-50 p-7 rounded-3xl border border-gray-200 hover:border-[#125486]/40 transition-all space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-slate-800 text-white text-xs font-bold rounded-lg uppercase tracking-wider">
                    Registered Office
                  </span>
                  <span className="text-xs text-gray-500 font-medium">New Delhi</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Corporate Registration
                </h3>
                <div className="flex items-start gap-3 text-gray-700 text-sm leading-relaxed">
                  <MapPin className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" />
                  <span>{siteConfig.contact.registeredOffice}</span>
                </div>
              </div>

              {/* Quick Communication Channels */}
              <div className="bg-sky-50/60 p-6 rounded-2xl border border-sky-100 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-sky-900">
                  Direct Inquiries Dispatch
                </div>
                <p className="text-xs text-sky-800 leading-relaxed">
                  All messages sent through this page are delivered directly to <strong className="text-sky-950 font-bold">{siteConfig.contact.inquiryEmail}</strong> for prompt response within 2 business hours.
                </p>
              </div>

            </div>

            {/* Right Column: Interactive Contact Form (span 7) */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-gray-200">
                
                {submitted ? (
                  <div className="py-16 text-center space-y-5">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Thank You! Your Message Has Been Sent</h3>
                    <p className="text-gray-600 max-w-md mx-auto text-sm leading-relaxed">
                      Your inquiry has been successfully transmitted to our team at <strong>{siteConfig.contact.inquiryEmail}</strong>. A specialist will follow up with you promptly.
                    </p>
                    <Button 
                      onClick={() => setSubmitted(false)}
                      variant="outline"
                      className="rounded-full px-6"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Send an Inquiry</h3>
                      <p className="text-sm text-gray-500 mt-1">
                        Fill out the details below and our team will get in touch with you right away.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
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
                      <div className="space-y-2">
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

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
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
                      <div className="space-y-2">
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
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                          Company / Organization
                        </label>
                        <Input 
                          name="company" 
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="e.g. Acme Industries Ltd." 
                          className="h-11 rounded-xl"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                          Inquiry Type
                        </label>
                        <select
                          name="inquiryType"
                          value={formData.inquiryType}
                          onChange={handleChange}
                          className="w-full h-11 px-3.5 rounded-xl border border-gray-300 focus:border-[#125486] focus:ring-2 focus:ring-[#125486]/10 text-sm outline-none transition-all bg-white"
                        >
                          <option>Sales & Demo Inquiry</option>
                          <option>Technical & Platform Support</option>
                          <option>Enterprise / Multi-Branch Deployment</option>
                          <option>AMC / Service Module Guidance</option>
                          <option>Partnership & Corporate Inquiry</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                        Message / Operational Requirements <span className="text-red-500">*</span>
                      </label>
                      <Textarea 
                        name="message" 
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your team size, workflow challenges, or specific modules you are looking to explore..." 
                        className="min-h-[120px] rounded-xl" 
                        required 
                      />
                    </div>

                    <Button 
                      type="submit" 
                      disabled={loading}
                      size="lg" 
                      className="w-full h-13 font-bold text-base bg-[#125486] hover:bg-[#0d3e63] text-white rounded-xl shadow-lg transition-all"
                    >
                      {loading ? "Sending Message..." : "Submit Message →"}
                    </Button>

                    <p className="text-xs text-gray-400 text-center flex items-center justify-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-gray-400" />
                      Inquiries delivered securely to {siteConfig.contact.inquiryEmail}. We respond within 2 hours.
                    </p>
                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: GOOGLE MAPS INTEGRATION                        */}
      {/* ========================================================= */}
      <section className="py-20 bg-slate-50 border-b border-gray-200">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#125486] bg-[#125486]/10 px-3 py-1 rounded-full">
                INTERACTIVE MAP DIRECTIONS
              </span>
              <h2 className="text-3xl font-extrabold text-gray-900 mt-2">
                Locate Our Offices
              </h2>
              <p className="text-gray-600 text-sm mt-1">
                Select an office below to view live coordinates, map view, and obtain directions.
              </p>
            </div>

            {/* Office Switcher Tabs */}
            <div className="flex bg-white p-1 rounded-2xl border border-gray-200 shadow-xs shrink-0">
              <button
                type="button"
                onClick={() => setActiveOffice("head")}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 ${
                  activeOffice === "head"
                    ? "bg-[#125486] text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                <Building2 className="w-4 h-4" />
                Head Office (Noida)
              </button>
              <button
                type="button"
                onClick={() => setActiveOffice("registered")}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 ${
                  activeOffice === "registered"
                    ? "bg-[#125486] text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                <MapPin className="w-4 h-4" />
                Registered Office (Delhi)
              </button>
            </div>
          </div>

          {/* Map Embed Card */}
          <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12">
            
            {/* Map Frame (span 8) */}
            <div className="lg:col-span-8 h-[420px] sm:h-[480px] w-full bg-slate-200 relative">
              <iframe
                title={offices[activeOffice].title}
                src={offices[activeOffice].mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[20%] contrast-[105%]"
              />
            </div>

            {/* Office Info Panel (span 4) */}
            <div className="lg:col-span-4 p-8 flex flex-col justify-between bg-slate-900 text-white space-y-6">
              <div className="space-y-4">
                <span className="px-3 py-1 rounded-md bg-[#125486] text-white text-[11px] font-bold uppercase tracking-wider">
                  {offices[activeOffice].title}
                </span>

                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {offices[activeOffice].city}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {offices[activeOffice].address}
                </p>

                <div className="text-xs text-sky-300 font-semibold pt-1">
                  Landmark: {offices[activeOffice].landmark}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800 space-y-4">
                <div className="text-xs text-gray-400">
                  Visitor hours: Monday to Saturday, 9:30 AM to 6:30 PM IST. Prior appointment recommended.
                </div>

                <a
                  href={offices[activeOffice].directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full h-12 rounded-xl bg-white text-[#125486] font-bold text-sm shadow hover:bg-sky-50 transition-colors"
                >
                  <span>Open in Google Maps & Get Directions</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  )
}
