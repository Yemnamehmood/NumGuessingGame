#! /usr/bin/env node
import inquirer from "inquirer";
//1) computer will generate a random number -done
//2) user input for guessing number -done
//3) compare user input with computer generated number and show result 
const randomnumber = Math.floor(Math.random() * 6 + 1); //for dice *6+1 
const answers = await inquirer.prompt([
    {
        name: "userguessno",
        type: "number",
        message: "please guess a number between 1-6 : ",
    },
]);
console.log(answers);
if (answers.userguessno === randomnumber) {
    console.log("Congratulations you guessed right number .");
}
else {
    console.log("You guessed wrong number. ");
}
;
