import Product from "../../models/product";
import connectMongo from "../../config.js";

const addProduct = async (req, res) => {
    if (req.method == "GET") {
        let product = await Product.find();
        // console.log("product is ", product);
        res.send({ product });
    }
};
export default connectMongo(addProduct);
