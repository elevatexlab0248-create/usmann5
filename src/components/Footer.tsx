import { Rocket } from 'lucide-react';
import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <footer className="relative bg-black py-12 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#4DC035]/10 via-black to-black" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Description */}
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <Rocket className="w-6 h-6 text-[#4DC035]" />
              <span className="text-xl font-semibold">
                <span className="text-white">Prestige 
</span>{" "}
                <span className="text-[#4DC035]">Media</span>
              </span>
            </div>
            <p className="text-gray-400 max-w-md">
              Create Video Ads based on Data that brings real ROI and scales your business predictably
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            {/* WhatsApp button */}
            <a
              href="https://web.whatsapp.com/send?phone=923417282032"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] font-semibold transition-all duration-300 hover:bg-[#25D366] hover:text-black hover:border-transparent hover:shadow-[0_0_24px_rgba(37,211,102,0.25)]"
            >
              <svg
                viewBox="0 0 32 32"
                className="w-5 h-5"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  fill="currentColor"
                  d="M19.11 17.53c-.27-.14-1.58-.78-1.83-.87-.25-.09-.43-.14-.61.14-.18.27-.7.87-.86 1.05-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.58-1.5-1.85-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.48-.84-2.03-.22-.53-.45-.46-.61-.46h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27 0 1.34.98 2.64 1.11 2.82.14.18 1.92 2.93 4.65 4.11.65.28 1.16.45 1.56.58.65.2 1.25.17 1.72.1.52-.08 1.58-.65 1.8-1.27.22-.62.22-1.15.16-1.27-.07-.12-.25-.2-.52-.34zM16.02 5.33c-5.89 0-10.67 4.78-10.67 10.67 0 1.87.49 3.69 1.43 5.3l-.93 3.39 3.47-.91a10.64 10.64 0 0 0 5.7 1.66c5.89 0 10.67-4.78 10.67-10.67 0-5.89-4.78-10.67-10.67-10.67zm0 19.39c-1.79 0-3.55-.48-5.09-1.39l-.37-.22-2.06.54.55-2.01-.24-.38a9.3 9.3 0 0 1-1.47-5.02c0-5.15 4.19-9.34 9.34-9.34 2.5 0 4.85.97 6.62 2.74a9.29 9.29 0 0 1 2.72 6.61c0 5.15-4.19 9.34-9.34 9.34z"
                />
              </svg>
              have a quick question? Chat on whatsapp
            </a>

            {/* Social Links */}
            <div className="relative">
              {/* Decorative gradient behind social icons */}
              <div className="absolute -inset-4 bg-gradient-radial from-[#4DC035]/5 to-transparent 
                rounded-full blur-xl" />
              <div className="relative">
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border with Gradient */}
        <div className="mt-12 pt-8 border-t border-[#4DC035]/10">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Prestige Media. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;