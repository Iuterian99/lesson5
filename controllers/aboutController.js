module.exports ={
  GET: (req, res) =>{
    try {
      const { name } = req.query;
      res.render("about", {name})
    } catch (err) {
      console.log(err);
      
    }
  }
}