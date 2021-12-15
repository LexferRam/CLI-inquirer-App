const inquirer = require('inquirer');


inquirer.prompt(
    // #1
    // [
    //     {
    //         name: 'color',
    //         message: 'what is your favorite color?',
    //         default: 'red'
    //     }, {
    //         name: 'website',
    //         message: 'what is your favorite website?'
    //     }
    // ]

    // #2
    // {
    //     type: 'list',
    //     name: 'colors',
    //     message: 'what is your favorite color?',
    //     choices: ['red', 'blue', 'green']
    // }

    // #3
    // {
    //     type: 'rawlist',
    //     name: 'colors',
    //     message: 'what is your favorite color?',
    //     choices: ['red', 'blue', 'green']
    // }

    // #4
    // {
    //     type: 'expand',
    //     name: 'colors',
    //     message: 'what is your favorite color?',
    //     choices: [
    //         {
    //             key: 'a',
    //             value: 'red',
    //         },
    //         {
    //             key: 'b',
    //             value: 'white',
    //         },
    //     ]
    // }

    // #5
    // {
    //     type: 'checkbox',
    //     name: 'colors',
    //     message: 'what is your favorite color?',
    //     choices: [
    //         'red', 'blue', 'green'
    //     ]
    // }

    // #6
    // {
    //     type: 'password',
    //     name: 'secretText',
    //     message: 'Password: ',
    //     mask: '*'
    // }

    // #7
    {
        type: 'editor',
        name: 'code',
        message: 'Write some of your code: '
    }
)
    .then(answers => {
        console.log(answers)
    })