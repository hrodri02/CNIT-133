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

    function addTables() {
        const section = document.getElementById('hw4-section');
        const interestRates = [5, 6, 7];
        const maxYears = 5;
        for (let table_id = 0; table_id < interestRates.length; table_id++) {
            const interestRate = interestRates[table_id];
            section.innerHTML += `
                <table>
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
                const amount = calculateAmountInSavings(1000, years, interestRate).toFixed(2);
                const interestRateAsDecimal = interestRate / 100;
                tableBody.innerHTML += `
                    <tr>
                        <td>${years}</td><td>${amount}</td><td>${interestRateAsDecimal}</td>
                    </tr>
                `;
            }
        }
    }
    
    function calculateAmountInSavings(princicpal, years, interestRate){
        return princicpal*(1 + interestRate / 100) ** years;
    }

    addTables();
});