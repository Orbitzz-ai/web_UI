const Features = () => {
  const features = [
    {
      title: "AI-Powered Workflow Automation",
      description: "Create intelligent workflows that learn and adapt. Our AI automation engine turns complex business processes into simple, automated solutions that scale with your business.",
      icon: "🤖"
    },
    {
      title: "No-Code Platform",
      description: "Build powerful automations without writing a single line of code. Our intuitive drag-and-drop interface makes automation accessible to everyone in your team.",
      icon: "🎨"
    },
    {
      title: "Enterprise Integration",
      description: "Connect with 1000+ apps and services. Seamlessly integrate with your existing tools including CRM, ERP, databases, and cloud services.",
      icon: "🔗"
    },
    {
      title: "Real-Time Analytics",
      description: "Monitor and optimize your automations with real-time dashboards. Get insights into performance, bottlenecks, and opportunities for improvement.",
      icon: "📊"
    },
    {
      title: "Custom AI Models",
      description: "Train and deploy custom AI models tailored to your business needs. From document processing to customer service, create AI solutions that understand your domain.",
      icon: "🧠"
    },
    {
      title: "Secure & Compliant",
      description: "Enterprise-grade security with SOC 2, GDPR, and HIPAA compliance. Your data is encrypted, secure, and always under your control.",
      icon: "🔒"
    }
  ]

  return (
    <section id="platform" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Powerful AI Automation Platform
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to automate your business processes, powered by cutting-edge AI technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300 bg-white"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features


