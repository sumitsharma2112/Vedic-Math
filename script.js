
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
