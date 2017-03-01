'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 7000;

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/client/dist'))

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'client/dist', 'index.html'))
});

app.listen(port, function() {
  console.log('listening on port ' + port);
});
