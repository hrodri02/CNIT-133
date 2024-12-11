$(document).ready(function() {
    setupPage({"hw_number": 8, "hw_title": "AJAX Application"});
    addUniquePageContent();

    function addUniquePageContent() {
        document.getElementsByClassName("content-container")[0].innerHTML += `
            <section class="hw8-section" id="api-description">
                <h3>REST API</h3>
                <p>I recommend that we use the free Fake JSON API to test our frontend code with
                fake data. Through this API, we can get fake data about books, poeople,
                currencies, and pokemon. We can test pages that show a list of objects or 
                individual objects fetch data correctly and populate the the UI elements
                with this data. When our backend team finishes the first version of the API
                we can just change the URLs in the requests sent, so that we get back our
                application data. The API does not require any key to access it and the format
                of the response is in JSON. If we use jQuery and AJAX, then we will automatically
                get the a Javascript object in the callback function. Here is a
                <a href="https://softwium.com/fake-api/?ref=freepublicapis.com">link</a> 
                to their documenation, so that we can start learning how to use their API.
                </p>
            </section>
            <section class="hw8-section">
                <h3>Request One Object</h3>
                <p>The examples below show three different ways to make a GET request to fetch the 
                data of a person with id = 1. The first example uses AJAX with jQuery, second
                example uses the Fetch API without async/await, and the last example uses the Fetch
                API with async and await. I am hardcoding the url in the examples, but we can use
                string interpolation to fetch any person given the id.
                </p>
                <pre>
                <code>
function getPersonAjax(id) {
    const url = "https://softwium.com/api/peoples/1";
    $.ajax({
        url: url,
        type: "GET",
        success: function(data) {
            // do something with the data
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // handle error
        }
    });
}

function getPerson(id) {
    const url = "https://softwium.com/api/peoples/1";
    fetch(url)
        .then((res) =>{
            if (!res.ok) {
                throw new Error(// some error message);
            }
            return res.json();
        })
        .then((data) => {
            // do something with the data
        })
        .catch((error) => {
            // handle error
        });
}

async function getPersonAsyncAwait(id) {
    const url = "https://softwium.com/api/peoples/1";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(// some error message);
        }
        const data = await response.json();
        // do something with the data
    } catch (error) {
        // handle error
    }
}
                </code>
                </pre>
                <h3>Response</h3>
                <p>Regardless of what method we choose they all provide error handling, the
                structure of each is similar, and we get the response shown below. The nice 
                thing about the Fetch API, though, is that it is built-in into JavaScript, 
                so there is no need for an external library.
                </p>
                <pre><code id="person"></code></pre>
                <h3>Request a List of Objects</h3>
                <p>If we remove the id from our request, then we can get a list of people.
                Notice that I also used the limit query parameter with a value of five to
                limit the size of the array returned.
                </p>
                <pre><code>
$.get("https://softwium.com/api/peoples?limit=5", 
    function(data) {
        // do something with the data
    }
);
                </code></pre>
                <h3>Response</h3>
                <pre><code id="people-list"></code></pre>
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

    function getPersonAjax(id) {
        const url = `https://softwium.com/api/peoples/${id}`;
        $.ajax({
            url: url,
            type: "GET",
            success: function(data) {
                const json = JSON.stringify(data, null, 2);
                $("#person").html(json);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                // Handle error
                console.error(textStatus, errorThrown);
            }
        });
    }

    function getPerson(id) {
        const url = `https://softwium.com/api/peoples/${id}`;
        fetch(url)
            .then((res) =>{
                if (!res.ok) {
                    throw new Error(`Response status: ${response.status}`);
                }
                return res.json();
            })
            .then((json) => {
                console.log(typeof json);
                console.log(json);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    async function getPersonAsyncAwait(id) {
        const url = `https://softwium.com/api/peoples/${id}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
              throw new Error(`Response status: ${response.status}`);
            }
            
            const obj = await response.json();
            const json = JSON.stringify(obj, null, 2);
            $("#person").html(json);
        } catch (error) {
            console.error(error.message);
        }
    }

    getPersonAsyncAwait(1);

    $.get("https://softwium.com/api/peoples?limit=5", function(data) {
        const json = JSON.stringify(data, null, 2);
        document.getElementById("people-list").innerHTML = json;
    });
});