var axios = require("axios")

var githubUrl = "https://api.github.com/users/"

var api = {
    getUser(usernameParam){
        return axios.get(githubUrl + usernameParam)
        .then(function(response){
         return response
        })
        
    }
}

module.exports = api;
