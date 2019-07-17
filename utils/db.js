var spicedPg = require('spiced-pg');
let db;

if(process.env.DATABASE_URL) {
    db = spicedPg(process.env.DATABASE_URL);
} else {
    db = spicedPg('postgres:postgres:postgres@localhost:5432/imageboard');
}

exports.getImages = function getImages() {
    return db.query('SELECT * FROM images ORDER BY created_at DESC LIMIT 30');
};

// exports.getImagesOn = () => {
//     return db.query('SELECT * FROM images').then(({ rows }) => rows);
// };

exports.addImages = function addImages(
    url, username, title, description
) {
    return db.query(`INSERT INTO images (url, username, title, description)
        VALUES ('${url}', '${username}', '${username}', '${description}')
        RETURNING *`);
};

exports.showImage = function showImage(id) {
    return db.query(`SELECT * FROM images WHERE id=$1`, [id]);
};
