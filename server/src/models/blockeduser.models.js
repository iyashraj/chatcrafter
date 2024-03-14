import mongoose, { Schema } from 'mongoose';

const blockeduserSchema = new Schema({
    user_id: {
        type : mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    blocckedUserId : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
},{
    timestamps: true
})

export const BlockedUser = mongoose.model("BlockedUser", blockeduserSchema)