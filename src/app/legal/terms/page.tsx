import { Metadata } from "next"
import Link from "next/link"
import { siteConfig } from "@/config/site"
import { FileText, Shield, Scale, Clock, CheckCircle2, ArrowRight, Building, Mail, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Service | RVM CRM & RVM Infotech Private Limited",
  description: "Terms and Conditions governing the use of RVM CRM platform, mobile applications, APIs, and cloud services provided by RVM Infotech Private Limited.",
}

export default function TermsOfServicePage() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 lg:py-20 border-b border-gray-200">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="max-w-4xl mx-auto space-y-4 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#125486]/10 text-[#125486] text-xs font-bold uppercase tracking-widest">
              <Scale className="w-3.5 h-3.5" />
              LEGAL AGREEMENT & CLOUD SERVICE TERMS
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-950 tracking-tight">
              Terms of Service
            </h1>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Please read these Terms carefully before using the RVM CRM web portal, mobile applications, and software APIs provided by RVM Infotech Private Limited.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs font-semibold text-gray-500">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#125486]" />
                Effective Date: January 1, 2026
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Building className="w-4 h-4 text-[#125486]" />
                Corporate Entity: RVM Infotech Private Limited
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16 bg-white">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Quick Summary Notice Box */}
            <div className="p-6 sm:p-8 rounded-2xl bg-sky-50/60 border border-sky-200 space-y-3">
              <div className="flex items-center gap-2.5 text-[#125486] font-bold text-base">
                <Shield className="w-5 h-5 shrink-0" />
                <span>Executive Summary of Key Principles</span>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-700 pt-1">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>100% Data Ownership:</strong> You retain complete ownership and rights to all company and customer records.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Work-Shift Location Only:</strong> GPS coordinates are captured solely during active check-in shifts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>99.9% Uptime Commitment:</strong> Enterprise-grade hosting backed by formal SLA standards.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Zero Data Selling:</strong> We never share, monetize, or access your proprietary records for marketing.</span>
                </li>
              </ul>
            </div>

            {/* Terms Articles */}
            <div className="space-y-10 text-gray-800 text-[15px] sm:text-base leading-relaxed">
              
              {/* Clause 1 */}
              <div className="space-y-3 pt-4 border-t border-gray-100">
                <h2 className="text-2xl font-bold text-gray-950">1. Acceptance of Terms & Eligibility</h2>
                <p>
                  These Terms of Service (&quot;Terms&quot;, &quot;Agreement&quot;) constitute a legally binding agreement between your organization (&quot;Customer&quot;, &quot;Client&quot;, &quot;You&quot;) and <strong>RVM Infotech Private Limited</strong> (&quot;Company&quot;, &quot;RVM CRM&quot;, &quot;We&quot;, &quot;Us&quot;). By creating an account, executing an order form, accessing our web platform, or downloading our mobile applications, you confirm that you have the legal authority to bind your organization to these Terms.
                </p>
                <p>
                  If you do not agree with any provision of this Agreement, you must immediately refrain from accessing or utilizing RVM CRM services.
                </p>
              </div>

              {/* Clause 2 */}
              <div className="space-y-3 pt-6 border-t border-gray-100">
                <h2 className="text-2xl font-bold text-gray-950">2. SaaS Cloud License Grant</h2>
                <p>
                  Subject to timely payment of applicable subscription fees and continuous compliance with this Agreement, RVM Infotech Private Limited grants your organization a non-exclusive, non-transferable, revocable, world-wide right to access and use the RVM CRM Software platform, mobile applications, and accompanying APIs during your active subscription term.
                </p>
                <p>
                  This license is granted solely for your organization's internal business operations. You may not sublicense, lease, sell, reverse engineer, decompile, or create derivative works based on RVM CRM source code or proprietary architecture.
                </p>
              </div>

              {/* Clause 3 */}
              <div className="space-y-3 pt-6 border-t border-gray-100">
                <h2 className="text-2xl font-bold text-gray-950">3. User Accounts, Access Credentials & Security</h2>
                <p>
                  Each designated user within your organization must possess unique login credentials. Sharing credentials between multiple employees is strictly prohibited under our fair use and security policy. Your designated administrator is responsible for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Maintaining the confidentiality of all user login IDs and passwords.</li>
                  <li>Configuring appropriate role-based access permissions for sales reps, technicians, and managers.</li>
                  <li>Immediately revoking access credentials of separated or terminated personnel.</li>
                  <li>Promptly notifying RVM CRM technical support at <code>support@rvmcrm.com</code> upon discovering any suspected unauthorized access or credential compromise.</li>
                </ul>
              </div>

              {/* Clause 4 */}
              <div className="space-y-3 pt-6 border-t border-gray-100">
                <h2 className="text-2xl font-bold text-gray-950">4. Subscriptions, Invoicing & Payment Terms</h2>
                <p>
                  RVM CRM is billed on a per-user, recurring subscription basis (monthly, quarterly, or annually as stipulated on your approved quotation or service order).
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Invoicing & Taxes:</strong> All subscription charges are invoiced in Indian Rupees (INR) and are subject to applicable Goods and Services Tax (GST) as mandated by Indian tax authorities.</li>
                  <li><strong>Payment Due Date:</strong> Invoices are payable within seven (7) business days of issuance unless otherwise agreed in writing.</li>
                  <li><strong>Suspension for Non-Payment:</strong> Accounts with undisputed balances overdue by more than fourteen (14) days may be temporarily suspended following prior written notice until payment is settled.</li>
                  <li><strong>License Scaling:</strong> Additional user seats may be added at any point during your subscription cycle and will be billed pro-rata for the remainder of the billing period.</li>
                </ul>
              </div>

              {/* Clause 5 */}
              <div className="space-y-3 pt-6 border-t border-gray-100">
                <h2 className="text-2xl font-bold text-gray-950">5. Customer Data Ownership & Confidentiality</h2>
                <p>
                  <strong>You retain 100% legal ownership of all data, customer lists, lead dossiers, quotations, financial records, site photos, and files uploaded or generated within your RVM CRM instance.</strong>
                </p>
                <p>
                  RVM Infotech Private Limited does not claim any intellectual property rights over your data. We process your data solely to deliver the contracted software functionalities, generate requested analytics, and provide technical assistance. We never sell, rent, disclose, or expose your data to any third party.
                </p>
              </div>

              {/* Clause 6 */}
              <div className="space-y-3 pt-6 border-t border-gray-100">
                <h2 className="text-2xl font-bold text-gray-950">6. Mobile App Location & Field Telemetry Standards</h2>
                <p>
                  RVM CRM includes mobile GPS check-in/out, travel distance estimation, and location-verified customer visit features designed specifically for authorized business management:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Work Shift Tracking Only:</strong> Geographic tracking operates exclusively when an employee actively performs a &quot;Check-In&quot; action on their mobile device and ceases immediately upon &quot;Check-Out&quot;.</li>
                  <li><strong>Organizational Consent:</strong> Customer organizations are responsible for informing their employees that location services are utilized for shift attendance, client visit verification, and travel conveyance reimbursement.</li>
                  <li><strong>Battery and Data Optimization:</strong> RVM CRM engineers mobile telemetry to minimize battery usage and mobile data consumption through intelligent coordinate caching and change-of-position threshold triggers.</li>
                </ul>
              </div>

              {/* Clause 7 */}
              <div className="space-y-3 pt-6 border-t border-gray-100">
                <h2 className="text-2xl font-bold text-gray-950">7. Service Availability & SLA Commitments</h2>
                <p>
                  RVM CRM targets a continuous monthly service availability of 99.9%, excluding scheduled maintenance windows announced at least 48 hours in advance (typically scheduled during off-peak weekend hours).
                </p>
                <p>
                  Our infrastructure incorporates automated failover redundancy, daily off-site encrypted database backups, and Tier-IV data center safeguards against physical disasters and network outages.
                </p>
              </div>

              {/* Clause 8 */}
              <div className="space-y-3 pt-6 border-t border-gray-100">
                <h2 className="text-2xl font-bold text-gray-950">8. Acceptable Use & Conduct Restrictions</h2>
                <p>You agree not to use RVM CRM to:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Transmit unsolicited commercial spam, pyramid schemes, or bulk unsolicited messages in violation of TRAI/DLT regulations.</li>
                  <li>Store or transmit malicious software, worms, trojans, or corrupted files.</li>
                  <li>Probe, scan, or conduct unauthorized penetration testing against RVM CRM infrastructure without prior written authorization from our security team.</li>
                  <li>Impersonate any individual or entity or misrepresent company affiliations.</li>
                </ul>
              </div>

              {/* Clause 9 */}
              <div className="space-y-3 pt-6 border-t border-gray-100">
                <h2 className="text-2xl font-bold text-gray-950">9. Data Retrieval upon Account Termination</h2>
                <p>
                  Either party may terminate a subscription agreement in accordance with the terms of their executed contract. Upon expiration or written termination of your account:
                </p>
                <p>
                  RVM CRM provides a thirty (30) day data retention window during which your administrators can export all customer records, quotation registers, service histories, and attendance logs in standard CSV/Excel format. Following the 30-day grace period, all customer instance data is securely expunged in compliance with our data sanitation protocols.
                </p>
              </div>

              {/* Clause 10 */}
              <div className="space-y-3 pt-6 border-t border-gray-100">
                <h2 className="text-2xl font-bold text-gray-950">10. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by applicable Indian law, neither RVM Infotech Private Limited nor its directors, officers, or employees shall be liable for indirect, incidental, consequential, or punitive damages (including loss of business profits, goodwill, or operational interruption) arising out of or in connection with the use or inability to use RVM CRM software.
                </p>
                <p>
                  The Company&apos;s cumulative aggregate liability under this Agreement shall not exceed the total fees paid by the Customer to RVM CRM in the twelve (12) month period immediately preceding the event giving rise to liability.
                </p>
              </div>

              {/* Clause 11 */}
              <div className="space-y-3 pt-6 border-t border-gray-100">
                <h2 className="text-2xl font-bold text-gray-950">11. Governing Law & Dispute Resolution</h2>
                <p>
                  This Agreement shall be governed by, interpreted, and construed in accordance with the laws of the Republic of India.
                </p>
                <p>
                  In the event of any controversy, claim, or dispute arising out of or relating to this Agreement, the parties shall first attempt to resolve the matter through mutual good-faith negotiations. Any unresolved disputes shall be subject to the exclusive jurisdiction of the competent courts located in New Delhi, India.
                </p>
              </div>

              {/* Clause 12 */}
              <div className="space-y-4 pt-6 border-t border-gray-100">
                <h2 className="text-2xl font-bold text-gray-950">12. Corporate & Legal Contact Information</h2>
                <p>
                  For questions regarding these Terms, contract negotiations, or compliance verification, please contact our legal and corporate governance department:
                </p>
                <div className="p-6 rounded-2xl bg-slate-50 border border-gray-200 space-y-3 text-sm">
                  <p className="font-bold text-gray-950 text-base">RVM Infotech Private Limited</p>
                  <p className="text-gray-600">
                    <strong>Corporate & Head Office:</strong> 512, 17th Floor, Plot – C, Sector – 16B, Noida – 201301, Uttar Pradesh, India
                  </p>
                  <p className="text-gray-600">
                    <strong>Registered Office:</strong> Plot Number – 28, Block – 2A, GC, Near NSUT, East Campus, New Delhi 110031, India
                  </p>
                  <div className="flex flex-wrap gap-6 pt-2 text-gray-700">
                    <span className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#125486]" />
                      <strong>Legal Inquiries:</strong> legal@rvmcrm.com / rvmcrm@gmail.com
                    </span>
                    <span className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#125486]" />
                      <strong>Compliance Desk:</strong> +91 9310990051
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Navigation Helper */}
            <div className="pt-10 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
              <Link href="/legal/privacy" className="text-[#125486] font-bold hover:underline flex items-center gap-2">
                <span>View Privacy Policy</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/support" className="text-gray-600 hover:text-gray-900 font-semibold">
                Need Support or SLA Clarification?
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
