"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, Users, Heart, Shield, AlertTriangle, CheckCircle, XCircle, MessageCircle, Eye } from "lucide-react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import MetaHead from "@/Components/MetaHead";
import { getMetaData } from "@/utils/meta";

export default function CommunityGuidelines() {
  // Get meta data for the community guidelines page
  const metaData = getMetaData('community');

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
            <span className="text-[#8B4513]">Community Guidelines</span>
          </div>
        </div>

        {/* Page Title */}
        <div className="relative z-10 px-6 mt-8 text-center">
          <h1 className="text-5xl font-bold text-[#8B4513] mb-4">Community Guidelines</h1>
          <p className="text-gray-700 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed font-regular">
            Building a safe, supportive, and respectful space together.
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
                <Users className="w-6 h-6 text-[#8B4513]" />
              </div>
              <h2 className="text-3xl font-bold text-[#8B4513]">Lissnify Community Guidelines</h2>
            </div>
            <p className="text-lg text-[#8B4513]/80 leading-relaxed mb-4">
              At Lissnify, our mission is to create a safe and supportive space where people can share their stories, connect with others, and find encouragement. To keep our community respectful and inclusive, we ask every member to follow these guidelines.
            </p>
            <p className="text-lg text-[#8B4513]/80 leading-relaxed font-semibold">
              By participating in the Lissnify community, you agree to abide by these rules.
            </p>
          </div>

          {/* Guidelines Content */}
          <div className="space-y-12">
            {/* What's Encouraged */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-[#FFB88C] to-[#F9E79F] rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-[#8B4513]" />
                </div>
                <h3 className="text-2xl font-bold text-[#8B4513]">What's Encouraged</h3>
              </div>
              <div className="bg-gradient-to-r from-[#FFB88C]/10 to-[#F9E79F]/10 rounded-2xl p-8">
                <ul className="space-y-4 text-[#8B4513]/80">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#8B4513] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-lg"><strong>Respectful Sharing:</strong> Share your personal experiences, thoughts, or support in a respectful way.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#8B4513] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-lg"><strong>Empathy First:</strong> Be kind, compassionate, and considerate of others' struggles.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#8B4513] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-lg"><strong>Supportive Feedback:</strong> Offer encouragement and helpful perspectives, not judgment.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#8B4513] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-lg"><strong>Privacy Awareness:</strong> Protect your own and others' privacy. Share only what you're comfortable with.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#8B4513] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-lg"><strong>Constructive Engagement:</strong> Like, comment, and share to uplift and support community voices.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* What's Not Allowed */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-red-400 to-red-500 rounded-xl flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#8B4513]">What's Not Allowed</h3>
              </div>
              <p className="text-lg text-[#8B4513]/80 mb-6">
                To maintain a safe space, the following are strictly prohibited:
              </p>

              {/* Section 1: Harassment & Abuse */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-[#8B4513] mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-gradient-to-br from-red-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</span>
                  Harassment & Abuse
                </h4>
                <div className="bg-gradient-to-r from-red-50 to-red-100/50 rounded-2xl p-6">
                  <ul className="space-y-3 text-[#8B4513]/80">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-lg">No bullying, threats, or hate speech.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-lg">No discriminatory language based on race, religion, gender, sexuality, disability, or personal background.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 2: Explicit or Harmful Content */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-[#8B4513] mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-gradient-to-br from-red-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</span>
                  Explicit or Harmful Content
                </h4>
                <div className="bg-gradient-to-r from-red-50 to-red-100/50 rounded-2xl p-6">
                  <ul className="space-y-3 text-[#8B4513]/80">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-lg">No sexually explicit, violent, or graphic content.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-lg">No content that promotes self-harm, suicide, eating disorders, or unsafe behaviors.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 3: Misinformation & Harmful Advice */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-[#8B4513] mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-gradient-to-br from-red-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</span>
                  Misinformation & Harmful Advice
                </h4>
                <div className="bg-gradient-to-r from-red-50 to-red-100/50 rounded-2xl p-6">
                  <ul className="space-y-3 text-[#8B4513]/80">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-lg">Do not post false, misleading, or dangerous information (medical, legal, financial, etc.).</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-lg"><strong>Remember:</strong> Lissnify is not a substitute for professional advice.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 4: Spam & Promotions */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-[#8B4513] mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-gradient-to-br from-red-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</span>
                  Spam & Promotions
                </h4>
                <div className="bg-gradient-to-r from-red-50 to-red-100/50 rounded-2xl p-6">
                  <ul className="space-y-3 text-[#8B4513]/80">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-lg">No spam, advertising, or soliciting money, products, or services.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-lg">No phishing links, scams, or malicious activity.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 5: Privacy Violations */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-[#8B4513] mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-gradient-to-br from-red-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">5</span>
                  Privacy Violations
                </h4>
                <div className="bg-gradient-to-r from-red-50 to-red-100/50 rounded-2xl p-6">
                  <ul className="space-y-3 text-[#8B4513]/80">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-lg">Do not post personal information of others (names, addresses, phone numbers, etc.) without consent.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-lg">Respect confidentiality in private conversations.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Moderation & Enforcement */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-[#FFB88C] to-[#F9E79F] rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-[#8B4513]" />
                </div>
                <h3 className="text-2xl font-bold text-[#8B4513]">Moderation & Enforcement</h3>
              </div>
              <div className="bg-gradient-to-r from-[#FFF8B5]/10 to-[#FFD1A9]/10 rounded-2xl p-8">
                <ul className="space-y-4 text-[#8B4513]/80">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#8B4513] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-lg">Posts and comments that violate these guidelines may be removed without notice.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#8B4513] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-lg">Accounts may be suspended or permanently banned for repeated or severe violations.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#8B4513] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-lg">Lissnify reserves the right to moderate content to maintain community safety.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Important Reminder */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#8B4513]">Important Reminder</h3>
              </div>
              <div className="bg-gradient-to-r from-orange-50 to-orange-100/50 rounded-2xl p-8">
                <ul className="space-y-4 text-[#8B4513]/80">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-lg">This community is for peer support and connection.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-lg">Lissnify does not provide professional advice or emergency support.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-lg"><strong>If you are in crisis, please call your local emergency number or reach out to a qualified professional.</strong></span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Together We Build Safe Spaces */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-[#FFB88C] to-[#F9E79F] rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-[#8B4513]" />
                </div>
                <h3 className="text-2xl font-bold text-[#8B4513]">Together We Build Safe Spaces</h3>
              </div>
              <div className="bg-gradient-to-r from-[#FFB88C]/10 to-[#F9E79F]/10 rounded-2xl p-8">
                <p className="text-lg text-[#8B4513]/80 text-center font-semibold">
                  By following these guidelines, you help make Lissnify a place where everyone feels heard, respected, and supported.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-16 p-8 bg-gradient-to-br from-[#FFB88C]/20 to-[#F9E79F]/20 rounded-3xl border-2 border-[#FFB88C]/30">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#8B4513] mb-4">Questions About These Guidelines?</h3>
              <p className="text-lg text-[#8B4513]/80 mb-8">
                If you have any questions about our Community Guidelines, please contact us.
              </p>
              <div className="flex justify-center items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#8B4513] rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
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
          <p className="text-xl text-white/90 mb-8">Be part of a supportive space where everyone belongs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/signup" 
              className="px-8 py-4 bg-white text-[#8B4513] font-bold rounded-2xl hover:bg-[#FFB88C] transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Join Lissnify Today
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
