// Your code here.  
function loop(numberOne, test, updater, print) {
    let temp = numberOne;
    while (test(temp)) {
        print(temp);
        temp = updater(temp);
    }
    return print;
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1