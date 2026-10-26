import Link from "next/link"
import { siteConfig, modules, features, industries, locations } from "@/config/site"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"

export function Footer() {
  return (
    <footer id="footer" className="relative bg-gradient-to-b from-[#0a192f] via-[#07152b] to-[#040d1a] text-gray-300 pt-20 pb-12 border-t border-[#162e4e] overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#125486]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container with generous horizontal padding (gap from left & right corners) */}
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24 relative z-10">
        
        {/* ========================================================= */}
        {/* TOP HALF — 4 KEY COLUMNS                                   */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-14 mb-16">
          
          {/* Column 1 — Brand, Logo & Corporate Identity (span 4) */}
          <div className="lg:col-span-4 xl:col-span-4 space-y-6 pr-0 lg:pr-4">
            <Link href="/" className="inline-block group">
              <img 
                src="/footer-logo.png" 
                alt="RVM CRM Logo" 
                className="h-20 sm:h-24 w-auto object-contain transition-all duration-300 group-hover:scale-105 drop-shadow-[0_4px_16px_rgba(18,84,134,0.35)]" 
              />
            </Link>

            <p className="text-gray-300/90 text-[15px] sm:text-base leading-relaxed">
              {siteConfig.description} We empower modern businesses with intelligent workflows that connect sales, field operations, service management, and financial reporting.
            </p>

            {/* Corporate Product Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#0f2744]/80 border border-[#1c3e66] text-xs font-semibold text-sky-200 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>A Product by <strong className="text-white font-bold">RVM Infotech Private Limited</strong></span>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3 pt-2">
              <div className="w-9 h-9 rounded-lg bg-[#112a4a] border border-[#1c3e66] flex items-center justify-center text-sky-400 shrink-0 mt-0.5">
                <MapPin className="w-4 h-4" />
              </div>
              <p className="text-gray-400 text-sm sm:text-[15px] leading-relaxed">
                {siteConfig.contact.address}
              </p>
            </div>
          </div>
          
          {/* Column 2 — Quick Links (span 2) */}
          <div className="lg:col-span-2 xl:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-4.5 rounded-full bg-sky-400" />
              <h3 className="text-white font-bold text-lg tracking-wide">Quick Links</h3>
            </div>
            <ul className="space-y-3.5">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Modules', path: '/modules' },
                { name: 'Features', path: '/features' },
                { name: 'Industries', path: '/industries' },
                { name: 'Contact', path: '/contact' },
                { name: 'Support', path: '/support' }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.path} 
                    className="text-gray-300 hover:text-white transition-all duration-200 text-[15px] flex items-center gap-2 group py-0.5"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-sky-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 shrink-0" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Resources & Trust (span 2) */}
          <div className="lg:col-span-2 xl:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-4.5 rounded-full bg-sky-400" />
              <h3 className="text-white font-bold text-lg tracking-wide">Resources</h3>
            </div>
            <ul className="space-y-3.5">
              {[
                { name: 'Why RVM CRM', path: '/why-rvm-crm' },
                { name: 'Case Studies', path: '/case-studies' },
                { name: 'Blog', path: '/blog' },
                { name: 'FAQs', path: '/faq' },
                { name: 'Integrations', path: '/integrations' },
                { name: 'Terms of Service', path: '/legal/terms' },
                { name: 'Privacy Policy', path: '/legal/privacy' }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.path} 
                    className="text-gray-300 hover:text-white transition-all duration-200 text-[15px] flex items-center gap-2 group py-0.5"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-sky-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 shrink-0" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Book Demo & Contact Information (span 4) */}
          <div className="lg:col-span-4 xl:col-span-4 space-y-6">
            
            {/* High-Impact Book Demo CTA Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#125486]/40 via-[#0e3b61]/30 to-[#10243e]/80 border border-[#1e4a77] shadow-xl space-y-3.5 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md bg-sky-500/20 text-sky-300 font-bold text-[11px] uppercase tracking-wider border border-sky-400/20">
                  Live 1-on-1 Walkthrough
                </span>
                <span className="text-xs text-gray-400 font-medium">Free 20 Mins</span>
              </div>
              <h4 className="text-white font-bold text-base leading-snug">
                Ready to transform your business operations?
              </h4>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Get a custom demonstration tailored to your exact industry and operational requirements.
              </p>
              <Link href="/request-demo" className="block pt-1">
                <Button className="w-full text-sm font-bold h-11 bg-gradient-to-r from-[#125486] to-[#1c6fae] hover:from-[#0f446d] hover:to-[#175b8e] text-white rounded-xl shadow-lg border border-sky-300/30 transition-all hover:scale-[1.02]">
                  Book Free Demo Now →
                </Button>
              </Link>
            </div>
            
            {/* Contact details */}
            <div className="space-y-4 pt-1">
              <div className="flex items-start gap-3.5 group">
                <div className="w-10 h-10 rounded-xl bg-[#112a4a] border border-[#1e3e66] flex items-center justify-center text-sky-400 group-hover:border-sky-400/50 group-hover:bg-sky-400/10 transition-colors shrink-0">
                  <Mail className="w-4.5 h-4.5" />
                </div>
                <div className="flex flex-col text-sm">
                  <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Email Us</span>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 mt-0.5">
                    {siteConfig.contact.emails.map((email, i) => (
                      <a key={i} href={`mailto:${email}`} className="text-gray-300 hover:text-white font-medium transition-colors">
                        {email}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 group">
                <div className="w-10 h-10 rounded-xl bg-[#112a4a] border border-[#1e3e66] flex items-center justify-center text-sky-400 group-hover:border-sky-400/50 group-hover:bg-sky-400/10 transition-colors shrink-0">
                  <Phone className="w-4.5 h-4.5" />
                </div>
                <div className="flex flex-col text-sm">
                  <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Call Sales & Support</span>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 mt-0.5">
                    {siteConfig.contact.phones.map((phone, i) => (
                      <a key={i} href={`tel:${phone}`} className="text-gray-300 hover:text-white font-medium transition-colors">
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://wa.me/919310990051" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-11 h-11 rounded-xl bg-[#112a4a] border border-[#1c3e66] flex items-center justify-center hover:bg-emerald-600 hover:border-emerald-500 hover:text-white text-gray-300 transition-all hover:-translate-y-0.5 shadow-sm"
                title="WhatsApp Us"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              </a>
              <a 
                href={`mailto:${siteConfig.contact.emails[0]}`} 
                className="w-11 h-11 rounded-xl bg-[#112a4a] border border-[#1c3e66] flex items-center justify-center hover:bg-rose-600 hover:border-rose-500 hover:text-white text-gray-300 transition-all hover:-translate-y-0.5 shadow-sm"
                title="Send Email"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </a>
              <a 
                href={siteConfig.social.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-11 h-11 rounded-xl bg-[#112a4a] border border-[#1c3e66] flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 hover:text-white text-gray-300 transition-all hover:-translate-y-0.5 shadow-sm"
                title="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
              <a 
                href={siteConfig.social.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-11 h-11 rounded-xl bg-[#112a4a] border border-[#1c3e66] flex items-center justify-center hover:bg-pink-600 hover:border-pink-500 hover:text-white text-gray-300 transition-all hover:-translate-y-0.5 shadow-sm"
                title="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a 
                href={siteConfig.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-11 h-11 rounded-xl bg-[#112a4a] border border-[#1c3e66] flex items-center justify-center hover:bg-sky-600 hover:border-sky-500 hover:text-white text-gray-300 transition-all hover:-translate-y-0.5 shadow-sm"
                title="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>

        </div>

        {/* Elegant Section Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#1c3e66] to-transparent my-12" />

        {/* ========================================================= */}
        {/* BOTTOM HALF — DETAILED EXPLORATION GRIDS                   */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-12 mb-12">
          
          {/* Section 5 — All Modules */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-4.5 rounded-full bg-sky-400" />
              <h3 className="text-white font-bold text-lg tracking-wide">All Modules</h3>
            </div>
            <ul className="space-y-2.5">
              {modules.map((item) => (
                <li key={item.slug}>
                  <Link 
                    href={`/modules/${item.slug}`} 
                    className="text-gray-300/90 hover:text-white transition-colors text-[15px] flex items-center justify-between py-1 group border-b border-white/[0.04] last:border-b-0"
                  >
                    <span>{item.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-sky-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 6 — All Features */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-4.5 rounded-full bg-sky-400" />
              <h3 className="text-white font-bold text-lg tracking-wide">All Features</h3>
            </div>
            <ul className="space-y-2.5">
              {features.map((item) => (
                <li key={item.slug}>
                  <Link 
                    href={`/features/${item.slug}`} 
                    className="text-gray-300/90 hover:text-white transition-colors text-[15px] flex items-center justify-between py-1 group border-b border-white/[0.04] last:border-b-0"
                  >
                    <span>{item.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-sky-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 7 — All Industries */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-4.5 rounded-full bg-sky-400" />
              <h3 className="text-white font-bold text-lg tracking-wide">All Industries</h3>
            </div>
            <ul className="space-y-2.5">
              {industries.map((item) => (
                <li key={item.slug}>
                  <Link 
                    href={`/industries/${item.slug}`} 
                    className="text-gray-300/90 hover:text-white transition-colors text-[15px] flex items-center justify-between py-1 group border-b border-white/[0.04] last:border-b-0"
                  >
                    <span>{item.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-sky-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 8 — All Locations */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-4.5 rounded-full bg-sky-400" />
                <h3 className="text-white font-bold text-lg tracking-wide">CRM Locations</h3>
              </div>
              <span className="text-[11px] font-semibold text-sky-300 bg-[#112a4a] px-2 py-0.5 rounded border border-[#1c3e66]">
                Global & Regional
              </span>
            </div>
            <div className="max-h-[380px] overflow-y-auto pr-2 space-y-1.5 [scrollbar-width:thin] [scrollbar-color:#1c3e66_transparent]">
              {locations.map((item) => (
                <Link 
                  key={item.slug} 
                  href={`/locations/${item.slug}`} 
                  className="flex items-center justify-between text-gray-300/90 hover:text-white hover:bg-[#112a4a]/70 px-3 py-1.5 rounded-lg border border-transparent hover:border-[#1c3e66] transition-all text-sm group"
                >
                  <span>CRM in {item.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-sky-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>

        </div>
        
        {/* ========================================================= */}
        {/* BOTTOM BAR — CLEAR GAP BETWEEN LEFT & RIGHT CORNERS        */}
        {/* ========================================================= */}
        <div className="border-t border-[#162e4e] pt-8 mt-4 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-400">
          
          {/* Left Corner: Copyright & Corporate Owner */}
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <p className="text-gray-300">
              &copy; 2026 <strong className="text-white font-semibold">RVM CRM</strong>. All rights reserved.
            </p>
            <span className="hidden sm:inline text-gray-600">•</span>
            <p className="text-gray-400">
              Powered by <span className="text-white font-medium hover:text-sky-300 transition-colors">RVM Infotech Private Limited</span>
            </p>
          </div>

          {/* Right Corner: Legal links and Back to top */}
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-5 text-sm">
            <Link href="/legal/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-gray-600">•</span>
            <Link href="/legal/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <span className="text-gray-600">•</span>
            <Link href="/faq" className="hover:text-white transition-colors">FAQs</Link>
            <span className="text-gray-600">•</span>
            <a 
              href="#" 
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#112a4a] hover:bg-[#183b68] text-sky-300 hover:text-white border border-[#1d416d] text-xs font-semibold transition-all hover:-translate-y-0.5 shadow-sm"
            >
              Back to Top ↑
            </a>
          </div>

        </div>

      </div>
    </footer>
  )
}
