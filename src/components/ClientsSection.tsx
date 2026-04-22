import saEducation from '../assets/images_(9).png';
import shopify from '../assets/images_(7).png';
import ria from '../assets/images_(8).png';
import masdar from '../assets/GiIlvS3I_400x400.png';
import indrive from '../assets/Indrive-Logo-PNG-SVG-Vector.png';
import logo4 from '../assets/images_(4).png';
import logo5 from '../assets/images_(5).png';
import logo6 from '../assets/images_(6).png';
import alber from '../assets/alber.jpeg';
import jay from '../assets/jay.jpeg';
import sandy from '../assets/sandy.jpeg';

const ClientsSection = () => {
  const stats = [
    { number: '150+', label: 'Clients' },
    { number: '500+', label: 'Video Ads' },
    { number: '10+', label: 'Average ROAS' }
  ];

  const logos = [
    { id: 1, name: 'SA Education Consultant', src: saEducation },
    { id: 2, name: 'Shopify', src: shopify },
    { id: 3, name: 'Ria Money Transfer', src: ria },
    { id: 4, name: 'Masdar Free Zone', src: masdar },
    { id: 5, name: 'inDrive', src: indrive },
    { id: 6, name: 'Brand Logo 4', src: logo4 },
    { id: 7, name: 'Brand Logo 5', src: logo5 },
    { id: 8, name: 'Brand Logo 6', src: logo6 },
    { id: 9, name: 'Alber', src: alber },
    { id: 10, name: 'Jay', src: jay },
    { id: 11, name: 'Sandy', src: sandy },
  ];

  const splitIndex = Math.ceil(logos.length / 2); // 11 -> 6 + 5
  const topRowLogos = logos.slice(0, splitIndex);
  const bottomRowLogos = logos.slice(splitIndex);
  const topMarqueeLogos = [...topRowLogos, ...topRowLogos];
  const bottomMarqueeLogos = [...bottomRowLogos, ...bottomRowLogos];

  return (
    <section className="relative bg-black pt-20 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/5 via-black to-black" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-white mb-16">
          We Proudly Partner With Leading Brands
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center">
          {/* Left Side - Logo Marquees */}
          <div className="flex flex-col items-center justify-center gap-8 sm:gap-10 md:gap-12">
            {/* Top Row - Right to Left */}
            <div className="relative w-full overflow-hidden">
              {/* Edge fades */}
              <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-black to-transparent z-10" />
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-black to-transparent z-10" />

              <div className="flex w-max gap-2 sm:gap-3 md:gap-6 animate-marquee-rtl will-change-transform">
                {topMarqueeLogos.map((logo, index) => (
                  <div
                    key={`top-${logo.id}-${index}`}
                    className="flex-none flex items-center justify-center h-20 w-1/2 sm:w-1/3 md:w-1/4 max-w-[220px]"
                  >
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="h-14 sm:h-16 md:h-16 lg:h-20 w-auto max-w-full object-contain select-none pointer-events-none opacity-90"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Row - Left to Right */}
            <div className="relative w-full overflow-hidden">
              {/* Edge fades */}
              <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-black to-transparent z-10" />
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-black to-transparent z-10" />

              <div className="flex w-max gap-2 sm:gap-3 md:gap-6 animate-marquee-ltr will-change-transform">
                {bottomMarqueeLogos.map((logo, index) => (
                  <div
                    key={`bottom-${logo.id}-${index}`}
                    className="flex-none flex items-center justify-center h-20 w-1/2 sm:w-1/3 md:w-1/4 max-w-[220px]"
                  >
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="h-14 sm:h-16 md:h-16 lg:h-20 w-auto max-w-full object-contain select-none pointer-events-none opacity-90"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden lg:block absolute left-1/2 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />

          {/* Right Side - Stats */}
          <div className="flex items-center justify-center lg:pl-12 w-full">
            <div className="grid grid-cols-2 gap-8 lg:flex lg:flex-col lg:space-y-12 w-full lg:w-auto px-4 max-w-sm mx-auto lg:mx-0 lg:max-w-none">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center justify-center group hover:scale-105 transition-transform duration-300 ${
                    index === 2 ? 'col-span-2' : ''
                  }`}
                >
                  <div className="text-3xl lg:text-6xl font-bold text-white mb-2 group-hover:text-[#4DC035] transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm lg:text-xl text-white/70 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;