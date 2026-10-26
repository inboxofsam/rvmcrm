"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "1. What is RVM CRM software?",
    answer:
      "RVM CRM is a customer relationship and business management platform designed to help businesses organize customer information, leads, sales activities, tasks, service operations, inventory-related workflows, and reporting in one system."
  },
  {
    question: "2. Which modules are available in RVM CRM?",
    answer:
      "The planned module set includes Contact Management, Lead Management, Tasks & Planner, Order Management, Quotation Management, AMC Management, Complaints & Ticket Management, Installation Management, Expense Management, Inventory Management, Marketing Management, Finance & Accounts, Attendance & Leaves, and Analytics & Reports. Availability should be confirmed before purchase."
  },
  {
    question: "3. Which industries can use RVM CRM?",
    answer:
      "RVM CRM may suit manufacturing, distribution, wholesale, garments and textiles, automotive, pharmaceuticals, FMCG, engineering, electrical and electronics, construction, real estate, logistics, and other businesses with relevant customer, sales, service, or operational workflows."
  },
  {
    question: "4. Can RVM CRM help manage field sales teams?",
    answer:
      "RVM CRM's relevant capabilities may include lead assignments, follow-ups, tasks, attendance, employee movement, and nearby customer features. The exact tracking and mobile capabilities depend on the features enabled in your deployment."
  },
  {
    question: "5. Does RVM CRM support Android and iOS?",
    answer:
      "The intended mobile offering includes Android and iOS. Please confirm current app availability, supported devices, and feature coverage with the RVM CRM team before publishing store links."
  },
  {
    question: "6. Can RVM CRM integrate with WhatsApp and lead-generation platforms?",
    answer:
      "Integration options may include WhatsApp Business, IndiaMART, TradeIndia, Justdial, email, website lead forms, and APIs. Availability depends on the specific connector, access permissions, and configuration requirements."
  },
  {
    question: "7. How can I get a demo or pricing for RVM CRM?",
    answer:
      "Submit the Request Free Demo form or contact the sales team. Share your industry, team size, required modules, and business requirements so the team can explain the relevant configuration and pricing."
  }
]

export function HomeFAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx
        return (
          <div
            key={idx}
            className="border border-gray-200 rounded-2xl bg-white overflow-hidden transition-all duration-200 hover:border-[#125486]/40 shadow-sm"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-gray-900 text-lg md:text-xl hover:text-[#125486] transition-colors"
            >
              <span>{faq.question}</span>
              <div
                className={cn(
                  "w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center shrink-0 transition-transform duration-200",
                  isOpen ? "rotate-180 bg-[#125486]/10 text-[#125486]" : "text-gray-400"
                )}
              >
                <ChevronDown className="w-5 h-5" />
              </div>
            </button>
            {isOpen && (
              <div className="px-6 pb-6 pt-1 text-gray-600 leading-relaxed text-base border-t border-gray-50 bg-gray-50/40">
                {faq.answer}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
