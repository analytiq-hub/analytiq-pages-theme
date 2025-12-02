/**
 * Testimonials Load More/Less functionality
 * Handles showing and hiding testimonials with a toggle button
 */
document.addEventListener('DOMContentLoaded', function() {
    const loadMoreBtn = document.getElementById('load-more-testimonials');
    const hiddenTestimonials = document.querySelectorAll('.testimonial-hidden');
    let isExpanded = false;
    
    if (!loadMoreBtn) {
        return;
    }
    
    if (hiddenTestimonials.length === 0) {
        // Hide button if there are no hidden testimonials
        loadMoreBtn.parentElement.style.display = 'none';
        return;
    }
    
    loadMoreBtn.addEventListener('click', function() {
        if (!isExpanded) {
            // Show all hidden testimonials
            hiddenTestimonials.forEach(function(testimonial) {
                testimonial.classList.remove('hidden');
            });
            loadMoreBtn.textContent = 'Load Less';
            isExpanded = true;
        } else {
            // Hide testimonials again
            hiddenTestimonials.forEach(function(testimonial) {
                testimonial.classList.add('hidden');
            });
            loadMoreBtn.textContent = 'Load More Testimonials';
            isExpanded = false;
            
            // Scroll to testimonials section after collapsing
            const testimonialsSection = document.querySelector('#testimonials-container')?.closest('section');
            if (testimonialsSection) {
                testimonialsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});

