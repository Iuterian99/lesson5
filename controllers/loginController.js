const FS = require('../lib/fsdeal');
const users = new FS("../model/users.json")
module.exports ={
  GET: (req, res) =>{
    try {
      const allUsers = JSON.parse(users.read())
      res.render("login", { users: allUsers })
    } catch (err) {
      console.log(err);
      
    }
  },
  POST: (req, res) => {
    try {
      const { name, age } = req.body;
      const allUsers = JSON.parse(users.read())
      res.render("login", { name, age })
      allUsers.push({id: allUsers.length+1, name, age})
      users.write(allUsers)
      res.redirect("/users")
    } catch (err) {
      console.log(err);
      
    }
  }
}