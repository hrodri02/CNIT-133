$(document).ready(function() {
    setupPage({"hw_number": 4, "hw_title": "Looping Statements"});
    addUniquePageContent();

    function addUniquePageContent() {
        document.getElementsByClassName("content-container")[0].innerHTML += `
<section id="hw4-section">
                <h3>HW 4 Part 1</h3>
                <div id="problem-container-1" class="problem-container column-flex-direction">
                    <div class="container-for-perfect-centering">
                        <h4>The sum and product of every fourth integer between 5 to 25 (inclusive)</h4>
                    </div>
                    <div class="row-flex-direction">
                        <div class="loop-problem-container container-for-perfect-centering">
                            <pre>
                                <code>
let sum = 0;
let product = 1;

for (let i = <div id="area1" class="droppable"></div>; i &lt;= <div id="area2" class="droppable"></div>; i += <div id="area3" class="droppable"></div>) {
    sum += arr[i];
    product *= arr[i];
}
                                </code>
                            </pre>
                        </div>
                        <div class="results-area">
                            <p id="first-sum-product"></p>
                        </div>
                    </div>
                    <div class="column-flex-direction">
                        <p>Drag the elements to the right place to get the sum and product.</p>
                        <div id='draggable-container-1' class="draggable-container row-flex-direction space-around">
                            <div id="start-1" class="draggable">
                                <p>5</p>
                            </div>
                            <div id="end-1" class="draggable">
                                <p>25</p>
                            </div>
                            <div id="step-1" class="draggable">
                                <p>4</p>
                            </div>
                        </div>
                        <button id="reset-first-problem" class="reset-button">Reset</button>
                    </div>
                </div>
                <hr class="full-width-black-background">
                <div id="problem-container-2" class="problem-container column-flex-direction">
                    <div class="container-for-perfect-centering">
                        <h4>The sum and product of every third integer between 3 to 18 (inclusive)</h4>
                    </div>
                    <div class="row-flex-direction">
                        <div class="loop-problem-container container-for-perfect-centering">
                            <pre>
                                <code>
let sum = 0;
let product = 1;

let i = <div id="area4" class="droppable"></div>;
while (i &lt;= <div id="area5" class="droppable"></div>;) {
    sum += arr[i];
    product *= arr[i];
    i += <div id="area6" class="droppable"></div>
}
                                </code>
                            </pre>
                        </div>
                        <div class="results-area">
                            <p id="second-sum-product"></p>
                        </div>
                    </div>
                    <div class="column-flex-direction">
                        <p>Drag the elements to the right place to get the sum and product.</p>
                        <div id="draggable-container-2" class="draggable-container flex-container row-flex-direction space-around">
                            <div id="start-2" class="draggable">
                                <p>3</p>
                            </div>
                            <div id="end-2" class="draggable">
                                <p>18</p>
                            </div>
                            <div id="step-2" class="draggable">
                                <p>3</p>
                            </div>
                        </div>
                        <button id="reset-second-problem" class="reset-button">Reset</button>
                    </div>
                </div>
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

    function displayResultsOfFirstProblem() {
        const {firstSumString, firstProductString} = calculateFirstSumProductString();
        document.getElementById("first-sum-product").innerText = `${firstSumString}\n${firstProductString}`;
    }

    function displayResultsOfSecondProblem() {
        const {secondSumString, secondProductString} = calculateSecondSumProductString();        
        document.getElementById("second-sum-product").innerText = `${secondSumString}\n${secondProductString}`;
    }

    function displayErrorMessageInFirstProblem() {
        document.getElementById("first-sum-product").innerText = "Sorry, that is not the correct solution. Try again!";
    }

    function clearTextInFirstProblem() {
        document.getElementById("first-sum-product").innerText = "";
    }

    function displayErrorMessageInSecondProblem() {
        document.getElementById("second-sum-product").innerText = "Sorry, that is not the correct solution. Try again!";
    }

    function clearTextInSecondProblem() {
        document.getElementById("second-sum-product").innerText = "";
    }

    function calculateFirstSumProductString() {
        let firstSumString = "The result of ";
        let firstSum = 0;
        let firstProductString = "The result of ";
        let firstProduct = 1;
        const max1 = 25;
        const step1 = 4;
        for (let curr = 5; curr <= max1; curr += step1) {
            firstSum += curr;
            firstSumString += curr;
            firstSumString += (curr < max1)? " + " : ` is ${firstSum}`;
            firstProduct *= curr;
            firstProductString += curr;
            firstProductString += (curr < max1)? " * " : ` is ${firstProduct.toLocaleString()}`;
        }
        return {firstSumString, firstProductString};
    }

    function calculateSecondSumProductString() {
        let secondSumString = "The result of ";
        let secondSum = 0;
        let secondProductString = "The result of ";
        let secondProduct = 1;
        let curr = 3;
        const max2 = 18;
        const step2 = 3;
        while (curr <= max2) {
            secondSum += curr;
            secondSumString += curr;
            secondSumString += (curr < max2)? " + " : ` is ${secondSum}`;
            secondProduct *= curr;
            secondProductString += curr;
            secondProductString += (curr < max2)? " * " : ` is ${secondProduct.toLocaleString()}`;
            curr += step2;
        }
        return {secondSumString, secondProductString};
    }

    $(".draggable").draggable({
        revert: "invalid", 
        start: function(event, ui) {
            $(this).data("startPos", { left:0, top:0 });
        }
     });

     $("#draggable-container-1").children('.draggable').each(function() {
        $(this).draggable({
            containment: "#problem-container-1"
        });
     });

     $("#draggable-container-2").children('.draggable').each(function() {
        $(this).draggable({
            containment: "#problem-container-2"
        });
     });

    let spotAvailable = {'draggable-container-1': [true, true, true], 
                        'draggable-container-2': [true, true, true]};
    let draggablePos = {'start-1': -1, 'end-1': -1, 'step-1': -1, 
                        'start-2': -1, 'end-2': -1, 'step-2': -1};
    const indexOfArea = {'area1': 0, 'area2': 1, 'area3': 2,
                        'area4': 0, 'area5': 1, 'area6': 2};
    $(".droppable").droppable({
        accept: ".draggable",
        start: function(event, ui) {
            $(this).data("middle", {left: 0, top: 0});
            console.log($(this).data("middle"));
        },
        drop: function(event, ui) {
            // Check if the droppable already has a draggable
            const droppableID = $(this).attr('id');
            const index = indexOfArea[droppableID];
            const draggableContainerID = ui.draggable.parent().attr('id');
            if (!spotAvailable[draggableContainerID][index]) {
                const startPos = ui.draggable.data("startPos");
                ui.draggable.animate(startPos, "slow");
                return false; // Prevent the drop if already occupied
            }

            ui.draggable.position({
                my: "center",
                at: "center",
                of: $(this),
                using: function(pos) {
                  $(this).animate(pos, 200, "linear");
                }
            });
            ui.draggable.draggable("disable");
            const id = ui.draggable.attr("id");
            draggablePos[id] = index;
            spotAvailable[draggableContainerID][index] = false;
            if (allSpotsFilled(draggableContainerID)) {
                if (draggableContainerID === 'draggable-container-1') {
                    if (isSolutionCorrect(draggableContainerID)) {
                        displayResultsOfFirstProblem();
                    }
                    else {
                        displayErrorMessageInFirstProblem();
                    }
                }
                else {
                    if (isSolutionCorrect(draggableContainerID)) {
                        displayResultsOfSecondProblem();
                    }
                    else {
                        displayErrorMessageInSecondProblem();
                    }
                }
            }
        }
    });

    function allSpotsFilled(draggableContainerID) {
        for (let i = 0; i < spotAvailable[draggableContainerID].length; i++) {
            if (spotAvailable[draggableContainerID][i])
                return false;
        }
        return true;
    }

    function isSolutionCorrect(draggableContainerID) {
        if (draggableContainerID === 'draggable-container-1')
            return draggablePos["start-1"] == 0 && draggablePos["end-1"] == 1 && draggablePos["step-1"] == 2;
        return draggablePos["start-2"] == 0 && draggablePos["end-2"] == 1 && draggablePos["step-2"] == 2;
    }

    $("#reset-first-problem").click(function() {
        $("#draggable-container-1").children('.draggable').each(function () {
            resetResultsOfProblem($(this), 'draggable-container-1');
        });
    });

    $("#reset-second-problem").click(function() {
        $("#draggable-container-2").children('.draggable').each(function () {
            resetResultsOfProblem($(this), 'draggable-container-2');
        });
    });

    function resetResultsOfProblem(draggable, draggableContainerID) {
        const startPos = draggable.data("startPos");
        draggable.animate(startPos, "slow");
        draggable.draggable("enable");
        const id = draggable.attr("id");
        const index = draggablePos[id];
        spotAvailable[draggableContainerID][index] = true;
        draggablePos[id] = -1;
        (draggableContainerID === 'draggable-container-1')? clearTextInFirstProblem() : clearTextInSecondProblem();
    }
});