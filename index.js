const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

async function readme() {
    try {
        const userResponse = await inquirer.prompt([{
            type:"input",
            message: "What is the title of your project?",
            name: "title"
        },
        {
            type:"input",
            message:"Provide a description",
            name: "description"
        },
        {
            type:"input",
            message:"Provide installation instructions",
            name: "installation"
        },
        {
            type:"input",
            message:"Provide usage information",
            name:"usage"
        },
        {
            type:"input",
            message:"Provide contribution guidelines",
            name:"contribution"
        },
        {
            type:"input",
            message:"Provide test instructions",
            name:"test"
        },
        {
            type:"list",
            message:"What license would you like for your project?",
            choices:["MIT","Apache 2.0","GNU GPL v3.0"],
            name:"license"
        },
        {
            type:"input",
            message:"Enter your GitHub username",
            name:"github"
        },
        {
            type:"input",
            message:"Enter your email address",
            name:"email"
        }
        ])
    }
    catch (err) {
        console.log(err);
    }
}