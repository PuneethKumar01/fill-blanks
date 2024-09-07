const prompt = require("prompt-sync")();

//inisialision of the array word with 10 elements
const word = ["array", "binary", "compile", "debug", "exit", "function", "glich", "hacker", "index", "job"];

let select = word[Math.floor(Math.random() * 10)];//to select random word from array

//the below line is  to display "fill in the blank" word
let outString = [];
for (let i = 0; i < select.length; i++) {

    if (i == 0 || i == Math.floor(select.length / 2)) {
        outString[i] = select[Math.floor(i)] //outString get converted into array of string
    }
    else {
        outString[i] = " _ ";
    }
}
console.log(outString.join('')); //to join array
//the above line is  to display "fill in the blank" word

//to loop till the fill in the blank element get filled
while (select != outString.join('')) {

    let temp = prompt("\nEnter a  character to fill the blank : ")

    //to fill the blank when the correct answer is  inputed
    for (i = 0; i < select.length; i++)
        if (temp == select[i] && outString[i] == " _ ") {
            outString[i] = temp;
            console.log(`\nUpdate string is :\n${outString.join("")}`);
            temp = 0;
            //to retry if the  inputed character is  wrong
        }

    if (temp != 0) {
        console.log(`\nInputed character doesn't match any blank space\nPlease try again`);
        console.log(`string is :\n${outString.join("")}`);
    }
}

//it display when first whihe loop  ends        
console.log(`\nBooyaahhh......  Your Solved The Problem\n`);


