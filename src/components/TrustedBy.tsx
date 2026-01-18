const TrustedBy = () => {
  // Company logos using SVG images from public folder
  const companies = [
    {
      name: "Company 1",
      logo: <img src="/1.svg" alt="Company 1" className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto object-contain brightness-0 contrast-125" />
    },
    {
      name: "Company 2",
      logo: <img src="/2.svg" alt="Company 2" className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto object-contain brightness-0 contrast-125" />
    },
    {
      name: "Company 3",
      logo: <img src="/3.svg" alt="Company 3" className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto object-contain brightness-0 contrast-125" />
    },
    {
      name: "Company 4",
      logo: <img src="/4.svg" alt="Company 4" className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto object-contain brightness-0 contrast-125" />
    },
    {
      name: "Company 5",
      logo: <img src="/5.svg" alt="Company 5" className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto object-contain brightness-0 contrast-125" />
    },
    {
      name: "Company 6",
      logo: <img src="/6.svg" alt="Company 6" className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto object-contain brightness-0 contrast-125" />
    }
  ]

  return (
    <section id="company" className="section-padding bg-white overflow-hidden w-full">
      <div className="container-custom">
        {/* Gradient line at the top */}
        <div className="h-0.5 bg-gradient-to-r from-blue-300 via-blue-400 to-purple-400 mb-4 md:mb-6"></div>
        
        {/* Heading */}
        <div className="text-center mb-8 md:mb-12 px-4 md:px-0">
          <h2 className="text-sm sm:text-base md:text-lg font-normal text-gray-700">
            The world's leading companies trust ORBITZ AI
          </h2>
        </div>
      </div>

      {/* Full width carousel section */}
      <div className="relative w-full">
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        
        {/* Scrolling container */}
        <div className="overflow-hidden w-full">
          <div className="flex animate-scroll">
            {/* First set of companies */}
            {companies.map((company, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-3 sm:mx-4 md:mx-8 lg:mx-12 flex items-center justify-center"
                style={{ minWidth: '100px' }}
              >
                {company.logo}
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {companies.map((company, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-3 sm:mx-4 md:mx-8 lg:mx-12 flex items-center justify-center"
                style={{ minWidth: '100px' }}
              >
                {company.logo}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 40s linear infinite;
          display: flex;
          width: fit-content;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

export default TrustedBy

