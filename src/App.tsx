import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, Target, FileText, Link as LinkIcon, Globe, Search, XCircle, AlertTriangle, CheckCircle2, Linkedin, Youtube, Twitter, Instagram, MessageCircle, Video, BarChart2, Settings, HelpCircle, MessageSquare, Sparkles, Zap, Shield, Handshake, TrendingUp, Share2, DollarSign, ArrowUpRight } from 'lucide-react';

const VisibilityScoreAnimation = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };
  
  const item = {
    hidden: { opacity: 0, x: 30, filter: "blur(8px)" },
    show: { opacity: 1, x: 0, filter: "blur(0px)", transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <div className="w-full h-full bg-slate-50 flex items-center justify-center p-8 gap-10 relative overflow-hidden">
      {/* Premium Light Mesh Gradient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4], x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-blue-400/20 blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3], x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[30%] -right-[20%] w-[60%] h-[80%] rounded-full bg-purple-400/20 blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-[20%] left-[20%] w-[50%] h-[50%] rounded-full bg-rose-400/20 blur-[100px]"
        />
        
        {/* Subtle fading grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-40"></div>
        
        {/* Soft Scanning line effect */}
        <motion.div 
          animate={{ y: ['-100%', '400%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent z-0"
        />
      </div>

      {/* Left Side */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
        transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
        className="flex flex-col items-center relative z-10 bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-white"
        style={{ perspective: 1000 }}
      >
        <h3 className="text-[11px] font-bold text-slate-400 tracking-[0.2em] uppercase mb-4">Geo AI Visibility Score</h3>
        <div className="flex items-baseline font-bold">
          <motion.span 
            animate={{ 
              opacity: [1, 0.6, 1], 
              textShadow: ["0px 0px 0px rgba(239,68,68,0)", "0px 0px 20px rgba(239,68,68,0.3)", "0px 0px 0px rgba(239,68,68,0)"] 
            }} 
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="text-7xl text-red-500"
          >?</motion.span>
          <span className="text-6xl text-slate-200">/100</span>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
          className="mt-6 px-6 py-1.5 bg-red-50 text-red-500 rounded-full text-sm font-bold tracking-wide"
        >
          ? Tier
        </motion.div>
      </motion.div>

      {/* Right Side */}
      <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col gap-3 w-full max-w-[300px] relative z-10">
        {[
          { icon: Target, label: "AI Citation Rate", val: "?/25", status: "error", color: "text-red-500" },
          { icon: FileText, label: "Content Authority", val: "?/20", status: "warn", color: "text-amber-500" },
          { icon: LinkIcon, label: "Structured Data", val: "?/20", status: "warn", color: "text-amber-500" },
          { icon: Globe, label: "Content Richness", val: "?/20", status: "success", color: "text-emerald-500" },
          { icon: Search, label: "Semantic Opt.", val: "?/15", status: "success", color: "text-emerald-500" },
        ].map((row, i) => (
          <motion.div key={i} variants={item} className="flex items-center justify-between text-[14px] bg-white/80 backdrop-blur-xl px-4 py-3 rounded-xl shadow-[0_8px_20px_-10px_rgba(0,0,0,0.05)] border border-white">
            <div className="flex items-center gap-3">
              <row.icon className="w-4 h-4 text-slate-500" />
              <span className="text-slate-700 font-semibold">{row.label}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className={`font-bold ${row.color}`}>{row.val}</span>
              {row.status === 'error' && <XCircle className="w-4 h-4 text-red-500" />}
              {row.status === 'warn' && <AlertTriangle className="w-4 h-4 text-amber-500" />}
              {row.status === 'success' && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const RedditAnimation = () => {
  return (
    <div className="w-full h-full bg-[#FFFBF5] p-6 flex flex-col justify-center gap-6 relative overflow-hidden font-sans">
      {/* Premium Gold/Beige Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft Golden Glow Top Right */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[30%] -right-[20%] w-[80%] h-[80%] rounded-full bg-amber-200/20 blur-[120px]"
        />
        {/* Soft Warm Glow Bottom Left */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-orange-100/30 blur-[100px]"
        />
        {/* Subtle Texture/Grain */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03]"></div>
      </div>

      <div className="flex w-full h-full gap-5 items-center justify-center relative z-10 px-2">
        {/* Card 1: Reply Leads (Karma/Trust Theme) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          whileHover={{ y: -5, boxShadow: "0 20px 40px -10px rgba(251, 191, 36, 0.15)" }}
          className="flex-1 h-[280px] bg-gradient-to-br from-white/90 to-amber-50/50 backdrop-blur-xl rounded-[24px] border border-white/60 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.03)] p-6 flex flex-col justify-between group overflow-hidden relative"
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-600 shadow-inner">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800 leading-none">Reply Leads</h3>
              <span className="text-[10px] font-medium text-amber-600/80 uppercase tracking-wider">Build Trust</span>
            </div>
          </div>

          {/* Visual: Karma & Handshake */}
          <div className="flex-1 flex flex-col items-center justify-center relative">
            {/* Karma Card */}
            <motion.div 
              className="absolute top-2 left-0 bg-white/80 rounded-xl p-3 shadow-sm border border-amber-100 w-[110px]"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-1.5 text-amber-500 font-bold text-lg">
                <ArrowUpRight className="w-5 h-5" />
                <motion.span
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >326</motion.span>
              </div>
              <div className="text-[10px] text-slate-400 font-medium mt-0.5">Karma</div>
            </motion.div>

            {/* Handshake/Trust Icon */}
            <motion.div 
              className="absolute bottom-2 right-0 w-20 h-20 text-amber-200/60"
              animate={{ scale: [1, 1.05, 1], rotate: [0, 2, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Handshake className="w-full h-full fill-current" />
            </motion.div>

             {/* Shield Icon (Background) */}
             <div className="absolute top-8 right-2 w-12 h-12 text-amber-100/40">
                <Shield className="w-full h-full fill-current" />
             </div>
          </div>

          {/* Action Button */}
          <button className="w-full py-2.5 bg-slate-900 text-white text-xs font-bold rounded-xl shadow-lg shadow-slate-900/10 flex items-center justify-center gap-2 group-hover:bg-amber-600 transition-colors">
            <Zap className="w-3.5 h-3.5 fill-white" />
            Auto-Reply
          </button>
        </motion.div>

        {/* Card 2: Post Ideas (Growth/Chart Theme) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
          whileHover={{ y: -5, boxShadow: "0 20px 40px -10px rgba(59, 130, 246, 0.15)" }}
          className="flex-1 h-[280px] bg-gradient-to-br from-white/90 to-blue-50/50 backdrop-blur-xl rounded-[24px] border border-white/60 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.03)] p-6 flex flex-col justify-between group overflow-hidden relative"
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 shadow-inner">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800 leading-none">Post Ideas</h3>
              <span className="text-[10px] font-medium text-blue-600/80 uppercase tracking-wider">Go Viral</span>
            </div>
          </div>

          {/* Visual: Post & Chart */}
          <div className="flex-1 flex flex-col items-center justify-center relative w-full px-2">
            {/* Abstract Post Card */}
            <div className="w-full bg-white/60 rounded-xl p-3 border border-blue-100 shadow-sm relative overflow-hidden">
               {/* Title Line */}
               <div className="h-2.5 w-1/3 bg-slate-200 rounded-full mb-3"></div>
               
               {/* Chart Bars */}
               <div className="flex items-end gap-1.5 h-16 w-full mt-2 relative z-10">
                  {[30, 50, 40, 70, 90].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 1, delay: 0.6 + (i * 0.1), type: "spring" }}
                      className="flex-1 bg-gradient-to-t from-amber-400 to-amber-300 rounded-t-sm opacity-90"
                    />
                  ))}
               </div>

               {/* Rising Arrow */}
               <motion.div 
                 initial={{ scale: 0, opacity: 0 }}
                 animate={{ scale: 1, opacity: 1, x: [0, 5], y: [0, -5] }}
                 transition={{ delay: 1.2, duration: 0.5 }}
                 className="absolute bottom-8 right-4 text-slate-800"
               >
                 <TrendingUp className="w-8 h-8 drop-shadow-sm" />
               </motion.div>

               {/* Dollar Coin Icon */}
               <motion.div
                 initial={{ scale: 0, rotate: -180 }}
                 animate={{ scale: 1, rotate: 0 }}
                 transition={{ delay: 1.4, type: "spring" }}
                 className="absolute -bottom-2 -right-2 w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white border-2 border-white shadow-md z-20"
               >
                 <DollarSign className="w-5 h-5 font-bold" />
               </motion.div>
            </div>
          </div>

          {/* Action Button */}
          <button className="w-full py-2.5 bg-slate-900 text-white text-xs font-bold rounded-xl shadow-lg shadow-slate-900/10 flex items-center justify-center gap-2 group-hover:bg-blue-600 transition-colors">
            <Sparkles className="w-3.5 h-3.5 fill-white" />
            Generate
          </button>
        </motion.div>
      </div>
    </div>
  );
};

const ContentCalendarAnimation = () => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  const calendarCards = [
    { id: 1, colClass: "col-start-2", row: 1, icon: Linkedin, color: "text-blue-500", borderColor: "border-l-blue-500", glow: "rgba(59,130,246,0.3)", title: "B2B Growth Strategy", delay: 0 },
    { id: 2, colClass: "col-start-4", row: 1, icon: Youtube, color: "text-red-500", borderColor: "border-l-red-500", glow: "rgba(239,68,68,0.3)", title: "Product Demo v2", delay: 0.2 },
    { id: 3, colClass: "col-start-6", row: 1, icon: Twitter, color: "text-slate-800", borderColor: "border-l-slate-800", glow: "rgba(15,23,42,0.2)", title: "Weekend Poll", delay: 0.4 },
    { id: 4, colClass: "col-start-1", row: 2, icon: Instagram, color: "text-pink-500", borderColor: "border-l-pink-500", glow: "rgba(236,72,153,0.3)", title: "Behind Scenes", delay: 0.1 },
    { id: 5, colClass: "col-start-3", row: 2, icon: MessageCircle, color: "text-orange-500", borderColor: "border-l-orange-500", glow: "rgba(249,115,22,0.3)", title: "Reddit AMA", delay: 0.3 },
    { id: 6, colClass: "col-start-5", row: 2, icon: Video, color: "text-cyan-500", borderColor: "border-l-cyan-500", glow: "rgba(6,182,212,0.3)", title: "TikTok Trend", delay: 0.5 },
  ];

  return (
    <div className="w-full h-full bg-slate-50 p-5 flex flex-col font-sans text-slate-800 relative overflow-hidden">
      {/* Premium Light Mesh Gradient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4], x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-blue-400/20 blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3], x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[30%] -right-[20%] w-[60%] h-[80%] rounded-full bg-purple-400/20 blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-[20%] left-[20%] w-[50%] h-[50%] rounded-full bg-rose-400/20 blur-[100px]"
        />
        
        {/* Subtle fading grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-40"></div>
      </div>

      {/* Filters & Legend Row */}
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="flex justify-between items-center mb-4 mt-1 relative z-10">
        {/* Filters */}
        <div className="flex gap-2.5">
          {[
            { label: 'All', count: 4, active: true },
            { label: 'Blog', count: 2, active: false },
            { label: 'Social', count: 1, active: false },
            { label: 'Email', count: 3, active: false }
          ].map((f) => (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} key={f.label} className={`flex items-center gap-2 px-3.5 py-2 rounded-full text-[12px] font-medium border cursor-pointer transition-colors ${f.active ? 'bg-white border-white text-slate-800 shadow-sm' : 'bg-slate-100/50 border-transparent text-slate-500 hover:text-slate-700 hover:bg-white/50'}`}>
              <span className={`px-2 py-0.5 rounded-full text-[10px] ${f.active ? 'bg-indigo-50 text-indigo-600 font-bold' : 'bg-slate-200 text-slate-500'}`}>{f.count}</span>
              {f.label}
            </motion.div>
          ))}
        </div>

        {/* Legend */}
        <div className="bg-white/80 backdrop-blur-sm border border-white shadow-sm rounded-full px-4 py-2 flex gap-5">
          <div className="flex items-center gap-2 text-[11px] font-medium text-slate-600">
            <motion.div animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></motion.div>
            High Engagement
          </div>
          <div className="flex items-center gap-2 text-[11px] font-medium text-slate-600">
            <motion.div animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.4)]"></motion.div>
            Needs Review
          </div>
        </div>
      </motion.div>

      {/* Tabs */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="flex gap-8 border-b border-slate-200 mb-3 text-[14px] font-semibold relative z-10">
        <div className="pb-2.5 border-b-2 border-indigo-500 text-indigo-600 relative">
          Month
          <motion.div layoutId="activeTab" className="absolute -bottom-[2px] left-0 right-0 h-[2px] bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.4)]" />
        </div>
        <div className="pb-2.5 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors">Week</div>
        <div className="pb-2.5 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors">List</div>
      </motion.div>

      {/* Grid Header */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="grid grid-cols-7 gap-3 mb-3 text-[10px] font-bold text-slate-400 text-center tracking-widest relative z-10">
        <div>MON</div><div>TUE</div><div>WED</div><div>THU</div><div>FRI</div><div>SAT</div><div>SUN</div>
      </motion.div>

      {/* Grid Body */}
      <motion.div 
        initial="hidden" animate="show" 
        variants={{ show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }}
        className="grid grid-cols-7 gap-3 flex-1 relative z-10"
      >
        {calendarCards.map((card) => (
          <div key={card.id} className={`${card.colClass} ${card.row === 2 ? 'mt-1' : ''}`}>
            <motion.div 
              variants={cardVariants} 
              whileHover={{ 
                scale: 1.05, 
                y: -4,
                boxShadow: `0 12px 24px -8px ${card.glow}`,
                borderColor: "rgba(255,255,255,1)"
              }}
              className={`bg-white/90 backdrop-blur-md rounded-xl p-3 border border-white border-l-[4px] ${card.borderColor} h-[76px] flex flex-col gap-1.5 shadow-[0_4px_12px_-4px_rgba(0,0,0,0.05)] relative overflow-hidden cursor-pointer group`}
            >
              <motion.div
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: card.delay, ease: "easeInOut" }}
                className="flex flex-col gap-1.5 h-full relative z-10"
              >
                <card.icon className={`w-5 h-5 ${card.color} drop-shadow-sm`} />
                <span className="text-[11px] font-semibold leading-tight text-slate-600 group-hover:text-slate-900 transition-colors">{card.title}</span>
              </motion.div>
              {/* Hover Shimmer */}
              <motion.div 
                initial={{ x: '-100%' }}
                whileHover={{ x: '200%' }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white to-transparent skew-x-12 z-0 opacity-60"
              />
            </motion.div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const TrafficAnalyticsAnimation = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <div className="w-full h-full bg-slate-50 p-6 flex flex-col font-sans text-slate-800 relative overflow-hidden">
      {/* Premium Light Mesh Gradient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4], x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-blue-400/20 blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3], x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[30%] -right-[20%] w-[60%] h-[80%] rounded-full bg-purple-400/20 blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-[20%] left-[20%] w-[50%] h-[50%] rounded-full bg-rose-400/20 blur-[100px]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-40"></div>
      </div>

      {/* Top Cards (Compressed) */}
      <motion.div 
        variants={containerVariants} initial="hidden" animate="show"
        className="grid grid-cols-3 gap-3 mb-3 relative z-10"
      >
        {/* Card 1: Organic Search */}
        <motion.div variants={cardVariants} className="bg-white/90 backdrop-blur-md rounded-xl p-3 border-2 border-blue-400 shadow-[0_8px_24px_-8px_rgba(59,130,246,0.25)] flex flex-col gap-1 relative overflow-hidden group">
          <div className="flex items-center gap-1.5 text-slate-500 text-[10px] font-semibold">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></div>
            Organic Search
            <HelpCircle className="w-2.5 h-2.5 text-slate-300 ml-0.5" />
          </div>
          <motion.div 
            animate={{ opacity: [1, 0.5, 1] }} 
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-2xl font-bold text-slate-800 mt-0.5"
          >
            ?
          </motion.div>
          <div className="h-5 w-full mt-1">
            <svg viewBox="0 0 100 30" className="w-full h-full overflow-visible">
              <motion.path 
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                d="M 0 25 C 20 25, 40 10, 60 15 C 80 20, 90 5, 100 2" 
                fill="none" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" 
              />
            </svg>
          </div>
        </motion.div>

        {/* Card 2: AI Referral */}
        <motion.div variants={cardVariants} className="bg-white/80 backdrop-blur-md rounded-xl p-3 border border-white shadow-sm flex flex-col gap-1 relative overflow-hidden hover:shadow-md transition-shadow">
          <div className="flex items-center gap-1.5 text-slate-500 text-[10px] font-semibold">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
            AI Referral
            <HelpCircle className="w-2.5 h-2.5 text-slate-300 ml-0.5" />
          </div>
          <motion.div 
            animate={{ opacity: [1, 0.6, 1] }} 
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            className="text-2xl font-bold text-slate-800 mt-0.5"
          >
            ?
          </motion.div>
          <div className="h-5 w-full mt-1">
            <svg viewBox="0 0 100 30" className="w-full h-full overflow-visible">
              <motion.path 
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, ease: "easeOut", delay: 0.7 }}
                d="M 0 28 C 30 28, 40 20, 55 22 C 75 25, 85 10, 100 5" 
                fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" 
              />
            </svg>
          </div>
        </motion.div>

        {/* Card 3: Social Referral */}
        <motion.div variants={cardVariants} className="bg-white/80 backdrop-blur-md rounded-xl p-3 border border-white shadow-sm flex flex-col gap-1 relative overflow-hidden hover:shadow-md transition-shadow">
          <div className="flex items-center gap-1.5 text-slate-500 text-[10px] font-semibold">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
            Social Referral
            <HelpCircle className="w-2.5 h-2.5 text-slate-300 ml-0.5" />
          </div>
          <motion.div 
            animate={{ opacity: [1, 0.6, 1] }} 
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            className="text-2xl font-bold text-slate-800 mt-0.5"
          >
            ?
          </motion.div>
          <div className="h-5 w-full mt-1">
            <svg viewBox="0 0 100 30" className="w-full h-full overflow-visible">
              <motion.path 
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, ease: "easeOut", delay: 0.9 }}
                d="M 0 25 C 25 25, 35 15, 50 18 C 70 22, 80 8, 100 5" 
                fill="none" stroke="#a855f7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" 
              />
            </svg>
          </div>
        </motion.div>
      </motion.div>

      {/* Main Chart Area */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, type: "spring", stiffness: 200, damping: 20 }}
        className="flex-1 bg-white/90 backdrop-blur-xl rounded-2xl border border-white shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)] p-5 flex flex-col relative z-10"
      >
        {/* Chart Grid & Line */}
        <div className="flex-1 relative flex mt-1">
          {/* Y-Axis */}
          <div className="flex flex-col justify-between items-end pr-3 w-4 border-r-2 border-slate-200 z-10 pb-2">
            <div className="w-2 h-[2px] bg-slate-200 rounded-full"></div>
            <div className="w-2 h-[2px] bg-slate-200 rounded-full"></div>
            <div className="w-2 h-[2px] bg-slate-200 rounded-full"></div>
            <div className="w-2 h-[2px] bg-slate-200 rounded-full"></div>
            <div className="w-2 h-[2px] bg-slate-200 rounded-full"></div>
          </div>
          
          {/* Chart Content */}
          <div className="flex-1 relative border-b-2 border-slate-200 ml-1">
            {/* Horizontal Grid Lines */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-2">
              <div className="w-full border-t border-slate-100/80 border-dashed"></div>
              <div className="w-full border-t border-slate-100/80 border-dashed"></div>
              <div className="w-full border-t border-slate-100/80 border-dashed"></div>
              <div className="w-full border-t border-slate-100/80 border-dashed"></div>
              <div className="w-full border-t border-transparent"></div>
            </div>

            {/* SVG Line Chart */}
            <div className="absolute inset-0 overflow-visible pb-2">
              <svg viewBox="0 0 400 200" preserveAspectRatio="none" className="w-full h-full overflow-visible">
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                  </linearGradient>
                </defs>
                
                {/* Area Fill */}
                <motion.path 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ duration: 1, delay: 1.5 }}
                  d="M 0 180 C 80 170, 120 180, 180 120 C 240 60, 280 90, 340 40 C 370 15, 390 20, 400 10 L 400 200 L 0 200 Z" 
                  fill="url(#chartGradient)" 
                />

                {/* Glow/Shadow under the line */}
                <motion.path 
                  initial={{ pathLength: 0, opacity: 0 }} 
                  animate={{ pathLength: 1, opacity: 0.4 }} 
                  transition={{ duration: 2, ease: "easeInOut", delay: 0.8 }}
                  d="M 0 180 C 80 170, 120 180, 180 120 C 240 60, 280 90, 340 40 C 370 15, 390 20, 400 10" 
                  fill="none" stroke="#3b82f6" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" 
                  className="blur-md"
                />
                {/* Main Line */}
                <motion.path 
                  initial={{ pathLength: 0 }} 
                  animate={{ pathLength: 1 }} 
                  transition={{ duration: 2, ease: "easeInOut", delay: 0.8 }}
                  d="M 0 180 C 80 170, 120 180, 180 120 C 240 60, 280 90, 340 40 C 370 15, 390 20, 400 10" 
                  fill="none" stroke="#3b82f6" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" 
                />
              </svg>
            </div>

            {/* X-Axis Ticks */}
            <div className="absolute -bottom-[2px] left-0 right-0 flex justify-between px-0">
              <div className="w-[2px] h-2 bg-slate-200 rounded-full translate-y-full"></div>
              <div className="w-[2px] h-2 bg-slate-200 rounded-full translate-y-full"></div>
              <div className="w-[2px] h-2 bg-slate-200 rounded-full translate-y-full"></div>
              <div className="w-[2px] h-2 bg-slate-200 rounded-full translate-y-full"></div>
              <div className="w-[2px] h-2 bg-slate-200 rounded-full translate-y-full"></div>
              <div className="w-[2px] h-2 bg-slate-200 rounded-full translate-y-full"></div>
              <div className="w-[2px] h-2 bg-slate-200 rounded-full translate-y-full"></div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const slides = [
  {
    id: 0,
    title: "Does AI Know WorkfxAI?",
    description: "Will ChatGPT, Gemini & Claude mention you? Scan your AI visibility in one click.",
    componentId: 'visibility',
    buttonText: 'STEP1: DIAGNOSE'
  },
  {
    id: 1,
    title: "How AI Recommends WorkfxAI?",
    description: "Auto-generate content & strategy that makes your brand an AI-recommended choice.",
    componentId: 'calendar',
    buttonText: 'STEP2: EXECUTE'
  },
  {
    id: 2,
    title: "Is Anyone Talking About Workfx on Reddit?",
    description: "AI engines trust real human conversations. We build your brand’s presence on Reddit to make you a top-tier recommendation.",
    componentId: 'reddit',
    buttonText: 'STEP3: CONNECT'
  },
  {
    id: 3,
    title: "Do Your Visuals Grab AI’s Attention?",
    description: "Boring photos kill conversions. Generate high-end, AI-optimized product visuals that stand out and sell.",
    componentId: 'visuals',
    buttonText: 'STEP4: VISUALIZE'
  },
  {
    id: 4,
    title: "Can AI Actually \"Read\" Your Website?",
    description: "Bad code makes you invisible. We audit your site’s technical health to ensure AI engines can crawl and cite you perfectly.",
    componentId: 'audit',
    buttonText: 'STEP5: AUDIT'
  },
  {
    id: 5,
    title: "How to Track Your WorkfxAI Performance?",
    description: "Monitor traffic & AI visibility changes in real time. Smarter marketing starts here.",
    badge: "Coming Soon",
    componentId: 'traffic',
    buttonText: 'STEP6: TRACKING'
  }
];

export default function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (!isOpen || isHovered || isPaused) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [isOpen, isHovered, isPaused, nextSlide]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '-100%' : '100%',
      opacity: 0
    })
  };

  return (
    <div className="min-h-screen bg-neutral-100 flex items-center justify-center p-4 font-sans">
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-neutral-800 transition-colors shadow-lg"
        >
          Show Announcement
        </button>
      )}

      {/* Debug Controls */}
      <div className="fixed top-4 left-4 z-50 flex flex-col gap-2">
        <div className="flex gap-2">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium text-sm transition-colors shadow-md"
          >
            Toggle Modal
          </button>
        </div>
        
        {isOpen && (
          <div className="flex gap-2 bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-md border border-slate-200">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => {
                  setDirection(index > currentSlide ? 1 : -1);
                  setCurrentSlide(index);
                  setIsPaused(true);
                }}
                className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${
                  currentSlide === index 
                    ? 'bg-neutral-900 text-white shadow-sm' 
                    : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                }`}
              >
                Slide {index + 1}
              </button>
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />
            
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="w-full max-w-[760px] bg-white rounded-[24px] shadow-2xl overflow-hidden flex flex-col pointer-events-auto relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >


                {/* Top Graphic Area */}
                <div className="relative h-[360px] w-full overflow-hidden bg-neutral-100">
                  <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                      key={currentSlide}
                      custom={direction}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                      }}
                      className="absolute inset-0 w-full h-full"
                    >
                      {slides[currentSlide].componentId === 'visibility' ? (
                        <VisibilityScoreAnimation />
                      ) : slides[currentSlide].componentId === 'calendar' ? (
                        <ContentCalendarAnimation />
                      ) : slides[currentSlide].componentId === 'reddit' ? (
                        <RedditAnimation />
                      ) : slides[currentSlide].componentId === 'traffic' ? (
                        <TrafficAnalyticsAnimation />
                      ) : (
                        // Placeholder for new slides - using a simple gradient or image for now
                        <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                          <span className="text-slate-400 font-bold text-xl tracking-widest uppercase opacity-20">
                            {slides[currentSlide].componentId}
                          </span>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                  {/* Subtle gradient overlay to ensure close button visibility */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent z-10 pointer-events-none" />
                </div>

                {/* Content Area */}
                <div className="p-8 flex flex-col bg-white relative">
                  <div className="min-h-[100px] flex flex-col justify-start w-full">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-col items-start w-full"
                      >
                        <div className="flex items-center gap-3 mb-2 flex-wrap sm:flex-nowrap">
                          <h2 className="text-[22px] sm:text-[24px] font-bold text-neutral-900 leading-tight whitespace-nowrap">
                            {slides[currentSlide].title.split('WorkfxAI').map((part, i, arr) => (
                              <React.Fragment key={i}>
                                {part}
                                {i < arr.length - 1 && (
                                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 font-extrabold">
                                    WorkfxAI
                                  </span>
                                )}
                              </React.Fragment>
                            ))}
                          </h2>
                          {slides[currentSlide].badge && (
                            <span className="px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-neutral-500 bg-neutral-100 rounded-full border border-neutral-200/60">
                              {slides[currentSlide].badge}
                            </span>
                          )}
                        </div>
                        <p className="text-[16px] text-neutral-500 leading-relaxed">
                          {slides[currentSlide].description}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  
                  {/* Dots - Moved up */}
                  <div className="flex justify-center space-x-1.5 mb-8 w-full">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setDirection(index > currentSlide ? 1 : -1);
                          setCurrentSlide(index);
                        }}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          index === currentSlide ? 'w-6 bg-neutral-400' : 'w-1.5 bg-neutral-200 hover:bg-neutral-300'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>

                  {/* Bottom Button - Full width, centered, static text */}
                  <button 
                    onClick={nextSlide}
                    className="w-full py-3.5 bg-neutral-900 hover:bg-black text-white rounded-xl font-medium text-[16px] transition-all active:scale-[0.98] flex items-center justify-center gap-2 shadow-md group uppercase"
                  >
                    {slides[currentSlide].buttonText}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
