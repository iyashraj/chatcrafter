import mongoose, { Schema } from "mongoose";

const messageSchema = new Schema(
  {
    sender: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    recipient: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    messageType: {
      type: String,
    },
    message: {
      type: String,
    },
    status: {
      type: String,
    },
  },
  { timestamps: true }
);

// Indexes
messageSchema.index({ sender: 1, recipient: 1 });

export const Message = mongoose.model("Message", messageSchema);
