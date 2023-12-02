import { Schema, models, model } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, "Email Already Exists"],
        required: [true, "Email Required"]
    },
    username: {
        type: String,
        true: [true, "Username Required"],
    },
    image: String,
    age: Number,
    
})

const User = models.User || model("User", UserSchema);

export default User;