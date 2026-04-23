import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/usmanlegacy_?igsh=MWdsaTR0aGgyZHVpag==', label: 'Instagram' },
  { icon: MessageCircle, href: 'https://web.whatsapp.com/send?phone=923417282032', label: 'WhatsApp' },
];

const SocialLinks = () => {
  return (
    <div className="flex space-x-6">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#4DC035] transition-colors duration-300
            hover:shadow-[0_0_15px_rgba(77,192,53,0.3)]"
        >
          <Icon className="w-6 h-6" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;