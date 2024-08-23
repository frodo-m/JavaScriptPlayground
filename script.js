const userStats = document.getElementById("userStatus");
function login() {
  const currentUser = prompt("Login: ");

  if (currentUser === "admin" || currentUser === "Admin") {
    const password = prompt("Password: ");
    if (password === "TheMaster") {
      userStats.textContent = "Welcome!";
    } else if (password === null || password === "") {
      userStats.textContent = "Canceled!";
    } else {
      userStats.textContent = "Wrong Password!";
    }
  } else if (currentUser === null || currentUser === "") {
    userStats.textContent = "Canceled";
  } else {
    userStats.textContent = "I don't know who you are!";
  }
}

document.getElementById("myBtn").onclick = login;

const select = document.querySelector("select");
const para = document.getElementById("weatherStats");

const setWeather = () => {
  const choice = select.value;

  /* if...else conditions
              if (choice === "sunny") {
                para.textContent =
                  "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
              } else if (choice === "rainy") {
                para.textContent =
                  "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
              } else if (choice === "snowing") {
                para.textContent =
                  "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
              } else if (choice === "overcast") {
                para.textContent =
                  "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
              } else {
                para.textContent = "";
               } */

  // Switch statement
  switch (choice) {
    case "sunny":
      para.textContent =
        "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
      break;
    case "rainy":
      para.textContent =
        "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
      break;
    case "snowing":
      para.textContent =
        "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
      break;
    case "overcast":
      para.textContent =
        "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
      break;
    default:
      para.textContent = "";
  }
};

select.addEventListener("change", setWeather);

// ternary operator Change Theme
// Ternary operator and ternary chaining
// let result = a + b < 4 ? "Below" : "Over";

// let message =
//   login === "Employee"
//     ? "Hello"
//     : login === "Director"
//     ? "Greetings"
//     : login === ""
//     ? "No Login"
//     : "";

const selectTheme = document.getElementById("theme");
const html = document.querySelector("html");

function updateTheme(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

theme.addEventListener("change", () => {
  const choice = selectTheme.value;
  switch (choice) {
    case "dark":
      updateTheme("black", "white");
      break;
    case "purple":
      updateTheme("purple", "lime");
      break;
    case "yellow":
      updateTheme("yellow", "red");
      break;
    case "psychedelic":
      updateTheme("lime", "navy");
      break;
    default:
      updateTheme("white", "black");
      break;
  }
});

// Calender
const selectMonth = document.getElementById("selectMonth");
const monthName = document.getElementById("monthName");
const monthList = document.getElementById("monthList");

selectMonth.addEventListener("change", () => {
  const choice = selectMonth.value;
  let days = 31;

  if (choice === "February") {
    days -= 3;
  } else if (
    choice === "April" ||
    choice === "June" ||
    choice === "September" ||
    choice === "November"
  ) {
    days -= 1;
  }

  createCalender(days, choice);
});

function createCalender(days, choice) {
  monthList.textContent = "";
  monthName.textContent = choice;
  for (let i = 1; i <= days; i++) {
    const monthDays = document.createElement("li");
    monthDays.textContent = i;
    monthList.appendChild(monthDays);
  }
}

createCalender(31, "January");

// Score Machine
let response;
let scoreInput = document.getElementById("score");
let machineActive = true;
let scoreBtn = document.getElementById("scoreBtn");

scoreBtn.addEventListener("click", scoreRating);
scoreInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    scoreRating();
  }
});

function scoreRating() {
  let score = parseInt(scoreInput.value);
  if (!isNaN(score)) {
    if (score >= 0 && score <= 19) {
      response = "That was a terrible score — total fail";
    } else if (score >= 20 && score <= 39) {
      response =
        "You know some things, but it's a pretty bad score. Needs improvement.";
    } else if (score >= 40 && score <= 69) {
      response = "You did a passable job, not bad!";
    } else if (score >= 70 && score <= 89) {
      response = "That's a great score, you really know your stuff.";
    } else if (score >= 90 && score <= 100) {
      response = "What an amazing score! Did you cheat? Are you for real?";
    } else {
      response = "This is not possible, an error has occurred";
    }
  } else {
    response = "Enter a number to switch the machine on.";
  }
  let section = document.getElementById("scoreMachine");
  section.innerHTML = " ";
  let para1 = document.createElement("p");
  let para2 = document.createElement("p");

  para1.textContent = `Your score is ${score}`;
  para2.textContent = response;

  section.appendChild(para1);
  section.appendChild(para2);
}

// logKey

const logKey = document.getElementById("logKey");

logKey.addEventListener("keydown", (e) => {
  console.log(`Pressed ${e.key} key.`);
});

// squared, cubed, factorial
const numIn = document.getElementById("numIn");
const numOut = document.getElementById("numOut");

function clacSquared(num) {
  return num * num;
}

function calcCubed(num) {
  return num * num * num;
}

function calcFactorial(num) {
  if (num < 0) return undefined;
  if (num === 0) return 1;
  let x = num - 1;
  while (x > 1) {
    num *= x;
    x--;
  }
  return num;
}

numIn.addEventListener("change", () => {
  const num = parseFloat(numIn.value);
  if (isNaN(num)) {
    numOut.textContent = "You need to enter a number";
  } else {
    numOut.innerHTML = `${num} Sqaured is ${clacSquared(num)}. <br>
    ${num} Cubed is ${calcCubed(num)}. <br> 
    ${num} Factorial is ${calcFactorial(num)}.`;
  }
});

// add7
const add7In = document.getElementById("add7");
const add7Btn = document.getElementById("add7Btn");
const add7Out = document.getElementById("add7Out");

const add7 = (num) => {
  if (isNaN(num)) {
    return "Input an integer";
  }
  return `The result is ${num + 7}`;
}

add7Btn.addEventListener("click", () => {
  const num = parseInt(add7In.value);
  add7Out.textContent = add7(num);
});

// Multiply
const multiNum1 = document.getElementById("multiNum1");
const multiNum2 = document.getElementById("multiNum2");
const multiOut = document.getElementById("multiOut");
const multiBtn = document.getElementById("multiBtn");

const calcMultiply = (num1, num2) => {
  if (isNaN(num1) || isNaN(num2)) {
    return "Input an integer"
  }

  return `The is result is ${num1 * num2}`;
};

multiBtn.addEventListener("click", () => {
  const num1 = parseFloat(multiNum1.value);
  const num2 = parseFloat(multiNum2.value);

  multiOut.textContent = calcMultiply(num1, num2);
});

// Capitalize
const capIn = document.getElementById("capIn");
const capOut = document.getElementById("capOut");
const capBtn = document.getElementById("capBtn");

function checkString(str) {
  if (!isNaN(str.charAt(0))) {
    return "Please input a string";
  }

  let capitalize = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  return capitalize;
}

capBtn.addEventListener("click", () => {
  let str = capIn.value.trim();
  capOut.textContent = checkString(str);
});

// last letter
const lastCharIn = document.getElementById("lastCharIn");
const lastCharOut = document.getElementById("lastCharOut");
const lastCharBtn = document.getElementById("lastCharBtn");

const checkLastChar = function (str) {
  if (str === null || str === "") {
    return "Please input a string";
  }

  let lastChar = str.slice(-1);
  return `The last character of your string is " ${lastChar} "`;
};

lastCharBtn.addEventListener("click", () => {
  let str = lastCharIn.value.trim();
  lastCharOut.textContent = checkLastChar(str);
});

// FizzBuzz
const fbInput = document.getElementById("fbInput");
const fbBtn = document.getElementById("fbBtn");
const fbOut = document.getElementById("fbOut");

const checkFizzBuzz = (num) => {
  // IF num is invalid (less than or equal to 0 OR not a number)
  if (num <= 0 || isNaN(num)) {
    // DISPLAY invalid message
    return "Input a positive number";
  }

  // INITIALIZE output array;
  let output = [];

  // FOR each number from 1 to num
  for (let i = 1; i <= num; i++) {
    // INITIALIZE result string
    let result = "";

    // IF i is divisible by 3
    if (i % 3 === 0) {
      // APPEND "Fizz" to result
      result += "Fizz"
    };
    // IF i is divisible by 5
    if (i % 5 === 0) {
      // APPEND "Buzz" to result
      result += "Buzz"
    };
    // IF result is empty
    // APPEND i to result
    output.push(result || i);
  }

  // DISPLAY output array joined with spaces
  return output.join(" ");
}

fbBtn.addEventListener("click", () => {
  let num = parseInt(fbInput.value);
  fbOut.textContent = checkFizzBuzz(num);
});

fbInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    let num = parseInt(fbInput.value);
    fbOut.textContent = checkFizzBuzz(num);
  }
});

// Create forEach function
const fruits = ["Banana", "Orange", "Apple", "Mango"];

let arrayList = '<ol>';
const getFruit = (fruit) => {
  arrayList += `<li> ${fruit} </li>`;
};
fruits.push("Lemon");
fruits.forEach(getFruit);
arrayList += `<li>${fruits[8] = 'Papaya'} ~ this is a <b>hole</b> in an array, index = ${fruits.length} - 1</li>`;
fruits[9] = { firstName: 'Mohanad', lastName: 'Bassiouny' };
arrayList += `<li>first name ${fruits[9].firstName} last name: ${fruits[9].lastName}</li>`
arrayList += `<li>Is it an array? ${Array.isArray(fruits)} 🙀</li>`;
arrayList += `<li>Will instance of return that fruits is an array? ${fruits instanceof Array}... Oh GOD 😵</li>`

arrayList += `Just nesting arrays in an object<br>`;
const myObj = {
  name: 'Mohanad',
  age: 26,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] }
  ]
}

const getCar = () => {
  let car = '';

  for (let i in myObj.cars) {
    car += `<b>${myObj.cars[i].name}: </b>`;
    for (let j in myObj.cars[i].models) {
      car += `${myObj.cars[i].models[j]}, `;
    }
    car += '<br>';
  }

  return car;
};

arrayList += `Return my OBJECTS THEIF 🥷.
Here is your OBJECTS: <br>Name:${myObj.name},<br> Age${myObj.age},<br> Cars: <br>${getCar()} `

arrayList += '</ol>';

document.getElementById('demo').innerHTML = arrayList;

// function lCat(cat) {
//   return cat.startsWith('L');
// }

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filterL = cats.filter((cat) => cat.startsWith("L")).toString();
console.log(filterL);


// forLoop
const forLoop = document.getElementById("forLoop");
const forLoopBtn = document.getElementById("forLoopBtn");
const forLoopReset = document.getElementById("forLoopReset");

const seMultiply = () => {
  for (let i = 1; i < 10; i++) {
    const result = `${i} x ${i} = ${i * i}`;
    forLoop.innerHTML += `${result}<br>`;
  }
  forLoop.innerHTML += '<br>Finished!<br>';
}

forLoopBtn.addEventListener('click', seMultiply);
forLoopReset.addEventListener('click', () => forLoop.textContent = "");

const cats3 = ["Pete", "Biggles", "Jasmine"];
let myFavCats = 'My favorite cats are: ';

for (let i = 0; i < cats3.length; i++) {
  if (i === cats3.length - 1) {
    myFavCats += `and ${cats3[i]}.`
  } else {
    myFavCats += `${cats3[i]},`;
  }
}

console.log(myFavCats);


// Use break in loop
const searchCon = document.getElementById("searchCon");
const searchConBtn = document.getElementById("searchConBtn");
const searchConRes = document.getElementById("searchConRes");

const contacts = [
  "Chris:2232322",
  "Sarah:3453456",
  "Bill:7654322",
  "Mary:9998769",
  "Dianne:9384975",
];

const getContact = () => {
  const searchName = searchCon.value.toLowerCase();
  searchCon.value = "";
  searchCon.focus();
  searchConRes.textContent = "";
  for (const contact of contacts) {
    const splitContact = contact.split(':');
    if (splitContact[0].toLowerCase() === searchName) {
      searchConRes.textContent = `${splitContact[0]}'s Number is ${splitContact[1]}`;
      break;
    }
    if (splitContact[0].toLowerCase() !== searchName) {
      searchConRes.textContent = `Contact not found`;
      break;
    }
  }
}

searchConBtn.addEventListener('click', getContact);