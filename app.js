//NEED A SIMPLE WAY to LOOK AT BADGE COUNT AND JAVASCRIPT POINTS ON TEAMTREEHOUSE
//USE NODE.JS TO CONNECT TO TREEHOUSES API
const https = require("https");

const username = "jessehancock2";

function printMessage(username, badgeCount, points){
  const message = username + " has " + badgeCount + " total badge(s) and " + points + " in JavaScript"
  console.log(message);
}

const request = https.get("https://teamtreehouse.com/" + username + ".json", function(response){
  console.log(response.statusCode);
})


//CONNECT TO THE API URL (http://teamtreehouse.com/jessehancock2.json)
//Read the data
//Parse the data
//Print the data
