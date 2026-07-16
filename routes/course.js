const {Router} = require("express");
const {purchaseModel} = require("../db");
const {courseModel} = require("../db");
const {userMiddleware} = require("../middlewares/user");

const courseRouter = Router();

courseRouter.post("/purchase" , userMiddleware, async function(req,res) {
    const userId = req.userId;
    const courseId = req.body.courseId;

    const purchase = await purchaseModel.create({
        userId:userId,
        courseId:courseId
    })

     res.json({
     message:"Purchase Completed"
 })


})

courseRouter.get("/preview " ,async function(req,res) {

    const userId = req.userId;

    const courses = await courseModel.find({});
   res.json({
     message:"Preview Completed"
 })

})

module.exports = {
    courseRouter : courseRouter
}