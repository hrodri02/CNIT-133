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

    function displayResults() {
        let firstSumString = "The result of ";
        let firstSum = 0;
        let firstProductString = "The result of ";
        let firstProduct = 1;
        const num1 = 9;
        const num2 = 25;
        const step = 4;
        for (let curr = num1; curr <= num2; curr += step) {
            firstSum += curr;
            firstSumString += curr;
            firstSumString += (curr < num2)? " + " : ` is ${firstSum}`;
            firstProduct *= curr;
            firstProductString += curr;
            firstProductString += (curr < num2)? " * " : ` is ${firstProduct.toLocaleString()}`;
        }
        document.getElementById("first-sum-product").innerText = `${firstSumString}\n${firstProductString}`;

        let secondSumString = "The result of ";
        let secondSum = 0;
        let secondProductString = "The result of ";
        let secondProduct = 1;
        let curr = 3;
        const num4 = 18;
        const step2 = 3;
        while (curr <= num4) {
            secondSum += curr;
            secondSumString += curr;
            secondSumString += (curr < num4)? " + " : ` is ${secondSum}`;
            secondProduct *= curr;
            secondProductString += curr;
            secondProductString += (curr < num4)? " * " : ` is ${secondProduct.toLocaleString()}`;
            curr += step2;
        }
        document.getElementById("second-sum-product").innerText = `${secondSumString}\n${secondProductString}`;
    }

    displayResults();
});