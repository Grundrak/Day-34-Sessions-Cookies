const express = require('express');
const app = express();
const port = 3000;
const session = require('express-session');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

const users = [
  {
    username: 'alice',
    password: 'hashed_password',
    username: 'ahmed',
    password: 'password',
    username: 'nall',
    password: 'toro',
  },

];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(express.json());
app.set('view engine','ejs');
app.set('views','./views');

const registrationRoutes = require('./routes/registration');
app.use('/register', registrationRoutes);
const loginRoutes = require('./routes/login')
app.use('/login', loginRoutes);
app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });