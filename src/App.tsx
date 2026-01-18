import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Enterprises from './components/Enterprises'
import Testimonials from './components/Testimonials'
import TrustedBy from './components/TrustedBy'
import FAQ from './components/FAQ'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Enterprises />
      <Testimonials />
      <TrustedBy />
      <FAQ />
      <ContactUs />
      <Footer />
      <ContactModal />
    </div>
  )
}

export default App

