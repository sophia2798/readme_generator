const generateREADME = response => {
    let licenseDescription = "";
    let badge = "";
    if (response.license === "MIT") {
        licenseDescription = "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.";
        badge = "MIT-green.svg"
    }
    else if (response.license === "Apache 2.0") {
        licenseDescription = "A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.";
        badge = "Apache%202.0-yellowgreen.svg"
    }
    else if (response.license === "GNU GPL v3.0") {
        licenseDescription = "Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.";
        badge = "GPLv3.0-blue.svg"
    }
    
    `#${response.title} 
    ![Github license](https://img.shields.io/badge/License-${badge})

    ## Description
    ${response.description}
    
    ## Table Of Contents
    - [Access and Installation](#Access-and-Installation)
    - [Usage](#Usage)
    - [License](#License)
    - [Contribution Guidelines](#Contribution-Guidelines)
    - [Test Instructions](#Test-Instructions)
    - [Questions](#Questions)
    
    ## Access and Installation
    
    This project can be accessed either via the GitHub Repository page or the deployed public page. 
    
    - [GitHub Repository](https://github.com/${response.github}/${response.repo})
    - [Deployed Page](https://${repsonse.github}.github.io/${response.repo}/)
    
    To open and edit code files, you will need a text editor. The one used to create this page was Visual Studio Code (https://code.visualstudio.com/).
    
    To install this repository, you can git clone the repository using the green "Code" button. You can copy and paste either the HTML or SSH URL.
    
    ## Usage
    ${response.usage}

    ## License
    ${response.license}
    ${licenseDescription}

    ## Contribution Guidelines
    ${response.contribution}

    Please ensure that PRIOR to any new contributions, you discuss your desired/planned changes via email with the owner(s) of the repository. Contact information can be found in the [Questions](#Questions) section. Changes should be reflected in an updated README as well. To ensure a high quality of code and minimal conflicts, pull requests can only be merged after being approved by another developer. 

    To ensure a welcoming working environment, any contributor to this project must help maintain a harassment-free and safe environment. This includes:
        - Using inclusive language
        - Being respectful of various backgrounds and opinions
        - Accepting constructive criticism without aggression or anger
        - Being aware of what benefits the whole community
        - Showing kindness and empathy to one another

    ## Test Instructions
    ${response.test}

    ## Questions
    If you have any questions, please feel free to reach out via email at ${response.email}. Any further information can be found on my [GitHub Profile](https://github.com/${response.github}) or my [LinkedIn Profile](https://linkedin.com/in/${response.linkedin}).
    `
}