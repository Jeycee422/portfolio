import Header from './components/header'
import Hero from './components/hero'
import Services from './components/services'
import Projects from './components/projects'
import Skills from './components/skills'
import Contact from './components/contact'
import Footer from './components/footer'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <main className="flex h-auto flex-col items-center scroll-smooth relative" style={inter.style}>
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}
