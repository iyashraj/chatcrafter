import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    fullname: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    avatar: {
      type: String,
    },
    lastLogin: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function(next) {
  if (!this.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hashSync(this.password, salt);
    next();
  } catch (err) {
    return next(err);
  }
});

userSchema.methods.isPasswordCorrect = function(password){
    try{
        return bcrypt.compare(password, this.password);
    } catch(err){
        return new Error(err);
    }
}

export const User = mongoose.model("User", userSchema);
