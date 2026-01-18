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
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-b from-primary-50 to-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side - Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              Transform Your Business with
              <span className="text-primary-600 block mt-1 md:mt-2">AI Automation</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 md:mb-8 leading-relaxed px-2 md:px-0">
              Powerful, simple, and intelligent. Our AI automation platform creates complete solutions 
              with intelligent workflows, integrations, and customizations that match your brand.
            </p>
            
            {/* Book Demo Section */}
            <div className="max-w-2xl mx-auto lg:mx-0 mb-4 md:mb-6">
              {/* Book a Demo Button */}
              <button 
                onClick={() => {
                  const contactSection = document.getElementById('contact')
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
                className="w-full sm:w-auto bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-full transition-colors duration-200 shadow-lg text-sm md:text-base"
              >
                Book a Demo
              </button>
            </div>
          </div>

          {/* Right Side - SVG Image */}
          <div className="flex justify-center lg:justify-end items-center mt-6 lg:mt-0">
            <img 
              src="/call-center-isometric-concept.png" 
              alt="ORBITZ AI" 
              className="w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto object-contain"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="mt-8 md:mt-12 lg:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto px-4 md:px-0">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-600 mb-1 md:mb-2">
              {automations.toLocaleString()}+
            </div>
            <div className="text-sm md:text-base text-gray-600">Automations Deployed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-600 mb-1 md:mb-2">
              {clients}+
            </div>
            <div className="text-sm md:text-base text-gray-600">Enterprise Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-600 mb-1 md:mb-2">
              {uptime.toFixed(1)}%
            </div>
            <div className="text-sm md:text-base text-gray-600">Uptime SLA</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

