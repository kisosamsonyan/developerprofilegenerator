var inquirer = require("inquirer") 
var api = require("./api")
var generateHTML = require("./generateHTML.js")

inquirer 

    .prompt([

       {
           type: "input",
           message: "What is your github username?",
           name: "username"
       },
       {
            type: "list",
            message: "Choose your color.",
            name: "color",
            choices: ["red", "blue", "green", "pink"]
       }

    ])

    .then(({username, color}) => {
        console.log(color)
        api.getUser(username).then((data) => {
            generateHTML.generateHTML(generateHTML.colors, color, data);

        })

    });



    
