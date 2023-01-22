// ---------------------- variables ----------------------
// 'str' equals to "str"

let count = 100;
let koef = 10.55;
let username = 'super_programmer';
let flag = true;
let symbol = '#';
let account = {
    login: "blabla12",
    password: "Qwerty"
}
let array = [1, 55.5, "red", 'green', true, [1, 2, 3], account];

// ---------------------- data types ----------------------
console.log("Count: " + count + ", type: " + typeof (count));
// interpolation: `...${expression}...`
console.log(`Koef: ${koef}, type: ${typeof (koef)}`);
console.log(`Username: ${username}, type: ${typeof (username)}`);
console.log(`Flag: ${flag}, type: ${typeof (flag)}`);
console.log(`Symbol: ${symbol}, type: ${typeof (symbol)}`);
console.log(`Login: ${account.login}, account type: ${typeof (account)}`);
console.log(`Array: ${array}, array type: ${typeof (array)}`);

// JS has week typing
// we can change types in runtime
count = "one";
console.log(`Count: ${count}, type: ${typeof (count)}`);

// ---------------------- browser dialogs ----------------------
alert("Hello, it is some alert message!");

let name = prompt("Enter your name:");

// convert string to number: number = +{string}
let age = +prompt("Enter your age:");

if (isNaN(age)) {
    console.error("Invalid age!");
}

console.log(`Name: ${name}, type: ${typeof (name)}`);
console.log(`Next age: ${age + 1}, type: ${typeof (age)}`);

let isContinue = confirm("Do you want to continue?");

if (isContinue) alert("Continue!");
else alert("Exit!");

// step: value ** step
console.log(`Power of 2^10: ${2 ** 10}`);