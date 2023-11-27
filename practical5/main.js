// Exercise 1

const renderColors = () => {
    let myColor = ["Red", "Green", "White", "Black"];
    let colorString = myColor.join(", ");
    var colorsEl = document.getElementById("colors");
    colorsEl.innerText = colorString;
}

renderColors();

// Exercise 2
// Write a JavaScript For loop that will iterate from 0 to 15. For each iteration, check if the current
// number is odd or even, and display a message to the screen.

const renderOddsAndEvens = (start, end) => {
    var numbersEl = document.getElementById("numbers");
    for (let i = start; i <= end; i++) {
        var numberEl = document.createElement("div");
        numberEl.innerText = `${i} is ${i % 2 ? 'odd' : 'even'}`;
        numbersEl.appendChild(numberEl);
    }
}

renderOddsAndEvens(0, 15);

// Exercise 3
// Write a JavaScript function to calculate and display the sum the multiples of 3 and 5 under 1000.
const sumMultiplesOf3and5 = () => {
    let sumEl = document.getElementById("sum");
    let sum = 0;
    for (let i = 0; i < 1000; ++i) {
        if (i % 3 === 0 || i % 5 === 0) sum += i;
    }
    sumEl.innerText = `Sum of multiple of 3 and 5: ${sum}`
}

sumMultiplesOf3and5()