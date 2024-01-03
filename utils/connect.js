import mongoose from "mongoose";

async function connect() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/BLOG_APP");
        console.log("Connected");
    } catch (error) {
        console.log(`Error occured while connecting ${error}`);
    }
}

export default connect;
