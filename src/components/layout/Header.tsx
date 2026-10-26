"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, Zap, Building2, Grid, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { modules, features, industries, siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

const announcements = [
  "🚀 Empower your sales team with the #1 CRM Solution for Growing Businesses",
  "📈 Automate your workflows and boost daily productivity by up to 300%",
  "💼 Tailored industry-specific solutions for Manufacturing, Logistics, and more",
  "📱 Access your customer data anywhere with our powerful Mobile Application",
  "⭐ Trusted by thousands of businesses globally to drive revenue"
]

const NavLink = ({ href, children, isActive }: { href: string; children: React.ReactNode; isActive?: boolean }) => (
  <Link
    href={href}
    className={cn(
      "text-base font-bold transition-colors hover:text-primary relative h-full flex items-center gap-1",
      isActive ? "text-primary" : "text-gray-700"
    )}
  >
    {children}
  </Link>
)

const MegaMenu = ({ 
  title, 
  href,
  items, 
  isActive, 
  icon: Icon 
}: { 
  title: string; 
  href: string;
  items: { name: string; slug: string }[]; 
  isActive: boolean;
  icon: any;
}) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div
      className="relative flex items-center h-full"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        href={href}
        className={cn(
          "flex items-center gap-1.5 text-base font-bold transition-colors hover:text-primary h-full",
          isActive || isOpen ? "text-primary" : "text-gray-700"
        )}
      >
        {title}
        <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", isOpen ? "rotate-180 text-primary" : "text-gray-400")} />
      </Link>

      <div 
        className={cn(
          "absolute top-full left-1/2 -translate-x-1/2 w-[1300px] max-w-[95vw] bg-white border border-gray-200 shadow-2xl transition-all duration-300 origin-top overflow-hidden rounded-xl",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible h-0 border-0"
        )}
      >
        <div className="p-10">
          <div className="flex gap-8">
            <div className="w-[300px] bg-gray-50 rounded-2xl p-8 border border-gray-100 flex flex-col justify-between hidden xl:flex shrink-0">
              <div>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Explore {title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Discover how our comprehensive {title.toLowerCase()} can transform your business operations and drive unparalleled growth.
                </p>
              </div>
              <Link href="/request-demo">
                <Button className="w-full justify-between group h-12 text-[15px]" variant="default">
                  Demo Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            
            <div className="flex-1">
              <div className="grid grid-cols-3 gap-4">
                {items.map((item) => (
                  <Link
                    key={item.slug}
                    href={`${href}/${item.slug}`}
                    className="group p-4 rounded-xl border border-transparent hover:border-gray-200 hover:bg-gray-50 hover:shadow-sm transition-all flex items-start gap-4"
                  >
                    <div className="w-8 h-8 bg-gray-100 group-hover:bg-primary/10 rounded-lg flex items-center justify-center shrink-0 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-gray-400 group-hover:bg-primary transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 group-hover:text-primary transition-colors text-[15px]">{item.name}</h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Header() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  React.useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex flex-col bg-white">
      {/* Top Bar - 40% (48px) - Full Width */}
      <div className="bg-[#f8fafc] border-b border-gray-200 h-[48px] flex items-center overflow-hidden">
        <div className="w-full px-6 xl:px-12 flex justify-between items-center h-full relative">
          
          <div className="flex-1 overflow-hidden h-full flex items-center relative pr-4">
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#f8fafc] to-transparent z-10"></div>
            
            {/* 
              By setting each item to w-screen, they appear one by one sequentially
              as the marquee translates from 0 to -50% smoothly.
            */}
            <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused] items-center h-full">
              {[...announcements, ...announcements].map((text, i) => (
                <div key={i} className="flex items-center justify-center w-[100vw] shrink-0 h-full">
                  <span className="text-[14px] font-semibold text-gray-700 mr-4">{text}</span>
                  <Link href="/request-demo">
                    <span className="inline-flex items-center justify-center px-4 py-1.5 text-[11px] font-bold text-white bg-primary rounded-full hover:bg-primary-hover transition-colors shadow-sm cursor-pointer tracking-wide uppercase">
                      Click Here
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          
          {/* Social Icons - Right Side */}
          <div className="flex items-center gap-5 pl-12 pr-4 xl:pr-8 shrink-0 bg-[#f8fafc] z-20 shadow-[-20px_0_20px_-10px_#f8fafc]">
            <a href="https://wa.me/919310990051" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors">
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            </a>
            <a href={`mailto:${siteConfig.contact.emails[0]}`} className="text-gray-400 hover:text-red-500 transition-colors">
              <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            </a>
            <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
            </a>
            <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-600 transition-colors">
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav - 60% (96px) - Full Width */}
      <div className={cn(
        "bg-white transition-all duration-300 h-[96px]",
        isScrolled ? "shadow-md border-b border-gray-200" : "border-b border-gray-100"
      )}>
        <div className="w-full px-6 xl:px-12 flex items-center justify-between h-full">
          
          <div className="flex-1 flex items-center h-[95%] shrink-0">
            <Link href="/" className="h-full flex items-center">
              <img src="/rvm-crm-logo.png" alt="RVM CRM Logo" className="h-full w-auto object-contain transition-all duration-300 drop-shadow-sm" />
            </Link>
          </div>

          <nav className="hidden lg:flex flex-none items-center justify-center gap-10 h-full">
            <NavLink href="/" isActive={pathname === "/"}>Home</NavLink>
            <NavLink href="/about" isActive={pathname === "/about"}>About</NavLink>
            <MegaMenu 
              title="Modules" 
              href="/modules"
              items={modules} 
              isActive={pathname.startsWith("/modules")}
              icon={Grid}
            />
            <MegaMenu 
              title="Features" 
              href="/features"
              items={features} 
              isActive={pathname.startsWith("/features")} 
              icon={Zap}
            />
            <MegaMenu 
              title="Industries" 
              href="/industries"
              items={industries} 
              isActive={pathname.startsWith("/industries")} 
              icon={Building2}
            />
            <NavLink href="/contact" isActive={pathname === "/contact"}>Contact</NavLink>
          </nav>

          <div className="flex-1 hidden lg:flex items-center justify-end h-full shrink-0">
            <Link href="/request-demo">
              <Button size="lg" className="rounded-full font-bold text-base h-12 px-8 shadow-sm">
                Request Free Demo
              </Button>
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-gray-600 hover:text-primary transition-colors ml-auto"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[144px] bg-white z-40 overflow-y-auto pb-20">
          <div className="w-full px-6 py-6 flex flex-col gap-6">
            <Link href="/" className="text-xl font-semibold text-gray-900">Home</Link>
            <Link href="/about" className="text-xl font-semibold text-gray-900">About</Link>
            
            <div className="space-y-4">
              <Link href="/modules" className="text-xl font-semibold text-primary block">Modules</Link>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-4 border-l-2 border-gray-100">
                {modules.map(item => (
                  <Link key={item.slug} href={`/modules/${item.slug}`} className="text-gray-600 py-1">{item.name}</Link>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <Link href="/features" className="text-xl font-semibold text-primary block">Features</Link>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-4 border-l-2 border-gray-100">
                {features.map(item => (
                  <Link key={item.slug} href={`/features/${item.slug}`} className="text-gray-600 py-1">{item.name}</Link>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <Link href="/industries" className="text-xl font-semibold text-primary block">Industries</Link>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-4 border-l-2 border-gray-100">
                {industries.map(item => (
                  <Link key={item.slug} href={`/industries/${item.slug}`} className="text-gray-600 py-1">{item.name}</Link>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <span className="text-xl font-semibold text-primary block">Resources & Help</span>
              <div className="grid grid-cols-2 gap-3 pl-4 border-l-2 border-gray-100 text-sm">
                <Link href="/why-rvm-crm" className="text-gray-600 py-1">Why RVM CRM</Link>
                <Link href="/case-studies" className="text-gray-600 py-1">Case Studies</Link>
                <Link href="/integrations" className="text-gray-600 py-1">Integrations</Link>
                <Link href="/blog" className="text-gray-600 py-1">Blog</Link>
                <Link href="/faq" className="text-gray-600 py-1">FAQs</Link>
                <Link href="/support" className="text-gray-600 py-1">Support Desk</Link>
              </div>
            </div>

            <Link href="/contact" className="text-xl font-semibold text-gray-900">Contact</Link>
            
            <div className="pt-6 mt-4 border-t border-gray-100">
              <Link href="/request-demo">
                <Button className="w-full h-14 text-lg font-bold rounded-xl" size="lg">Request Free Demo</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
