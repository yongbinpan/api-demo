// https://codeforgeek.com/handle-get-post-request-express-4/

// cors
// https://expressjs.com/en/resources/middleware/cors.html


// https://stackoverflow.com/questions/10434001/static-files-with-express-js



// const bodyParser = require("body-parser");
const express = require("express");
const cors = require('cors')
const path = require('path');
const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors())
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public'))); //  "public" off of current is root


app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log(`POST request: username is ${username} and password is ${password}`);
    // res.json(`You are now logged in Mr(s) ${username}`);
    var ret = { val: `You are now logged in Mr(s) ${username}` };
    res.json(ret);
});

app.listen(3000, () => {
    console.log("Started on http://localhost:3000");
});

