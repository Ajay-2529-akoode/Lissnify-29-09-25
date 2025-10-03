"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, Phone, Mail, MapPin, Shield, Users, MessageCircle, Star, Sun, Leaf } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-[#000000] relative overflow-hidden">
      
      {/* Decorative background elements with warm tones */}
      <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-[#FFB88C] via-[#FFF8B5] to-[#FFD1A9]"></div>
      <div className="absolute top-12 left-16 w-40 h-40 bg-gradient-to-br from-[#FFB88C]/20 to-[#F9E79F]/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-16 right-20 w-48 h-48 bg-gradient-to-br from-[#FFF8B5]/25 to-[#FFD1A9]/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      <div className="absolute top-1/3 left-1/2 w-32 h-32 bg-gradient-to-br from-[#F9E79F]/20 to-[#FFB88C]/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23D2691E%22 fill-opacity=%220.03%22%3E%3Cpath d=%22m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

      
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-6 sm:py-8 lg:py-12 xl:py-16 relative z-10">
        <div className="grid gap-4 sm:gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Enhanced Logo + Tagline with warm colors */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              {/* <div className="relative"> */}
                {/* <div className="w-14 h-14 bg-gradient-to-br from-[#FFB88C] to-[#F9E79F] rounded-2xl flex items-center justify-center shadow-2xl border-2 border-white/50">
                  <Heart className="w-8 h-8 text-[#000000] animate-pulse" />
                </div> */}
                {/* <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-[#FFF8B5] to-[#F9E79F] rounded-full border-3 border-white flex items-center justify-center">
                  <Sun className="w-3 h-3 text-[#000000]" />
                </div> */}
              {/* </div> */}
              <Link href="/" className="hover:opacity-80 transition-opacity duration-300">
                <img 
                  src="/logo.png" 
                  alt="Lissnify Logo" 
                  className="h-16 w-auto"
                />
              </Link>
            </div>
            <p className="text-[#000000]/80 leading-relaxed mb-3 sm:mb-4 font-medium text-sm sm:text-base lg:text-lg">
              Your sanctuary for emotional well-being and mental health support. 
              Building a compassionate community where healing thrives naturally.
            </p>
            
            {/* Trust indicators with warm styling */}
            <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4">
              <div className="flex items-center gap-3 px-4 py-3 bg-white/60 rounded-2xl border-2 border-[#FFB88C]/30 backdrop-blur-sm shadow-lg">
                <Shield className="w-5 h-5 text-[#000000]" />
                <span className="text-sm font-bold text-[#000000]">Secure & Safe</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 bg-white/60 rounded-2xl border-2 border-[#F9E79F]/30 backdrop-blur-sm shadow-lg">
                <Leaf className="w-5 h-5 text-[#000000]" />
                <span className="text-sm font-bold text-[#000000]">Nurturing</span>
              </div>
              {/* <div className="flex items-center gap-3 px-4 py-3 bg-white/60 rounded-2xl border-2 border-[#F9E79F]/30 backdrop-blur-sm shadow-lg">
                <Leaf className="w-5 h-5 text-[#000000]" />
                <span className="text-sm font-bold text-[#000000]">Nurturing</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 bg-white/60 rounded-2xl border-2 border-[#F9E79F]/30 backdrop-blur-sm shadow-lg">
                <Leaf className="w-5 h-5 text-[#000000]" />
                <span className="text-sm font-bold text-[#000000]">Nurturing</span>
              </div> */}
            </div>
          </div>

          {/* Mobile/Tablet Layout: Quick Links and Support side by side */}
          <div className="lg:hidden flex flex-row gap-4 md:gap-6">
            {/* Enhanced Quick Links with warm hover effects */}
            <div className="w-1/2">
              <div className="flex items-center gap-3 mb-3 md:mb-6">
                {/* <div className="w-10 h-10 bg-gradient-to-br from-[#FFB88C]/30 to-[#FFF8B5]/30 rounded-xl flex items-center justify-center border border-[#FFB88C]/40">
                  <Star className="w-5 h-5 text-[#000000]" />
                </div> */}
                <h3 className="text-lg md:text-2xl font-bold text-[#000000]">Quick Links</h3>
              </div>
              <ul className="space-y-0.5 md:space-y-1">
                {[
                  { name: "Home", href: "/" },
                  { name: "About Us", href: "/about" },
                  { name: "Community", href: "/community" },
                  // { name: "Resources", href: "/resources" },
                  { name: "Blog", href: "/blog" }
                ].map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="group flex items-center gap-3 text-[#000000]/70 hover:text-[#000000] transition-all duration-300 hover:translate-x-2 py-1"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-[#FFB88C] to-[#F9E79F] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125"></div>
                      <span className="font-semibold text-sm md:text-base group-hover:font-bold">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Enhanced Support with crisis hotline */}
            <div className="w-1/2">
              <div className="flex items-center gap-3 mb-3 md:mb-6">
                {/* <div className="w-10 h-10 bg-gradient-to-br from-[#FFF8B5]/30 to-[#FFD1A9]/30 rounded-xl flex items-center justify-center border border-[#FFF8B5]/40">
                  <MessageCircle className="w-5 h-5 text-[#000000]" />
                </div> */}
                <h3 className="text-lg md:text-2xl font-bold text-[#000000]">Support</h3>
              </div>
              <ul className="space-y-0.5 md:space-y-1 mb-3 md:mb-6">
                {[
                  { name: "Help Center", href: "/help" },
                  { name: "Privacy Policy", href: "/privacy" },
                  { name: "Terms of Service", href: "/terms" },
                  // { name: "Crisis Support", href: "/crisis" }
                ].map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="group flex items-center gap-3 text-[#000000]/70 hover:text-[#000000] transition-all duration-300 hover:translate-x-2 py-1"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-[#FFF8B5] to-[#FFD1A9] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125"></div>
                      <span className="font-semibold text-sm md:text-base group-hover:font-bold">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
              
              {/* Emergency contact with warm, reassuring styling */}
              {/* <div className="p-6 bg-gradient-to-br from-[#FFB88C]/20 to-[#F9E79F]/20 rounded-2xl border-2 border-[#FFB88C]/30 backdrop-blur-sm shadow-xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#FFB88C] to-[#F9E79F] rounded-full flex items-center justify-center">
                    <Phone className="w-4 h-4 text-[#000000] animate-pulse" />
                  </div>
                  <span className="text-sm font-bold text-[#000000]">Crisis Hotline</span>
                </div>
                <p className="text-[#000000] font-bold text-xl">1-800-HELP-NOW</p>
                <p className="text-[#000000]/60 text-sm font-medium">Available 24/7 • You're never alone</p>
              </div> */}
            </div>
          </div>

          {/* Desktop Layout: Original grid structure */}
          <div className="hidden lg:block">
            {/* Enhanced Quick Links with warm hover effects */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                {/* <div className="w-10 h-10 bg-gradient-to-br from-[#FFB88C]/30 to-[#FFF8B5]/30 rounded-xl flex items-center justify-center border border-[#FFB88C]/40">
                  <Star className="w-5 h-5 text-[#000000]" />
                </div> */}
                <h3 className="text-2xl font-bold text-[#000000]">Quick Links</h3>
              </div>
              <ul className="space-y-1">
                {[
                  { name: "Home", href: "/" },
                  { name: "About Us", href: "/about" },
                  { name: "Community", href: "/community" },
                  // { name: "Resources", href: "/resources" },
                  { name: "Blog", href: "/blog" }
                ].map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="group flex items-center gap-3 text-[#000000]/70 hover:text-[#000000] transition-all duration-300 hover:translate-x-2 py-1"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-[#FFB88C] to-[#F9E79F] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125"></div>
                      <span className="font-semibold text-base group-hover:font-bold">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="hidden lg:block">
            {/* Enhanced Support with crisis hotline */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                {/* <div className="w-10 h-10 bg-gradient-to-br from-[#FFF8B5]/30 to-[#FFD1A9]/30 rounded-xl flex items-center justify-center border border-[#FFF8B5]/40">
                  <MessageCircle className="w-5 h-5 text-[#000000]" />
                </div> */}
                <h3 className="text-2xl font-bold text-[#000000]">Support</h3>
              </div>
              <ul className="space-y-1 mb-6">
                {[
                  { name: "Help Center", href: "/help" },
                  { name: "Privacy Policy", href: "/privacy" },
                  { name: "Terms of Service", href: "/terms" },
                  // { name: "Crisis Support", href: "/crisis" }
                ].map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="group flex items-center gap-3 text-[#000000]/70 hover:text-[#000000] transition-all duration-300 hover:translate-x-2 py-1"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-[#FFF8B5] to-[#FFD1A9] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125"></div>
                      <span className="font-semibold text-base group-hover:font-bold">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
              
              {/* Emergency contact with warm, reassuring styling */}
              {/* <div className="p-6 bg-gradient-to-br from-[#FFB88C]/20 to-[#F9E79F]/20 rounded-2xl border-2 border-[#FFB88C]/30 backdrop-blur-sm shadow-xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#FFB88C] to-[#F9E79F] rounded-full flex items-center justify-center">
                    <Phone className="w-4 h-4 text-[#000000] animate-pulse" />
                  </div>
                  <span className="text-sm font-bold text-[#000000]">Crisis Hotline</span>
                </div>
                <p className="text-[#000000] font-bold text-xl">1-800-HELP-NOW</p>
                <p className="text-[#000000]/60 text-sm font-medium">Available 24/7 • You're never alone</p>
              </div> */}
            </div>
          </div>

          {/* Enhanced Contact & Social with warm palette - Full width on mobile/tablet, original position on desktop */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 md:mb-5">
              {/* <div className="w-10 h-10 bg-gradient-to-br from-[#F9E79F]/30 to-[#FFB88C]/30 rounded-xl flex items-center justify-center border border-[#F9E79F]/40">
                <Heart className="w-5 h-5 text-[#000000]" />
              </div> */}
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#000000]">Stay Connected</h3>
            </div>
            
            {/* Contact info */}
            <div className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-4 mb-3 sm:mb-4 md:mb-5 lg:mb-6">
              <div className="flex items-center gap-3 sm:gap-4 text-[#000000]/90">
                <div className="w-7 h-7 sm:w-9 sm:h-9 bg-[#FFB88C]/40 rounded-xl flex items-center justify-center">
                  <Mail className="w-4 h-4 sm:w-6 sm:h-6 text-[#000000]" />
                </div>
                <span className="font-bold text-base sm:text-lg lg:text-xl">support@Lissnify.com</span>
              </div>
              <div className="flex items-center gap-3 sm:gap-4 text-[#000000]/90">
                <div className="w-7 h-7 sm:w-9 sm:h-9 bg-[#F9E79F]/40 rounded-xl flex items-center justify-center">
                  <MapPin className="w-4 h-4 sm:w-6 sm:h-6 text-[#000000]" />
                </div>
                <span className="font-bold text-base sm:text-lg lg:text-xl">Worldwide Support</span>
              </div>
            </div>
            
            {/* Enhanced Social Media with warm styling */}
            <div className="mb-4 sm:mb-6">
              <p className="text-[#000000]/80 text-base sm:text-lg mb-4 sm:mb-5 font-bold">Follow our healing journey</p>
              <div className="flex gap-3 sm:gap-4">
                {[
                  { image: "/facebook.png", name: "Facebook" },
                  { image: "/instagram.png", name: "Instagram" },
                  { image: "/twitter.png", name: "Twitter" },
                  { image: "/linkedin.png", name: "LinkedIn" }
                ].map(({ image, name }, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`group w-14 h-14 sm:w-16 sm:h-16 bg-white/80 rounded-2xl flex items-center justify-center hover:bg-gradient-to-br hover:from-[#FFB88C] hover:to-[#F9E79F] transition-all duration-300 hover:scale-110 hover:shadow-xl backdrop-blur-sm border-2 border-[#FFB88C]/30 hover:border-[#000000]/40`}
                    aria-label={name}
                  >
                    <Image
                      src={image}
                      alt={name}
                      width={28}
                      height={28}
                      className="w-6 h-6 sm:w-7 sm:h-7 rounded transition-all duration-300 group-hover:scale-110"
                    />
                  </a>
                ))}
              </div>
            </div>
            
            {/* Newsletter signup with warm, inviting design */}
            {/* <div className="p-6 bg-gradient-to-br from-[#FFF8B5]/30 to-[#FFD1A9]/30 rounded-2xl border-2 border-[#FFF8B5]/40 backdrop-blur-sm shadow-xl">
              <div className="flex items-center gap-2 mb-4">
                <Sun className="w-5 h-5 text-[#000000]" />
                <p className="text-base font-bold text-[#000000]">Weekly Wellness Tips</p>
              </div>
              <div className="flex gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-3 bg-white/80 border-2 border-[#FFB88C]/30 rounded-xl text-[#000000] placeholder-[#000000]/50 text-sm focus:outline-none focus:border-[#000000]/50 transition-all duration-300 backdrop-blur-sm"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-[#FFB88C] to-[#F9E79F] rounded-xl text-[#000000] text-sm font-bold hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-white/30">
                  Join
                </button>
              </div>
            </div> */}
          </div>
        </div>

        {/* Enhanced Bottom Bar with warm, grounding feel */}
        <div className="mt-3 sm:mt-4 lg:mt-6 pt-3 sm:pt-4 lg:pt-6 border-t-2 border-[#FFB88C]/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 lg:gap-6">
            <div className="flex flex-col md:flex-row items-center gap-3 sm:gap-4 lg:gap-6 text-[#000000]/70 text-xs sm:text-sm">
              <span className="font-bold text-sm sm:text-base lg:text-lg">© {new Date().getFullYear()} Lissnify. All rights reserved.</span>
              {/* <div className="flex items-center gap-3">
                <Heart className="w-5 h-5 text-[#FFB88C] animate-pulse" />
                <span className="font-semibold">Made with care for mental wellness</span>
              </div> */}
            </div>
            
            
<div className="flex items-center gap-4">
              <div 
                className="flex items-center gap-3 px-6 py-3 bg-white/70 rounded-2xl border-2 border-[#F9E79F]/40 backdrop-blur-sm shadow-lg cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-300 hover:bg-white/80"
                onClick={() => window.open("https://www.akoode.com/", "_blank")}
              >
                <div className=""></div>
                {/* <span className="text-sm font-bold text-[#000000]">All systems nurturing</span> */}
                <Heart className="w-5 h-5 text-[#FFB88C] animate-pulse" />
                <span className="font-semibold">Made with care for mental wellness</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}