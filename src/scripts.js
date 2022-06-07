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

    // finds lowest possible score you can get
    lowestPoints = minimizePossibleScore(possiblePointsAssignment);

    // finds percent on assignment low score
    lowestPercent = lowestPoints / possiblePoints;

    // finds the highest class percentage you can possibly achieve
    percentWithHighScore = calculatePercent(possiblePoints);
    percentWithLowScore = CalculatePercent(lowestPoints);

    // round everything to two decimal places    


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
    return ((points + currentPointsCat) / (possiblePointsCat + possiblePoints) * weight) + otherGrades;
}

// round to n decimal places
function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}

//minimize possible score you can get
function minimizePossibleScore(possiblePoints) {
    var currentLowestPoints = possiblePoints;
    var percentWithLowScore = 100.0;

    for (var i = possiblePoints; i >= 0; i -= 0.1) {

        var newGrade = calculatePercent(i);
        if (newGrade < 90) {
            break;
        }
        percentWithLowScore = calculatePercent(i);
        currentLowestPoints = i;

    }
    return lowestPoints;
}