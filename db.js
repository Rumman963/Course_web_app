const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;
mongoose.connect(process.env.MONGO_URL);

const userSchema = new Schema ({
   
    email:{type:String, unique:true},
    firstName:{type:String},
    lastName:{type:String},
    password:{type:String}


})

const adminSchema = new Schema ({

     email:{type:String, unique:true},
    firstName:{type:String},
    lastName:{type:String},
    password:{type:String}
   
})

const courseSchema = new Schema ({

    title:{type:String},
    description:{type:String},
    price:{type:Number},
    imageUrl:{type:String},
    creatorId:{type:ObjectId}


})


const PurchaseSchema = new Schema ({
    userId:{type:ObjectId},
    courseId:{type:ObjectId}

})


const userModel = mongoose.model('User', userSchema);
const adminModel = mongoose.model('Admin', adminSchema);
const courseModel = mongoose.model('Course' , courseSchema);
const purchaseModel = mongoose.model('Purchase', PurchaseSchema);



module.exports = {
    userModel : userModel,
    adminModel : adminModel,
    courseModel : courseModel,
    purchaseModel : purchaseModel
}




