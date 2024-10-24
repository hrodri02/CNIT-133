$(document).ready(function(){
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