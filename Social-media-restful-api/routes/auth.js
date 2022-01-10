const router = require('express').Router();
const User = require("../models/User");
// allows users password to scrabbled into jibberish for security reasons( prevent hacks)
const bcrypt = require('bcrypt')
//register, 
router.post("/register", async (req,res) => {  
 
  try{
    //salt makes the hasing even more diffuclt to hack by not being predicatle 
      const salt = await bcrypt.genSalt(10);
      // bcrypt.hash is what scrabbles our users password into random letters and protects it for safety reasons
      const hashedPassword = await bcrypt.hash(req.body.password, salt)
//create new users
      const newUser = new User({
        // using req.body to acess our json and populate it with a json user and assigns it to our user database
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
        desc: req.body.desc
      })
    
    const user = await newUser.save()
    res.status(200).json(user)
  } catch(err){
    console.log(err)
  }
})

//Login
router.post("/login", async(req, res) => {
  try{
    const user = await User.findOne({ email: req.body.email })
    if(!user){  
      res.status(404).json("user not found")
    }

    // compares the hashed password to orignal user.password
   const validPassword = await bcrypt.compare(req.body.password , user.password)
   if(!validPassword){
     res.status(404).json('wrong password')
   }
   res.status(200).send(user)
  } catch(err){
    console.log(err)
  }
     
})

module.exports = router;
