"use client";

import { useEffect,useState } from "react";
import Navbar from "@/Components/Navbar"
import Hero from "@/Components/Hero"
import Features from "@/Components/Features"
import HowItWorksSection from "@/Components/HowItWorksSection"
import ListenerCarousel from "@/Components/ListenerCarousel"
import EmotionalTestimonials from "@/Components/EmotionalTestimonials"
import WhyElysian from "@/Components/WhyElysian"
import CategoryGrid from "@/Components/CategoryGrid"
import CommunityGrid from "@/Components/CommunityGrid" 
import ResourcesBlogPreview from "@/Components/ResourcesBlogPreview"
import Footer from "@/Components/Footer"
import MetaHead from "@/Components/MetaHead"
import { getMetaData } from "@/utils/meta"

export default function HomePage() {
  useEffect(() => {
    // Ensure the page scrolls to top when navigating to home
    window.scrollTo(0, 0);
  }, []);

  // Get meta data for the home page
  const metaData = getMetaData('home');
  
  return (
    <div className="min-h-screen" >
      <MetaHead meta={metaData} />
      <Navbar/>
      {<Hero/>}
      <Features/>
      <HowItWorksSection/>
      <WhyElysian/>
      <CategoryGrid/>
      <ListenerCarousel/>
      <EmotionalTestimonials/>
      <CommunityGrid/>
      <ResourcesBlogPreview/>
      <Footer/>
    </div>
  );
}
