const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./generateMarkdown")

const generateMD = function (myObj) {
    // const  answerObj= {
    //  title: title,
    //  description: answers.description,
    //  email: answers.email,
    //  github: answers.github,
    // license: answers.license
    // }

    console.log(myObj)

    return myObj;
}

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a short description of your project',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Explain the installation process',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Explain the usage of code',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Explain contributing code',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Explain tests done in Node',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email adress?',
        },
        {
            type: 'input',
            name: 'phone',
            message: 'What is your phone number?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What kind of license should your project have?',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'NONE']
        },

    ])




    .then((answers) => {
        const mdPageContent = generateMarkdown(answers);
        console.log(mdPageContent)

        fs.writeFile('./output/indexvid.md', mdPageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md!')
        );
    });
