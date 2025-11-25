// Theme Management
const initTheme = () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
    
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    if (currentTheme === 'dark') {
        document.documentElement.classList.add('dark');
        themeToggleLightIcon.classList.remove('hidden');
    } else {
        document.documentElement.classList.remove('dark');
        themeToggleDarkIcon.classList.remove('hidden');
    }
    
    themeToggleBtn.addEventListener('click', () => {
        // Toggle icons
        themeToggleDarkIcon.classList.toggle('hidden');
        themeToggleLightIcon.classList.toggle('hidden');
        
        // Toggle dark mode
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    });
};

// Navbar scroll effect
const initNavbar = () => {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });
    
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    
    // Close mobile menu when clicking nav links
    const navLinks = mobileMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
};

// Render Projects
const renderProjects = () => {
    const container = document.getElementById('projects-container');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card fade-in';
        projectCard.onclick = () => openProjectModal(project);
        
        projectCard.innerHTML = `
            <div class="project-image">${project.image}</div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.shortDescription}</p>
            <div class="project-tech">
                ${project.tech.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
            </div>
            <button class="project-link-secondary w-full">Learn More →</button>
        `;
        
        container.appendChild(projectCard);
    });
};

// Project Modal
const openProjectModal = (project) => {
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    
    modalTitle.textContent = project.title;
    
    modalContent.innerHTML = `
        <div class="project-image mb-6">${project.image}</div>
        <p class="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">${project.fullDescription}</p>
        
        <div class="mb-6">
            <h4 class="text-lg font-semibold mb-3">Technologies Used</h4>
            <div class="flex flex-wrap gap-2">
                ${project.tech.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
            </div>
        </div>
        
        <div class="mb-6">
            <h4 class="text-lg font-semibold mb-3">Key Features</h4>
            <ul class="space-y-2 text-gray-700 dark:text-gray-300">
                ${project.details.map(detail => `<li class="flex items-start"><span class="mr-2">•</span><span>${detail}</span></li>`).join('')}
            </ul>
        </div>
        
        <div class="flex gap-3">
            <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View on GitHub
            </a>
            ${project.demo ? `<a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="project-link-secondary">Live Demo</a>` : ''}
        </div>
    `;
    
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
};

const closeProjectModal = () => {
    const modal = document.getElementById('project-modal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
};

// Render Timeline
const renderTimeline = () => {
    const container = document.getElementById('timeline-container');
    
    experiences.forEach(exp => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item fade-in';
        
        timelineItem.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-date">${exp.date}</div>
            <h3 class="timeline-title">${exp.title}</h3>
            <p class="timeline-description">${exp.description}</p>
        `;
        
        container.appendChild(timelineItem);
    });
};

// Contact Form Handler
const initContactForm = () => {
    const form = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };
        
        // Simulate form submission (replace with actual backend or Formspree)
        try {
            // Mock successful submission
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            formStatus.textContent = '✓ Message sent successfully! I\'ll get back to you soon.';
            formStatus.className = 'success text-center p-4 rounded-lg';
            formStatus.classList.remove('hidden');
            
            form.reset();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                formStatus.classList.add('hidden');
            }, 5000);
            
        } catch (error) {
            formStatus.textContent = '✗ Failed to send message. Please try again.';
            formStatus.className = 'error text-center p-4 rounded-lg';
            formStatus.classList.remove('hidden');
            
            setTimeout(() => {
                formStatus.classList.add('hidden');
            }, 5000);
        }
    });
};

// Intersection Observer for animations
const initAnimations = () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements with animation class
    document.querySelectorAll('.project-card, .timeline-item').forEach(el => {
        observer.observe(el);
    });
};

// Lazy load images
const lazyLoadImages = () => {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
};

// Active nav link highlighting
const highlightActiveSection = () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '-100px 0px -66%'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('text-primary', 'dark:text-blue-400');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('text-primary', 'dark:text-blue-400');
                    }
                });
            }
        });
    }, observerOptions);
    
    sections.forEach(section => observer.observe(section));
};

// Resume Download Handler
const initResumeDownload = () => {
    const resumeBtn = document.querySelector('a[href="#resume"]');
    if (resumeBtn) {
        resumeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Resume download functionality would be implemented here. Please add your resume PDF to the project and link it.');
            // In production: window.location.href = '/path/to/resume.pdf';
        });
    }
};

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initNavbar();
    renderProjects();
    renderTimeline();
    initContactForm();
    initAnimations();
    lazyLoadImages();
    highlightActiveSection();
    initResumeDownload();
    
    // Modal close handlers
    document.getElementById('close-modal').addEventListener('click', closeProjectModal);
    document.getElementById('project-modal').addEventListener('click', (e) => {
        if (e.target.id === 'project-modal') {
            closeProjectModal();
        }
    });
    
    // Keyboard accessibility for modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeProjectModal();
        }
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '#resume') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});
