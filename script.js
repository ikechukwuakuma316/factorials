function findFactorial() {
    let number = parseInt(document.getElementById("fact").value);

    let value = 1;

    let i = 2;
    while (i <= number) {
        value *= i; 
        i++; 
    }

    document.getElementById("result").innerHTML = "Factorial of " + number + " is: " + value;
}