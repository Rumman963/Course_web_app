const {Router} = require("express");
const {adminModel} = require("../db");

const adminRouter = Router();


adminRouter.post("/signup" , function(req,res) {


     res.json({
        message:"Signup endpoint"
    })
})

adminRouter.post("/signin" , function(req,res) {


     res.json({
        message:"Signin Endpoint"
    })
})

adminRouter.post("/createCourse" , function(req,res) {




     res.json({
        message:"Course Created"
    })
})


adminRouter.put("/changeCourse" , function(req,res){

    res.json({
        message:"Course Changed"
    })
})

adminRouter.get("/course/bulk", function(req,res){

    res.json({
        message:"Course seen"
    })
})


module.exports={
    adminRouter: adminRouter
}