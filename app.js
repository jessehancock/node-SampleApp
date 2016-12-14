const profile = require("./profile.js");

// let users = ["jessehancock2", "davemcfarland", "chalkers"]; //if you dont use process

//process.argv lets returns an array with users after you type it in the terminal ex. node app.js jessehancock2
let users = process.argv.slice(2);

users.forEach(profile.get);
