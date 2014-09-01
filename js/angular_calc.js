function CalcCtrl($scope) {
	$scope.display = 0;
	
	var equalSign = false;
	var numIn = 0;		//I don't like making the scope this broad, 
	var ansOut = 0;		//but I don't know if I have a choice.
	var lastOp = null;	//Hopefully null is innocuous enough.
	$scope.processInput = function (input) {
		if (Number(input) >= 0 && Number(input) <= 9){//if selection is a number
			if (!equalSign) {
				numIn = appendInput(numIn, Number(input));
			}
			else {
				numIn = Number(input);
				ansOut = 0;
				equalSign = false;
			}
			$scope.display = numIn;
		}
		else if (input === "="){
			equals();
			equalSign = true;
			$scope.display = ansOut;
		}
		else {
			if (!equalSign) {
				equals();
			}
			else {
				equalSign = false;
			}
			numIn = 0;
			lastOp = input;
			$scope.display = ansOut;	
		}
		//$scope.display = input;
	}
	
	function appendInput(oldNum, newNum) {
		return (10*oldNum) + newNum;
	}

	$scope.output = function (out) {
		$scope.diplay = out;
	}

	function equals() {
		switch (lastOp){//this whole algorithmic hooha has gone crazy buggy.
		case "+":
			ansOut = ansOut += numIn;
			//numIn = 0;
			break;
		case "-":
			ansOut = ansOut -= numIn;
			//numIn = 0;
			break;
		case "*":
			ansOut = ansOut *= numIn;
			//numIn = 0;
			break;
		case "/":
			ansOut = ansOut /= numIn;
			//numIn = 0;
			break;
		case ".":
			ansOut = decimal(ansOut, numIn);
			break;
		default:
			if (numIn !== 0) ansOut = numIn;
		}
	}	
}