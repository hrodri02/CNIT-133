$(document).ready(function() {
    const currentPath = window.location.pathname;
    const parts = currentPath.split('/');
    const currentPage = parts[parts.length - 1];
    // Iterate over each <a> tag 
    $("nav").children('a').each(function () {
        // Check if the href attribute matches the current path
        if ($(this).attr('href') === currentPage) {
            $(this).addClass('nav-active'); // Add the 'active' class
        }
    });

    $("#menu-bar").click(function() {
        $(".vertical-nav-bar").toggle();
    });

    $.validator.addMethod("regex", function(value, element, regexp) {
        return this.optional(element) || regexp.test(value);
    }, "Please enter a valid value.");

    $("#myform").validate({
        rules: {
            "phone-number": {
                required: true,
                regex: /\((\d){3,3}\) (\d){3,3}-(\d){4,4}/
            }
        },
        messages: {
            "phone-number": {
                required: "Pleae enter your phone number.",
                regex: "The phone number must be in the format (XXX) XXX-XXXX."
            }
        },
        submitHandler: function(form) {
            displayResults();
        },
        errorPlacement: function (error, element) {
            $("#result").val(error.text());
        }
    });

    function displayResults() {
        $("#result").val("Thank you for submitting your phone number. One of our agents will contact you within a week.");
    }

    $("#reset").click(function() {
        $("#result").val("");
    });
});