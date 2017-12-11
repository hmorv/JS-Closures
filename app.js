//	closures ar functions that handle independent variables

function init() {
	var name = 'name';

	function showName() {
		//this is the closure xD
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

/* this snippet has the same effect. The thing is the external function returns the internak func. showName() before execute it.

	The reason is that functions in JavaScript form closures. A closure is the combination of a function and the lexical environment within which that function was declared.
	This environment consists of any local variables that were in-scope at the time the closure was created.
	In this case, myFunc is a reference to the instance of the function displayName created when makeFunc is run.
	The instance of displayName maintains a reference to its lexical environment, within which the variable name exists.
	For this reason, when myFunc is invoked, the variable name remains available for use and "Mozilla" is passed to alert.
*/