import mongoose from "mongoose";
import { Transaction } from "./transaction.model.js";
import { Category } from "./category.model.js";
import { Book } from "./books.model.js"; // Assuming you have a Book model

// Program and branch lists
const programList = [
    "B.Tech", "M.Tech", "B.B.A", "B.com", "M.B.A", "B.C.A", "B.Sc", 
    "Diploma", "M.Com", "M.C.A", "Ph.D"
];

const branchList = [
    "Mechanical Engineering", 
    "Mechanical Engineering with specialization in Artificial Intelligence & Machine Learning", 
    "Computer Science & Engineering", 
    "Computer Science & Engineering with specialization in Artificial Intelligence & Machine Learning", 
    "Computer Science & Business System", 
    "Computer Science & Engineering with specialization in Big Data Analytics", 
    "Computer Science & Engineering in Cyber Security", 
    "Electronics and Communication Engineering", 
    "Electronics and Communication Engineering with specialization in Data Science", 
    "Electronics Engineering (VLSI Design and Technology)", 
    "VLSI Design", 
    "Master of Business Administration for working Professionals", 
    "Master of Business Administration - Marketing", 
    "Master of Business Administration - Finance", 
    "Master of Business Administration - HRM", 
    "Master of Business Administration - System", 
    "Master of Business Administration - Operations", 
    "Master of Business Administration - Banking and Financial Services", 
    "Bachelor of Business Administration", 
    "Commerce", 
    "Computer Science", 
    "Hindi", 
    "General", 
    "Accounting & Finance", 
    "(Hons) International Accounting & Finance", 
    "Bachelor of Computer Application", 
    "Bachelor of Computer Application with Specialization in Data Science", 
    "Hotel and Catering Management", 
    "Psychology", 
    "Visual Communication", 
    "Hotel Management and Catering Science", 
    "Master of Computer Application"
];

const UserSchema = new mongoose.Schema({
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
    password: {
        type: String,
        required: true
    },
    registration_no: {
        type: String,
        index: true
    },
    mail: {
        type: String,
        index: true,
        lowercase: true,
        unique: true,
        required: true,  // Fixed the typo from 'require' to 'required'
        match: [/\S+@\S+\.\S+/, 'Please use a valid email address.'] // Email format validation
    },
    program: {
        type: String,
        enum: programList,
        index: true,
        required: true // Ensure that the program field is always filled
    },
    branch: {
        type: String,
        enum: branchList,
        index: true,
        required: true // Ensure that the branch field is always filled
    },
    section: {
        type: String,
        index: true
    },
    graduation_year: {
        type: Number,
        min: 1985,
        max: new Date().getFullYear(),
        required: true
    },
    role: {
        type: String,
        enum: ["volunteer", "student"],
        default: "student",
        required: true
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



UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    this.password = bcrypt.hash(this.password, 10)
    next()
});

UserSchema.method.isPasswordCorrect = async function(password) {
    return await bcrypt.compare(password, this.password)
}




// Exporting the model
export const User = mongoose.model("User", UserSchema);
