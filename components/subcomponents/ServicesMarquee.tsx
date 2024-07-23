import React from "react";
import { AiOutlineStar, AiTwotoneStar } from 'react-icons/ai'

   const skills = [
     'JavaScript',
     'TypeScript',
     'React',
     'Next.js',
     'TailwindCSS',
     'Node.js',
     'Express',
     'MongoDB',
     'SQL',
     'GraphQL',
     'HTML',
     'CSS',
     'Sass',
     'Figma',
     'Adobe XD',
   ];

   const ServicesMarquee: React.FC = () => {
     return (
       <div className="relative overflow-hidden whitespace-nowrap py-4 bg-black bg-opacity-30 z-0 rounded-xl">
         <div className="animate-marquee flex z-10">
           {skills.map((skill, index) => (
             <div key={index} className=" flex flex-row p-2 spxce-x-2">
                <p className="text-3xl px-4">{skill}</p>
                <AiTwotoneStar className="text-4xl text-slate-400 flex justify-center text-center"/>
             </div>
           ))}
           {skills.map((skill, index) => (
             <div key={index + skills.length} className="p-4">
               {skill}
             </div>
           ))}
         </div>
       </div>
     );
   };

   export default ServicesMarquee;