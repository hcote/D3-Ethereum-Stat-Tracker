var express = require("express"),
  app = express(),
  axios = require('axios');

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// blockcypher
app.get('/', function(req, res) {
  axios.get('https://blockchain.info/q/getblockcount')
    .then(function(response) {
         res.render('index', {blockheight: response.data})
       })
     .catch(function(err) {
       console.log(err);
    })
  // res.render('index')
})

app.get('/data', function(req, res) {
  axios.get('https://blockchain.info/q/getblockcount')
    .then(function(response) {
      console.log(response.data);
         res.json(response.data)
        .catch(function(err) {
          console.log(err);
       })
  })
})

  app.listen(process.env.PORT || 3000, function() {
    console.log("server started");
  });
