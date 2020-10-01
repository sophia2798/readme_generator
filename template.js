const generateREADME = response => {
    `#${response.title} 

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

    ## Contribution Guidelines
    ${response.contribution}

    Please ensure that PRIOR to any new contributions, you discuss your desired/planned changes via email with the owner(s) of the repository. Contact information can be found in the [Questions](#Questions) section. 

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