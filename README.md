# lIRI-node-app
## What is LIRI? 
 LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _**Language Interpretation and Recognition Interface**_. LIRI will be a command line node app that takes in parameters and gives you back data.
## How to use LIRI? 
As said before, LIRI will be a command line node app. So just open the terminal and type in `node liri.js`, followed by a command and any value that you want to search for. 

There are four commands: `concert-this`, `spotify-this-song`, `movie-this`, and `do-what-it-says`.

`1.node liri.js concert-this <artist/band name here>`

This will return the following information in your terminal/bash window:
  >* Name of the venue 
  >* Venue location 
  >* Date of the event 

Example command line: node liri.js concert-this taylor swift

`2.node liri.js spotify-this-song <song name here>`

This will show the following information about the song in your terminal/bash window:
  >* Artist(s)
  >* The song's name
  >* A preview link of the song from Spotify
  >* The album that the song is from

By default, if there is no song provided, it will print out the information of the "The Sign" by Ace of Base.

Example command line: node liri.js spotify-this-song shake it off 

`3. node liri.js movie-this '<movie name here>`

This will output the following information to your terminal/bash window:
   >* Title of the movie.
   >* Year the movie came out.
   >* IMDB Rating of the movie.
   >* Rotten Tomatoes Rating of the movie.
   >* Country where the movie was produced.
   >* Language of the movie.
   >* Plot of the movie.
   >* Actors in the movie.

By default, if there is no movie provided,  the program will output data for the movie 'Mr. Nobody'.

Example command line: node liri.js movie-this avatar 

`4.node liri.js do-what-it-says`
This will read the text inside of random.txt and use it to call one of LIRI's commands. By default, the command is `spotify-this,"I Want it That Way"`. But you can change the command and value by editing text inside of the random.txt file.

## One more thing...
Every command you type in, the program will log the data to a .txt file called `log.txt`. It will serve as a log of all your past commands. 
