$(document).ready(function(){
    $('.blog-carousel').slick({
        dots: true,
        infinite: true,           // Loop the carousel continuously
        speed: 3000,               // Transition speed for each slide
        slidesToShow: 3,          // Number of slides to show at once
        slidesToScroll: 1,        // Number of slides to scroll at a time
        autoplay: true,          // Enable auto-sliding
        autoplaySpeed: 0,        // Continuous sliding (0ms means no delay)
        pauseOnHover: false,     // Disable pause on hover (optional)
        arrows: false,           // Hide navigation arrows (optional)
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});


$(document).ready(function() {
    // Smooth scrolling when clicking on navigation links
    $('nav ul li a').click(function(event) {
        event.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top - 50
        }, 1000);
    });

    // Contact form submission simulation
    $('#contact-form').submit(function(event) {
        event.preventDefault();

        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();

        if (name !== "" && email !== "" && message !== "") {
            $('#form-message').text("Thank you, " + name + "! Your message has been sent.");
            $('#contact-form')[0].reset();
        } else {
            $('#form-message').text("Please fill out all fields.");
        }
    });
});
