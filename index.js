var inquirer = require("inquirer")
const api = require("./api")
const generateHTML = require("./generateHTML.js")
const pdf = require("html-pdf")
const options = { format: "Letter" }



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

    .then(({ username, color }) => {
        console.log(color)
        api.getUser(username).then((data) => {

            let html = generateHTML.generateHTML(generateHTML.colors, color, data)
            pdf.create(html, options).toFile("./gitprofile.pdf", (err, res) => {
                if (err) {
                    console.log(err)
                    return err
                } else {
                    console.log(res)
                    return res
                }



            })

        });

    })