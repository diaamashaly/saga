$(document).ready(function() {
    // Dropdown toggle on hover
    $('.dropdown').hover(function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(300);
    }, function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(300);
    });
    
    // Smooth scrolling for anchor links
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 800, 'linear');
    });

    //Swiper
    var swiper = new Swiper(".mySwiper", {
slidesPerView: 1,
spaceBetween: 0,
loop: true,
autoplay: {
delay: 5000,
disableOnInteraction: false,
},
pagination: {
el: ".swiper-pagination",
clickable: true,
},
navigation: {
nextEl: ".swiper-button-next",
prevEl: ".swiper-button-prev",
},
effect: "fade",
fadeEffect: {
crossFade: true
}
});

// Add hover effect to product cards
$('.product-card').hover(
function() {
    $(this).addClass('shadow-sm');
    $(this).find('button').removeClass('btn-outline-dark').addClass('btn-dark');
},
function() {
    $(this).removeClass('shadow-sm');
    $(this).find('button').removeClass('btn-dark').addClass('btn-outline-dark');
}
);

// Add to cart button functionality
$('.product-card button').click(function(e) {
e.preventDefault();
// Show cart animation or feedback
$(this).html('<i class="fas fa-check"></i> Added');

// Reset button after 2 seconds
let btn = $(this);
setTimeout(function() {
    btn.html('Add to cart');
}, 2000);
});

// Add hover effect to project cards
$('.project-card').hover(
function() {
    $(this).find('.view-project-link').css('text-decoration', 'underline');
},
function() {
    $(this).find('.view-project-link').css('text-decoration', 'none');
}
);


//timeline
$(window).scroll(function() {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        
        $(".phase").each(function() {
            var objectBottom = $(this).offset().top + $(this).outerHeight();
            
            if (objectBottom < windowBottom) {
                if ($(this).css("opacity") == 0) {
                    $(this).fadeTo(500, 1);
                }
            }
        });
    }).scroll();
    
    // Hover effects for phases
    $(".phase").hover(function() {
        $(this).addClass("phase-active");
    }, function() {
        $(this).removeClass("phase-active");
    });
    
    // Form submission (prevent default)
    $(".contact-form").submit(function(e) {
        e.preventDefault();
        alert("Form submitted! This is a demo, so no actual submission occurs.");
        $(this).find("input, textarea").val("");
    });

    // Filter functionality
    $('.filter-btn').click(function() {
        // Update active button
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');
        
        // Get filter value
        const filterValue = $(this).data('filter');
        
        // Filter blog items
        if (filterValue === 'all') {
            $('.blog-item').show();
        } else {
            $('.blog-item').hide();
            $('.blog-item[data-category="' + filterValue + '"]').show();
        }
        
        // Animate the transition
        $('.blog-item').css('opacity', 0);
        setTimeout(function() {
            $('.blog-item:visible').each(function(index) {
                const $item = $(this);
                setTimeout(function() {
                    $item.animate({opacity: 1}, 300);
                }, index * 100);
            });
        }, 300);
    });
    
    // Load more functionality
    $('.load-more-btn').click(function() {
        // Clone the first 2 items and append them to the container with new categories
        const $newItems = $('.blog-item:lt(2)').clone();
        
        // Update categories to ensure variety
        $newItems.each(function(index) {
            const categories = ['three', 'four'];
            $(this).attr('data-category', categories[index]);
            $(this).find('.blog-category').text('Category ' + categories[index]);
            
            // Ensure they match the current filter if any
            const currentFilter = $('.filter-btn.active').data('filter');
            if (currentFilter !== 'all' && currentFilter !== categories[index]) {
                $(this).hide();
            }
        });
        
        // Append to container
        $('#blog-container').append($newItems);
        
        // Fade in new items
        $newItems.css('opacity', 0);
        $newItems.each(function(index) {
            const $item = $(this);
            setTimeout(function() {
                $item.animate({opacity: 1}, 300);
            }, index * 100);
        });
    });

$(".sign-up-form button").click(function(e) {
        e.preventDefault();
        const email = $(".sign-up-form input").val();
        if (email) {
            alert("Thank you for signing up with: " + email);
            $(".sign-up-form input").val("");
        } else {
            alert("Please enter an email address");
        }
    });

    // Disable right-click context menu
document.addEventListener('contextmenu', function(e) {
e.preventDefault();
alert('Right-click is disabled on this site.');
return false;
});

// Disable keyboard shortcuts for developer tools
document.addEventListener('keydown', function(e) {
// Prevent F12
if (e.key === 'F12' || e.keyCode === 123) {
e.preventDefault();
return false;
}

// Prevent Ctrl+Shift+I (Chrome, Firefox, Safari)
if ((e.ctrlKey && e.shiftKey && e.key === 'I') || 
(e.ctrlKey && e.shiftKey && e.keyCode === 73)) {
e.preventDefault();
return false;
}

// Prevent Ctrl+Shift+J (Chrome)
if ((e.ctrlKey && e.shiftKey && e.key === 'J') || 
(e.ctrlKey && e.shiftKey && e.keyCode === 74)) {
e.preventDefault();
return false;
}

// Prevent Ctrl+Shift+C (Chrome)
if ((e.ctrlKey && e.shiftKey && e.key === 'C') || 
(e.ctrlKey && e.shiftKey && e.keyCode === 67)) {
e.preventDefault();
return false;
}

// Prevent Ctrl+U (View Source)
if (e.ctrlKey && (e.key === 'u' || e.keyCode === 85)) {
e.preventDefault();
return false;
}
});

// Detect when DevTools is opened
let devToolsOpen = false;

// Method 1: Check window size (DevTools opening changes window dimensions)
const checkWindowSize = () => {
if (window.outerWidth - window.innerWidth > 160 || 
window.outerHeight - window.innerHeight > 160) {
if (!devToolsOpen) {
    devToolsOpen = true;
    alert('Developer tools detected! Please close them.');
}
} else {
devToolsOpen = false;
}
};

// Method 2: Console clear and warning message
const consoleWarning = () => {
console.clear();
console.log('%cWarning!', 'color: red; font-size: 30px; font-weight: bold;');
console.log('%cThis is a protected website. Viewing or modifying the source code is prohibited.', 'font-size: 16px;');
};

// Run checks
window.addEventListener('resize', checkWindowSize);
setInterval(consoleWarning, 3000);
setInterval(checkWindowSize, 1000);

// Additional layer - debugging detector
(() => {
let threshold = 160;
let widthThreshold = window.outerWidth - window.innerWidth > threshold;
let heightThreshold = window.outerHeight - window.innerHeight > threshold;

function checkDevTools() {
if(widthThreshold || heightThreshold) {
    document.body.innerHTML = 'Developer tools detected. Please close them and refresh the page.';
}
}

window.addEventListener('resize', function() {
widthThreshold = window.outerWidth - window.innerWidth > threshold;
heightThreshold = window.outerHeight - window.innerHeight > threshold;
checkDevTools();
});

setInterval(checkDevTools, 1000);
})();

});