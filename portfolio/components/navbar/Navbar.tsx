"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { GradientButton } from "@/components/ui/gradient-button"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "Home", path: "/" },
  { name: "Education", path: "/Education" },
  { name: "Projects", path: "/Projects" },
  { name: "Experience", path: "/Experience" },
  { name: "About", path: "/About" },
  { name: "Connect", path: "/Connect" }
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  
  // Check if we're on the splash screen (assuming "/" is your splash)
  const isOnSplashScreen = pathname === "/"
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleDownloadResume = () => {
    // The browser will handle the download when clicking on the anchor tag
  }

  // Don't render the navbar if on splash screen
  if (isOnSplashScreen) {
    return null
  }

  return (
    <nav className={`navbar fixed top-0 left-0 w-full z-50 py-4 px-6 md:px-12 ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/SAS-Logo.png" 
            alt="Sudesh Seneviratne" 
            width={50} 
            height={50} 
            className="rounded-full"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link 
              key={item.name}
              href={item.path}
              className="text-white hover:text-purple-400 transition-colors font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Resume Download Button */}
        <div className="hidden md:block">
          <Link href="/Resume/SudeshSeneviratne-Resume.pdf" download>
            <GradientButton onClick={handleDownloadResume}>
              Download Resume
            </GradientButton>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-opacity-20 absolute top-full left-0 right-0 p-5 flex flex-col space-y-4">
          {navItems.map((item) => (
            <Link 
              key={item.name}
              href={item.path}
              className="text-white hover:text-purple-400 transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link href="/Resume/SudeshSeneviratne-Resume.pdf" download>
            <GradientButton 
              onClick={handleDownloadResume}
              className="w-full mt-4"
            >
              Download Resume
            </GradientButton>
          </Link>
        </div>
      )}
    </nav>
  )
}
