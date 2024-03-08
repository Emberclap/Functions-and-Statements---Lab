function solve(num1, num2, operator) {
    function getOperation(operator) {
        switch (operator) {
            case 'multiply':
                return (a, b) => a * b;
            case 'divide':
                return (a, b) => a / b;
            case 'add':
                return (a, b) => a + b;
            case 'subtract':
                return (a, b) => a - b;

        }
    }
    let operation = getOperation(operator)

    console.log(operation(num1,num2));
}
solve(5,
    5,
    'multiply')
solve(40,
    8,
    'divide')
solve(12,
    19,
    'add')
solve(50,
    13,
    'subtract')