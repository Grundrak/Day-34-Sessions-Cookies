const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('registration', req.query);
      });

      const users = [
        {
          username: 'alice',
          password: 'hashed_password',
        },
        // Add more user objects as needed
      ];
      router.post('/submit', (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
      
        // Process the registration data (e.g., save to a database)
        // Redirect or render a success page
        res.render('registration-success', { username });
      });







module.exports = router;