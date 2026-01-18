import { useState, useEffect } from 'react'
import NDAModal from './NDAModal'

const ContactModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isNDAOpen, setIsNDAOpen] = useState(false)
  const [countryCode, setCountryCode] = useState('+1')
  const [countryFlag, setCountryFlag] = useState('🇺🇸')
  const [showCountryDropdown, setShowCountryDropdown] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })

  const countries = [
    { code: '+1', flag: '🇺🇸', name: 'US' },
    { code: '+91', flag: '🇮🇳', name: 'IN' },
    { code: '+44', flag: '🇬🇧', name: 'GB' },
    { code: '+86', flag: '🇨🇳', name: 'CN' },
    { code: '+49', flag: '🇩🇪', name: 'DE' },
    { code: '+33', flag: '🇫🇷', name: 'FR' },
    { code: '+81', flag: '🇯🇵', name: 'JP' },
    { code: '+61', flag: '🇦🇺', name: 'AU' },
    { code: '+55', flag: '🇧🇷', name: 'BR' },
    { code: '+7', flag: '🇷🇺', name: 'RU' },
    { code: '+82', flag: '🇰🇷', name: 'KR' },
    { code: '+34', flag: '🇪🇸', name: 'ES' },
    { code: '+39', flag: '🇮🇹', name: 'IT' },
    { code: '+31', flag: '🇳🇱', name: 'NL' },
    { code: '+971', flag: '🇦🇪', name: 'AE' },
    { code: '+65', flag: '🇸🇬', name: 'SG' },
    { code: '+852', flag: '🇭🇰', name: 'HK' },
    { code: '+60', flag: '🇲🇾', name: 'MY' },
    { code: '+66', flag: '🇹🇭', name: 'TH' },
    { code: '+62', flag: '🇮🇩', name: 'ID' }
  ]

  useEffect(() => {
    // Open modal after 5 seconds
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 5000)

    // Listen for custom event to open modal
    const handleOpenModal = () => {
      setIsOpen(true)
    }
    window.addEventListener('openContactModal', handleOpenModal as EventListener)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('openContactModal', handleOpenModal)
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    const submissionData = {
      ...formData,
      phone: `${countryCode} ${formData.phone}`
    }
    console.log('Form submitted:', submissionData)
    setIsOpen(false)
  }

  const handleClose = () => {
    setIsOpen(false)
    setShowCountryDropdown(false)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (showCountryDropdown && !target.closest('.country-selector')) {
        setShowCountryDropdown(false)
      }
    }

    if (showCountryDropdown) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showCountryDropdown])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-end p-0 md:p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 animate-fade-in"
        onClick={handleClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-blue-50 rounded-t-3xl md:rounded-3xl w-full md:max-w-md h-full md:h-auto md:max-h-[95vh] overflow-hidden shadow-2xl animate-slide-in-right flex flex-col">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors z-10"
        >
          <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Form Content */}
        <div className="p-6 pt-12 overflow-y-auto flex-1">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Start Your Project Discussion
          </h2>

          <form onSubmit={handleSubmit} className="space-y-3">
            {/* First Name */}
            <div>
              <input
                type="text"
                name="firstName"
                placeholder="First Name*"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
              />
            </div>

            {/* Last Name */}
            <div>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name*"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
              />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address*"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
              />
            </div>

            {/* Phone */}
            <div className="relative country-selector">
              <div className="flex items-center bg-white border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-primary-500 focus-within:border-transparent">
                <div className="relative flex items-center">
                  <span className="text-xl px-2">{countryFlag}</span>
                  <input
                    type="text"
                    value={countryCode}
                    onChange={(e) => {
                      const value = e.target.value
                      if (value.startsWith('+') || value === '') {
                        setCountryCode(value)
                        // Try to match flag from dropdown
                        const matched = countries.find(c => c.code === value)
                        if (matched) {
                          setCountryFlag(matched.flag)
                        }
                      }
                    }}
                    placeholder="+1"
                    className="w-16 px-2 py-2.5 bg-transparent text-gray-700 focus:outline-none text-sm border-r border-gray-300"
                  />
                  <button
                    type="button"
                    onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                    className="px-2 py-2.5 hover:bg-gray-50 transition-colors"
                  >
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* Country Dropdown */}
                  {showCountryDropdown && (
                    <div className="absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-20 max-h-60 overflow-y-auto w-64">
                      {countries.map((country) => (
                        <button
                          key={country.code}
                          type="button"
                          onClick={() => {
                            setCountryCode(country.code)
                            setCountryFlag(country.flag)
                            setShowCountryDropdown(false)
                          }}
                          className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors text-left"
                        >
                          <span className="text-xl">{country.flag}</span>
                          <span className="text-gray-700 text-sm">{country.code}</span>
                          <span className="text-gray-500 text-xs ml-auto">{country.name}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number*"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="flex-1 px-3 py-2.5 bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none text-sm"
                />
              </div>
            </div>

            {/* Company */}
            <div>
              <input
                type="text"
                name="company"
                placeholder="Company*"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full px-3 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
              />
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                placeholder="Message*"
                value={formData.message}
                onChange={handleChange}
                required
                rows={3}
                className="w-full px-3 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none text-sm"
              />
            </div>

            {/* Privacy Statement */}
            <div className="flex items-start gap-2">
              <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p className="text-sm text-gray-700">
                Your idea is 100% protected by our{' '}
                <button
                  type="button"
                  onClick={() => setIsNDAOpen(true)}
                  className="font-bold underline text-primary-600 hover:text-primary-700 transition-colors"
                >
                  Non-Disclosure Agreement
                </button>.
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200"
            >
              Get a Free Consultation
            </button>

            {/* Response Guarantee */}
            <p className="text-sm text-gray-600 text-center">
              Response guaranteed within 24 hours.
            </p>
          </form>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-in-right {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.4s ease-out;
        }
      `}</style>
      <NDAModal isOpen={isNDAOpen} onClose={() => setIsNDAOpen(false)} />
    </div>
  )
}

export default ContactModal

