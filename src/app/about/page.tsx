import type { Metadata } from "next"
import Link from "next/link"
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Workflow, 
  Clock, 
  BarChart3, 
  Target, 
  Compass, 
  Users, 
  Boxes, 
  Smartphone, 
  LineChart, 
  Factory, 
  Truck, 
  Layers, 
  Wrench, 
  HeartHandshake, 
  Lightbulb, 
  ShieldCheck, 
  TrendingUp, 
  Calendar, 
  Rocket, 
  Globe, 
  Phone,
  Building2,
  ChevronRight,
  Search,
  Cpu,
  Code2,
  ArrowDown,
  Link2
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: "About RVM CRM | Our Journey, Vision & Mission",
  description:
    "Learn about RVM CRM, our journey, mission, vision, and commitment to connected business management through CRM and operational software.",
  keywords: [
    "About RVM CRM",
    "RVM CRM software",
    "CRM software company",
    "business management software",
    "connected CRM platform"
  ],
  alternates: {
    canonical: "https://www.rvmcrm.com/about/",
  },
  openGraph: {
    title: "About RVM CRM | Our Journey, Vision & Mission",
    description:
      "Learn about RVM CRM, our journey, mission, vision, and commitment to connected business management through CRM and operational software.",
    url: "https://www.rvmcrm.com/about/",
    siteName: "RVM CRM",
    locale: "en_US",
    type: "website",
  },
}

const timelineMilestones = [
  {
    year: "2020",
    phase: "THE BEGINNING",
    title: "The First Spark of an Idea",
    icon: Lightbulb,
    description:
      "Every journey starts with a question: how can technology make everyday business activities easier? This milestone marks the original inspiration, early observations, and operational insights that shaped our vision for a more organized, connected way of managing enterprise operations.",
    badgeColor: "bg-blue-50 text-[#125486] border-blue-200",
  },
  {
    year: "2021",
    phase: "DISCOVERY",
    title: "Understanding Real Business Challenges",
    icon: Search,
    description:
      "The focus turned toward deep discovery: examining how growing businesses actually manage customers, sales activities, employee responsibilities, and service operations—identifying critical opportunities to bring these siloed activities into structured digital workflows.",
    badgeColor: "bg-sky-50 text-sky-700 border-sky-200",
  },
  {
    year: "2022",
    phase: "PLANNING",
    title: "Shaping the Product Vision",
    icon: Target,
    description:
      "The broader concept took concrete shape: architecting a platform that goes far beyond simple contact storage to seamlessly support end-to-end sales pipelines, cross-departmental team coordination, after-sales service, and essential operational tasks.",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
  },
  {
    year: "2023",
    phase: "ARCHITECTURE",
    title: "Designing Connected Workflows",
    icon: Cpu,
    description:
      "Attention shifted toward engineering modular relationships: defining data relationships between diverse business activities, engineering synchronized modules, and planning how different teams—from sales to inventory and field units—can collaborate in a shared single-source environment.",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    year: "2024",
    phase: "DEVELOPMENT",
    title: "Turning Ideas Into Product Capabilities",
    icon: Code2,
    description:
      "The active product-building phase translated core operational requirements into functional enterprise modules, automated workflows, and intuitive interfaces designed to address everyday business demands without operational friction.",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
  },
  {
    year: "2025",
    phase: "FOUNDATION",
    title: "Building the Business Foundation",
    icon: Building2,
    description:
      "Establishing the formal corporate and technological infrastructure required for developing, delivering, and supporting scalable enterprise technology products, customer success operations, and security standards.",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
  },
  {
    year: "2026",
    phase: "PRODUCT READINESS",
    title: "Preparing for the Next Stage",
    icon: Rocket,
    description:
      "Strengthening the platform, refining individual module user experiences, reviewing performance across diverse industry scenarios, fortifying cloud infrastructure, and advancing market deployment for growing enterprises.",
    badgeColor: "bg-[#125486]/10 text-[#125486] border-[#125486]/30",
  },
  {
    year: "2027",
    phase: "THE ROAD AHEAD",
    title: "Expanding the Vision",
    icon: Globe,
    description:
      "Expanding adoption, enhancing customer success architectures, deepening native ecosystem integrations, and evolving RVM CRM into a comprehensive, multi-region business management ecosystem tailored to modern business transformation.",
    badgeColor: "bg-teal-50 text-teal-700 border-teal-200",
    isFuture: true,
  },
]

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-900 selection:bg-[#125486] selection:text-white">
      {/* ========================================================= */}
      {/* SECTION 1 — ABOUT RVM CRM (HERO)                          */}
      {/* ========================================================= */}
      <section className="relative bg-gradient-to-b from-[#F7F9FB] via-white to-white pt-16 pb-20 lg:pt-24 lg:pb-32 border-b border-gray-100 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#125486]/10 text-[#125486] text-xs font-bold tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                OUR STORY · OUR PURPOSE · OUR FUTURE
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-950 tracking-tight leading-[1.12]">
                Building Smarter Businesses Through{" "}
                <span className="text-[#125486]">Connected Technology</span>
              </h1>

              <div className="space-y-4 text-base sm:text-lg text-gray-600 leading-relaxed font-normal max-w-2xl">
                <p>
                  At <strong className="font-semibold text-gray-900">RVM CRM</strong>, we believe businesses perform better when their people, processes, and information work together.
                </p>
                <p>
                  Modern businesses manage countless activities every day—from finding new customers and closing sales to coordinating teams, tracking inventory, delivering services, and maintaining customer relationships. When these activities operate in disconnected systems, opportunities are missed, information becomes difficult to access, and teams lose valuable time.
                </p>
                <p className="font-medium text-gray-800">
                  RVM CRM is built around a simple idea: bring essential business activities together in one connected platform.
                </p>
                <p>
                  Our platform brings customer relationship management, sales operations, service management, workforce activities, inventory workflows, and business reporting into a centralized environment. We aim to help businesses create more organized processes, improve operational visibility, and make better-informed decisions.
                </p>
              </div>

              {/* Tagline Callout */}
              <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-100 text-sm md:text-base font-bold text-[#125486]">
                RVM CRM — More Than a CRM. A Connected Business Management Platform.
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link href="/modules">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto h-14 px-8 text-base font-bold rounded-full bg-[#125486] hover:bg-[#0d3e63] text-white shadow-lg hover:shadow-[#125486]/25 transition-all"
                  >
                    Explore RVM CRM
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto h-14 px-8 text-base font-bold rounded-full border-gray-300 hover:border-[#125486] hover:text-[#125486] bg-white transition-all"
                  >
                    Talk to Our Team
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Visual Tech Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                <div className="absolute -inset-2 bg-gradient-to-tr from-[#125486]/30 to-sky-400/20 rounded-3xl blur-2xl opacity-40" />

                <div className="relative bg-white rounded-3xl border border-gray-200/90 shadow-2xl p-8 space-y-6 text-left">
                  <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <img
                        src="/rvm-crm-logo.png"
                        alt="RVM CRM Logo"
                        className="h-10 w-auto object-contain"
                      />
                      <div>
                        <div className="text-sm font-bold text-gray-900">Connected Management Ecosystem</div>
                        <div className="text-xs text-gray-500">Enterprise Technology Blueprint</div>
                      </div>
                    </div>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-slate-50 border border-gray-100">
                      <div className="text-xs font-bold text-[#125486] uppercase tracking-wider mb-1">Centralized Architecture</div>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Unifying Customer Records, Sales Pipeline, Inventory Control, and Service Operations under one source of truth.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-gray-100">
                      <div className="text-xs font-bold text-[#125486] uppercase tracking-wider mb-1">Human-Centered Workflows</div>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Engineered around actual operational habits of sales representatives, field technicians, and executives.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-gray-100">
                      <div className="text-xs font-bold text-[#125486] uppercase tracking-wider mb-1">Future-Ready Agility</div>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Modular design that expands with your business growth without imposing software friction or unnecessary complexity.
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 text-center border-t border-gray-100">
                    <p className="text-xs font-semibold text-gray-500">
                      Empowering teams across India & international enterprise hubs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2 — THE PROBLEM WE WANT TO SOLVE                  */}
      {/* ========================================================= */}
      <section className="py-24 bg-[#F7F9FB] border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-block px-3.5 py-1 bg-[#125486]/10 text-[#125486] font-bold text-xs uppercase tracking-widest rounded-full">
              WHY WE EXIST
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              Business Growth Shouldn't Mean More Complexity
            </h2>
            <div className="space-y-3 text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              <p>
                As businesses grow, their operations become more demanding. Customer information sits in different places. Sales follow-ups get delayed. Field teams work across locations. Service requests require coordination. Inventory and expenses need attention. Management needs reliable information to understand what is happening across the organization.
              </p>
              <p>
                These challenges are not always caused by a lack of effort. Often, they arise because business processes and tools are not properly connected.
              </p>
              <p className="font-semibold text-gray-900">
                We believe technology should make business management simpler—not add another layer of complexity.
              </p>
            </div>
          </div>

          {/* 3 Problem Resolution Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Problem 1 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:border-[#125486] hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#125486] flex items-center justify-center font-bold mb-6">
                  <Workflow className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Disconnected Processes</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Connect customer management, sales, service, and operations through coordinated workflows that eliminate operational silos and communication gaps.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-bold text-[#125486]">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Unified Single Platform
              </div>
            </div>

            {/* Problem 2 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:border-[#125486] hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold mb-6">
                  <Clock className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Missed Activities & Follow-Ups</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Help teams organize tasks, priorities, responsibilities, and important deadlines so critical customer opportunities and service commitments never slip through the cracks.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-bold text-[#125486]">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Automated Reminders & Tasks
              </div>
            </div>

            {/* Problem 3 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:border-[#125486] hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold mb-6">
                  <BarChart3 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Limited Business Visibility</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Make relevant information, activity logs, and actionable business reports easily accessible to teams and decision-makers in real time.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-bold text-[#125486]">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Real-Time Analytics & Reports
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3 — OUR JOURNEY: 2020–2027                        */}
      {/* ========================================================= */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="inline-block px-3.5 py-1 bg-[#125486]/10 text-[#125486] font-bold text-xs uppercase tracking-widest rounded-full">
              SEVEN YEARS OF LEARNING, BUILDING & EVOLVING
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              From an Ambitious Vision to a Connected Business Platform
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Every meaningful product begins with an idea. The journey behind RVM CRM represents a long-term ambition to make business technology more practical, connected, and useful for growing organizations.
            </p>
          </div>

          {/* Vertical Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Center line (desktop) / Left line (mobile) */}
            <div className="absolute top-4 bottom-4 left-6 md:left-1/2 -ml-px w-0.5 bg-gray-200" />

            <div className="space-y-12">
              {timelineMilestones.map((item, index) => {
                const IconComponent = item.icon
                const isEven = index % 2 === 0
                return (
                  <div
                    key={item.year}
                    className={`relative flex flex-col md:flex-row items-start ${
                      isEven ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Timeline Node Icon */}
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-[#125486] flex items-center justify-center z-10 shadow-md">
                      <IconComponent className="w-5 h-5 text-[#125486]" />
                    </div>

                    {/* Content Card */}
                    <div className="ml-16 md:ml-0 md:w-1/2 md:px-8 w-full text-left">
                      <div className="bg-[#F7F9FB] p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm hover:border-[#125486]/40 hover:bg-white hover:shadow-md transition-all duration-300">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                          <span className="text-2xl font-black text-[#125486]">
                            {item.year}
                          </span>
                          <span className={`text-[11px] font-extrabold px-3 py-1 rounded-full border ${item.badgeColor} uppercase tracking-wider`}>
                            {item.phase}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Timeline Note Callout */}
          <div className="mt-16 text-center max-w-2xl mx-auto p-4 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-500">
            Note: Milestones reflect our product development narrative and foundational milestones, with 2027 representing our forward-looking strategic roadmap.
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* OUR PARENT COMPANY — POWERED BY RVM INFOTECH PVT LTD     */}
      {/* ========================================================= */}
      <section className="py-20 lg:py-28 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-7xl space-y-12">
          
          {/* Top Two-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="flex items-center gap-3">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#125486]">
                  OUR PARENT COMPANY
                </span>
                <span className="w-10 h-0.5 bg-[#125486] inline-block rounded-full" />
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 tracking-tight leading-[1.15]">
                Powered by <br />
                <span className="text-[#125486]">RVM Infotech Private Limited</span>
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
                <p>
                  RVM CRM is a business software product powered by RVM Infotech Private Limited, a technology company focused on delivering software solutions and digital innovation to businesses.
                </p>
                <p>
                  RVM Infotech Private Limited provides the corporate foundation behind RVM CRM, supporting its product development, technology vision, and long-term growth. With a focus on simplifying business operations through technology, we aim to help businesses manage customer relationships, streamline workflows, and improve operational efficiency through connected software solutions.
                </p>
              </div>

              {/* 4 Info Items */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-gray-100">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#125486] flex items-center justify-center shrink-0 mt-0.5">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">PARENT COMPANY</div>
                    <div className="text-xs sm:text-sm font-bold text-gray-900 leading-tight mt-0.5">RVM Infotech Private Limited</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#125486] flex items-center justify-center shrink-0 mt-0.5">
                    <Boxes className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">PRODUCT BRAND</div>
                    <div className="text-xs sm:text-sm font-bold text-gray-900 leading-tight mt-0.5">RVM CRM</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#125486] flex items-center justify-center shrink-0 mt-0.5">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">WEBSITE</div>
                    <a href="https://www.rvminfotech.com" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm font-bold text-[#125486] hover:underline leading-tight block mt-0.5">
                      www.rvminfotech.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#125486] flex items-center justify-center shrink-0 mt-0.5">
                    <Link2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">PRODUCT WEBSITE</div>
                    <a href="https://www.rvmcrm.com" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm font-bold text-[#125486] hover:underline leading-tight block mt-0.5">
                      www.rvmcrm.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/modules">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto h-13 px-8 text-sm font-bold rounded-xl bg-[#125486] hover:bg-[#0d3e63] text-white shadow-md hover:shadow-lg transition-all flex items-center gap-2"
                  >
                    Explore RVM CRM <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <a href="https://www.rvminfotech.com" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto h-13 px-8 text-sm font-bold rounded-xl border-gray-300 hover:border-[#125486] hover:text-[#125486] bg-white transition-all flex items-center gap-2"
                  >
                    Visit RVM Infotech <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            </div>

            {/* Right Card — Relationship Diagram */}
            <div className="lg:col-span-5">
              <div className="bg-[#f0f6fa] rounded-3xl p-6 sm:p-8 border border-[#dce9f2] flex flex-col items-center justify-center shadow-sm">
                
                {/* Top Card: RVM Infotech */}
                <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-gray-100/80 w-full flex flex-col items-center justify-center">
                  <img
                    src="/rvm-infotech-logo.png"
                    alt="RVM Infotech Private Limited — Where Tech Meets Excellence"
                    className="h-12 sm:h-14 w-auto object-contain mx-auto"
                  />
                  <div className="text-[10px] font-bold text-gray-400 tracking-wider uppercase mt-2">
                    Corporate Entity · Technology & Solutions
                  </div>
                </div>

                {/* Connector Arrow */}
                <div className="flex flex-col items-center my-4 select-none">
                  <div className="w-8 h-8 rounded-full bg-[#125486] text-white flex items-center justify-center shadow-md">
                    <ArrowDown className="w-4 h-4" />
                  </div>
                  <div className="text-[10px] font-black tracking-widest text-[#125486] uppercase mt-1">
                    POWERS
                  </div>
                  <ArrowDown className="w-3.5 h-3.5 text-[#125486] -mt-0.5" />
                </div>

                {/* Bottom Card: RVM CRM */}
                <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-gray-100/80 w-full flex flex-col items-center justify-center text-center">
                  <img
                    src="/rvm-crm-logo.png"
                    alt="Official RVM CRM Logo"
                    className="h-16 sm:h-20 w-auto object-contain mx-auto"
                  />
                  <div className="text-xs font-bold text-[#125486] mt-3">
                    Connected CRM & Business Management Software
                  </div>
                  <div className="w-full h-px bg-gray-100 my-3" />
                  <div className="text-[11px] text-gray-500 font-medium">
                    A product by RVM Infotech Private Limited
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Bottom Banner: Together for a Smarter Future */}
          <div className="bg-white rounded-3xl border border-[#dce9f2] p-6 sm:p-8 lg:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Block */}
            <div className="lg:col-span-6 flex items-start gap-5 text-left">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#125486] flex items-center justify-center shrink-0 border border-blue-100">
                <HeartHandshake className="w-7 h-7" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-xl font-bold text-gray-950">
                  Together for a Smarter Future
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-normal">
                  RVM Infotech Private Limited and RVM CRM work together to bring technology-driven solutions to businesses, helping them grow, operate efficiently, and stay ahead in a changing world.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden lg:block lg:col-span-1 h-16 w-px bg-gray-200 mx-auto" />

            {/* Right 4 Pillars */}
            <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="flex flex-col items-center space-y-2 p-2">
                <div className="w-10 h-10 rounded-full bg-slate-50 text-[#125486] flex items-center justify-center border border-gray-100">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-gray-800 leading-tight">
                  Innovation<br />Driven
                </span>
              </div>

              <div className="flex flex-col items-center space-y-2 p-2">
                <div className="w-10 h-10 rounded-full bg-slate-50 text-[#125486] flex items-center justify-center border border-gray-100">
                  <Target className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-gray-800 leading-tight">
                  Customer<br />Focused
                </span>
              </div>

              <div className="flex flex-col items-center space-y-2 p-2">
                <div className="w-10 h-10 rounded-full bg-slate-50 text-[#125486] flex items-center justify-center border border-gray-100">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-gray-800 leading-tight">
                  Reliable<br />Partnership
                </span>
              </div>

              <div className="flex flex-col items-center space-y-2 p-2">
                <div className="w-10 h-10 rounded-full bg-slate-50 text-[#125486] flex items-center justify-center border border-gray-100">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-gray-800 leading-tight">
                  Long-Term<br />Growth
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 4 — OUR MISSION & VISION                          */}
      {/* ========================================================= */}
      <section className="py-24 bg-[#F7F9FB] border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-block px-3.5 py-1 bg-[#125486]/10 text-[#125486] font-bold text-xs uppercase tracking-widest rounded-full">
              GUIDING PRINCIPLES
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              Our Mission & Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Mission Card */}
            <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-200 shadow-md hover:border-[#125486] transition-all flex flex-col justify-between text-left relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-36 h-36 bg-blue-50 rounded-bl-full -z-0 group-hover:scale-110 transition-transform" />
              <div className="relative z-10 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#125486]/10 text-[#125486] flex items-center justify-center font-bold">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-950">Our Mission</h3>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  To simplify business management through practical, connected, and scalable technology that helps organizations manage customer relationships, streamline workflows, empower teams, and make better-informed decisions.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-gray-100 relative z-10 flex items-center gap-2 text-xs font-bold text-[#125486]">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Practical • Scalable • Connected
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-[#125486] text-white p-8 md:p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all flex flex-col justify-between text-left relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-36 h-36 bg-white/10 rounded-bl-full -z-0 group-hover:scale-110 transition-transform" />
              <div className="relative z-10 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-white/10 text-white flex items-center justify-center font-bold backdrop-blur-sm">
                  <Compass className="w-7 h-7" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Our Vision</h3>
                <p className="text-base md:text-lg text-white/90 leading-relaxed">
                  To build a connected business software ecosystem that brings essential business functions together, reduces operational complexity, and supports organizations as they grow, adapt, and embrace digital transformation.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/20 relative z-10 flex items-center gap-2 text-xs font-bold text-white/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Unified Business Ecosystem
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 5 — WHAT MAKES RVM CRM DIFFERENT?                 */}
      {/* ========================================================= */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-block px-3.5 py-1 bg-[#125486]/10 text-[#125486] font-bold text-xs uppercase tracking-widest rounded-full">
              OUR PRODUCT PHILOSOPHY
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              Designed Around the Way Businesses Actually Work
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              RVM CRM is built around the belief that business software should connect activities, not simply record them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            
            {/* Pillar 1 */}
            <div className="bg-[#F7F9FB] p-6 rounded-2xl border border-gray-200 hover:border-[#125486] hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#125486]/10 text-[#125486] flex items-center justify-center font-bold mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Customer-Centric Management</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Organize customer information, enquiries, follow-ups, and relationship history in a centralized environment.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-[#F7F9FB] p-6 rounded-2xl border border-gray-200 hover:border-[#125486] hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#125486]/10 text-[#125486] flex items-center justify-center font-bold mb-4">
                  <Workflow className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Connected Workflows</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Link related business activities so teams can coordinate responsibilities across sales, operations, and service.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-[#F7F9FB] p-6 rounded-2xl border border-gray-200 hover:border-[#125486] hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#125486]/10 text-[#125486] flex items-center justify-center font-bold mb-4">
                  <Boxes className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Modular Flexibility</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Support different business needs through focused modules, with the ability to evolve the platform as requirements change.
                </p>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="bg-[#F7F9FB] p-6 rounded-2xl border border-gray-200 hover:border-[#125486] hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#125486]/10 text-[#125486] flex items-center justify-center font-bold mb-4">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Support for Modern Teams</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Make relevant information and business activities accessible through supported desktop and mobile experiences.
                </p>
              </div>
            </div>

            {/* Pillar 5 */}
            <div className="bg-[#F7F9FB] p-6 rounded-2xl border border-gray-200 hover:border-[#125486] hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#125486]/10 text-[#125486] flex items-center justify-center font-bold mb-4">
                  <LineChart className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Visibility for Better Decisions</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Help businesses use structured records, reports, and dashboards to understand activities and make informed decisions.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 6 — WHO WE SERVE                                  */}
      {/* ========================================================= */}
      <section className="py-24 bg-[#F7F9FB] border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-block px-3.5 py-1 bg-[#125486]/10 text-[#125486] font-bold text-xs uppercase tracking-widest rounded-full">
              BUILT FOR BUSINESS DIVERSITY
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              Supporting Different Industries, One Connected Platform
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Businesses may operate in different markets, but many face similar challenges: managing customer relationships, tracking sales opportunities, coordinating employees, delivering services, and maintaining visibility across daily operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                title: "Manufacturing & Engineering",
                desc: "Customer coordination, quotations, orders, inventory, and service.",
                icon: Factory,
                slug: "manufacturing"
              },
              {
                title: "Distribution & Wholesale",
                desc: "Customer accounts, field sales, order coordination, and stock workflows.",
                icon: Truck,
                slug: "distribution-and-wholesale"
              },
              {
                title: "Garments & Textiles",
                desc: "Buyer relationships, sales follow-ups, and order activities.",
                icon: Layers,
                slug: "garments-and-textiles"
              },
              {
                title: "Service-Based Businesses",
                desc: "Complaints, installations, maintenance, and customer follow-ups.",
                icon: Wrench,
                slug: "service-based-businesses"
              },
            ].map((ind, i) => {
              const IconComponent = ind.icon
              return (
                <div key={i} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:border-[#125486] hover:shadow-md transition-all flex flex-col justify-between text-left">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#125486] flex items-center justify-center font-bold mb-4">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{ind.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{ind.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Wider Target Industries Callout */}
          <div className="bg-white p-8 rounded-3xl border border-gray-200 max-w-5xl mx-auto text-center space-y-4">
            <p className="text-sm text-gray-600 leading-relaxed">
              Our wider target industries also include automotive, FMCG, pharmaceuticals, electrical and electronics, construction, real estate, hospitality, logistics, and other organizations whose workflows align with the platform.
            </p>
            <p className="text-sm font-bold text-[#125486]">
              Our principle is simple: understand the business, identify the right workflows, and use technology to support them.
            </p>
            <div className="pt-2">
              <Link href="/industries">
                <Button variant="outline" className="rounded-full px-8 font-bold border-gray-300 hover:border-[#125486] hover:text-[#125486]">
                  Explore Industries →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 7 — OUR CORE VALUES                               */}
      {/* ========================================================= */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-block px-3.5 py-1 bg-[#125486]/10 text-[#125486] font-bold text-xs uppercase tracking-widest rounded-full">
              THE PRINCIPLES BEHIND OUR WORK
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              Technology With Purpose. Progress With Responsibility.
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Our culture and product decisions are guided by core values that put real business outcomes and transparent relationships at the center of everything we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {[
              {
                title: "Customer First",
                desc: "Understand business needs before proposing technology. The goal is to solve meaningful problems and create lasting value.",
                icon: HeartHandshake,
              },
              {
                title: "Continuous Innovation",
                desc: "Keep learning, improving, and exploring better ways to make business processes more useful and efficient.",
                icon: Lightbulb,
              },
              {
                title: "Trust & Responsibility",
                desc: "Treat business information, customer relationships, and commitments with care, and build confidence through transparent practices.",
                icon: ShieldCheck,
              },
              {
                title: "Simplicity & Usability",
                desc: "Strive to make complex workflows easier to understand and everyday business activities more manageable.",
                icon: Sparkles,
              },
              {
                title: "Growth Through Progress",
                desc: "Build with a long-term mindset, learn from real requirements, and improve the platform as business needs evolve.",
                icon: TrendingUp,
              },
            ].map((val, i) => {
              const IconComp = val.icon
              return (
                <div key={i} className="bg-[#F7F9FB] p-6 rounded-2xl border border-gray-200 hover:border-[#125486]/50 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between text-left">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#125486]/10 text-[#125486] flex items-center justify-center font-bold mb-4">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{val.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 8 — THE ROAD AHEAD: 2027 AND BEYOND               */}
      {/* ========================================================= */}
      <section className="py-24 bg-[#F7F9FB] border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-gray-200 p-8 sm:p-14 shadow-lg text-left space-y-6">
            <span className="inline-block px-3.5 py-1 bg-[#125486]/10 text-[#125486] font-bold text-xs uppercase tracking-widest rounded-full">
              LOOKING FORWARD
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Our Journey Is Just Getting Started
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
              <p>
                The future of business software is not only about adding more features. It is about making systems work better together, creating more useful experiences for employees, and helping businesses respond to change with confidence.
              </p>
              <p>
                As RVM CRM evolves, our direction is to strengthen core CRM capabilities, refine connected business workflows, expand supported integrations, improve mobile experiences, and explore opportunities to serve more industries and markets.
              </p>
              <p>
                Our long-term ambition is to grow beyond individual business processes toward a more connected software ecosystem—one that can adapt to different organizational needs without losing sight of usability, reliability, and customer value.
              </p>
              <p className="font-semibold text-gray-900">
                2027 and beyond is about turning that ambition into meaningful progress, one improvement and one customer need at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 9 — LET'S BUILD BETTER WORKFLOWS TOGETHER (CTA)   */}
      {/* ========================================================= */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-[#0d3455] to-[#125486] text-white">
        <div className="container mx-auto px-4 max-w-5xl text-center space-y-6">
          <span className="inline-block px-3.5 py-1 bg-white/10 text-white font-bold text-xs uppercase tracking-widest rounded-full backdrop-blur-sm">
            YOUR BUSINESS. YOUR NEXT CHAPTER.
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Discover What RVM CRM Can Do for Your Business
          </h2>

          <p className="text-base sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Whether you're looking to organize your sales pipeline, improve service coordination, manage field activities, or connect essential business operations, start by exploring how RVM CRM fits your requirements.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link href="/request-demo">
              <Button
                size="lg"
                className="w-full sm:w-auto h-14 px-10 text-base font-bold rounded-full bg-white text-[#125486] hover:bg-gray-100 shadow-xl transition-all"
              >
                Request Free Demo
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto h-14 px-10 text-base font-bold rounded-full border-white/30 text-white hover:bg-white/10 bg-transparent transition-all"
              >
                Contact Us
              </Button>
            </Link>
          </div>

          <div className="pt-8 flex flex-wrap justify-center items-center gap-6 text-xs text-white/70">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Tailored 20-minute product tour
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Modular workflow guidance
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> No commitments or credit card required
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}
