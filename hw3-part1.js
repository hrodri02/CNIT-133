$(document).ready(function() {
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
        throw Error("Error: homework average must be an integer between 0 and 100.");

    if (!isIntegerBetweenZeroAndOneHundred(midterm))
        throw Error("Error: midterm grade must be an integer between 0 and 100.");

    if (!isIntegerBetweenZeroAndOneHundred(finalExam))
        throw Error("Error: final exam grade must be an integer between 0 and 100.");

    if (!isIntegerBetweenZeroAndOneHundred(participation))
        throw Error("Error: participation grade must be an integer between 0 and 100.");
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