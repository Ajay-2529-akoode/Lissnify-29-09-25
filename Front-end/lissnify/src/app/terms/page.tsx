"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, FileText, Shield, Users, AlertTriangle, CheckCircle, XCircle } from "lucide-react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import MetaHead from "@/Components/MetaHead";
import { getMetaData } from "@/utils/meta";

export default function TermsOfService() {
  // Get meta data for the terms page
  const metaData = getMetaData('terms');

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
            <span className="text-[#8B4513]">Terms of Service</span>
          </div>
        </div>

        {/* Page Title */}
        <div className="relative z-10 px-6 mt-8 text-center">
          <h1 className="text-5xl font-bold text-[#8B4513] mb-4">Terms of Service</h1>
          <p className="text-gray-700 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed font-regular">
            Please read these terms carefully before using our mental health support platform.
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
                <FileText className="w-6 h-6 text-[#8B4513]" />
              </div>
              <h2 className="text-3xl font-bold text-[#8B4513]">Terms of Use – Lissnify</h2>
            </div>
            <p className="text-lg text-[#8B4513]/80 leading-relaxed mb-4">
              <strong>Effective Date:</strong> 8th Oct 24
            </p>
            <p className="text-lg text-[#8B4513]/80 leading-relaxed">
              Welcome to Lissnify ("we," "our," "us"). By accessing or using the Lissnify platform ("Platform"), you agree to be bound by these Terms of Use ("Terms"). If you do not agree, please do not use our Platform.
            </p>
          </div>

          {/* Terms Content */}
          <div className="space-y-12">
            {/* Section 1 */}
            <div>
              <h3 className="text-2xl font-bold text-[#8B4513] mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-br from-[#FFB88C] to-[#F9E79F] rounded-full flex items-center justify-center text-white font-bold text-sm">1</span>
                Nature of Services
              </h3>
              <div className="bg-gradient-to-r from-[#FFB88C]/10 to-[#F9E79F]/10 rounded-2xl p-8">
                <ul className="space-y-4 text-[#8B4513]/80">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#8B4513] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-lg">Lissnify is a peer-support and social connection platform. It connects Seekers (individuals seeking support) with Listeners (individuals willing to listen, share experiences, or provide non-professional guidance).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#8B4513] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-lg">We are not a medical, legal, or financial advisory service.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#8B4513] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-lg">Content on Lissnify is for informational and emotional support purposes only.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#8B4513] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-lg"><strong>Emergency Use:</strong> If you are experiencing a crisis, please call your local emergency number immediately. Lissnify is not a substitute for professional care or emergency services.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 2 */}
            <div>
              <h3 className="text-2xl font-bold text-[#8B4513] mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-br from-[#FFB88C] to-[#F9E79F] rounded-full flex items-center justify-center text-white font-bold text-sm">2</span>
                Eligibility
              </h3>
              <div className="bg-gradient-to-r from-[#FFF8B5]/10 to-[#FFD1A9]/10 rounded-2xl p-8">
                <ul className="space-y-4 text-[#8B4513]/80">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#8B4513] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-lg">You must be 18 years or older to use Lissnify.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#8B4513] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-lg">By creating an account, you confirm that all information provided is accurate and complete.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <h3 className="text-2xl font-bold text-[#8B4513] mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-br from-[#FFB88C] to-[#F9E79F] rounded-full flex items-center justify-center text-white font-bold text-sm">3</span>
                User Conduct
              </h3>
              <div className="bg-gradient-to-r from-[#FFB88C]/10 to-[#F9E79F]/10 rounded-2xl p-8">
                <p className="text-lg text-[#8B4513]/80 mb-4">
                  You agree not to:
                </p>
                <ul className="space-y-4 text-[#8B4513]/80">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#8B4513] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-lg">Harass, abuse, threaten, or harm other users.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#8B4513] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-lg">Share illegal, obscene, defamatory, or offensive content.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#8B4513] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-lg">Impersonate another person or misrepresent your affiliation.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#8B4513] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-lg">Solicit money, products, or services outside of Lissnify-approved channels.</span>
                  </li>
                </ul>
                <p className="text-lg text-[#8B4513]/80 mt-4">
                  We reserve the right to suspend or terminate accounts that violate these rules.
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div>
              <h3 className="text-2xl font-bold text-[#8B4513] mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-br from-[#FFB88C] to-[#F9E79F] rounded-full flex items-center justify-center text-white font-bold text-sm">4</span>
                Disclaimer of Liability
              </h3>
              <div className="bg-gradient-to-r from-[#FFF8B5]/10 to-[#FFD1A9]/10 rounded-2xl p-8">
                <ul className="space-y-4 text-[#8B4513]/80">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#8B4513] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-lg">Lissnify does not guarantee accuracy, completeness, or reliability of any user-generated content.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#8B4513] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-lg">No professional relationship (medical, legal, financial, or therapeutic) is established through Lissnify.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#8B4513] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-lg">You use the Platform at your own risk.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#8B4513] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-lg">To the fullest extent permitted by law, Lissnify is not liable for any direct, indirect, incidental, or consequential damages arising from your use.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 5 */}
            <div>
              <h3 className="text-2xl font-bold text-[#8B4513] mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-br from-[#FFB88C] to-[#F9E79F] rounded-full flex items-center justify-center text-white font-bold text-sm">5</span>
                Intellectual Property
              </h3>
              <div className="bg-gradient-to-r from-[#FFB88C]/10 to-[#F9E79F]/10 rounded-2xl p-8">
                <p className="text-lg text-[#8B4513]/80">
                  All content, branding, and technology on the Platform are owned by Lissnify. Users may not copy, distribute, or exploit content without permission.
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div>
              <h3 className="text-2xl font-bold text-[#8B4513] mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-br from-[#FFB88C] to-[#F9E79F] rounded-full flex items-center justify-center text-white font-bold text-sm">6</span>
                Account Suspension & Termination
              </h3>
              <div className="bg-gradient-to-r from-[#FFF8B5]/10 to-[#FFD1A9]/10 rounded-2xl p-8">
                <p className="text-lg text-[#8B4513]/80">
                  We may suspend, restrict, or terminate your account if you violate these Terms or engage in harmful behavior.
                </p>
              </div>
            </div>

            {/* Section 7 */}
            <div>
              <h3 className="text-2xl font-bold text-[#8B4513] mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-br from-[#FFB88C] to-[#F9E79F] rounded-full flex items-center justify-center text-white font-bold text-sm">7</span>
                Modifications
              </h3>
              <div className="bg-gradient-to-r from-[#FFB88C]/10 to-[#F9E79F]/10 rounded-2xl p-8">
                <p className="text-lg text-[#8B4513]/80">
                  We may update these Terms from time to time. Continued use of the Platform after changes means you accept the revised Terms.
                </p>
              </div>
            </div>

            {/* Section 8 */}
            <div>
              <h3 className="text-2xl font-bold text-[#8B4513] mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-br from-[#FFB88C] to-[#F9E79F] rounded-full flex items-center justify-center text-white font-bold text-sm">8</span>
                Governing Law
              </h3>
              <div className="bg-gradient-to-r from-[#FFF8B5]/10 to-[#FFD1A9]/10 rounded-2xl p-8">
                <p className="text-lg text-[#8B4513]/80">
                  These Terms shall be governed by and construed under the laws of India.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-16 p-8 bg-gradient-to-br from-[#FFB88C]/20 to-[#F9E79F]/20 rounded-3xl border-2 border-[#FFB88C]/30">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#8B4513] mb-4">Questions About These Terms?</h3>
              <p className="text-lg text-[#8B4513]/80 mb-8">
                If you have any questions about these Terms of Service, please contact us.
              </p>
              <div className="flex justify-center items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#8B4513] rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
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
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Join Our Community?</h2>
          <p className="text-xl text-white/90 mb-8">Start your journey towards better mental health and emotional well-being.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/signup" 
              className="px-8 py-4 bg-white text-[#8B4513] font-bold rounded-2xl hover:bg-[#FFB88C] transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Get Started Today
            </Link>
            <Link 
              href="/help" 
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-2xl hover:bg-white hover:text-[#8B4513] transition-all duration-300 hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
