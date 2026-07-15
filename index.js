const express = require('express');
const app = express();
const {userRouter} = require("./routes/user");
const {courseRouter} = require("./routes/course");
const {adminRouter} = require("./routes/admin");
const mongoose =require('mongoose');



app.use("/api/v1/user" , userRouter);
app.use("/api/v1/admin" , adminRouter);
app.use("/api/v1/course" , courseRouter);


async function main(){
    //environment file
    await mongoose.connect("mongodb+srv://dbUser1:mre5rO92tDPxhXRh@cluster0.hmbza7e.mongodb.net/Course-App");
    app.listen(3000);
    console.log("Server is running on port 3000");
}

main()
