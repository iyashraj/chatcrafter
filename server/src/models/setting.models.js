import mongoose, { Schema } from "mongoose";

const settingSchema = new Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    theme: {
      type: String,
      default: "light",
    },
    language: {
      type: String,
      default: "en",
    },
    notificationEnabled: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export const Setting = mongoose.model("Setting", settingSchema);
