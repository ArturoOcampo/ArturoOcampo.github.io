//gathers the two input values from the weather summary
var temperature = parseInt(document.getElementById('Output-Temperature').value);
var WindSpeed = parseInt(document.getElementById('Output-WindSpeed').value);

//calculates the windchill value
var WindChill = (0.0817*(3.71*(Math.pow(WindSpeed, 0.5))+
5.81-0.25*WindSpeed)*(temperature-91.4)+91.4);

//outputs the result to the new line item in the weather summary
document.getElementById('Output-CurrentConditions').innerHTML = WindChill;