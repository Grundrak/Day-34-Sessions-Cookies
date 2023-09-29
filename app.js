const express = require('express');
const app = express();
const port = 3000;

const bodyparser = require(body-parser)
// Server Variable Structure
const users = [
    {
      username: 'alice',
      password: 'hashed_password',
    },
    // Add more user objects as needed
  ];
  app.use(express.static('public'));
  app.use(express.json());
app.set('view engine','ejs');
app.set('views','./views');






app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });