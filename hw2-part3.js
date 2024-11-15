$(document).ready(function() {
    setupPage({"hw_number": 2, "hw_title": "Basic Operations"});
    addUniquePageContent();

    function addUniquePageContent() {
        document.getElementsByClassName("content-container")[0].innerHTML += `
            <section id="hw2-part3-section">
                <h3>Extra Credit</h3>
                <div id="currencies-container">
                    <div id="instructions-container">
                        <button type="button" id="hw2-part3-instructions-btn">Click to Show/Hide Instructions</button>
                        <p id="instructions" style="display:none">The foreign exchange rates in June 2021. Enter a dollar amount in the table below to see the corresponding foreign exchange values</p>
                    </div>
                    <form name="myform" id="currencies-form">
                        <table id="hw2-table-part3">
                            <tr>
                                <th colspan="3">Monetary Exchange Rates</th>
                            </tr>
                            <tr>
                                <th>Currency</th><th>Rate</th><th>Value</th>
                            </tr>
                            <tr>
                                <td>Euro</td><td>0.92</td>
                                <td><input class="full-width-black-input" type="number" name="euro-amount" id="euro-amount" value="0" readonly></td>
                            </tr>
                            <tr>
                                <td>Canadian Dollar</td><td>1.38</td>
                                <td><input class="full-width-black-input" type="number" name="canadian-dollar-amount" id="canadian-dollar-amount" value="0" readonly></td>
                            </tr>
                            <tr>
                                <td>Hong Kong Dollar</td><td>7.81</td>
                                <td><input class="full-width-black-input" type="number" name="hong-kong-dollar-amount" id="hong-kong-dollar-amount" value="0" readonly></td>
                            </tr>
                            <tr>
                                <td>Japanese Yen</td><td>156.73</td>
                                <td><input class="full-width-black-input" type="number" name="japanese-yen-amount" id="japanese-yen-amount" value="0" readonly></td>
                            </tr>
                            <tr>
                                <td>Mexican Peso</td><td>18.41</td>
                                <td><input class="full-width-black-input" type="number" name="mexican-peso-amount" id="mexican-peso-amount" value="0" readonly></td>
                            </tr>
                        </table>
                        <br>
                        <div>
                            <label style="font-weight: bold;">Enter the Amount of U.S. Dollars:</label>
                            <input type="number" name="us-dollar-amount" id="us-dollar-amount" value="0" step="0.01" style='text-align:right;'>
                        </div>
                    </form>
                </div>
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
    
    $("#us-dollar-amount").on('keypress', function(e) {
        // if enter key was presses on the us dollar amount input
        if (e.which === 13) {
            $(this).val( parseFloat($(this).val()).toFixed(2) );
            const usDollarAmount = parseFloat(document.forms['myform'].elements['us-dollar-amount'].value);
            const exchangeRates = [0.92, 1.38, 7.81, 156.73, 18.41];
            const inputNames = ['euro-amount', 
                            'canadian-dollar-amount', 
                            'hong-kong-dollar-amount',
                            'japanese-yen-amount',
                            'mexican-peso-amount'];
            for (i in exchangeRates) {
                const rate = exchangeRates[i];
                const newAmount = usDollarAmount * rate;
                const input = document.forms['myform'].elements[inputNames[i]];
                input.value = newAmount.toFixed(2);
            }
        }
    });

    $("#us-dollar-amount").click(function() {
        $(this).css('background-color', 'yellow');
    });

    $("#hw2-part3-instructions-btn").click(function() {
        $("#instructions").toggle();
    });
});