import { Metadata } from "next"
import Link from "next/link"
import { siteConfig } from "@/config/site"
import { ShieldCheck, Lock, MapPin, Eye, Server, Clock, Building, Mail, Phone, ArrowRight, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy | RVM CRM & RVM Infotech Private Limited",
  description: "Privacy Policy for RVM CRM platform and mobile apps. Learn how RVM Infotech Private Limited protects enterprise data, handles field GPS telemetry, and complies with DPDP Act.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 lg:py-20 border-b border-gray-200">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="max-w-4xl mx-auto space-y-4 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#125486]/10 text-[#125486] text-xs font-bold uppercase tracking-widest">
              <ShieldCheck className="w-3.5 h-3.5" />
              PRIVACY ASSURANCE & DATA PROTECTION
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-950 tracking-tight">
              Privacy Policy
            </h1>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              How RVM Infotech Private Limited collects, safeguards, and respects the personal and business data entrusted to RVM CRM.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs font-semibold text-gray-500">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#125486]" />
                Effective Date: January 1, 2026
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Building className="w-4 h-4 text-[#125486]" />
                RVM Infotech Private Limited
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16 bg-white">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Essential Highlights */}
            <div className="p-6 sm:p-8 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-3">
              <div className="flex items-center gap-2.5 text-emerald-800 font-bold text-base">
                <Lock className="w-5 h-5 shrink-0" />
                <span>Our Privacy Commitments at a Glance</span>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-700 pt-1">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Zero Third-Party Data Selling:</strong> We never sell, rent, or trade your contact records or business data.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Shift-Only GPS Capture:</strong> Geolocation is active solely between Check-In and Check-Out.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>End-to-End Encryption:</strong> Encrypted with AES-256 at rest and TLS 1.3 in transit.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Indian Data Centers:</strong> Hosted domestically in ISO 27001 Tier-IV enterprise facilities.</span>
                </li>
              </ul>
            </div>

            {/* Policy Articles */}
            <div className="space-y-10 text-gray-800 text-[15px] sm:text-base leading-relaxed">
              
              {/* Clause 1 */}
              <div className="space-y-3 pt-4 border-t border-gray-100">
                <h2 className="text-2xl font-bold text-gray-950">1. Introduction & Scope</h2>
                <p>
                  <strong>RVM Infotech Private Limited</strong> (&quot;RVM CRM&quot;, &quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the RVM CRM business management platform, web applications, and native mobile apps. This Privacy Policy describes how we collect, store, process, and protect information when you utilize our website (<code>www.rvmcrm.com</code>), cloud application, and mobile software.
                </p>
                <p>
                  We comply with the <strong>Digital Personal Data Protection (DPDP) Act, 2023</strong>, the <strong>Information Technology Act, 2000</strong>, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and align with international standards including GDPR.
                </p>
              </div>

              {/* Clause 2 */}
              <div className="space-y-3 pt-6 border-t border-gray-100">
                <h2 className="text-2xl font-bold text-gray-950">2. Categories of Information We Collect</h2>
                <p>To provide our services, we collect the following categories of information:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Account & Registration Information:</strong> User full name, official work email, mobile number, job designation, department, and company corporate billing details.</li>
                  <li><strong>Customer Business Data:</strong> Information entered into the CRM by your organization, including prospect names, lead requirements, quotation line items, AMC contracts, service tickets, and communication logs.</li>
                  <li><strong>Device & Telemetry Information:</strong> Mobile device model, operating system version, browser type, unique device identifiers, IP address, and platform usage metrics to ensure system stability and combat fraud.</li>
                </ul>
              </div>

              {/* Clause 3 - CRITICAL GPS DISCLOSURE */}
              <div className="space-y-4 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-6 h-6 text-[#125486]" />
                  <h2 className="text-2xl font-bold text-gray-950">3. Specific Disclosure: Mobile GPS & Field Location Telemetry</h2>
                </div>
                <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 text-amber-950 text-sm leading-relaxed space-y-2">
                  <p className="font-bold">Transparent Notice on Field Location Tracking:</p>
                  <p>
                    RVM CRM includes workforce management capabilities that record geographic coordinates for sales executives and service engineers. We adhere to the highest privacy and ethical standards:
                  </p>
                </div>
                <ul className="list-disc pl-6 space-y-2.5 text-gray-700">
                  <li><strong>Explicit Trigger (Check-In / Check-Out):</strong> Location telemetry is recorded <em>strictly and exclusively</em> after an employee taps the &quot;Check-In&quot; button at the start of their authorized work shift.</li>
                  <li><strong>Strict Cessation on Check-Out:</strong> The moment an employee taps &quot;Check-Out&quot; to conclude their workday, all background location logging halts immediately. No tracking or sampling occurs after hours, during weekends, or while off-duty.</li>
                  <li><strong>Legitimate Business Purposes:</strong> Geolocation coordinates are processed solely for: (a) verifying that client visits and service calls occurred at the customer's actual premises; (b) computing accurate travel distances for fair conveyance expense reimbursement; and (c) enabling managers to deploy emergency service technicians to nearby service requests.</li>
                  <li><strong>Worker Transparency:</strong> Employees have continuous in-app visibility of their own recorded check-ins, logged client meetings, and travel allowance computations.</li>
                </ul>
              </div>

              {/* Clause 4 */}
              <div className="space-y-3 pt-6 border-t border-gray-100">
                <h2 className="text-2xl font-bold text-gray-950">4. How We Utilize Collected Information</h2>
                <p>We process information exclusively for legitimate business and operational purposes:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Provisioning, maintaining, and enhancing RVM CRM workflows, modules, and mobile features.</li>
                  <li>Generating GST invoices, quotations, order confirmations, and dispatch notes requested by users.</li>
                  <li>Delivering automated multi-channel notifications (e.g. WhatsApp quote dispatch, SMS OTPs, AMC renewal alerts).</li>
                  <li>Providing customer onboarding, technical troubleshooting, and remote desk support.</li>
                  <li>Detecting, preventing, and responding to security incidents, malicious activity, or fraudulent logins.</li>
                </ul>
              </div>

              {/* Clause 5 */}
              <div className="space-y-3 pt-6 border-t border-gray-100">
                <h2 className="text-2xl font-bold text-gray-950">5. Data Sharing & Third-Party Processors</h2>
                <p>
                  <strong>We do not sell, rent, lease, or monetize your company data or customer contacts under any circumstance.</strong>
                </p>
                <p>
                  We share data solely with vetted enterprise infrastructure providers who assist in powering the RVM CRM platform under strict non-disclosure and security covenants:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Cloud Infrastructure:</strong> Tier-IV data center facilities located in India for high-availability database hosting and encrypted storage.</li>
                  <li><strong>Telecommunications & Messaging:</strong> Official WhatsApp Business Cloud API (Meta), DLT-compliant SMS gateways (MSG91, Textlocal), and transactional email infrastructure.</li>
                  <li><strong>Legal Requirements:</strong> We may disclose data only if required by valid law, court order, or governmental authority with competent jurisdiction in India.</li>
                </ul>
              </div>

              {/* Clause 6 */}
              <div className="space-y-3 pt-6 border-t border-gray-100">
                <h2 className="text-2xl font-bold text-gray-950">6. Data Security Safeguards</h2>
                <p>
                  RVM Infotech Private Limited enforces rigorous administrative, technical, and physical safeguards:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Cryptographic Standards:</strong> 256-bit Advanced Encryption Standard (AES-256) for data stored at rest; Transport Layer Security (TLS 1.3) for all data in transit across web and mobile endpoints.</li>
                  <li><strong>Role-Based Access Control (RBAC):</strong> Granular permissions ensuring only authorized employees in your organization can view specific records.</li>
                  <li><strong>Multi-Factor Authentication (MFA):</strong> Optional and enforced MFA capabilities for administrative user logins.</li>
                  <li><strong>Continuous Automated Backups:</strong> Hourly incremental and daily full database backups stored in geographically isolated Indian cloud vaults.</li>
                </ul>
              </div>

              {/* Clause 7 */}
              <div className="space-y-3 pt-6 border-t border-gray-100">
                <h2 className="text-2xl font-bold text-gray-950">7. Data Retention & Deletion Rights</h2>
                <p>
                  We retain customer business data for the active duration of your subscription. Upon account termination or contract expiry:
                </p>
                <p>
                  Your corporate administrators have a 30-day export window to download all CRM data in standard CSV/Excel format. Upon expiration of this 30-day window, all customer databases, documents, and backups are permanently and irreversibly purged from our active and backup storage clusters.
                </p>
              </div>

              {/* Clause 8 */}
              <div className="space-y-3 pt-6 border-t border-gray-100">
                <h2 className="text-2xl font-bold text-gray-950">8. User Rights & Corporate Administrator Privileges</h2>
                <p>
                  Under applicable Indian data protection laws, individuals and organizations have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Review and obtain an export copy of their stored personal records.</li>
                  <li>Request correction of incomplete, inaccurate, or outdated personal information.</li>
                  <li>Request erasure of personal data, subject to statutory tax and financial record-keeping mandates.</li>
                  <li>Withdraw consent for optional non-essential communications.</li>
                </ul>
              </div>

              {/* Clause 9 */}
              <div className="space-y-4 pt-6 border-t border-gray-100">
                <h2 className="text-2xl font-bold text-gray-950">9. Grievance Redressal Officer & Inquiries</h2>
                <p>
                  In accordance with the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023, the designated Grievance Officer for data protection and privacy matters is:
                </p>
                <div className="p-6 rounded-2xl bg-slate-50 border border-gray-200 space-y-3 text-sm">
                  <p className="font-bold text-gray-950 text-base">Grievance Redressal & Privacy Officer</p>
                  <p className="text-gray-700"><strong>Company:</strong> RVM Infotech Private Limited</p>
                  <p className="text-gray-600">
                    <strong>Registered Address:</strong> Plot Number – 28, Block – 2A, GC, Near NSUT, East Campus, New Delhi 110031, India
                  </p>
                  <p className="text-gray-600">
                    <strong>Corporate Office:</strong> 512, 17th Floor, Plot – C, Sector – 16B, Noida – 201301, Uttar Pradesh, India
                  </p>
                  <div className="flex flex-wrap gap-6 pt-2 text-gray-700">
                    <span className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#125486]" />
                      <strong>Email:</strong> privacy@rvmcrm.com / rvmcrm@gmail.com
                    </span>
                    <span className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#125486]" />
                      <strong>Phone:</strong> +91 9310990051
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Navigation Helper */}
            <div className="pt-10 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
              <Link href="/legal/terms" className="text-[#125486] font-bold hover:underline flex items-center gap-2">
                <span>View Terms of Service</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/support" className="text-gray-600 hover:text-gray-900 font-semibold">
                Have a Data Privacy Question?
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
