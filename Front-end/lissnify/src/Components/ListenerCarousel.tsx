"use client";
import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Phone,
  Users,
  ExternalLink,
} from "lucide-react";
import { listenerCarouselData, connectedListeners, isListenerConnected } from "@/utils/api";
import { API_CONFIG } from "@/config/api";
import { connection } from "@/utils/api";
import { useRouter } from "next/navigation";
import {toast} from 'react-toastify'

export default function FeaturedListeners() {
  const router = useRouter();
  const [listeners, setListeners] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [ConnectButton, setConnectButton] = useState(false);
  const [connectedListenersList, setConnectedListenersList] = useState([]);
  const [listenersPerSlide, setListenersPerSlide] = useState(2);
  
  const totalSlides = Math.ceil(listeners.length / listenersPerSlide);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  // Handle responsive listeners per slide
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setListenersPerSlide(1);
      } else {
        setListenersPerSlide(2);
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fetchListenerData = async () => {
      const listenerData = await listenerCarouselData();
      const user_type = JSON.parse(localStorage.getItem('elysian_user'))
      
      // Fetch connected listeners if user is a seeker
      if(user_type?.user_type==='seeker'){
        setConnectButton(true);
        try {
          const connectedData = await connectedListeners();
          if(connectedData.success && connectedData.data) {
            setConnectedListenersList(connectedData.data);
          }
        } catch (error) {
          console.error("Error fetching connected listeners:", error);
        }
      }
      else if(user_type==null){
        setConnectButton(true);
      }
      setListeners(listenerData);
    };
    fetchListenerData();
  }, []);
  const handleListenerConnect = async () => {
    try {
      
      const listener_id = listeners[currentIndex * listenersPerSlide]?.l_id;
      if (!listener_id) {
        console.error("No listener ID available for connection.");
        return;
      }
      const data = await connection(listener_id || "");
      if(data.success){
        toast.success("Request sent successfully")
      }else{
        // Check for specific error messages
        if(data.error && data.error.includes("already sent")) {
          toast.info("Connection request already sent")
        } else if(data.error && data.error.includes("not found")) {
          toast.error("Listener not found")
        } else {
          toast.error('You must login or Sign up')
          setTimeout(()=>{
            router.push('/login')
          },500)
        }
      }

      // Add more logic (redirect, open modal, etc.)
    } catch (error) {

      console.error("Error connecting to listener:", error);
    }

  }
  return (
    <section className="w-full bg-yellow-50 py-20">
      <div className="max-w-8xl mx-auto px-6 lg:px-16 xl:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
            Featured Listeners
          </h2>
          <p className="text-2xl text-black max-w-2xl mx-auto font-medium">
            Real people. Lived experiences. Gentle support.
          </p>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div
              className={`flex transition-transform duration-500 ease-out ${isTransitioning ? "opacity-95" : "opacity-100"
                }`}
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => {
                const currentSlideListeners = listeners.slice(
                  slideIndex * listenersPerSlide,
                  (slideIndex + 1) * listenersPerSlide
                );
                const isSingleListener = currentSlideListeners.length === 1;
                
                return (
                  <div
                    key={slideIndex}
                    className={`flex gap-4 md:gap-8 flex-shrink-0 px-2 ${
                      isSingleListener ? 'justify-center w-full max-w-2xl mx-auto' : 'w-full'
                    }`}
                  >
                    {currentSlideListeners.map((listener) => (
                      <div
                        key={listener.l_id}
                        className="flex-1 bg-white rounded-2xl hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-1"
                      >
                        <div className="p-4 md:p-8">
                          <div className="flex items-start gap-3 md:gap-5 mb-4 md:mb-6">
                            <button 
                              onClick={() => router.push(`/listener/${listener.l_id}`)}
                              className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden shadow-md flex-shrink-0 ring-4 ring-[#FFE0D5] group-hover:ring-[#FF8C5A] transition-all duration-300 cursor-pointer"
                            >
                              <img
                                src={
                                  listener?.user?.profile_image
                                    ? `${API_CONFIG.BASE_URL}/${listener?.user?.profile_image}`
                                    : "http://localhost:3000/user.png"
                                }
                                alt={listener?.full_name || listener?.user?.full_name || "Listener"}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </button>
                            <div className="flex-1">
                              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                                <button 
                                  onClick={() => router.push(`/listener/${listener.l_id}`)}
                                  className="text-xl md:text-3xl font-bold text-gray-800 group-hover:text-[#FF8C5A] transition-colors hover:underline text-left"
                                >
                                  {listener.full_name || listener.user?.full_name || "Listener"}
                                </button>
                                <button 
                                  onClick={() => router.push(`/listener/${listener.l_id}`)}
                                  className="hidden md:flex items-center gap-1 text-xl text-gray-500 hover:text-[#FF8C5A] transition-colors duration-300 font-medium mt-1 md:mt-0"
                                >
                                  <span>View Profile</span>
                                  <ExternalLink className="w-3 h-3" />
                                </button>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="flex items-center">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`w-4 h-4 md:w-5 md:h-5 ${i < Math.floor(listener.rating == null ? 4 : listener.rating)
                                          ? "text-yellow-500 fill-current"
                                          : i === Math.floor(listener.rating) &&
                                            listener.rating % 1 !== 0
                                            ? "text-yellow-500 fill-current opacity-50"
                                            : "text-gray-300"
                                        }`}
                                    />
                                  ))}
                                </div>
                                <span className="text-lg md:text-xl font-semibold text-black">
                                  {listener.rating}
                                </span>
                              </div>
                            </div>
                          </div>
                          <p className="text-black text-base md:text-xl leading-relaxed mb-4 md:mb-6 line-clamp-3">
                            {listener.description == null ? 'Listener description.... ' : listener.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                            {(listener.preferences || []).map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-[#FFE0D5] to-[#FFF0E8] text-[#FF8C5A] text-sm md:text-lg font-semibold rounded-full border border-[#FFE0D5] hover:border-[#FF8C5A] transition-colors cursor-default"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="border-t border-gray-100 pt-4 md:pt-6">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-4">
                              <h4 className="text-base md:text-lg font-semibold text-gray-800">
                                Languages Spoken
                              </h4>
                             {ConnectButton && (
                               isListenerConnected(listener.l_id, connectedListenersList) ? (
                                 <button disabled className="w-full md:w-auto px-4 md:px-6 py-2 bg-gray-100 border-2 border-gray-300 text-gray-500 text-lg md:text-xl font-bold rounded-lg cursor-not-allowed">
                                   Already Connected
                                 </button>
                               ) : (
                                 <button onClick={handleListenerConnect} className="w-full md:w-auto px-4 md:px-6 py-2 bg-white border-2 border-[#FF8C5A] text-[#FF8C5A] text-lg md:text-xl font-bold rounded-lg hover:bg-[#FFE0D5] hover:border-[#e67848] transition-all duration-300">
                                   Connect
                                 </button>
                               )
                             )} 
                            </div>
                            <div className="mt-3 md:mt-4">
                              <div className="flex flex-wrap gap-2">
                                {(listener?.languages || ['English', 'Hindi']).map((language) => (
                                  <span
                                    key={language}
                                    className="px-2.5 py-1 md:px-3 md:py-1.5 bg-gradient-to-r from-[#FF8C5A] to-[#e67848] text-white text-xs md:text-sm font-medium rounded-full shadow-sm"
                                  >
                                    {language}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Navigation Controls - Below Cards */}
        <div className="flex items-center justify-center gap-4 mt-8">
          {/* Previous Button */}
          <button
            aria-label="Previous Slide"
            onClick={prevSlide}
            disabled={isTransitioning || currentIndex === 0}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-[#FF8C5A] transition-colors" />
          </button>

          {/* Pagination Dots - Hidden on Mobile */}
          <div className="hidden md:flex gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => {
                  if (!isTransitioning) {
                    setIsTransitioning(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsTransitioning(false), 300);
                  }
                }}
                disabled={isTransitioning}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-3 h-3 bg-[#FF8C5A] shadow-md"
                    : "w-3 h-3 bg-white shadow-sm hover:bg-gray-100"
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            aria-label="Next Slide"
            onClick={nextSlide}
            disabled={isTransitioning || currentIndex >= totalSlides - 1}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-[#FF8C5A] transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
}