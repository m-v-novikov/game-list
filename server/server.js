const path = require('path');
const compression = require('compression');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'dist');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));
app.use(compression({level: 9}));

app.get('/*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log('Server is up!');
});
