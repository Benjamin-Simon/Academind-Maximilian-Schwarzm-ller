const path = require('path');
const express = require('express');

const router = express.Router();

// router.get('/', (req, res, next) => {
//     console.log('Guard');
//     next();
// });

// router.get('/', (req, res, next) => {
//     res.send('<h1>Hello from Express!</h1>');
// });

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../','views','shop.html')) //__dirname - global variable wich simpy holds the absolute path of our operating system to this project folder 
});

module.exports = router;