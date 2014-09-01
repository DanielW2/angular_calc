function CalcCtrl($scope) {
	$scope.display = 0;
	
	var equalSign = false;
	var numIn = 0;		//I don't like making the scope this broad, 
	var ansOut = 0;		//but I don't know if I have a choice.
	var lastOp = null;	//Hopefully null is innocuous enough.
	$scope.processInput = function (input) {
		/*if (Number(input) >= 0 && Number(input) <= 9){//if selection is a number
			if (!equalSign) {
				numIn = input;//appendInput(numIn, Number(input));
			}
			else {
				numIn = Number(input);
				ansOut = 0;
				equalSign = false;
			}
			output(numIn);
		}
		else if (input === "="){
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
			lastOp = input;
			output(ansOut);	
		}*/
		$scope.display = input;
	}
}