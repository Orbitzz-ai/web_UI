const Services = () => {
  // AI Automation Platform Features
  const aiFeatures = [
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
    }
  ]

  // Core Competencies
  const competencies = [
    {
      icon: "🎨",
      title: "Frontend Development",
      description: "Build stunning, responsive websites that captivate your audience and drive conversions. We create pixel-perfect interfaces that work seamlessly across all devices."
    },
    {
      icon: "⚙️",
      title: "Backend Development",
      description: "Robust server solutions that power your business. We build scalable, secure backends that handle growth and keep your data safe."
    },
    {
      icon: "🗄️",
      title: "Database Management",
      description: "Optimized data storage and management solutions. We ensure your data is organized, accessible, and ready to drive smart business decisions."
    },
    {
      icon: "🧩",
      title: "WordPress Development",
      description: "Custom WordPress sites that load fast and convert better. From unique themes to powerful plugins, we make WordPress work for your business."
    },
    {
      icon: "🤖",
      title: "AI Integration",
      description: "Intelligent automation that saves time and boosts productivity. Integrate cutting-edge AI to handle tasks and enhance user experiences."
    },
    {
      icon: "🛒",
      title: "E-Commerce Solutions",
      description: "Complete online stores that sell more. From seamless checkout to inventory management, we build e-commerce platforms that drive sales."
    },
    {
      icon: "📝",
      title: "CMS & No-Code",
      description: "Easy-to-manage content systems that empower your team. Build and update your site without technical expertise, keeping you in control."
    },
    {
      icon: "🚀",
      title: "Deployment & DevOps",
      description: "Reliable hosting and deployment that keeps your site running smoothly. We handle the technical infrastructure so you can focus on your business."
    },
    {
      icon: "📱",
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps that engage users. Reach your customers wherever they are with apps that perform beautifully."
    },
    {
      icon: "🎯",
      title: "Digital Marketing",
      description: "Data-driven marketing strategies that grow your audience and revenue. From SEO to campaigns, we help you connect with customers effectively."
    }
  ]

  // Combine all services
  const allServices = [...aiFeatures, ...competencies]

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            We are offering this services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allServices.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-900 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services


