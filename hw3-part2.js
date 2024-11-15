$(document).ready(function() {
    $(document).tooltip();

    setupPageStructure();
    addUniquePageContent();

    function setupPageStructure () {
        const metadata = {"hw_number": 3, "hw_title": "Functions"};
        // Cache of the template
        const template = document.getElementById("template-page-structure");
        // Get the contents of the template
        const templateHtml = template.innerHTML;
        // Final HTML variable as empty string
        let html = "";
        // Loop through dataObject, replace placeholder tags
        // with actual data, and generate final HTML
        html += templateHtml.replace(/{{hw_number}}/g, metadata["hw_number"])
                            .replace(/{{hw_title}}/g, metadata["hw_title"]);
        document.body.innerHTML = html;
    }

    function addUniquePageContent() {
        document.getElementsByClassName("content-container")[0].innerHTML += `
            <section class="hw3-part2-section half-screen-width">
                <h3>Enter your name and amount of each item sold</h3>
                <form name="myform" id="myform">
                    <table class="hw3-part2-table">
                        <tr>
                            <td><label for='sellers-name'>Seller's name</label></td>
                            <td><input class="full-width-black-input" type="text" name="sellers-name" id="sellers-name" style='text-align:right;' title="Please make sure that the salesperson's name is spelled correctly"></td>
                        </tr>
                        <tr>
                            <td><label for='item-1'>Item 1</label></td>
                            <td><input class="full-width-black-input" type="number" name="item-1" id="item-1" style='text-align:right;'></td>
                        </tr>
                        <tr>
                            <td><label for='item-2'>Item 2</label></td>
                            <td><input class="full-width-black-input" type="number" name="item-2" id="item-2" style='text-align:right;'></td>
                        </tr>
                        <tr>
                            <td><label for='item-3'>Item 3</label></td>
                            <td><input class="full-width-black-input" type="number" name="item-3" id="item-3" style='text-align:right;'></td>
                        </tr>
                        <tr>
                            <td><label for='item-4'>Item 4</label></td>
                            <td><input class="full-width-black-input" type="number" name="item-4" id="item-4" style='text-align:right;'></td>
                        </tr>
                    </table>
                    <br>
                    <input type="submit" id="calculateAmountSold" value="Submit">
                    <input type="reset" id="resetForm" value="Clear Form">
                </form>
            </section>
            <section class="hw3-part2-section half-screen-width">
                <h3>Results</h3>
                <table class="hw3-part2-table">
                    <tr>
                        <th>Item #</th><th>Price</th><th>Qty Sold</th><th>Sold [$]</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td style="text-align:right;">$20.99</td>
                        <td><input class="full-width-black-input" type="number" name="item1-amount" id="item1-amount" style="text-align:right;"></td>
                        <td><input class="full-width-black-input" type="number" name="item1-amount-sold" id="item1-amount-sold" style="text-align:right;" readonly></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td style="text-align:right;">$12.75</td>
                        <td><input class="full-width-black-input" type="number" name="item2-amount" id="item2-amount" style="text-align:right;"></td>
                        <td><input class="full-width-black-input" type="number" name="item2-amount-sold" id="item2-amount-sold" style="text-align:right;" readonly></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td style="text-align:right;">$9.95</td>
                        <td><input class="full-width-black-input" type="number" name="item3-amount" id="item3-amount" style="text-align:right;"></td>
                        <td><input class="full-width-black-input" type="number" name="item3-amount-sold" id="item3-amount-sold" style="text-align:right;" readonly></td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td style="text-align:right;">$35.89</td>
                        <td><input class="full-width-black-input" type="number" name="item4-amount" id="item4-amount" style="text-align:right;"></td>
                        <td><input class="full-width-black-input" type="number" name="item4-amount-sold" id="item4-amount-sold" style="text-align:right;" readonly></td>
                    </tr>
                    <tr>
                        <td colspan="2"><label for='total-amount-sold'>Total Amount Sold [$]</label></td>
                        <td colspan="2"><input class="full-width-black-input" type="number" name="total-amount-sold" id="total-amount-sold" style="text-align:right;" readonly></td>
                    </tr>
                    <tr>
                        <td colspan="2"><label for='total-weekly-earnings'>Total Weekly Earnings [$]</label></td>
                        <td colspan="2"><input class="full-width-black-input" type="number" name="total-weekly-earnings" id="total-weekly-earnings" style="text-align:right;" readonly></td>
                    </tr>
                </table>
            </section>
        `;
    }    

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