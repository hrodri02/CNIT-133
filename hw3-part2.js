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

    $("#resetForm").click(function() {
        for (let i = 1; i <= 4; i++) {
            document.getElementById(`item${i}-amount`).value = "";
            document.getElementById(`item${i}-amount-sold`).value = "";
        }
        document.getElementById("total-amount-sold").value = "";
        document.getElementById("total-weekly-earnings").value = "";
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
            displayResults(amounts);
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

    function displayErrorMessage(msg) {
        alert(msg);
    }
});