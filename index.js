// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';



// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'Input',
        name: 'title',
        message: 'What is the title of this project',
        validate: (input) => (input ? true : 'Please enter a project title!'),
},
{
    type:'input',
    name: 'description',
    message:'Provide a short description of this project:',
    validate: (input) => (input ? true: 'Please enter installation instruction!' )
},
{
    type: 'input',
    name: 'usage',
    message: 'How do you use this application',
    validate: (input) => (input ? true : 'Please provide usage information!'),
},
{
    type: 'list',
    name: 'license',
    message: 'Choose a license for this project:',
    choices: ['MIT', 'GPL', 'Apache', 'None'],
},
{
    type: 'Input',
    name: 'tests',
    message: 'What are the test instructions?',
    validate: (input) => (input ? true : 'Please provide test instructions'),
},
{
    type: 'input',
    name: 'github',
    message: 'Enter your github username',
    validate: (input) => (input ? true: 'Please enter your github username'),

},
{
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
    validate: (input) => (input ? true : 'Please enter your email address')
},

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log('README.md generated successfully!');
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const markdownContent = generateMarkdown(answers);
        writeToFile('README.md', markdownContent);
    });
}

// Function call to initialize app
init();
