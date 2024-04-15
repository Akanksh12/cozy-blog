const express = require('express')
const app = express()
const port = 3000
const path = require('node:path');
const fs = require('node:fs');

var showdown  = require('showdown'),
    converter = new showdown.Converter();

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: path.join(__dirname, "public")})
})

app.get('/about', (req, res) => {
    res.sendFile('about.html', {root: path.join(__dirname, "public")})
})

app.get(/\/posts\/.*/, (req, res) => {
    console.log(path.join(__dirname, req.path + ".md"))
    fs.readFile(path.join(__dirname, req.path + ".md"), (err, data) => {
        if (err) {
           res.redirect(404, '/notfound') 
        };
        console.log(data)
        res.send(converter.makeHtml(data))
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})