const NDAModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center p-4 pt-8 md:pt-16 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 animate-fade-in"
        onClick={onClose}
      ></div>

      {/* NDA Modal */}
      <div className="relative bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in my-4 md:my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 md:top-4 md:right-4 w-7 h-7 md:w-8 md:h-8 bg-gray-100 rounded-full flex items-center justify-center shadow-md hover:bg-gray-200 transition-colors z-10"
        >
          <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* NDA Content */}
        <div className="p-4 md:p-8 pt-10 md:pt-12">
          <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 text-center">
            Non-Disclosure Agreement
          </h2>

          <div className="prose prose-sm md:prose-lg max-w-none text-gray-700 space-y-4 md:space-y-6">
            <div>
              <h3 className="text-base md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">1. Confidential Information</h3>
              <p className="mb-2 md:mb-3 text-sm md:text-base">
                "Confidential Information" means any and all non-public, proprietary, or confidential information disclosed by ORBITZ AI (the "Disclosing Party") to you (the "Receiving Party"), whether orally, in writing, or in any other form, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-1.5 md:space-y-2 ml-2 md:ml-4 text-sm md:text-base">
                <li>Business plans, strategies, and financial information</li>
                <li>Technical information, software, and algorithms</li>
                <li>Product designs, specifications, and methodologies</li>
                <li>Customer lists, market research, and business intelligence</li>
                <li>Any other information designated as confidential</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">2. Obligations</h3>
              <p className="mb-2 md:mb-3 text-sm md:text-base">
                The Receiving Party agrees to:
              </p>
              <ul className="list-disc list-inside space-y-1.5 md:space-y-2 ml-2 md:ml-4 text-sm md:text-base">
                <li>Hold and maintain all Confidential Information in strict confidence</li>
                <li>Not disclose any Confidential Information to any third party without prior written consent</li>
                <li>Use Confidential Information solely for the purpose of evaluating potential business relationships</li>
                <li>Take reasonable precautions to protect the confidentiality of the Confidential Information</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">3. Exceptions</h3>
              <p className="mb-2 md:mb-3 text-sm md:text-base">
                The obligations set forth above shall not apply to information that:
              </p>
              <ul className="list-disc list-inside space-y-1.5 md:space-y-2 ml-2 md:ml-4 text-sm md:text-base">
                <li>Is or becomes publicly available through no breach of this Agreement</li>
                <li>Was rightfully known by the Receiving Party prior to disclosure</li>
                <li>Is independently developed by the Receiving Party without use of Confidential Information</li>
                <li>Is required to be disclosed by law or court order</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">4. Term</h3>
              <p className="text-sm md:text-base">
                This Agreement shall remain in effect indefinitely with respect to any Confidential Information disclosed hereunder, until such information becomes publicly available through no breach of this Agreement by the Receiving Party.
              </p>
            </div>

            <div>
              <h3 className="text-base md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">5. Return of Materials</h3>
              <p className="text-sm md:text-base">
                Upon request by the Disclosing Party, the Receiving Party shall promptly return or destroy all documents and materials containing Confidential Information and certify in writing the completion of such return or destruction.
              </p>
            </div>

            <div>
              <h3 className="text-base md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">6. No License</h3>
              <p className="text-sm md:text-base">
                This Agreement does not grant the Receiving Party any rights or licenses to any Confidential Information or any intellectual property rights therein.
              </p>
            </div>

            <div>
              <h3 className="text-base md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">7. Remedies</h3>
              <p className="text-sm md:text-base">
                The Receiving Party acknowledges that any breach of this Agreement may cause irreparable harm to the Disclosing Party, and that the Disclosing Party shall be entitled to seek injunctive relief in addition to any other remedies available at law or in equity.
              </p>
            </div>

            <div className="border-t border-gray-300 pt-4 md:pt-6 mt-4 md:mt-6">
              <p className="text-xs md:text-sm text-gray-600">
                By submitting information to ORBITZ AI, you acknowledge that you have read, understood, and agree to be bound by the terms of this Non-Disclosure Agreement.
              </p>
            </div>
          </div>

          {/* Close Button */}
          <div className="mt-6 md:mt-8 text-center">
            <button
              onClick={onClose}
              className="btn-primary px-6 md:px-8 py-2.5 md:py-3 text-sm md:text-base"
            >
              I Understand and Accept
            </button>
          </div>
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

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}

export default NDAModal

