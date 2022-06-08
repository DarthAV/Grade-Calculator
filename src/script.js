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
    caclulateOther();
    // finds lowest possible score you can get
    lowestPoints = minimizePossibleScore(possiblePointsAssignment);

    // finds percent on assignment low score
    lowestPercent = lowestPoints / possiblePointsAssignment;

    // finds the highest class percentage you can possibly achieve
    percentWithHighScore = calculatePercent(possiblePointsAssignment);
    percentWithLowScore = calculatePercent(lowestPoints);

    // display results
    document.getElementById("lowGrade").innerHTML = lowestPoints + "/" + possiblePointsAssignment;
    document.getElementById("lowPercent").innerHTML = round(lowestPercent, 2);
    document.getElementById("gradeWithLowScore").innerHTML = round(percentWithLowScore, 2);
    document.getElementById("gradeWithHighScore").innerHTML = round(percentWithHighScore, 2);

}


// take input from html form
function getInput() {
    // currentGrade = document.getElementById("currentGrade").value;
    // possiblePointsAssignment = document.getElementById("possiblePointsAssignment").value;
    // weight = document.getElementById("weight").value;
    // possiblePointsCategory = document.getElementById("possiblePointsCategory").value;
    // currentPointsCategory = document.getElementById("currentPointsCategory").value;

    // value presets for testing
    currentGrade = 96.4;
    possiblePointsAssignment = 500;
    weight = 40;
    possiblePointsCategory = 590;
    currentPointsCategory = 552;
}

// calculate other categories' grade
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

// minimize possible score you can get
function minimizePossibleScore(possiblePointsAssignment) {
    var currentLowestPoints = possiblePointsAssignment;
    var percentWithLowScore = 100.0;

    for (var i = possiblePointsAssignment; i >= 0; i -= 0.1) {

        var newGrade = calculatePercent(i);
        if (newGrade < 90) {
            break;
        }
        percentWithLowScore = newGrade;
        currentLowestPoints = i;

    }
    return lowestPoints;
}

// reset input fields to blank values
function reset() {
    document.getElementById("currentGrade").value = "";
    document.getElementById("possiblePointsAssignment").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("possiblePointsCategory").value = "";
    document.getElementById("currentPointsCategory").value = "";
    document.getElementById("lowGrade").innerHTML = "___/___";
    document.getElementById("lowPercent").innerHTML = "___";
    document.getElementById("gradeWithLowScore").innerHTML = "___";
    document.getElementById("gradeWithHighScore").innerHTML = "___";
}