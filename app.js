const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.urlencoded({ extended: true }))

app.use('/', (req, res, next) => {
    console.log('Guard');
    next();
});

app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit"></form>');
});

app.post('/product', (req, res) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);

