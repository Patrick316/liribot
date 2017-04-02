var keys = require("./key.js");  
 
var Twitter = require('twitter');
 
var client = new Twitter(keys.twitterKeys);

  var spotify = require('spotify');

function mytweets(){

var params = {screen_name: 'Otomaltaigh'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    for(i=0; i <tweets.length; i++){
      console.log(tweets[i].text)
    }
  } else{
    console.log(error)
      }
   });
}
var action = process.argv[2];
// var value = process.argv[3];

switch (action) {
  case "mytweets":
       mytweets();
    break;

  case "spotify":
   runspot()
    break;

  case "withdraw":
    withdraw();
    break;

  case "lotto":
    lotto();
    break;
}

function mytweets(){

var params = {screen_name: 'Otomaltaigh'};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
      if (!error) {
      for(i=0; i <tweets.length; i++){
      console.log(tweets[i].text)
    }
  } 
  else{
    console.log(error)
      }
   });
} 
 function runspot() {
          spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
           if ( err ) {
           console.log(err);
            }
         else{
           for (var i = 0; i < data.tracks.items.length; i++) {
              
                console.log(data.tracks.items[i].album.name)
           //        console.log(data.tracks.items[i].name)
           //          console.log(data.tracks.items[i].artist.name)
           //
           } 
         }

     });
   } 

