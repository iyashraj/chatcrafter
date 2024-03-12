import mongoose , {Schema} from "mongoose";

const userContactSchema = new Schema(
    {
      user_id: {
        type: Schema.Types.ObjectId,
        ref: "User"
      },
      contact_id: {
        type: Schema.Types.ObjectId,
        ref: "User"
      },
      added_at: {
        type: Date,
        default: Date.now
      },
      lastInteraction: {
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
userContactSchema.index({ user_id: 1, contact_id: 1 });

export const UserContact = mongoose.model("userContact", userContactSchema)