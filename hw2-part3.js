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