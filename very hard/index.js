function add(num1, num2) {
    return (num1 + num2);
}
function sub(num1, num2) {
    return (num1 - num2);
}
function multiply(num1, num2) {
    return (num1 * num2)
}
function div(num1, num2) {
    return (num1 / num2)
}

const num1 = parseFloat(prompt("Enter first number"));
const operator = prompt("Please enter a operator");
const num2 = parseFloat(prompt("Enter second number"));

switch (operator) {

    case '+':
        console.log(num1 + operator + num2 + '=' + add(num1, num2));
        break;

    case '-':
        console.log(num1 + operator + num2 + '=' + sub(num1, num2));
        break;

    case '*':
        console.log(num1 + operator + num2 + '=' + multiply(num1, num2));
        break;

    case '/':
        console.log(num1 + operator + num2 + '=' + div(num1, num2));
        break;

}


