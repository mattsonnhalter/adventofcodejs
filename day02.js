//read input from file
var inputDimension = "4x23x21";



//function to calculate the surface area of box and also determine the smallest surface area, returning the total ft 
function CalculateSurfaceAreaAndSlack(element, index, array, inputDimension){
    var inputDimensionArray = inputDimension.split("x");
    var length = inputDimensionArray[0];
    var width = inputDimensionArray[1];
    var height = inputDimensionArray[2];


}


function CalculateSurfaceArea(length, width, height){
    var result = 0;
    var lengthResult = 2*(length * width);
    var widthResult = 2*(width * height);
    var heightResult = 2*(length * width);

    var result = lengthResult + widthResult + heightResult;
    result = result + Math.min(lengthResult, widthResult, heightResult);
}

//iterate through function for each input and add to a total feet variable
console.log(result);