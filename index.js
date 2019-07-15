const express = require('express');
const app = express();
const db = require("./utils/db");
app.use(express.static('./public'));


app.get('/images', function(req, res) {
    db.getImages()
        .then(results => {
            // console.log("results.rows:", results.rows);
            res.json(results.rows);
        });
});

app.listen(8080, () => console.log('Vue is here!!!😜'));
