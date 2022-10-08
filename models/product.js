import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
   
}, { timestamps: true });
mongoose.models = {};
let Dataset =
    mongoose.models.Product || mongoose.model("Product", productSchema);
export default Dataset;