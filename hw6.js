$(document).ready(function() {
    setupPage({"hw_number": 6, "hw_title": "Objects"}, document);
    addUniquePageContent();

    function addUniquePageContent() {
        document.getElementsByClassName("content-container")[0].innerHTML += `
            <section class="hw6-section">
                <h3>Welcome to my implementation of HW 6 for my Javascript, jQuery, and AJAX class.</h3>
                <ol>
                    <li>
                        Part 1 rounds a number to different place values and the square root of the number.
                    </li>
                    <li>
                        Part 2 allows a user to search for a character in some text.
                    </li>
                    <li>
                        Part 3 allows a user to enter a phone number and validates it.
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