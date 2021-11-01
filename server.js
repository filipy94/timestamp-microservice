// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});


app.get('/api/:date', (req, res, next) => {
  if (!/\D/.test(req.params.date)) {          //check if is Unix value
    req.toNum = Number(req.params.date);
    req.date = new Date(req.toNum);
    req.unix = req.toNum;
    next();
  } else {
    req.date = new Date(req.params.date);
    if (req.date == 'Invalid Date') {         //check if is a valid new Date(date_string)
      req.unix = false;
      next();
    } else {
      req.unix = Date.parse(req.params.date);
      next();
    };
  };
}, (req, res) => {
  if (!req.unix) {
    res.json({ 'error' : "Invalid Date" });
  } else {
    res.json({'unix': req.unix, 'utc': req.date.toUTCString()});
  };
});

app.get('/api', (req, res, next) => {
  req.date = new Date();
  next();
}, (req, res) => {
  res.json({'unix': Date.parse(req.date), 'utc': req.date.toUTCString()});
});