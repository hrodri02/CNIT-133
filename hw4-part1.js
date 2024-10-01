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
        const {firstSumString, firstProductString} = calculateFirstSumProductString();
        document.getElementById("first-sum-product").innerText = `${firstSumString}\n${firstProductString}`;
        const {secondSumString, secondProductString} = calculateSecondSumProductString();        
        document.getElementById("second-sum-product").innerText = `${secondSumString}\n${secondProductString}`;
    }

    function calculateFirstSumProductString() {
        let firstSumString = "The result of ";
        let firstSum = 0;
        let firstProductString = "The result of ";
        let firstProduct = 1;
        const max1 = 25;
        const step1 = 4;
        for (let curr = 9; curr <= max1; curr += step1) {
            firstSum += curr;
            firstSumString += curr;
            firstSumString += (curr < max1)? " + " : ` is ${firstSum}`;
            firstProduct *= curr;
            firstProductString += curr;
            firstProductString += (curr < max1)? " * " : ` is ${firstProduct.toLocaleString()}`;
        }
        return {firstSumString, firstProductString};
    }

    function calculateSecondSumProductString() {
        let secondSumString = "The result of ";
        let secondSum = 0;
        let secondProductString = "The result of ";
        let secondProduct = 1;
        let curr = 3;
        const max2 = 18;
        const step2 = 3;
        while (curr <= max2) {
            secondSum += curr;
            secondSumString += curr;
            secondSumString += (curr < max2)? " + " : ` is ${secondSum}`;
            secondProduct *= curr;
            secondProductString += curr;
            secondProductString += (curr < max2)? " * " : ` is ${secondProduct.toLocaleString()}`;
            curr += step2;
        }
        return {secondSumString, secondProductString};
    }

    displayResults();
});