import { useState } from 'react'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const testimonials = [
    {
      quote: "ORBITZ AI has transformed how we operate. We've reduced manual processing time by 75% and our team can now focus on strategic work that drives real value.",
      author: "Sarah Chen",
      role: "Operations Director",
      company: "TechCorp Industries",
      initials: "SC"
    },
    {
      quote: "The AI automation platform is incredibly intuitive. Our non-technical team members were building complex workflows within days, not months.",
      author: "Michael Rodriguez",
      role: "CTO",
      company: "Innovate Solutions",
      initials: "MR"
    },
    {
      quote: "We've seen a 10x increase in our automation capabilities since switching to ORBITZ AI. The ROI was evident within the first quarter.",
      author: "Emily Johnson",
      role: "VP of Operations",
      company: "Global Dynamics",
      initials: "EJ"
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how businesses like yours are achieving remarkable results with ORBITZ AI
          </p>
        </div>
      </div>

      {/* Full width carousel section */}
      <div className="relative w-full">
        {/* Gradient overlays for smooth fade effect - Desktop only */}
        <div className="hidden md:block absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="hidden md:block absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        
        {/* Manual Navigation Buttons - Mobile only */}
        <button
          onClick={prevTestimonial}
          className="md:hidden absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          aria-label="Previous testimonial"
        >
          <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextTestimonial}
          className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          aria-label="Next testimonial"
        >
          <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        {/* Scrolling container */}
        <div className="overflow-hidden w-full">
          {/* Mobile view - Single testimonial with manual navigation */}
          <div className="md:hidden flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full px-4 testimonial-card-mobile"
              >
                <div className="bg-white p-2.5 rounded-xl shadow-md h-full mx-auto" style={{ maxWidth: '220px' }}>
                  {/* Stars */}
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <p className="text-gray-700 mb-3 leading-relaxed italic text-xs">
                    "{testimonial.quote}"
                  </p>
                  
                  {/* Author info with image */}
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold text-xs flex-shrink-0">
                      {testimonial.initials}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-xs">{testimonial.author}</div>
                      <div className="text-xs text-gray-600">{testimonial.role}</div>
                      <div className="text-xs text-blue-600 hover:text-blue-700 cursor-pointer">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop view - Auto-scrolling carousel */}
          <div className="hidden md:flex animate-testimonial-scroll">
            {/* First set of testimonials */}
            {testimonials.map((testimonial, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-1.5 md:mx-3 testimonial-card"
              >
                <div className="bg-white p-2.5 md:p-5 rounded-xl shadow-md h-full">
                  {/* Stars */}
                  <div className="flex items-center mb-2 md:mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <p className="text-gray-700 mb-3 md:mb-4 leading-relaxed italic text-xs md:text-base">
                    "{testimonial.quote}"
                  </p>
                  
                  {/* Author info with image */}
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold text-xs flex-shrink-0">
                      {testimonial.initials}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-xs md:text-base">{testimonial.author}</div>
                      <div className="text-xs md:text-sm text-gray-600">{testimonial.role}</div>
                      <div className="text-xs md:text-sm text-blue-600 hover:text-blue-700 cursor-pointer">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {testimonials.map((testimonial, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-1.5 md:mx-3 testimonial-card"
              >
                <div className="bg-white p-2.5 md:p-5 rounded-xl shadow-md h-full">
                  {/* Stars */}
                  <div className="flex items-center mb-2 md:mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <p className="text-gray-700 mb-3 md:mb-4 leading-relaxed italic text-xs md:text-base">
                    "{testimonial.quote}"
                  </p>
                  
                  {/* Author info with image */}
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold text-xs flex-shrink-0">
                      {testimonial.initials}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-xs md:text-base">{testimonial.author}</div>
                      <div className="text-xs md:text-sm text-gray-600">{testimonial.role}</div>
                      <div className="text-xs md:text-sm text-blue-600 hover:text-blue-700 cursor-pointer">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Indicator dots - Mobile only */}
      <div className="md:hidden flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-primary-600' : 'bg-gray-300'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      <style>{`
        @keyframes testimonial-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-testimonial-scroll {
          animation: testimonial-scroll 30s linear infinite;
          display: flex;
          width: fit-content;
        }
        
        .animate-testimonial-scroll:hover {
          animation-play-state: paused;
        }
        
        .testimonial-card {
          min-width: 220px;
          max-width: 220px;
        }
        
        @media (min-width: 768px) {
          .testimonial-card {
            min-width: 260px;
            max-width: 260px;
          }
        }
        
        .testimonial-card-mobile {
          min-width: 100%;
          max-width: 100%;
        }
      `}</style>
    </section>
  )
}

export default Testimonials

