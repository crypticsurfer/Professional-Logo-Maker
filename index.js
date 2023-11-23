// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const generateLogo = require('./lib/shapes');
const path = require("path");
const fs = require("fs");
var validateColor = require("validate-color").default;

// TODO: Create an array of questions for user input
const questions = [
        {
          type: 'input',
          name: 'text',
          message: "What's the text of your logo",
          validate(input) {
            if (input.length > 3) {
              throw Error('The text of your logo must be three characters or less');
            }
            else {
              return true;
            }
          },
        },
        {
          type: 'input',
          name: 'text-color',
          message: "What's your text's color",
          validate(input) {
            if (validateColor(input)) {
              return true;
            }
            else {
              throw Error('Must be a valid color or hex');
            }
          },
        },
        {
            type: 'list',
            name: 'shape',
            message: "What's the shape of your logo?",
            choices: ["Triangle", "Circle", "Square"]
        },
        {
            type: 'input',
            name: 'shape-color',
            message: "What is your shape's color?",
            validate(input) {
                if (validateColor(input)) {
                  return true;
                }
                else {
                  throw Error('Must be a valid color or hex');
                }
              },
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