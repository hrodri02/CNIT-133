$(document).ready(function(){
    setupPage({"hw_number": 2, "hw_title": "Basic Operations"});
    addUniquePageContent();

    function addUniquePageContent() {
        document.getElementsByClassName("content-container")[0].innerHTML += `
            <section id="hw2-section">
                <h3>Calculate Sum, Average, Product, Min, and Max of Three Integers</h3>
                <form name="myform">
                    <table>
                        <tr>
                            <td><label for='num1'>First Integer:</label></td>
                            <td><input type="number" name="num1" id="num1" value="0" style='text-align:right;'></td>
                        </tr>
                        <tr>
                            <td><label for='num2'>Second Integer:</label></td>
                            <td><input type="number" name="num2" id="num2" value="0" style='text-align:right;'></td>
                        </tr>
                        <tr>
                            <td><label for='num3'>Third Integer:</label></td>
                            <td><input type="number" name="num3" id="num3" value="0" style='text-align:right;'></td>
                        </tr>
                    </table>
                    <br>
                    <br>Results<br>
                    <textarea rows="5" cols="40" name="result" id="result"></textarea>
                    <br><br>
                    <input type="button" id="calculateHW2Part2Results" value="SUBMIT">
                    <button type="button" id="fade-btn">FADE</button>
                    <input type="reset" value="RESET">
                </form>
            </section>
        `;
    }

    const currentPath = window.location.pathname;
    const parts = currentPath.split('/');
    const currentPage = parts[parts.length - 1];
    $("nav").children('a').each(function () {
        // Check if the href attribute matches the current path
        if ($(this).attr('href') === currentPage) {
            $(this).addClass('nav-active'); // Add the 'active' class
        }
    });

    $("#menu-bar").click(function() {
        $(".vertical-nav-bar").toggle();
    });

    $("#fade-btn").click(function() {
        $('textarea').fadeTo('slow', 0.25);
    });

    $("#calculateHW2Part2Results").click(function() {
        $('textarea').fadeTo('slow', 1);
        const n = 3;
        let sum = 0;
        let product = 1;
        let smallest = Number.MAX_VALUE;
        let largest = Number.MIN_VALUE;
        for (let i = 1; i <= n; i++) {
            const num = parseFloat(document.forms['myform'].elements['num' + i].value);
            if (Number.isNaN(num) || !Number.isInteger(num)) {
                document.forms['myform'].elements['result'].value = 'All the inputs must be integers!';
                return;
            }
            sum += num;
            product *= num;
            smallest = Math.min(smallest, num);
            largest = Math.max(largest, num);
        }
        let avg = sum / n;
        document.forms['myform'].elements['result'].value = 
            `Sum: ${sum.toFixed(2)}\n` +
            `Product: ${product.toFixed(2)}\n` +
            `Average: ${avg.toFixed(2)}\n` +
            `Smallest: ${smallest}\n` +
            `Largest: ${largest}`;
    });
});