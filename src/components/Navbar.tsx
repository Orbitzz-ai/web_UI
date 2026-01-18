import { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleTalkWithExpert = () => {
    // Dispatch custom event to open contact modal
    window.dispatchEvent(new CustomEvent('openContactModal'))
    setIsMenuOpen(false) // Close mobile menu if open
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-primary-600">
              ORBITZ AI
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#platform" className="text-gray-700 hover:text-primary-600 transition-colors">Platform</a>
            <a href="#services" className="text-gray-700 hover:text-primary-600 transition-colors">Services</a>
            <a href="#learning" className="text-gray-700 hover:text-primary-600 transition-colors">Learning</a>
            <a href="#pricing" className="text-gray-700 hover:text-primary-600 transition-colors">Pricing</a>
            <a 
              href="#company" 
              onClick={(e) => {
                e.preventDefault()
                const companySection = document.getElementById('company')
                if (companySection) {
                  companySection.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Company
            </a>
            <button onClick={handleTalkWithExpert} className="btn-primary">Talk with expert</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a href="#platform" className="block text-gray-700 hover:text-primary-600">Platform</a>
            <a href="#services" className="block text-gray-700 hover:text-primary-600">Services</a>
            <a href="#learning" className="block text-gray-700 hover:text-primary-600">Learning</a>
            <a href="#pricing" className="block text-gray-700 hover:text-primary-600">Pricing</a>
            <a 
              href="#company" 
              onClick={(e) => {
                e.preventDefault()
                const companySection = document.getElementById('company')
                if (companySection) {
                  companySection.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
                setIsMenuOpen(false)
              }}
              className="block text-gray-700 hover:text-primary-600"
            >
              Company
            </a>
            <button onClick={handleTalkWithExpert} className="btn-primary w-full">Talk with expert</button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

