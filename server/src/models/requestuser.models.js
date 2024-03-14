import mongoose, { Schema } from 'mongoose';

const requesteduserSchema = new Schema({
    user_id: {
        type : mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    requestedUserId : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
},{
    timestamps: true
})

export const RequestedUser = mongoose.model("RequestedUser", requesteduserSchema)