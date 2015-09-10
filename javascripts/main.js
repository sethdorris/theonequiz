var Planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

var vanillaElement = document.getElementById("vanilla_output");
vanillaElement.innerHTML = "This content generated with vanilla JavaScript";
$("#jquery_output").html("This content generated with jQuery");

function modulus(num1, num2) {
	return num1 % num2;
}

console.log("Remainder of 10 / 4 is: ", modulus(10, 4));

function doMath(int1, int2, func) {
	return func(int1, int2);
}

function add(int1, int2) {
	return int1 + int2;
};

function subtract(int1, int2) {
	return int1 - int2;
};

console.log("Do Math Add of 10 and 5: ", doMath(10, 5, add));
console.log("Do Math Subtract of 12 and 4: ", doMath(12, 4, subtract));

function sortedPlanets(array) {
	return array.sort();
}

function reversedPlanets(array) {
	var reversed;
	var planets = [];
	
	for (var i = 0; i < array.length; i++) {
		array[i] = array[i].split('');
		array[i] = array[i].reverse();
		array[i] = array[i].join('');
		planets.push(array[i])
	}
	return planets;
}

console.log("Sorted Planets: ", sortedPlanets(Planets));
console.log("Reversed Planets: ", reversedPlanets(Planets));

Planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
function longPlanets(array) {
	var newArray = [];
	for (var i = 0; i < array.length; i++) {
	  if (array[i].length >= 7) {
	  	newArray.push(array[i]);
	  };
	} 
	return newArray
}

console.log("long planets: ", longPlanets(Planets));

function getAnimals () {
	$.ajax({
		url: "../data/animals.json",
		method: "GET"
	}).done(function (data) {
		console.log("animals", data);
	})
};

getAnimals();



























