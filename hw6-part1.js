$(document).ready(function() {
    setupPageStructure();
    addUniquePageContent();

    function setupPageStructure () {
        const metadata = {"hw_number": 6, "hw_title": "Objects"};
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
            <section class="hw6-section half-screen-width">
                <h3>Input</h3>
                <form id="myform">
                    <table>
                        <tr>
                            <td>
                                <label for="number">Enter a number with at least 4 digits after the decimal:</label>
                            </td>
                            <td>
                                <input class="full-width-black-input thin-white-border" type="number" name="number" id="number" placeholder="Enter number">
                            </td>
                        </tr>
                    </table>
                    <br><br>
                    <div class="center-child-elements">
                        <input type="submit" id="submitNumber" value="SUBMIT">
                        <input type="reset" value="RESET" id="reset">
                    </div>
                </form>
            </section>
            <section class="hw6-section half-screen-width">
                <h3>Results</h3>
                <textarea class="black-background-white-text thin-white-border" rows="6" cols="60" name="result" id="result"></textarea>
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

    $.validator.addMethod("regex", function(value, element, regexp) {
        return this.optional(element) || regexp.test(value);
    }, "Please enter a valid value.");

    $("#myform").validate({
        rules: {
            "number": {
                required: true, 
                number: true,
                min: 0,
                regex: /[-]?(\d)*(\.)(\d){4,4}/
            }
        },
        messages: {
            "number": {
                regex: "Number must have four digits after the decimal."
            }
        },
        submitHandler: function(form) {
            displayResults();
        },
        errorPlacement: function (error, element) {
            $("#result").val(error.text());
        }
    });

    function displayResults() {
        const numberAsString = $("#myform").find("#number").val();
        const number = parseFloat(numberAsString);
        const int = Math.round(number);
        const sqrt = Math.round(Math.sqrt(number));
        const nearestTenth = number.toFixed(1);
        const nearestHundreth = number.toFixed(2);
        const nearestThousandth = number.toFixed(3);
        $("#result").val(`You typed: ${numberAsString}\nRounded to the nearest integer: ${int}\nSquare root rounded to integer: ${sqrt}\nRounded to the nearest tenth: ${nearestTenth}\nRounded to the nearest hundredth: ${nearestHundreth}\nRounded to the nearest thousandth: ${nearestThousandth}`);
    }

    $("#reset").click(function() {
        $("#result").val("");
    });
});