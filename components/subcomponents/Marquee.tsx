import React from 'react';

   const logos = [
     '/logos/company1.png',
     '/logos/company2.png',
     '/logos/company3.png',
     // Add more logos as needed
   ];

   const Marquee: React.FC = () => {
     return (
       <div className="relative overflow-hidden whitespace-nowrap py-4">
         <div className="animate-marquee flex">
           {logos.map((logo, index) => (
             <img
               key={index}
               src={logo}
               alt={`Company Logo ${index + 1}`}
               className="mx-4 h-16 w-auto"
             />
           ))}
           {logos.map((logo, index) => (
             <img
               key={`duplicate-${index}`}
               src={logo}
               alt={`Company Logo ${index + 1} (duplicate)`}
               className="mx-4 h-16 w-auto"
             />
           ))}
         </div>
       </div>
     );
   };

   export default Marquee;