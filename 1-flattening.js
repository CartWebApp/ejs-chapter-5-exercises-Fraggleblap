let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.

console.log(arrays.reduce((a, currentValue) =>
a.concat(currentValue)
));

// → [1, 2, 3, 4, 5, 6]