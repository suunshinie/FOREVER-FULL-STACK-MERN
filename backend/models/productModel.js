import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

    name: { type: String, required:true },
    description: { type: String, required:true },
    price: { type: Number, required:true },
    image: { type: Array, required:true },
    category: { type: String, required:true },
    subcategory: { type: String, required:true },
    sizes: { type: Array, required:true },
    bestseller: { type: Boolean },
    date: { type: Number, required: true }
})

//if model exists then it will use it and if not model will be created using the schema 

const productModel = mongoose.models.product || mongoose.model("product",productSchema)

export default productModel;
