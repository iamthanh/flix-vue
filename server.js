const express = require('express');
const app = express();
const port = process.env.PORT || 5150;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('*', (req, res) => {
  console.log('Path requested: ' + req.route.path);
});