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

    $("#myform").validate({
        rules: {
            "side-length": {required: true, number: true, min: 2, max: 10, step: 1}
        },
        messages: {
            "side-length": {
                required: "Please enter a side length",
                number: "Please enter a number",
                min: "The smallest valid side length is 2",
                max: "The largest valid side length is 10",
                step: "The side length must be an integer"
            }
        },
        submitHandler: function(form) {
            getSideLengthAndDrawSquare();
        }
    });

    function getSideLengthAndDrawSquare() {
        const sideLength = parseInt(document.forms["myform"].elements["side-length"].value);
        drawSquare(sideLength);
    }

    function drawSquare(sideLength) {
        const p = document.getElementById("drawing-area");
        p.innerText = "";
        for (let i = 0; i < sideLength; i++) {
            if (i === 0 || i === sideLength - 1)
                p.innerText += "*".repeat(sideLength);
            else {
                const emptySpace = "\u00A0".repeat((sideLength - 2) * 2);
                p.innerText += ("*" + emptySpace + "*");
            }
            p.innerText += "\n";
        }
    }

    $("#resetDrawingArea").click(function() {
        const p = document.getElementById("drawing-area");
        p.innerText = "";
    });
});