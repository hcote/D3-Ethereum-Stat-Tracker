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

// blockchain.info
app.get('/', function(req, res) {
  axios.get('https://blockchain.info/latestblock')
    .then(function(response) {
      console.log(response.data.hash);
        axios.get(`https://blockchain.info/rawblock/${response.data.hash}`)
          .then(function(block) {
            console.log(block.data.prev_block);
         res.render('index', {block: block.data})
          })
        .catch(function(err) {
          console.log(err);
       })
     .catch(function(err) {
       console.log(err);
    })
  })
  // res.render('index')
})

// blockcypher
app.get('/test', function(req, res) {
  axios.get('https://blockchain.info/q/getblockcount')
    .then(function(response) {
         res.render('test', {blockheight: response.data})
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
