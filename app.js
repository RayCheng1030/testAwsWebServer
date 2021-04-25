const express = require('express');
const app = express();
const postRoute = require('./router/router');
const port = process.env.port || 3000;
const mongoose = require('mongoose');
require('dotenv/config');

// middleware express.json() = bodyParser.json();
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
// control route "/posts"
app.use('/posts', postRoute);

// welcome to my web server
app.get('/', (req, res) => {
    console.log("welcome to my web server");
});


mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (!err) {
        app.listen(port, () => {
            console.log(`WebServer start running at http:localhost:${port}`);
        });
    }
});