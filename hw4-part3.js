$(document).ready(function() {
    setupPage({"hw_number": 4, "hw_title": "Looping Statements"});
    addUniquePageContent();

    function addUniquePageContent() {
        document.getElementsByClassName("content-container")[0].innerHTML += `
            <section id="hw4-section">
                <h3>Display a Square</h3>
                <form name="myform" id="hw4-part3-form">
                    <table>
                        <tr>
                            <td><label for='side-length' id="side-length-label">Enter a side length between 2 and 10 (inclusive):</label></td>
                            <td><input class="full-width-black-input" type="number" name="side-length" id="side-length" style='text-align:right;'></td>
                        </tr>
                    </table>
                    <br>
                    <pre>
                        <p id="drawing-area"></p>
                    </pre>
                    <div id="drawing-area-2"></div>
                    <br>
                    <div>
                        <input type="submit" id="drawSquare" value="DRAW SQUARE">
                        <input type="reset" id="resetDrawingArea" value="RESET">
                    </div>
                </form>
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

    const validator = $("#hw4-part3-form").validate({
        rules: {
            "side-length": {required: true, number: true, min: 2, max: 10, step: 1}
        },
        messages: {
            "side-length": {
                required: "Please enter a side length",
                number: "Please enter a number",
                min: "The smallest valid side length is 2",
                max: "The largest valid side length is 10",
                step: "The side length must be an integer"
            }
        },
        submitHandler: function(form) {
            getSideLengthAndDrawSquare();
        },
        invalidHandler: function() {
            const div = document.getElementById("drawing-area-2");
            div.innerHTML = '';
        }
    });

    function getSideLengthAndDrawSquare() {
        const sideLength = parseInt(document.forms["myform"].elements["side-length"].value);
        drawSquareUsingTable(sideLength);
    }

    function drawSquareUsingParagraph(sideLength) {
        const p = document.getElementById("drawing-area");
        p.innerText = "";
        for (let i = 0; i < sideLength; i++) {
            if (i === 0 || i === sideLength - 1)
                p.innerText += "*".repeat(sideLength);
            else {
                const emptySpace = "\u00A0".repeat(sideLength - 2);
                p.innerText += ("*" + emptySpace + "*");
            }
            p.innerText += "\n";
        }
    }

    function drawSquareUsingTable(sideLength) {
        const div = document.getElementById("drawing-area-2");
        div.innerHTML = `
            <table id="square-table">
                <tbody id="square-table-body">
                </tbody>
            </table>
        `;
        const container = document.getElementById("square-table-body");
        for (let row = 0; row < sideLength; row++) {
            container.innerHTML +=  `
                <tr id="row-${row}"></tr>
            `;
            for (let col = 0; col < sideLength; col++) {
                const currRow = document.getElementById(`row-${row}`);
                if (row > 0 && row < sideLength - 1 && col > 0 && col < sideLength - 1)
                    currRow.innerHTML += `<td> </td>`;
                else
                    currRow.innerHTML += `<td>*</td>`;
            }
        }
    }

    $("#resetDrawingArea").click(function() {
        const p = document.getElementById("drawing-area");
        p.innerText = "";
        const div = document.getElementById("drawing-area-2");
        div.innerHTML = "";
        validator.resetForm();
    });
});