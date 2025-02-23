//Create web server
const express = require('express');
const app = express();

//Create a port
const port = 3000;

//Create a route
app.get('/comments', (req, res) => {
  res.send('Hello World');
});

//Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});