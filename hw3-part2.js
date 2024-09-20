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

    $("#calculateAmountSold").click(function() {
        try {
            const name = document.forms["myform"].elements["sellers-name"].value;
            validateName(name);
            const amounts = [];
            for (let i = 1; i <= 4; i++) {
                const amount = parseInt(document.forms["myform"].elements[`item-${i}`].value);
                amounts.push(amount);
            }
            validateItemAmounts(amounts);
        }
        catch(error) {
            displayErrorMessage(error.message);
        }
    });

    function validateName(name) {
        if (name === "")
            throw new Error("The name cannot be empty.");
    }

    function validateItemAmounts(amounts) {
        for (amount of amounts) {
            if (Number.isNaN(amount) || amount < 0)
                throw new Error("The item amounts need to be a whole number.");
        }
    }

    function displayErrorMessage(msg) {
        alert(msg);
    }
});