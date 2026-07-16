const {Router} = require("express");
const {adminModel} = require("../db");
const jwt = require("jsonwebtoken");
const {JWT_ADMIN_SECRET} = require("../config");
const {adminMiddleware} = require("../middlewares/admin");

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


adminRouter.put("/changeCourse", adminMiddleware , async function(req,res){
        
       const adminId = req.userId;

       const {title , description , imageURL , price , courseId} = req.body;


       const course = await courseModel.updateOne({
        _id:courseId,  
        creatorId:adminId
       } , 

       {
            title:title ,
            description:description , 
            imageURL:imageURL , 
            price:price , 
       })


    res.json({
        message:"Course Changed",
        courseId:course._id
    })
})

adminRouter.get("/course/bulk",adminMiddleware , async function(req,res){

       const adminId = req.userId;
       const course = await courseModel.find({
       creatorId:adminId
})

    res.json({
        message:"Course seen",
        courseId:course._id
    })
})

module.exports={
    adminRouter: adminRouter
}