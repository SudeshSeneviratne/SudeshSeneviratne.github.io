// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe timeline items
document.querySelectorAll('.timeline-item').forEach(element => {
    element.classList.add('fade-in');
    observer.observe(element);
});

// Observe interest items
document.querySelectorAll('.interest-item').forEach(element => {
    element.classList.add('fade-in');
    observer.observe(element);
});

// Add hover effect to profile image
const profileImage = document.querySelector('.profile-image img');
if (profileImage) {
    profileImage.addEventListener('mouseover', () => {
        profileImage.style.transform = 'scale(1.05) rotate(5deg)';
    });

    profileImage.addEventListener('mouseout', () => {
        profileImage.style.transform = 'scale(1) rotate(0deg)';
    });
}

// Add some dynamic styles for animations
const style = document.createElement('style');
style.textContent = `
    .timeline-item {
        transition: transform 0.3s ease, opacity 0.3s ease;
    }

    .timeline-item.fade-in {
        opacity: 0;
        transform: translateX(-20px);
    }

    .timeline-item.animate-in {
        opacity: 1;
        transform: translateX(0);
    }

    .interest-item.fade-in {
        opacity: 0;
        transform: translateY(20px);
    }

    .interest-item.animate-in {
        opacity: 1;
        transform: translateY(0);
    }

    .profile-image img {
        transition: transform 0.3s ease;
    }
`;
document.head.appendChild(style); 