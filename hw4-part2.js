$(document).ready(function() {
    setupPage({"hw_number": 4, "hw_title": "Looping Statements"});
    addUniquePageContent();

    function addUniquePageContent() {
        document.getElementsByClassName("content-container")[0].innerHTML += `
            <section id="hw4-section">
                <h3>Learn About Compound Interest</h3>
            </section>
        `;
    }

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

    function addTables() {
        const section = document.getElementById('hw4-section');
        const interestRates = [5, 6, 7];
        const maxYears = 5;
        for (let table_id = 0; table_id < interestRates.length; table_id++) {
            const interestRate = interestRates[table_id];
            section.innerHTML += `
                <table class="hw4-part2-tables">
                    <caption>Savings with an Interest Rate of ${interestRate}%</caption>
                    <tbody id="table-body-${table_id}">
                        <tr>
                            <th>Year</th><th>Amount on Deposit</th><th>Interest Rate</th>
                        </tr>
                    </tbody>
                </table>
                <br>
            `;
            const tableBody = document.getElementById(`table-body-${table_id}`);
            for (let years = 1; years <= maxYears; years++) {
                const amount = calculateAmountInSavings(1000, years, interestRate);
                const interestRateAsDecimal = interestRate / 100;
                const amountFormatted = formatToUSCurrency(amount);
                tableBody.innerHTML += `
                    <tr>
                        <td>${years}</td><td>${amountFormatted}</td><td>${interestRateAsDecimal}</td>
                    </tr>
                `;
            }
        }
    }
    
    function calculateAmountInSavings(princicpal, years, interestRate){
        return princicpal*(1 + interestRate / 100) ** years;
    }

    function formatToUSCurrency(amount) {
        const o = {style: "currency", currency: "USD"};
        return amount.toLocaleString("en", o);
    }

    addTables();
});