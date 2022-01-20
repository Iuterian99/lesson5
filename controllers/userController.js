const FS = require('../lib/fsdeal');
const users = new FS("../model/users.json")

module.exports = {
  GET: (req, res) =>{
   try {
     const allUsers = JSON.parse(users.read())
      res.render("main", { users: allUsers })
   } catch (err) {
     console.log(err);
     
   }
  }
}