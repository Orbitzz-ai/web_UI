const Enterprises = () => {
  const industries = [
    "Financial Services",
    "healthcare",
    "telecom + Media",
    "Consumer",
    "business"
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Trusted by global enterprises
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Discover why hundreds of enterprises use ORBITZ AI
          </p>
        </div>

        {/* Industry Categories */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="px-5 py-2 bg-gray-50 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-all duration-300 cursor-pointer"
            >
              <span className="text-gray-700 font-medium text-sm">
                {industry}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Enterprises


