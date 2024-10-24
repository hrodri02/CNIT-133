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

    $("#submitUserData").click(function() {
        const textarea = document.getElementById("result");
        try {
            validateUserData();
            textarea.innerText = "Thanks, your data was submitted!";
            document.forms["myform"].reset();
        } 
        catch (error) {
            textarea.innerText = error.message;
        }
    });

    function validateUserData() {
        const fullname = document.forms["myform"].elements["fullname"].value;
        if (fullname.length === 0) {
            throw new Error("Full name is required");
        }
        
        const lessThan21 = document.getElementById("less-than-21");
        const between21and50 = document.getElementById("21-50");
        const olderThan50 = document.getElementById("older-than-50");
        if (!(lessThan21.checked || between21and50.checked || olderThan50.checked)) {
            throw new Error("Age group is required");
        }

        const chrome = document.getElementById("chrome");
        const firefox = document.getElementById("firefox");
        const edge = document.getElementById("edge");
        const safari = document.getElementById("safari");
        if (!(chrome.checked || firefox.checked || edge.checked || safari.checked)) {
            throw new Error("You must select at least one browser");
        }

        const selectedGenre = document.forms["myform"].elements["movie-genres"].value;
        if (selectedGenre === "") {
            throw new Error("You must select your favorite movie genre.");
        }
    }

    $("#resetInputs").click(function() {
        const textarea = document.getElementById("result");
        textarea.innerText = "";
    });
});