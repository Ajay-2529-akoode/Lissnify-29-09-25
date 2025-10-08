"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Shield, Lock, Eye, Users, FileText, Phone, Mail } from "lucide-react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import MetaHead from "@/Components/MetaHead";
import { getMetaData } from "@/utils/meta";

export default function PrivacyPolicy() {
  // Get meta data for the privacy page
  const metaData = getMetaData('privacy');

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <MetaHead meta={metaData} />
      <Navbar />
      {/* Header with background image */}
      <div className="relative h-96 bg-gradient-to-r from-[#FFB88C]/20 via-[#FFF8B5]/20 to-[#FFD1A9]/20 mt-20">
        {/* Background pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23D2691E%22 fill-opacity=%220.05%22%3E%3Cpath d=%22m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        

        {/* Breadcrumbs */}
        <div className="relative z-10 px-6 pt-20">
          <div className="flex items-center gap-2 text-[#8B4513]/70">
            <Link href="/" className="hover:text-[#8B4513] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#8B4513]">Privacy Policy</span>
          </div>
        </div>

        {/* Page Title */}
        <div className="relative z-10 px-6 mt-8 text-center">
          <h1 className="text-5xl font-bold text-[#8B4513] mb-4">Privacy Policy</h1>
          <p className="text-gray-700 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed font-regular">
            Your privacy and mental well-being are our top priorities. Learn how we protect and handle your personal information.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-[#FFB88C]/20">
          {/* Introduction */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FFB88C] to-[#F9E79F] rounded-2xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-[#8B4513]" />
              </div>
              <h2 className="text-3xl font-bold text-[#8B4513]">Privacy Policy – Lissnify</h2>
            </div>
            <p className="text-lg text-[#8B4513]/80 leading-relaxed mb-4">
              <strong>Effective Date:</strong> 8th Oct 25
            </p>
            <p className="text-lg text-[#8B4513]/80 leading-relaxed">
              Your privacy is important to us. This Privacy Policy explains how Lissnify collects, uses, and protects your personal information.
            </p>
          </div>

          {/* Privacy Policy Content */}
          <div className="space-y-12">
            {/* Section 1 */}
            <div>
              <h3 className="text-2xl font-bold text-[#8B4513] mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-br from-[#FFB88C] to-[#F9E79F] rounded-full flex items-center justify-center text-white font-bold text-sm">1</span>
                Information We Collect
              </h3>
              <div className="bg-gradient-to-r from-[#FFB88C]/10 to-[#F9E79F]/10 rounded-2xl p-8">
                <ul className="space-y-4 text-[#8B4513]/80">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#8B4513] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-lg"><strong>Personal Information:</strong> Name, email, phone number, age, and any details you voluntarily share.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#8B4513] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-lg"><strong>Usage Data:</strong> IP address, device type, browser, and interactions with the Platform.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#8B4513] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-lg"><strong>Chat Data:</strong> Conversations between Seekers and Listeners are stored securely but may be monitored for compliance and safety.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 2 */}
            <div>
              <h3 className="text-2xl font-bold text-[#8B4513] mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-br from-[#FFB88C] to-[#F9E79F] rounded-full flex items-center justify-center text-white font-bold text-sm">2</span>
                How We Use Your Information
              </h3>
              <div className="bg-gradient-to-r from-[#FFF8B5]/10 to-[#FFD1A9]/10 rounded-2xl p-8">
                <ul className="space-y-4 text-[#8B4513]/80">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#8B4513] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-lg">To provide and improve the Platform.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#8B4513] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-lg">To connect Seekers with Listeners.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#8B4513] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-lg">To monitor for inappropriate or harmful content.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#8B4513] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-lg">To communicate important updates or policy changes.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#8B4513] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-lg">To comply with legal obligations.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <h3 className="text-2xl font-bold text-[#8B4513] mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-br from-[#FFB88C] to-[#F9E79F] rounded-full flex items-center justify-center text-white font-bold text-sm">3</span>
                Data Sharing
              </h3>
              <div className="bg-gradient-to-r from-[#FFB88C]/10 to-[#F9E79F]/10 rounded-2xl p-8">
                <p className="text-lg text-[#8B4513]/80 mb-4">
                  We do not sell your personal data.
                </p>
                <p className="text-lg text-[#8B4513]/80 mb-4">
                  We may share limited information with:
                </p>
                <ul className="space-y-4 text-[#8B4513]/80">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#8B4513] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-lg"><strong>Service Providers:</strong> For hosting, analytics, or support.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#8B4513] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-lg"><strong>Legal Authorities:</strong> If required by law or to protect safety.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 4 */}
            <div>
              <h3 className="text-2xl font-bold text-[#8B4513] mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-br from-[#FFB88C] to-[#F9E79F] rounded-full flex items-center justify-center text-white font-bold text-sm">4</span>
                Data Security
              </h3>
              <div className="bg-gradient-to-r from-[#FFF8B5]/10 to-[#FFD1A9]/10 rounded-2xl p-8">
                <p className="text-lg text-[#8B4513]/80">
                  We use encryption and secure servers to protect your data. However, no system is 100% secure, and you acknowledge the risks of online communication.
                </p>
              </div>
            </div>

            {/* Section 5 */}
            <div>
              <h3 className="text-2xl font-bold text-[#8B4513] mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-br from-[#FFB88C] to-[#F9E79F] rounded-full flex items-center justify-center text-white font-bold text-sm">5</span>
                Data Retention
              </h3>
              <div className="bg-gradient-to-r from-[#FFB88C]/10 to-[#F9E79F]/10 rounded-2xl p-8">
                <p className="text-lg text-[#8B4513]/80">
                  We retain data as long as necessary to provide services or comply with legal obligations. You may request deletion of your data by contacting us.
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div>
              <h3 className="text-2xl font-bold text-[#8B4513] mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-br from-[#FFB88C] to-[#F9E79F] rounded-full flex items-center justify-center text-white font-bold text-sm">6</span>
                Children's Privacy
              </h3>
              <div className="bg-gradient-to-r from-[#FFF8B5]/10 to-[#FFD1A9]/10 rounded-2xl p-8">
                <p className="text-lg text-[#8B4513]/80">
                  Our Platform is not intended for users under 18 years of age. We do not knowingly collect information from minors.
                </p>
              </div>
            </div>

            {/* Section 7 */}
            <div>
              <h3 className="text-2xl font-bold text-[#8B4513] mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-br from-[#FFB88C] to-[#F9E79F] rounded-full flex items-center justify-center text-white font-bold text-sm">7</span>
                Your Rights
              </h3>
              <div className="bg-gradient-to-r from-[#FFB88C]/10 to-[#F9E79F]/10 rounded-2xl p-8">
                <p className="text-lg text-[#8B4513]/80 mb-4">
                  Depending on your jurisdiction, you may have rights to:
                </p>
                <ul className="space-y-4 text-[#8B4513]/80">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#8B4513] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-lg">Access the data we hold about you.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#8B4513] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-lg">Request corrections or deletion.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#8B4513] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-lg">Opt out of marketing communications.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 8 */}
            <div>
              <h3 className="text-2xl font-bold text-[#8B4513] mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-br from-[#FFB88C] to-[#F9E79F] rounded-full flex items-center justify-center text-white font-bold text-sm">8</span>
                Updates to Privacy Policy
              </h3>
              <div className="bg-gradient-to-r from-[#FFF8B5]/10 to-[#FFD1A9]/10 rounded-2xl p-8">
                <p className="text-lg text-[#8B4513]/80">
                  We may update this Privacy Policy. Changes will be posted with a new effective date.
                </p>
              </div>
            </div>

            {/* Section 9 */}
            <div>
              <h3 className="text-2xl font-bold text-[#8B4513] mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-br from-[#FFB88C] to-[#F9E79F] rounded-full flex items-center justify-center text-white font-bold text-sm">9</span>
                Contact Us
              </h3>
              <div className="bg-gradient-to-r from-[#FFB88C]/10 to-[#F9E79F]/10 rounded-2xl p-8">
                <p className="text-lg text-[#8B4513]/80 mb-4">
                  For questions about these Terms or Privacy Policy:
                </p>
                <div className="flex items-center gap-3">
                  <Mail className="w-6 h-6 text-[#8B4513]" />
                  <span className="text-lg font-semibold text-[#8B4513]">hello@lissnify.com</span>
                </div>
              </div>
            </div>

          </div>

          {/* Contact Section */}
          <div className="mt-16 p-8 bg-gradient-to-br from-[#FFB88C]/20 to-[#F9E79F]/20 rounded-3xl border-2 border-[#FFB88C]/30">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#8B4513] mb-4">Have Questions?</h3>
              <p className="text-lg text-[#8B4513]/80 mb-8">
                For any questions about our Privacy Policy or data protection, please reach out to us.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#8B4513] rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg font-semibold text-[#8B4513]">hello@lissnify.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-[#8B4513] to-[#A0522D] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Healing Journey?</h2>
          <p className="text-xl text-white/90 mb-8">Join our compassionate community and find the support you deserve.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/signup" 
              className="px-8 py-4 bg-white text-[#8B4513] font-bold rounded-2xl hover:bg-[#FFB88C] transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Get Started Today
            </Link>
            <Link 
              href="/community" 
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-2xl hover:bg-white hover:text-[#8B4513] transition-all duration-300 hover:scale-105"
            >
              Explore Community
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
