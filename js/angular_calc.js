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

	function equals() {
		switch (lastOp){
		case "+":
			ansOut = ansOut += numIn;
			break;
		case "-":
			ansOut = ansOut -= numIn;
			break;
		case "*":
			ansOut = ansOut *= numIn;
			break;
		case "/":
			ansOut = ansOut /= numIn;
			break;
		case ".":
			ansOut = decimal(ansOut, numIn);
			break;
		default:
			if (numIn !== 0) ansOut = numIn;
		}
	}

	function decimal(oldNum, newNum) {//needs writing
		//########################
		//This will need more jiggerypokery than
		//I want to spend time on right now.
		return oldNum + (newNum/10);
	}	
}