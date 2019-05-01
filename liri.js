//add code to read and set any environment variables with the dotenv package
require("dotenv").config();

// axios package 
var axios = require("axios");

//fs 
var fs = require("fs");

//moment
var moment = require("moment");

//add the code required to import the keys.js file and store it in a variable.
var keys = require("./keys.js");

//process.argv command line  
var liriArgv = process.argv;
var action = liriArgv[2];
var value = liriArgv[3];

//switch case 
switch (action) {
  case "concert-this":
    concert();
    break;
  case "spotify-this-song":
    spotify();
    break;
  case "movie-this":
    movie();
    break;
  case "do-what-it-says":
    what();
    break;
};

// function concert 
function concert() {
  axios.get("https://rest.bandsintown.com/artists/" + value + "/events?app_id=codingbootcamp")
    .then(function (response) {
      var data = response.data[0];
      // console.log(data); 
      console.log("\n-----------------")
      console.log("Name of the Venue: " + data.venue.name + "\nVenue Location: " + data.venue.city + ", " + data.venue.region + ", " + data.venue.country
        + "\nDate of the Event: " + moment(data.datetime).format('L'));
      console.log("-----------------")
    })
    .catch(function (error) {
      console.log(error);
    });
};


