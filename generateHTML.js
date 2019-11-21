

const colors = {
  green: {
    wrapperBackground: "#E6E1C3",
    headerBackground: "#C1C72C",
    headerColor: "black",
    photoBorderColor: "#black"
  },
  blue: {
    wrapperBackground: "#5F64D3",
    headerBackground: "#26175A",
    headerColor: "white",
    photoBorderColor: "#73448C"
  },
  pink: {
    wrapperBackground: "#879CDF",
    headerBackground: "#FF8374",
    headerColor: "white",
    photoBorderColor: "#FEE24C"
  },
  red: {
    wrapperBackground: "#DE9967",
    headerBackground: "#870603",
    headerColor: "white",
    photoBorderColor: "white"
  }
};

function generateHTML(colors, color, data, locationURL) {
 
  return `<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
      <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
      <title>Document</title>
      
      
      <style>

      @page {
        margin: 0;
    }

    html,
    body,
        {
        margin: 0;
        padding: 0;
        height: 100%;
    }

    body {
        background-color: #ffffff;
        color: ${colors[color].fontShadow};
        -webkit-print-color-adjust: exact !important;
    }

    #header-background {
        background-color: ${colors[color].headerBackground};
        height: 350px;
        margin: 0;
    }

    #footer-background {
        background-color: ${colors[color].headerBackground};
        height: 250px;
        margin: 0;
    }

    #wrapper {
        width: 90%;
        background-color: ${colors[color].wrapperBackground};
        margin: auto;
        margin-top: -300px;
        border-radius: 20px;
        padding-bottom: 10px;
    }

    #profile-pic {
        width: 250px;
        height: 250px;
        border: 7px solid;
        border-color: ${colors[color].borderColor};
        border-radius: 50%;
        box-shadow: 3px 4px 20px ${colors[color].fontShadow};
        margin: auto;
        object-fit: cover;
        position: relative;
        top: -30px;
    }

    h1 {
        text-align: center;
        font-family: 'Poppins', sans-serif;
        font-weight: bolder;
    }

    h2,
    h3 {
        text-align: center;
        font-family: 'Roboto', sans-serif;
        font-weight: lighter;
    }

    #name {
        font-size: 2.5em;
        margin-top: 0;
    }

    .git-btn {
        width: 300px;
        display: inline-block;
        padding: 20px;
        background-color: ${colors[color].wrapperBackground};
        margin: 0 10px 20px 10px;
        border-radius: 20px;
    }

    #git-buttons {
        margin-left: 67px;
    }

    .buttons {
        margin: 5px auto;
    }

    #message {
        padding: 20px;
    }

    a:link, a:visited {
        color: ${colors[color].fontShadow};
        text-decoration: none;
    }

    @media print { 
        body { 
            height: 3300px;
            zoom: .7;
        } 
    }
          
      </style>
      </head>
      
      
      <body>

   
    <div id="header-background"></div>
        <div id="wrapper">
            <h1><img id="profile-pic" src=${data.data.avatar_url} alt="profile-pic"></h1>
            <h1 id="name">Hi! My name is ${data.data.name}</h1>
            ${data.data.company != null ? `<h3>Currently @ ${data.data.company}</h3>` : ``}
            <h2>
            ${data.data.location != null ? `<a href="https://www.google.com/maps/search/?api=1&query=${locationURL}">
            <i class="fas fa-map-marked-alt"><span>&nbsp;</span></i>${data.data.location}</a>
            <span>&emsp;</span>` : ``}
            <a href="${data.data.html_url}"><i class="fab fa-github"><span>&nbsp;</span></i>GitHub</a>
            ${data.blog != "" ? `<span>&emsp;</span>
            <a href="${data.data.blog}"><i class="fas fa-globe"><span>&nbsp;</span></i>Website</a>` : ``}
            </h2>
        </div>
        <div id="message">
            <h1>${data.bio != null ? `${data.data.bio}` : ``}</h1>        
        </div>
        <div id="git-buttons">
            <div class="github-buttons">
                <div class="git-btn" id="repos">
                    <h2 class="buttons">Public Repositories</h2>
                    <h2 class="buttons">${data.data.public_repos}</h2>
                </div>
                <div class="git-btn" id="stars">
                    <h2 class="buttons">Github Stars</h2>
                    <h2 class="buttons">${data.data.public_gists}</h2>
                </div>
            </div>
            <div class="github-buttons">
                <div class="git-btn" id="followers">
                    <h2 class="buttons">Followers</h2>
                    <h2 class="buttons">${data.data.followers}</h2>
                </div>
                <div class="git-btn" id="following">
                    <h2 class="buttons">Following</h2>
                    <h2 class="buttons">${data.data.following}</h2>
                </div>
            </div>
        </div>
        <div id="footer-background"></div>
</body>
</html>
      
      `
        }

module.exports = {

  generateHTML: generateHTML,
  colors: colors
}

