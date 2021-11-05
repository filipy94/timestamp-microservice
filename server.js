// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var moment = require('moment');
moment().format();

app.use(bodyParser.urlencoded({extended: false}));

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
const { now } = require('moment');
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

app
  .route('/api/:date?')
  // timestamp request API
  .get((req, res, next) => {
    if(!isNaN(req.params.date)) {
      req.date = moment.unix(req.params.date/1000).utc();
      next();
    } else {
      req.date = moment.utc(req.params.date);
      next();
    };
  }, (req, res) => {
    req.utc = new Date(req.date);
    if (req.utc.toString() === 'Invalid Date') {
      res.json({error: req.utc.toString()});
    } else {
      res.json({unix: Date.parse(req.date), utc: req.utc.toUTCString()});
    };
  })
  // timestamp post API
  .post((req, res, next) => {
    if(!isNaN(req.body.date)) {
      req.date = moment.unix(req.body.date/1000).utc();
      next();
    } else {
      req.date = moment.utc(req.body.date);
      next();
    };
  }, (req, res) => {
    req.utc = new Date(req.date);
    if (req.utc.toString() === 'Invalid Date') {
      res.json({error: req.utc.toString()});
    } else {
      res.json({unix: Date.parse(req.date), utc: req.utc.toUTCString()});
    };
  });
