$(document).ready(function() {
    setupPage({"hw_number": 7, "hw_title": "Object Model and Miscellaneous jQuery"});
    addUniquePageContent();

    function addUniquePageContent() {
        document.getElementsByClassName("content-container")[0].innerHTML += `
            <main>
                <h3>Dropdown Menus</h3>
                <ul class="horizontal-nav-bar">
                    <li class="dropdown"><a class="dropbtn" href="hw2.html">Homework 2</a>
                        <ul class="submenu fallback">
                            <li><a href="hw2-part1.html">Part 1</a></li>
                            <li><a href="hw2-part2.html">Part 2</a></li>
                            <li><a href="hw2-part3.html">Part 3</a></li>
                        </ul>
                    </li>
                    <li class="dropdown"><a class="dropbtn" href="hw3.html">Homework 3</a>
                    <ul class="submenu fallback">
                            <li><a href="hw3-part1.html">Part 1</a></li>
                            <li><a href="hw3-part2.html">Part 2</a></li>
                            <li><a href="hw3-part3.html">Part 3</a></li>
                        </ul>
                    </li>
                    <li class="dropdown"><a class="dropbtn" href="hw4.html">Homework 4</a>
                    <ul class="submenu fallback">
                            <li><a href="hw4-part1.html">Part 1</a></li>
                            <li><a href="hw4-part2.html">Part 2</a></li>
                            <li><a href="hw4-part3.html">Part 3</a></li>
                        </ul>
                    </li>
                </ul>
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

    $('.submenu').hide().removeClass('fallback');
    $('.dropdown').hover(
        function () {
            $('ul', this).stop().slideDown(200);
        },
        function () {
            $('ul', this).stop().slideUp(200);
        }
    );
});