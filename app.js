//	closures are functions that handle independent variables:

function init() {
	
	var name = 'name';

	function showName() {
		//this is the closure
		console.log(name);
	}

	showName();
}

init();

// look at this:
function createFunc() {

	var name = 'name';
	
	function showName() {
		console.log(name);
	}

	return showName;
}

var myFunc = createFunc();
myFunc();

/* The snippet above has the same effect. The external function returns the internal function showName() before executing it.

	Functions in JavaScript form closures. A closure is the combination of a function and the lexical
	environment within which that function was declared.
	This environment consists of any local variables that were in-scope at the time the closure was created.
	In this case, myFunc is a reference to the instance of the function showName created when makeFunc is run.
	The instance of showName maintains a reference to its lexical environment, within which the variable name exists.
	For this reason, when myFunc is invoked, the variable name remains available for use and "Mozilla" is passed to alert.
*/

/*
	This references to the object owner of the function.
	*/

var plane = {
	model: function() {
		return this.model;
	},
	position: function() {
		return this.flightData.coords;
	},
	basicStats: function() {
		return {
			speed: this.flightData.gs,
			heading: this.flightData.heading,
			altitude: this.flightData.altitude,
			fuel: this.fuel
		};
	}
};

var pri2938 = {
	fuel: 34341.6,
	model: "Boeing 737",
	times: {
		departure: 1533405723,
		arrival: 1533414902
	},
	flightData: {
		altitude: 34210,
		gs: 400,
		heading: 34,
		wind: [23.4, 112],
		temp: 14,
		squawk: 7700,
		coords: {
			lat: 39.224386,
			lon: 2.019526
		}

	}

};

var ezy3834 = {
	fuel: 35341.6,
	model: "Boeing 757",
	times: {
		departure: 1533405923,
		arrival: 1533415802
	},
	flightData: {
		altitude: 8500,
		gs: 279,
		heading: 331,
		wind: [10.2, 143],
		temp: 28,
		squawk: 3512,
		coords: {
			lat: 39.0124386,
			lon: 2.319526
		}

	}

};


console.log(plane.model.call(pri2938));
console.log(plane.model.call(ezy3834));

console.log(plane.basicStats.call(pri2938));
console.log(plane.basicStats.call(ezy3834));