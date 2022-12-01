// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./Assets/utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  //Option if you want to give user the option to name thier README file.
  //Make sure to enable code in the init function.
  // {
  //   type: "input",
  //   name: "fileName",
  //   message: "What do you want to name you README file?",
  // },
  // {
  //   type: "input",
  //   name: "title",
  //   message: "What is the title of your project?",
  // },
  // {
  //   type: "input",
  //   name: "description",
  //   message: "Provide a description of your project",
  // },
  // {
  //   type: "input",
  //   name: "installation",
  //   message: "Provide installation instruction",
  // },
  // {
  //   type: "input",
  //   name: "usage",
  //   message: "Explain the usage for this project",
  // },
  {
    type: "list",
    name: "license",
    message: "Select the license",
    choices: [
      {
        name: "Apache",
        value:
          "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
      },
      {
        name: "Boost",
        value:
          "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
      },
      {
        name: "BSD",
        value:
          "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
      },
      {
        name: "MIT",
        value:
          "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
      },
      {
        name: "None",
        value: "",
      },
    ],
  },
  // {
  //   type: "input",
  //   name: "contribution",
  //   message: "Who contributed to this project",
  // },
  // {
  //   type: "input",
  //   name: "tests",
  //   message: "How to test this project?",
  // },
  // {
  //   type: "input",
  //   name: "github",
  //   message: "What is your Github username?",
  // },
  // {
  //   type: "input",
  //   name: "email",
  //   message: "What is your email address?",
  // },
  // {
  //   type: "input",
  //   name: "questions",
  //   message: "Do you have any questions?",
  // },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    const md = generateMarkdown(response);

    //Hard coded for the file name to be README.md in code below
    writeToFile("README.md", md);
    // Option to name file - code below. Uncomment first object of questions
    // writeToFile(`${response.fileName}.md`, md);

    // (err) =>
    //   err
    //     ? console.error("Could not save file")
    //     : console.log(`File saved as ${response.filename}`)
  });
}

// Function call to initialize app
init();
