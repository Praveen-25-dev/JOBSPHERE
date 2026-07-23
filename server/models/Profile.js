const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
{
  userId:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true,
    unique:true,
  },

  name:String,
  email:String,
  phone:String,
  location:String,
  title:String,
  bio:String,
  skills:String,
  experience:String,
  education:String,
  photo:String,
  resume:String,
},
{
  timestamps:true,
}
);

module.exports = mongoose.model("Profile", profileSchema);