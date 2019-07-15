Framework:
git checkout -b joe origin/master

Setup -> npm install

------

Create db and table.

createdb imageboard;

psql imageboard -f images.sql;

------

db name: imageboard;

table name: images;

------

db -> render -> browser

created db function in db.js which reads url, title of the image.

in index.js use db to render.

what does vue do?

