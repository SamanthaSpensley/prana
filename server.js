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



// const compileSass = require('express-compile-sass')
// const root = process.cwd();

// app.use(compileSass({
//   root: root,
//   sourceMap: true,
//   sourceComments: true,
//   watchFiles: true,
//   logToConsole: false
// }));
//
// app.use(express.static(root));
//
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'index.html'));
// });
