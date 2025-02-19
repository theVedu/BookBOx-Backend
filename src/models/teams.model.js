import mongoose from "mongoose";

const TeamsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Team Name is required"]
    },
    members_staff: [{
        type: String,
        required: true
    }],
    members_student: [{
        type: String,
        required: true
    }],
    members_outsider: [{
        type: String,
        required: true
    }],
}, { timestamps: true });