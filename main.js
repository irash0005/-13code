function calc (operator, a, b) {
    if (typeof a != 'number' || typeof b != 'number') {
        return 'Error';
    } else if (a != NaN || typeof b != NaN) {
        return 'Error';
    } else if (operator == '/' && b == 0) {
        return 'Error';
    }  else if (operator == '%' && b == 0) {
        return 'Error';
    }

    switch (operator) {
        case '+' : return a + b;
        case '-' : return a - b;
        case '*' : return a * b;
        case '/' : return a / b;
        case '%' : return a % b;
        case '**' : return a ** b;
        default : return 'unknown operation';
}
}
let result = calc ('-',NaN,2);
console.log(result);