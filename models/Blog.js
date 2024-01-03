import mongoose from "mongoose";
import User from "./User";
import Category from "./Category";
import Comment from "./Comment";

const BlogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        slug: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            ref: "User",
            required: true,
        },
        category: {
            type: [{ type: String, ref: "Category" }],
            required: true,
        },
        image: {
            type: String,
        },
        views: {
            type: Number,
            default: 0,
        },
    },
    { timestamps: true },
);

const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);

export default Blog;
