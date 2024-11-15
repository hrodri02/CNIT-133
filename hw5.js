$(document).ready(function() {
    setupPage({"hw_number": 5, "hw_title": "Arrays"});
    addUniquePageContent();

    function addUniquePageContent() {
        document.getElementsByClassName("content-container")[0].innerHTML += `
            <section class="hw5-section">
                <h3>Welcome to my implementation of HW 5 for my Javascript, jQuery, and AJAX class.</h3>
                <ol>
                    <li>
                        Part 1 collects user information like full name, age group, web browser used, and favorite movie genre.
                    </li>
                    <li>
                        Part 2 uses drop down menus to display website names to navigate to.
                    </li>
                    <li>
                        Part 3 presents state information given the state name or abbreviation.
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