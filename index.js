// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const generateLogo = require('./lib/shapes');
const path = require("path");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
        {
          type: 'input',
          name: 'text',
          message: "What's the text of your logo",
        },
        {
          type: 'input',
          name: 'text-color',
          message: "What's your text's color",
        },
        {
            type: 'list',
            name: 'shape',
            message: "What's the shape of your logo?",
            choices: ["Triangle", "Circle", "Square", "Star"]
        },
        {
            type: 'input',
            name: 'shape-color',
            message: "What is your shape's color?",
        },
    ];


// TODO: Create a function to write README file
function createLogo(fileName, data) {
    console.log("test1")
    const filePath = path.join(fileName)
    console.log("test2")
    fs.writeFile(filePath, generateLogo(data), (err) =>
    err ? console.log(err) : console.log(`Logo generated! @:${filePath}`)
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        createLogo("examples/logo.svg/", answers);
    })
    .catch((error) => {
        if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        } else {
        // Something else went wrong
        }
    });
}

// Function call to initialize app
init();