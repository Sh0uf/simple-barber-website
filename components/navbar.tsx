"use client"

import { Link as ScrollLink } from 'react-scroll'
import { useState, useEffect } from 'react'
import { ThemeSwitcher } from './theme-switcher'

export function Navbar() {
  const [activeSection, setActiveSection] = useState('hem')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hem', 'priser', 'kontakt']
      const scrollPosition = window.scrollY + (window.innerHeight / 2) // Use middle of viewport

      // Check if we're near the bottom of the page
      const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 100
      if (bottom) {
        setActiveSection('kontakt')
        return
      }

      // Check each section
      for (const section of sections.reverse()) { // Check from bottom to top
        const element = document.getElementById(section)
        if (!element) continue

        const rect = element.getBoundingClientRect()
        const sectionTop = rect.top + window.scrollY
        
        if (scrollPosition >= sectionTop) {
          setActiveSection(section)
          break // Stop checking once we find the active section
        }
      }
    }

    handleScroll() // Check initial state
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-1" /> {/* Spacer */}
          <div className="flex space-x-8 text-primary">
            <ScrollLink
              to="hem"
              spy={false}
              smooth={true}
              duration={500}
              offset={-64}
              className={`text-lg font-medium cursor-pointer hover:text-secondary-foreground transition-colors ${
                activeSection === 'hem' ? 'text-foreground font-bold' : ''
              }`}
            >
              Hem
            </ScrollLink>
            <ScrollLink
              to="priser"
              spy={false}
              smooth={true}
              duration={500}
              offset={-64}
              className={`text-lg font-medium cursor-pointer hover:text-secondary-foreground transition-colors ${
                activeSection === 'priser' ? 'text-foreground font-bold' : ''
              }`}
            >
              Priser
            </ScrollLink>
            <ScrollLink
              to="kontakt"
              spy={false}
              smooth={true}
              duration={500}
              offset={-64}
              className={`text-lg font-medium cursor-pointer hover:text-secondary-foreground transition-colors ${
                activeSection === 'kontakt' ? 'text-foreground font-bold' : ''
              }`}
            >
              Kontakt
            </ScrollLink>
          </div>
          <div className="flex-1 flex justify-end">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </nav>
  )
}

