document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a');
    const skillLevels = document.querySelectorAll('.skill-level');
    const track = document.querySelector('.certifications-track');
    const backToTopBtn = document.getElementById('backToTopBtn');

    for (const link of links) {
        link.addEventListener('click', smoothScroll);
    }

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetSection.offsetTop - 60,
            behavior: 'smooth'
        });
    }

    window.addEventListener('scroll', () => {
        const triggerBottom = window.innerHeight / 5 * 4;
        
        skillLevels.forEach(skill => {
            const skillTop = skill.getBoundingClientRect().top;
            if(skillTop < triggerBottom) {
                skill.style.width = skill.getAttribute('style').split(':')[1];
            }
        });

        if (window.pageYOffset > 300) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});