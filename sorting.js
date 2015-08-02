// bubbleSort
var swapFunc = function(arr, index) {
	var temp = arr[index];
	arr[index] = arr[index+1];
	arr[index+1] = temp;
};

var bubbleSort = function(arr) {
	var swap = true,
		temp,
		comps = 0;
	while(swap && arr.length > 0) {
		swap = false;
		for (var i = 0; i < arr.length-1; i++){
			if (arr[i+1] < arr[i]) {
				swapFunc(arr, i);
				swap = true;
			}
		}
	}
	return arr;
};



// Merge_sort

// var split = function (arr) {
// 	if (arr.length <= 1) {
// 		return arr;
// 	}
// 	// Find midpoint
// 	var middle = Math.ceil(arr.length / 2);
// 	// Set the left side of the array
// 	var left = arr.slice(0,middle);
// 	// Set the right side of the array
// 	var right = arr.slice(middle);
// };

var mergeSort = function (arr) {
	if (arr.length <= 1) {
		return arr;
	}
	// Find midpoint
	var middle = Math.ceil(arr.length / 2);
	// Set the left side of the array
	var left = arr.slice(0,middle);
	// Set the right side of the array
	var right = arr.slice(middle);
	return merge(mergeSort(left), mergeSort(right));
};


var merge = function (left, right) {
    var res = [];
    var i = 0,
        j = 0;
    while ((i < left.length && j < right.length)) {
        if (left[i] < right[j]) {
			res.push(left[i]);
			i++;
		} else {
			res.push(right[j]);
			j++;
		}
    }
    res = res.concat(left.slice(i));
    res = res.concat(right.slice(j));
    return res;
};

// // Split Solution
// var split = function (arr) {
// 	var middleIndex = Math.ceil(arr.length / 2);
// 	var right = arr.splice(middleIndex); // Splice works IN PLACE
// 	return [left, right];
// };




















