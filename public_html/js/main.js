$(document).ready(function () {

//HEADRER
//Smooth scroll
    $("header").on('click', '.nav-link', function () {
        let target = $(this).attr('data-smooth');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1200);
    });


//CONTACT SECTION 

//If element exist -> action 
    if ($('.contact-form').length > 0) {
        $(function () {
            $(".contact-form").validate({
                highlight: function (element) {
                    $(element).addClass("is-invalid").removeClass("is-valid");
                },
                unhighlight: function (element) {
                    $(element).removeClass('is-invalid').addClass('is-valid');
                },
                rules: {
                    name: {
                        required: true
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    message: {
                        required: true
                    }

                },
                messages: {
                    name: {
                        required: "The Name is required field."
                    },
                    email: {
                        required: "The Email is required field.",
                        mail: "Please insert a valid email adress."
                    },
                    message: {
                        required: "The Message is required field."
                    }

                },
                errorElement: 'p',
                errorPlacement: function (error, element) {
                    error.appendTo($(element).closest('.form-group').find('.invalid-feedback'));
                }

            });
        });
    }


//ANIMATION 
    function animation() {
        var windowHeight = $(window).height();
        var scroll = $(window).scrollTop();
        $('.animation').each(function () {
            let position = $(this).offset().top;
            let animation = $(this).attr('data-animation');
            let delay = $(this).attr('data-delay');
            if (position < scroll + windowHeight - 100) {
                $(this).css('animation-delay', delay);
                $(this).addClass(animation);
            }
        });
    }
    animation();
    $(window).scroll(function () {
        animation();
    });
});