module.exports = {
  GET: (req, res) =>{
   try {
      res.render('main')
   } catch (err) {
     console.log(err);
     
   }
  }
}