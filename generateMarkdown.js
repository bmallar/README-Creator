// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license === "APACHE 2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === "GPL 3.0") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (license === "BSD 3") {
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  } else (license === "NONE")
  return ('')


}




// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `https://opensource.org/licenses/MIT`
  } else if (license === "APACHE 2.0") {
    return `https://opensource.org/licenses/Apache-2.0`
  } else if (license === "GPL 3.0") {
    return `https://www.gnu.org/licenses/gpl-3.0`
  } else if (license === "BSD 3") {
    return `https://opensource.org/licenses/BSD-3-Clause`
  } else (license === "NONE")
  return ('')
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents

1. [Description](#description)
2. [Email](#email)
3. [Github](#github)

  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}

  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}

  ## Questions
   **These are my contacts, if you have any further questions contact me here**
  - https://github.com/${data.github}
  - ${data.email}
  - ${data.phone}
## License
License Link: ${renderLicenseLink(data.license)}
`;
}

module.exports = generateMarkdown;
