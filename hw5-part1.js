$(document).ready(function() {
    setupPage({"hw_number": 5, "hw_title": "Arrays"});
    addUniquePageContent();

    function addUniquePageContent() {
        document.getElementsByClassName("content-container")[0].innerHTML += `
            <section class="hw5-section">
                <h3>User Info</h3>
                <form id="myform">
                    <table class="full-parent-width">
                        <tr>
                            <td><label for="fullname">Fullname: </label></td>
                            <td><input class="full-width-black-input thin-white-border" type="text" name="fullname" id="fullname" placeholder="Enter your full name"></td>
                        </tr>
                    </table>
                    <br><br>
                    <fieldset>
                        <legend>Select your age group:</legend>
                        <div>
                            <input type="radio" id="less-than-21" name="age-group" value="less-than-21">
                            <label for="less-than-21">Less than 21</label>
                        </div>
                        <div>
                            <input type="radio" id="21-50" name="age-group" value="21-50">
                            <label for="21-50">Between 21 and 50</label>
                        </div>
                        <div>
                            <input type="radio" id="older-than-50" name="age-group" value="older-than-50">
                            <label for="older-than-50">Older than 50</label>
                        </div>
                    </fieldset>
                    <br><br>
                    <fieldset>
                        <legend>Select your web browser of choice:</legend>
                        <div>
                            <input type="checkbox" id="chrome" name="web-browser" value="chrome">
                            <label for="chrome">Chrome</label>
                        </div>
                        <div>
                            <input type="checkbox" id="firefox" name="web-browser" value="firefox">
                            <label for="firefox">Firefox</label>
                        </div>
                        <div>
                            <input type="checkbox" id="edge" name="web-browser" value="edge">
                            <label for="edge">Edge</label>
                        </div>
                        <div>
                            <input type="checkbox" id="safari" name="web-browser" value="safari">
                            <label for="safari">Safari</label>
                        </div>
                    </fieldset>
                    <br><br>
                    <table>
                        <tr>
                            <td>
                                <label for="movie-genres">Select a movie genre:</label>
                            </td>
                            <td>
                                <select name="movie-genres" class="full-width-black-background thin-white-border" id="movie-genres">
                                    <option value="">-- Select Genre --</option>
                                    <option value="action">Action</option>
                                    <option value="comedy">Comedy</option>
                                    <option value="drama">Drama</option>
                                    <option value="documentary">Documentary</option>
                                    <option value="science-fiction">Science Fiction</option>
                                </select>
                            </td>
                        </tr>
                    </table>
                    <br><br>
                    <div class="center-child-elements">
                        <input type="submit" id="submitUserData" value="SUBMIT">
                        <input type="reset" value="RESET" id="resetInputs">
                    </div>
                </form>
            </section>
            <section class="hw5-section">
                <h3>Results</h3>
                <textarea class="black-background-white-text thin-white-border" rows="5" cols="40" name="result" id="result"></textarea>
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

    $("#myform").validate({
        rules: {
            "fullname": {
                required: true,
            },
            "age-group": {
                required: true,
            },
            "web-browser": {
                required: true,
            },
            "movie-genres": {
                required: true
            }
        },
        messages: {
            "fullname": {
                required: "Fullname is required.",
            },
            "age-group": {
                required: "Please select one age group.",
            },
            "web-browser": {
                required: "Please select at least one brower.",
            },
            "movie-genres": {
                required: "Please select your favorite movie genre."
            }
        },
        submitHandler: function(form) {
            displayResults();
        },
        errorPlacement: function (error, element) {
            $("#result").val(`${$("#result").val()}${error.text()}\n`)
        }
    });

    $("#submitUserData").click(function() {
        $("#result").val("");
    });

    function displayResults() {
        $("#result").val("Thanks, your data was submitted!");
    }

    $("#resetInputs").click(function() {
        $("#result").val("");
    });
});