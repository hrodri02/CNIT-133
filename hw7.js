$(document).ready(function() {
    setupPage({"hw_number": 7, "hw_title": "Object Model and Miscellaneous jQuery"});
    addUniquePageContent();

    function addUniquePageContent() {
        document.getElementsByClassName("content-container")[0].innerHTML += `
            <main>
                <h3>Welcome to my implementation of HW 7 for my Javascript, jQuery, and AJAX class.</h3>
                <h4>Part 1</h4>
                <div class="description">
                    <a href="hw7-part1.html">Part 1</a> provides a form to change the styles of three paragraphs.
                </div>
                <h4>Part 2</h4>
                <div class="description">
                    <a href="hw7-part2.html">Part 2</a> contains a horizonal navigation bar with drop down menus.
                </div>    
            </main>
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

    $('.description').hide();
    $('main h4').click(function() {
        const description = $(this).next('.description');
        if (description.is(':visible')) {
            description.slideUp(200);
        } else {
            description.slideDown(200);
        }
    });
});