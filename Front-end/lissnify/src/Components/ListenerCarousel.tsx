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
const LISTENERS_PER_SLIDE = 2;

export default function FeaturedListeners() {
  const router = useRouter();
  const [listeners, setListeners] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [ConnectButton, setConnectButton] = useState(false);
  const [connectedListenersList, setConnectedListenersList] = useState([]);
  const [cardsPerView, setCardsPerView] = useState(1);
  
  // Responsive cards per view
  const getCardsPerView = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 1024 ? 2 : 1; // 2 cards on desktop (lg+), 1 on mobile/tablet
    }
    return 1; // Default for SSR
  };

  const totalSlides = Math.ceil(listeners.length / cardsPerView);

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

  // Handle responsive cards per view
  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView());
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
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
          // Error fetching connected listeners
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
      
      const listener_id = listeners[currentIndex * LISTENERS_PER_SLIDE]?.l_id;
      if (!listener_id) {
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
      // Error connecting to listener
    }

  }
  return (
    <section className="w-full bg-yellow-50 py-8 sm:py-10 md:py-12 lg:py-14 xl:py-20">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-10">
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16 px-2 sm:px-4">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-3 sm:mb-4">
            Featured Listeners
          </h2>
          <p className="text-gray-700 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed font-regular">
            Real people. Lived experiences. Gentle support.
          </p>
        </div>
        <div className={`relative mx-auto ${
          cardsPerView === 1 ? 'max-w-2xl' : 'max-w-6xl'
        }`}>
          <button
            aria-label="Previous Slide"
            onClick={prevSlide}
            disabled={isTransitioning || currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 sm:-translate-x-12 lg:-translate-x-16 z-10 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-white shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center group hover:scale-110 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 hidden xl:flex"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-[#FF8C5A] group-hover:text-[#e67848] transition-colors" />
          </button>

          <button
            aria-label="Next Slide"
            onClick={nextSlide}
            disabled={isTransitioning || currentIndex >= totalSlides - 1}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 sm:translate-x-12 lg:translate-x-16 z-10 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-white shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center group hover:scale-110 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 hidden xl:flex"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-[#FF8C5A] group-hover:text-[#e67848] transition-colors" />
          </button>

          <div className="overflow-hidden rounded-2xl">
            <div
              className={`flex transition-transform duration-500 ease-out ${isTransitioning ? "opacity-95" : "opacity-100"
                }`}
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                width: `${totalSlides * 100}%`
              }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => {
                const currentSlideListeners = listeners.slice(
                  slideIndex * cardsPerView,
                  (slideIndex + 1) * cardsPerView
                );
                const isSingleListener = currentSlideListeners.length === 1;
                
                return (
                  <div
                    key={slideIndex}
                    className={`flex flex-shrink-0 px-2 ${
                      cardsPerView === 1 
                        ? 'justify-center w-full max-w-2xl mx-auto' 
                        : 'justify-center w-full max-w-6xl mx-auto gap-6'
                    }`}
                    style={{ width: `${100 / totalSlides}%` }}
                  >
                    {currentSlideListeners.map((listener) => (
                      <div
                        key={listener.l_id}
                        className={`bg-white rounded-2xl hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-1 min-h-[500px] sm:min-h-[550px] lg:min-h-[600px] flex flex-col ${
                          cardsPerView === 1 ? 'w-full' : 'flex-1'
                        }`}
                      >
                        <div className="p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 flex-1 flex flex-col">
                          {/* Profile Section - Picture on left, Name + Rating on right */}
                          <div className="flex items-start gap-3 sm:gap-4 md:gap-4 lg:gap-5 mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                            {/* Profile Picture - Left side */}
                            <button 
                              onClick={() => router.push(`/listener/${listener.l_id}`)}
                              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden shadow-md ring-4 ring-[#FFE0D5] group-hover:ring-[#FF8C5A] transition-all duration-300 cursor-pointer flex-shrink-0"
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

                            {/* Name and Rating - Right side */}
                            <div className="flex-1 text-left">
                              {/* Name and View Profile on same line */}
                              <div className="flex items-center justify-between mb-2">
                                <button 
                                  onClick={() => router.push(`/listener/${listener.l_id}`)}
                                  className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#FF8C5A] group-hover:text-[#e67848] transition-colors hover:underline"
                                >
                                  {listener.full_name || listener.user?.full_name || "Listener"}
                                </button>
                                <button 
                                  onClick={() => router.push(`/listener/${listener.l_id}`)}
                                  className="flex items-center gap-1 text-sm sm:text-base lg:text-xl text-gray-500 hover:text-[#FF8C5A] transition-colors duration-300 font-medium"
                                >
                                  <span>View Profile</span>
                                  <ExternalLink className="w-3 h-3" />
                                </button>
                              </div>
                              
                              {/* Rating below name */}
                              <div className="flex items-center gap-2">
                                {[...Array(5)].map((_, i) => {
                                  const rating = typeof listener.rating === 'number' ? listener.rating : 4;
                                  return (
                                    <Star
                                      key={i}
                                      className={`w-4 h-4 sm:w-5 sm:h-5 ${i < Math.floor(rating)
                                          ? "text-yellow-500 fill-current"
                                          : "text-gray-300"
                                        }`}
                                    />
                                  );
                                })}
                                <span className="text-sm sm:text-base lg:text-xl font-semibold text-gray-600">
                                  {listener.rating == null ? "4.00" : typeof listener.rating === 'number' ? listener.rating.toFixed(2) : "4.00"}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                            <p className="text-black text-sm sm:text-base lg:text-xl leading-relaxed text-left">
                              {listener.description == null ? 'A listener who understands how tough life can feel sometimes. From relationships to career stress, I\'m here to talk, support, and remind you that you\'re not alone.' : listener.description}
                            </p>
                          </div>
                          <div className="flex flex-wrap gap-2 mb-3 sm:mb-4 md:mb-5 lg:mb-6 justify-start">
                            {(listener.preferences || []).map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1.5 bg-[#FFE0D5] text-[#FF8C5A] text-sm font-medium rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="border-t border-gray-100 pt-3 sm:pt-4 md:pt-5 lg:pt-6 mt-auto">
                            <div className="flex flex-col gap-2 sm:gap-3 md:gap-3 lg:gap-4 mb-3 sm:mb-4">
                              <h4 className="text-base sm:text-lg font-semibold text-gray-800 text-left">
                                Languages Spoken
                              </h4>
                              <div className="flex justify-start">
                                <div className="flex flex-wrap gap-2">
                                  {(listener?.languages || ['English', 'Hindi']).map((language) => (
                                    <span
                                      key={language}
                                      className="px-3 py-1.5 bg-[#FF8C5A] text-white text-sm font-medium rounded-full"
                                    >
                                      {language}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                            {ConnectButton && (
                              <div className="flex justify-end">
                                {isListenerConnected(listener.l_id, connectedListenersList) ? (
                                  <button disabled className="px-4 py-2 bg-gray-100 border-2 border-gray-300 text-gray-500 text-sm font-bold rounded-lg cursor-not-allowed">
                                    Already Connected
                                  </button>
                                ) : (
                                  <button onClick={handleListenerConnect} className="px-4 py-2 bg-white border-2 border-[#FF8C5A] text-[#FF8C5A] text-sm font-bold rounded-lg hover:bg-[#FFE0D5] hover:border-[#e67848] transition-all duration-300">
                                    Connect
                                  </button>
                                )}
                              </div>
                            )}
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

        {/* Navigation Arrows Below Cards - For screens smaller than 1280px */}
        <div className="flex justify-center items-center gap-4 mt-4 sm:mt-5 md:mt-6 lg:mt-7 xl:hidden">
          <button
            aria-label="Previous Slide"
            onClick={prevSlide}
            disabled={isTransitioning || currentIndex === 0}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center group hover:scale-110 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF8C5A] group-hover:text-[#e67848] transition-colors" />
          </button>

          <button
            aria-label="Next Slide"
            onClick={nextSlide}
            disabled={isTransitioning || currentIndex >= totalSlides - 1}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center group hover:scale-110 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF8C5A] group-hover:text-[#e67848] transition-colors" />
          </button>
        </div>

        <div className="hidden lg:flex justify-center gap-1.5 sm:gap-2 lg:gap-3 mt-4 sm:mt-5 md:mt-6 lg:mt-7">
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
              className={`transition-all duration-300 rounded-full ${index === currentIndex
                  ? "w-3 h-1.5 sm:w-4 sm:h-2 lg:w-6 lg:h-3 bg-[#FF8C5A] shadow-md"
                  : "w-1 h-1 sm:w-1.5 sm:h-1.5 lg:w-3 lg:h-3 bg-white/70 hover:bg-white shadow-sm hover:scale-110"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
