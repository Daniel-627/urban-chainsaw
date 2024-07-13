// app/SocialMediaGrid.tsx
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaYoutube, FaPinterest, FaSnapchat, FaTiktok } from 'react-icons/fa';

const socialMediaLinks = [
  { icon: FaFacebook, link: 'https://www.facebook.com' },
  { icon: FaTwitter, link: 'https://www.twitter.com' },
  { icon: FaInstagram, link: 'https://www.instagram.com' },
  { icon: FaLinkedin, link: 'https://www.linkedin.com' },
  { icon: FaGithub, link: 'https://www.github.com' },
  { icon: FaYoutube, link: 'https://www.youtube.com' },
  { icon: FaPinterest, link: 'https://www.pinterest.com' },
  { icon: FaSnapchat, link: 'https://www.snapchat.com' },
  { icon: FaTiktok, link: 'https://www.tiktok.com' },
];

const SocialLinks = () => {
  return (
    <div className="grid grid-cols-4 gap-4 p-8">
      {socialMediaLinks.map((social, index) => {
        const Icon = social.icon;
        return (
          <a
            key={index}
            href={social.link}
            className=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon size={40} className="text-3xl text-white" />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
