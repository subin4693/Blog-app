import mongoose from "mongoose";

const SubscriptionSchema = new mongoose.Schema({
    tire: {
        type: String,
        unique: true,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});

const Subscription =
    mongoose.models.Subscription ||
    mongoose.model("Subscription", SubscriptionSchema);

export default Subscription;
