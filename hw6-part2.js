$(document).ready(function() {
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