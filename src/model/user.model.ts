import mongoose from "mongoose";
const {Schema} =mongoose
const userSchema = new Schema({
  name :{
    type:String,
    default:"qsq",
    require:true
  },
  age:{
    type:Number,
    default:0,
    require:true
  }
})
export default mongoose.model("user",userSchema)
