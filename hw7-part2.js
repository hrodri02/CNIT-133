$(document).ready(function() {
    setupPage({"hw_number": 7, "hw_title": "Object Model and Miscellaneous jQuery"});
    addUniquePageContent();

    function addUniquePageContent() {
        document.getElementsByClassName("content-container")[0].innerHTML += `
            <main>
                <h3>Part 2</h3>
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
});