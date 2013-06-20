sorty.js
========

A Javascript solution for sorting tables simply as possible.

###Implementing it:

`<script type="text/javascript" src="sorty.js"></script>`


Then simply add the "sortable" class to a table to enable sorting.


The table MUST include <th> tags for each column to work properly.

`<th width="100" scope="col" disabled="true">Disabled</th>`


Adding the disable attribute to a TH tag will disable sorting on that column.


`<table border="1" class="sorty" begin_sort="">`


begin_sort tells sorty to either sort initially by "ascending" or "descending".


`<table border="1" class="sorty" start_column="">`


start_column tells sorty what column to sort on launch. It accepts an integer which represents the column number, "1" for column 1 etc. Default is 1.


###Current Features:

*	Single Column Ascending/Descending Sorting
*	Support for multiple tables
*	Support for sorting dates, currency, etc.


###Future Features:


*	Multiple Column Sorting


