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
});