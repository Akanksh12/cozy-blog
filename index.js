const express = require('express')
const app = express()
const port = 3000
const path = require('node:path');

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: path.join(__dirname, "public")})
})

app.get('/about', (req, res) => {
    res.sendFile('about.html', {root: path.join(__dirname, "public")})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})