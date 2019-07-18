const express = require('express');
const app = express();
const multer = require('multer');
const uidSafe = require('uid-safe');
const path = require('path');
const db = require("./utils/db");
const s3 = require('./s3');
const config = require('./config');
const bodyParser = require('body-parser');


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
            // console.log("results.rows:", results.rows.id);
            res.json(results.rows);
        });
});

app.get("/getData/:showmodal", (req, res) => {
    db.showImage(req.params.showmodal)
        .then(data => {
            res.json(data.rows);
            // console.log("data", data.rows);
        })
        .catch(err => {
            console.log(err);
        });

});

app.post("/comment/:showmodal", (req, res) => {
    db.addComments(req.params.showmodal, req.body.user_name, req.body.comment)
        .then(val => {
            res.json(val.rows[0]);
        })
        .catch(err => {
            console.log("err in app post /comment",err);
        });
});

app.get("/comment/:showmodal", (req,res) => {
    return db.showComments(req.params.showmodal)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            console.log("err in app get /comment", err);
        });
});

app.listen(8080, () => console.log('Vue is here!!!😜'));
