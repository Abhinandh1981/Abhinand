import { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  personal: {
    name: "Abhinand",
    role: "AI Student & Creative Web Developer",
    branch: "Computer Science & Engineering (Artificial Intelligence)",
    college: "Thejus Engineering College",
    location: "Thrissur, Kerala, India",
    status: "First-Year B.Tech Undergrad · Available for Collaborations",
    email: "abhinand.thejus@gmail.com",
    shortBio: "First-year engineering student blending computer science foundations with modern web craft and artificial intelligence to build memorable digital products.",
    extendedBio: [
      "I'm a first-year Computer Science & Engineering (AI) student at Thejus Engineering College in Thrissur, Kerala.",
      "Passionate about the intersection of Python, machine learning, and clean front-end engineering. I love taking complex algorithms and wrapping them into bold, intuitive interfaces that people remember.",
      "When I'm not writing code or experimenting with neural nets, you'll find me exploring creative design studio aesthetics, participating in campus tech meetups, and tinkering with automation scripts."
    ],
    headlineWords: ["HI, I'M ABHINAND.", "I BUILD", "SMART THINGS"],
    overlappingTags: [
      "FIRST-YEAR UNDERGRAD",
      "CSE · ARTIFICIAL INTELLIGENCE",
      "THRISSUR, KERALA",
      "PYTHON & WEB DEV"
    ],
  },

  navigation: [
    { label: "Work", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Journey", href: "#journey" },
    { label: "Contact", href: "#contact" },
  ],

  quickFacts: [
    { label: "Institution", value: "Thejus Engineering College", iconName: "GraduationCap" },
    { label: "Degree & Spec", value: "B.Tech CSE (Artificial Intelligence)", iconName: "BrainCircuit" },
    { label: "Academic Stage", value: "First Year (2026–2030)", iconName: "Calendar" },
    { label: "Based In", value: "Thrissur, Kerala, India", iconName: "MapPin" },
  ],

  skills: [
    { name: "Python", level: "Primary", category: "core", highlight: true },
    { name: "C Programming", level: "Foundation", category: "core" },
    { name: "JavaScript (ES6+)", level: "Working", category: "web", highlight: true },
    { name: "React", level: "Working", category: "web", highlight: true },
    { name: "Tailwind CSS", level: "Proficient", category: "web" },
    { name: "HTML5 & Semantic Web", level: "Proficient", category: "web" },
    { name: "Modern CSS & Flexbox", level: "Proficient", category: "web" },
    { name: "Basics of Machine Learning", level: "Exploring", category: "ai-ml", highlight: true },
    { name: "NumPy & Pandas", level: "Exploring", category: "ai-ml" },
    { name: "Data Structures & Algos", level: "Learning", category: "core" },
    { name: "Git & GitHub", level: "Proficient", category: "tools" },
    { name: "VS Code & Linux CLI", level: "Daily Driver", category: "tools" },
    { name: "Responsive UI/UX", level: "Working", category: "web" },
    { name: "Figma to Code", level: "Working", category: "tools" },
  ],

  projects: [
    {
      id: "ai-farm-vision",
      title: "AI Farm Vision",
      tagline: "Computer vision pipeline for early leaf disease detection & crop health monitoring.",
      description: "An AI-powered diagnostic tool concept tailored for smallholder farms. Uses trained image classification models to detect crop pathogens from mobile photos and suggest organic countermeasures in real-time.",
      tags: ["Python", "OpenCV", "TensorFlow / Keras", "Streamlit", "CNN"],
      category: "Artificial Intelligence",
      year: "2024",
      githubUrl: "https://github.com/abhinand-dev/ai-farm-vision",
      liveUrl: "https://ai-farm-vision-demo.vercel.app",
      previewGradient: "from-amber-500 via-orange-600 to-red-600",
      featuredMetric: "94.2% Validation Accuracy on PlantVillage dataset"
    },
    {
      id: "college-class-magazine",
      title: "Thejus Class Magazine",
      tagline: "High-energy interactive digital editorial and department showcase.",
      description: "A playful web publication highlighting student articles, tech writeups, campus highlights, and creative writing. Features smooth page flips, micro-interactions, and a custom editorial reading mode.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Lenis"],
      category: "Web Development",
      year: "2024",
      githubUrl: "https://github.com/abhinand-dev/class-magazine",
      liveUrl: "https://class-magazine.thejus.edu",
      previewGradient: "from-orange-500 via-rose-500 to-pink-600",
      featuredMetric: "500+ Campus Reads in First Week"
    },
    {
      id: "python-practice-projects",
      title: "Python Playground & CLI Lab",
      tagline: "Curated suite of algorithms, automation scripts, and interactive mini-utilities.",
      description: "An active laboratory of algorithmic solutions, web scrapers, automated file organizers, CLI games, and exploratory data visualizations built while sharpening foundational Python mastery.",
      tags: ["Python 3", "Data Structures", "Automation", "Rich CLI", "Algorithms"],
      category: "Software & Core CS",
      year: "2024",
      githubUrl: "https://github.com/abhinand-dev/python-lab",
      liveUrl: "https://github.com/abhinand-dev/python-lab#readme",
      previewGradient: "from-orange-600 via-stone-800 to-black",
      featuredMetric: "40+ Modular Modules & Unit Tests"
    }
  ],

  journey: [
    {
      period: "2022 – 2024",
      title: "Higher Secondary & Science Foundations",
      organization: "Higher Secondary Education",
      location: "Kerala, India",
      description: "Strengthened core mathematics, physics, and introductory programming concepts. Discovered a deep curiosity for computing logic and digital creation.",
      tags: ["Mathematics", "Physics", "Intro to Programming"]
    },
    {
      period: "Mid 2024",
      title: "Joined Thejus Engineering College",
      organization: "Thejus Engineering College",
      location: "Vellarakkad, Thrissur, Kerala",
      description: "Admitted into B.Tech Computer Science & Engineering with Artificial Intelligence specialization. Immersed in collegiate engineering curriculum, peer study groups, and tech clubs.",
      tags: ["B.Tech CSE (AI)", "Engineering Calculus", "C Language", "Campus Tech"],
      badge: "Current Milestone"
    },
    {
      period: "Late 2024 – Present",
      title: "Diving Deep into Python, ML & Frontend Craft",
      organization: "Self-Directed & Campus Projects",
      location: "Thrissur, Kerala",
      description: "Accelerating practical skills in Python OOP, data structures, and modern React web frameworks. Building experimental projects combining intuitive aesthetics with intelligent code.",
      tags: ["Python Lab", "React Ecosystem", "Machine Learning Basics", "Git Workflows"]
    },
    {
      period: "Future Horizon",
      title: "Hackathons, Applied AI & Open-Source Contributions",
      organization: "Aspiring AI Engineer",
      location: "Global / Remote",
      description: "Eager to build real-world intelligent systems, collaborate with developer teams, contribute to open-source libraries, and pursue AI research internships.",
      tags: ["Hackathons", "Deep Learning", "Full-Stack AI Apps", "Open-Source"]
    }
  ],

  socials: [
    {
      platform: "GitHub",
      label: "Code Repositories",
      url: "https://github.com",
      handle: "@abhinand",
      icon: "Github"
    },
    {
      platform: "LinkedIn",
      label: "Professional Profile",
      url: "https://linkedin.com",
      handle: "Abhinand",
      icon: "Linkedin"
    },
    {
      platform: "Instagram",
      label: "Visual Diary & Creative Work",
      url: "https://instagram.com",
      handle: "@abhinand",
      icon: "Instagram"
    },
    {
      platform: "Email",
      label: "Direct Email",
      url: "mailto:abhinand.thejus@gmail.com",
      handle: "abhinand.thejus@gmail.com",
      icon: "Mail"
    }
  ],

  marqueeItems: [
    "AI STUDENT",
    "THEJUS ENGINEERING COLLEGE",
    "WEB DEVELOPER",
    "PYTHON ENTHUSIAST",
    "THRISSUR · KERALA",
    "PROBLEM SOLVER",
    "CREATIVE CODER",
    "MACHINE LEARNING BASICS",
    "AVAILABLE FOR PROJECTS"
  ]
};

