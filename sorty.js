window.onload = function(){
	var table = document.getElementsByClassName("sortable");
	var tableRows = document.getElementsByTagName("tr");
	var columns = document.querySelectorAll("tr th");
	var tableCells = document.getElementsByTagName("td");
	var rowsTable = new Array();
	var sorted = ["up",0];
	
	var css = 
	'button {width: 110px; }' +
	'table {border: 1px solid #CCC; font-family: Arial; font-size: 10pt;}' +
	'th {background: #CCC; border: 0px; }' +
	'td {border: 0px solid #CCC; }' +
	'.even {background: #efefef; }' +
	'.odd {background: #FFF; }';
	var	head = document.getElementsByTagName('head')[0];
	var	style = document.createElement('style');

	style.type = 'text/css';
	if (style.styleSheet){
	  style.styleSheet.cssText = css;
	} else {
	  style.appendChild(document.createTextNode(css));
	}

	head.appendChild(style);
	
	for (var i = 0; i < tableRows.length; i++) {	
		if(i%2==0){
		tableRows[i].className = "even";
		}else{
		tableRows[i].className = "odd";
		}
	}

	for (var z = 0; z < columns.length; z++){
		var currentCol = z;
		columns[currentCol].onclick=(function(currentCol){
			return function() {
				if(sorted[0] == "up"){
					sortDown(currentCol);
				}else{
					sortUp(currentCol);
				}
				return false;
			};
		})(currentCol);
	}
	
	
	for (var i = 0; i < tableRows.length; i++) {	
			rowsTable[i] = new Array(columns.length-1);
	}
	
	for (var i = 0; i < tableRows.length-1; i++) {	
		 for (var j = i * (columns.length), k = 0; j < ((i * (columns.length))+3), k < columns.length; j++, k++){
			rowsTable[i][k] = tableCells[j].innerHTML;
		 }
	}

	sortUp(0);
	
	function sortUp(rowNum){
		
		  if(isNaN(rowsTable[0][rowNum]) == true){
			rowsTable.sort(function(a, b) {
				var avalue = a[rowNum],
					bvalue = b[rowNum];
				if (avalue < bvalue) {
					return -1;
				}
				if (avalue > bvalue) {
					return 1;
				}
				return 0;
			});
		  }else{
			rowsTable.sort(function(a, b) {
				var avalue = parseInt(a[rowNum]),
					bvalue = parseInt(b[rowNum]);
				if (avalue < bvalue) {
					return -1;
				}
				if (avalue > bvalue) {
					return 1;
				}
				return 0;
			});
		  }


			
				
		for (var i = 0; i < tableRows.length-1; i++) {	
			 for (var j = i*columns.length, k = 0; j < tableCells.length-1, k < columns.length; j++, k++){
				 tableCells[j].innerHTML = rowsTable[i][k];
			 }
		}
		
		sorted = ["up",rowNum];
	}
	
	function sortDown(rowNum){
		  if(isNaN(rowsTable[0][rowNum]) == true){
			rowsTable.sort(function(a, b) {
				var avalue = a[rowNum],
					bvalue = b[rowNum];
				if (avalue > bvalue) {
					return -1;
				}
				if (avalue < bvalue) {
					return 1;
				}
				return 0;
			});
		  }else{
			rowsTable.sort(function(a, b) {
				var avalue = parseInt(a[rowNum]),
					bvalue = parseInt(b[rowNum]);
				if (avalue > bvalue) {
					return -1;
				}
				if (avalue < bvalue) {
					return 1;
				}
				return 0;
			});
		  }


			
				
		for (var i = 0; i < tableRows.length-1; i++) {	
			 for (var j = i*columns.length, k = 0; j < tableCells.length-1, k < columns.length; j++, k++){
				 tableCells[j].innerHTML = rowsTable[i][k];
			 }
		}
		
		sorted = ["down",rowNum];
	}
};