import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaYoutube, FaPinterest, FaSnapchat, FaTiktok, FaDribbble, FaBehance } from 'react-icons/fa';

export const projects = [
  {
    id: 1,
    title: "Explora",
    des: "3D Solar System Planets to Explore.",
    img: "/p1.svg",
    categories: ["Web Development", "Web Design", "WordPress"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Yoom",
    des: "Video Conferencing App",
    img: "/p2.svg",
    categories: ["Web Development", "Web Design", "WordPress"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "Canva Application",
    des: "AI Image SaaS",
    img: "/p3.svg",
    categories: ["Web Development", "Web Design", "WordPress"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Ui Apple",
    des: "Animated Apple Iphone 3D Website",
    img: "/p4.svg",
    categories: ["Web Development"],
    link: "/ui.apple.com",
  },
];

export const socialMediaLinks = [
  { icon: FaTwitter, link: 'https://www.twitter.com' },
  { icon: FaInstagram, link: 'https://www.instagram.com' },
  { icon: FaLinkedin, link: 'https://www.linkedin.com' },
  { icon: FaGithub, link: 'https://www.github.com' },
  { icon: FaDribbble, link: 'https://www.github.com' },
  { icon: FaBehance, link: 'https://www.github.com' },
];


export const skills = [
  { name: 'React', logo: '/logos/reactjs.png' },
  { name: 'Next.js', logo: '/logos/nextjs.png' },
  { name: 'TailwindCSS', logo: '/logos/tailwindcss.png' },
  { name: 'JavaScript', logo: '/logos/js.png' },
  { name: 'Framer', logo: '/logos/framer.png' },
  { name: 'HTML', logo: '/logos/html.png' },
  { name: 'WebFlow', logo: '/logos/webflow.png' },
  { name: 'Wordpress', logo: '/logos/wordpress.png' },
  { name: 'CSS', logo: '/logos/css.png' },
]

export const process = [
  {
    index: 1,
    title: "Ux/Wireframing",
    details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Quaerat aperiam nam cumque explicabo ipsum atque amet earum, provident veniam possimus nisi labore "
  },
  {index: 2, title: "Web Design", details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Quaerat aperiam nam cumque explicabo ipsum atque amet earum, provident veniam possimus nisi labore "},
  {index: 3, title: "Web Development", details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat aperiam nam cumque explicabo ipsum atque amet earum, provident veniam possimus nisi labore "},
  {index: 4, title: "Analytics Setup/Support", details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat aperiam nam cumque explicabo ipsum atque amet earum, provident veniam possimus nisi labore "}
]

export const services = [
  {
    index: 1,
    title: "Web Design",
    details: "Create visually stunning and user-friendly websites that leave a lasting impression. From concept to design, I craft digital experiences that captivate your audience."
  },
  {
    index: 2,
    title: "Web Development",
    details: "Turn your design into a fully functional website. As an expert developer i'll bring your vision to life with clean, efficient code and optimized performance."
  },
  {
    index: 3,
    title: "Design & Development + Branding",
    details: "Experience the power of both design and development. I combine stunning visuals with intuitive user experiences to create websites that engage and convert."
  },
];
