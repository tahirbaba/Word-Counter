#! usr/bin/env node

import inquirer from "inquirer";


const answer:{
    Sentence:string
} = await inquirer.prompt(
    [
        {
            name: "Sentence",
            type: "input",
            message: "Enter your sentence to count the word",
        },
    ]
);
 
const word = answer.Sentence.trim().split(" ")

// Print the array of words to the console

console.log(word);

// Count the number of words in the array

console.log(`Your Sentence word count is ${word.length}`);