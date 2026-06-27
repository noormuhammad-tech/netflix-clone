function toggleFaq(box) {
    const isOpen = box.classList.contains('open');
    document.querySelectorAll('.faqbox.open').forEach(b => b.classList.remove('open'));
    if (!isOpen) {
        box.classList.add('open');
    }
}

const navbar = document.getElementById('navbar');
if (navbar && !navbar.classList.contains('auth-nav')) {
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 60);
    });
}

const getStartedBtn = document.getElementById('getStartedBtn');
const heroEmailInput = document.getElementById('heroEmail');
const emailError = document.getElementById('emailError');

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

if (getStartedBtn && heroEmailInput) {
    getStartedBtn.addEventListener('click', function (e) {
        const val = heroEmailInput.value.trim();
        if (!val || !isValidEmail(val)) {
            e.preventDefault();
            heroEmailInput.classList.add('input-error');
            emailError.classList.add('visible');
        } else {
            heroEmailInput.classList.remove('input-error');
            emailError.classList.remove('visible');
            window.location.href = this.getAttribute('href') + '?email=' + encodeURIComponent(val);
        }
    });

    heroEmailInput.addEventListener('input', () => {
        heroEmailInput.classList.remove('input-error');
        emailError.classList.remove('visible');
    });
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.addEventListener('DOMContentLoaded', () => {
    const emailField = document.getElementById('email');
    if (emailField && window.location.search.includes('email=')) {
        const email = new URLSearchParams(window.location.search).get('email');
        if (email) emailField.value = email;
    }
});
