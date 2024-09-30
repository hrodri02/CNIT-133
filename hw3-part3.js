$(document).ready(function() {
    // update the selected page in the nav bar
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

    let num1 = null;
    let num2 = null;

    displayTwoRandomNumbers();

    function displayTwoRandomNumbers() {
        num1 = generateRandomNumberBetween0and9();
        num2 = generateRandomNumberBetween0and9();
        const label = document.getElementById("product-label");
        label.innerText = `What is ${num1} times ${num2}?`;
    }

    function generateRandomNumberBetween0and9() {
        return Math.floor(Math.random()*10);
    };

    $("#myform").validate({
        rules: {
            "product": {required: true, number: true}
        },
        messages: {
            "product": {
                required: "Please enter the product",
                number: "The product must be a number"
            }
        },
        submitHandler: function(form) {
            checkProduct();
        }
    });

    function checkProduct() {
        const actual = parseInt(document.forms["myform"].elements["product"].value);
        const expected = num1 * num2;
        if (actual !== expected) {
            document.forms["myform"].elements["result"].value = "No. Please try again.";
        }
        else {
            document.forms["myform"].elements["result"].value = "Very good! Do you want to try another problem?";
            document.getElementById("checkProduct").style.display = "none";
            document.getElementById("continue").style.display = "inline";
            document.getElementById("stop").style.display = "inline";
        }
    }

    $("#continue").click(function() {
        document.forms["myform"].elements["product"].value = "";
        document.forms["myform"].elements["result"].value = "";
        document.getElementById("continue").style.display = "none";
        document.getElementById("stop").style.display = "none";
        document.getElementById("checkProduct").style.display = "inline";
        displayTwoRandomNumbers();
    });

    $("#stop").click(function() {
        const section = document.getElementById("hw3-section");
        section.innerHTML = `
            <h3>Thanks for playing, see you next time!</h3>
        `;
    });
});