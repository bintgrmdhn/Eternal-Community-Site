// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
    }
});

// Gallery hover effect
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Animate on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards
document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});

// Story Scroll Animation
const storyScrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('animate');
            }, index * 150);
        }
    });
}, { 
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Observe story items
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.story-item').forEach(item => {
        storyScrollObserver.observe(item);
    });
});

// Smooth scroll to top on logo click
document.querySelector('.nav-logo').addEventListener('click', (e) => {
    if (window.location.pathname === '/story') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

// Members Animation
const membersObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('animate');
            }, index * 200);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.member-card').forEach(card => {
    membersObserver.observe(card);
});

// Leaderboard Animations
const leaderboardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('animate');
            }, index * 50);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.leaderboard-item').forEach(item => {
    leaderboardObserver.observe(item);
});

// Tab Functionality
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        // Add tab logic here
    });
});

// Gallery Masonry + Filters + Lightbox
class Gallery {
    constructor() {
        this.initMasonry();
        this.initFilters();
        this.initLightbox();
        this.observeAnimations();
    }
    
    initMasonry() {
        // Simple masonry with CSS columns
        const grid = document.getElementById('masonryGrid');
        if (grid) {
            // Force reflow for masonry
            grid.style.opacity = '0';
            setTimeout(() => grid.style.opacity = '1', 100);
        }
    }
    
    initFilters() {
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const filter = btn.dataset.filter;
                this.filterGallery(filter);
            });
        });
    }
    
    filterGallery(filter) {
        document.querySelectorAll('.gallery-item').forEach(item => {
            const category = item.dataset.category;
            if (filter === 'all' || category === filter) {
                item.style.display = 'block';
                item.style.opacity = '0';
                setTimeout(() => item.classList.add('animate'), 100);
            } else {
                item.style.display = 'none';
                item.classList.remove('animate');
            }
        });
    }
    
    initLightbox() {
        const lightbox = document.getElementById('lightbox');
        const img = document.getElementById('lightbox-img');
        const title = document.getElementById('lightbox-title');
        const date = document.getElementById('lightbox-date');
        
        // Open lightbox
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('lightbox-trigger')) {
                const item = e.target.closest('.gallery-item');
                const fullImg = item.querySelector('img').dataset.full;
                const imgTitle = item.querySelector('img').dataset.title;
                const imgDate = item.querySelector('img').dataset.date;
                
                img.src = fullImg;
                title.textContent = imgTitle;
                date.textContent = imgDate;
                lightbox.classList.add('active');
            }
        });
        
        // Close lightbox
        lightbox.querySelector('.lightbox-close').addEventListener('click', () => {
            lightbox.classList.remove('active');
        });
        
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) lightbox.classList.remove('active');
        });
    }
    
    observeAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, { threshold: 0.1 });
        
        document.querySelectorAll('.gallery-item').forEach(item => {
            observer.observe(item);
        });
    }
}

// Initialize Gallery
document.addEventListener('DOMContentLoaded', () => {
    new Gallery();
});

class SmartNavbar {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.navMenu = document.getElementById('navMenu');
        this.hamburger = document.getElementById('hamburger');
        this.lastScrollY = 0;
        this.scrollDirection = 'up';
        this.isShrunk = false;
        
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.updateNavbar();
    }
    
    bindEvents() {
        window.addEventListener('scroll', () => this.handleScroll());
        this.hamburger.addEventListener('click', () => this.toggleMobileMenu());
        
        // Close mobile menu on link click
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => this.closeMobileMenu());
        });
    }
    
    handleScroll() {
        const currentScrollY = window.scrollY;
        const delta = currentScrollY - this.lastScrollY;
        
        // Scroll direction
        if (Math.abs(delta) > 10) {
            this.scrollDirection = delta > 0 ? 'down' : 'up';
        }
        
        this.updateNavbar(currentScrollY);
        this.lastScrollY = currentScrollY;
    }
    
    updateNavbar(scrollY = window.scrollY) {
        const shouldHide = this.scrollDirection === 'down' && scrollY > 100;
        const isScrolled = scrollY > 50;
        const shouldShrink = scrollY > 200;
        
        // Hide/Show logic
        if (shouldHide) {
            this.navbar.classList.add('hidden');
            this.navbar.classList.remove('visible');
        } else {
            this.navbar.classList.add('visible');
            this.navbar.classList.remove('hidden');
        }
        
        // Scrolled styling
        if (isScrolled) {
            this.navbar.classList.add('scrolled');
        } else {
            this.navbar.classList.remove('scrolled');
        }
        
        // Shrink logo
        if (shouldShrink && !this.isShrunk) {
            this.navbar.classList.add('shrink');
            this.isShrunk = true;
        } else if (!shouldShrink && this.isShrunk) {
            this.navbar.classList.remove('shrink');
            this.isShrunk = false;
        }
    }
    
    toggleMobileMenu() {
        this.hamburger.classList.toggle('active');
        this.navMenu.classList.toggle('active');
    }
    
    closeMobileMenu() {
        this.hamburger.classList.remove('active');
        this.navMenu.classList.remove('active');
    }
}

// Initialize Smart Navbar
document.addEventListener('DOMContentLoaded', () => {
    new SmartNavbar();
});

// Prevent glitchy behavior
let ticking = false;
function requestTick() {
    if (!ticking) {
        requestAnimationFrame(() => {
            navbar.updateNavbar();
            ticking = false;
        });
        ticking = true;
    }
}

window.addEventListener('scroll', requestTick);

// Auto-hide threshold
const SCROLL_THRESHOLD = 100;

// Touch scroll support (mobile)
let touchStartY = 0;
document.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
}, { passive: true });

document.addEventListener('touchmove', (e) => {
    const touchY = e.touches[0].clientY;
    const delta = touchStartY - touchY;
    
    if (delta > 20) scrollDirection = 'down';  // Swipe up
    if (delta < -20) scrollDirection = 'up';   // Swipe down
}, { passive: true });

// ETERNAL Counter + ScrollTrigger
class EternalHome {
    constructor() {
        this.initCounters();
        this.initScrollTriggers();
        this.initParallax();
    }
    
    initCounters() {
        const numbers = document.querySelectorAll('.metric-number, .stat-number[data-target]');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.countUp(entry.target);
                }
            });
        }, { threshold: 0.8 });
        
        numbers.forEach(num => observer.observe(num));
    }
    
    countUp(element) {
        const target = parseInt(element.dataset.target);
        const duration = 2500;
        const step = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                element.textContent = target.toLocaleString();
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current).toLocaleString();
            }
        }, 16);
    }
    
    initScrollTriggers() {
        const triggers = document.querySelectorAll('.feature-item, .stat-card');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0) scale(1)';
                    }, index * 150);
                }
            });
        }, { threshold: 0.2 });
        
        triggers.forEach(trigger => {
            trigger.style.opacity = '0';
            trigger.style.transform = 'translateY(60px) scale(0.95)';
            observer.observe(trigger);
        });
    }
    
    initParallax() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('.hero-bg-infinity');
            if (parallax) {
                parallax.style.transform = `translateY(${scrolled * 0.5}px) rotate(${scrolled * 0.02}deg)`;
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new EternalHome();
    new SmartNavbar();
});

// Features Background Parallax
function featuresParallax() {
    const scrolled = window.pageYOffset;
    const featuresBg = document.querySelector('.features-bg');
    if (featuresBg) {
        featuresBg.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
}

window.addEventListener('scroll', featuresParallax);