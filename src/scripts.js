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

// calculate percent in the class based on points on the assignment
function calculatePercent(points) {
}

// round to n decimal places
function round(value, decimals) {
}

// calculate other grades
function caclulateOther() {
    if (weight != 100) {
}
}

