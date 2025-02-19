import mongoose from "mongoose";

const StaffSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    first: {
        type: String,
        required: true,
        index: true
    },
    last: {
        type: String,
        required: true
    },
    fullname: {
        type: String,
        required: true,
        index: true
    },
    avatar: {
        type: String,
        required: true
    },
    staff_id: {
        type: String,
        index: true
    },
    password: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        index: true,
        lowercase: true,
        unique: true,
        required: true,  // Fixed the typo from 'require' to 'required'
        match: [/\S+@\S+\.\S+/, 'Please use a valid email address.'] // Email format validation
    },
    address: {
        type: String,
        required: false, // Make this optional if not mandatory
        minlength: [5, 'Address must be at least 5 characters long.']
    },
    phone: {
        type: String,
        required: false, // Optional field
        match: [/^\+?\d{10,15}$/, 'Please use a valid phone number format.'], // Basic phone number validation (10-15 digits)
        unique: true // Ensure that phone numbers are unique, if needed
    },
    transaction: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Transaction" // Correct reference to the Transaction model
    }],
    books: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book" // Correct reference to the Book model
    }],
    categories: [{ // Fixed typo from 'categorys' to 'categories'
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category" // Correct reference to the Category model
    }]
}, { timestamps: true });

export const Staff = mongoose.Model("Staff", StaffSchema);