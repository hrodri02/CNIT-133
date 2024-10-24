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

   const stateInfo = [
        ["AL", "Alabama", "Montgomery", 4903185],
        ["AK", "Alaska", "Juneau", 731545],
        ["AZ", "Arizona", "Phoenix", 7278717],
        ["AR", "Arkansas", "Litte Rock", 3017825],
        ["CA", "California", "Sacramento", 39512223],
        ["CO", "Colorado", "Denver", 5758736],
    ];

    $("#submitStateName").click(function() {
        const textarea = document.getElementById("result");
        try {
            validateStateName();
            const index = findIndexOfState();
            const info = stateInfo[index];
            textarea.value = `State Abbreviation: ${info[0]}\nState Name: ${info[1]}\nState Capital: ${info[2]}\nState Population: ${info[3].toLocaleString()}`;
        }
        catch (error) {
            textarea.value = error.message;
        }
    });

    $("#reset").click(function() {
        const textarea = document.getElementById("result");
        textarea.value = "";
    });

    function validateStateName() {
        const name = document.forms["myform"].elements["state"].value.trim();
        if (name.length === 0)
            throw new Error("State name is required");
    }

    function findIndexOfState() {
        const name = document.forms["myform"].elements["state"].value.trim();
        const nameLowerCase = name.toLocaleLowerCase();
        let index = -1;
        for (let row = 0; row < stateInfo.length; row++) {
            const currStateInitials = stateInfo[row][0].toLocaleLowerCase();
            const currStateFullName = stateInfo[row][1].toLocaleLowerCase();

            if (nameLowerCase === currStateInitials || nameLowerCase === currStateFullName) {
                index = row;
                break;
            }
        }

        if (index < 0) {
            const stateNames = getStateNames();
            throw new Error(`Sorry, we do not have any information about that state in our database. We only have information about ${stateNames}.`);
        }

        return index;
    }

    function getStateNames() {
        let states = "";
        for (let i = 0; i < stateInfo.length; i++)
            states += stateInfo[i][1] + ((i == stateInfo.length - 1)? "" : ", ");
        return states;
    }
});