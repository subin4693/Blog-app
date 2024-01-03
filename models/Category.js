import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
    category_title: {
        type: String,
        required: true,
        unique: true,
    },
    image: {
        type: String,
        required: true,
    },
});

const Category =
    mongoose.models.Category || mongoose.model("Category", CategorySchema);

export default Category;
