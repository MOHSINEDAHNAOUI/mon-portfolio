// Modèle de données pour les projets
const projectsData = [
    {
        id: 1,
        title: "eCartes a Student Card Appointment System",
        description: "A web application developed as a stage project to manage student card appointments efficiently.",
        longDescription: "This project was developed during my internship as a comprehensive web application for managing student card appointments. The system includes user authentication, appointment scheduling, and administrative dashboard for managing appointments and student records.",
        image: "project1/project1_home.png",
        gallery: [
            "project1/project1_img3.png",
            "project1/project1_img2.png",
            "project1/project1_img1.png"
        ],
        technologies: ["Web Development", "Database", "UI/UX"],
        icon: "fas fa-calendar-check",
        iconColor: "text-blue-500",
        bgColor: "bg-blue-100",
        status: "completed",
        year: 2025,
        duration: "4 Weeks",
        teamSize: "Solo",
        features: [
            "Digital student ID with QR or NFC",
            "Attendance tracking and campus access",
            "Online card management (report, renew, update)"
        ],
        challenges: [
            "Protecting sensitive student data",
            "Integrating eCarte with existing school platforms",
            "Detecting and preventing card misuse or fraud"
        ],
        solutions: [
            "Implemented encryption and secure authentication methods",
            "Used standardized APIs for seamless system integration",
            "Added photo verification and logged card activity"
        ],
        liveDemo: "#"
    },
    {
        id: 2,
        title: "Ciné Nova",
        description: "A web application for booking cinema tickets online with a user-friendly interface.",
        longDescription: "Ciné Nova is a cinema ticket reservation system developed to simplify the booking process for users. It features seat selection, movie schedules, and secure payment integration, ensuring a smooth experience for customers.",
        image: "project2/project2_home.png",
        gallery: [
            "project2/project2_img1.png",
            "project2/project2_img2.png"
        ],
        technologies: ["HTML", "CSS", "JavaScript", "PHP"],
        icon: "fas fa-film",
        iconColor: "text-red-500",
        bgColor: "bg-red-100",
        status: "completed",
        year: 2025,
        duration: "1 Week",
        teamSize: "Solo",
        features: [
            "Movie schedule browsing and seat selection",
            "Online payment and booking confirmation",
            "User account management and booking history"
        ],
        challenges: [
            "Implementing real-time seat availability",
            "Ensuring secure online payments",
            "Designing an intuitive UI for users"
        ],
        solutions: [
            "Used backend synchronization for seat status",
            "Integrated trusted payment gateway APIs",
            "Developed responsive and simple design"
        ],
        liveDemo: "#"
    },
    {
        id: 3,
        title: "BerMaths",
    description: "An educational website offering math lessons tailored for high school students.",
    longDescription: "BerMaths is designed as a digital platform to help students access math courses easily. It organizes lessons by grade level, includes exercises, and provides downloadable resources to support students’ learning journeys.",
    image: "bermaths/home.png",
    gallery: [
        "bermaths/lesson1.png",
        "bermaths/lesson2.png"
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    icon: "fas fa-square-root-alt",
    iconColor: "text-green-500",
    bgColor: "bg-green-100",
    status: "in-development",
    year: 2025,
    duration: "32 Weeks",
    teamSize: "Me and Mehdi Zineddine (maths teacher)",
    features: [
        "Organized lessons by educational level",
        "Interactive exercises and quizzes",
        "Resource downloads for offline study"
    ],
    challenges: [
        "Structuring educational content clearly",
        "Ensuring responsive design for all devices",
        "Managing a large volume of course materials"
    ],
    solutions: [
        "Used clear navigation and simple layouts",
        "Applied mobile-first responsive techniques",
        "Optimized content delivery and loading speed"
    ],
    liveDemo: "#"
},
    {
    id: 4,
    title: "DATAvIZ",
    description: "A data visualization web project showcasing various interactive charts and graphs.",
    longDescription: "DATAvIZ is a project focused on representing complex data visually through an intuitive HTML interface. It includes dynamic charts, filtering options, and responsive design to help users explore data easily and meaningfully.",
    image: "dataviz/home.png",
    gallery: [
        "dataviz/chart1.png",
        "dataviz/chart2.png"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Chart.js"],
    icon: "fas fa-chart-bar",
    iconColor: "text-purple-500",
    bgColor: "bg-purple-100",
    status: "completed",
    year: 2025,
    duration: "3 Weeks",
    teamSize: "Solo",
    features: [
        "Interactive charts and graphs",
        "Filtering and sorting of datasets",
        "Responsive layout for desktop and mobile"
    ],
    challenges: [
        "Handling large datasets efficiently",
        "Creating smooth and responsive charts",
        "Ensuring cross-browser compatibility"
    ],
    solutions: [
        "Used Chart.js library for performance",
        "Optimized JavaScript for responsiveness",
        "Tested on multiple browsers and devices"
    ],
    liveDemo: "#"
},
    {
        id: 5,
        title: "MyWork",
    description: "A school-oriented app for managing and sharing students’ tasks and projects.",
    longDescription: "MyWork is designed to streamline the assignment management process between students and teachers. The app provides task creation, submission tracking, and a collaborative environment to facilitate schoolwork.",
    image: "mywork/home.png",
    gallery: [
        "mywork/task1.png",
        "mywork/task2.png"
    ],
    technologies: ["Web Development", "Database", "UI/UX"],
    icon: "fas fa-tasks",
    iconColor: "text-yellow-500",
    bgColor: "bg-yellow-100",
    status: "in progress",
    year: 2025,
    duration: "5 Weeks",
    teamSize: "Solo",
    features: [
        "Task creation and assignment",
        "Submission tracking and deadlines",
        "Collaborative commenting and feedback"
    ],
    challenges: [
        "Designing an intuitive user interface",
        "Implementing real-time updates",
        "Managing user roles and permissions"
    ],
    solutions: [
        "Focused on simple UI with clear workflows",
        "Used WebSocket for live data updates",
        "Created role-based access control"
    ],
    liveDemo: "#"
}
];

// Variables globales
let currentFilter = 'all';
let filteredProjects = [...projectsData];

// Fonction pour générer les cartes de projets
function generateProjectCards(projects = projectsData) {
    const projectsContainer = document.querySelector('#projects-grid');
    if (!projectsContainer) return;

    projectsContainer.innerHTML = '';

    projects.forEach((project, index) => {
        const projectCard = `
            <div class="project-card bg-white rounded-xl overflow-hidden shadow-md transition duration-500 transform hover:scale-105" 
                 data-project-id="${project.id}" 
                 data-category="${project.category}"
                 style="animation-delay: ${index * 0.1}s;">
                <div class="h-48 overflow-hidden relative">
                    <img src="${project.image}" 
                         alt="${project.title}" 
                         class="w-full h-full object-cover transition duration-500 hover:scale-105">
                    <div class="absolute top-4 right-4">
                        <span class="px-2 py-1 text-xs rounded-full ${getStatusColor(project.status)}">
                            ${project.status}
                        </span>
                    </div>
                </div>
                <div class="p-6">
                    <div class="flex items-center mb-2">
                        <div class="${project.bgColor} p-2 rounded-full mr-3">
                            <i class="${project.icon} ${project.iconColor}"></i>
                        </div>
                        <h3 class="text-xl font-semibold">${project.title}</h3>
                    </div>
                    <p class="text-gray-600 mb-4">
                        ${project.description}
                    </p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${project.technologies.map(tech => 
                            `<span class="px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">${tech}</span>`
                        ).join('')}
                    </div>
                    <div class="flex justify-between items-center">
                        <a href="#" class="text-blue-500 font-medium flex items-center hover:text-blue-700 view-project-btn" data-project-id="${project.id}">
                            View Project <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                        <span class="text-xs text-gray-500">${project.year}</span>
                    </div>
                </div>
            </div>
        `;
        projectsContainer.innerHTML += projectCard;
    });

    // Ajouter les event listeners pour les boutons "View Project"
    document.querySelectorAll('.view-project-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const projectId = parseInt(this.getAttribute('data-project-id'));
            showProjectModal(projectId);
        });
    });

    // Animation d'entrée pour les cartes
    animateProjectCards();
}

// Fonction pour obtenir la couleur du statut
function getStatusColor(status) {
    const statusColors = {
        'completed': 'bg-green-100 text-green-800',
        'ongoing': 'bg-yellow-100 text-yellow-800',
        'in-development': 'bg-red-100 text-red-800'
    };
    return statusColors[status] || 'bg-gray-100 text-gray-800';
}

// Fonction pour animer les cartes de projets
function animateProjectCards() {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Fonction pour filtrer les projets
function filterProjects(category) {
    currentFilter = category;
    
    if (category === 'all') {
        filteredProjects = [...projectsData];
    } else {
        filteredProjects = projectsData.filter(project => project.category === category);
    }
    
    generateProjectCards(filteredProjects);
    updateFilterButtons(category);
}

// Fonction pour mettre à jour l'état des boutons de filtre
function updateFilterButtons(activeFilter) {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        const filter = btn.getAttribute('data-filter');
        if (filter === activeFilter) {
            btn.classList.remove('bg-gray-200', 'text-gray-700');
            btn.classList.add('bg-blue-500', 'text-white');
        } else {
            btn.classList.remove('bg-blue-500', 'text-white');
            btn.classList.add('bg-gray-200', 'text-gray-700');
        }
    });
}

// Fonction pour afficher le modal de projet détaillé
function showProjectModal(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return;

    const modal = `
        <div id="project-modal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div class="bg-white rounded-xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
                <div class="p-6">
                    <div class="flex justify-between items-start mb-6">
                        <div>
                            <h2 class="text-2xl font-bold">${project.title}</h2>
                            <p class="text-gray-600 mt-2">${project.longDescription}</p>
                        </div>
                        <button id="close-project-modal" class="text-gray-500 hover:text-gray-700">
                            <i class="fas fa-times text-2xl"></i>
                        </button>
                    </div>
                    
                    <!-- Image Gallery -->
                    <div class="mb-6">
                        <h3 class="text-lg font-semibold mb-3">Project Gallery</h3>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                            ${project.gallery.map(img => `
                                <img src="${img}" alt="${project.title}" class="w-full h-48 object-cover rounded-lg hover:scale-105 transition duration-300">
                            `).join('')}
                        </div>
                    </div>
                    
                    <!-- Project Details -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 class="text-lg font-semibold mb-3">Features</h3>
                            <ul class="list-disc list-inside text-gray-600 mb-4 space-y-1">
                                ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                            </ul>
                            
                            <h3 class="text-lg font-semibold mb-3">Challenges & Solutions</h3>
                            <div class="space-y-3">
                                <div>
                                    <h4 class="font-medium text-red-600">Challenges:</h4>
                                    <ul class="list-disc list-inside text-gray-600 text-sm ml-4">
                                        ${project.challenges.map(challenge => `<li>${challenge}</li>`).join('')}
                                    </ul>
                                </div>
                                <div>
                                    <h4 class="font-medium text-green-600">Solutions:</h4>
                                    <ul class="list-disc list-inside text-gray-600 text-sm ml-4">
                                        ${project.solutions.map(solution => `<li>${solution}</li>`).join('')}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <h3 class="text-lg font-semibold mb-3">Project Info</h3>
                            <div class="space-y-2 text-sm">
                                <p><strong>Status:</strong> <span class="capitalize ${getStatusColor(project.status)} px-2 py-1 rounded">${project.status}</span></p>
                                <p><strong>Year:</strong> ${project.year}</p>
                                <p><strong>Duration:</strong> ${project.duration}</p>
                                <p><strong>Team Size:</strong> ${project.teamSize}</p>
                            </div>
                            
                            <h3 class="text-lg font-semibold mb-3 mt-6">Technologies</h3>
                            <div class="flex flex-wrap gap-2">
                                ${project.technologies.map(tech => 
                                    `<span class="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">${tech}</span>`
                                ).join('')}
                            </div>
                        </div>
                    </div>
                    
                    <!-- Action Buttons -->
                    <div class="flex justify-center gap-4 mt-8">
                        <a href="${project.liveDemo}" class="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
                            <i class="fas fa-external-link-alt mr-2"></i>Live Demo
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modal);

    // Event listener pour fermer le modal
    document.getElementById('close-project-modal').addEventListener('click', () => {
        document.getElementById('project-modal').remove();
    });

    // Fermer le modal en cliquant à l'extérieur
    document.getElementById('project-modal').addEventListener('click', (e) => {
        if (e.target.id === 'project-modal') {
            document.getElementById('project-modal').remove();
        }
    });
}

// Initialiser les cartes de projets et les filtres quand le DOM est chargé
document.addEventListener('DOMContentLoaded', function() {
    generateProjectCards();
    
    // Event listeners pour les filtres
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            filterProjects(filter);
        });
    });
}); 