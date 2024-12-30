// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license) {
    return '';
  }
  return `![License](https://img.sheilds.io/badge/license-${license}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license){
    return ``;
  }
  switch (license) {
    case `MIT`:
      return `https://opensource.org/licenses/MIT`;
    case `GPL`:
      return `https://www.gnu.org/licenses/gpl-3.0`;
    case `Apache`:
      return `https://opensource.org/licenses/Apache-2.0`;
    default:
      return``;
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license)
 {
  return '';
  
 }
 return `## License`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}


## Usage
${data.usage}

${renderLicenseSection(data.license)}
## Contributing
${data.contributing}



##Tests
${data.tests}
##Questions
If you have any questions, please feel free to reach out to us on:
- Github: [${data.github || 'No Github username provided'}] (https://github.com/${data.github})
- Email: [${data.email})(mailto:${data.email})
`;
}

export default generateMarkdown;
