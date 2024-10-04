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

    function drawSquare(sideLength) {
        const p = document.getElementById("drawing-area");
        for (let i = 0; i < sideLength; i++) {
            if (i === 0 || i === sideLength - 1)
                p.innerText += "*".repeat(sideLength);
            else {
                const emptySpace = "\u00A0".repeat((sideLength - 2) * 2);
                console.log(emptySpace.length);
                p.innerText += ("*" + emptySpace + "*");
            }
            p.innerText += "\n";
        }
    }

    drawSquare(10);
});