const express = require('express');
const app = express();
const multer = require('multer');
const uidSafe = require('uid-safe');
const path = require('path');
const db = require("./utils/db");
const s3 = require('./s3');
const config = require('./config');


const diskStorage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, __dirname + '/uploads');
    },
    filename: function (req, file, callback) {
        uidSafe(24).then(function(uid) {
            callback(null, uid + path.extname(file.originalname));
        });
    }
});

const uploader = multer({
    storage: diskStorage,
    limits: {
        fileSize: 2097152
    }
});

app.use(express.static('./public'));
app.use(require('body-parser').json());

app.post('/upload', uploader.single('file'), s3.upload, function(req, res) {

    let username = req.body.username;
    let title = req.body.title;
    let description = req.body.description;
    const url = config.s3Url + req.file.filename;
    // console.log(url);

    db.addImages(
        url,
        username,
        title,
        description
    ).then(val => {
        res.json(val.rows[0]);
        // console.log(val);
    });
});

app.get('/images', function(req, res) {
    db.getImages()
        .then(results => {
            // console.log("results.rows:", results.rows);
            res.json(results.rows);
        });
});



app.listen(8080, () => console.log('Vue is here!!!😜'));
