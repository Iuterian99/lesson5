const FS = require('../lib/fsdeal');
const users = new FS("../model/users.json")

module.exports ={
  GET: (req, res) =>{
    try {
      const allUsers = users.read();
      console.log(allUsers);
      
      res.render("index")
    } catch (err) {
      console.log(err);
      
    }
  }
}