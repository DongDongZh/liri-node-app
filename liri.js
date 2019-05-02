//add code to read and set any environment variables with the dotenv package
require("dotenv").config();

// axios package 
var axios = require("axios");

//fs 
var fs = require("fs");

//moment
var moment = require("moment");

//spotify
var Spotify = require('node-spotify-api');

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
    spotifyMusic();
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

//function spotifyMusic 
function spotifyMusic() {
  var spotify = new Spotify({
    id: keys.spotify.id,
    secret: keys.spotify.secret
  });

  spotify
    .search({ type: 'track', query: value, limit: 2 })
    .then(function (response) {
      // console.log(response);
      console.log("\n-----------------");
      var data = response.tracks.items[0];
      console.log("Artist: " + data.album.artists[0].name +
        "\nThe Name of the Song: " + data.album.name +
        "\nPreview Link: " + data.external_urls.spotify +
        "\nAlbum: " + data.album.name);
      console.log("-----------------")
    })
    .catch(function (err) {
      console.log(err);
    });
};

debugger;

// function movie() case "movie-this"
function movie() {
  axios.get(" https://www.omdbapi.com/?apikey=604e2704&t=" + value)
    .then(function (response) {
      var data = response.data;
      // console.log(data); 
      console.log("\n-----------------")
      console.log(
        "Title of the movie: " + data.Title
        + "\nYear the movie came out: " + data.Year
        + "\nIMDB Rating of the movie: " + data.imdbRating
        + "\nRotten Tomatoes Rating of the movie: " + data.Ratings[1].Value
        + "\nCountry where the movie was produced: " + data.Country
        + "\nLanguage of the movie: " + data.Language
        + "\n Plot of the movie: " + data.Plot
        + "\nActors in the movie: " + data.Actors
      );
      console.log("-----------------")
    })
    .catch(function (error) {
      console.log(error);
    });
};

// case "do-what-it-says"
function what() {
  fs.readFile("random.txt","UTF8",function(err,data){
    if (err){
      return console.log(err)
    }
    // console.log(data); 
    var dataArr = data.split(",");
    // console.log(dataArr); 
    action = dataArr[0]; 
    value = dataArr[1];
    switch (action) {
      case "concert-this":
        concert();
        break;
      case "spotify-this-song":
        spotifyMusic();
        break;
      case "movie-this":
        movie();
        break;
      case "do-what-it-says":
        what();
        break;
    };
  })
};
