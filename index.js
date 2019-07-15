const express = require('express');
const app = express();
const db = require("./utils/db");
app.use(express.static('./public'));


app.get('/images', function(req, res) {
    db.getImages()
        .then(results => {
            console.log("results.rows:", results.rows);
            res.json(results.rows);
        });
});

app.listen(8080, () => console.log('Vue!!!'));

// let cities = [
//     {
//         name: 'Berlin',
//         country: 'DE'
//     },
//     {
//         name: 'Sarajevo',
//         country: 'Bih'
//     },
//     {
//         name: 'Tokyo',
//         country: 'Jp'
//     },
//     {
//         name: 'Seoul',
//         country: 'Kr'
//     }
// ];
//
// app.get('/cities', function(req, res) {
//     res.json(cities);
// });
