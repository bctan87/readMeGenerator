// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const { prompt } = inquirer;
const questions = [
    {
        type: "input",
        message: "What is your project title?",
        name: "projectTitle"
    },
    {
        type: "input",
        message: "Please enter a description for your project",
        name: "projectDescription"
    },
    {
        type: "input",
        message: "Please provide installation instructions",
        name: "projectInstallation"
    },
    {
        type: "input",
        message: "Please provide usage instructions",
        name: "projectUsage"
    },
    {
        type: "list",
        message: "Select a license for your project",
        name: "projectLicense",
        choices: [
            "Unlicensed",
            "MIT",
            "Perl",
            "ISC",
        ]
    },
    {
        type: "input",
        message: "Do you have any contributors?",
        name: "projectContributing"
    },
    {
        type: "input",
        message: "Do you have any test cases?",
        name: "projectTest"
    },
    {
        type: "input",
        message: "Please enter your Github username",
        name: "projectUsername"
    },
    {
        type: "input",
        message: "Please enter your email",
        name: "projectEmail"
    }
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, e => {
        if (e) {
            console.log("This is an error", e);
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    prompt(questions).then(answers => {

        const response = generateMarkdown(answers);
        console.log("Done!");
        console.log(answers);

        writeToFile("README.md", response);
    })
}

// Function call to initialize app
init();
