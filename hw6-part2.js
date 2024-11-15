$(document).ready(function() {
    setupPage({"hw_number": 6, "hw_title": "Objects"}, document);
    addUniquePageContent();

    function addUniquePageContent() {
        document.getElementsByClassName("content-container")[0].innerHTML += `
            <section class="hw6-section half-screen-width">
                <h3>Input Text and Character</h3>
                <form class="align-center" id="searchCharacterForm">
                    <table>
                        <tr>
                            <td>
                                <label for="long-text">Enter some text:</label>
                            </td>
                            <td>
                                <textarea class="black-background-white-text thin-white-border" rows="8" cols="50" name="input-text" id="long-text" placeholder="Enter some text"></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label for="character">Enter a character:</label>
                            </td>
                            <td>
                                <input class="full-width-black-input" type="text" name="character" id="character" placeholder="Enter a character" maxlength="1">
                            </td>
                        </tr>
                    </table>
                    <br>
                    <br>
                    <div class="center-child-elements">
                        <input type="button" id="searchForCharacter" value="SUBMIT">
                        <input type="reset" value="RESET" id="reset">
                    </div>
                </form>
            </section>
            <section class="hw6-section half-screen-width">
                <h3>Results</h3>
                <textarea class="black-background-white-text thin-white-border" rows="6" cols="50" name="result" id="result"></textarea>
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

    $("#searchForCharacter").click(function() {
        const longText = $("#long-text").val();
        const c = $("#character").val();
        const occurrences = countOccurrencesOfCharacterInString(longText, c.toLowerCase());
        
        if (occurrences > 0) {
            $("#result").val(`'${c}' appears ${occurrences} times in the long text.`);
        }
        else {
            $("#result").val("");
            openNewWindowWithMessage(`Search character '${c}' not found in the content you typed!`);
        }
    });

    function countOccurrencesOfCharacterInString(text, c) {
        let occurrences = 0;
        for (let i = 0; i < text.length; i++) {
            const curr = text.charAt(i).toLowerCase();
            if (curr === c) {
                occurrences += 1;
            }
        }
        return occurrences;
    }

    function openNewWindowWithMessage(message)
    {
        // assemble HTML to pump into new window:
        var myText = "<!DOCTYPE html>\n";
        myText += "<html lang='en'>\n";
        myText += "<head>\n";
        myText += "<title>Popup Window</title>\n";
        myText += "</head>\n";
        myText += "<body>\n";
        myText += "<div style='margin:0 auto;'>\n";
        myText += `<p><strong>${message}</strong></p>\n`;
        myText += "<input type='button' value='Close Window' onclick='window.close()'>\n";
        myText += "</div>\n";
        myText += "</body>\n";
        myText += "</html>";
        // open window on the upperleft of the screen
        var newWindow = window.open("", "new_window",
        "top=1,left=1,width=300,height=100");
        newWindow.opener = null;   // this is for security!!!
        // have browser focus on window
        newWindow.focus();
        // pump html into to this new opened window
        newWindow.document.write(myText);
        // tell browser that newWindow document is finished loading
        newWindow.document.close();
    }

    $("#reset").click(function() {
        $("#result").val("");
    });
});