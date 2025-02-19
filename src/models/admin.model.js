import mongoose from "mongoose";


const AdminSchema = new Schema({
    user_id: {
      type: String,
      required: [true, "User ID is required"], // Corrected 'require' to 'required'
      unique: true,
      set: (value) => value.toLowerCase() // Ensures user_id is saved in lowercase
    },
    password: {
      type: String,
      required: true
    },
    permissions: {
      type: String,
      required: true,
      enum: ['manage', 'view', 'edit'], // Ensures only these values are allowed
    },
    createdAt: {
      type: Date,
      default: Date.now, // Automatically sets current date as default
    },
});



export const Admin = mongoose.model("Admin", AdminSchema);