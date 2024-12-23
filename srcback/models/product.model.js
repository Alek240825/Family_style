import mongoose from "mongoose";

const productSchema = mongoose.Schema ({
    name: {
        type : String,
        required: true,
        trim: true,
        unique: true
    },
    description: {
        type : String,
        required: true,
        trim: true,
    },
    marca: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type : [String],
    },
})

export default mongoose.model("Product", productSchema);