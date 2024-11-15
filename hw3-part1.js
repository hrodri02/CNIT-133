$(document).ready(function() {
    setupPage({"hw_number": 3, "hw_title": "Functions"});
    addUniquePageContent();

    function addUniquePageContent() {
        document.getElementsByClassName("content-container")[0].innerHTML += `
            <section id="hw3-section">
                <h3>Calculate a Student's Grade</h3>
                <form name="myform">
                    <table>
                        <tr>
                            <td><label for='hwAvg'>Homework Average</label></td>
                            <td><input type="number" name="hwAvg" id="hwAvg" value="0" style='text-align:right;'></td>
                        </tr>
                        <tr>
                            <td><label for='midterm'>Midterm Grade</label></td>
                            <td><input type="number" name="midterm" id="midterm" value="0" style='text-align:right;'></td>
                        </tr>
                        <tr>
                            <td><label for='finalExam'>Final Exam Grade</label></td>
                            <td><input type="number" name="finalExam" id="finalExam" value="0" style='text-align:right;'></td>
                        </tr>
                        <tr>
                            <td><label for='participation'>Participation Grade</label></td>
                            <td><input type="number" name="participation" id="participation" value="0" style='text-align:right;'></td>
                        </tr>
                    </table>
                    <br><label>Results</label><br>
                    <textarea rows="3" cols="40" name="result" id="result"></textarea>
                    <br><br>
                    <input type="button" id="calculateFinalGrade" value="SUBMIT">
                    <input type="reset" value="RESET">
                </form>
            </section>
        `;
    }

    // update the selected page in the nav bar
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

    $("#calculateFinalGrade").click(function() {
        const hwAvg = parseInt(document.forms["myform"].elements["hwAvg"].value);
        const midterm = parseInt(document.forms["myform"].elements["midterm"].value);
        const finalExam = parseInt(document.forms["myform"].elements["finalExam"].value);
        const participation = parseInt(document.forms["myform"].elements["participation"].value);
        
        const textarea = document.forms["myform"].elements["result"];
        try {
            validateInputs(hwAvg, midterm, finalExam, participation);
            const finalGrade = calculateFinalGrade(hwAvg, midterm, finalExam, participation);
            const letterGrade = getLetterGrade(finalGrade);
            displayResults(textarea, finalGrade, letterGrade);
        }
        catch (error) {
            displayErrorMessage(textarea, error.message);
        }
    });
});

function validateInputs(hwAvg, midterm, finalExam, participation) {
    if (!isIntegerBetweenZeroAndOneHundred(hwAvg))
        throw new Error("Error: homework average must be an integer between 0 and 100.");

    if (!isIntegerBetweenZeroAndOneHundred(midterm))
        throw new Error("Error: midterm grade must be an integer between 0 and 100.");

    if (!isIntegerBetweenZeroAndOneHundred(finalExam))
        throw new Error("Error: final exam grade must be an integer between 0 and 100.");

    if (!isIntegerBetweenZeroAndOneHundred(participation))
        throw new Error("Error: participation grade must be an integer between 0 and 100.");
}

function isIntegerBetweenZeroAndOneHundred(num) {
    return !Number.isNaN(num) && num >= 0 && num <= 100;
}

function displayErrorMessage(textarea, err_msg) {
    textarea.value = err_msg;
}

function displayResults(textarea, finalGrade, letterGrade) {
    textarea.value = `Final Average: ${finalGrade}\nFinal Letter Grade: ${letterGrade}`;
    if (didFailClass(letterGrade))
        textarea.value += "\nStudent must retake the course.";
}

function calculateFinalGrade(hwAvg, midterm, finalExam, participation) {
    return Math.round((.5 * hwAvg) + (.2 * midterm) + (.2 * finalExam) + (.1 * participation));
}

function getLetterGrade(grade) {
    switch (true) {
        case grade < 60:
            return 'F';
        case grade < 70:
            return 'D';
        case grade < 80:
            return 'C';
        case grade < 90:
            return 'B';
        default:
            return 'A';
    }
}

function didFailClass(letterGrade) {
    return letterGrade === "D" || letterGrade === "F";
}