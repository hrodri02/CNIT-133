$(document).ready(function() {
    setupPage({"hw_number": 8, "hw_title": "AJAX Application"});
    addUniquePageContent();

    function addUniquePageContent() {
        document.getElementsByClassName("content-container")[0].innerHTML += `
            <section class="hw8-section">
                <h3>GET</h3>
                <button id="cd-collection">Get CD collection</button>
                <br><br>
                <table id="demo"></table>
            </section>
            <section class="hw8-section">
                <h3>Explanation of AJAX</h3>
                <p>
                When the button is clicked the loadDoc function is called. In that function an
                XMLHttpRequest object is created in the first line. In the second line the onload
                property of the XMLHttpRequest object is set to a function that calls myFunction,
                passing "this" as the argument, which in this case is the XMLHttpRequest object.
                The next instruction calls the open method of the XMLHttpRequest object which 
                initializes a new GET request to fetch the file cd_catalog.xml. The last line of
                this function calls the send method of the XMLHttpRequest object which actually
                sends the HTTP GET request.
                </p>
                <p>
                The myFunction is called when we get back a response for the HTTP GET request.
                The first line of the myFunction gets the responseXML property of the xml object,
                which I am assuming is an object representing the contents of the xml file we
                fetched. The next line, gets all elements with the CD tag and stores them in the
                constant x. The foor loop iterates through each CD element, gets the artist and
                title of the current CD, and adds them as a new row in the table. 
                </p>
            </section>
        `;
    }

    $("#menu-bar").click(function() {
        $(".vertical-nav-bar").toggle();
    });

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

    $("#cd-collection").click(function() {
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
            myFunction(this);
        }
        xhttp.open("GET", "cd_catalog.xml");
        xhttp.send();
    });

    function myFunction(xml) {
        const xmlDoc = xml.responseXML;
        const x = xmlDoc.getElementsByTagName("CD");
        let table="<tr><th>Artist</th><th>Title</th></tr>";
        for (let i = 0; i <x.length; i++) { 
            table += "<tr><td>" +
            x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
            "</td></tr>";
        }
        document.getElementById("demo").innerHTML = table;
    }
});