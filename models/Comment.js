import mongoose from "mongoose";
import User from "./User";

const CommentSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            ref: "User",
            required: true,
        },
        comment_text: {
            type: String,
            required: true,
        },
        slug: {
            type: String,
            required: true,
        },
    },
    { timestamps: true },
);

const Comment =
    mongoose.models.Comment || mongoose.model("Comment", CommentSchema);

export default Comment;
