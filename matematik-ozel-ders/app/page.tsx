import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import About from '@/components/About'
import SEOSection from '@/components/SEOSection'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
        <SEOSection />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}