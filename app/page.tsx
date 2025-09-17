import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/Hero'
import CtaSection from '../components/Cta'
import Features from '../components/Features'
import About from '../components/About'
import Services from '../components/Services'
import FooterBlock from '@/components/Footer'
import Testimonials from '../components/Testimonials'
import ContactForm from '../components/ContactForm'

export default function Home() {
  return (
    <>
      <Header />
     
      
      <main className="pt-20"> <HeroSection />
      <About />
      
      <Features />
      <Services />
      <CtaSection />
      <Testimonials />
      <ContactForm />
      <FooterBlock />
      </main>
    </>
  );
}
