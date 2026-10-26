"use client"

import * as React from "react"
import Link from "next/link"
import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Sparkles, 
  ArrowRight, 
  Clock, 
  Calendar, 
  User, 
  Tag, 
  CheckCircle2, 
  Mail, 
  Search,
  BookOpen
} from "lucide-react"

const articles = [
  {
    title: "How Manufacturing & Distribution Companies Cut Quotation Turnaround from 48 Hours to 60 Minutes",
    slug: "manufacturing-quotation-turnaround",
    category: "Sales Velocity",
    readTime: "7 min read",
    date: "October 12, 2026",
    author: "RVM Solutions Engineering",
    excerpt:
      "When customers ask for a quotation, the first vendor to respond with an accurate, professional proposal closes the deal 60% of the time. Learn how connected CRM workflows eliminate manual discount approvals and inventory checks.",
    featured: true,
  },
  {
    title: "5 Signs Your Field Sales Team Has Outgrown WhatsApp and Excel Spreadsheets",
    slug: "signs-outgrown-whatsapp-and-excel",
    category: "Field Operations",
    readTime: "6 min read",
    date: "October 08, 2026",
    author: "Sales Operations Team",
    excerpt:
      "Customer contact numbers trapped in personal phones, lost follow-ups, and unverified client visits cost growing businesses millions every year. Discover the warning signs and transition roadmap.",
    featured: false,
  },
  {
    title: "The Ultimate Guide to GPS Field Attendance and Geofenced Check-In",
    slug: "guide-gps-field-attendance-geofencing",
    category: "Workforce Tech",
    readTime: "8 min read",
    date: "September 29, 2026",
    author: "Product Architecture",
    excerpt:
      "How to implement auditable, tamper-proof field attendance that respects employee privacy while eliminating buddy punching and exaggerated travel reimbursement claims.",
    featured: false,
  },
  {
    title: "Maximizing Recurring Revenue: Best Practices for AMC & Service Contract Management",
    slug: "amc-service-contract-retention-best-practices",
    category: "Service & AMC",
    readTime: "7 min read",
    date: "September 22, 2026",
    author: "Customer Success Desk",
    excerpt:
      "Annual Maintenance Contracts (AMC) are the highest-margin revenue stream for equipment and machinery manufacturers. Here is how automated 60-day renewal notices prevent customer churn.",
    featured: false,
  },
  {
    title: "How to Connect Inventory Dispatch with Sales Orders in Real Time",
    slug: "connect-inventory-dispatch-sales-orders",
    category: "Supply Chain",
    readTime: "6 min read",
    date: "September 15, 2026",
    author: "Supply Chain Consulting",
    excerpt:
      "Nothing damages customer trust faster than promising delivery on stock that is already committed elsewhere. Explore how real-time order reservations prevent fulfillment bottlenecks.",
    featured: false,
  },
  {
    title: "Mobile CRM Best Practices: Empowering Field Service Engineers On-Site",
    slug: "mobile-crm-empowering-field-engineers",
    category: "Mobile Mobility",
    readTime: "5 min read",
    date: "September 09, 2026",
    author: "Mobile Engineering Lead",
    excerpt:
      "From offline data caching in industrial basements to instant digital customer signatures and barcode scanning, discover how native mobile CRM apps transform field service delivery.",
    featured: false,
  },
  {
    title: "Top 7 Metrics Every Business Owner Must Track on Their Executive Dashboard",
    slug: "top-metrics-business-owners-executive-dashboard",
    category: "Leadership & BI",
    readTime: "9 min read",
    date: "August 28, 2026",
    author: "Executive Advisory",
    excerpt:
      "Ditch 30-page end-of-month spreadsheets. Discover the 7 real-time KPIs that give directors and CFOs instant visibility into pipeline velocity, cash conversion, and operational profitability.",
    featured: false,
  },
]

export default function BlogPage() {
  const [email, setEmail] = React.useState("")
  const [subscribed, setSubscribed] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [selectedCategory, setSelectedCategory] = React.useState("All")

  const categories = [
    "All",
    "Sales Velocity",
    "Field Operations",
    "Workforce Tech",
    "Service & AMC",
    "Supply Chain",
    "Mobile Mobility",
    "Leadership & BI",
  ]

  const filteredArticles = selectedCategory === "All" 
    ? articles 
    : articles.filter(a => a.category === selectedCategory)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          formType: "Blog Newsletter Subscription",
          message: `Subscriber requested monthly CRM best practice updates.`,
        }),
      })
    } catch (err) {
      console.error("Subscription error:", err)
    } finally {
      setLoading(false)
      setSubscribed(true)
    }
  }

  const featuredArticle = articles.find(a => a.featured) || articles[0]

  return (
    <div className="bg-white min-h-screen">
      
      {/* ========================================================= */}
      {/* SECTION 1: HERO & BLOG INSIGHTS BANNER                    */}
      {/* ========================================================= */}
      <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 lg:py-24 border-b border-gray-200">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#125486]/10 text-[#125486] text-xs font-bold uppercase tracking-widest">
              <BookOpen className="w-3.5 h-3.5" />
              RVM CRM KNOWLEDGE & ENGINEERING INSIGHTS
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-950 tracking-tight leading-[1.15]">
              Practical Ideas for <span className="text-[#125486]">Growing Businesses</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-normal max-w-3xl mx-auto">
              Field workforce guides, quotation optimization strategies, AMC retention best practices, and enterprise technology engineering insights from the RVM CRM team.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: FEATURED LEAD ARTICLE                          */}
      {/* ========================================================= */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          
          <div className="bg-gradient-to-br from-[#0d3455] via-[#125486] to-[#0a2740] rounded-3xl p-8 sm:p-14 text-white shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-400/30">
                  Featured Article
                </span>
                <span className="text-xs text-sky-200 font-semibold">{featuredArticle.category}</span>
                <span className="text-xs text-sky-300">&bull; {featuredArticle.readTime}</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                {featuredArticle.title}
              </h2>

              <p className="text-sm sm:text-base text-sky-100 leading-relaxed max-w-3xl">
                {featuredArticle.excerpt}
              </p>

              <div className="pt-2 flex items-center gap-6 text-xs text-sky-200">
                <span>By {featuredArticle.author}</span>
                <span>Published on {featuredArticle.date}</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <Link href="/request-demo">
                <Button className="h-13 px-8 bg-white text-[#125486] hover:bg-sky-50 font-bold text-sm rounded-xl shadow-lg transition-transform hover:scale-105">
                  See Quotation Engine Live →
                </Button>
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: CATEGORY FILTER TABS & ARTICLES GRID           */}
      {/* ========================================================= */}
      <section className="py-20 bg-slate-50 border-b border-gray-200">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24 space-y-12">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? "bg-[#125486] text-white shadow-sm"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, idx) => (
              <div 
                key={idx}
                className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:border-[#125486]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="font-bold text-[#125486] bg-[#125486]/10 px-2.5 py-0.5 rounded-full">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-gray-400" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#125486] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-100 mt-6 flex items-center justify-between text-xs text-gray-500">
                  <span>{article.date}</span>
                  <Link href="/request-demo" className="font-bold text-[#125486] hover:underline flex items-center gap-1">
                    Read More <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 4: NEWSLETTER SUBSCRIPTION CARD                   */}
      {/* ========================================================= */}
      <section className="py-20 bg-white">
        <div className="w-full max-w-4xl mx-auto px-6">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white text-center space-y-6 shadow-xl">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto text-sky-400">
              <Mail className="w-7 h-7" />
            </div>

            <div className="space-y-2 max-w-xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Get Monthly CRM & Field Operations Insights
              </h3>
              <p className="text-sm text-gray-300">
                Join over 5,000+ business owners, operations heads, and sales leaders. We send one actionable email per month. No spam.
              </p>
            </div>

            {subscribed ? (
              <div className="p-4 bg-emerald-500/20 text-emerald-300 rounded-xl border border-emerald-400/30 text-sm font-semibold max-w-md mx-auto">
                ✓ Thank you for subscribing! We will deliver our next monthly guide to {email}.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email address"
                  required
                  className="h-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-xl text-sm"
                />
                <Button 
                  type="submit"
                  disabled={loading}
                  className="h-12 px-6 bg-[#125486] hover:bg-[#1668a6] text-white font-bold text-sm rounded-xl shrink-0"
                >
                  {loading ? "Subscribing..." : "Subscribe Free"}
                </Button>
              </form>
            )}

            <p className="text-[11px] text-gray-400">
              Dispatched by RVM CRM. You can unsubscribe with one click at any time.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}
