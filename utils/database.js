import mongoose from "mongoose";

let isConnected = false;

export const connectToDatabase = async() => {
    mongoose.set("strictQuery", true);
    if(isConnected){
        console.log("mongo already connected");
        return;
    }

    try{
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: "enliven",
        })

        isConnected = true;
        console.log("connected to mongodb");
    }catch(e){
        console.log(e);
    }
}