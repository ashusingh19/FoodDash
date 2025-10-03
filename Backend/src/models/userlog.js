import mongoose, { Schema } from"mongoose";
import bcrypt from "bcrypt";
//making schema
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true
    },
     password:{
        type:String,
        require:true,
        minlength:6
    },
     email:{
        type:String,
        require:true,
        unique:true
    },
     fullname:{
        type:String,
        require:true,
        
    }
})
userSchema.pre("save", async function(next) {
    if(!this.isModified('password'))
         next ();
    try {
        const salt = await bcrypt.genSalt(10);
        this.password= await bcrypt.hash(this.password,salt);
        next();
    } catch (error) {
        next (error);
    }
});
//compare password
userSchema .methods.comparePassword = async function (userpassword){
    return await bcrypt.compare(userpassword,this.password);
}
const User = mongoose.model(`User`,userSchema);
export default User;