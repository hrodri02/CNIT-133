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
            "number": {
                required: true, 
                number: true,
                regex: /(\d)*\.(\d)(\d)(\d)(\d)/
            }
        },
        messages: {
            "number": {
                regex: "Number must have four digits after the decimal."
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
        const number = $("#myform").find("#number").val();
        $("#result").val(number);
    }
});