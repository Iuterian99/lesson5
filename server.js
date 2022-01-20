const express = require("express");
const app = express();
const ejs = require("ejs");
console.log(ejs);
const userController = require("./controllers/userController")

app.set('view engine', 'ejs')

app.get("/users", userController.GET)

app.listen(9000, console.log(9000))