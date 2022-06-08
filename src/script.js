var currentGrade = 0.0;
var possiblePointsAssignment = 0;
var weight = 0;
var possiblePointsCategory = 0.0;
var currentPointsCategory = 0.0;

var otherGrades = 0.0;

var lowestPoints = 0.0;
var lowestPercent = 0.0;
var percentWithHighScore = 0.0;
var percentWithLowScore = 0.0;



function calculate() {
    // take input from html form
    getInput();
    caclulateOther()
    // finds lowest possible score you can get
    lowestPoints = minimizePossibleScore(possiblePointsAssignment);

    // finds percent on assignment low score
    lowestPercent = lowestPoints / possiblePointsAssignment;

    // finds the highest class percentage you can possibly achieve
    percentWithHighScore = calculatePercent(possiblePointsAssignment);
    percentWithLowScore = calculatePercent(lowestPoints);

    // round everything to two decimal places    
    document.getElementById(output).innerHTML = "hello";

}


// take input from html form
function getInput() {
    currentGrade = document.getElementById("currentGrade").value;
    possiblePointsAssignment = document.getElementById("possiblePointsAssignment").value;
    weight = document.getElementById("weight").value;
    possiblePointsCategory = document.getElementById("possiblePointsCategory").value;
    currentPointsCategory = document.getElementById("currentPointsCategory").value;
}

// calculate other categories grade
function caclulateOther() {
    if (weight != 100) {
        otherGrades = currentGrade - (currentPointsCategory / possiblePointsCategory) * weight;
    }
}

// calculate percent in the class based on points on the assignment
function calculatePercent(points) {
    return ((points + currentPointsCategory) / (possiblePointsAssignment + possiblePointsCategory) * weight) + otherGrades;
}

// round to n decimal places using scientific notation
function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}

//minimize possible score you can get
function minimizePossibleScore(possiblePointsAssignment) {
    var currentLowestPoints = possiblePointsAssignment;
    var percentWithLowScore = 100.0;

    for (var i = possiblePointsAssignment; i >= 0; i -= 0.1) {

        var newGrade = calculatePercent(i);
        if (newGrade < 90) {
            break;
        }
        percentWithLowScore = calculatePercent(i);
        currentLowestPoints = i;

    }
    return lowestPoints;
}

function reset() {
    document.getElementById("currentGrade").value = "";
    document.getElementById("possiblePointsAssignment").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("possiblePointsCategory").value = "";
    document.getElementById("currentPointsCategory").value = "";
}