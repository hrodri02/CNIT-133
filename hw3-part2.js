$(document).ready(function() {
    $(document).tooltip();

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

    $("#menu-bar").click(function() {
        $(".vertical-nav-bar").toggle();
    });

    $("#resetForm").click(function() {
        for (let i = 1; i <= 4; i++) {
            document.getElementById(`item${i}-amount`).value = "";
            document.getElementById(`item${i}-amount-sold`).value = "";
        }
        document.getElementById("total-amount-sold").value = "";
        document.getElementById("total-weekly-earnings").value = "";
    });

    $("#myform").validate({
        rules: {
            "sellers-name": {required: true, minlength: 2},
            "item-1": {required: true, number: true, min: 0, step: 1},
            "item-2": {required: true, number: true, min: 0, step: 1},
            "item-3": {required: true, number: true, min: 0, step: 1}
        },
        messages: {
            "sellers-name": {
                required: "Please enter your name",
                minlength: "Name must be at least 2 characters"
            },
            "item-1": {
                required: "Please enter the amount sold",
                number: "The amount must be a whole number",
                min: "The amount must be a whole number",
                step: "The amount must be a whole number"
            },
            "item-2": {
                required: "Please enter the amount sold",
                number: "The amount must be a whole number",
                min: "The amount must be a whole number",
                step: "The amount must be a whole number"
            },
            "item-3": {
                required: "Please enter the amount sold",
                number: "The amount must be a whole number",
                min: "The amount must be a whole number",
                step: "The amount must be a whole number"
            },
            "item-4": {
                required: "Please enter the amount sold",
                number: "The amount must be a whole number",
                min: "The amount must be a whole number",
                step: "The amount must be a whole number"
            },
        },
        submitHandler: function(form) {
            calculateAmountSold();
        }
    });

    function calculateAmountSold() {
        const amounts = [];
        for (let i = 1; i <= 4; i++) {
            const amount = parseInt(document.forms["myform"].elements[`item-${i}`].value);
            amounts.push(amount);
        }
        displayResults(amounts);
    }

    function displayResults(amounts) {
        const costs = [20.99, 12.75, 9.95, 35.89];
        let totalAmountSold = 0;
        for (let i = 1; i <= 4; i++) {
            document.getElementById(`item${i}-amount`).value = amounts[i - 1];
            const amountSold = amounts[i - 1] * costs[i - 1];
            totalAmountSold += amountSold;
            document.getElementById(`item${i}-amount-sold`).value = amountSold.toFixed(2);
        }
        document.getElementById("total-amount-sold").value = totalAmountSold.toFixed(2);
        const totalWeeklyEarnings = calculateTotalWeeklyEarnings(totalAmountSold);
        document.getElementById("total-weekly-earnings").value = totalWeeklyEarnings.toFixed(2);
    }

    function calculateTotalWeeklyEarnings(totalAmountSold) {
        return totalAmountSold * 0.09 + 250;
    }
});