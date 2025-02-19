import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";


const FolderSchema = new mongoose.Schema({
    name: String

}, { timestamps: true });


FolderSchema.plugin(mongooseAggregatePaginate);


export const Folder = mongoose.model("Folder", FolderSchema);