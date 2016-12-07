const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port);
console.log('Server started');

// when deploying to heroku, replace start script with this:
// "start": "webpack && http-server -p $PORT",

//blahhhhhhh heroku not workinggg!!!
