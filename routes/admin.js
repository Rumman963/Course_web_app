const {Router} = require("express");
const {adminModel} = require("../db");

const jwt = require("jsonwebtoken");
const {JWT_ADMIN_SECRET} = require("../config");

const adminRouter = Router();


adminRouter.post("/signup" , async function(req,res) {

    const {email ,password , firstName ,lastName}= req.body;

    await adminModel.create({
    email:email,
    password:password,
    firstName:firstName,
    lastName:lastName
})


     res.json({
        message:"Signup done"
    })
})

adminRouter.post("/signin" , async function(req,res) {

      const {email , password} = req.body;
      const admin = await adminModel.findOne({
      email:email,
      password:password
 });

 if(admin){
     const token =jwt.sign({
         id:admin._id,
     } , JWT_ADMIN_SECRET)
     res.json({
         token:token
     })
 }else{
      res.status(403).json({
         message:"Incorrect Credentials"
      })
     }
})

adminRouter.post("/createCourse" ,adminMiddleware , async function(req,res) {
    const adminId = req.userId;

    const {title , description , imageURL , price} = req.body;


    const course = await courseModel.create({
        title:title ,
        description:description , 
        imageURL:imageURL , 
        price:price , 
        creatorId:adminId
    })
 



     res.json({
        message:"Course Created",
        courseId:course._id
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