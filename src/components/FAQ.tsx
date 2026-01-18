import { useState } from 'react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "What is AI automation?",
      answer: "AI automation combines artificial intelligence with workflow automation to create intelligent systems that can learn, adapt, and make decisions. Unlike traditional automation that follows fixed rules, AI automation can handle complex scenarios, learn from data, and improve over time."
    },
    {
      question: "Do I need coding skills to use ORBITZ AI?",
      answer: "No coding skills required! ORBITZ AI features a no-code platform with an intuitive drag-and-drop interface. You can build complex automations using visual workflows, making it accessible to business users, analysts, and technical teams alike."
    },
    {
      question: "How secure is my data?",
      answer: "Security is our top priority. ORBITZ AI is SOC 2 Type II certified, GDPR compliant, and follows industry best practices. All data is encrypted in transit and at rest, and we offer enterprise-grade security features including SSO, role-based access control, and audit logs."
    },
    {
      question: "What integrations are available?",
      answer: "ORBITZ AI integrates with 1000+ applications including popular CRMs (Salesforce, HubSpot), databases (PostgreSQL, MySQL), cloud services (AWS, Azure, GCP), communication tools (Slack, Microsoft Teams), and many more. We also offer custom API integrations for unique requirements."
    },
    {
      question: "Can I customize AI models for my business?",
      answer: "Yes! ORBITZ AI allows you to train and deploy custom AI models tailored to your specific business needs. Whether it's document processing, customer service, or data analysis, you can create AI solutions that understand your domain and terminology."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We offer comprehensive support including 24/7 technical support for enterprise customers, extensive documentation, video tutorials, community forums, and dedicated account managers. Our support team is available via email, chat, and phone."
    },
    {
      question: "How quickly can I get started?",
      answer: "You can get started in minutes! Sign up for a free account, and you'll have access to our platform immediately. Our onboarding process guides you through creating your first automation, and our team is available to help with any questions."
    },
    {
      question: "What's the pricing model?",
      answer: "ORBITZ AI offers flexible pricing plans starting with a free tier for individuals and small teams. We have professional, business, and enterprise plans with different feature sets and usage limits. Enterprise customers can also opt for custom pricing based on their specific needs."
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="px-0 md:container-custom">
        <div className="text-center mb-8 md:mb-12 lg:mb-16 px-4 md:px-0 pt-6 md:pt-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm md:text-base lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about ORBITZ AI
          </p>
        </div>

        <div className="max-w-3xl mx-auto px-0 md:px-4">
          <div className="space-y-3 md:space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full px-4 md:px-6 py-3 md:py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-semibold text-gray-900 pr-3 md:pr-4 text-sm md:text-base">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-4 h-4 md:w-5 md:h-5 text-gray-500 flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-4 md:px-6 py-3 md:py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed text-sm md:text-base">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ


