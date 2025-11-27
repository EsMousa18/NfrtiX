// nfrti X Interactive Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
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
        { id: 'hero-mascot', speechId: 'hero-speech' },
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
                
                // Toggle current speech bubble
                speechElement.classList.toggle('hidden');
                
                // Auto-hide after 4 seconds
                if (!speechElement.classList.contains('hidden')) {
                    clearTimeout(speechTimeout);
                    speechTimeout = setTimeout(() => {
                        speechElement.classList.add('hidden');
                    }, 4000);
                }
            });
            
            // Hide speech bubble when clicking elsewhere
            document.addEventListener('click', function(e) {
                if (!mascotElement.contains(e.target) && !speechElement.contains(e.target)) {
                    speechElement.classList.add('hidden');
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
    
    // Animation functions for ROI calculator
    function startCalculationAnimation() {
        const bubble = document.getElementById("roi-calculation-bubble");
        const dots = document.getElementById("calculating-dots");
        const numbers = document.getElementById("calculating-numbers");
        
        bubble.style.display = "block";
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
        
        numbers.style.display = "none";
        dots.style.display = "inline";
        
        // After a brief delay, hide the bubble
        setTimeout(() => {
            bubble.style.display = "none";
        }, 800);
    }
    
    if (calculateBtn) {
        calculateBtn.addEventListener('click', function() {
            const pumpCount = parseInt(document.getElementById('pump-count').value) || 0;
            const downtimeHours = parseInt(document.getElementById('downtime-hours').value) || 0;
            const hourlyCost = parseInt(document.getElementById('hourly-cost').value) || 0;
            
            if (pumpCount > 0 && downtimeHours > 0 && hourlyCost > 0) {
                // Start animation
                startCalculationAnimation();
                
                // Simulate calculation delay
                setTimeout(() => {
                    // Calculate current annual loss
                    const annualLoss = pumpCount * downtimeHours * hourlyCost;
                    
                    // Assume 70% reduction in downtime with nfrti X
                    const annualSavings = annualLoss * 0.7;
                    
                    // Calculate nfrti X cost (rough estimate: $300 installation + $100/year per sensor, 3 sensors per pump)
                    const nfrtiCost = pumpCount * (300 + (100 * 3));
                    const roiMultiple = Math.round((annualSavings / nfrtiCost) * 10) / 10;
                    
                    // Display results
                    document.getElementById('annual-loss').textContent = '$' + annualLoss.toLocaleString();
                    document.getElementById('annual-savings').textContent = '$' + annualSavings.toLocaleString();
                    document.getElementById('roi-multiple').textContent = roiMultiple + 'x';
                    
                    document.getElementById('roi-results').classList.remove('hidden');
                    
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

// Chart Initialization
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

