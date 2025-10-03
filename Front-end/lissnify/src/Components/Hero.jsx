// components/Hero.tsx
"use client"
import Link from "next/link";
import { Heart, Sparkles, HeartHandshake, Ear } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
// const [isDisplayed, setIsDisplayed] = useState(true);
//   useEffect(() => {
//     const setIsDisplayedFalse = () => setIsDisplayed(false);
//     if(localStorage.getItem('adminToken')){
//       setIsDisplayedFalse();
//     }
//   }, []);
//   const handleClick =()=>{

//   }
export default function Hero() {
  const { isAuthenticated, user, isLoading } = useAuth();

  // Get the appropriate dashboard route based on user type
  const getDashboardRoute = () => {
    if (user?.user_type === 'listener') {
      return '/dashboard/listener';
    } else if (user?.user_type === 'seeker') {
      return '/dashboard/seeker';
    }
    return '/dashboard'; // fallback
  };

  return (
    <section className="relative bg-gradient-to-br from-[#FFB88C] to-[#FFF8B5] pt-6 sm:pt-8 md:pt-10 lg:pt-16 pb-6 sm:pb-8 md:pb-10 lg:pb-20 text-black overflow-hidden min-h-screen">
      {/* Background Illustration with Reflection Effect - Hidden on mobile and tablet */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        {/* Main Background Image */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2  h-full flex items-center justify-center opacity-15">
          <img 
            src="/EmotionalSupport.png" 
            alt="People connecting and supporting each other"
            className="w-full h-auto max-h-[80%] object-contain"
          />
        </div>
        
        {/* Left Reflection Effect */}
        {/* <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -scale-x-100 w-1/3 h-full flex items-center justify-end opacity-50">
          <img 
            src="/EmotionalSupport.png" 
            alt=""
            className="w-full h-auto max-h-[60%] object-contain blur-sm"
          />
        </div> */}
        
        {/* Right Glow Effect */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2 h-full flex items-center justify-center opacity-15">
          <div className="w-full h-full bg-gradient-to-l from-white/30 to-transparent rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Custom CSS for glass effect + underline animation */}
      <style jsx>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.25);
          border-radius: 20px;
          backdrop-filter: blur(12px) saturate(180%);
          -webkit-backdrop-filter: blur(12px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.4);
          box-shadow: rgba(0, 0, 0, 0.1) 0px 0.25rem 0.75rem;
          padding: 0.75rem;
        }
        
        @media (min-width: 640px) {
          .glass-card {
            padding: 1rem;
          }
        }
        
        @media (min-width: 768px) {
          .glass-card {
            padding: 1.25rem;
          }
        }
        
        @media (min-width: 1024px) {
          .glass-card {
            padding: 2rem;
          }
        }

        .underline-animate {
          position: relative;
          display: inline-block;
          cursor: pointer;
        }

        .underline-animate::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -5px;
          width: 0%;
          height: 2px;
          background-color: black;
          transition: width 0.3s ease-in-out;
        }

        .underline-animate:hover::after {
          width: 100%;
        }

        .text-shadow-soft {
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
      `}</style>

      {/* Main Content - Centered */}
      <div className="relative z-10 h-full">
        <div className="flex items-center justify-center px-3 sm:px-4 pt-12 sm:pt-16 md:pt-18 lg:pt-24 pb-4 sm:pb-6 md:pb-8 lg:pb-20">
          <div className="text-center space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-8 max-w-5xl w-full">
            {/* Headline */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-shadow-soft">
              <span className="text-white drop-shadow-lg">Find Support. </span>
              <span className="text-black">Share Balance</span>
            </h1>

            {/* Subheadline */}
            <p className="text-gray-700 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed font-regular text-shadow-soft px-4">
              Lissnify is your safe space to heal, share, and grow. 
              <span className="font-bold"> Seekers</span> find empathy, and 
              <span className="font-bold"> Listeners</span> offer their light — 
              together we create hope and resilience.
            </p>

            {/* Cards */}
            <div className={`${isAuthenticated ? 'flex justify-center' : 'grid grid-cols-1 sm:grid-cols-2 max-w-4xl'} gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8 max-w-2xl mx-auto px-2 sm:px-4`}>
              
              {/* Seeker Card - Hide if user is a listener */}
              {(!isAuthenticated || user?.user_type !== 'listener') && (
                <Link href={isAuthenticated ? getDashboardRoute() : "/signup?role=seeker"} className="group">
                  <div className="glass-card transition-all duration-300 cursor-pointer border-t-4 border-[#FF8C5A] hover:transform hover:scale-105 hover:shadow-2xl h-full flex flex-col">
                    <div className="flex justify-center mb-4 sm:mb-5 md:mb-6">
                      <HeartHandshake className="w-10 h-10 sm:w-12 sm:h-12 text-[#FF8C5A] drop-shadow-lg" />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black text-center mb-2 sm:mb-3 md:mb-4">Support Seeker</h3>
                    <p className="mt-2 sm:mt-3 text-black text-sm sm:text-base lg:text-lg opacity-90 text-center flex-grow leading-relaxed">
                      Connect with people who understand your journey. Find empathy, clarity, and comfort.
                    </p>
                    <div className="text-center mt-3 sm:mt-4 md:mt-6">
                      <span className="inline-block text-black font-medium underline-animate text-base sm:text-lg lg:text-xl">
                        {isAuthenticated ? "I Need Support →" : "I Need Support →"}
                      </span>
                    </div>
                  </div>
                </Link>
              )}

              {/* Listener Card - Hide if user is a seeker */}
              {(!isAuthenticated || user?.user_type !== 'seeker') && (
                <Link href={isAuthenticated ? getDashboardRoute() : "/signup?role=listener"} className="group">
                  <div className="glass-card transition-all duration-300 cursor-pointer border-t-4 border-[#FF8C5A] hover:transform hover:scale-105 hover:shadow-2xl h-full flex flex-col">
                    <div className="flex justify-center mb-4 sm:mb-5 md:mb-6">
                      <Ear className="w-10 h-10 sm:w-12 sm:h-12 text-[#FF8C5A] drop-shadow-lg" />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black text-center mb-2 sm:mb-3 md:mb-4">Listener with Empathy</h3>
                    <p className="mt-2 sm:mt-3 text-black text-sm sm:text-base lg:text-lg opacity-90 text-center flex-grow leading-relaxed">
                      Guide others through their struggles with the wisdom of your own experiences.
                    </p>
                    <div className="text-center mt-3 sm:mt-4 md:mt-6">
                      <span className="inline-block text-black font-medium underline-animate text-base sm:text-lg lg:text-xl">
                        {isAuthenticated ? "I Want to Listen →" : "I Want to Listen →"}
                      </span>
                    </div>
                  </div>
                </Link>
              )}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 flex-wrap justify-center text-sm sm:text-base lg:text-xl px-2 sm:px-4">
              {isAuthenticated ? (
                <Link href={getDashboardRoute()}>
                  <button className="w-full sm:w-auto px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full bg-[#FF8C5A] text-white font-semibold hover:bg-[#e67848] transition transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Go to Dashboard
                  </button>
                </Link>
              ) : (
                <>
                  <Link href="/signup?role=seeker" className="w-full sm:w-auto">
                    <button className="w-full px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full bg-[#FF8C5A] text-white font-semibold hover:bg-[#e67848] transition transform hover:scale-105 shadow-lg hover:shadow-xl">
                      Join as a Seeker
                    </button>
                  </Link>
                  <Link href="/signup?role=listener" className="w-full sm:w-auto">
                    <button className="w-full px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full bg-white border-2 border-[#FF8C5A] text-[#FF8C5A] font-semibold hover:bg-[#FFE0D5] transition transform hover:scale-105 shadow-lg hover:shadow-xl">
                      Join as a Listener
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}