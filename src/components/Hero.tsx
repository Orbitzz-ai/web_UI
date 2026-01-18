import { useState, useEffect, useRef } from 'react'

const Hero = () => {
  const [automations, setAutomations] = useState(0)
  const [clients, setClients] = useState(0)
  const [uptime, setUptime] = useState(0)
  const statsRef = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          
          // Animate automations (0 to 10000)
          const automationsDuration = 2000 // 2 seconds
          const automationsSteps = 100
          const automationsInterval = automationsDuration / automationsSteps
          let currentStep = 0
          const automationsTimer = setInterval(() => {
            currentStep++
            const value = Math.floor((currentStep / automationsSteps) * 10000)
            setAutomations(value)
            if (currentStep >= automationsSteps) {
              clearInterval(automationsTimer)
            }
          }, automationsInterval)

          // Animate clients (0 to 500)
          const clientsDuration = 2000
          const clientsSteps = 100
          const clientsInterval = clientsDuration / clientsSteps
          let clientsStep = 0
          const clientsTimer = setInterval(() => {
            clientsStep++
            const value = Math.floor((clientsStep / clientsSteps) * 500)
            setClients(value)
            if (clientsStep >= clientsSteps) {
              clearInterval(clientsTimer)
            }
          }, clientsInterval)

          // Animate uptime (0 to 99.9)
          const uptimeDuration = 2000
          const uptimeSteps = 100
          const uptimeInterval = uptimeDuration / uptimeSteps
          let uptimeStep = 0
          const uptimeTimer = setInterval(() => {
            uptimeStep++
            const value = (uptimeStep / uptimeSteps) * 99.9
            setUptime(value)
            if (uptimeStep >= uptimeSteps) {
              clearInterval(uptimeTimer)
            }
          }, uptimeInterval)
        }
      },
      { threshold: 0.5 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current)
      }
    }
  }, [hasAnimated])

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-primary-50 to-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your Business with
              <span className="text-primary-600 block mt-2">AI Automation</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Powerful, simple, and intelligent. Our AI automation platform creates complete solutions 
              with intelligent workflows, integrations, and customizations that match your brand.
            </p>
            
            {/* Book Demo Section */}
            <div className="max-w-2xl mx-auto lg:mx-0 mb-6">
              {/* Book a Demo Button */}
              <button 
                onClick={() => {
                  const contactSection = document.getElementById('contact')
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-4 rounded-full transition-colors duration-200 shadow-lg"
              >
                Book a Demo
              </button>
            </div>
          </div>

          {/* Right Side - SVG Image */}
          <div className="flex justify-center lg:justify-end items-center">
            <img 
              src="/call-center-isometric-concept.png" 
              alt="ORBITZ AI" 
              className="w-full max-w-lg lg:max-w-xl xl:max-w-2xl h-auto object-contain"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
              {automations.toLocaleString()}+
            </div>
            <div className="text-gray-600">Automations Deployed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
              {clients}+
            </div>
            <div className="text-gray-600">Enterprise Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
              {uptime.toFixed(1)}%
            </div>
            <div className="text-gray-600">Uptime SLA</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

