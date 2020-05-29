const express = require('express');
const app = express();
const fs = require('fs');
require('dotenv').config();
const getData = require("./code");
const port = 8000;
app.set('view engine', 'ejs');
app.use(express.static('./'))

app.get('/', async (req, res) => {
    try {
        let data = await getData();

        res.render('index.ejs', { data: JSON.stringify(data) });
        res.send();
    } catch (e) {
        res.send("error");
    }
})
app.post('/code', (req, res) => {
    console.log(req.file);
    res.send(req.body)
})

app.listen(port, () => {
    console.log("listening on the port " + port)
})