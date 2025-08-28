// Données complètes pour tous les projets - Page All Projects
const allProjectsData = [
    {
        id: 1,
        title: "eCartes a Student Card Appointment System",
        description: "A comprehensive web application for managing student card appointments efficiently with user authentication and administrative dashboard.",
        longDescription: "This project was developed during my internship as a comprehensive web application for managing student card appointments. The system includes user authentication, appointment scheduling, and administrative dashboard for managing appointments and student records. It features a modern interface with real-time updates and comprehensive reporting capabilities.",
        image: "project1/project1_home.png",
        gallery: [
            "project1/project1_img3.png",
            "project1/project1_img2.png",
            "project1/project1_img1.png"
        ],
        technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap"],
        icon: "fas fa-calendar-check",
        iconColor: "text-blue-500",
        bgColor: "bg-blue-100",
        status: "completed",
        year: 2025,
        duration: "4 Weeks",
        teamSize: "Solo",
        category: "web-development",
        features: [
            "Digital student ID with QR or NFC",
            "Attendance tracking and campus access",
            "Online card management (report, renew, update)",
            "User authentication and role management",
            "Real-time appointment scheduling",
            "Administrative dashboard with analytics"
        ],
        challenges: [
            "Protecting sensitive student data",
            "Integrating eCarte with existing school platforms",
            "Detecting and preventing card misuse or fraud",
            "Handling high concurrent user loads",
            "Ensuring data consistency across systems"
        ],
        solutions: [
            "Implemented encryption and secure authentication methods",
            "Used standardized APIs for seamless system integration",
            "Added photo verification and logged card activity",
            "Implemented caching and database optimization",
            "Used transaction-based data operations"
        ],
        liveDemo: "#",
        github: "#",
        highlights: ["Full-stack development", "Database design", "Security implementation", "API integration"]
    },
    {
        id: 2,
        title: "Ciné Nova",
        description: "A modern cinema ticket reservation system with seat selection, movie schedules, and secure payment integration.",
        longDescription: "Ciné Nova is a cinema ticket reservation system developed to simplify the booking process for users. It features seat selection, movie schedules, and secure payment integration, ensuring a smooth experience for customers. The system includes real-time seat availability, user account management, and comprehensive booking history.",
        image: "project2/project2_home.png",
        gallery: [
            "project2/project2_img1.png",
            "project2/project2_img2.png"
        ],
        technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "jQuery"],
        icon: "fas fa-film",
        iconColor: "text-red-500",
        bgColor: "bg-red-100",
        status: "completed",
        year: 2025,
        duration: "1 Week",
        teamSize: "Solo",
        category: "web-development",
        features: [
            "Movie schedule browsing and seat selection",
            "Online payment and booking confirmation",
            "User account management and booking history",
            "Real-time seat availability updates",
            "Responsive design for mobile devices",
            "Email confirmation system"
        ],
        challenges: [
            "Implementing real-time seat availability",
            "Ensuring secure online payments",
            "Designing an intuitive UI for users",
            "Managing concurrent bookings",
            "Integrating payment gateway APIs"
        ],
        solutions: [
            "Used backend synchronization for seat status",
            "Integrated trusted payment gateway APIs",
            "Developed responsive and simple design",
            "Implemented booking locks and timeouts",
            "Used secure HTTPS connections"
        ],
        liveDemo: "#",
        github: "#",
        highlights: ["E-commerce functionality", "Payment integration", "Real-time updates", "User experience design"]
    },
    {
        id: 3,
        title: "BerMaths",
        description: "An educational platform offering comprehensive math lessons tailored for high school students with interactive exercises.",
        longDescription: "BerMaths is designed as a digital platform to help students access math courses easily. It organizes lessons by grade level, includes exercises, and provides downloadable resources to support students' learning journeys. The platform features interactive quizzes, progress tracking, and personalized learning paths.",
        image: "project3/project3_home.png",
        gallery: [],
        technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Chart.js"],
        icon: "fas fa-square-root-alt",
        iconColor: "text-green-500",
        bgColor: "bg-green-100",
        status: "in-development",
        year: 2025,
        duration: "To Be Determined",
        teamSize: "Me and Mehdi Zineddine (maths teacher)",
        category: "educational",
        features: [
            "Organized lessons by educational level",
            "Interactive exercises and quizzes",
            "Resource downloads for offline study",
            "Progress tracking and analytics",
            "Personalized learning recommendations",
            "Teacher dashboard for content management"
        ],
        challenges: [
            "Structuring educational content clearly",
            "Ensuring responsive design for all devices",
            "Managing a large volume of course materials",
            "Creating engaging interactive elements",
            "Implementing adaptive learning algorithms"
        ],
        solutions: [
            "Used clear navigation and simple layouts",
            "Applied mobile-first responsive techniques",
            "Optimized content delivery and loading speed",
            "Integrated gamification elements",
            "Used machine learning for personalization"
        ],
        liveDemo: "#",
        github: "#",
        highlights: ["Educational technology", "Interactive learning", "Content management", "User engagement"]
    },
    {
        id: 4,
        title: "DATAvIZ",
        description: "A data visualization platform showcasing various interactive charts and graphs with filtering and sorting capabilities.",
        longDescription: "DATAvIZ is a project focused on representing complex data visually through an intuitive HTML interface. It includes dynamic charts, filtering options, and responsive design to help users explore data easily and meaningfully. The platform supports multiple chart types and real-time data updates.",
        image: "project4/project4_home.png",
        gallery: [],
        technologies: ["HTML", "CSS", "JavaScript", "Chart.js", "D3.js", "Bootstrap"],
        icon: "fas fa-chart-bar",
        iconColor: "text-purple-500",
        bgColor: "bg-purple-100",
        status: "completed",
        year: 2025,
        duration: "4 Days",
        teamSize: "Solo",
        category: "data-visualization",
        features: [
            "Interactive charts and graphs",
            "Filtering and sorting of datasets",
            "Responsive layout for desktop and mobile",
            "Multiple chart types (bar, line, pie, scatter)",
            "Real-time data updates",
            "Export functionality (PNG, PDF)"
        ],
        challenges: [
            "Handling large datasets efficiently",
            "Creating smooth and responsive charts",
            "Ensuring cross-browser compatibility",
            "Optimizing performance for mobile devices",
            "Implementing responsive chart layouts"
        ],
        solutions: [
            "Used Chart.js library for performance",
            "Optimized JavaScript for responsiveness",
            "Tested on multiple browsers and devices",
            "Implemented lazy loading for large datasets",
            "Used CSS Grid for responsive layouts"
        ],
        liveDemo: "https://mohsinedahnaoui.github.io/DATAvIZ/",
        github: "https://github.com/MOHSINEDAHNAOUI/DATAvIZ",
        highlights: ["Data visualization", "Interactive charts", "Performance optimization", "Cross-platform compatibility"]
    },
    {
        id: 5,
        title: "MyWork",
        description: "A collaborative school management app for managing and sharing students' tasks and projects with real-time updates.",
        longDescription: "MyWork is designed to streamline the assignment management process between students and teachers. The app provides task creation, submission tracking, and a collaborative environment to facilitate schoolwork. It includes real-time notifications, file sharing, and comprehensive progress tracking.",
        image: "project5/project5_home.png",
        gallery: [],
        technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "WebSocket"],
        icon: "fas fa-tasks",
        iconColor: "text-yellow-500",
        bgColor: "bg-yellow-100",
        status: "in-development",
        year: 2025,
        duration: "To Be Determined",
        teamSize: "Solo",
        category: "web-development",
        features: [
            "Task creation and assignment",
            "Submission tracking and deadlines",
            "Collaborative commenting and feedback",
            "File upload and sharing",
            "Real-time notifications",
            "Progress analytics and reporting"
        ],
        challenges: [
            "Designing an intuitive user interface",
            "Implementing real-time updates",
            "Managing user roles and permissions",
            "Handling file uploads securely",
            "Ensuring data privacy compliance"
        ],
        solutions: [
            "Focused on simple UI with clear workflows",
            "Used WebSocket for live data updates",
            "Created role-based access control",
            "Implemented secure file handling",
            "Added GDPR compliance features"
        ],
        liveDemo: "#",
        github: "#",
        highlights: ["Collaborative platform", "Real-time communication", "File management", "User role management"]
    },
    {
        id: 6,
        title: "GéoPropriétés",
        description: "A web application for managing and visualizing real estate listings on an interactive map.",
        longDescription: "GeoProperties is a web application that enables administrators to manage and visualize real estate listings on an interactive map, with secure authentication, role-based access, and optimized performance for large datasets.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/1200px-World_map_-_low_resolution.svg.png",
        gallery: [],
        technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Font Awesome", "PHP", "MySQL", "Leaflet", "Google Maps API"],
        icon: "fas fa-map-marker-alt",
        iconColor: "text-orange-500",
        bgColor: "bg-orange-100",
        status: "completed",
        year: 2025,
        duration: "2 Weeks",
        teamSize: "Solo",
        category: "web-development",
        features: [
            "Property management and visualization on an interactive map",
            "Add, edit, and delete real estate listings",
            "Advanced search by location, price, and property features",
            "Admin dashboard for monitoring and management",
            "Export and generate property reports"
        ],
        challenges: [
            "Integrating a smooth and accurate interactive map",
            "Ensuring data security and user privacy",
            "Optimizing performance with large volumes of property data",
            "Managing multiple user roles (agents, administrators)"
        ],
        solutions: [
            "Used mapping APIs (Leaflet/Google Maps) for interactive map features",
            "Implemented secure authentication with hashed passwords",
            "Optimized SQL queries and applied pagination for faster loading",
            "Developed role-based access control for user management"
        ],
        liveDemo: "https://mohsinedahnaoui.github.io/GeoProprietes/",
        github: "#",
        highlights: ["Property management", "Interactive map", "Data security", "User management"]
    }
];

// Fonction pour obtenir la couleur du statut
function getStatusColor(status) {
    const statusColors = {
        'completed': 'bg-green-100 text-green-800',
        'ongoing': 'bg-yellow-100 text-yellow-800',
        'in-development': 'bg-red-100 text-red-800'
    };
    return statusColors[status] || 'bg-gray-100 text-gray-800';
}

// Fonction pour obtenir la couleur de la catégorie
function getCategoryColor(category) {
    const categoryColors = {
        'web-development': 'bg-blue-100 text-blue-800',
        'educational': 'bg-green-100 text-green-800',
        'data-visualization': 'bg-purple-100 text-purple-800',
        'mobile-app': 'bg-orange-100 text-orange-800'
    };
    return categoryColors[category] || 'bg-gray-100 text-gray-800';
}

// Fonction pour formater la durée
function formatDuration(duration) {
    if (duration === 'To Be Determined') {
        return 'En cours';
    }
    return duration;
}

// Fonction pour obtenir le statut en français
function getStatusInFrench(status) {
    const statusTranslations = {
        'completed': 'Terminé',
        'in-development': 'En développement',
        'ongoing': 'En cours'
    };
    return statusTranslations[status] || status;
}
