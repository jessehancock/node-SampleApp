//NEED A SIMPLE WAY to LOOK AT BADGE COUNT AND JAVASCRIPT POINTS ON TEAMTREEHOUSE
//USE NODE.JS TO CONNECT TO TREEHOUSES API
const https = require("https");

const username = "jessehancock2";

function printMessage(username, badgeCount, points){
  const message = username + " has " + badgeCount + " total badge(s) and " + points + " in JavaScript"
  console.log(message);
}




//CONNECT TO THE API URL (http://teamtreehouse.com/jessehancock2.json)
const request = https.get("https://teamtreehouse.com/" + username + ".json", function(response){
  let body = "";
  console.log(response.statusCode);
//Read the data
  response.on('data', function(chunk){
    body += chunk;
  });
  response.on('end', function(){
    const profile = JSON.parse(body);
    console.dir(profile);
  })
  console.log(body);
//Parse the data
//Print the data
});
//This is to check error messages
request.on("error", function(error){
  console.error(error.message);
});
