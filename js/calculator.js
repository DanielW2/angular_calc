/*
	Four function calculator written in javascript as a basic web app.
*/
window.onload = initAll;

function initAll() {
	buildCalc();
	document.getElementById("outputArea").innerHTML = "_";
}

function buildCalc() {
	var buttons = ["1","2","3","4","5","6","7","8","9","0","+","-","/","*",".","="];
	
	for (var i = 0; i < buttons.length; i++){
		document.getElementById(buttons[i]).onmousedown = toggleColor;
		document.getElementById(buttons[i]).onclick = input;
	}	
}

var oldSquare = false;
function toggleColor(evt) {
	if (evt) {
		var thisSquare = evt.target;
	}
	else {
		var thisSquare = window.event.srcElement;
	}
	if (thisSquare.className == "") {
		thisSquare.className = "pickedBG";
	}
	else {
		thisSquare.className = "";
	}
	
	if (oldSquare) {
		oldSquare.className = "";
	}
	oldSquare = thisSquare;
	document.getElementById("text").innerHTML = oldSquare;
}

var numIn = 0;		//I don't like making the scope this broad, 
var ansOut = 0;		//but I don't know if I have a choice.
var lastOp = null;	//Hopefully null is innocuous enough.
var equalSign = false;

function input() {
	if (Number(this.innerHTML) >= 0 && Number(this.innerHTML) <= 9){//if selection is a number
		if (!equalSign) {
			numIn = appendInput(numIn, Number(this.innerHTML));
		}
		else {
			numIn = Number(this.innerHTML);
			ansOut = 0;
			equalSign = false;
		}
		output(numIn);
	}
	else if (this.innerHTML === "="){
		equals();
		equalSign = true;
		output(ansOut);
	}
	else {
		if (!equalSign) {
			equals();
		}
		else {
			equalSign = false;
		}
		numIn = 0;
		lastOp = this.innerHTML;
		output(ansOut);	
	}
}

function appendInput(oldNum, newNum) {
	return (10*oldNum) + newNum;
}

function output(out) {
	document.getElementById("outputArea").innerHTML = out;
}

function equals() {
	switch (lastOp){//this whole algorithmic hooha has gone crazy buggy.
	case "+":
		ansOut = add(ansOut, numIn);
		//numIn = 0;
		break;
	case "-":
		ansOut = subtract(ansOut, numIn);
		//numIn = 0;
		break;
	case "*":
		ansOut = multiply(ansOut, numIn);
		//numIn = 0;
		break;
	case "/":
		ansOut = divide(ansOut, numIn);
		//numIn = 0;
		break;
	case ".":
		ansOut = decimal(ansOut, numIn);
		break;
	default:
		if (numIn !== 0) ansOut = numIn;
	}
}

//math functions
function add(ansOut, numIn) {
	return ansOut += numIn;
}

function subtract(ansOut, numIn) {
	return ansOut -= numIn;
}

function multiply(ansOut, numIn) {
	return ansOut *= numIn;
}

function divide(ansOut, numIn) {
	return ansOut /= numIn;
}

function decimal(ansOut, numIn) {//needs writing
	//########################
	//This function will need to change append from multiplying the old number by 10
	//and adding the new number to multiplying the new number by 0.1 and adding that
	//to the old number.
}