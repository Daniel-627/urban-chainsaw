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
      <div className="animate-marquee flex space-x-4">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Company Logo ${index + 1}`}
            className="h-12 w-auto sm:h-16"
          />
        ))}
        {logos.map((logo, index) => (
          <img
            key={`duplicate-${index}`}
            src={logo}
            alt={`Company Logo ${index + 1} (duplicate)`}
            className="h-12 w-auto sm:h-16"
          />
        ))}
        {logos.map((logo, index) => (
          <img
            key={`duplicate-${index}`}
            src={logo}
            alt={`Company Logo ${index + 2} (duplicate)`}
            className="h-12 w-auto sm:h-16"
          />
        ))}
        {logos.map((logo, index) => (
          <img
            key={`duplicate-${index}`}
            src={logo}
            alt={`Company Logo ${index + 3} (duplicate)`}
            className="h-12 w-auto sm:h-16"
          />
        ))}
        {logos.map((logo, index) => (
          <img
            key={`duplicate-${index}`}
            src={logo}
            alt={`Company Logo ${index + 4} (duplicate)`}
            className="h-12 w-auto sm:h-16"
          />
        ))}
      </div>
    </div>
  );
};

export default ClientsMarquee;
