$(document).ready(function() {
    setupPage({"hw_number": 3, "hw_title": "Functions"});
    addUniquePageContent();

    function addUniquePageContent() {
        document.getElementsByClassName("content-container")[0].innerHTML += `
            <section id="hw3-section">
                <h3>Welcome to my implementation of HW 3 for my Javascript, jQuery, and AJAX class.</h3>
                <ol>
                    <li>
                        Part 1 calulates a student's grade.
                    </li>
                    <li>
                        Part 2 caculates a sales person's commision based salary.
                    </li>
                    <li>
                        Part 3 is to practice multiplying two one-digit numbers.
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