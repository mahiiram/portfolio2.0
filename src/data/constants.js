import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiJest,
  SiPostman,
  SiMicrosoftazure,
  SiGooglecloud,
  SiGit,
  SiGithub,
  SiGraphql,
  SiOpenai,
} from "react-icons/si";
import { BiCodeAlt, BiServer, BiBrain } from "react-icons/bi";
import { FaGoogle, FaRobot } from "react-icons/fa";

export const Bio = {
  name: "Mahendran R",
  roles: ["Full Stack Developer", "Frontend Developer", "Backend Developer"],
  description:
    "Results-driven Full Stack Developer with hands-on experience building scalable web applications using JavaScript, React.js, Next.js, Node.js, NestJS, and REST APIs. I focus on performance, secure backend architecture, and user-centric product experiences.",
  github: "https://github.com/mahiiram",
  resume: "/mahendran-resume-2026.pdf",
  linkedin: "https://www.linkedin.com/in/mahendran-ramar9797/",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      { name: "JavaScript (ES6+)", icon: SiJavascript },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 },
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "NestJS", icon: SiNestjs },
      { name: "Express.js", icon: SiExpress },
      { name: "RESTful APIs", icon: BiServer },
      { name: "GraphQL", icon: SiGraphql },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
  },
  {
    title: "Cloud, Testing & Tools",
    skills: [
      { name: "Google Cloud Platform", icon: SiGooglecloud },
      { name: "Microsoft Azure", icon: SiMicrosoftazure },
      { name: "Jest", icon: SiJest },
      { name: "Postman", icon: SiPostman },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
    ],
  },
  {
    title: "Generative AI",
    skills: [
      { name: "ChatGPT", icon: SiOpenai },
      { name: "Claude", icon: FaRobot },
      { name: "Gemini", icon: FaGoogle },
      { name: "Prompt Engineering", icon: BiBrain },
      { name: "LLM APIs", icon: BiCodeAlt },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: "https://i0.wp.com/cdn.prod.website-files.com/65c78646e15c8ab128541fd1/670d2bcab288f57f2024ecd1_AD_4nXfgVSfbGAMXFxuFfm8IsHJTdMbVBUQIbj6IFdku1aA0yd3Hi50ivefhLeSX81eNjAgUqRLuunzv3Yllz3sDKa2kyZWLBZoBVniV0vP2Cu99sVIJ6GXOju1Lq7Uc-rFBouuA4X32ex3szCPflpH7otS9N9uQ.png?ssl=1",
    role: "Full Stack Developer",
    company: "Konnectify Labs Pvt Ltd, Chennai",
    date: "June 2024 - Present",
    desc: "Engineered scalable web apps with Next.js and NestJS, delivered secure APIs with authentication and RBAC, deployed services on GCP (Cloud Run, Cloud Functions, Cloud Build), and improved developer productivity using AI-assisted API design and debugging workflows.",
    skills: [
      "Next.js",
      "React.js",
      "NestJS",
      "Node.js",
      "PostgreSQL",
      "MongoDB",
      "GCP",
      "REST APIs",
      "RBAC",
      "Jest",
      "LLM Integrations",
    ],
  },
  {
    id: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkI6PlQb8Wmui2jyobGruU_iK0U5FjUc58-w&s",
    role: "Full Stack Development Trainee",
    company: "GUVI Geeks Technology",
    date: "Jan 2023 - May 2023",
    desc: "Completed intensive full stack training with hands-on delivery of multiple MERN applications, including authentication, CRUD modules, state management, and deployment.",
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux"],
  },
];

export const education = [
  {
    id: 0,
    img: "https://content3.jdmagicbox.com/comp/coimbatore/a3/0422px422.x422.101204210255.c5a3/catalogue/karpagam-institute-of-technology-eachanari-madukkari-road-coimbatore-coimbatore-colleges-31kgsf8.jpg",
    school: "Karpagam Institute of Technology, Coimbatore",
    date: "2014 - 2018",
    grade: "6.9/10",
    desc: "Completed Bachelor of Engineering in Mechanical Engineering with strong analytical and problem-solving foundations.",
    degree: "B.E. Mechanical Engineering",
  },
  {
    id: 1,
    img: "https://new.tnschools.gov.in/assets/img/logo.png",
    school: "Government Higher Secondary School, Thevaram",
    date: "2012 - 2014",
    grade: "81%",
    desc: "Completed HSC (Biomaths).",
    degree: "HSC (Biomaths)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Konnectify - No-Code Automation Platform",
    date: "2024 - Present",
    description:
      "Built workflow builder interfaces with triggers, actions, filters, and execution logs in Next.js; developed robust NestJS workflow APIs for runs, retries, parallel paths, and error handling; and improved execution performance using optimized SQL patterns and GCP services.",
    image: "https://appsumo2-cdn.appsumo.com/media/deals/images/as-web-Konnectify_-_16_9.png",
    tags: ["Next.js", "React", "NestJS", "REST APIs", "PostgreSQL", "GCP"],
    category: "product",
    github: "https://github.com/mahiiram",
    webapp: "https://konnectify.co/",
  },
  {
    id: 1,
    title: "SyncIt CRM Application",
    date: "2024",
    description:
      "Developed CRM modules for Contacts, Companies, and Opportunities with secured authentication, validation, and CRUD operations. Added Generative AI-assisted automation features and optimized performance via streamlined REST APIs and efficient MongoDB query design.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Node.js", "MongoDB", "REST APIs", "Generative AI"],
    category: "web app",
    github: "https://github.com/mahiiram",
    webapp: "https://syncit-crm.netlify.app",
  },
  {
    id: 2,
    title: "Chat App - Nightingale",
    date: "2023",
    description:
      "Created a real-time chat application with authentication, user search, instant messaging with Socket.IO, responsive UI, and optimized MongoDB-backed message persistence.",
    image: "https://fileupload-87jg.onrender.com/images/1697193249542-407425377.png",
    tags: ["React.js", "Node.js", "Socket.IO", "MongoDB"],
    category: "web app",
    github: "https://github.com/mahiiram/chatapp-client",
    webapp: "https://nightingale-chatapp.netlify.app/",
  },
  {
    id: 3,
    title: "Stack Overflow Clone",
    date: "2023",
    description:
      "Built a full-stack Q&A platform with question/answer workflows, voting, Redux-powered state management, optimized schema design, and Nodemailer-based email notifications for better account engagement.",
    image: "https://fileupload-87jg.onrender.com/images/1697193169810-598013176.png",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux", "Nodemailer"],
    category: "web app",
    github: "https://github.com/mahiiram/stackoverflow-client",
    webapp: "https://stackoverflow-clones.netlify.app/",
  },
  {
    id: 4,
    title: "Movie Booking Web App",
    date: "2023",
    description:
      "Launched a movie booking platform with schedule browsing, secure JWT authentication, responsive Material UI interface, and complete CRUD for movies, users, and bookings.",
    image: "https://fileupload-87jg.onrender.com/images/1697193092883-703876427.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "Material UI", "JWT"],
    category: "web app",
    github: "https://github.com/mahiiram/wecode-frontend-ticketbooking",
    webapp: "https://tentkottai.netlify.app/",
  },
  {
    id: 5,
    title: "QR Generator",
    date: "2024",
    description:
      "Built a simple React-based QR generator with reusable components, real-time preview, and a clean responsive UI for text and URL inputs.",
    image:
      "https://img.magnific.com/premium-vector/qr-code-simple-icon-symbol-scan-logo-concept-vector-flat-style_754658-332.jpg",
    tags: ["React.js"],
    category: "web app",
    github: "https://github.com/mahiiram/qrgenerator",
    webapp: "https://mahis-qrgenerator.netlify.app/",
  },
];
