import type { Metadata } from "next"
import Link from "next/link"
import { 
  ArrowRight, 
  CheckCircle2, 
  Phone, 
  ShieldCheck, 
  Smartphone, 
  Layers, 
  Workflow, 
  Users, 
  BarChart3, 
  Clock, 
  Calendar, 
  FileText, 
  MessageSquare, 
  Bell, 
  MapPin, 
  Briefcase, 
  CheckSquare, 
  CreditCard, 
  Boxes, 
  Megaphone, 
  TrendingUp, 
  Headset, 
  Wrench, 
  Receipt, 
  UserCheck, 
  PieChart, 
  Factory, 
  Car, 
  HardHat, 
  Truck, 
  Pill, 
  Building2, 
  ChevronRight, 
  ExternalLink,
  Sparkles,
  Zap,
  Globe2,
  Check
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { HomeFAQ } from "@/components/home/HomeFAQ"
import { DemoBookingSection } from "@/components/home/DemoBookingSection"

export const metadata: Metadata = {
  title: "CRM Software for Growing Businesses | RVM CRM",
  description:
    "Manage leads, customers, sales, tasks, inventory, service, and business operations with RVM CRM. Explore powerful CRM modules and request a free demo.",
  keywords: [
    "CRM software",
    "Business CRM software",
    "lead management software",
    "sales CRM",
    "service management software"
  ],
  alternates: {
    canonical: "https://www.rvmcrm.com/",
  },
  openGraph: {
    title: "RVM CRM — The Ultimate CRM for Growing Businesses",
    description:
      "Connect customer relationships, sales, service, inventory, and workforce activities with RVM CRM.",
    url: "https://www.rvmcrm.com/",
    siteName: "RVM CRM",
    locale: "en_US",
    type: "website",
  },
}

export default function HomePage() {
  return (
    <div className="bg-white text-gray-900 selection:bg-[#125486] selection:text-white">
      {/* ========================================================= */}
      {/* SECTION 1: HERO SECTION                                   */}
      {/* ========================================================= */}
      <section className="relative bg-gradient-to-b from-slate-50 via-white to-white pt-16 pb-24 lg:pt-20 lg:pb-32 overflow-hidden border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#125486]/10 text-[#125486] text-xs font-bold tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                THE ULTIMATE CRM FOR GROWING BUSINESSES
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-950 tracking-tight leading-[1.12]">
                The Ultimate CRM for{" "}
                <span className="text-[#125486]">Growing Businesses</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-normal max-w-2xl">
                Manage contacts, leads, inquiries, orders, quotations, expenses, inventory, marketing, finance, accounts, AMC/PMC services, complaints, tickets, employee attendance, and more with one powerful business management platform. RVM CRM connects your teams, streamlines daily operations, and provides complete business visibility to help you improve productivity and grow with confidence.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link href="#book-demo">
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
                    Talk to Sales
                  </Button>
                </Link>
              </div>

              {/* Trust Line */}
              <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-sm font-semibold text-gray-600">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#125486]" /> One Platform.
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#125486]" /> Connected Teams.
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#125486]" /> Smarter Business Operations.
                </span>
              </div>
            </div>

            {/* Right Visual: Laptop + Mobile Mockups */}
            <div className="lg:col-span-5 relative flex flex-col items-center justify-center pt-4 lg:pt-0">
              <div className="relative w-full max-w-xl lg:max-w-none">
                {/* Glow backdrop */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-[#125486]/30 via-sky-400/20 to-transparent rounded-3xl blur-2xl opacity-70 -z-10" />

                {/* LAPTOP MOCKUP */}
                <div className="relative rounded-t-[1.75rem] border-[10px] sm:border-[14px] border-slate-900 bg-slate-900 shadow-2xl overflow-hidden aspect-[16/10] flex flex-col">
                  {/* Top Bezel Camera Dot */}
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 flex items-center gap-1 z-30 pointer-events-none">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 ring-1 ring-slate-800" />
                    <span className="w-1 h-1 rounded-full bg-emerald-500/80 animate-pulse" />
                  </div>

                  {/* Browser / App Titlebar */}
                  <div className="bg-slate-900/95 text-slate-400 px-3.5 py-1.5 flex items-center justify-between border-b border-slate-800 shrink-0">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                    </div>
                    <div className="px-3 py-0.5 rounded-md bg-slate-800/80 text-[10px] text-slate-300 font-mono flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      app.rvmcrm.com
                    </div>
                    <div className="text-[10px] font-semibold text-sky-400">
                      Cloud CRM
                    </div>
                  </div>

                  {/* Screen Interior */}
                  <div className="flex-1 bg-gradient-to-br from-[#07243c] via-[#125486] to-[#093557] p-4 sm:p-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
                    {/* Background Tech Elements */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0,transparent_70%)] pointer-events-none" />
                    <div className="absolute -top-12 -right-12 w-48 h-48 bg-sky-400/15 rounded-full blur-2xl pointer-events-none" />
                    <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-[#125486]/40 rounded-full blur-2xl pointer-events-none" />

                    {/* Official Logo Display */}
                    <div className="relative z-10 bg-white px-3.5 py-1.5 rounded-xl shadow-xl inline-flex items-center justify-center mb-2.5 border border-sky-100">
                      <img
                        src="/rvm-crm-logo.png"
                        alt="RVM CRM Logo"
                        className="h-7 sm:h-9 w-auto object-contain"
                      />
                    </div>

                    {/* Standard Screen Content */}
                    <div className="relative z-10 space-y-1">
                      <h3 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight drop-shadow-md">
                        RVM CRM Software
                      </h3>
                      <p className="text-[11px] sm:text-xs text-sky-100 font-medium max-w-sm mx-auto drop-shadow-sm">
                        All-in-One Connected CRM & Business Management Platform
                      </p>
                    </div>

                    {/* Standard Navigation Modules: Sales, Service, Operation, Inventory, Marketing, Finance & Accounts */}
                    <div className="relative z-10 grid grid-cols-3 gap-1.5 sm:gap-2 mt-3 sm:mt-4 max-w-sm sm:max-w-md w-full">
                      {[
                        "Sales",
                        "Service",
                        "Operation",
                        "Inventory",
                        "Marketing",
                        "Finance & Accounts",
                      ].map((mod, idx) => (
                        <div
                          key={idx}
                          className="px-2 py-1 rounded-md bg-white/15 backdrop-blur text-white text-[10px] sm:text-[11px] font-semibold border border-white/20 shadow-xs text-center truncate"
                        >
                          {mod}
                        </div>
                      ))}
                    </div>

                    {/* Fast Demo CTA inside screen */}
                    <div className="relative z-10 mt-3 sm:mt-4">
                      <Link
                        href="#book-demo"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white text-[#125486] font-bold text-xs shadow-lg hover:bg-sky-50 transition-all hover:scale-105"
                      >
                        <span>Request Free Demo</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Laptop Lower Chassis & Keyboard Deck */}
                <div className="relative mx-auto w-[108%] -left-[4%] h-4 sm:h-5 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 rounded-b-2xl shadow-2xl border-t border-slate-600/70 flex items-center justify-center">
                  <div className="w-16 sm:w-24 h-1 sm:h-1.5 bg-slate-600/90 rounded-full" />
                </div>

                {/* Ambient Table Shadow */}
                <div className="w-[88%] mx-auto h-3.5 bg-slate-950/30 rounded-full blur-md -mt-1" />

                {/* MOBILE MOCKUP ALONGSIDE LAPTOP (Overlapping bottom-right) */}
                <div className="absolute -bottom-8 -right-3 sm:-bottom-10 sm:-right-6 md:-right-8 w-36 sm:w-44 md:w-48 z-20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-transform hover:scale-105 duration-300">
                  <div className="rounded-[28px] sm:rounded-[36px] border-[6px] sm:border-[8px] border-slate-900 bg-slate-950 overflow-hidden shadow-2xl flex flex-col ring-1 ring-slate-700/80 aspect-[9/18.5]">
                    
                    {/* Phone Top Notch / Dynamic Island */}
                    <div className="bg-slate-950 pt-2 pb-1 px-3 flex items-center justify-between shrink-0">
                      <span className="text-[9px] font-bold text-slate-300">9:41</span>
                      <div className="w-12 h-2.5 bg-slate-800 rounded-full mx-auto" />
                      <div className="w-3 h-1.5 bg-emerald-400 rounded-xs" />
                    </div>

                    {/* Phone Screen Interior */}
                    <div className="flex-1 bg-gradient-to-br from-[#07243c] via-[#125486] to-[#093557] p-2.5 flex flex-col justify-between text-center relative overflow-hidden">
                      <div className="space-y-1.5">
                        {/* Logo in Phone */}
                        <div className="bg-white px-2 py-0.5 rounded-md shadow inline-flex items-center justify-center mx-auto">
                          <img
                            src="/rvm-crm-logo.png"
                            alt="RVM CRM"
                            className="h-4 sm:h-5 w-auto object-contain"
                          />
                        </div>

                        <div>
                          <div className="text-[10px] sm:text-xs font-black text-white leading-tight">
                            RVM CRM Software
                          </div>
                          <div className="text-[7.5px] sm:text-[8.5px] text-sky-200 line-clamp-1">
                            All-in-One Connected CRM
                          </div>
                        </div>

                        {/* Modules in Phone Screen */}
                        <div className="grid grid-cols-2 gap-1 pt-1 text-[8px] sm:text-[9px]">
                          {["Sales", "Service", "Operation", "Inventory", "Marketing", "Finance"].map((m, idx) => (
                            <div
                              key={idx}
                              className="px-1 py-0.5 rounded bg-white/20 text-white font-medium truncate"
                            >
                              {m}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Phone CTA */}
                      <div className="pt-2">
                        <Link
                          href="#book-demo"
                          className="block py-1 px-2 rounded-md bg-white text-[#125486] font-bold text-[9px] shadow-sm hover:bg-sky-50"
                        >
                          Request Free Demo
                        </Link>
                      </div>

                      {/* Phone Home Bar */}
                      <div className="w-10 h-1 bg-white/60 rounded-full mx-auto mt-1" />
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 1.2: MORE THAN A CRM. A CONNECTED PLATFORM.       */}
      {/* ========================================================= */}
      <section className="py-20 bg-slate-50 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-block px-3.5 py-1 bg-[#125486]/10 text-[#125486] font-bold text-xs uppercase tracking-widest rounded-full">
              CONNECTED BUSINESS MANAGEMENT
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              More Than a CRM. A Connected Business Management Platform.
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Your business needs more than a place to store customer information. It needs connected workflows that help teams move from the first enquiry to the final delivery and ongoing customer service.
            </p>
            <p className="text-sm md:text-base text-gray-500">
              RVM CRM brings essential business activities together in one centralized platform, helping teams collaborate, stay organized, and make informed decisions.
            </p>
          </div>

          {/* 5 Core Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            
            {/* Pillar 1 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-[#125486]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#125486]/10 text-[#125486] flex items-center justify-center mb-5 font-bold">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">CRM & Sales</h3>
                <div className="text-xs font-bold text-[#125486] mb-3 bg-[#125486]/5 py-1 px-2.5 rounded-md inline-block">
                  Customers → Leads → Follow-ups → Sales
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Organize customer information, manage prospects, schedule follow-ups, and keep your sales pipeline moving.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-[#125486]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#125486]/10 text-[#125486] flex items-center justify-center mb-5 font-bold">
                  <Boxes className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Business Operations</h3>
                <div className="text-xs font-bold text-[#125486] mb-3 bg-[#125486]/5 py-1 px-2.5 rounded-md inline-block">
                  Orders → Inventory → Installation → Service
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Coordinate orders, monitor stock activities, organize installations, and manage service operations from connected workflows.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-[#125486]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#125486]/10 text-[#125486] flex items-center justify-center mb-5 font-bold">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Workforce Management</h3>
                <div className="text-xs font-bold text-[#125486] mb-3 bg-[#125486]/5 py-1 px-2.5 rounded-md inline-block">
                  Tasks → Attendance → Movement → Expenses
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Assign responsibilities, organize schedules, record attendance, coordinate field activities, and manage employee expenses.
                </p>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-[#125486]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#125486]/10 text-[#125486] flex items-center justify-center mb-5 font-bold">
                  <Headset className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Customer Service</h3>
                <div className="text-xs font-bold text-[#125486] mb-3 bg-[#125486]/5 py-1 px-2.5 rounded-md inline-block">
                  Complaints → Tickets → AMC → Resolution
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Track customer issues, coordinate service requests, monitor maintenance contracts, and keep resolutions organized.
                </p>
              </div>
            </div>

            {/* Pillar 5 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-[#125486]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#125486]/10 text-[#125486] flex items-center justify-center mb-5 font-bold">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Management & Analytics</h3>
                <div className="text-xs font-bold text-[#125486] mb-3 bg-[#125486]/5 py-1 px-2.5 rounded-md inline-block">
                  Dashboards → Reports → Analytics → Decisions
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Review business performance, monitor key activities, and use meaningful reports to support better management decisions.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: EVERYTHING YOUR BUSINESS NEEDS (14 MODULES)     */}
      {/* ========================================================= */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20">
          <div className="text-center max-w-5xl mx-auto mb-16 space-y-5">
            <span className="inline-block px-3.5 py-1 bg-[#125486]/10 text-[#125486] font-bold text-xs uppercase tracking-widest rounded-full">
              ONE PLATFORM. MULTIPLE CAPABILITIES.
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              Everything Your Business Needs to Work Smarter
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              From managing customer relationships to coordinating sales, service, inventory, and employee activities, RVM CRM gives your business a centralized place to organize its everyday operations.
            </p>
            <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-4xl mx-auto">
              Explore the modules designed to help your teams work efficiently, maintain better visibility, and manage business processes with greater control.
            </p>
          </div>

          {/* Module Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8">
            
            {/* 1. Contact Management */}
            <div className="bg-slate-50/70 p-6 rounded-2xl border border-gray-200 hover:border-[#125486] hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#125486]/10 text-[#125486] flex items-center justify-center font-bold">
                    <Users className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-black text-gray-400 group-hover:text-[#125486]">01</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#125486] transition-colors">
                  Contact Management
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Build a reliable, centralized database of customers, prospects, vendors, and business contacts. Keep essential details and relationship history organized so your team can access the right information when it matters.
                </p>
              </div>
              <Link
                href="/modules/contact-management"
                className="text-xs font-bold text-[#125486] inline-flex items-center gap-1.5 hover:underline mt-auto"
              >
                Learn more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* 2. Lead Management */}
            <div className="bg-slate-50/70 p-6 rounded-2xl border border-gray-200 hover:border-[#125486] hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#125486]/10 text-[#125486] flex items-center justify-center font-bold">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-black text-gray-400 group-hover:text-[#125486]">02</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#125486] transition-colors">
                  Lead Management
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Turn enquiries into organized sales opportunities. Capture lead details, assign ownership, plan follow-ups, monitor lead stages, and help your sales team focus on prospects with the strongest potential.
                </p>
              </div>
              <Link
                href="/modules/lead-management"
                className="text-xs font-bold text-[#125486] inline-flex items-center gap-1.5 hover:underline mt-auto"
              >
                Learn more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* 3. Tasks & Planner */}
            <div className="bg-slate-50/70 p-6 rounded-2xl border border-gray-200 hover:border-[#125486] hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#125486]/10 text-[#125486] flex items-center justify-center font-bold">
                    <CheckSquare className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-black text-gray-400 group-hover:text-[#125486]">03</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#125486] transition-colors">
                  Tasks & Planner
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Keep daily work under control with structured task lists, deadlines, priorities, assignments, and progress tracking. Give employees clear responsibilities and help managers follow up on pending activities.
                </p>
              </div>
              <Link
                href="/modules/tasks-and-planner"
                className="text-xs font-bold text-[#125486] inline-flex items-center gap-1.5 hover:underline mt-auto"
              >
                Learn more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* 4. Order Management */}
            <div className="bg-slate-50/70 p-6 rounded-2xl border border-gray-200 hover:border-[#125486] hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#125486]/10 text-[#125486] flex items-center justify-center font-bold">
                    <Boxes className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-black text-gray-400 group-hover:text-[#125486]">04</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#125486] transition-colors">
                  Order Management
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Bring order-related information into one organized workflow. Monitor order details, customer requirements, processing status, and progress to help your team coordinate sales commitments and fulfilment activities.
                </p>
              </div>
              <Link
                href="/modules/order-management"
                className="text-xs font-bold text-[#125486] inline-flex items-center gap-1.5 hover:underline mt-auto"
              >
                Learn more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* 5. Quotation Management */}
            <div className="bg-slate-50/70 p-6 rounded-2xl border border-gray-200 hover:border-[#125486] hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#125486]/10 text-[#125486] flex items-center justify-center font-bold">
                    <FileText className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-black text-gray-400 group-hover:text-[#125486]">05</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#125486] transition-colors">
                  Quotation Management
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Prepare and organize customer quotations with clear pricing, item details, taxes, discounts, and status tracking. Keep quotation records accessible and make it easier to follow up on pending proposals and potential orders.
                </p>
              </div>
              <Link
                href="/modules/quotation-management"
                className="text-xs font-bold text-[#125486] inline-flex items-center gap-1.5 hover:underline mt-auto"
              >
                Learn more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* 6. AMC Management */}
            <div className="bg-slate-50/70 p-6 rounded-2xl border border-gray-200 hover:border-[#125486] hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#125486]/10 text-[#125486] flex items-center justify-center font-bold">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-black text-gray-400 group-hover:text-[#125486]">06</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#125486] transition-colors">
                  AMC Management
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Keep annual maintenance contracts organized with contract details, coverage periods, service schedules, and renewal dates. Help your team stay aware of upcoming commitments and maintain continuity in customer service.
                </p>
              </div>
              <Link
                href="/modules/amc-management"
                className="text-xs font-bold text-[#125486] inline-flex items-center gap-1.5 hover:underline mt-auto"
              >
                Learn more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* 7. Complaints & Ticket Management */}
            <div className="bg-slate-50/70 p-6 rounded-2xl border border-gray-200 hover:border-[#125486] hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#125486]/10 text-[#125486] flex items-center justify-center font-bold">
                    <Headset className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-black text-gray-400 group-hover:text-[#125486]">07</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#125486] transition-colors">
                  Complaints & Ticket Management
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Bring customer complaints and service requests into a trackable process. Assign tickets, set priorities, monitor progress, record resolutions, and help your service team respond with better accountability.
                </p>
              </div>
              <Link
                href="/modules/complaints-and-ticket-management"
                className="text-xs font-bold text-[#125486] inline-flex items-center gap-1.5 hover:underline mt-auto"
              >
                Learn more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* 8. Installation Management */}
            <div className="bg-slate-50/70 p-6 rounded-2xl border border-gray-200 hover:border-[#125486] hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#125486]/10 text-[#125486] flex items-center justify-center font-bold">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-black text-gray-400 group-hover:text-[#125486]">08</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#125486] transition-colors">
                  Installation Management
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Coordinate installation activities from assignment to completion. Organize customer and equipment details, schedule field visits, track installation status, and keep teams informed about outstanding work.
                </p>
              </div>
              <Link
                href="/modules/installation-management"
                className="text-xs font-bold text-[#125486] inline-flex items-center gap-1.5 hover:underline mt-auto"
              >
                Learn more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* 9. Expense Management */}
            <div className="bg-slate-50/70 p-6 rounded-2xl border border-gray-200 hover:border-[#125486] hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#125486]/10 text-[#125486] flex items-center justify-center font-bold">
                    <Receipt className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-black text-gray-400 group-hover:text-[#125486]">09</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#125486] transition-colors">
                  Expense Management
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Record and organize business expenses with clearer visibility into spending, employee submissions, expense categories, and review status. Keep expense information accessible for monitoring and reporting.
                </p>
              </div>
              <Link
                href="/modules/expense-management"
                className="text-xs font-bold text-[#125486] inline-flex items-center gap-1.5 hover:underline mt-auto"
              >
                Learn more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* 10. Inventory Management */}
            <div className="bg-slate-50/70 p-6 rounded-2xl border border-gray-200 hover:border-[#125486] hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#125486]/10 text-[#125486] flex items-center justify-center font-bold">
                    <Boxes className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-black text-gray-400 group-hover:text-[#125486]">10</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#125486] transition-colors">
                  Inventory Management
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Maintain organized item records and monitor stock-related activities. Manage goods receipts, issues, transfers, indents, item specifications, and physical inventory to improve stock visibility and operational coordination.
                </p>
              </div>
              <Link
                href="/modules/inventory-management"
                className="text-xs font-bold text-[#125486] inline-flex items-center gap-1.5 hover:underline mt-auto"
              >
                Learn more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* 11. Marketing Management */}
            <div className="bg-slate-50/70 p-6 rounded-2xl border border-gray-200 hover:border-[#125486] hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#125486]/10 text-[#125486] flex items-center justify-center font-bold">
                    <Megaphone className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-black text-gray-400 group-hover:text-[#125486]">11</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#125486] transition-colors">
                  Marketing Management
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Organize marketing activities and connect campaign efforts with business enquiries. Track campaign information, lead sources, and marketing-related activities to gain a clearer picture of how your marketing supports sales.
                </p>
              </div>
              <Link
                href="/modules/marketing-management"
                className="text-xs font-bold text-[#125486] inline-flex items-center gap-1.5 hover:underline mt-auto"
              >
                Learn more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* 12. Finance & Accounts */}
            <div className="bg-slate-50/70 p-6 rounded-2xl border border-gray-200 hover:border-[#125486] hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#125486]/10 text-[#125486] flex items-center justify-center font-bold">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-black text-gray-400 group-hover:text-[#125486]">12</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#125486] transition-colors">
                  Finance & Accounts
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Keep supported financial records and account-related activities organized in one place. Improve visibility into relevant transactions, financial information, and reporting while coordinating with wider business operations.
                </p>
              </div>
              <Link
                href="/modules/finance-and-accounts"
                className="text-xs font-bold text-[#125486] inline-flex items-center gap-1.5 hover:underline mt-auto"
              >
                Learn more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* 13. Attendance & Leaves */}
            <div className="bg-slate-50/70 p-6 rounded-2xl border border-gray-200 hover:border-[#125486] hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#125486]/10 text-[#125486] flex items-center justify-center font-bold">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-black text-gray-400 group-hover:text-[#125486]">13</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#125486] transition-colors">
                  Attendance & Leaves
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Organize employee attendance records and leave requests with a clearer view of workforce availability. Help managers review attendance information, plan resources, and coordinate employee schedules more effectively.
                </p>
              </div>
              <Link
                href="/modules/attendance-and-leaves"
                className="text-xs font-bold text-[#125486] inline-flex items-center gap-1.5 hover:underline mt-auto"
              >
                Learn more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* 14. Analytics & Reports */}
            <div className="bg-slate-50/70 p-6 rounded-2xl border border-gray-200 hover:border-[#125486] hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#125486]/10 text-[#125486] flex items-center justify-center font-bold">
                    <PieChart className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-black text-gray-400 group-hover:text-[#125486]">14</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#125486] transition-colors">
                  Analytics & Reports
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Transform operational records into meaningful business insights. Review available sales, lead, service, employee, expense, and inventory reports to monitor performance, identify trends, and support informed decisions.
                </p>
              </div>
              <Link
                href="/modules/analytics-and-reports"
                className="text-xs font-bold text-[#125486] inline-flex items-center gap-1.5 hover:underline mt-auto"
              >
                Learn more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

          {/* Sub-CTA Banner in Section 2 */}
          <div className="mt-16 bg-gradient-to-r from-[#125486] to-[#0a3556] rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="max-w-2xl text-left">
              <h3 className="text-2xl md:text-3xl font-bold">
                Find the Right CRM Setup for Your Business
              </h3>
              <p className="text-white/80 text-base mt-2">
                Explore the modules that match your business workflows and see RVM CRM in action.
              </p>
            </div>
            <Link href="#book-demo" className="shrink-0">
              <Button size="lg" className="rounded-full h-13 px-8 text-base font-bold bg-white text-[#125486] hover:bg-gray-100 shadow-md">
                Request Free Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: BUILT FOR BUSINESS TEAMS                       */}
      {/* ========================================================= */}
      <section className="py-24 bg-slate-50 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-block px-3.5 py-1 bg-[#125486]/10 text-[#125486] font-bold text-xs uppercase tracking-widest rounded-full">
              ONE PLATFORM. EVERY TEAM CONNECTED.
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              Give Every Team the Tools to Perform Better
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              RVM CRM helps different departments work with shared business information, clearer responsibilities, and more organized processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            
            {/* Sales Teams */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col justify-between hover:border-[#125486]/40 hover:shadow-lg transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#125486] flex items-center justify-center font-bold mb-5">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Sales Teams</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Manage prospects, schedule follow-ups, prepare quotations, and monitor opportunities through the sales process.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 text-xs font-semibold text-[#125486]">
                Pipeline • Proposals • Deals
              </div>
            </div>

            {/* Field Teams */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col justify-between hover:border-[#125486]/40 hover:shadow-lg transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold mb-5">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Field Teams</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Coordinate customer visits, record field activities, access relevant customer information, and stay connected with office teams.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 text-xs font-semibold text-emerald-600">
                Check-In • GPS • Nearby Leads
              </div>
            </div>

            {/* Service Teams */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col justify-between hover:border-[#125486]/40 hover:shadow-lg transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold mb-5">
                  <Headset className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Service Teams</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Organize complaints, service tickets, installations, and maintenance commitments with clearer task ownership and progress tracking.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 text-xs font-semibold text-amber-600">
                AMC • Tickets • Maintenance
              </div>
            </div>

            {/* Operations & Inventory Teams */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col justify-between hover:border-[#125486]/40 hover:shadow-lg transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold mb-5">
                  <Boxes className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Operations & Inventory</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Keep item information, stock activities, orders, and operational tasks better coordinated across your workflows.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 text-xs font-semibold text-purple-600">
                Stock • Orders • Dispatch
              </div>
            </div>

            {/* Management Teams */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col justify-between hover:border-[#125486]/40 hover:shadow-lg transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#125486] flex items-center justify-center font-bold mb-5">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Management Teams</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Review reports, follow team performance, monitor important activities, and make decisions using centralized business information.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 text-xs font-semibold text-[#125486]">
                Analytics • Dashboards • KPIs
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 4: POWERFUL FEATURES                              */}
      {/* ========================================================= */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-3xl space-y-3">
              <span className="inline-block px-3.5 py-1 bg-[#125486]/10 text-[#125486] font-bold text-xs uppercase tracking-widest rounded-full">
                DESIGNED FOR EVERYDAY PRODUCTIVITY
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                Work Smarter With Powerful CRM Features
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Go beyond basic customer records with tools that help your team coordinate activities, stay informed, and manage business responsibilities.
              </p>
            </div>
            <Link href="/features" className="shrink-0">
              <Button variant="outline" className="rounded-full font-bold border-gray-300 hover:border-[#125486] hover:text-[#125486]">
                Explore All Features →
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Feature 1 */}
            <Link href="/features/check-in-and-check-out" className="group">
              <div className="p-6 rounded-2xl border border-gray-200 bg-slate-50/60 hover:bg-white hover:border-[#125486]/40 hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#125486]/10 text-[#125486] flex items-center justify-center font-bold mb-4 group-hover:bg-[#125486] group-hover:text-white transition-colors">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#125486] transition-colors">
                    Check-In & Check-Out
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Record employee attendance and field activity check-ins and check-outs through supported workflows.
                  </p>
                </div>
                <div className="mt-4 text-xs font-bold text-[#125486] flex items-center gap-1">
                  Learn more <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Feature 2 */}
            <Link href="/features/employee-movement" className="group">
              <div className="p-6 rounded-2xl border border-gray-200 bg-slate-50/60 hover:bg-white hover:border-[#125486]/40 hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#125486]/10 text-[#125486] flex items-center justify-center font-bold mb-4 group-hover:bg-[#125486] group-hover:text-white transition-colors">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#125486] transition-colors">
                    Employee Movement
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Improve visibility into field activities and employee movement using the tracking capabilities enabled for your organization.
                  </p>
                </div>
                <div className="mt-4 text-xs font-bold text-[#125486] flex items-center gap-1">
                  Learn more <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Feature 3 */}
            <Link href="/features/notifications-and-alerts" className="group">
              <div className="p-6 rounded-2xl border border-gray-200 bg-slate-50/60 hover:bg-white hover:border-[#125486]/40 hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#125486]/10 text-[#125486] flex items-center justify-center font-bold mb-4 group-hover:bg-[#125486] group-hover:text-white transition-colors">
                    <Bell className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#125486] transition-colors">
                    Notifications & Alerts
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Help teams stay aware of assigned activities, important updates, reminders, and pending actions.
                  </p>
                </div>
                <div className="mt-4 text-xs font-bold text-[#125486] flex items-center gap-1">
                  Learn more <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Feature 4 */}
            <Link href="/features/nearby-customers" className="group">
              <div className="p-6 rounded-2xl border border-gray-200 bg-slate-50/60 hover:bg-white hover:border-[#125486]/40 hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#125486]/10 text-[#125486] flex items-center justify-center font-bold mb-4 group-hover:bg-[#125486] group-hover:text-white transition-colors">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#125486] transition-colors">
                    Nearby Customers
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Help field representatives identify nearby customer locations and plan visits when location services and customer data are available.
                  </p>
                </div>
                <div className="mt-4 text-xs font-bold text-[#125486] flex items-center gap-1">
                  Learn more <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Feature 5 */}
            <Link href="/features/team-chats" className="group">
              <div className="p-6 rounded-2xl border border-gray-200 bg-slate-50/60 hover:bg-white hover:border-[#125486]/40 hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#125486]/10 text-[#125486] flex items-center justify-center font-bold mb-4 group-hover:bg-[#125486] group-hover:text-white transition-colors">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#125486] transition-colors">
                    Team Chats
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Keep internal conversations connected to day-to-day teamwork, instant task updates, and coordinated execution.
                  </p>
                </div>
                <div className="mt-4 text-xs font-bold text-[#125486] flex items-center gap-1">
                  Learn more <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Feature 6 */}
            <Link href="/features/news-and-updates" className="group">
              <div className="p-6 rounded-2xl border border-gray-200 bg-slate-50/60 hover:bg-white hover:border-[#125486]/40 hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#125486]/10 text-[#125486] flex items-center justify-center font-bold mb-4 group-hover:bg-[#125486] group-hover:text-white transition-colors">
                    <Megaphone className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#125486] transition-colors">
                    News & Updates
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Share company announcements, business updates, policy guidelines, and important information with relevant team members.
                  </p>
                </div>
                <div className="mt-4 text-xs font-bold text-[#125486] flex items-center gap-1">
                  Learn more <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Feature 7 */}
            <Link href="/features/calendar" className="group">
              <div className="p-6 rounded-2xl border border-gray-200 bg-slate-50/60 hover:bg-white hover:border-[#125486]/40 hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#125486]/10 text-[#125486] flex items-center justify-center font-bold mb-4 group-hover:bg-[#125486] group-hover:text-white transition-colors">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#125486] transition-colors">
                    Calendar & Scheduling
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Organize meetings, appointments, deadlines, and planned activities to keep your team aligned across time zones.
                  </p>
                </div>
                <div className="mt-4 text-xs font-bold text-[#125486] flex items-center gap-1">
                  Learn more <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Feature 8 */}
            <Link href="/features/reports-and-dashboard" className="group">
              <div className="p-6 rounded-2xl border border-gray-200 bg-slate-50/60 hover:bg-white hover:border-[#125486]/40 hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#125486]/10 text-[#125486] flex items-center justify-center font-bold mb-4 group-hover:bg-[#125486] group-hover:text-white transition-colors">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#125486] transition-colors">
                    Reports & Dashboard
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Get a structured view of key activities and business performance through available visual dashboards and exportable reports.
                  </p>
                </div>
                <div className="mt-4 text-xs font-bold text-[#125486] flex items-center gap-1">
                  Learn more <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Feature 9 */}
            <Link href="/features/mobile-application" className="group">
              <div className="p-6 rounded-2xl border border-gray-200 bg-slate-50/60 hover:bg-white hover:border-[#125486]/40 hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#125486]/10 text-[#125486] flex items-center justify-center font-bold mb-4 group-hover:bg-[#125486] group-hover:text-white transition-colors">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#125486] transition-colors">
                    Mobile Application
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Access supported CRM activities while on the move with mobile experiences for Android and iOS, subject to app availability.
                  </p>
                </div>
                <div className="mt-4 text-xs font-bold text-[#125486] flex items-center gap-1">
                  Learn more <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 5: INTEGRATIONS                                   */}
      {/* ========================================================= */}
      <section className="py-24 bg-slate-50 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-block px-3.5 py-1 bg-[#125486]/10 text-[#125486] font-bold text-xs uppercase tracking-widest rounded-full">
              CONNECTED BUSINESS ECOSYSTEM
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              Bring Your Business Channels Together
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Reduce fragmented workflows by connecting RVM CRM with the business channels and tools your team uses to generate leads, communicate with customers, and manage information.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {[
              { title: "WhatsApp Business", desc: "Support customer communication through supported WhatsApp integration workflows.", badge: "Direct Messaging" },
              { title: "IndiaMART", desc: "Explore lead connectivity for enquiries received through IndiaMART.", badge: "B2B Leads" },
              { title: "TradeIndia", desc: "Bring supported TradeIndia enquiry workflows closer to your sales process.", badge: "Marketplace" },
              { title: "Justdial", desc: "Organize eligible leads from Justdial through supported integration methods.", badge: "Local Enquiries" },
              { title: "Email", desc: "Keep relevant business correspondence connected to supported CRM workflows.", badge: "Mail Sync" },
              { title: "Website Lead Forms", desc: "Route website enquiries directly into your lead management process.", badge: "Web Inbound" },
              { title: "APIs & Third-Party", desc: "Explore integration options for supported external applications and ERP systems.", badge: "REST APIs" },
            ].map((integ, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-[#125486]/40 hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-[#125486] bg-[#125486]/10 px-2.5 py-0.5 rounded-full">
                      {integ.badge}
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-600">Available</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{integ.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{integ.desc}</p>
                </div>
              </div>
            ))}

            {/* Explore Integrations Box */}
            <div className="bg-[#125486] p-6 rounded-2xl text-white flex flex-col justify-between shadow-lg">
              <div>
                <span className="text-xs font-bold text-white/80 uppercase tracking-wider">Custom Connectors</span>
                <h3 className="text-xl font-bold mt-2 mb-3">Need a custom integration?</h3>
                <p className="text-sm text-white/90 leading-relaxed">
                  Our engineering team supports tailored Webhooks and API endpoints for your internal enterprise software.
                </p>
              </div>
              <Link href="/contact" className="mt-6">
                <Button className="w-full bg-white text-[#125486] hover:bg-gray-100 font-bold text-xs h-10 rounded-xl">
                  Explore Integrations
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 6: INDUSTRIES                                     */}
      {/* ========================================================= */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-block px-3.5 py-1 bg-[#125486]/10 text-[#125486] font-bold text-xs uppercase tracking-widest rounded-full">
              FLEXIBLE BUSINESS SOLUTIONS
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              CRM Solutions for Your Industry
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Every industry has different customers, sales cycles, service requirements, and operational challenges. RVM CRM brings relevant modules together to support the workflows that matter to your business.
            </p>
          </div>

          {/* 6 Key Industry Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Manufacturing & Engineering",
                slug: "manufacturing",
                icon: Factory,
                desc: "Coordinate customer enquiries, quotations, orders, inventory activities, installations, and service workflows.",
              },
              {
                title: "Garments & Textiles",
                slug: "garments-and-textiles",
                icon: Layers,
                desc: "Organize buyer relationships, sales follow-ups, order coordination, and customer service activities.",
              },
              {
                title: "Distribution & Wholesale",
                slug: "distribution-and-wholesale",
                icon: Truck,
                desc: "Manage dealer and customer contacts, quotations, orders, field sales activities, and stock-related workflows.",
              },
              {
                title: "Automotive & Auto Components",
                slug: "automotive",
                icon: Car,
                desc: "Maintain customer relationships, coordinate orders, and organize installation or after-sales service activities where relevant.",
              },
              {
                title: "Pharmaceuticals & Healthcare",
                slug: "pharmaceuticals",
                icon: Pill,
                desc: "Organize business contacts, sales enquiries, customer follow-ups, and distribution-related activities.",
              },
              {
                title: "Construction & Real Estate",
                slug: "construction",
                icon: Building2,
                desc: "Track enquiries, client communication, follow-ups, proposals, and project-related customer activities.",
              },
            ].map((ind, i) => {
              const IconComponent = ind.icon
              return (
                <Link key={i} href={`/industries/${ind.slug}`} className="group">
                  <div className="bg-slate-50/70 p-8 rounded-2xl border border-gray-200 hover:border-[#125486] hover:bg-white hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between">
                    <div>
                      <div className="w-14 h-14 rounded-2xl bg-white border border-gray-200 group-hover:border-[#125486]/30 group-hover:bg-[#125486] text-[#125486] group-hover:text-white flex items-center justify-center font-bold mb-6 transition-all shadow-sm">
                        <IconComponent className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#125486] transition-colors">
                        {ind.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-6">
                        {ind.desc}
                      </p>
                    </div>
                    <div className="text-xs font-bold text-[#125486] flex items-center gap-1.5 group-hover:underline">
                      Explore Industry Workflows <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

          {/* Other Suitable Industries Pill List */}
          <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-gray-200 text-center">
            <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">
              Other suitable industry segments supported by RVM CRM:
            </p>
            <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto">
              {[
                "FMCG", "Electrical & Electronics", "Food & Beverage", "Chemicals", "Logistics & Transport",
                "Printing & Packaging", "Furniture & Fixtures", "Trading", "Security Services",
                "Facility Management", "Consumer Durables", "Hospitality"
              ].map((pill, idx) => (
                <span key={idx} className="text-xs font-medium bg-white px-3.5 py-1.5 rounded-full border border-gray-200 text-gray-700">
                  {pill}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <Link href="/industries">
                <Button variant="outline" className="rounded-full px-8 font-bold border-gray-300 hover:border-[#125486] hover:text-[#125486]">
                  Explore All Industries
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 7: WHY CHOOSE RVM CRM?                             */}
      {/* ========================================================= */}
      <section className="py-24 bg-slate-50 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-block px-3.5 py-1 bg-[#125486]/10 text-[#125486] font-bold text-xs uppercase tracking-widest rounded-full">
              BUILT AROUND YOUR BUSINESS
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              Why Choose RVM CRM?
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Choosing CRM software is about more than storing customer data. It is about creating a more organized way for your teams to work and your business to grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Connected Business Modules",
                desc: "Bring customer management, sales, service, inventory, employee activities, and reporting into a unified working environment.",
                icon: Layers,
              },
              {
                title: "Modular Approach",
                desc: "Align your setup with relevant business functions and explore additional modules as your operational requirements evolve.",
                icon: Boxes,
              },
              {
                title: "Organized Workflows",
                desc: "Give teams clearer ownership of leads, tasks, orders, complaints, installations, and other business activities.",
                icon: Workflow,
              },
              {
                title: "Access & Accountability",
                desc: "Support structured user access and responsibility management through the permissions and controls available in your deployment.",
                icon: ShieldCheck,
              },
              {
                title: "Support for Teams on the Move",
                desc: "Keep field representatives and office teams connected to the information and activities they need, wherever they operate.",
                icon: Smartphone,
              },
              {
                title: "Better Business Visibility",
                desc: "Use available reports and dashboards to review progress, monitor activities, and identify areas that need attention.",
                icon: BarChart3,
              },
            ].map((card, i) => {
              const IconComp = card.icon
              return (
                <div key={i} className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-[#125486]/40 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[#125486]/10 text-[#125486] flex items-center justify-center font-bold mb-6">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{card.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 8: MOBILE CRM FOR ANDROID & IOS                   */}
      {/* ========================================================= */}
      <section className="py-24 bg-white border-b border-gray-200 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-gradient-to-br from-slate-900 via-[#0d3455] to-[#125486] rounded-3xl p-8 md:p-16 text-white shadow-2xl relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
              
              <div className="lg:col-span-7 space-y-6 text-left">
                <span className="inline-block px-3.5 py-1 bg-white/10 text-white font-bold text-xs uppercase tracking-widest rounded-full backdrop-blur-sm">
                  YOUR BUSINESS. ON THE MOVE.
                </span>

                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
                  Take Your CRM Wherever Business Takes You
                </h2>

                <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-xl">
                  Your team shouldn't have to wait until they return to the office to access important customer information. RVM CRM's mobile experience is designed to bring supported CRM activities closer to employees working in the field and across locations.
                </p>

                <div className="space-y-3 pt-2">
                  {[
                    "Access customer and lead information instantly on site",
                    "Manage assigned tasks and follow-up reminders",
                    "Record supported check-in and check-out activities",
                    "Stay informed about critical notifications and updates",
                    "Coordinate field activities and customer visits",
                  ].map((bullet, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-400 text-slate-900 flex items-center justify-center text-xs font-bold shrink-0">
                        ✓
                      </div>
                      <span className="text-white/90 text-sm md:text-base font-medium">{bullet}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-3 px-5 py-3 bg-white/10 rounded-xl border border-white/20 backdrop-blur-sm">
                    <Smartphone className="w-6 h-6 text-emerald-400" />
                    <div>
                      <div className="text-xs text-white/70">Supported Platforms</div>
                      <div className="text-sm font-bold">Android & iOS Compatibility</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-4 py-2.5 rounded-xl bg-white text-slate-900 font-bold text-xs flex items-center gap-2 shadow">
                      Google Play
                    </span>
                    <span className="px-4 py-2.5 rounded-xl bg-white text-slate-900 font-bold text-xs flex items-center gap-2 shadow">
                      App Store
                    </span>
                  </div>
                </div>
              </div>

              {/* Complete, Full-Length Smartphone Mockup */}
              <div className="lg:col-span-5 flex justify-center items-center py-6">
                <div className="relative w-[300px] sm:w-[320px] aspect-[9/19.5] rounded-[52px] border-[12px] border-slate-900 bg-slate-950 shadow-[0_25px_60px_rgba(0,0,0,0.65)] ring-1 ring-slate-700/80 overflow-hidden flex flex-col justify-between">
                  
                  {/* Dynamic Island / Speaker */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-slate-900 rounded-full flex items-center justify-between px-3 z-30 shadow-inner">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-800 ring-1 ring-slate-700/60" />
                    <span className="w-2 h-2 rounded-full bg-emerald-500/80 animate-pulse" />
                  </div>

                  {/* Top Status Bar */}
                  <div className="pt-3 px-6 pb-2 flex items-center justify-between text-[11px] font-semibold text-slate-300 z-20 shrink-0">
                    <span>9:41</span>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px]">5G</span>
                      <div className="w-5 h-2.5 border border-slate-400 rounded-xs p-0.5 flex items-center">
                        <div className="h-full w-full bg-emerald-400 rounded-2xs" />
                      </div>
                    </div>
                  </div>

                  {/* Mobile Screen Interior (Realistic RVM CRM Mobile App Interface) */}
                  <div className="flex-1 bg-gradient-to-b from-[#07243c] via-[#0d3455] to-[#081f34] px-4 py-3 flex flex-col justify-between text-left overflow-hidden">
                    
                    {/* Header Bar */}
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/15 space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="bg-white px-2 py-0.5 rounded-md shadow-xs">
                          <img
                            src="/rvm-crm-logo.png"
                            alt="RVM CRM"
                            className="h-5 w-auto object-contain"
                          />
                        </div>
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-400/30">
                          ● Online Mode
                        </span>
                      </div>
                      <div>
                        <h4 className="text-sm font-extrabold text-white leading-tight">
                          RVM CRM Software
                        </h4>
                        <p className="text-[10px] text-sky-200">
                          All-in-One Connected CRM & Business Management Platform
                        </p>
                      </div>
                    </div>

                    {/* Geo-Attendance Card */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2.5 border border-white/10 space-y-1.5">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-white/80 font-medium">Field Attendance</span>
                        <span className="text-emerald-400 font-bold">GPS Verified</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-center">
                        <div className="bg-emerald-600/90 text-white py-1.5 rounded-lg text-xs font-bold shadow-xs">
                          Punch In (09:15)
                        </div>
                        <div className="bg-white/15 text-white/90 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/20 transition-colors">
                          Punch Out
                        </div>
                      </div>
                    </div>

                    {/* 6 Standard Modules Grid */}
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-white/60">
                        Core Modules
                      </span>
                      <div className="grid grid-cols-3 gap-1.5 text-center">
                        {[
                          { name: "Sales", icon: "💼" },
                          { name: "Service", icon: "🛠️" },
                          { name: "Operation", icon: "⚙️" },
                          { name: "Inventory", icon: "📦" },
                          { name: "Marketing", icon: "📢" },
                          { name: "Finance", icon: "📊" },
                        ].map((mod, idx) => (
                          <div
                            key={idx}
                            className="bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl p-1.5 transition-colors"
                          >
                            <div className="text-sm">{mod.icon}</div>
                            <div className="text-[10px] font-bold text-white mt-0.5 truncate">
                              {mod.name}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Live Field Route Update */}
                    <div className="bg-[#125486]/60 border border-sky-400/30 rounded-xl p-2.5 text-[11px] space-y-1">
                      <div className="font-bold text-white flex items-center justify-between">
                        <span>Today's Client Route</span>
                        <span className="text-[9px] bg-sky-400/20 px-1.5 py-0.5 rounded text-sky-200">2.4 km away</span>
                      </div>
                      <p className="text-white/80 text-[10px] leading-tight">
                        Next: Paramount Engineering • AMC Inspection & Quotation Review
                      </p>
                    </div>

                    {/* Free Demo CTA inside Phone */}
                    <Link
                      href="#book-demo"
                      className="block text-center py-2 px-3 rounded-xl bg-white text-[#125486] font-bold text-xs shadow-md hover:bg-sky-50 transition-transform active:scale-95"
                    >
                      Request Free Demo →
                    </Link>

                    {/* In-App Bottom Navigation Bar */}
                    <div className="pt-2 border-t border-white/10 flex items-center justify-around text-[10px] text-white/70">
                      <span className="text-sky-300 font-bold">Home</span>
                      <span>Leads</span>
                      <span>Tasks</span>
                      <span>Visits</span>
                      <span>More</span>
                    </div>

                  </div>

                  {/* Phone Bottom Home Indicator */}
                  <div className="bg-slate-950 py-2 flex items-center justify-center shrink-0">
                    <div className="w-28 h-1 bg-slate-500 rounded-full" />
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 9: FREE DEMO CTA & FORM (#book-demo)               */}
      {/* ========================================================= */}
      <DemoBookingSection />

      {/* ========================================================= */}
      {/* SECTION 10: CASE STUDIES                                  */}
      {/* ========================================================= */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-block px-3.5 py-1 bg-[#125486]/10 text-[#125486] font-bold text-xs uppercase tracking-widest rounded-full">
              REAL BUSINESS WORKFLOWS
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              See What's Possible With Connected CRM
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Explore how RVM CRM's unified architecture addresses practical operational bottlenecks across varied commercial environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Case Study 1 */}
            <div className="bg-slate-50/70 rounded-2xl border border-gray-200 p-8 flex flex-col justify-between hover:border-[#125486]/50 hover:bg-white hover:shadow-xl transition-all duration-300 group">
              <div className="space-y-4">
                <span className="inline-block text-xs font-bold text-[#125486] bg-[#125486]/10 px-3 py-1 rounded-full">
                  Case Study 1
                </span>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#125486] transition-colors">
                  Manufacturing & Distribution
                </h3>
                
                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Challenge</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Customer enquiries, quotations, order updates, and stock-related activities are handled across disconnected processes.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#125486] mb-1">Solution Focus</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Explore how Contact, Lead, Quotation, Order, and Inventory Management connect the entire sales-to-dispatch workflow.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-200">
                <Link
                  href="/case-studies"
                  className="text-xs font-bold text-[#125486] inline-flex items-center gap-1.5 group-hover:underline"
                >
                  Read Case Study →
                </Link>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-slate-50/70 rounded-2xl border border-gray-200 p-8 flex flex-col justify-between hover:border-[#125486]/50 hover:bg-white hover:shadow-xl transition-all duration-300 group">
              <div className="space-y-4">
                <span className="inline-block text-xs font-bold text-[#125486] bg-[#125486]/10 px-3 py-1 rounded-full">
                  Case Study 2
                </span>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#125486] transition-colors">
                  Field Sales & Service
                </h3>
                
                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Challenge</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Field visits, employee activities, customer complaints, and service follow-ups need better coordination.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#125486] mb-1">Solution Focus</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Explore how Tasks, Attendance, Employee Movement, Complaints, and Installation Management support structured operations.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-200">
                <Link
                  href="/case-studies"
                  className="text-xs font-bold text-[#125486] inline-flex items-center gap-1.5 group-hover:underline"
                >
                  Read Case Study →
                </Link>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="bg-slate-50/70 rounded-2xl border border-gray-200 p-8 flex flex-col justify-between hover:border-[#125486]/50 hover:bg-white hover:shadow-xl transition-all duration-300 group">
              <div className="space-y-4">
                <span className="inline-block text-xs font-bold text-[#125486] bg-[#125486]/10 px-3 py-1 rounded-full">
                  Case Study 3
                </span>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#125486] transition-colors">
                  Customer Service & AMC
                </h3>
                
                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Challenge</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Maintenance contracts, service schedules, and complaint resolution require consistent tracking and accountability.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#125486] mb-1">Solution Focus</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Explore how AMC Management, Complaints & Ticket Management, Tasks, and Reports bring service activities together.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-200">
                <Link
                  href="/case-studies"
                  className="text-xs font-bold text-[#125486] inline-flex items-center gap-1.5 group-hover:underline"
                >
                  Read Case Study →
                </Link>
              </div>
            </div>

          </div>

          <p className="text-xs text-gray-400 text-center mt-8">
            Note: These represent conceptual case-study frameworks illustrating modular capabilities.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 11: FREQUENTLY ASKED QUESTIONS                    */}
      {/* ========================================================= */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-block px-3.5 py-1 bg-[#125486]/10 text-[#125486] font-bold text-xs uppercase tracking-widest rounded-full">
              GOT QUESTIONS?
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              Frequently Asked Questions About RVM CRM
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Find clear answers to common questions about RVM CRM's modules, deployment, mobile capabilities, and integrations.
            </p>
          </div>

          <HomeFAQ />

          {/* Sub-CTA under FAQ */}
          <div className="mt-16 text-center">
            <p className="text-base text-gray-600 mb-4">Have questions about your specific business configuration?</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact">
                <Button className="rounded-full px-8 font-bold bg-[#125486] hover:bg-[#0d3e63] text-white">
                  Contact Our Sales Team
                </Button>
              </Link>
              <a href={`tel:${siteConfig.contact.phones[0].replace(/[^0-9+]/g, "")}`}>
                <Button variant="outline" className="rounded-full px-8 font-bold border-gray-300">
                  <Phone className="w-4 h-4 mr-2" />
                  Call: {siteConfig.contact.phones[0]}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
