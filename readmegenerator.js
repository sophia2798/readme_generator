const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const {questions} = require("./questions")
const generate = require("./template");

const writeFileAsync = util.promisify(fs.writeFile);

async function readme() {
    try {
        const userResponse = await inquirer.prompt(questions);
        // console.log(userResponse)
        const readmeString = generate(userResponse);
        await writeFileAsync("README.md",readmeString);
        console.log("Success! You generated your README file!")
    }
    catch (err) {
        console.log(err);
    }
}

readme();