const {Router} = require("express");

const courseRouter = Router();

courseRouter.post("/purchase" , function(req,res) {

     res.json({
     message:"Purchase Completed"
 })


})

courseRouter.get("/preview " , function(req,res) {
   res.json({
     message:"Preview Completed"
 })

})

module.exports = {
    courseRouter : courseRouter
}