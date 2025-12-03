document.addEventListener('DOMContentLoaded', () => {

    const typewriterElement = document.querySelector('.typewriter');
    const textToType = "Mgr. Karolína Gawlowská"; 
    let i = 0;
    
    // Zjištění, jestli je zařízení mobilní. Pro mobily vypneme JS kurzor.
    const isMobile = window.innerWidth <= 768;

    function typeWriter() {
        if (i < textToType.length) {
            typewriterElement.innerHTML += textToType.charAt(i); 
            i++; 
            setTimeout(typeWriter, 70); 
        } else {

            if (!isMobile) {
                typewriterElement.style.borderRight = 'none';
                typewriterElement.style.animation = 'none';
            }
            let delayMs = isMobile ? 2300 : 2500;
            
            setTimeout(() => {
                document.querySelector('.hero-content p').style.opacity = '1';
                document.querySelector('.hero-content .button').style.opacity = '1';
            }, delayMs);
        }
    }
    typeWriter();


    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');

    menuToggle.addEventListener('click', () => {
        mobileNav.classList.toggle('is-open');
        

        const icon = menuToggle.querySelector('i');
        if (mobileNav.classList.contains('is-open')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times'); 
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('is-open');
            menuToggle.querySelector('i').classList.remove('fa-times');
            menuToggle.querySelector('i').classList.add('fa-bars');
        });
    });


    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');

                if (filterValue === 'all' || itemCategory === filterValue) {
                    item.style.display = 'block';
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.9)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300); 
                }
            });
        });
    });


    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");

    window.openModal = function(imgSrc, caption) {
        modal.style.display = "block";
        modalImg.src = imgSrc;
        captionText.innerHTML = caption;
        document.body.style.overflow = 'hidden';
    }

    window.closeModal = function() {
        modal.style.display = "none";
        document.body.style.overflow = 'auto';
    }

    modal.onclick = function(event) {
        if (event.target == modal) {
            closeModal();
        }
    }
});