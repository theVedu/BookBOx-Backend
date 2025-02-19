import mongoose from "mongoose";
import { Staff } from "./staff.model";
import { User } from "./user.model";

const TransactionSchema = mongoose.Schema({
    user_saff: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Staff
    },
    user_student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User
    },
    user_saff: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Outsider
    },
    paymentMethode: {
        type: String,
        enum: ["Card", "Case", "UPI"]
    },
    TransactionID: {
        type: String,
        default: "none"
    },
    date: {
        type: Date
    }

}, { timestamp: true });



export const Transaction = mongoose.model("Transaction", TransactionSchema);