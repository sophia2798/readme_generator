const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const {questions} = require("./questions")

const writeFileAsync = util.promisify(fs.writeFile);

async function readme() {
    try {
        const userResponse = await inquirer.prompt(questions);
        console.log(userResponse)
    }
    catch (err) {
        console.log(err);
    }
}

readme();