var isEven = function(n) {
    return n % 2 === 0;
};

var isOdd = function(n) {
    return !isEven(n);
};

var power = function(x, n) {
    println("Computing " + x + " raised to power " + n + ".");
    if(n === 0){
        return 1;
    }
    // recursive case: n is negative
    if(n < 0){
        return 1 / power(x, -n);
    }
    // recursive case: n is odd
    if(isOdd(n)){
        return x * power(x, n-1);
    }
    // recursive case: n is even
    if(isEven(n)){
        var pot = power(x, n/2);
        return pot * pot;
    }
};

var displayPower = function(x, n) {
    println(x + " to the " + n + " is " + power(x, n));
};