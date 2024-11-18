$(document).ready(function() {
    setupPage({"hw_number": 5, "hw_title": "Arrays"});
    addUniquePageContent();

    function addUniquePageContent() {
        document.getElementsByClassName("content-container")[0].innerHTML += `
            <section class="hw5-section">
                <h3>Choose your destination</h3>
                <form name="form1">
                    <table>
                        <tr>
                            <td>
                                <label for="destList1">Select a destination (opens automatically)<label>
                            </td>
                            <td>
                                <select name="destList1" id="destList1" class="full-width-black-background thin-white-border">
                                    <option value="">Choose Destination</option>
                                    <option value="https://www.ccsf.edu">CCSF</option>
                                    <option value="https://www.youtube.com">YouTube</option>
                                    <option value="https://www.google.com">Google</option>
                                </select>
                            </td>
                        </tr>
                    </table>
                </form>
                <br>
                <form name="form2">
                    <table>
                        <tr>
                            <td>
                                <label for="destList1">Select a destination, then click Go.<label>
                            </td>
                            <td>
                                <select name="destList2" class="black-background-white-text thin-white-border">
                                    <option value="">Choose Destination</option>
                                    <option value="https://www.ccsf.edu">CCSF</option>
                                    <option value="https://www.youtube.com">YouTube</option>
                                    <option value="https://www.google.com">Google</option>
                                </select>
                                <input type="button" value="Go" id="go">
                            </td>
                        </tr>
                    </table>
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