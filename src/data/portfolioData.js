export const personalInfo = {
  name: "Yadhu Krishnan T.U",
  title: "Junior Web Developer",
  careerLevel: "Fresher / Entry-Level Web Developer",
  statusBadge: "Available for Hire",

  professionalGoal:
    "Seeking an opportunity as a Junior Web Developer where I can apply my frontend and backend development skills, build practical web solutions, and grow through real-world development experience.",

  about:
    "I am a motivated Junior Web Developer with a strong interest in building responsive, user-friendly websites and web applications. I have hands-on experience with MERN and MEAN stack technologies, including JavaScript, React.js, Angular, Node.js, Express.js, and MongoDB, along with practical experience in WordPress development. During my three-month internship at Loonyheads Digital Marketing Pvt. Ltd., I worked on real-world websites, content updates, responsive design implementation, and website customization using themes and plugins. I enjoy learning new technologies, solving problems, and turning ideas into functional web solutions.",

  contact: {
    phone: "7558982484",
    email: "krishnany988@gmail.com",
    linkedin:
      "https://www.linkedin.com/in/yadhukrishnan-tu?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    github: "https://github.com/Yadhukrishnantu",
    location: "Thrissur, Kerala, India"
  }
};

// ==========================================
// TECHNICAL SKILLS
// ==========================================

export const skillsData = [
  {
    category: "Frontend Development",
    description:
      "Building responsive, interactive, and user-friendly web interfaces",
    skills: [
      { name: "HTML5", icon: "Code" },
      { name: "CSS3", icon: "Palette" },
      { name: "JavaScript", icon: "FileCode" },
      { name: "React.js", icon: "Atom" },
      { name: "Angular", icon: "Code" },
      { name: "React Router", icon: "Route" },
      { name: "Redux", icon: "Layers" },
      { name: "Tailwind CSS", icon: "Wind" },
      { name: "Responsive Web Design", icon: "Monitor" }
    ]
  },
  {
    category: "Backend Development",
    description:
      "Developing server-side applications and integrating backend APIs",
    skills: [
      { name: "Node.js", icon: "Server" },
      { name: "Express.js", icon: "Cpu" },
      { name: "RESTful APIs", icon: "Webhook" },
      { name: "API Integration", icon: "Network" }
    ]
  },
  {
    category: "Database & Authentication",
    description:
      "Database management, data modeling, and secure authentication",
    skills: [
      { name: "MongoDB", icon: "Database" },
      { name: "Mongoose", icon: "GitMerge" },
      { name: "JWT", icon: "ShieldCheck" },
      { name: "bcrypt.js", icon: "Lock" },
      { name: "OTP Verification", icon: "KeyRound" }
    ]
  },
  {
    category: "CMS & Web Development",
    description:
      "Website development, content management, and customization",
    skills: [
      { name: "WordPress", icon: "Globe" },
      { name: "Elementor", icon: "Layout" },
      { name: "Theme Customization", icon: "Palette" },
      { name: "Plugin Customization", icon: "Puzzle" }
    ]
  },
  {
    category: "Tools & Development Practices",
    description:
      "Development tools, debugging, and version control",
    skills: [
      { name: "Git", icon: "GitBranch" },
      { name: "GitHub", icon: "Github" },
      { name: "VS Code", icon: "Code" },
      { name: "Postman", icon: "Send" },
      { name: "CRUD Operations", icon: "Database" },
      { name: "Debugging", icon: "Bug" },
      { name: "Component-Based Development", icon: "Blocks" }
    ]
  }
];

// ==========================================
// PROJECTS
// ==========================================

export const projectsData = [
  // PROJECT 1: BOOKWORM
  {
    id: "bookworm",
    title: "BookWorm – Library Management System",
    type: "Full-Stack Web Application",
    badge: "MERN Stack",
    description:
      "BookWorm is a full-stack Library Management System developed using the MERN stack. It provides a centralized platform for managing library books, user accounts, borrowing records, and book returns. The system includes secure authentication, role-based access, automated fine calculation, and email notifications to simplify library operations.",
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Tailwind CSS",
      "Redux",
      "React Router",
      "Mongoose",
      "JWT",
      "bcrypt.js",
      "Nodemailer",
      "node-cron"
    ],
    features: [
      "User registration and secure login functionality",
      "JWT-based authentication and role-based authorization",
      "Email OTP verification during account registration",
      "Forgot password and password reset functionality",
      "Separate Admin and User access permissions",
      "Admin dashboard for managing library operations",
      "Complete book management with Create, Read, Update, and Delete operations",
      "Book borrowing and returning management",
      "Borrowing records with user and book information",
      "Due date tracking and return management",
      "Automated fine calculation for overdue books",
      "User account and borrowing history management",
      "Email notifications using Nodemailer",
      "Scheduled background tasks using node-cron",
      "MongoDB database management using Mongoose"
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/Yadhukrishnantu/bookworm",
    isDemoPlaceholder: true,
    isGithubPlaceholder: false
  },

  // PROJECT 2: EMPLOYEE MANAGEMENT SYSTEM
  {
    id: "employee-management",
    title: "Employee Management System",
    type: "Full-Stack Web Application",
    badge: "MERN Stack",
    description:
      "An Employee Management System developed using the MERN stack to manage employee information efficiently. The application provides CRUD operations for handling employee records and integrates a responsive frontend interface with backend APIs for data management.",
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "REST APIs"
    ],
    features: [
      "Employee record management",
      "Create new employee records",
      "View and retrieve employee information",
      "Update existing employee details",
      "Delete employee records",
      "Frontend and backend API integration",
      "Responsive user interface",
      "MongoDB-based employee data management"
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/Yadhukrishnantu/employee",
    isDemoPlaceholder: true,
    isGithubPlaceholder: false
  },

  // PROJECT 3: HOTEL BOOKING SYSTEM
  {
    id: "hotel-booking",
    title: "Hotel Booking System",
    type: "Full-Stack Web Application",
    badge: "MEAN Stack",
    description:
      "A Hotel Booking System developed using the MEAN stack (MongoDB, Express.js, Angular, and Node.js). The application provides a web-based platform for hotel booking operations, with booking management and database integration for handling application data.",
    technologies: [
      "MongoDB",
      "Express.js",
      "Angular",
      "Node.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "REST APIs"
    ],
    features: [
      "Hotel booking application interface",
      "Hotel booking management",
      "Booking-related data handling",
      "Angular-based frontend development",
      "Node.js and Express.js backend integration",
      "MongoDB database management",
      "Full-stack application architecture"
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/Yadhukrishnantu/hotel",
    isDemoPlaceholder: true,
    isGithubPlaceholder: false
  },

  // PROJECT 4: CLOUDKITCHEN
  {
    id: "cloudkitchen",
    title: "CloudKitchen – Food Ordering Website",
    type: "Frontend Web Application",
    badge: "Angular",
    description:
      "CloudKitchen is a responsive food ordering website developed using Angular. The application integrates REST APIs to retrieve and display dynamic food data, providing users with an interactive interface for exploring food-related information.",
    technologies: [
      "Angular",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "REST APIs",
      "Responsive Web Design"
    ],
    features: [
      "Responsive food ordering website interface",
      "Dynamic food data retrieval",
      "REST API integration",
      "Angular component-based development",
      "Interactive frontend interface",
      "Responsive layouts for different screen sizes"
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/Yadhukrishnantu/foodorder",
    isDemoPlaceholder: true,
    isGithubPlaceholder: false
  },

  // PROJECT 5: BANK MANAGEMENT SYSTEM
  {
    id: "bank-management",
    title: "Bank – Cash Deposit & Withdrawal System",
    type: "Full-Stack Web Application",
    badge: "MEAN Stack",
    description:
      "A banking application developed using MEAN stack technologies that allows users to deposit and withdraw cash through registered accounts. The application focuses on account-based transactions and provides a fast and secure approach to handling basic banking operations.",
    technologies: [
      "MongoDB",
      "Express.js",
      "Angular",
      "Node.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3"
    ],
    features: [
      "Registered account-based operations",
      "Cash deposit functionality",
      "Cash withdrawal functionality",
      "Transaction-related data management",
      "Angular-based frontend interface",
      "Node.js and Express.js backend",
      "MongoDB database integration",
      "Fast and secure transaction processing"
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/Yadhukrishnantu/Bank",
    isDemoPlaceholder: true,
    isGithubPlaceholder: false
  }
];

// ==========================================
// PROFESSIONAL EXPERIENCE
// ==========================================

export const experienceData = [
  {
    company: "Loonyheads Digital Marketing Pvt. Ltd.",
    role: "Junior Web Developer Intern",
    type: "Internship",
    period: "June 2026 – September 2026",
    location: "Kerala, India",
    responsibilities: [
      "Assisted in developing and maintaining real-world client websites.",
      "Updated website content, images, pages, and existing website components.",
      "Developed responsive website layouts for desktop, tablet, and mobile devices.",
      "Assisted in converting design concepts into functional and responsive web pages.",
      "Worked with WordPress themes and plugins to customize website functionality and appearance.",
      "Assisted with website content management, layout improvements, and UI updates.",
      "Identified and resolved basic website layout and responsiveness issues.",
      "Collaborated with team members to implement website requirements and content changes.",
      "Gained practical experience working with real-world web development projects and client requirements."
    ]
  }
];

// ==========================================
// EDUCATION
// ==========================================

export const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Indira Gandhi National Open University (IGNOU)",
    period: "2024 – 2026",
    details:
      "Postgraduate degree in Computer Applications with a focus on software development and computer technologies.",
    isPlaceholder: false
  }
];
