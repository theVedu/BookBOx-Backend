import mongoose from "mongoose";
import Category from "./category.model.js";

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        index: true
    },
    description: {
        type: String,
        required: [true, "Name is required"],
        index: true
    },
    birthYear: {
        type: String,
        default: null
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Category
    },
    mail: {
        type: String,
        index: true,
        lowercase: true,
        unique: true,
        required: true,  // Fixed the typo from 'require' to 'required'
        match: [/\S+@\S+\.\S+/, 'Please use a valid email address.']
    },
}, { timestamps: true })


export const Author = mongoose.model("Author", AuthorSchema);