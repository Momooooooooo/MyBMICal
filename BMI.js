//whenever input sth, calculate the bmi immediately
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var result = document.getElementById("result");

height.addEventListener("input", calculation);
weight.addEventListener("input", calculation);

function calculation() {
    var inputHeight = parseFloat(height.value) || 0;
    var inputWeight = parseFloat(weight.value) || 0;

    var outputResult = inputWeight / (inputHeight * inputHeight);

    outputResult = outputResult.toFixed(3);

    result.innerHTML = "Your BMI is: " + outputResult;
}
