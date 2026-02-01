// Comprehensive Project Data Model with Optimized Structure
const projectsData = [
    {
        id: 1,
        title: "eCartes System",
        description: "A comprehensive web application for managing student card appointments efficiently.",
        longDescription: "This project was developed during my internship as a comprehensive web application for managing student card appointments. The system includes user authentication, appointment scheduling, and administrative dashboard for managing appointments and student records. It features a modern interface with real-time updates and comprehensive reporting capabilities.",
        image: "project1/project1_home.png",
        gallery: ["project1/project1_img3.png", "project1/project1_img2.png", "project1/project1_img1.png"],
        technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap"],
        status: "Completed",
        year: 2025,
        liveDemo: "https://ecartes-estfbs-usms.kesug.com/"
    },
    {
        id: 2,
        title: "Ciné Nova",
        description: "A modern cinema ticket reservation system with seat selection and movie schedules.",
        longDescription: "Ciné Nova is a cinema ticket reservation system developed to simplify the booking process for users. It features seat selection, movie schedules, and secure payment integration, ensuring a smooth experience for customers. The system includes real-time seat availability, user account management, and comprehensive booking history.",
        image: "project2/project2_home.png",
        gallery: ["project2/project2_img1.png", "project2/project2_img2.png"],
        technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "jQuery"],
        status: "Completed",
        year: 2025,
        liveDemo: "#"
    },
    {
        id: 3,
        title: "BerMaths",
        description: "An educational platform offering comprehensive math lessons for high school students.",
        longDescription: "BerMaths is designed as a digital platform to help students access math courses easily. It organizes lessons by grade level, includes exercises, and provides downloadable resources to support students' learning journeys. The platform features interactive quizzes, progress tracking, and personalized learning paths.",
        image: "project3/project3_home.png",
        gallery: [],
        technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Chart.js"],
        status: "In Development",
        year: 2025,
        liveDemo: "#"
    },
    {
        id: 4,
        title: "DATAvIZ",
        description: "A data visualization platform showcasing interactive charts and graphs.",
        longDescription: "DATAvIZ is a project focused on representing complex data visually through an intuitive HTML interface. It includes dynamic charts, filtering options, and responsive design to help users explore data easily and meaningfully. The platform supports multiple chart types and real-time data updates.",
        image: "project4/project4_home.png",
        gallery: [],
        technologies: ["HTML", "CSS", "JavaScript", "Chart.js", "D3.js", "Bootstrap"],
        status: "Completed",
        year: 2025,
        liveDemo: "https://mohsinedahnaoui.github.io/DATAvIZ/"
    },
    {
        id: 5,
        title: "MyWork",
        description: "A collaborative school management app for managing and sharing students' tasks.",
        longDescription: "MyWork is designed to streamline the assignment management process between students and teachers. The app provides task creation, submission tracking, and a collaborative environment to facilitate schoolwork. It includes real-time notifications, file sharing, and comprehensive progress tracking.",
        image: "project5/project5_home.png",
        gallery: [],
        technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "WebSocket"],
        status: "In Development",
        year: 2025,
        liveDemo: "#"
    },
    {
        id: 6,
        title: "GéoPropriétés",
        description: "A web application for managing and visualizing real estate listings on an interactive map.",
        longDescription: "GeoProperties is a web application that enables administrators to manage and visualize real estate listings on an interactive map, with secure authentication, role-based access, and optimized performance for large datasets.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/1200px-World_map_-_low_resolution.svg.png",
        gallery: [],
        technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "PHP", "MySQL", "Leaflet"],
        status: "Completed",
        year: 2025,
        liveDemo: "https://mohsinedahnaoui.github.io/GeoProprietes/"
    },
    {
        id: 7,
        title: "MarketHub",
        description: "A premium ecommerce platform for big brand electronics and fashion.",
        longDescription: "MarketHub is a robust ecommerce web application built with Laravel that delivers a seamless shopping experience. It features a dynamic frontend with instant AJAX-based product filtering, a secure customer dashboard, and a comprehensive admin panel for managing inventory, categories, and orders.",
        image: "/project6/project6_home.png",
        gallery: ["/project6/project6_img1.png", "/project6/project6_img2.png", "/project6/project6_img3.png"],
        technologies: ["Laravel 11", "PHP 8.2", "MySQL", "JavaScript", "Tailwind CSS", "AJAX"],
        status: "Completed",
        year: 2026,
        liveDemo: "#"
    },
    {
        id: 8,
        title: "Nak'Hah Coffee",
        description: "A premium artisanal coffee shop website featuring a dynamic design.",
        longDescription: "Nak'Hah Coffee Shop is a comprehensive digital presence for an artisanal café. It features a stunning, responsive interface with 3D animations, glassmorphism effects, and a custom 'Coffee & Gold' aesthetic. The platform allows customers to browse the menu, view a dynamic gallery, and submit testimonials.",
        image: "/project8/project8_home.png",
        gallery: ["/project8/project8_img1.png", "/project8/project8_img2.png", "/project8/project8_img3.png"],
        technologies: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "PHP", "MySQL"],
        status: "Completed",
        year: 2026,
        liveDemo: "http://nak-hah.wuaze.com"
    },
    {
        id: 9,
        title: "Tissir Royal",
        description: "A modern website for a fast-food restaurant with WhatsApp ordering.",
        longDescription: "Tissir Royal is a single-page web application designed for a fast-food establishment. It modernizes the customer experience with an interactive digital menu featuring category filtering, direct integration for WhatsApp orders, and a bilingual interface (French/Arabic).",
        image: "/project9/project9_home.png",
        gallery: ["/project9/project9_img1.png", "/project9/project9_img2.png", "/project9/project9_img3.png"],
        technologies: ["HTML5", "CSS3", "JavaScript", "Font Awesome", "Google Fonts"],
        status: "In Development",
        year: 2026,
        liveDemo: "#"
    }
];

function generateProjectCards(projects = projectsData) {
    const container = document.querySelector('#projects-grid');
    if (!container) return;

    container.innerHTML = projects.map((project, index) => `
        <div class="glass-card group cursor-pointer overflow-hidden project-card-3d" data-id="${project.id}">
            <div class="relative h-64 overflow-hidden">
                <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100">
                <div class="absolute inset-0 bg-gradient-to-t from-[#050816] to-transparent opacity-80"></div>
                <div class="absolute bottom-6 left-6 right-6">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-xs font-bold text-gray-500 decoration-blue-500/50 underline-offset-4 underline">${project.year}</span>
                    </div>
                    <h3 class="text-2xl font-black text-white group-hover:text-blue-400 transition-colors uppercase tracking-tight">${project.title}</h3>
                </div>
            </div>
            <div class="p-6 border-t border-white/5 bg-white/5">
                <p class="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">${project.description}</p>
                <div class="flex items-center justify-between">
                    <div class="flex flex-wrap gap-2">
                        ${project.technologies.slice(0, 3).map(t => `<span class="px-3 py-1 rounded-md glass-card text-[9px] font-black uppercase tracking-widest border-white/10 bg-white/5">${t}</span>`).join('')}
                        ${project.technologies.length > 3 ? `<span class="px-2 py-1 text-[9px] text-gray-500">+${project.technologies.length - 3}</span>` : ''}
                    </div>
                    <button class="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-blue-600 transition-all transform group-hover:rotate-45">
                        <i class="fas fa-arrow-right text-xs"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    initProject3D();
    if (typeof initRevelations === 'function') initRevelations();
}

function initProject3D() {
    const cards = document.querySelectorAll('.project-card-3d');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            gsap.to(card, {
                rotateX: rotateX,
                rotateY: rotateY,
                duration: 0.5,
                ease: "power2.out",
                transformPerspective: 1000
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.5, ease: "power2.out" });
        });

        card.addEventListener('click', () => {
            const id = card.getAttribute('data-id');
            showProjectModal(parseInt(id));
        });
    });
}

function showProjectModal(id) {
    const project = projectsData.find(p => p.id === id);
    if (!project) return;

    const allImages = [project.image, ...project.gallery];
    const modal = document.createElement('div');
    modal.className = "fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8";
    modal.innerHTML = `
        <style>
            .custom-scrollbar::-webkit-scrollbar { width: 4px; }
            .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255,255,255,0.02); }
            .custom-scrollbar::-webkit-scrollbar-thumb { background: #3b82f6; border-radius: 10px; }
            @keyframes shimmer { 
                0% { transform: translateX(-100%); } 
                100% { transform: translateX(100%); } 
            }
            .group:hover .group-hover\:animate-shimmer {
                animation: shimmer 1.5s infinite;
            }
        </style>
        <div class="absolute inset-0 bg-[#050816]/98 backdrop-blur-2xl"></div>
        
        <button class="fixed top-6 right-6 z-[110] text-gray-500 hover:text-white transition-all text-4xl leading-none p-2 hover:rotate-90" id="close-modal">
            <i class="fas fa-times"></i>
        </button>

        <div class="glass-card w-full max-w-5xl max-h-[85vh] overflow-y-auto relative z-10 p-4 sm:p-10 border-white/10 m-2 custom-scrollbar">
            <div class="grid lg:grid-cols-2 gap-8 lg:gap-12">
                <!-- Left: Content -->
                <div class="space-y-6 order-2 lg:order-1">
                    <div>
                        <div class="flex items-center gap-3 mb-3">
                            <span class="text-blue-500 font-bold tracking-[0.2em] uppercase text-[9px]">${project.year}</span>
                            <span class="px-2 py-0.5 bg-white/5 border border-white/10 rounded-full text-[8px] text-gray-400 uppercase font-black">${project.status}</span>
                        </div>
                        <h2 class="text-3xl sm:text-5xl font-black mt-2 mb-4 leading-none uppercase tracking-tighter gradient-text">${project.title}</h2>
                        <div class="flex flex-wrap gap-1.5">
                            ${project.technologies.map(t => `<span class="glass-card px-3 py-1.5 text-[9px] font-black tracking-widest uppercase border-white/10 bg-white/5">${t}</span>`).join('')}
                        </div>
                    </div>
                    
                    <div class="space-y-3">
                        <h4 class="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500/50">Overview</h4>
                        <p class="text-gray-400 text-base leading-relaxed font-medium">${project.longDescription}</p>
                    </div>
                </div>

                <!-- Right: Carousel -->
                <div class="space-y-4 order-1 lg:order-2">
                    <div class="relative group h-[220px] sm:h-[320px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                        <div class="carousel-track h-full flex transition-transform duration-700 cubic-bezier(0.19, 1, 0.22, 1)" id="carousel-track">
                            ${allImages.map(img => `
                                <div class="min-w-full h-full">
                                    <img src="${img}" class="w-full h-full object-cover">
                                </div>
                            `).join('')}
                        </div>
                        
                        ${allImages.length > 1 ? `
                            <button id="prev-btn" class="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-card border-white/10 text-white flex items-center justify-center hover:bg-blue-600 transition-all opacity-0 group-hover:opacity-100 z-20">
                                <i class="fas fa-chevron-left text-xs"></i>
                            </button>
                            <button id="next-btn" class="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-card border-white/10 text-white flex items-center justify-center hover:bg-blue-600 transition-all opacity-0 group-hover:opacity-100 z-20">
                                <i class="fas fa-chevron-right text-xs"></i>
                            </button>
                            <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                                ${allImages.map((_, i) => `<div class="carousel-dot h-1 rounded-full bg-white/30 transition-all duration-300" style="width: ${i === 0 ? '16px' : '6px'}; ${i === 0 ? 'background: white' : ''}" data-index="${i}"></div>`).join('')}
                            </div>
                        ` : ''}
                    </div>
                </div>
            </div>

            <!-- Web-Aligned glass-card 3D Button -->
            <div class="mt-12 flex justify-center" style="perspective: 1200px;">
                <a href="${project.liveDemo}" target="_blank" id="launch-btn-3d" 
                   class="glass-card group relative px-16 py-5 overflow-hidden transition-all duration-500 hover:scale-110" 
                   style="transform-style: preserve-3d; border-radius: 50px;">
                    
                    <!-- Hover Glow Layer -->
                    <div class="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    
                    <span class="relative z-10 flex items-center justify-center h-full" style="transform: translateZ(40px);">
                        <!-- Hover Icon (Appears from left) -->
                        <i class="fas fa-globe-americas text-blue-400 text-xl absolute left-0 -translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500"></i>
                        
                        <!-- Text (Slides right on hover) -->
                        <span class="gradient-text font-black uppercase tracking-[0.3em] text-[11px] inline-block transition-transform duration-500 group-hover:translate-x-8">Visit the Site</span>
                    </span>

                    <!-- Subtle Tech Accent -->
                    <div class="absolute inset-0 border border-white/5 rounded-full group-hover:border-blue-500/30 transition-colors"></div>
                </a>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';

    // 3D Button Logic
    const launchBtn = modal.querySelector('#launch-btn-3d');
    if (launchBtn) {
        launchBtn.addEventListener('mousemove', (e) => {
            const rect = launchBtn.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 5;
            const rotateY = (centerX - x) / 10;

            gsap.to(launchBtn, {
                rotateX: rotateX,
                rotateY: rotateY,
                scale: 1.05,
                duration: 0.5,
                ease: "power2.out"
            });
        });

        launchBtn.addEventListener('mouseleave', () => {
            gsap.to(launchBtn, {
                rotateX: 0,
                rotateY: 0,
                scale: 1,
                duration: 0.5,
                ease: "power2.out"
            });
        });

        // Floating Animation
        gsap.to(launchBtn, {
            y: "-=10",
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }



    // Carousel Logic
    let currentSlide = 0;
    const track = modal.querySelector('#carousel-track');
    const dots = modal.querySelectorAll('.carousel-dot');

    const updateCarousel = (index) => {
        currentSlide = index;
        if (track) track.style.transform = `translateX(-${currentSlide * 100}%)`;

        dots.forEach((dot, i) => {
            dot.style.background = i === currentSlide ? 'white' : 'rgba(255,255,255,0.3)';
            dot.style.width = i === currentSlide ? '16px' : '6px';
        });
    };

    // Auto-advance logic (1.5s)
    let autoSlideInterval = null;
    if (allImages.length > 1) {
        autoSlideInterval = setInterval(() => {
            updateCarousel((currentSlide + 1) % allImages.length);
        }, 1500);
    }

    const nextBtn = modal.querySelector('#next-btn');
    const prevBtn = modal.querySelector('#prev-btn');

    if (nextBtn) {
        nextBtn.onclick = (e) => {
            e.stopPropagation();
            clearInterval(autoSlideInterval); // Stop auto-slide on user interaction
            updateCarousel((currentSlide + 1) % allImages.length);
        };
        prevBtn.onclick = (e) => {
            e.stopPropagation();
            clearInterval(autoSlideInterval);
            updateCarousel((currentSlide - 1 + allImages.length) % allImages.length);
        };
    }

    modal.querySelector('#close-modal').onclick = () => {
        if (autoSlideInterval) clearInterval(autoSlideInterval);
        gsap.to(modal.querySelector('.glass-card'), {
            scale: 0.9, opacity: 0, duration: 0.3, onComplete: () => {
                modal.remove();
                document.body.style.overflow = 'auto';
            }
        });
    };

    // Animate entrance
    gsap.from(modal.querySelector('.glass-card'), {
        y: 50, scale: 0.95, opacity: 0, duration: 0.5, ease: "power4.out"
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const isArchive = window.location.pathname.includes('projects.html') || document.querySelector('#archive-header');
    if (isArchive) {
        generateProjectCards(projectsData);
    } else {
        generateProjectCards(projectsData.slice(0, 3));
    }
});