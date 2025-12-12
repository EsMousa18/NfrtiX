// ============================================
// nfrti X - Combined JavaScript
// All interactive functionality in one file
// Last Updated: 2025-01-08 16:30 UTC
// ============================================

// ========================================
// CHALLENGE SLIDER
// ========================================
(function() {
    'use strict';
    
    document.addEventListener('DOMContentLoaded', function() {
        initChallengeSlider();
    });
    
    function initChallengeSlider() {
        const sliderContainer = document.querySelector('.as-slider');
        if (!sliderContainer) return;
        
        // Ensure slider is visible
        sliderContainer.style.visibility = 'visible';
        sliderContainer.style.display = 'flex';
        
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
        
        // Force repaint for iOS
        sliderContainer.offsetHeight;
        
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
            // Add a small delay for iOS rendering
            setTimeout(function() {
                updateHeight(0);
                sliderContainer.classList.add('loaded');
            }, 100);
        } else {
            images.forEach(img => {
                if (img.complete) {
                    checkAllImagesLoaded();
                } else {
                    img.addEventListener('load', checkAllImagesLoaded);
                    img.addEventListener('error', checkAllImagesLoaded);
                }
            });
            
            // Fallback timeout in case images don't load
            setTimeout(function() {
                if (!sliderContainer.classList.contains('loaded')) {
                    updateHeight(0);
                    sliderContainer.classList.add('loaded');
                }
            }, 3000);
        }
        
        // Function to update container height
        function updateHeight(index) {
            // Force layout recalculation for iOS
            slideContents[index].style.display = 'block';
            slideContents[index].style.position = 'static';
            
            const height = slideContents[index].offsetHeight;
            
            // Reset positioning
            slideContents[index].style.display = '';
            slideContents[index].style.position = '';
            
            textContainer.style.setProperty('--h', height + 'px');
            textContainer.style.height = height + 'px';
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
            function handleDotClick() {
                goToSlide(index);
            }
            
            dot.addEventListener('click', handleDotClick);
            dot.addEventListener('touchend', function(e) {
                e.preventDefault();
                handleDotClick();
            });
        });
        
        // Arrow button handlers
        function handleLeftClick() {
            const nextSlide = currentSlide === 0 ? slideNumber - 1 : currentSlide - 1;
            goToSlide(nextSlide);
        }
        
        function handleRightClick() {
            const nextSlide = currentSlide === slideNumber - 1 ? 0 : currentSlide + 1;
            goToSlide(nextSlide);
        }
        
        leftButton.addEventListener('click', handleLeftClick);
        leftButton.addEventListener('touchend', function(e) {
            e.preventDefault();
            handleLeftClick();
        });
        
        rightButton.addEventListener('click', handleRightClick);
        rightButton.addEventListener('touchend', function(e) {
            e.preventDefault();
            handleRightClick();
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

// ========================================
// MAIN INTERACTIVE FEATURES
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    
    // Header Fade on Scroll - Show only on Home section
    const header = document.querySelector('header');
    const homeSection = document.getElementById('home');
    
    if (header && homeSection) {
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const homeBottom = homeSection.offsetTop + homeSection.offsetHeight;
            const headerHeight = header.offsetHeight;
            
            // Show header only when in Home section
            if (scrollTop < homeBottom - headerHeight) {
                // In Home section - show header
                header.classList.remove('header-hidden');
            } else {
                // Past Home section - hide header
                header.classList.add('header-hidden');
            }
        });
    }
    
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Toggle menu visibility
            const isHidden = mobileMenu.classList.contains('hidden');
            
            if (isHidden) {
                // Open menu
                mobileMenu.classList.remove('hidden');
                if (menuIcon) {
                    menuIcon.classList.remove('fa-bars');
                    menuIcon.classList.add('fa-times');
                }
            } else {
                // Close menu
                mobileMenu.classList.add('hidden');
                if (menuIcon) {
                    menuIcon.classList.remove('fa-times');
                    menuIcon.classList.add('fa-bars');
                }
            }
        });
        
        // Close mobile menu when clicking on links
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                if (menuIcon) {
                    menuIcon.classList.remove('fa-times');
                    menuIcon.classList.add('fa-bars');
                }
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    if (menuIcon) {
                        menuIcon.classList.remove('fa-times');
                        menuIcon.classList.add('fa-bars');
                    }
                }
            }
        });
    }

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mascot Interactions
    const mascots = [
        { id: 'solution-mascot', speechId: 'solution-speech' },
        { id: 'header-mascot', speechId: 'header-speech' }
    ];

    mascots.forEach(mascot => {
        const mascotElement = document.getElementById(mascot.id);
        const speechElement = document.getElementById(mascot.speechId);
        
        if (mascotElement && speechElement) {
            let speechTimeout;
            
            mascotElement.addEventListener('click', function() {
                // Hide all other speech bubbles
                mascots.forEach(m => {
                    if (m.speechId !== mascot.speechId) {
                        const otherSpeech = document.getElementById(m.speechId);
                        if (otherSpeech) {
                            otherSpeech.classList.add('hidden');
                        }
                    }
                });
                
                // Special behavior for header mascot - scroll to contact section
                if (mascot.id === 'header-mascot') {
                    // 1 — Show the bubble
                    speechElement.classList.remove('hidden');
                    
                    // 2 — Wait 2.5 seconds then scroll to contact section
                    clearTimeout(speechTimeout);
                    speechTimeout = setTimeout(() => {
                        const contactSection = document.getElementById('contact');
                        if (contactSection) {
                            contactSection.scrollIntoView({
                                behavior: 'smooth'
                            });
                        }
                        // Hide bubble after scrolling
                        setTimeout(() => {
                            speechElement.classList.add('hidden');
                        }, 1000);
                    }, 2500); // 2.5 seconds delay before scroll
                } else {
                    // Default behavior for other mascots
                    // Toggle current speech bubble
                    speechElement.classList.toggle('hidden');
                    
                    // Auto-hide after 4 seconds
                    if (!speechElement.classList.contains('hidden')) {
                        clearTimeout(speechTimeout);
                        speechTimeout = setTimeout(() => {
                            speechElement.classList.add('hidden');
                        }, 4000);
                    }
                }
            });
            
            // Hide speech bubble when clicking elsewhere (except for header mascot during scroll)
            document.addEventListener('click', function(e) {
                if (!mascotElement.contains(e.target) && !speechElement.contains(e.target)) {
                    if (mascot.id !== 'header-mascot') {
                        speechElement.classList.add('hidden');
                    }
                }
            });
        }
    });

    // ROI Calculator
    const calculateBtn = document.getElementById('calculate-roi');
    const industrySelect = document.getElementById('industry');
    const hourlyCostInput = document.getElementById('hourly-cost');
    
    // Industry cost mapping
    const industryCosts = {
        fmcg: 36000,
        paper: 36000,
        buildings: 540000,
        metals: 600000,
        chemicals: 700000,
        pharma: 1100000,
        automotive: 1600000,
        custom: null
    };
    
    // Update hourly cost when industry changes
    if (industrySelect && hourlyCostInput) {
        industrySelect.addEventListener('change', function() {
            const selectedIndustry = this.value;
            if (industryCosts[selectedIndustry] !== null) {
                hourlyCostInput.value = industryCosts[selectedIndustry];
            }
        });
    }
    
    // Number formatting function for k/M notation
    function formatNumber(num) {
        if (num >= 1000000) {
            return '$' + (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
        } else if (num >= 1000) {
            return '$' + (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
        } else {
            return '$' + num.toLocaleString();
        }
    }
    
    // Animation functions for ROI calculator
    function startCalculationAnimation() {
        const bubble = document.getElementById("roi-calculation-bubble");
        const dots = document.getElementById("calculating-dots");
        const numbers = document.getElementById("calculating-numbers");
        const mascotImg = document.getElementById("roi-mascot-img");
        
        // Change mascot image to calculating image
        if (mascotImg) {
            mascotImg.src = "https://i.ibb.co/7xTVN5wj/Picsart-25-12-08-16-35-01-689.png";
        }
        
        bubble.style.display = "block";
        bubble.classList.add("calculating");
        dots.style.display = "none";
        numbers.style.display = "inline";

        window.calcInterval = setInterval(() => {
            numbers.textContent = Math.floor(Math.random() * 9999);
        }, 80); // speed of changing numbers
    }

    function stopCalculationAnimation() {
        clearInterval(window.calcInterval);

        const bubble = document.getElementById("roi-calculation-bubble");
        const dots = document.getElementById("calculating-dots");
        const numbers = document.getElementById("calculating-numbers");
        const mascotImg = document.getElementById("roi-mascot-img");
        
        numbers.style.display = "none";
        dots.style.display = "inline";
        
        // After a brief delay, hide the bubble and restore original mascot image
        setTimeout(() => {
            bubble.style.display = "none";
            bubble.classList.remove("calculating");
            
            // Restore original mascot image
            if (mascotImg) {
                mascotImg.src = "https://i.ibb.co/7q92zDb/Picsart-25-12-08-16-01-53-893.png";
            }
        }, 800);
    }
    
    if (calculateBtn) {
        calculateBtn.addEventListener('click', function() {
            const pumpCount = parseInt(document.getElementById('pump-count').value) || 0;
            const downtimeHours = parseInt(document.getElementById('downtime-hours').value) || 0;
            const hourlyCost = parseInt(document.getElementById('hourly-cost').value) || 0;
            
            if (pumpCount > 0 && downtimeHours > 0 && hourlyCost > 0) {
                // Show results box immediately to adjust layout
                document.getElementById('roi-results').classList.remove('hidden');
                
                // Start animation
                startCalculationAnimation();
                
                // Simulate calculation delay
                setTimeout(() => {
                    // Calculate current annual loss
                    const annualLoss = pumpCount * downtimeHours * hourlyCost;
                    
                    // Assume 70% reduction in downtime with nfrti X
                    const annualSavings = annualLoss * 0.7;
                    
                    // Display results with k/M formatting
                    document.getElementById('annual-loss').textContent = formatNumber(annualLoss);
                    document.getElementById('annual-savings').textContent = formatNumber(annualSavings);
                    
                    // Stop animation
                    stopCalculationAnimation();
                    
                    // Scroll to results
                    document.getElementById('roi-results').scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'nearest' 
                    });
                }, 1500); // 1.5 second calculation animation
            } else {
                alert('Please fill in all fields with valid values.');
            }
        });
    }

    // Contact Form Handling with Google Apps Script
    const myForm = document.getElementById('myForm');
    if (myForm) {
        myForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const requiredFields = myForm.querySelectorAll('input[required], select[required], textarea[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('border-red-500');
                } else {
                    field.classList.remove('border-red-500');
                }
            });
            
            if (isValid) {
                // Show loading state
                const submitBtn = myForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
                submitBtn.disabled = true;
                
                // Collect form data
                const formData = new FormData(myForm);
                
                // Submit to Google Apps Script using URLSearchParams
                fetch(myForm.action, {
                    method: 'POST',
                    body: formData,
                    mode: 'no-cors'
                })
                .then(response => {
                    // In no-cors mode, we can't read the response, so we assume success
                    return 'success';
                })
                .then(data => {
                    // Show success message
                    document.getElementById('form-success').classList.remove('hidden');
                    document.getElementById('form-error').classList.add('hidden');
                    
                    // Reset form
                    myForm.reset();
                    
                    // Scroll to success message
                    document.getElementById('form-success').scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'nearest' 
                    });
                    
                    // Hide success message after 5 seconds
                    setTimeout(() => {
                        document.getElementById('form-success').classList.add('hidden');
                    }, 5000);
                })
                .catch(error => {
                    // Show error message
                    document.getElementById('form-error').classList.remove('hidden');
                    document.getElementById('form-success').classList.add('hidden');
                    
                    // Scroll to error message
                    document.getElementById('form-error').scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'nearest' 
                    });
                })
                .finally(() => {
                    // Reset button
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                });
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }

    // Initialize Charts
    initializeCharts();
});

// ========================================
// CHART INITIALIZATION
// ========================================
function initializeCharts() {
    // Downtime Cost Chart
    const downtimeCtx = document.getElementById('downtimeChart');
    if (downtimeCtx) {
        new Chart(downtimeCtx, {
            type: 'bar',
            data: {
                labels: ['FMCG', 'Paper', 'Buildings', 'Metals', 'Chemicals', 'Pharma', 'Automotive'],
                datasets: [{
                    label: 'Downtime Cost per Hour ($)',
                    data: [36000, 36000, 540000, 600000, 700000, 1100000, 1600000],
                    backgroundColor: [
                        '#9CA3AF',
                        '#9CA3AF',
                        '#9CA3AF',
                        '#9CA3AF',
                        '#9CA3AF',
                        '#9CA3AF',
                        '#9CA3AF'
                    ],
                    borderColor: 'transparent',
                    borderWidth: 0,
                    borderRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: '#017E3A',
                        titleColor: 'white',
                        bodyColor: 'white',
                        callbacks: {
                            label: function(context) {
                                return '$' + context.parsed.y.toLocaleString() + ' per hour';
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return '$' + (value / 1000) + 'K';
                            }
                        },
                        grid: {
                            color: '#f3f4f6'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                },
                animation: {
                    duration: 2000,
                    easing: 'easeOutQuart'
                }
            }
        });
    }
}
