import mongoose, {Schema} from "mongoose";


const contactSchema = new Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    contact_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    added_at: {
      type: Date,
      default: Date.now
    },
    lastInteractionAt: {
      type: Date,
      default: Date.now
    },
    status: {
      type: String,
      default: "not connected"
    }
  },
  { timestamps: true }
);

// Indexes
contactSchema.index({ user_id: 1, contact_id: 1 });

export const UserContact = mongoose.model("UserContact", contactSchema)