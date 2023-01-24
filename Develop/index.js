const inquirer  = require('inquirer')
const fs = require('fs')

nquirer
  .prompt([
    {
      type: "input",
      name: "projecttitle",
      message: "What is the title of the project?",
    },
    {
        type: "choice",
        name: "license",
        message: "Which license the application is covered under",
        choice:["MIT","MIT License","Apache"]
      },
    {
        type: "input",
        name: "description",
        message: "Provide a short description explaining the what, why, and how of your project. Such as, what was your movitivation? What problem does it solve?"
    },
    {
      type: "input",
      name: "installation",
      message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running. ",
    },
    {
      type: "input",
      name: "usagae",
      message: "Provide instructions and examples for use.",
    },
    {
        type: "input",
        name: "contribution",
        message: "Provide instructions for contribution.",
      },
      {
        type: "input",
        name: "test",
        message: "Provide examples on how to run the tests of the application",
      },
    {
      type: "input",
      name: "email",
      message: "Please enter your email address.",
    },
    {
      type: "input",
      name: "githubprofile",
      message: "What is your Github profile name",
    },
  ])
  .then((data) => {
    const filename = README.md;

    fs.writeFile(filename,
      `
      ##${data.projecttitle}

      ##Table of Content
      -[Description](#description)
      -[Installation](#installation)
      -[Usage](#usage)
      -[Contribution](#contribution)
      -[Test](#test)
      -[Question](#question)

      ##Description
      ${data.description}

      ##Installation
      ${data.installation}

      ##Usage
      ${data.usage}

      ##Contribution
      ${data.contribution}

      ##Test
      ${data.test}

      ##Question
      Please see more profiles at my [GitHub profile](https://github.com/${data.githubprofile})
      Please contact me at [email](${data.email}) if you have any questions.
    `,
      (err) => (err ? console.log(err) : console.log("Success!"))
    );
  });
