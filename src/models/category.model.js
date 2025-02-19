import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true
    },
    description: {
      type: String,
      required: [true, "The description is required"],
      index: true
    }
  });
  
  
export const Category = mongoose.model("Category", CategorySchema);
  