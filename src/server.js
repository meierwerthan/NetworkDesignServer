const express = require('express');
const app = express();
const path = require('path');


const port = process.env.PORT || 5000;

// app.use(express.static(path.join(__dirname, 'build')));

app.listen(port, async() => {
    console.log(`Listening on port ${port}`)
});

app.get('/', (req, res) => {
    console.log(req)
    res.send({express: 'Connected to express!', results: "made it"})
})

app.get('/network-design',  (req, res) => {
    console.log(req)
    res.send({message: "I love learning about network design!"})
});

app.get('/thomas',  (req, res) => {
    console.log(req)
    res.send({message: "thomas loves theo!"})
});