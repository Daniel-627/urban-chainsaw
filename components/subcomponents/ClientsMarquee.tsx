import React from 'react';

const logos = [
  '/logos/company1.png',
  '/logos/company2.png',
  '/logos/company3.png',
  '/logos/company4.png',
  // Add more logos as needed
];

const ClientsMarquee: React.FC = () => {
  return (
    <div className="relative overflow-hidden py-4">
      <div className="animate-marquee flex">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Company Logo ${index + 1}`}
            className="mx-4 h-12 w-auto sm:h-16 md:h-20 lg:h-24 xl:h-28"
          />
        ))}
        {logos.map((logo, index) => (
          <img
            key={`duplicate-${index}`}
            src={logo}
            alt={`Company Logo ${index + 1} (duplicate)`}
            className="mx-4 h-12 w-auto sm:h-16 md:h-20 lg:h-24 xl:h-28"
          />
        ))}
        {logos.map((logo, index) => (
          <img
            key={`duplicate-${index}`}
            src={logo}
            alt={`Company Logo ${index + 2} (duplicate)`}
            className="mx-4 h-12 w-auto sm:h-16 md:h-20 lg:h-24 xl:h-28"
          />
        ))}
        {logos.map((logo, index) => (
          <img
            key={`duplicate-${index}`}
            src={logo}
            alt={`Company Logo ${index + 3} (duplicate)`}
            className="mx-4 h-12 w-auto sm:h-16 md:h-20 lg:h-24 xl:h-28"
          />
        ))}
      </div>
    </div>
  );
};

export default ClientsMarquee;
