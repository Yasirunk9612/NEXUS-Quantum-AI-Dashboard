"use client"

import React, { useEffect, useState } from 'react'
import { Home, BarChart3, Zap, FileText, TrendingUp, Settings, Search, Bell, Moon, Plus, Send, Shield, MessageSquare } from 'lucide-react'

// Enhanced color palette with vibrant neons
const theme = {
  bg: 'bg-[#0A0A0A]',
  panel: 'bg-[#0F0F0F]/90',
  glass: 'bg-white/5 backdrop-blur-2xl',
  cyan: 'text-[#00F2FF]',
  purple: 'text-[#A855F7]',
  pink: 'text-[#EC4899]',
  blue: 'text-[#3B82F6]',
  neonBorder: 'border-[#00F2FF]/50',
  gradient: 'from-[#00F2FF] via-[#A855F7] to-[#EC4899]'
}

function FloatingParticles() {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const newParticles = [...Array(15)].map((_, i) => ({
      width: Math.random() * 4 + 2,
      height: Math.random() * 4 + 2,
      background: `rgba(${Math.random() * 100 + 155}, ${Math.random() * 100 + 155}, 255, ${Math.random() * 0.2 + 0.1})`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${Math.random() * 8 + 8}s`
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-float"
          style={particle}
        />
      ))}
    </div>
  )
}

function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom right, #0A0A0A, #0F0F0F, #1A0F2E)' }} />
      <div className="absolute -top-1/2 -left-1/2 w-full h-full animate-pulse-slow" style={{ background: 'radial-gradient(circle at 20% 80%, rgba(0, 242, 255, 0.1) 0%, transparent 50%)' }} />
      <div className="absolute -bottom-1/2 -right-1/2 w-full h-full animate-pulse-slower" style={{ background: 'radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.08) 0%, transparent 50%)' }} />
      <FloatingParticles />
    </div>
  )
}

function IconLogo() {
  return (
    <div className="relative group">
      <div className="w-12 h-12 rounded-2xl flex items-center justify-center ring-2 ring-[#00F2FF]/30 backdrop-blur-xl" style={{ background: 'linear-gradient(to bottom right, rgba(0, 242, 255, 0.2), rgba(236, 73, 153, 0.2))' }}>
        <div className="absolute inset-0 animate-pulse rounded-2xl" style={{ background: 'linear-gradient(to right, rgba(0, 242, 255, 0.1), transparent, rgba(236, 73, 153, 0.1))' }} />
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="relative z-10">
          <path d="M3 12h18M12 3v18" stroke="#00F2FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="12" r="2" fill="#00F2FF" className="animate-pulse" />
        </svg>
      </div>
      <div className="absolute -inset-1 bg-linear-to-r from-[#00F2FF] to-[#EC4899] rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-all duration-500" />
    </div>
  )
}

function Sidebar({ isOpen, onClose }){
  const nav = [
    {label:'Dashboard', icon: Home},
    {label:'Analytics', icon: BarChart3},
    {label:'AI Tools', icon: Zap},
    {label:'Logs', icon: FileText},
    {label:'Activity', icon: TrendingUp},
    {label:'Settings', icon: Settings}
  ]
  const [active, setActive] = React.useState('Dashboard')
  const activeIndex = nav.findIndex(n => n.label === active)

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside className={`w-64 flex flex-col p-6 gap-8 h-screen sticky top-0 max-lg:fixed max-lg:left-0 max-lg:top-0 max-lg:z-50 max-lg:bg-[#0A0A0A]/95 max-lg:backdrop-blur-2xl transition-transform duration-300 ease-in-out ${
        isOpen ? 'max-lg:translate-x-0' : 'max-lg:-translate-x-full'
      }`}>
        {/* Close button for mobile */}
        <button 
          onClick={onClose}
          className="lg:hidden self-end p-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#00F2FF]/30 transition-all duration-300 hover:scale-110 group mb-4"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white/80 group-hover:text-[#00F2FF] transition-colors">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <IconLogo />
          <div>
            <div className="text-lg font-black bg-linear-to-r from-[#00F2FF] to-[#EC4899] bg-clip-text text-transparent">
              NEXUS
            </div>
            <div className="text-xs text-white/40 font-medium">QUANTUM AI</div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 flex flex-col gap-2 relative">
          {/* Animated active indicator */}
          <div 
            className="absolute left-0 w-1 rounded-r-xl transition-transform duration-500 ease-in-out shadow-lg shadow-[#00F2FF]/30"
            style={{ 
              background: 'linear-gradient(to bottom, #00F2FF, #EC4899)',
              transform: `translateY(${activeIndex * 80 + 12}px)`,
              height: '48px'
            }} 
          />

          {nav.map((n,i)=> (
            <button
              key={i}
              onClick={() => {
                setActive(n.label)
                onClose() // Close sidebar on mobile after selection
              }}
              className={`group relative flex items-center gap-4 p-4 rounded-2xl transform transition-all duration-300 ease-out ${
                active === n.label 
                  ? 'scale-105 border border-[#00F2FF]/20 shadow-2xl shadow-[#00F2FF]/10' 
                  : 'hover:translate-x-2 bg-white/5 border border-transparent hover:border-white/5'
              }`}
              style={active === n.label ? { background: 'linear-gradient(to right, rgba(0, 242, 255, 0.1), rgba(236, 73, 153, 0.1))' } : {}}
            >
              {/* Icon */}
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                active === n.label 
                  ? 'bg-linear-to-r from-[#00F2FF] to-[#EC4899] text-white shadow-lg' 
                  : 'bg-white/10 text-white/60 group-hover:text-[#00F2FF] group-hover:bg-[#00F2FF]/10'
              }`}
              style={active === n.label ? { background: 'linear-gradient(to right, #00F2FF, #EC4899)' } : {}}
              >
                <n.icon className="w-5 h-5 shrink-0" />
              </div>

              {/* Label */}
              <span className={`text-sm font-semibold transition-colors duration-300 ${
                active === n.label ? 'text-white' : 'text-white/70 group-hover:text-white'
              }`}>
                {n.label}
              </span>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-[#00F2FF] to-[#EC4899] opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
            </button>
          ))}
        </nav>

        {/* Bottom Section */}
        <div className="pt-4 border-t border-white/10">
          {/* AI Power Meter */}
          <div className="mb-6">
            <div className="flex items-center justify-between text-xs mb-3">
              <span className="text-white/60 font-medium">QUANTUM POWER</span>
              <span className="text-[#00F2FF] font-black">87%</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
              <div 
                className="h-2 rounded-full transition-all duration-1000 ease-out relative"
                style={{ width: '87%', background: 'linear-gradient(to right, #00F2FF, #A855F7, #EC4899)' }}
              >
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
              </div>
            </div>
          </div>

          {/* User Profile */}
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-[#00F2FF]/30 transition-all duration-300 group cursor-pointer">
            <div className="relative">
              <img 
                src="https://api.dicebear.com/6.x/avataaars/svg?seed=nexus&backgroundColor=00f2ff,a855f7,ec4899" 
                alt="avatar" 
                className="w-12 h-12 rounded-2xl ring-2 ring-[#00F2FF]/30 group-hover:ring-[#EC4899] transition-all duration-300" 
              />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#00F2FF] rounded-full border-2 border-[#0F0F0F] animate-pulse" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-black text-white truncate">ALEX RIVERA</div>
              <div className="text-xs text-white/60 truncate">Quantum Engineer</div>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}

function Topbar({ isSidebarOpen, setIsSidebarOpen }){
  const [isListening, setIsListening] = useState(false)

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between py-4 px-4 lg:py-6 lg:px-6 bg-[#0F0F0F]/80 backdrop-blur-2xl rounded-3xl border border-white/10 professional-shadow">
      <div className="flex items-center gap-4 lg:gap-6 w-full sm:w-auto">
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#00F2FF]/30 transition-all duration-300 hover:scale-110 group"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white/80 group-hover:text-[#00F2FF] transition-colors">
            <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Enhanced Search */}
        <div className="relative group flex-1 sm:flex-initial">
          <div className="flex items-center gap-4 px-4 py-3 lg:px-5 lg:py-3 rounded-2xl bg-white/5 border border-white/10 hover:border-[#00F2FF]/50 transition-all duration-300 min-w-[280px] sm:min-w-[350px] lg:min-w-[400px] cursor-text group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-[#00F2FF]/10">
            <Search className="text-white/60 group-hover:text-[#00F2FF] transition-colors" />
            <input 
              placeholder="Ask Quantum AI anything..." 
              className="flex-1 bg-transparent outline-none text-sm text-white/60 placeholder-white/40"
            />
        
          </div>
          
          {/* Voice input */}
          <button 
            onClick={() => setIsListening(!isListening)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 rounded-xl bg-white/10 text-white/60 hover:bg-[#00F2FF] hover:text-white transition-all duration-300"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 2a3 3 0 00-3 3v7a3 3 0 006 0V5a3 3 0 00-3-3z" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M19 10v2a7 7 0 01-14 0v-2M12 19v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs text-white/50 bg-white/5 px-3 py-2 rounded-lg border border-white/10 font-mono">
          <kbd className="px-2 py-1 bg-white/10 rounded">⌘</kbd>
          <kbd className="px-2 py-1 bg-white/10 rounded">K</kbd>
        </div>
      </div>

      <div className="flex items-center gap-3 mt-4 sm:mt-0">
        {/* Notifications */}
        <button className="relative p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-[#00F2FF]/30 transition-all duration-300 hover:scale-110 group">
          <Bell className="text-white/80 group-hover:text-[#00F2FF] transition-colors" />
          <div className="absolute top-2 right-2 w-2.5 h-2.5 bg-[#EC4899] rounded-full animate-ping" />
          <div className="absolute top-2 right-2 w-2.5 h-2.5 bg-[#EC4899] rounded-full border-2 border-[#0F0F0F]" />
        </button>

        {/* Theme Toggle */}
        <button className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-[#A855F7]/30 transition-all duration-300 hover:scale-110 group">
          <Moon className="text-white/80 group-hover:text-[#A855F7] transition-colors" />
        </button>

        {/* Create Button */}
        <button className="px-4 py-2.5 rounded-xl text-white text-sm font-black hover:shadow-2xl hover:shadow-[#00F2FF]/30 transition-all duration-300 hover:scale-105 flex items-center gap-2" style={{ background: 'linear-gradient(to right, #00F2FF, #EC4899)' }}>
          <span>CREATE</span>
          <Plus className="w-4 h-4" />
        </button>

        {/* User Avatar */}
        <div className="relative group">
          <img 
            src="https://api.dicebear.com/6.x/avataaars/svg?seed=quantum&backgroundColor=00f2ff,a855f7" 
            alt="avatar" 
            className="w-10 h-10 rounded-2xl ring-2 ring-white/20 hover:ring-[#00F2FF] transition-all duration-300 cursor-pointer hover:scale-110" 
          />
          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#00F2FF] rounded-full border-2 border-[#0F0F0F] animate-pulse" />
        </div>
      </div>
    </div>
  )
}

function StatCard({title, value, delta, trend = 'up'}){
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="group relative p-6 rounded-3xl bg-[#0F0F0F]/80 backdrop-blur-2xl border border-white/10 hover:border-[#00F2FF]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#00F2FF]/10 cursor-pointer professional-shadow"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(to right, rgba(0, 242, 255, 0.05), rgba(236, 73, 153, 0.05))' }} />
      
      <div className="relative z-10">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-2">{title}</div>
            <div className="text-3xl font-black text-white mb-2 group-hover:bg-linear-to-r group-hover:from-[#00F2FF] group-hover:to-[#EC4899] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
              {value}
            </div>
            <div className={`flex items-center gap-2 text-sm font-semibold ${
              trend === 'up' ? 'text-[#00F2FF]' : 'text-[#EC4899]'
            }`}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={trend === 'down' ? 'rotate-180' : ''}>
                <path d="M5 15l7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {delta}
            </div>
          </div>
          
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 ${
            isHovered 
              ? 'text-white shadow-2xl' 
              : 'bg-white/10 text-[#00F2FF]'
          }`}
          style={isHovered ? { background: 'linear-gradient(to right, #00F2FF, #EC4899)' } : {}}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M3 12h18M12 3v18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Mini sparkline */}
        <div className="h-10 w-full opacity-60 group-hover:opacity-100 transition-opacity duration-300 mt-4">
          <svg viewBox="0 0 100 30" className="w-full h-full">
            <path 
              d="M0,25 L20,18 L40,22 L60,12 L80,15 L100,8" 
              stroke="url(#sparkGradient)" 
              strokeWidth="2.5" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient id="sparkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00F2FF" />
                <stop offset="100%" stopColor="#EC4899" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  )
}

function Sparkline(){
  return (
    <svg viewBox="0 0 120 40" className="w-full h-24">
      <defs>
        <linearGradient id="g" x1="0" x2="1">
          <stop offset="0%" stopColor="#00F2FF" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#A855F7" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#EC4899" stopOpacity="0.8" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <path 
        d="M0,30 L10,22 L20,25 L30,12 L40,18 L50,8 L60,14 L70,10 L80,14 L90,6 L100,12 L110,8 L120,6"
        stroke="url(#g)" 
        strokeWidth="3" 
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        filter="url(#glow)"
      />
      {/* Prediction highlight */}
      <circle cx="120" cy="6" r="3" fill="#EC4899">
        <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  )
}

function MainChart(){
  const [timeRange, setTimeRange] = useState('24h')

  return (
    <div className="relative rounded-3xl p-6 bg-[#0F0F0F]/80 backdrop-blur-2xl border border-white/10 professional-shadow hover:border-[#00F2FF]/30 transition-all duration-500 group">
      {/* Animated background */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(to right, rgba(0, 242, 255, 0.05), rgba(168, 85, 247, 0.05), rgba(236, 73, 153, 0.05))' }} />
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="text-xl font-black text-white mb-2 group-hover:bg-linear-to-r group-hover:from-[#00F2FF] group-hover:to-[#EC4899] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
              QUANTUM ANALYTICS — REAL-TIME
            </div>
            <div className="text-sm text-white/70">Neural network predictions with quantum accuracy</div>
          </div>
          
          <div className="flex items-center gap-2">
            {['1h', '24h', '7d', '30d'].map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-300 ${
                  timeRange === range
                    ? 'text-white shadow-lg shadow-[#00F2FF]/20'
                    : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10'
                }`}
                style={timeRange === range ? { background: 'linear-gradient(to right, #00F2FF, #EC4899)' } : {}}
              >
                {range}
              </button>
            ))}
          </div>
        </div>

        {/* Chart Area */}
        <div className="relative rounded-2xl bg-linear-to-b from-white/5 to-transparent p-4 border border-white/10" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.05), transparent)' }}>
          <Sparkline />
          
          {/* Animated scan lines */}
          <div className="absolute inset-0 opacity-20">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(90deg, transparent ${i * 20}%, rgba(0, 242, 255, 0.3) 50%, transparent ${100 - i * 20}%)`,
                  animation: `sweep ${3 + i * 2}s linear infinite ${i * 0.5}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Prediction metrics */}
        <div className="flex items-center justify-between mt-4 text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#00F2FF] animate-pulse" />
              <span className="text-white/60">AI Prediction</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#EC4899]" />
              <span className="text-white/60">Actual Performance</span>
            </div>
          </div>
          
          <div className="text-right">
            <div className="text-[#00F2FF] font-black">+18.4% QUANTUM BOOST</div>
            <div className="text-white/60 text-xs">Neural confidence: 99.2%</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes sweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  )
}

function ActivityFeed(){
  const activities = [
    { 
      action: 'Quantum AI generated neural summary for Q4 projections', 
      time: '2 minutes ago', 
      type: 'quantum'
    },
    { 
      action: 'Predicted 23.7% market uplift with 98.3% confidence', 
      time: '12 minutes ago', 
      type: 'prediction'
    },
    { 
      action: 'Auto-optimized quantum workflow #Q42-7B', 
      time: '28 minutes ago', 
      type: 'optimization'
    }
  ]

  const getTypeColor = (type) => {
    switch (type) {
      case 'quantum': return '#00F2FF'
      case 'prediction': return '#EC4899'
      case 'optimization': return '#A855F7'
      default: return '#00F2FF'
    }
  }

  return (
    <div className="rounded-3xl p-6 bg-[#0F0F0F]/80 backdrop-blur-2xl border border-white/10 professional-shadow hover:border-[#00F2FF]/30 transition-all duration-500 group">
      <div className="flex items-center justify-between mb-6">
        <div className="text-xl font-black text-white group-hover:bg-linear-to-r group-hover:from-[#00F2FF] group-hover:to-[#EC4899] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
          QUANTUM ACTIVITY
        </div>
        <div className="flex items-center gap-2 text-xs text-[#00F2FF] bg-[#00F2FF]/10 px-3 py-1.5 rounded-xl border border-[#00F2FF]/20">
          <div className="w-2 h-2 rounded-full bg-[#00F2FF] animate-pulse" />
          LIVE
        </div>
      </div>

      <div className="space-y-4">
        {activities.map((activity, index) => {
          const color = getTypeColor(activity.type)
          
          return (
            <div 
              key={index}
              className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-all duration-300 hover:scale-105 group/item cursor-pointer"
            >
              <div 
                className="w-3 h-3 rounded-full mt-2 shrink-0 animate-pulse"
                style={{ backgroundColor: color }}
              />

              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold text-white leading-relaxed">
                  {activity.action}
                </div>
                <div className="text-xs text-white/60 mt-1">{activity.time}</div>
              </div>

              <div 
                className="w-2 h-2 rounded-full shrink-0 mt-2 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: color }}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

function AICopilot(){
  const [message, setMessage] = useState('')

  const suggestions = [
    {
      title: 'Optimize Quantum Database',
      description: 'AI suggests quantum query optimization for 340% faster processing',
      action: 'Deploy',
      color: '#00F2FF'
    },
    {
      title: 'Scale Neural Resources',
      description: 'Predicted traffic spike incoming - scale to 23 nodes',
      action: 'Configure',
      color: '#EC4899'
    }
  ]

  return (
    <aside className="w-full xl:w-80 bg-[#0F0F0F]/90 backdrop-blur-2xl border-t xl:border-t-0 xl:border-l border-white/10 p-4 lg:p-6 professional-shadow h-auto xl:h-screen sticky top-0 overflow-y-auto max-lg:hidden">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center animate-pulse-glow" style={{ background: 'linear-gradient(to right, #00F2FF, #EC4899)' }}>
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xl font-black text-white">QUANTUM COPILOT</div>
            <div className="text-sm text-white/60">Always-on AI Assistant</div>
          </div>
        </div>
        
        <div className="flex items-center gap-2 text-xs text-[#00F2FF] bg-[#00F2FF]/10 px-3 py-2 rounded-xl border border-[#00F2FF]/20">
          <div className="w-2 h-2 rounded-full bg-[#00F2FF] animate-pulse" />
          READY TO ASSIST
        </div>
      </div>

      {/* Chat Input */}
      <div className="mb-8">
        <div className="relative group">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full rounded-2xl p-4 bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:border-[#00F2FF]/50 focus:outline-none transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-[#00F2FF]/10"
            placeholder="Ask Quantum AI anything..."
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-xl text-white hover:shadow-2xl hover:shadow-[#00F2FF]/30 transition-all duration-300 hover:scale-110" style={{ background: 'linear-gradient(to right, #00F2FF, #EC4899)' }}>
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* AI Suggestions */}
      <div className="mb-8">
        <div className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">Neural Suggestions</div>
        <div className="space-y-4">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className="group relative p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#00F2FF]/50 transition-all duration-300 hover:scale-105"
              style={{ '--suggestion-color': suggestion.color }}
            >
              <div className="flex items-start gap-3">
                <div 
                  className="w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ 
                    background: `linear-gradient(135deg, ${suggestion.color}20, ${suggestion.color}40)`,
                    border: `1px solid ${suggestion.color}30`
                  }}
                >
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: suggestion.color }} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-black text-white mb-1">{suggestion.title}</div>
                  <div className="text-xs text-white/60 leading-relaxed">{suggestion.description}</div>
                  <button 
                    className="mt-3 px-3 py-1.5 rounded-lg text-xs font-black text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    style={{ 
                      background: `linear-gradient(135deg, ${suggestion.color}, ${suggestion.color}dd)`,
                      boxShadow: `0 0 20px ${suggestion.color}40`
                    }}
                  >
                    {suggestion.action}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Forecast */}
      <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group hover:border-[#00F2FF]/30 transition-all duration-300">
        <div className="text-sm font-black text-white mb-2">Quantum Forecast</div>
        <div className="text-xs text-white/60 mb-3">Next 7 days neural prediction</div>
        
        {/* Mini sparkline */}
        <div className="mb-3">
          <svg viewBox="0 0 200 40" className="w-full h-10">
            <defs>
              <linearGradient id="forecastGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00F2FF" />
                <stop offset="50%" stopColor="#A855F7" />
                <stop offset="100%" stopColor="#EC4899" />
              </linearGradient>
            </defs>
            <path
              d="M0,30 L40,25 L80,28 L120,18 L160,22 L200,15"
              stroke="url(#forecastGradient)"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        
        <div className="flex items-center justify-between text-xs">
          <span className="text-white/60">Quantum trajectory</span>
          <span className="text-[#00F2FF] font-black">+27.3%</span>
        </div>
      </div>
    </aside>
  )
}

export default function FuturisticDashboard(){
  const [mounted, setMounted] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      <AnimatedBackground />
      
      <div className="max-w-[1800px] mx-auto py-4 px-4 lg:py-8 lg:px-8 grid grid-cols-1 lg:grid-cols-[1fr] xl:grid-cols-[256px_1fr_320px] gap-8 relative z-10">
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        
        <main className="flex flex-col gap-6 lg:gap-8">
          <div className={`rounded-3xl lg:rounded-4xl p-4 lg:p-8 bg-[#0F0F0F]/60 backdrop-blur-2xl border border-white/10 professional-shadow transition-all duration-700 ${
            mounted ? 'animate-content-in' : 'opacity-0 translate-y-4'
          }`}>
            <Topbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

            {/* Welcome Section */}
            <div className="mt-4 lg:mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 lg:mb-8 gap-4">
              <div>
                <div className="text-2xl font-black mb-2 bg-linear-to-r from-[#00F2FF] to-[#EC4899] bg-clip-text text-transparent">
                  WELCOME TO QUANTUM AI
                </div>
                <div className="text-sm text-white/60">Real-time neural analytics • {new Date().toLocaleDateString('en-US')}</div>
              </div>
              <div className="text-xs text-white/40 bg-white/5 px-3 py-2 rounded-xl border border-white/10">
                ACTIVE: <span className="text-[#00F2FF] font-black ml-2">DASHBOARD</span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
              <StatCard title="Quantum Users" value="42.7K" delta="+12.4% (AI)" trend="up" />
              <StatCard title="Neural Engagement" value="94.2%" delta="+5.7%" trend="up" />
              <StatCard title="AI Operations" value="18.3K" delta="+23.1%" trend="up" />
              <StatCard title="Quantum Success" value="99.8%" delta="Perfect" trend="up" />
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              <div className="xl:col-span-2">
                <MainChart />
              </div>
              
              <div className="flex flex-col gap-8">
                <ActivityFeed />

                {/* Quick Actions */}
                <div className="rounded-3xl p-6 bg-[#0F0F0F]/80 backdrop-blur-2xl border border-white/10 professional-shadow hover:border-[#00F2FF]/30 transition-all duration-500 group">
                  <div className="text-xl font-black text-white mb-6 group-hover:bg-linear-to-r group-hover:from-[#00F2FF] group-hover:to-[#EC4899] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                    QUANTUM ACTIONS
                  </div>
                  
                  <div className="grid grid-cols-1 gap-3">
                    <button className="group/action p-4 rounded-2xl text-white font-black hover:shadow-2xl hover:shadow-[#00F2FF]/30 transition-all duration-300 hover:scale-105 flex items-center gap-3" style={{ background: 'linear-gradient(to right, #00F2FF, #EC4899)' }}>
                      <span>QUANTUM SUMMARY</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="ml-auto group-hover/action:animate-bounce">
                        <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    
                    <button className="group/action p-4 rounded-2xl bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 hover:text-white transition-all duration-300 hover:scale-105 flex items-center gap-3">
                      <span>NEURAL OPTIMIZATION</span>
                    </button>
                    
                    <button className="group/action p-4 rounded-2xl bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 hover:text-white transition-all duration-300 hover:scale-105 flex items-center gap-3">
                      <span>GENERATE REPORT</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-sm text-white/40 text-center bg-white/5 rounded-2xl p-4 lg:p-6 border border-white/5 backdrop-blur-2xl">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-6 mb-2 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#00F2FF] animate-pulse" />
                <span>QUANTUM AI ACTIVE</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-white/20" />
              <div>NEURAL NETWORK: 99.7% ACCURACY</div>
              <div className="hidden sm:block w-px h-4 bg-white/20" />
              <div>REAL-TIME PROCESSING</div>
            </div>
            <div className="text-xs">
              © 2024 NEXUS AI QUANTUM PLATFORM • v2.4.1
            </div>
          </div>
        </main>

        <AICopilot />
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes contentIn {
          from { 
            opacity: 0; 
            transform: translateY(20px) scale(0.98);
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% { 
            box-shadow: 0 0 20px #00F2FF40, 0 0 40px #00F2FF20;
          }
          50% { 
            box-shadow: 0 0 30px #00F2FF60, 0 0 60px #00F2FF30;
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        
        @keyframes pulse-slower {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-content-in {
          animation: contentIn 0.8s cubic-bezier(0.2, 0.9, 0.2, 1) both;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-pulse-slower {
          animation: pulse-slower 6s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
        
        .professional-shadow {
          box-shadow: 
            0 0 0 1px rgba(255, 255, 255, 0.1),
            0 8px 32px rgba(0, 0, 0, 0.3),
            0 2px 8px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  )
}