const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const {questions} = require("./questions")
const generate = require("./template");

const writeFileAsync = util.promisify(fs.writeFile);

async function readme() {
    try {
        const readmeTitle = await inquirer.prompt({
            type:"input",
            message:"Provide a title for your README.md",
            name:"title"
        })
        const userResponse = await inquirer.prompt(questions);
        // console.log(userResponse)
        const readmeString = generate(userResponse);
        await writeFileAsync(`README_${readmeTitle.title}.md`,readmeString);
        console.log("Success! You generated your README file!")
    }
    catch (err) {
        console.log(err);
    }
}

readme();