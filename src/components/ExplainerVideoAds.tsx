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
  { id: 1, title: 'Explainer Video 1', videoUrl: getYouTubeEmbedUrl('https://youtube.com/shorts/lc032R3bmFA?si=wE6cBFQP-I26A7q3') },
  { id: 2, title: 'Explainer Video 2', videoUrl: getYouTubeEmbedUrl('https://youtube.com/shorts/10wOasCpl3o?si=ketIRoXJovrR61Ef') },
  { id: 3, title: 'Explainer Video 3', videoUrl: getYouTubeEmbedUrl('https://youtube.com/shorts/khp1-AzMOCE?si=Lo0a8Vnube2WPLdy') },
  { id: 4, title: 'Explainer Video 4', videoUrl: getYouTubeEmbedUrl('https://youtube.com/shorts/wfD5TFs5ITA?si=CE52GAKTyNfGMGpi') },
  { id: 5, title: 'Explainer Video 5', videoUrl: getYouTubeEmbedUrl('https://youtube.com/shorts/_QfTmVNOw0M?si=GhsB59fY8jbPusvO') },
  { id: 6, title: 'Explainer Video 6', videoUrl: getYouTubeEmbedUrl('https://youtube.com/shorts/7nwD33Z6CXw?si=4ynMIMYtiO_P-sMa') },
  { id: 7, title: 'Explainer Video 7', videoUrl: getYouTubeEmbedUrl('https://youtube.com/shorts/PVVZXcf1IIU?si=8Oiy-ZcC7iRaEdUK') },
  { id: 8, title: 'Explainer Video 8', videoUrl: getYouTubeEmbedUrl('https://youtube.com/shorts/M5PLDeWZXMo?si=WXp8HSnckkOCi0uf') },
  { id: 9, title: 'Explainer Video 9', videoUrl: getYouTubeEmbedUrl('https://youtube.com/shorts/bPSzsKl5fto?si=JL9t_1uVxvheFwhv') },
  { id: 10, title: 'Explainer Video 10', videoUrl: getYouTubeEmbedUrl('https://youtube.com/shorts/pDjwDIqOHC0?si=h6j5OCKgKAk7dNGS') },
  { id: 11, title: 'Explainer Video 11', videoUrl: getYouTubeEmbedUrl('https://youtube.com/shorts/mgjm6wO2T_0?si=kkTVZOU7ONWKZEve') },
  { id: 12, title: 'Explainer Video 12', videoUrl: getYouTubeEmbedUrl('https://youtube.com/shorts/SxWrtsrCQ-Y?si=_toRWGXYAz8pYRYt') },
  { id: 13, title: 'Explainer Video 13', videoUrl: getYouTubeEmbedUrl('https://youtube.com/shorts/-5K0-RkvdXY?si=bCV1YuzmaaLomFJK') },
  { id: 14, title: 'Explainer Video 14', videoUrl: getYouTubeEmbedUrl('https://youtube.com/shorts/wcxKzp7Cokg?si=7fQRmK6jFQ8etsZ3') },
  { id: 15, title: 'Explainer Video 15', videoUrl: getYouTubeEmbedUrl('https://youtube.com/shorts/P9ckrTyDYL4?si=LBGs4qTiz49kaQp-') },
];

const ExplainerVideoAds: React.FC = () => {
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
          Explainer Video Ads
        </h2>
        <p className="text-center text-white/60 text-base md:text-lg mb-10 max-w-2xl mx-auto">
          Discover our premium video ad library showcasing creative storytelling and compelling visuals
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
                title={videos[currentIndex]?.title || 'Explainer Video'}
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

export default ExplainerVideoAds;
