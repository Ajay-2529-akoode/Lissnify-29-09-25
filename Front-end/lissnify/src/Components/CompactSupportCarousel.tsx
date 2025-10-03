'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { ComponentType } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export type CompactSupportCategory = {
  id: string;
  title: string;
  description: string;
  Icon: ComponentType<{ className?: string }>;
  bgAccent: string;
  iconColor: string;
};

type Props = {
  categories: CompactSupportCategory[];
  title?: string;
  subtitle?: string;
  className?: string;
};

export default function CompactSupportCarousel({ 
  categories, 
  title = "Mental health concerns we care for",
  subtitle = "Explore some of the most common ones below to see how we approach care.",
  className 
}: Props) {
  const swiperRef = useRef<any>(null);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <section className={`py-16 ${className ?? ''}`}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Header - Only show if title is provided */}
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows - Hidden on screens smaller than 1280px */}
          <button
            onClick={goPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-gray-600 hover:text-gray-800 border border-gray-200 hidden xl:flex"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={goNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-gray-600 hover:text-gray-800 border border-gray-200 hidden xl:flex"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Swiper Carousel */}
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            loop={true}
            className="compact-support-swiper px-12"
          >
            {categories.map((category) => (
              <SwiperSlide key={category.id}>
                <Link href={`/support/${category.id}`} className="block h-full">
                                     <div className="h-full bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 group cursor-pointer">
                     <div className="p-6">
                       {/* Icon at top left */}
                       <div className="flex justify-start mb-4">
                         <div className={`p-2 rounded-lg ${category.bgAccent}`}>
                           <category.Icon className={`w-6 h-6 ${category.iconColor}`} />
                         </div>
                       </div>

                       {/* Title */}
                       <h3 className="text-lg font-bold text-orange-600 mb-3 group-hover:text-orange-700 transition-colors">
                         {category.title}
                       </h3>

                       {/* Description */}
                       <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                         {category.description}
                       </p>

                       {/* "You're not alone →" text at bottom */}
                       <div className="mt-auto">
                         <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
                           You're not alone →
                         </span>
                       </div>
                     </div>
                   </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows Below Cards - For screens smaller than 1280px */}
          <div className="flex justify-center items-center gap-4 mt-6 xl:hidden">
            <button
              onClick={goPrev}
              className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-gray-600 hover:text-gray-800 border border-gray-200"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            
            <button
              onClick={goNext}
              className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-gray-600 hover:text-gray-800 border border-gray-200"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Custom Pagination Styles */}
          <style jsx global>{`
            .compact-support-swiper .swiper-pagination {
              position: relative;
              margin-top: 2rem;
              display: none;
            }
            
            @media (min-width: 1024px) {
              .compact-support-swiper .swiper-pagination {
                display: flex;
              }
            }
            
            .compact-support-swiper .swiper-pagination-bullet {
              background: #d1d5db;
              opacity: 0.5;
              transition: all 0.3s ease;
              width: 4px !important;
              height: 4px !important;
            }
            
            .compact-support-swiper .swiper-pagination-bullet-active {
              background: #f97316;
              opacity: 1;
              transform: scale(1.2);
            }
            
            @media (min-width: 640px) {
              .compact-support-swiper .swiper-pagination-bullet {
                width: 5px !important;
                height: 5px !important;
              }
            }
            
            @media (min-width: 1024px) {
              .compact-support-swiper .swiper-pagination-bullet {
                width: 6px !important;
                height: 6px !important;
              }
            }
            
            .compact-support-swiper .swiper-slide {
              height: auto;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
