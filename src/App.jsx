import React from 'react'
import Hero from './sections/Hero'
import ShowcaseSection from './sections/ShowcaseSection';
import LogoSection from './sections/LogoSection';
import FeatureCard from './sections/FeatureCard';
import Experience from './sections/Experience';
import TechStack from './sections/TechStack';
import Contact from './sections/Contact';
function App() {
  return (
   <>
    <Hero />
    <ShowcaseSection/>
    <LogoSection />
    <FeatureCard />
    <Experience />
    <TechStack />
    <Contact />
   </>
  )
} 

export default App