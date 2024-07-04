/*const textBox=document.getElementById('textbox');
const toFahrenheit=document.getElementById('fahrenheit');
const toCelsius=document.getElementById('celsius');
const result=document.getElementById('result');
let temp;
function convert(){
    if(toFahrenheit.check){
      temp=Number(textBox.value);
      temp=temp*9/5+32;
      result.textContent=temp.toFixed(1)+"°F";
    }
    else if(toCelsius.check){
      temp=Number(textBox.value);
      temp=temp-32*(5/9);
      result.textContent=temp.toFixed(1)+"°F";
    }
    else{
       result.textContent="Select a Unit.";
    }
}       //chatgpt code
       
    const textBox = document.getElementById('textbox');
const toFahrenheit = document.getElementById('fahrenheit');
const toCelsius = document.getElementById('celsius');
const result = document.getElementById('result');
let temp;

function convert(event) {
    event.preventDefault(); // Prevent form submission

    if (toFahrenheit.checked) {
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F";
    } else if (toCelsius.checked) {
        temp = Number(textBox.value);
        temp = (temp - 32) * 5 / 9;
        result.textContent = temp.toFixed(1) + "°C";
    } else {
        result.textContent = "Select a Unit.";
    }
}

// Attach the convert function to the form submit event
document.querySelector('form').addEventListener('submit', convert);


let fruits=["apple","mango","banana","orange"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);


fruits[2]="green apple";
console.log(fruits[2]);

let fruit=["apple","orange"];
fruit[2]="mango";
console.log(fruit[2]);
fruit.push("banana");

fruit.pop();
//console.log(fruit);
fruit.unshift("mango");
fruit.shift();
console.log(fruit);*/

const textBox = document.getElementById('textbox');
const toFahrenheit = document.getElementById('fahrenheit');
const toCelsius = document.getElementById('celsius');
const result = document.getElementById('result');
let temp;

function convert(event) {
    event.preventDefault(); // Prevent form submission

    if (toFahrenheit.checked) {
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F";
    } else if (toCelsius.checked) {
        temp = Number(textBox.value);
        temp = (temp - 32) * 5 / 9;
        result.textContent = temp.toFixed(1) + "°C";
    } else {
        result.textContent = "Select a Unit.";
    }
}

// Attach the convert function to the form submit event
document.querySelector('form').addEventListener('submit', convert);


