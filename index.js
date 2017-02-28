'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 7000;

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('./client/dist'));

app.get('*', function(req, res, next) {
  res.redirect('/');
  next();
});

app.listen(port, function() {
  console.log('listening on port ' + port);
});
