// var list = [4, 2, 6, 10, 1, 8, 3, 5, 2];
var list = [];

function bubblesort(alist) {
	var current = -1, previous = -1;
	var swapped = true;
	
	while (swapped) {
		swapped = false;
		for(var index = 1, length = alist.length; index < length; index++) {	
			current = list[index];
			previous = list[index - 1];
			console.log( "current number: " + current);		
			if (current < previous) {
				alist[index - 1] = current;
				alist[index] = previous;
				swapped = true;
			}
		
		}
		console.log(alist);
	}	
	
	return alist;
	
}

var sortedlist = bubblesort(list);
console.log(sortedlist);