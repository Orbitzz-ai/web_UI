import { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleTalkWithExpert = () => {
    // Dispatch custom event to open contact modal
    window.dispatchEvent(new CustomEvent('openContactModal'))
    setIsMenuOpen(false) // Close mobile menu if open
  }

  return (
    <>
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
        </div>
      </nav>

      {/* Mobile Menu - Slide in from right */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          ></div>

          {/* Side Menu */}
          <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 md:hidden animate-slide-in-right overflow-y-auto">
            {/* Close Button */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Menu</h2>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Menu Items */}
            <div className="p-4 space-y-4">
              <a 
                href="#platform" 
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-700 hover:text-primary-600 py-2 transition-colors"
              >
                Platform
              </a>
              <a 
                href="#services" 
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-700 hover:text-primary-600 py-2 transition-colors"
              >
                Services
              </a>
              <a 
                href="#learning" 
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-700 hover:text-primary-600 py-2 transition-colors"
              >
                Learning
              </a>
              <a 
                href="#pricing" 
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-700 hover:text-primary-600 py-2 transition-colors"
              >
                Pricing
              </a>
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
                className="block text-gray-700 hover:text-primary-600 py-2 transition-colors"
              >
                Company
              </a>
              <button 
                onClick={handleTalkWithExpert} 
                className="w-full btn-primary mt-4"
              >
                Talk with expert
              </button>
            </div>
          </div>

          <style>{`
            @keyframes slide-in-right {
              from {
                transform: translateX(100%);
              }
              to {
                transform: translateX(0);
              }
            }

            .animate-slide-in-right {
              animation: slide-in-right 0.3s ease-out;
            }
          `}</style>
        </>
      )}
    </>
  )
}

export default Navbar

