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

  Imageboard Part 2

  - gitignore = secrets.json

  - create secrets.json where AWS_KEY, AWS_SECRET is stored.
  - config.json add s3url and name of bucket.

  <db.js>

  - create a function which will add images to the db. 

  <script.js (vue)>

  There are two event handlers, and when the user clicks on upload button, want to upload the data(request) to the server.

  In methods, handleclick, console.log(formData) - will have the information that I need to upload. 

  <index.js>

  Add s3, config, multer, hid-safe
  
  --------------
  
  Imageboard part 3

Vue component

define global or vue instance

add deleting from yesterday exercise

parent chooses to decide to response

- [ ] comment - create table
  - comment, username, timestamp, id-column
  - component, 































