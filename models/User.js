import mongoose from "mongoose";

import Blog from "./Blog";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    tire: {
        type: String,
        enum: ["member", "silver", "gold", "dimond"],
        default: "member",
    },
    posts: {
        type: [{ type: String, ref: "Blog" }],
        default: [],
    },
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
