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

---------

- [ ] create a script 

- [ ] create vue.component

- [ ] add events in script.js

  ----

  How to part 3:

  <Imageboard Part 3>

  ​	index.js(backend) —> db.js —> vue.js —> html

  When clicked on image, want to show that one image (single page application).

  Create a template which will show one image that has been clicked.
  Find out the ‘id’ of the image that’s been clicked.

  Create a new template(script) outside of ‘main’.  This template will show image with its title, description, date. Add an eventlistener to the image when clicked, which will have the ‘id’ of the image.
  	@click = “clicked(images.id)”

  Close button —> @click= $emit(‘close’) --> <modal @close=“showmodal=false”>  : once close button is clicked, the parent 'modal' will respond and hide the showmodal.

  $emit: When you want to have a component affect it's parent, have the component emit events that the parent listens for. 

  In script.js add 'showmodal: false' in data. This will always show the modal, but will only appear when the image has been clicked. In methods, add 'clicked' which will set the showmodal to be true. Which also means that the id of clicked image can be found out. If console.log("this.showmodal"), can actually see the 'id' of the image on the console. 

  Now that I have the 'id' of the image, I can use it to find the corresponding image which is stored in the db. 

  In db.js, create a new function which will return the corresponding image to the 'id'. 

  In index.js, 

  ​	app.get('/getData/:showmodal', (req,res) =>{ 

  ​			db.showImage(req.params.showmodal)

  ​			.then(data => 

  ​					res.json(data.rows)

  ​					console.log("data.rows", data.rows);

  ​			)

  ​			.catch(err => {

  ​				console.log(err)

  ​			});

  ​	});

  req.params: An object containing parameter values parsed from the URL path.

  주소에 포함된 변수를 담는다. 예) https://okky.com/post/12345 면 12345 를 담는다.

  console.log("data", data.rows); 를 보면 id, url, username, title, description, created_at라는 정보를 확인 할 수 있다.

     res**.**json**() Sends a **JSON response composed of a stringified version of the specified data .

  ​	Sends the response to client.

  In component.js, in data, return url, title, description, username, date of the image.

  ------

  Adding Comments to the images.

   There should also be form fields present with which the user can add a comment - we need a field for users to enter their name as well as the comment itself. When a use submits a comment, that comment should appear in the list of comments.

  comment, username —> appear

      <image-modal v-if="currentImage" :id="currentImage" @close='closeModal'></image-modal>
      
      add clickhandler, value=id of the image clicked, passed the prop, what image to show,
          make ajax request to get the info of the image. all of the data about, commnet about the image
          new query getimagebyid, new query for comments: 2 seperate(image, comment), 
          (ajax requests),
          when gets data, comment /post - normal json (formData not involved),
          
          app.use(
              require('body-parser').json()
          ); instead of urlencoded
          
          make modal go away ->
          trigger emits event for the modal to hide.

SELECT * FROM images

WHERE id < $1

ORDER BY id DESC

LIMIT 20



know the id of the last image in db, check to see if the results has the id, suppress the 'more' button.

SELECT if FROM images

ORDER BY if ASC

LIMIT 1

value of last image id can change. 

—combine—(sub query)

SELECT * , (

​	SELECT if FROM images

​	ORDER BY if ASC

​	LIMIT 1

)

AS "lowestId" FROM images

WHERE id < $1

ORDER BY id DESC

LIMIT 20

TABLES:

<comments>

 id | image_id | username | comment | created_at 

<images>

 id | url|   username   | title  |  description   |   created_at         

click(add comment) —> save it in db (specifically to the id of the image ?)

-----

Part 4

Client side routing.

location.hash

location.hash.slice(1)

<script.js>

images: location.hash.slice(1),

<html>

<a :href="'#' + image.id">

check if url is valid, close the modal where id doen't exist. 

---

- [ ] comments don't show immediately!
- [ ] css











