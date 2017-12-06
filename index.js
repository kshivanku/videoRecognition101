// Require the client
const Clarifai = require('clarifai');
const fs = require('fs');

// initialize with your api key. This will also work in your browser via http://browserify.org/
const app = new Clarifai.App({
 apiKey: 'a709fc8346a34e34853d563efa31daea'
});

// predict the contents of an image by passing in a url
app.models.predict(Clarifai.GENERAL_MODEL, 'Avengers.mp4', {video:true}).then(
  function(response) {
    var res = JSON.stringify(response, null, 2);
    fs.writeFile('output.json', res, function(){
      console.log("response written");
    });
  },
  function(err) {
    console.error("Error: ", err);
  }
);
