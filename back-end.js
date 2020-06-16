function whatCanIDoLegally(age) {
    if (age < 18) {
    return "You can't do anything.";
    } else if (age >= 18 && age <= 20) {
    return "You can drive but don't drink.";
    } else if (age >= 21) {
    return "You can do either but don't do both at the same time.";
    }
}

module.exports = whatCanIDoLegally;

// user -> 6 -> main.js -> "fizz" -> user

// user -> 'Orange' -> main.js -> 'red and yellow' -> user

// user  -> 'orange' -> main.js
// main.js -> 'orange' -> back-end
// back-end -> 'red and yellow' -> main.js
// main.js -> 'red and yellow' -> user