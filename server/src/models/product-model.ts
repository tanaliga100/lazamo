import mongoose, { Schema } from "mongoose";
const ProductSchema: Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Please provide a product"],
      maxlength: [100, "Name cannot be more than 100 characters"],
    },
    price: {
      type: Number,
      required: [true, "Please provide a product price"],
      default: 0,
    },
    description: {
      type: String,
      required: [true, "Please provide a product description"],
      maxlength: [1000, "Name cannot be more than 1000 characters"],
    },
    image: {
      type: String,
      default: "/uploads/exmple.jpeg",
    },
    category: {
      type: String,
      required: [true, "Please provide a category name"],
      enum: ["office", "kitchen", "bedroom", "dining", "kids", "living room"],
    },
    company: {
      type: String,
      required: [true, "Please provide a company name"],
      enum: {
        values: ["ikea", "liddy", "marcos"],
        message: "{value} is not supported",
      },
    },
    colors: {
      type: [String],
      default: ["#222"],
      required: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    freeShipping: {
      type: Boolean,
      default: false,
    },
    inventory: {
      type: Number,
      required: true,
      default: 15,
    },
    averageRating: {
      type: Number,
      default: 0,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);
export default Product;
