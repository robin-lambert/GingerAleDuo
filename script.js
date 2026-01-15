// =====================
// Navigation
// =====================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// =====================
// Smooth Scrolling with Active Nav Links
// =====================
const sections = document.querySelectorAll('section[id]');

function activateNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) navLink.classList.add('active');
        }
    });
}

window.addEventListener('scroll', activateNavLink);

// =====================
// Navbar Background on Scroll
// =====================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// =====================
// Intersection Observer for Animations
// =====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
        }
    });
}, observerOptions);

// Observe all sections and cards
const animatedElements = document.querySelectorAll('.feature-item, .repertoire-card, .media-item, .contact-content > div');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add CSS class for visibility
const style = document.createElement('style');
style.textContent = `
    .fade-in-visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// =====================
// Contact Form
// =====================
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            event: document.getElementById('event').value,
            message: document.getElementById('message').value
        };
        
        // Here you would typically send the data to a server
        // For now, we'll just show a success message
        alert('Merci pour votre message ! Nous vous recontacterons très prochainement.');
        
        // Reset form
        contactForm.reset();
    });
}

// =====================
// Parallax Effect on Hero
// =====================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / window.innerHeight);
    }
});

// =====================
// Media Items Click Handler
// =====================
const mediaItems = document.querySelectorAll('.media-item');

mediaItems.forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        if (img) {
            // Create lightbox
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <span class="lightbox-close">&times;</span>
                    <img src="${img.src}" alt="${img.alt}">
                </div>
            `;
            document.body.appendChild(lightbox);
            document.body.style.overflow = 'hidden';
            
            // Close lightbox
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox || e.target.className === 'lightbox-close') {
                    lightbox.remove();
                    document.body.style.overflow = 'auto';
                }
            });
        }
    });
});

// =====================
// Initialize animations on page load
// =====================
window.addEventListener('load', () => {
    activateNavLink();
    
    // Ensure hero video loops properly
    const heroVideo = document.querySelector('.hero-video');
    if (heroVideo) {
        heroVideo.loop = true;
        heroVideo.play().catch(err => console.log('Video autoplay prevented:', err));
    }
});

// =====================
// Language Switcher
// =====================
const translations = {
    fr: {
        // Navigation
        'nav-home': 'Accueil',
        'nav-duo': 'Le Duo',
        'nav-repertoire': 'Répertoire',
        'nav-media': 'Média',
        'nav-contact': 'Contact',
        
        // Hero
        'hero-subtitle': 'Duo Acoustique • Guitare & Voix',
        'hero-description': 'De l\'intimiste au festif, l\'ambiance parfaite pour vos événements',
        'hero-cta': 'Nous contacter',
        
        // About
        'about-title': 'Le Duo',
        'about-lead': 'Une alchimie musicale au service de l\'émotion',
        'about-p1': 'Ginger Ale Duo, c\'est la rencontre entre une guitare expressive et une voix envoûtante. Notre duo acoustique propose une expérience musicale intimiste et élégante, parfaite pour sublimer vos événements privés, cocktails, réceptions et soirées d\'exception.',
        'about-p2': 'Nous puisons dans un répertoire éclectique allant des classiques pop intemporels à la chanson française, en passant par le folk, des touches latino et des reprises rock, réinterprétés avec délicatesse et authenticité.',
        'about-p3': 'Que vous recherchiez une ambiance cosy et raffinée pour un cocktail ou une atmosphère plus énergique pour faire danser vos invités, nous savons adapter notre performance à vos envies et créer l\'énergie parfaite pour votre événement.',
        'feature1-title': 'Guitare Acoustique',
        'feature1-desc': 'Accompagnement raffiné et expressif',
        'feature2-title': 'Voix',
        'feature2-desc': 'Interprétation sensible et versatile',
        'feature3-title': 'Ambiance',
        'feature3-desc': 'Pop, Folk, Chanson Française et Rock',
        
        // Repertoire
        'repertoire-title': 'Répertoire',
        'repertoire-intro': 'Quelques exemples parmi notre répertoire complet, soigneusement sélectionné pour créer l\'atmosphère parfaite',
        'repertoire-note': 'Répertoire adaptable selon vos souhaits et l\'ambiance recherchée',
        'repertoire-cat1': 'Pop Internationale',
        'repertoire-cat2': 'Chanson Française',
        'repertoire-cat3': 'Rock & Alternative',
        'repertoire-cat4': 'Folk & Soul',
        'repertoire-cat5': 'Latino',
        'repertoire-more': 'Et bien d\'autres...',
        
        // Media
        'media-title': 'Média',
        'media-note': 'Extraits de nos performances • Pour plus de contenus, contactez-nous',
        
        // Contact
        'contact-title': 'Contact',
        'contact-subtitle-main': 'Réservez-nous pour votre événement',
        'contact-subtitle': 'Nous sommes disponibles pour :',
        'contact-event1': 'Cocktails et réceptions',
        'contact-event2': 'Mariages',
        'contact-event3': 'Événements d\'entreprise',
        'contact-event4': 'Galeries d\'art et soirées privées',
        'contact-event5': 'Hôtels et restaurants',
        
        // Footer
        'footer': '© 2026 Ginger Ale Duo. Tous droits réservés.'
    },
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-duo': 'The Duo',
        'nav-repertoire': 'Repertoire',
        'nav-media': 'Media',
        'nav-contact': 'Contact',
        
        // Hero
        'hero-subtitle': 'Acoustic Duo • Guitar & Voice',
        'hero-description': 'From intimate to festive, the perfect vibe for your events',
        'hero-cta': 'Contact us',
        
        // About
        'about-title': 'The Duo',
        'about-lead': 'Where music meets emotion',
        'about-p1': 'Ginger Ale Duo brings together an expressive guitar and a captivating voice. Our acoustic duo creates an intimate and elegant musical experience, perfect for enhancing your private events, cocktail parties, receptions, and special occasions.',
        'about-p2': 'We draw from an eclectic repertoire ranging from timeless pop classics to French chanson, folk, Latin touches, and rock covers, all reimagined with delicacy and authenticity.',
        'about-p3': 'Whether you\'re looking for a cozy and refined atmosphere for a cocktail party or a more energetic vibe to get your guests dancing, we adapt our performance to your vision and create the perfect energy for your event.',
        'feature1-title': 'Acoustic Guitar',
        'feature1-desc': 'Refined and expressive accompaniment',
        'feature2-title': 'Voice',
        'feature2-desc': 'Sensitive and versatile performance',
        'feature3-title': 'Atmosphere',
        'feature3-desc': 'Pop, Folk, French Chanson & Rock',
        
        // Repertoire
        'repertoire-title': 'Repertoire',
        'repertoire-intro': 'A selection from our complete repertoire, carefully curated to create the perfect atmosphere',
        'repertoire-note': 'Repertoire tailored to your wishes and desired ambiance',
        'repertoire-cat1': 'International Pop',
        'repertoire-cat2': 'French Chanson',
        'repertoire-cat3': 'Rock & Alternative',
        'repertoire-cat4': 'Folk & Soul',
        'repertoire-cat5': 'Latino',
        'repertoire-more': 'And many more...',
        
        // Media
        'media-title': 'Media',
        'media-note': 'Highlights from our performances • Contact us for more',
        
        // Contact
        'contact-title': 'Contact',
        'contact-subtitle-main': 'Book us for your event',
        'contact-subtitle': 'We are available for:',
        'contact-event1': 'Cocktail parties & receptions',
        'contact-event2': 'Weddings',
        'contact-event3': 'Corporate events',
        'contact-event4': 'Art galleries & private parties',
        'contact-event5': 'Hotels & restaurants',
        
        // Footer
        'footer': '© 2026 Ginger Ale Duo. All rights reserved.'
    }
};

// Get current language
let currentLang = localStorage.getItem('language') || 'fr';

// Initialize language system when DOM is ready
function initLanguageSystem() {
    // Set initial language
    document.documentElement.setAttribute('data-lang', currentLang);
    
    // Language switcher buttons
    const langButtons = document.querySelectorAll('.lang-btn');
    
    // Set active button based on current language
    langButtons.forEach(btn => {
        if (btn.getAttribute('data-lang') === currentLang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Apply saved language if not French
    if (currentLang === 'en') {
        updateLanguage('en');
    }
    
    // Add click event listeners
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            
            // Update active state
            langButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Update language
            updateLanguage(lang);
            
            // Save preference
            localStorage.setItem('language', lang);
            
            // Update html lang attribute
            document.documentElement.setAttribute('lang', lang);
            document.documentElement.setAttribute('data-lang', lang);
        });
    });
}

function updateLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];
    
    // Update navigation
    document.querySelector('a[href="#accueil"]').textContent = t['nav-home'];
    document.querySelector('a[href="#duo"]').textContent = t['nav-duo'];
    document.querySelector('a[href="#repertoire"]').textContent = t['nav-repertoire'];
    document.querySelector('a[href="#media"]').textContent = t['nav-media'];
    document.querySelector('a[href="#contact"]').textContent = t['nav-contact'];
    
    // Update hero
    document.querySelector('.hero-subtitle').textContent = t['hero-subtitle'];
    document.querySelector('.hero-description').textContent = t['hero-description'];
    document.querySelector('.cta-button').textContent = t['hero-cta'];
    
    // Update about section
    document.querySelector('#duo .section-title').textContent = t['about-title'];
    document.querySelector('.lead').textContent = t['about-lead'];
    const aboutPs = document.querySelectorAll('.about-text p:not(.lead):not(.last-paragraph)');
    if (aboutPs[0]) aboutPs[0].textContent = t['about-p1'];
    if (aboutPs[1]) aboutPs[1].textContent = t['about-p2'];
    document.querySelector('.last-paragraph').textContent = t['about-p3'];
    
    const featureItems = document.querySelectorAll('.feature-item');
    if (featureItems[0]) {
        featureItems[0].querySelector('h3').textContent = t['feature1-title'];
        featureItems[0].querySelector('p').textContent = t['feature1-desc'];
    }
    if (featureItems[1]) {
        featureItems[1].querySelector('h3').textContent = t['feature2-title'];
        featureItems[1].querySelector('p').textContent = t['feature2-desc'];
    }
    if (featureItems[2]) {
        featureItems[2].querySelector('h3').textContent = t['feature3-title'];
        featureItems[2].querySelector('p').textContent = t['feature3-desc'];
    }
    
    // Update repertoire section
    document.querySelector('#repertoire .section-title').textContent = t['repertoire-title'];
    document.querySelector('.section-intro').textContent = t['repertoire-intro'];
    document.querySelector('.repertoire-note').textContent = t['repertoire-note'];
    
    const repertoireCards = document.querySelectorAll('.repertoire-card h3');
    if (repertoireCards[0]) repertoireCards[0].textContent = t['repertoire-cat1'];
    if (repertoireCards[1]) repertoireCards[1].textContent = t['repertoire-cat2'];
    if (repertoireCards[2]) repertoireCards[2].textContent = t['repertoire-cat3'];
    if (repertoireCards[3]) repertoireCards[3].textContent = t['repertoire-cat4'];
    if (repertoireCards[4]) repertoireCards[4].textContent = t['repertoire-cat5'];
    if (repertoireCards[5]) repertoireCards[5].textContent = t['repertoire-more'];
    
    // Update media section
    document.querySelector('#media .section-title').textContent = t['media-title'];
    document.querySelector('.media-note').textContent = t['media-note'];
    
    // Update contact section
    document.querySelector('#contact .section-title').textContent = t['contact-title'];
    document.querySelector('.contact-info h3').textContent = t['contact-subtitle-main'];
    document.querySelector('.contact-subtitle').textContent = t['contact-subtitle'];
    
    const contactList = document.querySelectorAll('.contact-list li');
    if (contactList[0]) contactList[0].textContent = t['contact-event1'];
    if (contactList[1]) contactList[1].textContent = t['contact-event2'];
    if (contactList[2]) contactList[2].textContent = t['contact-event3'];
    if (contactList[3]) contactList[3].textContent = t['contact-event4'];
    if (contactList[4]) contactList[4].textContent = t['contact-event5'];
    
    // Update footer
    document.querySelector('.footer p').textContent = t['footer'];
}

// Initialize language system when page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguageSystem);
} else {
    initLanguageSystem();
}
