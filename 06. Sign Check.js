function solve(a, b, c) {
    const multiply = (a,b) => a*b;
    let result = multiply(c, (multiply(a, b)))
    if (result >= 0) {
        console.log('Positive');
    }
    else {
        console.log('Negative');
    }
}
solve(5,
    12,
    -15);
solve(-6,
    -12,
    14);
solve(-1,
    -2,
    -3);
solve(-5,
    1,
    1);