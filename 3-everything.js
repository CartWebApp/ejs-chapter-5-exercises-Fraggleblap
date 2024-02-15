function every(array, test) {
    // Your code here.
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return (test(sum));
  }
  
  console.log(every([1, 3, 5], n => n < 10));
  // → true
  console.log(every([2, 4, 16], n => n < 10));
  // → false
  console.log(every([], n => n < 10));
  // → true