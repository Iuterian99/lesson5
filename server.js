/*
!EJS is a "template engine" that enables us to build one-tire application with MVC(Model View Controller) structure. for installing EJS we should write "npm i express ejs" in terminal or cmd!

!app.set('view engine', 'ejs') --> we need to set like this for ejs

in package.json we should write "dev": "nodemon server.js", "start": "node server.js"  in "scripts" part like below as in real proect we need to build server only once
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon server.js", --> for developer use only
    "start": "node server.js" --> in Real projects
  },
*/

const express = require("express");
const app = express();
const ejs = require("ejs");
console.log(ejs);
const userController = require("./controllers/userController")
const aboutController = require("./controllers/aboutController")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get("/users", userController.GET)
app.get("/about", aboutController.GET)

app.listen(9000, console.log(9000))