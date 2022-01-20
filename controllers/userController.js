const FS = require('../lib/fsdeal');
const users = new FS("../model/users.json")

module.exports ={
  GET: (req, res) =>{
    try {
      const allUsers = users.read();
      
      res.render("index", { users: allUsers });
    } catch (err) {
      console.log(err);
      
    }
  }
}