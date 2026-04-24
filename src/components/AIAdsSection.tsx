import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Video {
  id: number;
  title: string;
  videoUrl: string;
}

// Convert YouTube Shorts URLs to embed format
const getYouTubeEmbedUrl = (url: string) => {
  const videoId = url.match(/shorts\/([^?]+)/)?.[1] || '';
  return `https://www.youtube.com/embed/${videoId}?autoplay=0`;
};

const videos: Video[] = [
  { id: 1, title: 'AI Ad 1', videoUrl: getYouTubeEmbedUrl('https://youtube.com/shorts/ZD-VcyHBVog?si=vW8yYlo3zRRqHzS3') },
  { id: 2, title: 'AI Ad 2', videoUrl: getYouTubeEmbedUrl('https://youtube.com/shorts/imA0-uMW1uI?si=5l80A5a3s3EMtPDE') },
  { id: 3, title: 'AI Ad 3', videoUrl: getYouTubeEmbedUrl('https://youtube.com/shorts/0S992c2S7k8?si=6NfxL8j6qH_3PP6j') },
  { id: 4, title: 'AI Ad 4', videoUrl: getYouTubeEmbedUrl('https://youtube.com/shorts/hTCdEPzl2xs?si=UoI5VQ5Q7HPJSi6M') },
];

const AIAdsSection: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollCarousel = (direction: 'left' | 'right') => {
    const scrollAmount = 400;
    const maxIndex = videos.length - 1;

    if (direction === 'right') {
      setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
      carouselRef.current?.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    } else {
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
      carouselRef.current?.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-black pt-16 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-3">
          AI Ads
        </h2>
        <p className="text-center text-white/60 text-base md:text-lg mb-10 max-w-2xl mx-auto">
          Explore our collection of AI-powered video advertisements designed to engage and inspire
        </p>

        {/* Mobile: single video + buttons below */}
        <div className="md:hidden">
          <div className="mx-auto max-w-[340px]">
            <div className="relative aspect-[9/16] rounded-2xl overflow-hidden border border-white/20 shadow-xl bg-black">
              <iframe
                src={videos[currentIndex]?.videoUrl}
                width="100%"
                height="100%"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-none"
                title={videos[currentIndex]?.title || 'AI Ad'}
              />
            </div>
          </div>

          <div className="mt-5 flex items-center justify-center gap-4">
            <button
              onClick={() => setCurrentIndex((i) => Math.max(i - 1, 0))}
              disabled={currentIndex === 0}
              className="px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-white transition-all duration-300 hover:bg-white/20 hover:border-white/40 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <ChevronLeft className="w-5 h-5" />
              Prev
            </button>
            <button
              onClick={() => setCurrentIndex((i) => Math.min(i + 1, videos.length - 1))}
              disabled={currentIndex >= videos.length - 1}
              className="px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-white transition-all duration-300 hover:bg-white/20 hover:border-white/40 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              Next
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Desktop: carousel */}
        <div className="relative hidden md:block">
          {/* Left Fade */}
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 z-10 pointer-events-none bg-gradient-to-r from-black to-transparent" />
          {/* Right Fade */}
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 z-10 pointer-events-none bg-gradient-to-l from-black to-transparent" />

          {/* Videos Carousel Container */}
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-hidden scroll-smooth no-scrollbar"
          >
            {videos.map((video) => (
              <div
                key={video.id}
                className="flex-shrink-0 w-60 md:w-72 lg:w-80"
              >
                <div className="relative aspect-[9/16] rounded-2xl overflow-hidden border border-white/20 shadow-xl bg-black">
                  <iframe
                    src={video.videoUrl}
                    width="100%"
                    height="100%"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-full border-none"
                    title={video.title}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Left Navigation Button */}
          <button
            onClick={() => scrollCarousel('left')}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-16 z-20 p-3 rounded-full bg-white/10 border border-white/20 text-white transition-all duration-300 hover:bg-white/20 hover:border-white/40 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Navigation Button */}
          <button
            onClick={() => scrollCarousel('right')}
            disabled={currentIndex >= videos.length - 1}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-16 z-20 p-3 rounded-full bg-white/10 border border-white/20 text-white transition-all duration-300 hover:bg-white/20 hover:border-white/40 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/portfolio"
            className="px-10 py-4 bg-gradient-to-r from-[#4DC035] to-[#4DC035] rounded-full text-black font-bold text-base transition-all duration-300 hover:shadow-lg hover:shadow-[#4DC035]/30 hover:scale-105"
          >
            Visit Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AIAdsSection;
