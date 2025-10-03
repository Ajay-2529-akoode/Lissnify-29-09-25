"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, Heart, Users, Shield, MessageCircle, Star, Sun, Leaf, Phone, Mail, MapPin } from "lucide-react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import MetaHead from "@/Components/MetaHead";
import { getMetaData } from "@/utils/meta";

export default function AboutPage() {
  // Get meta data for the about page
  const metaData = getMetaData('about');

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <MetaHead meta={metaData} />
      <Navbar />
      
      {/* Header with background */}
      <div className="relative h-96 bg-gradient-to-r from-[#FFB88C]/20 via-[#FFF8B5]/20 to-[#F9E79F]/20 mt-20">
        {/* Background pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23D2691E%22 fill-opacity=%220.05%22%3E%3Cpath d=%22m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-8 right-16 w-32 h-32 bg-gradient-to-br from-[#FFB88C]/30 to-[#F9E79F]/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-8 left-16 w-24 h-24 bg-gradient-to-br from-[#FFF8B5]/25 to-[#FFD1A9]/20 rounded-full blur-xl animate-pulse delay-500"></div>

        {/* Breadcrumbs */}
        <div className="relative z-10 px-6 pt-20">
          <div className="flex items-center gap-2 text-[#8B4513]/70">
            <Link href="/" className="hover:text-[#8B4513] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#8B4513]">About Us</span>
          </div>
        </div>

        {/* Page Title */}
        <div className="relative z-10 px-6 mt-8 text-center">
          <h1 className="text-5xl font-bold text-[#8B4513] mb-4">About Lissnify</h1>
          <p className="text-gray-700 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed font-regular">
            Your sanctuary for emotional well-being and mental health support. 
            Building a compassionate community where healing thrives naturally.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        
        {/* Mission Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#FFB88C]/20 to-[#F9E79F]/20 rounded-2xl border-2 border-[#FFB88C]/30 mb-6">
              <Heart className="w-6 h-6 text-[#8B4513] animate-pulse" />
              <span className="text-lg font-bold text-[#8B4513]">Our Mission</span>
            </div>
            <h2 className="text-4xl font-bold text-[#8B4513] mb-6">Creating Safe Spaces for Mental Wellness</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              At Lissnify, we believe that everyone deserves access to compassionate mental health support. 
              Our platform connects those seeking help with trained listeners who provide a safe, 
              non-judgmental space for emotional healing and growth.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-3xl font-bold text-[#8B4513] text-center mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Safety & Privacy",
                description: "Your conversations are completely confidential. We use end-to-end encryption and never share your personal information.",
                color: "from-[#FFB88C] to-[#F9E79F]"
              },
              {
                icon: Heart,
                title: "Compassion",
                description: "Every interaction is guided by empathy, understanding, and genuine care for your emotional well-being.",
                color: "from-[#FFF8B5] to-[#FFD1A9]"
              },
              {
                icon: Users,
                title: "Community",
                description: "We foster a supportive community where everyone can find connection, understanding, and hope.",
                color: "from-[#F9E79F] to-[#FFB88C]"
              }
            ].map((value, index) => (
              <div key={index} className="p-8 bg-white/60 rounded-3xl border-2 border-[#FFB88C]/20 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <value.icon className="w-8 h-8 text-[#8B4513]" />
                </div>
                <h4 className="text-xl font-bold text-[#8B4513] mb-4">{value.title}</h4>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-3xl font-bold text-[#8B4513] text-center mb-12">How Lissnify Works</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Find Your Listener",
                description: "Browse our community of trained, compassionate listeners and choose someone who resonates with you.",
                icon: Users
              },
              {
                step: "02", 
                title: "Connect Safely",
                description: "Start a conversation in our secure, encrypted chat environment where you can share at your own pace.",
                icon: MessageCircle
              },
              {
                step: "03",
                title: "Heal Together",
                description: "Experience genuine support, understanding, and guidance as you work through your challenges.",
                icon: Heart
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#FFB88C] to-[#F9E79F] rounded-full flex items-center justify-center mx-auto shadow-xl">
                    <span className="text-2xl font-bold text-[#8B4513]">{step.step}</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-[#FFF8B5] to-[#FFD1A9] rounded-full flex items-center justify-center border-2 border-white">
                    <step.icon className="w-4 h-4 text-[#8B4513]" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-[#8B4513] mb-4">{step.title}</h4>
                <p className="text-gray-700 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-3xl font-bold text-[#8B4513] text-center mb-12">Our Commitment to You</h3>
          <div className="bg-gradient-to-br from-[#FFB88C]/10 to-[#F9E79F]/10 rounded-3xl p-8 border-2 border-[#FFB88C]/20">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#FFB88C] to-[#F9E79F] rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Star className="w-10 h-10 text-[#8B4513]" />
              </div>
              <h4 className="text-2xl font-bold text-[#8B4513] mb-4">Professional & Caring</h4>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Our listeners are carefully selected and trained to provide the highest quality of emotional support. 
                They come from diverse backgrounds but share one common goal: helping you feel heard, understood, and supported.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/60 rounded-xl border border-[#FFB88C]/30">
                  <Shield className="w-5 h-5 text-[#8B4513]" />
                  <span className="font-semibold text-[#8B4513]">Background Verified</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/60 rounded-xl border border-[#FFB88C]/30">
                  <Heart className="w-5 h-5 text-[#8B4513]" />
                  <span className="font-semibold text-[#8B4513]">Empathy Trained</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/60 rounded-xl border border-[#FFB88C]/30">
                  <Users className="w-5 h-5 text-[#8B4513]" />
                  <span className="font-semibold text-[#8B4513]">Community Focused</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-[#8B4513] text-center mb-12">Get in Touch</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-white/60 rounded-2xl border border-[#FFB88C]/20">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FFB88C] to-[#F9E79F] rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[#8B4513]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#8B4513]">Email Support</h4>
                  <p className="text-gray-700">support@lissnify.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white/60 rounded-2xl border border-[#FFB88C]/20">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FFF8B5] to-[#FFD1A9] rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#8B4513]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#8B4513]">Global Reach</h4>
                  <p className="text-gray-700">Available worldwide, 24/7</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#FFB88C]/10 to-[#F9E79F]/10 rounded-2xl p-6 border-2 border-[#FFB88C]/20">
              <h4 className="text-xl font-bold text-[#8B4513] mb-4">Ready to Start Your Journey?</h4>
              <p className="text-gray-700 mb-6">
                Join our community of compassionate listeners and seekers. 
                Your mental wellness journey starts with a single conversation.
              </p>
              <div className="flex gap-4">
                <Link 
                  href="/signup" 
                  className="px-6 py-3 bg-gradient-to-r from-[#FFB88C] to-[#F9E79F] text-[#8B4513] font-bold rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Get Started
                </Link>
                <Link 
                  href="/community" 
                  className="px-6 py-3 bg-white/60 text-[#8B4513] font-bold rounded-xl border-2 border-[#FFB88C]/30 hover:bg-white/80 transition-all duration-300"
                >
                  Explore Community
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

