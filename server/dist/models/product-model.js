"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ProductSchema = new mongoose_1.default.Schema({
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
        default: "/uploads.jpeg",
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
        type: mongoose_1.default.Types.ObjectId,
        ref: "User",
    },
}, { timestamps: true });
const Product = mongoose_1.default.model("Product", ProductSchema);
exports.default = Product;
