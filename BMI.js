//whenever input sth, calculate the bmi immediately
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var result = document.getElementById("result");
var submit = document.getElementById("submit");

submit.addEventListener("click", calculation)

function calculation() {

    var inputHeight = parseFloat(height.value) || 0;
    var inputWeight = parseFloat(weight.value) || 0;

    if(inputHeight==0 && inputWeight==0){
        alert("Please input correct height and weight!");
        return;

    }
    var outputResult = inputWeight / (inputHeight * inputHeight);

    outputResult = outputResult.toFixed(3);
    
    result.innerHTML = "Your BMI is: " + outputResult;
}
