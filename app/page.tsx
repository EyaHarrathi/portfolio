"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import {
  Menu,
  X,
  ChevronDown,
  Code,
  Server,
  Database,
  Globe,
  Mail,
  Linkedin,
  Github,
  ChevronLeft,
  ChevronRight,
  Camera,
  Star,
  Zap,
  Sparkles,
  ArrowRight,
  Eye,
  Award,
  Target,
  Rocket,
} from "lucide-react"
import { CVDownload } from "@/components/cv-download"

// Animated Background Component
function AnimatedBackground() {
  return (
    <div className="animated-bg">
      <style jsx>{`
        .animated-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
        }

        .floating-shapes {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .shape {
          position: absolute;
          opacity: 0.1;
          animation: float-shapes 20s infinite linear;
        }

        .shape:nth-child(1) {
          top: 20%;
          left: 10%;
          animation-delay: 0s;
          animation-duration: 25s;
        }

        .shape:nth-child(2) {
          top: 60%;
          left: 80%;
          animation-delay: 5s;
          animation-duration: 30s;
        }

        .shape:nth-child(3) {
          top: 80%;
          left: 20%;
          animation-delay: 10s;
          animation-duration: 35s;
        }

        .shape:nth-child(4) {
          top: 30%;
          left: 70%;
          animation-delay: 15s;
          animation-duration: 28s;
        }

        .gradient-orb {
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(34, 197, 94, 0.3), rgba(59, 130, 246, 0.2), transparent);
          filter: blur(40px);
        }

        @keyframes float-shapes {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-100px) rotate(180deg);
          }
          100% {
            transform: translateY(0px) rotate(360deg);
          }
        }

        .grid-pattern {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: grid-move 20s linear infinite;
        }

        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>

      <div className="grid-pattern"></div>
      <div className="floating-shapes">
        <div className="shape gradient-orb"></div>
        <div className="shape gradient-orb"></div>
        <div className="shape gradient-orb"></div>
        <div className="shape gradient-orb"></div>
      </div>
    </div>
  )
}

// Enhanced Photo Book Component
function PhotoBook({ photos, title, projectImages }: { photos: string[]; title: string; projectImages?: string[] }) {
  const [currentPage, setCurrentPage] = useState(0)
  const [isFlipping, setIsFlipping] = useState(false)

  const nextPage = () => {
    if (currentPage < photos.length - 1 && !isFlipping) {
      setIsFlipping(true)
      setTimeout(() => {
        setCurrentPage(currentPage + 1)
        setIsFlipping(false)
      }, 600)
    }
  }

  const prevPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setIsFlipping(true)
      setTimeout(() => {
        setCurrentPage(currentPage - 1)
        setIsFlipping(false)
      }, 600)
    }
  }

  return (
    <div className="photo-book-container">
      <style jsx>{`
        .photo-book-container {
          perspective: 1500px;
          width: 100%;
          height: 350px;
          position: relative;
          margin: 30px 0;
        }

        .photo-book {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .photo-page {
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(145deg, #1f2937, #374151, #4b5563);
          border-radius: 20px;
          border: 2px solid transparent;
          background-clip: padding-box;
          display: flex;
          align-items: center;
          justify-content: center;
          backface-visibility: hidden;
          box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.5),
            0 0 0 1px rgba(255, 255, 255, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          overflow: hidden;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .photo-page::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(59, 130, 246, 0.1));
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .photo-page:hover::before {
          opacity: 1;
        }

        .photo-page.flipping {
          animation: advanced-flip 1.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .photo-placeholder {
          width: 90%;
          height: 85%;
          background: linear-gradient(135deg, #111827, #1f2937, #374151);
          border: 3px dashed #22c55e;
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #22c55e;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .photo-placeholder::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(34, 197, 94, 0.1), transparent);
          transform: rotate(45deg);
          transition: transform 0.6s ease;
        }

        .photo-placeholder:hover::before {
          transform: rotate(45deg) translate(50%, 50%);
        }

        .photo-placeholder:hover {
          border-color: #3b82f6;
          color: #3b82f6;
          transform: scale(1.02) translateY(-5px);
          box-shadow: 0 20px 40px rgba(59, 130, 246, 0.3);
        }

        .photo-real {
          width: 95%;
          height: 90%;
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
        }

        .photo-real::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, rgba(34, 197, 94, 0.1), rgba(59, 130, 246, 0.1));
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 1;
        }

        .photo-real:hover::before {
          opacity: 1;
        }

        .photo-real img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .photo-real:hover img {
          transform: scale(1.1);
        }

        .page-controls {
          position: absolute;
          bottom: -60px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 15px;
          align-items: center;
          background: rgba(17, 24, 39, 0.8);
          backdrop-filter: blur(10px);
          padding: 12px 20px;
          border-radius: 50px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .page-indicator {
          display: flex;
          gap: 8px;
        }

        .page-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(107, 114, 128, 0.5);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }

        .page-dot.active {
          background: linear-gradient(135deg, #22c55e, #3b82f6);
          transform: scale(1.3);
          box-shadow: 0 0 20px rgba(34, 197, 94, 0.5);
        }

        .page-dot:hover:not(.active) {
          background: rgba(107, 114, 128, 0.8);
          transform: scale(1.1);
        }

        @keyframes advanced-flip {
          0% { 
            transform: rotateY(0deg) scale(1);
            filter: brightness(1);
          }
          25% { 
            transform: rotateY(-45deg) scale(0.95);
            filter: brightness(1.2);
          }
          50% { 
            transform: rotateY(-90deg) scale(0.9);
            filter: brightness(1.4);
          }
          75% { 
            transform: rotateY(-135deg) scale(0.95);
            filter: brightness(1.2);
          }
          100% { 
            transform: rotateY(-180deg) scale(1);
            filter: brightness(1);
          }
        }

        .book-spine {
          position: absolute;
          left: -8px;
          top: 15px;
          bottom: 15px;
          width: 16px;
          background: linear-gradient(to bottom, #22c55e, #3b82f6, #8b5cf6);
          border-radius: 8px 0 0 8px;
          box-shadow: 
            inset 2px 0 5px rgba(0, 0, 0, 0.3),
            0 0 20px rgba(34, 197, 94, 0.3);
          animation: spine-glow 3s ease-in-out infinite;
        }

        @keyframes spine-glow {
          0%, 100% { box-shadow: inset 2px 0 5px rgba(0, 0, 0, 0.3), 0 0 20px rgba(34, 197, 94, 0.3); }
          50% { box-shadow: inset 2px 0 5px rgba(0, 0, 0, 0.3), 0 0 30px rgba(59, 130, 246, 0.5); }
        }
      `}</style>

      <div className="photo-book">
        <div className="book-spine"></div>
        <div className={`photo-page ${isFlipping ? "flipping" : ""}`}>
          {projectImages && projectImages[currentPage] ? (
            <div className="photo-real">
              <Image
                src={projectImages[currentPage] || "/placeholder.svg"}
                alt={`${title} - ${photos[currentPage]}`}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <div className="photo-placeholder">
              <Camera className="h-16 w-16 mb-6" />
              <p className="text-center font-bold text-lg">{title}</p>
              <p className="text-sm text-gray-400 mt-3">
                Photo {currentPage + 1} of {photos.length}
              </p>
              <p className="text-xs text-gray-500 mt-2">Click to add image</p>
            </div>
          )}
        </div>
      </div>

      <div className="page-controls">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevPage}
          disabled={currentPage === 0}
          className="text-green-400 hover:text-green-300 disabled:opacity-30 hover:bg-green-400/10 transition-all duration-300"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <div className="page-indicator">
          {photos.map((_, index) => (
            <div
              key={index}
              className={`page-dot ${index === currentPage ? "active" : ""}`}
              onClick={() => {
                if (index !== currentPage) {
                  setIsFlipping(true)
                  setTimeout(() => {
                    setCurrentPage(index)
                    setIsFlipping(false)
                  }, 300)
                }
              }}
            />
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={nextPage}
          disabled={currentPage === photos.length - 1}
          className="text-green-400 hover:text-green-300 disabled:opacity-30 hover:bg-green-400/10 transition-all duration-300"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}

// Ultra Enhanced Profile Photo Component
function ProfilePhoto() {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    setMousePosition({
      x: (e.clientX - centerX) / 8,
      y: (e.clientY - centerY) / 8,
    })
  }

  return (
    <div className="profile-photo-container">
      <style jsx>{`
        .profile-photo-container {
          position: relative;
          width: 300px;
          height: 300px;
          margin: 0 auto;
          cursor: pointer;
        }

        .profile-outer-ring {
          position: absolute;
          inset: -30px;
          border-radius: 50%;
          background: conic-gradient(from 0deg, #22c55e, #3b82f6, #8b5cf6, #ef4444, #f59e0b, #22c55e);
          animation: rotate 12s linear infinite;
          opacity: 0.9;
          filter: blur(2px);
        }

        .profile-middle-ring {
          position: absolute;
          inset: -15px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(34, 197, 94, 0.4), rgba(59, 130, 246, 0.4));
          backdrop-filter: blur(20px);
          animation: pulse-ring 4s ease-in-out infinite;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .profile-frame {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: linear-gradient(135deg, #22c55e, #3b82f6, #8b5cf6, #ef4444);
          padding: 8px;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          z-index: 2;
          box-shadow: 
            0 0 40px rgba(34, 197, 94, 0.5),
            0 0 80px rgba(59, 130, 246, 0.3),
            0 0 120px rgba(139, 92, 246, 0.2),
            inset 0 0 30px rgba(255, 255, 255, 0.1);
        }

        .profile-frame:hover {
          transform: scale(1.12) translateZ(0);
          box-shadow: 
            0 0 60px rgba(34, 197, 94, 0.7),
            0 0 120px rgba(59, 130, 246, 0.5),
            0 0 180px rgba(139, 92, 246, 0.3),
            0 30px 60px rgba(0, 0, 0, 0.4),
            inset 0 0 40px rgba(255, 255, 255, 0.2);
        }

        .profile-inner {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          position: relative;
          background: linear-gradient(135deg, #1f2937, #374151);
          border: 2px solid rgba(255, 255, 255, 0.1);
        }

        .profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 20%;
          border-radius: 50%;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          filter: brightness(1.1) contrast(1.2) saturate(1.3);
        }

        .profile-image:hover {
          transform: scale(1.08);
          filter: brightness(1.3) contrast(1.3) saturate(1.4);
        }

        .profile-glow {
          position: absolute;
          inset: -50px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(34, 197, 94, 0.4) 0%, rgba(59, 130, 246, 0.3) 50%, transparent 70%);
          animation: glow-pulse 6s ease-in-out infinite;
          pointer-events: none;
        }

        .profile-particles {
          position: absolute;
          inset: -60px;
          border-radius: 50%;
          overflow: hidden;
          pointer-events: none;
        }

        .particle {
          position: absolute;
          width: 6px;
          height: 6px;
          background: linear-gradient(45deg, #22c55e, #3b82f6);
          border-radius: 50%;
          animation: float-particle 8s ease-in-out infinite;
          box-shadow: 0 0 10px currentColor;
        }

        .particle:nth-child(1) { top: 15%; left: 8%; animation-delay: 0s; }
        .particle:nth-child(2) { top: 85%; left: 15%; animation-delay: 1.5s; }
        .particle:nth-child(3) { top: 25%; right: 12%; animation-delay: 3s; }
        .particle:nth-child(4) { bottom: 20%; right: 8%; animation-delay: 4.5s; }
        .particle:nth-child(5) { top: 65%; left: 3%; animation-delay: 6s; }
        .particle:nth-child(6) { bottom: 45%; right: 3%; animation-delay: 7.5s; }
        .particle:nth-child(7) { top: 45%; left: 85%; animation-delay: 2s; }
        .particle:nth-child(8) { bottom: 65%; left: 80%; animation-delay: 3.5s; }

        .profile-status {
          position: absolute;
          bottom: 20px;
          right: 20px;
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, #22c55e, #16a34a);
          border: 6px solid #1f2937;
          border-radius: 50%;
          animation: status-pulse 3s ease-in-out infinite;
          z-index: 3;
          box-shadow: 0 0 20px rgba(34, 197, 94, 0.6);
        }

        .profile-badge {
          position: absolute;
          top: -15px;
          right: -15px;
          background: linear-gradient(135deg, #3b82f6, #1d4ed8);
          color: white;
          padding: 10px 16px;
          border-radius: 25px;
          font-size: 14px;
          font-weight: 700;
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.5);
          animation: badge-float 4s ease-in-out infinite;
          z-index: 3;
          border: 2px solid rgba(255, 255, 255, 0.2);
        }

        .achievement-rings {
          position: absolute;
          inset: -40px;
          border-radius: 50%;
          border: 2px solid transparent;
          background: linear-gradient(45deg, rgba(34, 197, 94, 0.3), rgba(59, 130, 246, 0.3)) border-box;
          animation: achievement-rotate 15s linear infinite;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes achievement-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }

        @keyframes pulse-ring {
          0%, 100% { 
            transform: scale(1);
            opacity: 0.9;
          }
          50% { 
            transform: scale(1.08);
            opacity: 0.7;
          }
        }

        @keyframes glow-pulse {
          0%, 100% {
            opacity: 0.7;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.15);
          }
        }

        @keyframes float-particle {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.8;
          }
          25% {
            transform: translateY(-30px) rotate(90deg);
            opacity: 1;
          }
          50% {
            transform: translateY(-15px) rotate(180deg);
            opacity: 0.9;
          }
          75% {
            transform: translateY(-25px) rotate(270deg);
            opacity: 1;
          }
        }

        @keyframes status-pulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 20px rgba(34, 197, 94, 0.6);
          }
          50% {
            transform: scale(1.15);
            box-shadow: 0 0 30px rgba(34, 197, 94, 0.8);
          }
        }

        @keyframes badge-float {
          0%, 100% {
            transform: translateY(0px) rotate(-8deg);
          }
          50% {
            transform: translateY(-8px) rotate(8deg);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .floating {
          animation: float 6s ease-in-out infinite;
        }

        .profile-frame.hovered {
          animation: none;
        }

        .tilt-effect {
          transform-style: preserve-3d;
          transition: transform 0.2s ease-out;
        }
      `}</style>

      {/* Achievement rings */}
      <div className="achievement-rings"></div>

      {/* Outer rotating ring */}
      <div className="profile-outer-ring"></div>

      {/* Middle pulsing ring */}
      <div className="profile-middle-ring"></div>

      {/* Glow effect */}
      <div className="profile-glow"></div>

      {/* Floating particles */}
      <div className="profile-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      <div
        className={`profile-frame floating tilt-effect ${isHovered ? "hovered" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        style={{
          transform: isHovered
            ? `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg) scale(1.12)`
            : undefined,
        }}
      >
        <div className="profile-inner">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/eyaaaaaaaaaa-removebg-preview-e0bL0COP861nQSrZIMZvP3vmfxmKFg.png"
            alt="Eya Harrathi"
            width={300}
            height={300}
            className="profile-image"
            priority
          />
        </div>

        {/* Online status indicator */}
        <div className="profile-status"></div>

        {/* Developer badge */}
        <div className="profile-badge">
          <Sparkles className="inline w-4 h-4 mr-1" />
          Dev
        </div>
      </div>
    </div>
  )
}

// Scroll Progress Indicator
function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
      <div
        className="h-full bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-300 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  )
}

// Enhanced Intersection Observer Hook
function useIntersectionObserver(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold])

  return [ref, isVisible] as const
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [heroRef, heroVisible] = useIntersectionObserver(0.3)
  const [aboutRef, aboutVisible] = useIntersectionObserver(0.2)
  const [portfolioRef, portfolioVisible] = useIntersectionObserver(0.1)
  const [servicesRef, servicesVisible] = useIntersectionObserver(0.1)
  const [contactRef, contactVisible] = useIntersectionObserver(0.2)

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      const sections = ["home", "about", "portfolio", "services", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const navItems = [
    { id: "home", label: "Home", icon: Rocket },
    { id: "about", label: "About", icon: Target },
    { id: "portfolio", label: "Portfolio", icon: Star },
    { id: "services", label: "Services", icon: Zap },
    { id: "contact", label: "Contact", icon: Mail },
  ]

  // Project photo arrays
  const ecomarketPhotos = [
    "homepage",
    "admin dashboard",
    "shopping cart",
    "notifications",
    "recommendations",
    "sales strategy",
    "login",
  ]
  const saltaaPhotos = ["home", "menu overview", "menu details", "contact", "location", "footer"]

  // Real project images
  const ecomarketImages = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/home%20page.PNG-D4Hn7gmL8qX79wSmLTXjjKVXhWZUCg.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dash%20admin.PNG-Ln7SHM5sSjXBLTcU7lIDQy9F2pXk4d.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/panier.PNG-AnpiuJkCgxfXkTcjuCtGMuWFD3muhY.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/notif.PNG-dD4LLSo1JriPD77QyYX0YIpKtvPmdF.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/recomendation.PNG-Sp50FFZY0l3xfuXms9upoq5mLo64MR.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/strategie%20vente.PNG-DyoJhnW11avfSaVtiTVvrxRNsLD8kK.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/login.PNG-jG3mYpNvveLC0WfBhqTAUaxPRViC1C.png",
  ]

  const saltaaImages = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/homee.PNG-CANFObOxv8T9DTCMw0fp8mrmmZ608B.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/notre%20menu.PNG-xjHdVixxuoNCIqT4ybln2ZoTVFVNAF.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/menu.PNG-ehv1uIZYS9dOSjGQetHxPHfLOWNhkF.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/contact.PNG-jZaFYp1XeqCweLxQ4Iuw6pKuY2zL0D.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/localisation.PNG-pRPWA7EMRuiZTfvqmOSfhEo0OZqsrw.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/footer.PNG-Nj5KtzxNFBoL9zzMtkYz4b8djHaA49.png",
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <ScrollProgress />

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes slideInFromBottom {
          from {
            opacity: 0;
            transform: translateY(100px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }

        .animate-fadeInLeft {
          animation: fadeInLeft 1s ease-out forwards;
        }

        .animate-fadeInRight {
          animation: fadeInRight 1s ease-out forwards;
        }

        .animate-fadeInScale {
          animation: fadeInScale 1s ease-out forwards;
        }

        .animate-slideInFromBottom {
          animation: slideInFromBottom 1s ease-out forwards;
        }

        .animate-pulse-custom {
          animation: pulse 3s infinite;
        }

        .gradient-text {
          background: linear-gradient(135deg, #22c55e, #3b82f6, #8b5cf6, #ef4444);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          background-size: 300% 300%;
          animation: gradient-shift 4s ease-in-out infinite;
        }

        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .card-hover {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid transparent;
        }

        .card-hover:hover {
          transform: translateY(-15px) scale(1.02);
          box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.4),
            0 0 0 1px rgba(34, 197, 94, 0.2);
          border-color: rgba(34, 197, 94, 0.3);
        }

        .tech-badge {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .tech-badge::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }

        .tech-badge:hover::before {
          left: 100%;
        }

        .tech-badge:hover {
          transform: scale(1.15) translateY(-2px);
          background: linear-gradient(135deg, #22c55e, #3b82f6);
          box-shadow: 0 10px 25px rgba(34, 197, 94, 0.4);
        }

        .nav-link {
          position: relative;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          padding: 8px 16px;
          border-radius: 25px;
        }

        .nav-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(59, 130, 246, 0.1));
          border-radius: 25px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .nav-link:hover::before,
        .nav-link.active::before {
          opacity: 1;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(135deg, #22c55e, #3b82f6);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translateX(-50%);
        }

        .nav-link.active::after,
        .nav-link:hover::after {
          width: 80%;
        }

        .project-card {
          background: linear-gradient(145deg, #1f2937, #374151, #4b5563);
          border: 1px solid rgba(107, 114, 128, 0.3);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .project-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(34, 197, 94, 0.05), rgba(59, 130, 246, 0.05));
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .project-card:hover::before {
          opacity: 1;
        }

        .project-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.5),
            0 0 0 1px rgba(34, 197, 94, 0.3);
          border-color: rgba(34, 197, 94, 0.5);
        }

        .btn-primary {
          background: linear-gradient(135deg, #22c55e, #3b82f6);
          border: none;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .btn-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.6s ease;
        }

        .btn-primary:hover::before {
          left: 100%;
        }

        .btn-primary:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 15px 35px rgba(34, 197, 94, 0.4);
        }

        .section-reveal {
          opacity: 0;
          transform: translateY(50px);
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .section-reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .stagger-animation > * {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .stagger-animation > *:nth-child(1) { animation-delay: 0.1s; }
        .stagger-animation > *:nth-child(2) { animation-delay: 0.2s; }
        .stagger-animation > *:nth-child(3) { animation-delay: 0.3s; }
        .stagger-animation > *:nth-child(4) { animation-delay: 0.4s; }
        .stagger-animation > *:nth-child(5) { animation-delay: 0.5s; }
        .stagger-animation > *:nth-child(6) { animation-delay: 0.6s; }

        .glass-effect {
          background: rgba(17, 24, 39, 0.8);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .text-glow {
          text-shadow: 0 0 20px rgba(34, 197, 94, 0.5);
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-bold gradient-text">
              <Sparkles className="inline w-6 h-6 mr-2" />
              Eya Harrathi
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-2">
              {navItems.map((item) => {
                const IconComponent = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`nav-link flex items-center space-x-2 text-sm font-medium ${
                      activeSection === item.id ? "active text-green-400" : "text-gray-300 hover:text-white"
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                )
              })}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:bg-green-400/10"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden glass-effect border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => {
                const IconComponent = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center space-x-3 px-3 py-3 text-base font-medium w-full text-left rounded-lg transition-all duration-300 ${
                      activeSection === item.id
                        ? "text-green-400 bg-green-400/10"
                        : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span>{item.label}</span>
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <AnimatedBackground />
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8" ref={heroRef}>
          <div className={`${heroVisible ? "animate-fadeInUp" : "opacity-0"}`}>
            <div className="mb-12 mt-20 animate-pulse-custom">
              <ProfilePhoto />
            </div>
            <h1 className="text-5xl sm:text-7xl font-bold mb-8">
              <span className="gradient-text text-glow">Eya Harrathi</span>
            </h1>
            <p className="text-2xl sm:text-3xl text-gray-300 mb-10 font-light">
              Software Developer & Full-Stack Engineer
            </p>
            <p className="text-xl text-gray-400 mb-16 max-w-3xl mx-auto leading-relaxed">
              Passionate about creating innovative applications and bringing ideas to life through code. Specialized in
              modern web technologies and full-stack development with a focus on exceptional user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                onClick={() => scrollToSection("portfolio")}
                className="btn-primary text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <Eye className="w-5 h-5 mr-2" />
                View My Work
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-10 w-10 text-green-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-gradient-to-br from-gray-800 to-gray-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={aboutRef}>
          <div className={`text-center mb-20 ${aboutVisible ? "animate-fadeInUp" : "opacity-0"}`}>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">About Me</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover my journey, skills, and passion for creating exceptional digital experiences
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={`${aboutVisible ? "animate-fadeInLeft" : "opacity-0"}`}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold mb-6 text-green-400 flex items-center">
                    <Award className="w-8 h-8 mr-3" />
                    Developer specialized in software engineering
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                    I am an official graduate of ISIGK with a strong passion for software development. My expertise
                    spans across full-stack development, where I create innovative and efficient solutions for complex
                    problems.
                  </p>
                </div>

                <div>
                  <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                    With extensive freelance experience, I have developed a versatile skill set that allows me to adapt
                    to various technologies and project requirements. I specialize in creating modern web applications
                    that are both functional and visually appealing.
                  </p>
                </div>

                <div>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    My approach combines technical expertise with creative problem-solving, ensuring that every project
                    I work on meets the highest standards of quality and user experience.
                  </p>
                </div>

                <div className="mt-8">
                  <CVDownload />
                </div>
              </div>
            </div>

            <div className={`${aboutVisible ? "animate-fadeInRight" : "opacity-0"}`}>
              <div className="grid grid-cols-2 gap-8 stagger-animation">
                <div className="text-center p-8 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl card-hover border border-gray-600">
                  <Code className="h-16 w-16 text-green-400 mx-auto mb-6" />
                  <h4 className="text-xl font-bold mb-4">Frontend</h4>
                  <p className="text-gray-400">React.js, Next.js, HTML5, CSS3, TypeScript</p>
                </div>
                <div className="text-center p-8 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl card-hover border border-gray-600">
                  <Server className="h-16 w-16 text-blue-400 mx-auto mb-6" />
                  <h4 className="text-xl font-bold mb-4">Backend</h4>
                  <p className="text-gray-400">Spring Boot, Node.js, REST APIs, Microservices</p>
                </div>
                <div className="text-center p-8 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl card-hover border border-gray-600">
                  <Database className="h-16 w-16 text-purple-400 mx-auto mb-6" />
                  <h4 className="text-xl font-bold mb-4">Database</h4>
                  <p className="text-gray-400">MongoDB, Neo4j, MySQL, PostgreSQL</p>
                </div>
                <div className="text-center p-8 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl card-hover border border-gray-600">
                  <Globe className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
                  <h4 className="text-xl font-bold mb-4">Full-Stack</h4>
                  <p className="text-gray-400">End-to-end development, DevOps, Cloud</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 bg-gray-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={portfolioRef}>
          <div className={`text-center mb-20 ${portfolioVisible ? "animate-fadeInUp" : "opacity-0"}`}>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">My Portfolio</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore my recent projects that showcase advanced full-stack development skills and innovative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* EcoMarket Project */}
            <div className={`project-card rounded-3xl p-8 ${portfolioVisible ? "animate-fadeInLeft" : "opacity-0"}`}>
              <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-3xl font-bold text-green-400">EcoMarket</h3>
                  <div className="flex items-center space-x-2 text-yellow-400">
                    <Star className="w-5 h-5 fill-current" />
                    <span className="font-semibold">Featured</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  An innovative e-commerce platform based on graph marketing with friend-relationship features. This
                  project demonstrates advanced full-stack development skills and graph database implementation with
                  AI-powered recommendations.
                </p>
              </div>

              <PhotoBook photos={ecomarketPhotos} title="EcoMarket Screenshots" projectImages={ecomarketImages} />

              <div className="mb-8 mt-20">
                <h4 className="text-xl font-bold mb-4 text-blue-400 flex items-center">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Key Features:
                </h4>
                <ul className="text-gray-300 space-y-3 text-lg">
                  <li className="flex items-center">
                    <ChevronRight className="w-5 h-5 text-green-400 mr-2" />
                    AI-powered sales strategy recommendations
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-5 h-5 text-green-400 mr-2" />
                    Graph-based professional networking
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-5 h-5 text-green-400 mr-2" />
                    Comprehensive admin dashboard with analytics
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-5 h-5 text-green-400 mr-2" />
                    Real-time notifications system
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-5 h-5 text-green-400 mr-2" />
                    Advanced shopping cart and checkout
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-5 h-5 text-green-400 mr-2" />
                    Multilingual support (French/Arabic)
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-bold mb-4 text-blue-400">Technologies Used:</h4>
                <div className="flex flex-wrap gap-3">
                  {["React.js", "Spring Boot", "Neo4j", "MongoDB", "Node.js", "AI/ML"].map((tech) => (
                    <span
                      key={tech}
                      className="tech-badge px-4 py-2 bg-gray-700 text-green-400 rounded-full text-sm font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  variant="outline"
                  className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 bg-transparent px-6 py-3 rounded-full font-semibold transition-all duration-300"
                  onClick={() => window.open("https://github.com/EyaHarrathi/eya-project.git", "_blank")}
                >
                  <Github className="h-5 w-5 mr-2" />
                  Source Code
                </Button>
              </div>
            </div>

            {/* Saltaa Project */}
            <div className={`project-card rounded-3xl p-8 ${portfolioVisible ? "animate-fadeInRight" : "opacity-0"}`}>
              <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-3xl font-bold text-green-400">Saltaa</h3>
                  <div className="flex items-center space-x-2 text-blue-400">
                    <Zap className="w-5 h-5" />
                    <span className="font-semibold">Restaurant</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  A modern restaurant website showcasing front-end and full-stack capabilities. Features elegant design,
                  responsive layout, and seamless user experience for a traditional Tunisian restaurant.
                </p>
              </div>

              <PhotoBook photos={saltaaPhotos} title="Saltaa Screenshots" projectImages={saltaaImages} />

              <div className="mb-8 mt-20">
                <h4 className="text-xl font-bold mb-4 text-blue-400 flex items-center">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Key Features:
                </h4>
                <ul className="text-gray-300 space-y-3 text-lg">
                  <li className="flex items-center">
                    <ChevronRight className="w-5 h-5 text-green-400 mr-2" />
                    Bilingual website (Arabic/French)
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-5 h-5 text-green-400 mr-2" />
                    Interactive menu with traditional dishes
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-5 h-5 text-green-400 mr-2" />
                    Location integration with Google Maps
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-5 h-5 text-green-400 mr-2" />
                    Contact forms and social media integration
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-5 h-5 text-green-400 mr-2" />
                    Mobile-responsive design
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-5 h-5 text-green-400 mr-2" />
                    Traditional Tunisian restaurant branding
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-bold mb-4 text-blue-400">Technologies Used:</h4>
                <div className="flex flex-wrap gap-3">
                  {["React.js", "Node.js", "MongoDB", "CSS3", "JavaScript"].map((tech) => (
                    <span
                      key={tech}
                      className="tech-badge px-4 py-2 bg-gray-700 text-green-400 rounded-full text-sm font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  variant="outline"
                  className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 bg-transparent px-6 py-3 rounded-full font-semibold transition-all duration-300"
                  onClick={() => window.open("https://github.com/EyaHarrathi/saltaa.git", "_blank")}
                >
                  <Github className="h-5 w-5 mr-2" />
                  Source Code
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-gradient-to-br from-gray-800 to-gray-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={servicesRef}>
          <div className={`text-center mb-20 ${servicesVisible ? "animate-fadeInUp" : "opacity-0"}`}>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">Services</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              I offer comprehensive application development services using cutting-edge technologies and best practices
            </p>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 stagger-animation ${servicesVisible ? "" : "opacity-0"}`}
          >
            <Card className="bg-gradient-to-br from-gray-700 to-gray-800 border-gray-600 card-hover rounded-2xl overflow-hidden">
              <CardContent className="p-8 text-center">
                <div className="bg-green-400/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Code className="h-10 w-10 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Frontend Development</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Creating responsive and interactive user interfaces using React.js, Next.js, and modern CSS frameworks
                  with exceptional attention to detail.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-700 to-gray-800 border-gray-600 card-hover rounded-2xl overflow-hidden">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-400/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Server className="h-10 w-10 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Backend Development</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Building robust server-side applications with Spring Boot, Node.js, and RESTful API development with
                  scalable architecture.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-700 to-gray-800 border-gray-600 card-hover rounded-2xl overflow-hidden">
              <CardContent className="p-8 text-center">
                <div className="bg-purple-400/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Database className="h-10 w-10 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Database Design</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Designing and implementing efficient database solutions using MongoDB, Neo4j, and relational databases
                  with optimal performance.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-700 to-gray-800 border-gray-600 card-hover rounded-2xl overflow-hidden">
              <CardContent className="p-8 text-center">
                <div className="bg-yellow-400/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-10 w-10 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Full-Stack Solutions</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  End-to-end application development from concept to deployment, ensuring seamless integration and
                  exceptional user experience.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-700 to-gray-800 border-gray-600 card-hover rounded-2xl overflow-hidden">
              <CardContent className="p-8 text-center">
                <div className="bg-red-400/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Code className="h-10 w-10 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">E-commerce Development</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Building scalable e-commerce platforms with advanced features like graph-based recommendations and
                  AI-powered analytics.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-700 to-gray-800 border-gray-600 card-hover rounded-2xl overflow-hidden">
              <CardContent className="p-8 text-center">
                <div className="bg-indigo-400/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Server className="h-10 w-10 text-indigo-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Consulting & Support</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Technical consulting, code reviews, and ongoing support for your development projects with expert
                  guidance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gray-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={contactRef}>
          <div className={`text-center mb-20 ${contactVisible ? "animate-fadeInUp" : "opacity-0"}`}>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">Get In Touch</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to start your next project? Let's discuss how I can help bring your innovative ideas to life with
              cutting-edge technology.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className={`${contactVisible ? "animate-fadeInLeft" : "opacity-0"}`}>
              <h3 className="text-3xl font-bold mb-8 text-green-400">Contact Information</h3>

              <div className="space-y-8">
                <div className="flex items-center space-x-6 p-6 bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl card-hover">
                  <div className="bg-green-400/10 p-4 rounded-full">
                    <Mail className="h-8 w-8 text-green-400" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-lg font-semibold">Email</p>
                    <a
                      href="mailto:harrathia79@gmail.com"
                      className="text-white hover:text-green-400 transition-colors text-xl"
                    >
                      harrathia79@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-6 p-6 bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl card-hover">
                  <div className="bg-blue-400/10 p-4 rounded-full">
                    <Linkedin className="h-8 w-8 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-lg font-semibold">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/in/eya-harrathi-253653265"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-400 transition-colors text-xl"
                    >
                      linkedin.com/in/eya-harrathi-253653265
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-6 p-6 bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl card-hover">
                  <div className="bg-purple-400/10 p-4 rounded-full">
                    <Github className="h-8 w-8 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-lg font-semibold">GitHub</p>
                    <a
                      href="https://github.com/EyaHarrathi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-purple-400 transition-colors text-xl"
                    >
                      github.com/EyaHarrathi
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex space-x-6">
                <a
                  href="https://www.linkedin.com/in/eya-harrathi-253653265"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-blue-600 hover:bg-blue-700 rounded-full transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin className="h-8 w-8" />
                </a>
                <a
                  href="https://github.com/EyaHarrathi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-700 hover:bg-gray-600 rounded-full transition-all duration-300 transform hover:scale-110"
                >
                  <Github className="h-8 w-8" />
                </a>
                <a
                  href="mailto:harrathia79@gmail.com"
                  className="p-4 bg-green-600 hover:bg-green-700 rounded-full transition-all duration-300 transform hover:scale-110"
                >
                  <Mail className="h-8 w-8" />
                </a>
              </div>
            </div>

            <div className={`${contactVisible ? "animate-fadeInRight" : "opacity-0"}`}>
              <Card className="bg-gradient-to-br from-gray-800 to-gray-700 border-gray-600 rounded-3xl overflow-hidden">
                <CardContent className="p-10">
                  <h3 className="text-3xl font-bold mb-8 text-green-400">Send a Message</h3>
                  <form className="space-y-8">
                    <div>
                      <label htmlFor="name" className="block text-lg font-semibold text-gray-300 mb-3">
                        Name
                      </label>
                      <Input
                        id="name"
                        type="text"
                        className="bg-gray-700 border-gray-600 text-white focus:border-green-400 h-14 text-lg rounded-xl"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-lg font-semibold text-gray-300 mb-3">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        className="bg-gray-700 border-gray-600 text-white focus:border-green-400 h-14 text-lg rounded-xl"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-lg font-semibold text-gray-300 mb-3">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        type="text"
                        className="bg-gray-700 border-gray-600 text-white focus:border-green-400 h-14 text-lg rounded-xl"
                        placeholder="Project inquiry"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-lg font-semibold text-gray-300 mb-3">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        rows={6}
                        className="bg-gray-700 border-gray-600 text-white focus:border-green-400 text-lg rounded-xl"
                        placeholder="Tell me about your project..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full btn-primary text-white py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                      <Mail className="w-6 h-6 mr-2" />
                      Send Message
                      <ArrowRight className="w-6 h-6 ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 border-t border-gray-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-6 h-6 text-green-400 mr-2" />
              <span className="text-2xl font-bold gradient-text">Eya Harrathi</span>
            </div>
            <p className="text-gray-400 text-lg">
              © 2024 Eya Harrathi. All rights reserved. Built with passion and modern technologies.
            </p>
            <p className="text-gray-500 mt-2">Crafting exceptional digital experiences, one line of code at a time.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
