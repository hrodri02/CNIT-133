$(document).ready(function() {
    setupPage({"hw_number": 2, "hw_title": "Basic Operations"});
    addUniquePageContent();

    function addUniquePageContent() {
        document.getElementsByClassName("content-container")[0].innerHTML += `
        <section id="hw2-section">
                <h3>Welcome to my implementation of HW 2 for my Javascript, jQuery, and AJAX class.</h3>
                <ol>
                    <li>
                        Part 1 focuses on using document.write and styling elements.
                    </li>
                    <li>
                        Part 2 calculates the sum, average, and product of three numbers and determines the smallest and largest of the three.
                    </li>
                    <li>
                        Part 3 is converts a U.S. Dollar amount to different currencies.
                    </li>
                </ol>
            </section>
    `;
    }

    $("#menu-bar").click(function() {
        $(".vertical-nav-bar").toggle();
    });

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
});