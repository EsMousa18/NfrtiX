(function() {
    'use strict';
    
    document.addEventListener('DOMContentLoaded', function() {
        initChallengeSlider();
    });
    
    function initChallengeSlider() {
        const sliderContainer = document.querySelector('.as-slider');
        if (!sliderContainer) return;
        
        let currentSlide = 0;
        let previousSlide = 0;
        const slideNumber = 2; // We have 2 slides
        let forward = true;
        let isAnimating = false;
        
        const textContainer = sliderContainer.querySelector('.as-changing-widget');
        const barContainer = sliderContainer.querySelector('.as-bar');
        const leftButton = sliderContainer.querySelector('.as-slider-left');
        const rightButton = sliderContainer.querySelector('.as-slider-right');
        const slideContents = textContainer.querySelectorAll('.slide-content');
        
        // Create dots for navigation
        let barHTML = '';
        for (let i = 0; i < slideNumber; i++) {
            barHTML += `<span class="dot" data-slide="${i}"><span class="dot-number">${i + 1}</span></span>`;
        }
        barContainer.innerHTML = barHTML;
        
        const dots = barContainer.querySelectorAll('.dot');
        
        // Set initial slide
        slideContents[0].classList.add('currentUp');
        dots[0].classList.add('active');
        
        // Wait for images to load before calculating height
        const images = slideContents[0].querySelectorAll('img');
        let imagesLoaded = 0;
        
        function checkAllImagesLoaded() {
            imagesLoaded++;
            if (imagesLoaded === images.length || images.length === 0) {
                updateHeight(0);
                sliderContainer.classList.add('loaded');
            }
        }
        
        if (images.length === 0) {
            updateHeight(0);
            sliderContainer.classList.add('loaded');
        } else {
            images.forEach(img => {
                if (img.complete) {
                    checkAllImagesLoaded();
                } else {
                    img.addEventListener('load', checkAllImagesLoaded);
                    img.addEventListener('error', checkAllImagesLoaded);
                }
            });
        }
        
        // Function to update container height
        function updateHeight(index) {
            const height = slideContents[index].offsetHeight;
            textContainer.style.setProperty('--h', height + 'px');
        }
        
        // Function to go to specific slide
        function goToSlide(targetSlide) {
            if (isAnimating || targetSlide === currentSlide) return;
            
            isAnimating = true;
            previousSlide = currentSlide;
            currentSlide = targetSlide;
            
            // Determine direction
            if (previousSlide < currentSlide) {
                forward = true;
            } else if (previousSlide > currentSlide) {
                forward = false;
            }
            
            // Handle wrap around
            if (previousSlide === slideNumber - 1 && currentSlide === 0) {
                forward = true;
            }
            if (previousSlide === 0 && currentSlide === slideNumber - 1) {
                forward = false;
            }
            
            // Update height
            updateHeight(currentSlide);
            
            // Update content animations
            slideContents.forEach((content, index) => {
                content.classList.remove('prev', 'next', 'currentUp', 'currentDown');
                
                if (index === previousSlide) {
                    content.classList.add(forward ? 'prev' : 'next');
                } else if (index === currentSlide) {
                    content.classList.add(forward ? 'currentUp' : 'currentDown');
                }
            });
            
            // Update active dot
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSlide);
            });
            
            // Reset animation lock
            setTimeout(() => {
                isAnimating = false;
            }, 800);
        }
        
        // Dot click handlers
        dots.forEach((dot, index) => {
            dot.addEventListener('click', function() {
                goToSlide(index);
            });
        });
        
        // Arrow button handlers
        leftButton.addEventListener('click', function() {
            const nextSlide = currentSlide === 0 ? slideNumber - 1 : currentSlide - 1;
            goToSlide(nextSlide);
        });
        
        rightButton.addEventListener('click', function() {
            const nextSlide = currentSlide === slideNumber - 1 ? 0 : currentSlide + 1;
            goToSlide(nextSlide);
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (!sliderContainer.classList.contains('loaded')) return;
            
            if (e.key === 'ArrowLeft') {
                leftButton.click();
            } else if (e.key === 'ArrowRight') {
                rightButton.click();
            }
        });
        
        // Handle window resize
        let resizeTimer;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {
                updateHeight(currentSlide);
            }, 250);
        });
        
        // Optional: Auto-advance (uncomment to enable)
        /*
        setInterval(function() {
            if (!isAnimating) {
                rightButton.click();
            }
        }, 8000);
        */
    }
})();
