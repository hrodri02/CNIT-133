$(document).ready(function() {
    setupPage({"hw_number": 6, "hw_title": "Objects"}, document);
    addUniquePageContent();

    function addUniquePageContent() {
        document.getElementsByClassName("content-container")[0].innerHTML += `
            <section class="hw6-section adaptable-width">
                <h3>Phone Number</h3>
                <form id="myform">
                    <table>
                        <tr>
                            <td>
                                <label for="phone-number">Enter your phone number:</label>
                            </td>
                            <td>
                                <input class="full-width-black-input thin-white-border" type="text" name="phone-number" id="phone-number" placeholder="(XXX) XXX-XXXX">
                            </td>
                        </tr>
                    </table>
                    <br><br>
                    <div class="center-child-elements">
                        <input type="submit" id="submitPhoneNumber" value="SUBMIT">
                        <input type="reset" value="RESET" id="reset">
                    </div>
                </form>
            </section>
            <section class="hw6-section adaptable-width">
                <h3>Result</h3>
                <textarea class="black-background-white-text thin-white-border" rows="3" cols="40" name="result" id="result"></textarea>
            </section>
        `;
    };

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
            "phone-number": {
                required: true,
                regex: /^\((\d){3,3}\) (\d){3,3}-(\d){4,4}$/
            }
        },
        messages: {
            "phone-number": {
                required: "Pleae enter your phone number.",
                regex: "The phone number must be in the following format: (XXX) XXX-XXXX."
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
        $("#result").val("Thank you for submitting your phone number. One of our agents will contact you within a week.");
    }

    $("#reset").click(function() {
        $("#result").val("");
    });
});