$(document).ready(function() {
    setupPage({"hw_number": 4, "hw_title": "Looping Statements"});
    addUniquePageContent();

    function addUniquePageContent() {
        document.getElementsByClassName("content-container")[0].innerHTML += `
            <section id="hw4-section">
                <h3>Welcome to my implementation of HW 4 for my Javascript, jQuery, and AJAX class.</h3>
                <ol>
                    <li>
                        Part 1 uses loops for calculate the sum and product between two numbers.
                    </li>
                    <li>
                        Part 2 displays the savings with time for different interest rates.
                    </li>
                    <li>
                        Part 3 draws a square given the side lengths.
                    </li>
                </ol>
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
});