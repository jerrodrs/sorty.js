window.onload = function(){
	var tableSort = document.getElementsByClassName("sorty");

	for (var i = 0; i < tableSort.length; i++){
		sortie(tableSort[i]);
	}

function sortie(tableSort){
	
	var tableRows = tableSort.getElementsByTagName("tr");
	var columns = tableSort.querySelectorAll("tr th");
	var tableCells = tableSort.getElementsByTagName("td");
	var rowsTable = new Array();
	var sorted = ["up",0];
	
	
	var theme=tableSort.getAttribute("theme") || "NaN";
	
	if(theme == "gray"){
		var css = 
		'.sorty {border: 1px solid #CCC; font-family: Arial; font-size: 10pt;}' +
		'.sorty th {background: #CCC; border: 0px; }' +
		'.sorty td {border: 0px solid #CCC; }' +
		'.sorty .even {background: #efefef; }' +
		'.sorty .odd {background: #FFF; }';

	}else if(theme == "green"){
		var css = 
		'.sorty {border: 1px solid #CCC; font-family: Arial; font-size: 10pt;}' +
		'.sorty th {background: #688C5E; color: #FFF; border: 0px; }' +
		'.sorty td {border: 0px solid #CCC; }' +
		'.sorty .even {background: #D7E3D3; }' +
		'.sorty .odd {background: #FFF; }';

	}else if(theme == "red"){
		var css = 
		'.sorty {border: 1px solid #CCC; font-family: Arial; font-size: 10pt;}' +
		'.sorty th {background: #AB5252; color: #FFF; border: 0px; }' +
		'.sorty td {border: 0px solid #CCC; }' +
		'.sorty .even {background: #F7DCDC; }' +
		'.sorty .odd {background: #FFF; }';

	}else if(theme == "blue"){
		var css = 
		'.sorty {border: 1px solid #CCC; font-family: Arial; font-size: 10pt;}' +
		'.sorty th {background: #1BB2E0; color: #FFF; border: 0px; }' +
		'.sorty td {border: 0px solid #CCC; }' +
		'.sorty .even {background: #CEECF5; }' +
		'.sorty .odd {background: #FFF; }';

	}
	
	
	
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
	
	var disabled = new Array();
	
	for (var k = 0; k < columns.length; k++){
		disabled[k]=columns[k].getAttribute("disabled");
	}

	for (var z = 0; z < columns.length; z++){
		if(disabled[z] == "true") continue;
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

	
	var begin_sort=tableSort.getAttribute("begin_sort") || "NaN";
	var start_column=tableSort.getAttribute("start_column") || 1;
	
	if(begin_sort == "ascending"){
		if(disabled[start_column - 1] == "true") return true;
		sortUp(start_column - 1);
	}else if(begin_sort == "descending"){
		if(disabled[start_column - 1] == "true") return true;
		sortDown(start_column - 1);
	}
	
	function printTable(){
		for (var i = 0; i < tableRows.length-1; i++) {	
			 for (var j = i*columns.length, k = 0; j < tableCells.length-1, k < columns.length; j++, k++){
				if(disabled[k] == "true") continue;
				 tableCells[j].innerHTML = rowsTable[i][k];
			 }
		}
	}
	
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
				var avalue = parseFloat(a[rowNum]),
					bvalue = parseFloat(b[rowNum]);
				if (avalue < bvalue) {
					return -1;
				}
				if (avalue > bvalue) {
					return 1;
				}
				return 0;
			});
		  }
		printTable();
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
				var avalue = parseFloat(a[rowNum]),
					bvalue = parseFloat(b[rowNum]);
				if (avalue > bvalue) {
					return -1;
				}
				if (avalue < bvalue) {
					return 1;
				}
				return 0;
			});
		  }	
		printTable();
		sorted = ["down",rowNum];
	}
}
};