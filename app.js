const express = require('express');
const app = express();
const port = 8089;
const path = require('path')
const multer  = require('multer')

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use("/uploads", express.static(path.join(__dirname, 'uploads')));

// All Router Set In Sever.js
const Mainrouter = require('./router/index');
const db = require('./config/database');
app.use(Mainrouter);

app.listen(port, (err) => {
    if (!err) {
        db();
        console.log('server start on port Properly..');
        console.log('http://localhost:' + port);
    }
})