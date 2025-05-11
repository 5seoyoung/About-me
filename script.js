document.addEventListener('DOMContentLoaded', function() {
    const particlesContainer = document.querySelector('.particles');

    // Create particles
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Random styling
        particle.style.width = Math.random() * 6 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.backgroundColor = Math.random() > 0.5 ? 'rgba(166, 107, 255, 0.3)' : 'rgba(94, 114, 235, 0.3)';
        particle.style.borderRadius = '50%';
        particle.style.position = 'absolute';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.opacity = Math.random() * 0.5 + 0.1;

        // Animation
        particle.style.animation = `float ${Math.random() * 15 + 10}s infinite ease-in-out`;


        particlesContainer.appendChild(particle);
    }

    // Add floating animation
    const style = document.createElement('style');
    style.textContent = `
@keyframes float {
    0%, 100% {
        transform: translate(0, 0) rotate(0deg);
    }
    25% {
        transform: translate(30px, -20px) rotate(45deg);
    }
    50% {
        transform: translate(-40px, 30px) rotate(90deg);
    }
    75% {
        transform: translate(20px, -10px) rotate(135deg);
    }
}
`;
    document.head.appendChild(style);

    // 2. 입자 30개 생성
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // 랜덤 스타일 적용
        const size = Math.random() * 6 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.backgroundColor = Math.random() > 0.5 ? 'rgba(166, 107, 255, 0.3)' : 'rgba(94, 114, 235, 0.3)';
        particle.style.borderRadius = '50%';
        particle.style.position = 'absolute';
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.opacity = Math.random() * 0.5 + 0.1;

        // 🔥 애니메이션 적용 (duration만 랜덤)
        const duration = Math.random() * 15 + 10;
        particle.style.animation = `float ${duration}s infinite ease-in-out`;

        particlesContainer.appendChild(particle);
    }
})


// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-in animation on scroll
const fadeElements = document.querySelectorAll('.fade-in');

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

fadeElements.forEach(element => {
    fadeInObserver.observe(element);
})