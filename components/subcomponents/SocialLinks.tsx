// app/SocialMediaGrid.tsx
import React from 'react';
import { socialMediaLinks } from '@/data';
{/*import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaYoutube, FaPinterest, FaSnapchat, FaTiktok } from 'react-icons/fa';

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
];*/}

const SocialLinks = () => {
  return (
    <div className="flex flex-row space-x-2">
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
            <Icon color='slate' className='text-3xl text-slate-400 hover:text-slate-50' />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
