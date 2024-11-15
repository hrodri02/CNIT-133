$(document).ready(function() {
    setupPageStructure();
    addUniquePageContent();

    function setupPageStructure () {
        const metadata = {"hw_number": 5, "hw_title": "Arrays"};
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
            <section class="hw5-section">
                <h3>Choose your destination (using onchange event handler)</h3>
                <form name="form1">
                    <select name="destList1" id="destList1" class="full-width-black-background thin-white-border">
                        <option value="">Choose Destination</option>
                        <option value="https://www.ccsf.edu">CCSF</option>
                        <option value="https://www.youtube.com">YouTube</option>
                        <option value="https://www.google.com">Google</option>
                    </select>
                </form>
                <h3>Choose your destination (using onclick event handler)</h3>
                <form name="form2">
                    <select name="destList2" class="black-background-white-text thin-white-border">
                        <option value="">Choose Destination</option>
                        <option value="https://www.ccsf.edu">CCSF</option>
                        <option value="https://www.youtube.com">YouTube</option>
                        <option value="https://www.google.com">Google</option>
                    </select>
                    <input type="button" value="Go" id="go">
                </form>
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

    $("#go").click(function() {
        const urlString = document.forms["form2"].elements["destList2"].value;
        if (urlString !== "") {
            const newWindow = window.open(urlString, "_blank");
            if (newWindow)
                newWindow.opener = null;
        }
            
    });

    $("#destList1").change(function() {
        const urlString = $(this).children("option:selected").val();
        if (urlString !== "") {
            const newWindow = window.open(urlString, "_blank");
            if (newWindow)
                newWindow.opener = null;
        }
    });
});