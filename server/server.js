const express = require('express');
const path = require('path');
const fs = require('fs');
// const cors = require('cors')
const { get } = require('http');
const app = express();
const port = 3000;
// app.use(cors)
app.get('/', (req, res) => {
    // res.send('hello world');
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.get('/csv-data', (req, res) => {
    const cvsPath = path.join(path.join(__dirname, "..", 'data', 'zonal_sea_averages.csv'));
    fs.readFile(cvsPath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return
        }
        res.type('text/plain');
        res.send(data);

    });
});



app.get('/gabe', (req, res) => {
    res.send('HIII LEVI YOU LOOK SUS');
});

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
})
