Framework:
git checkout -b joe origin/master

Setup -> npm install

------

Create db and table.

Making the db:

createdb imageboard;

Creating the table in the db:

psql imageboard -f images.sql;

------

db name: imageboard;

table name: images;

------

In db.js create a function which will SELECT all data in the table. In index.js, make app.get where it can render the data saved in the db. In script.js, make an IIFE. In index.html, if and loop used to render the image and title. *rendering img in vue is different from how it's done in html.

--------

axis- general https request library.

frontend/js vue -> back/index.js =>

back/db > back/index.js -> js.ve

gitignore -> 

- [ ] s3.js

- [ ] index.js

  ------

  