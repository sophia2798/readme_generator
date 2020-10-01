const questions = [{
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
    message:"What is the name of the repository associated with this README?",
    name:"repo"
},
{
    type:"checkbox",
    message:"Was VSCode used to create this project?",
    choices:["Yes","No"],
    name:"vscode"
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
},
{
    type:"input",
    message:"Enter your LinkedIn username",
    name:"linkedin"
}
];

module.exports = {
    questions:questions
}