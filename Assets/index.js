// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  //Option if you want to give user the option to name thier README file.
  //Make sure to enable code in the init function.
  // {
  //     type: "input",
  //     name: "fileName" ,
  //     message: "What do you want to name you README file?",
  // },
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a description of your project",
  },
//   {
//     type: "input",
//     name: "installation",
//     message: "Provide installation instruction",
//   },
//   {
//     type: "input",
//     name: "usage",
//     message: "Explain the usage of this project",
//   },
//   {
//     type: "input", //possibly a list
//     name: "license",
//     message: "Name of the license",
//   },
//   {
//     type: "input",
//     name: "contribution",
//     message: "Who contributed to this project",
//   },
//   {
//     type: "input",
//     name: "tests",
//     message: "How to test this project?",
//   },
//   {
//     type: "input",
//     name: "questions",
//     message: "Do you have any questions?",
//   },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    const md = generateMarkdown(response);
    writeToFile("README.md", md); //Hard coded for the file name to be README.md
    // writeToFile(`${response.fileName}.md`, md)
  });
}

// Function call to initialize app
init();

//Use this for reference
//## Table of Contents
//   -[Project description](#Description)
//   -[Installation](#Installation)
//   -[Usage] (#Usage)
//   -[License](#License)
//   -[Contribution] (#Contribution)
//   -[Tests] (#Tests)
//   -[Questions] (#Questions)

// .prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: 'What is your name?',
//     },
//     {
//       type: 'checkbox',
//       message: 'What languages do you know?',
//       name: 'stack',
//       choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
//     },
//     {
//       type: 'list',
//       message: 'What is your preferred method of communication?',
//       name: 'contact',
//       choices: ['email', 'phone', 'telekinesis'],
//     },
// .then((response) =>
//     response.confirm === response.password
//       ? console.log('Success!')
//       : console.log('You forgot your password already?!')
//   );

// ## Table of Contents
//   -[Project description](#Description)
//   -[Installation](#Installation)
//   -[Usage] (#Usage)
//   -[License](#License)
//   -[Contribution] (#Contribution)
//   -[Tests] (#Tests)
//   -[Questions] (#Questions)