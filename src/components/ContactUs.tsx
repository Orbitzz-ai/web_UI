import { useState } from 'react'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Contact form submitted:', formData)
    // Reset form
    setFormData({
      name: '',
      number: '',
      email: '',
      message: ''
    })
    alert('Thank you for contacting us! We will get back to you soon.')
  }

  return (
    <section id="contact" className="py-0 md:section-padding bg-gray-50">
      <div className="px-0 md:container-custom">
        <div className="text-center mb-6 md:mb-8 px-4 md:px-0 pt-6 md:pt-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Contact Us
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Get in touch with us. We'd love to hear from you.
          </p>
        </div>

        <div className="max-w-xl mx-auto px-0 md:px-4">
          <form onSubmit={handleSubmit} className="bg-white p-4 md:p-6 rounded-none md:rounded-xl shadow-sm space-y-3 md:space-y-4">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-xs font-semibold text-gray-700 mb-1 md:mb-1.5">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 md:py-2.5 bg-white border border-gray-300 rounded-lg md:rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-sm"
                placeholder="Enter your name"
              />
            </div>

            {/* Number */}
            <div>
              <label htmlFor="number" className="block text-xs font-semibold text-gray-700 mb-1 md:mb-1.5">
                Phone Number *
              </label>
              <input
                type="tel"
                id="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 md:py-2.5 bg-white border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-sm"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-gray-700 mb-1 md:mb-1.5">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 md:py-2.5 bg-white border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-sm"
                placeholder="Enter your email"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-xs font-semibold text-gray-700 mb-1 md:mb-1.5">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={3}
                className="w-full px-3 py-2 md:py-2.5 bg-white border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-y text-sm"
                placeholder="Enter your message"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-0 md:pt-1 pb-4 md:pb-0">
              <button
                type="submit"
                className="w-full btn-primary py-2.5 md:py-3 px-6 text-sm md:text-base"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactUs

