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