const express = require('express');
const { get } = require('http');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('hello world');
});



app.get('/gabe', (req, res) => {
    res.send('HIII LEVI YOU LOOK SUS');
});

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
})
