import mongoose from "mongoose";
import { Author } from "./author.model.js";

const BooksSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "The title is required"],
        index: true
    },
    description: {
        type: String,
        required: [true, "The description is required"]
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Author,
        required: [true, "Author is required"]
    },
    publishedYear: {
        type: Number, // Changed to Number for better year storage
        required: false,
        index: true,
        min: 1000,
        max: new Date().getFullYear()
    },
    book_id: {
        type: String,  // Assuming it could be a string identifier
        required: [true, "Book ID is required"],
        unique: true, // Assuming book_id should be unique
        index: true
    },
    genre: {
        type: String, // Assuming genre is a string (could also be an array if multiple genres are supported)
        required: [true, "Genre is required"]
    },
    isbn: {
        type: String,
        unique: true,
        required: [true, "ISBN is required"],
        match: [/^(97(8|9))?\d{9}(\d|X)$/, "Please provide a valid ISBN number (10 or 13 digits)."] // ISBN validation
    },
    status: {
        type: String,
        enum: ["available", "checked out", "reserved"],
        default: "available"
    },
    summary: {
        type: String,
        required: [true, "Summary is required"]
    },
    cover_page: {
        type: String, // Assuming cover_page is a URL or file path to the cover image
        required: [true, "Cover page URL is required"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    
}, { timestamps: true });

export const Book = mongoose.model("Book", BooksSchema);
