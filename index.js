import inquirer from "inquirer";

inquirer.prompt([
    {
        type: 'list',
        name: 'theme',
        message: 'What do you want to do?',
        choices: [
          'Order a pizza',
          'Make a reservation',
          'Ask for opening hours',
        ],
    },
    {
        type: 'checkbox',
        name: 'checkbox',
        message: 'Do you want toppings?',
        choices: [
            'Order a pizza',
            'Make a reservation',
            'Ask for opening hours',
          ],
    },
    {   
        type: 'input',
        name: 'input',
        message: 'What is your name?'
    },
    {   
        type: 'number',
        name: 'number',
        message: 'What is your phone number?'
    },
    {   
        type: 'confirm',
        name: 'confirm',
        message: 'Are you sure you want to order a pizza?'
        
    },
    {
        type: 'rawlist',
        name: 'rawlist',
        message: 'This is a rawlist. I dont know what to put as the question here',
        choices: [
            'Order a pizza',
            'Make a reservation',
            'Ask for opening hours',
          ],
    },
    {
        type: 'expand',
      message: 'Conflict on `file.js`: ',
      name: 'overwrite',
      choices: [
        {
          key: 'y',
          name: 'Overwrite',
          value: 'overwrite',
        },
        {
          key: 'a',
          name: 'Overwrite this one and all next',
          value: 'overwrite_all',
        },
        {
          key: 'd',
          name: 'Show diff',
          value: 'diff',
        },
        new inquirer.Separator(),
        {
          key: 'x',
          name: 'Abort',
          value: 'abort',
        },
      ],
    },
    {
        type: 'password',
        name: 'password',
        message: 'Type in your password'
    },
    {
        type: 'editor',
        name: 'editor',
        message: 'This is a editor type'
    }
]).then((answers) => {
    console.log(JSON.stringify(answers, null, ' '));
})