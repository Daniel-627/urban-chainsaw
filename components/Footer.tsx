'use client'; // Ensure this is at the top of the file

import React, { useState } from 'react';
import SocialLinks from './subcomponents/SocialLinks';
import { PiArrowCircleUpThin } from 'react-icons/pi';
import { Animate3 } from './Animate3';

type Props = {};

const Footer = (props: Props) => {
  const [copied, setCopied] = useState(false);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll
    });
  };

  // Function to copy email to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText('ochiengdaniel627@gmail.com').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    });
  };

  return (
    <>
      <div className="border-t mx-5 border-slate-500"></div>
      <div className="flex flex-col justify-start px-4 sm:px-6 md:px-8 lg:px-24 py-10 space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start space-y-4 sm:space-y-0">
          <h3 className="text-2xl sm:text-3xl text-slate-200">Get In Touch</h3>
          <PiArrowCircleUpThin
            className="text-3xl sm:text-4xl text-slate-400 hover:text-slate-50 cursor-pointer"
            onClick={scrollToTop}
          />
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start space-y-4 sm:space-y-0">
          <Animate3>
            <p
              className="text-base sm:text-lg text-[#b0b0b0] hover:text-slate-200 cursor-pointer"
              onClick={copyToClipboard}
            >
              {copied ? 'Email Copied!' : 'ochiengdaniel627@gmail.com'}
            </p>
          </Animate3>
          <SocialLinks />
        </div>
        <div className="flex justify-center sm:justify-between">
          <Animate3>
            <p className="text-xs text-[#b0b0b0] font-thin text-center sm:text-left">
              Copyright @2024. All Rights Reserved
            </p>
          </Animate3>
        </div>
      </div>
    </>
  );
};

export default Footer;

