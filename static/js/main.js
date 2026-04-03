// Urban Energy Main JS

document.addEventListener('DOMContentLoaded', function() {
    // Dropdown hover effect for desktop
    const dropdowns = document.querySelectorAll('.nav-item.dropdown');
    
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseenter', function() {
            if (window.innerWidth > 991) {
                const menu = this.querySelector('.dropdown-menu');
                menu.classList.add('show');
            }
        });
        
        dropdown.addEventListener('mouseleave', function() {
            if (window.innerWidth > 991) {
                const menu = this.querySelector('.dropdown-menu');
                menu.classList.remove('show');
            }
        });
    });

    // Contact Form Validation/Submission Mock
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation check
            if (!this.checkValidity()) {
                e.stopPropagation();
                this.classList.add('was-validated');
                return;
            }

            // Mock success message
            const btn = this.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            btn.disabled = true;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

            setTimeout(() => {
                btn.classList.replace('btn-primary', 'btn-success');
                btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
                this.reset();
                this.classList.remove('was-validated');
                
                setTimeout(() => {
                    btn.disabled = false;
                    btn.innerHTML = originalText;
                    btn.classList.replace('btn-success', 'btn-primary');
                }, 3000);
            }, 1500);
        });
    }
});