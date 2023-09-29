const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
// Server Variable Structure
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(express.json());
app.set('view engine','ejs');
app.set('views','./views');






const registrationRoutes = require('./routes/registration');
app.use('/register', registrationRoutes);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });