function test() {
	for (var i = 0; i < 10000; i++){
		for (var j = 0; j < 10000; j++){
			/*document.getElementById("testResults").innerHTML += "<br><br>" + "&nbsp" +
																i + " : " + 
																j + ;*/
		
			ansOut = i;
			numIn = j;			
			lastOp = null;
			equals();
			if (ansOut != j && numIn !== 0) {
				document.getElementById("testResults").innerHTML += "<br><br>" + "&nbsp" +
																i + " : " + 
																j + "<br>" + 
																	"err: Null " +
																	ansOut;
			}
			
			ansOut = i;
			numIn = j;	
			lastOp = "+";
			equals();
			if (ansOut != i+j){
				document.getElementById("testResults").innerHTML += "<br><br>" + "&nbsp" +
																i + " : " + 
																j + "<br>" + "err: + " +
																	ansOut;
			}
			
			ansOut = i;
			numIn = j;														
			lastOp = "-";
			equals();
			if (ansOut != i-j){
				document.getElementById("testResults").innerHTML += "<br><br>" + "&nbsp" +
																i + " : " + 
																j + "<br>" + "err: - " +
																	ansOut;
			}
			
			ansOut = i;
			numIn = j;												
			lastOp = "*";
			equals();
			if (ansOut != i*j){
				document.getElementById("testResults").innerHTML += "<br><br>" + "&nbsp" +
																i + " : " + 
																j + "<br>" + "err: * " +
																	ansOut;
			}
			ansOut = i;
			numIn = j;														
			lastOp = "/";
			equals();
			if (ansOut != i/j){
				document.getElementById("testResults").innerHTML += "<br><br>" + "&nbsp" +
																i + " : " + 
																j + "<br>" + "err: / " +
																	ansOut;
			}
		}
	}
}