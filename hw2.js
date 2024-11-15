$(document).ready(function() {
    setupPageStructure();
    addUniquePageContent();

    function setupPageStructure () {
        const metadata = {"hw_number": 2, "hw_title": "Basic Operations"};
        // Cache of the template
        const template = document.getElementById("template-page-structure");
        // Get the contents of the template
        const templateHtml = template.innerHTML;
        // Final HTML variable as empty string
        let html = "";
        // Loop through dataObject, replace placeholder tags
        // with actual data, and generate final HTML
        html += templateHtml.replace(/{{hw_number}}/g, metadata["hw_number"])
                            .replace(/{{hw_title}}/g, metadata["hw_title"]);
        document.body.innerHTML = html;
    }

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