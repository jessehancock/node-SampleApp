//NEED A SIMPLE WAY to LOOK AT BADGE COUNT AND JAVASCRIPT POINTS ON TEAMTREEHOUSE
//USE NODE.JS TO CONNECT TO TREEHOUSES API
const https = require("https");




//Print out message
function printMessage(username, badgeCount, points) {
    const message = username + " has " + badgeCount + " total badge(s) and " + points + " points in JavaScript"
    console.log(message);
}

// Print out error messages
function printError(error) {
    console.error(error.message);
}



function get(username) {


    //CONNECT TO THE API URL (http://teamtreehouse.com/jessehancock2.json)
    const request = https.get("https://teamtreehouse.com/" + username + ".json", function(response) {
        let body = "";
        //Read the data
        response.on('data', function(chunk) {
            body += chunk;
        });
        response.on('end', function() {
                if (response.statusCode === 200) {
                    try {
                    //Parse the data
                        const profile = JSON.parse(body);
                    //Print the data
                        printMessage(username, profile.badges.length, profile.points.JavaScript);
                    } catch (error) {
                        //Parse Error
                        printError(error);
                    }
                } else {
                    //Status Code Error
                    printError({
                        message: "There was an error getting the profile for " + username
                    })
                }
            })
    });

    //Connection Error
    request.on("error", printError);
}

module.exports.get = get;
