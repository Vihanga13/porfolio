import nutritionAppImage from '../assets/Artboard 1 (1).png';

export const PERSONAL_INFO = {
  name: "Vihanga Nilusha",
  title: "Junior Web Developer",
  email: "vihaax23@gmail.com",
  phone: "+94 712 547 892",
  location: "Moratuwa, Sri Lanka",
  linkedin: "www.linkedin.com/in/vihanga-nilusha",
  github: "https://github.com/Vihanga13",
  instagram: "https://www.instagram.com/kaluuu.",
  languages: ["Sinhala", "English"]
};

export const ABOUT_TEXT = {
  intro: "I am a passionate and dedicated Junior Web Developer with hands-on experience in web development, UI design, front-end development, and mobile application development. Currently working at Altitude1 (PVT) LTD, where I contribute to building meaningful web experiences and impactful projects.",
  journey: "With a solid foundation in programming languages and frameworks such as HTML, CSS, JavaScript, React Native, Flutter, Flask, and Node.js, I am excited to apply my knowledge to real-world projects and continue growing as a developer.",
  goal: "I am eager to contribute to dynamic teams, learn from seasoned experts, and expand my knowledge in developing innovative digital solutions while pursuing my Computer Science degree."
};

export const PROJECTS = [
  {
    id: 1,
    title: "INTERN PROGRESS TRACKER",
    type: "Solo Project",
    description: "Currently developing a comprehensive cross-platform mobile application using Flutter and Dart to streamline internship management and progress tracking for educational institutions. The application will feature robust authentication with role-based access control for interns, supervisors, and managers using Firebase Authentication. Building with Firebase Firestore for real-time data synchronization and Firebase Storage for document management. Planned features include advanced analytics with interactive charts, automated progress reporting, goal tracking with gamification elements, and real-time messaging system.",
    technologies: ["Flutter", "Dart", "Firebase", "Firestore", "Firebase Auth", "Firebase Storage", "fl_chart", "Real-time Sync", "Cross-platform", "Analytics"],
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    github: "https://github.com/Vihanga13/intern-progress-tracker",
    status: "In Development"
  },
  {
    id: 2,
    title: "AI-DRIVEN NUTRITIOUS APP",
    type: "Solo Project",
    description: "AI-driven nutrition app for personalized dietary management and health monitoring. Features a custom-trained machine learning model for meal recognition using Python and PyTorch, deployed via Flask API. Users can scan meal images within the Flutter app for intelligent analysis and classification, with results stored in Firebase for tracking.",
    technologies: ["Python", "PyTorch", "Flask", "Flutter", "Firebase", "Machine Learning", "Computer Vision"],
    image: nutritionAppImage,
    github: "https://github.com/Vihanga13/final-one.git",
    status: "Completed"
  },
  {
    id: 3,
    title: "FLIXORA",
    type: "Group Project",
    description: "Full-stack cinema ticket booking system developed as part of the PUSL3120 coursework. Features user registration, real-time seat selection, showtime browsing, secure payment integration (PayPal with LKR-USD conversion), and admin modules for content and booking management. Emphasizes real-time interaction, modular architecture, cloud media storage (AWS S3), and extensive testing.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "WebSockets", "Tailwind CSS", "Docker", "GitHub Actions", "PayPal API", "AWS S3", "Jest"],
    image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    github: "https://github.com/Vihanga13/Flixora.git",
    status: "Completed"
  },
  {
    id: 4,
    title: "ECHO SPACE",
    type: "Group Project",
    description: "Web-based interior design visualization platform developed for university coursework project under the PUSL3122 module. The application allows designers to create and customize room layouts with real-time 2D and 3D visualization using React.js, TypeScript, and three.js. Features secure user authentication, interactive dashboard, drag-and-drop furniture arrangement, and cloud-based data storage via Firebase.",
    technologies: ["React.js", "TypeScript", "Three.js", "Tailwind CSS", "Firebase", "3D Visualization", "UI/UX Design"],
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    github: "https://github.com/Vihanga13/Group55-EchoSpace.git",
    demo: "https://youtu.be/5VNVW7u0i-c",
    status: "Completed"
  },
  {
    id: 5,
    title: "MEDSYNC",
    type: "Group Project",
    description: "Medical Information Management System (MIMS) with QR code identification using PyQt5, Firebase Realtime Database, and OpenCV2 to modernize public healthcare. Through literature review and user-centered design, it enhances patient data management, workflow efficiency, and compliance.",
    technologies: ["PyQt5", "Firebase", "OpenCV2", "QR Code"],
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    github: "https://github.com/Vihanga13/MedSync",
    status: "Completed"
  },
  {
    id: 6,
    title: "TASK MANAGEMENT MOBILE APP",
    type: "Solo Project",
    description: "Currently developing a productivity mobile app for task and project management with real-time collaboration features. Building with React Native and Node.js backend, featuring drag-and-drop task boards, team messaging, file sharing, and progress analytics with clean, intuitive UI design.",
    technologies: ["React Native", "Node.js", "MongoDB", "Socket.io", "JWT", "Express"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    github: "https://github.com/Vihanga13/task-management-app",
    status: "In Development"
  },
  {
    id: 7,
    title: "GREEN STAY",
    type: "Group Project", 
    description: "Platform tailored for NSBM students to facilitate hostel searches in Homagama. It employs HTML, CSS, and JavaScript for frontend development, PHP for backend operations, and MySQL for database management. Additionally, it integrates Google Maps API for mapping features.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Google Maps API"],
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    github: "https://github.com/Vihanga13/GreenStay",
    status: "Completed"
  },
  {
    id: 8,
    title: "GREEN RIDE",
    type: "Group Project",
    description: "Transportation app for NSBM Green University that streamlines commuting by providing public transport details and facilitating carpooling. Built with Dart and Flutter, it leverages Firebase for backend services and GitHub for collaboration.",
    technologies: ["Flutter", "Dart", "Firebase", "Android Studio", "VS Code"],
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    github: "https://github.com/Vihanga13/GreenRide",
    status: "Completed"
  },
  {
    id: 9,
    title: "CALCULATOR",
    type: "Solo Project",
    description: "Created a calculator application with complete functionality with the Tkinter framework and Python. The calculator can do brackets and percentage calculations in addition to standard arithmetic operations like addition, subtraction, multiplication, and division.",
    technologies: ["Python", "Tkinter"],
    image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    github: "https://github.com/Vihanga13/Calculator",
    status: "Completed"
  },
  {
    id: 10,
    title: "WEATHER APP",
    type: "Solo Project",
    description: "Using Python and the OpenWeatherMap API, an interactive weather forecast application was created that offers real-time weather information for any given area. Features include temperature, humidity, wind speed, and comprehensive weather descriptions with error handling.",
    technologies: ["Python", "Tkinter", "OpenWeatherMap API", "JSON"],
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    github: "https://github.com/Vihanga13/Weather-App-Python.git",
    status: "Completed"
  }
];

export const TECHNICAL_SKILLS = {
  "Programming Languages": ["C", "C#", "Python", "JavaScript", "PHP", "TypeScript", "Dart"],
  "Web Technologies": ["HTML", "CSS", "React", "MERN Stack", "Node.js", "Express.js"],
  "Mobile Development": ["React Native", "Flutter", "Dart", "iOS", "Android", "Cross-Platform"],
  "Databases & Tools": ["MySQL", "Firebase", "MongoDB", "SQLite", "Figma", "PowerBI"],
  "Other Skills": ["Data Cleaning", "Data Preprocessing", "OpenCV", "PyQt5"]
};

export const SOFT_SKILLS = [
  {
    name: "Team Work",
    description: "Collaborative project experience and leadership roles",
    icon: "Users"
  },
  {
    name: "Adaptability", 
    description: "Quick learning and adaptation to new technologies",
    icon: "RefreshCw"
  },
  {
    name: "Critical Thinking",
    description: "Analytical problem-solving approach",
    icon: "Brain"
  },
  {
    name: "Time Management",
    description: "Efficient project planning and execution", 
    icon: "Clock"
  },
  {
    name: "Problem Solving",
    description: "Creative solutions to complex challenges",
    icon: "PuzzlePiece"
  }
];

export const EDUCATION = [
  {
    id: 1,
    degree: "BSC (HONS) - Computer Science",
    institution: "NSBM Green University",
    period: "2022 - 2025",
    description: "Currently pursuing undergraduate degree with focus on software development, algorithms, and modern programming paradigms.",
    status: "current"
  },
  {
    id: 2,
    degree: "Web Design for Beginners",
    institution: "University of Moratuwa - Open Learning Platform", 
    period: "2023",
    description: "Comprehensive course covering modern web design principles, user experience, and responsive design techniques.",
    status: "completed"
  },
  {
    id: 3,
    degree: "Diploma in English Language",
    institution: "ICBT Campus",
    period: "2022", 
    description: "Advanced English proficiency certification enhancing communication skills for international collaboration.",
    status: "completed"
  },
  {
    id: 4,
    degree: "GCE Advanced Level - Mathematics Stream",
    institution: "Prince Of Wales' College",
    period: "2021 (2022)",
    description: "Successfully completed in the Physical Stream with C pass for Physics, C pass for ICT and F pass for Combined Mathematics.",
    status: "completed"
  },
  {
    id: 5,
    degree: "Certificate in Software Development (Level 1)",
    institution: "ATARI City Campus",
    period: "2019",
    description: "Foundation course in software development principles and programming fundamentals.",
    status: "completed",
    achievement: "Second Class Upper"
  },
  {
    id: 6,
    degree: "GCE Ordinary Level",
    institution: "Prince Of Wales' College", 
    period: "2018",
    description: "7 A's & 2 B's",
    status: "completed"
  }
];

export const EXPERIENCE = [
  {
    id: 1,
    title: "Junior Web Developer",
    organization: "Altitude1 (PVT) LTD",
    period: "June 2025 - Present",
    description: "Currently building meaningful web experiences and contributing to impactful projects. Focusing on enhancing skills in modern web development technologies while collaborating with an amazing team.",
    icon: "Code"
  },
  {
    id: 2,
    title: "Senior Prefect",
    organization: "Prince Of Wales' College",
    period: "2021",
    description: "Led student body initiatives, maintained discipline, and served as a bridge between students and administration. Demonstrated leadership qualities and responsibility in guiding fellow students.",
    icon: "Medal"
  },
  {
    id: 3,
    title: "Vice President - Science Society", 
    organization: "Prince Of Wales' College",
    period: "2021",
    description: "Organized science exhibitions, workshops, and mentored junior students in STEM activities.",
    icon: "Flask"
  },
  {
    id: 4,
    title: "President - Christian Society",
    organization: "Prince Of Wales' College",
    period: "2020-2021", 
    description: "Coordinated religious activities, community service projects, and spiritual development programs.",
    icon: "Cross"
  },
  {
    id: 5,
    title: "Cricket Team Member",
    organization: "Prince Of Wales' College",
    period: "U13, U15, U17",
    description: "Represented school in various cricket tournaments demonstrating teamwork and competitive spirit.",
    icon: "Target"
  }
];

export const REFERENCES = [
  {
    id: 1,
    name: "Ms Hirushi Dilpriya",
    title: "Lecturer",
    organization: "Faculty of Computing, NSBM Green University",
    address: "Pitipana - Thalagala Rd, Homagama",
    email: "hirushi.d@nsbm.ac.lk"
  },
  {
    id: 2,
    name: "Mrs Udayangana Senanayake", 
    title: "Senior Quality Assurance Engineer",
    organization: "K Eyepex IT Consulting (Pvt) Ltd",
    address: "189 Galle Road, Colombo 03", 
    email: "indunil.ud@gmail.com"
  }
];
