import bcrypt from "bcrypt";
import { User } from "../models/user.models.js";
import { errorHandler } from "../utils/errorHandler.js";

async function registerUserHandler(req, res, next) {
  console.log(req.body);
  const { username, fullname, password, email, status, avatar } = req.body;
  if(!username || !fullname || !password || !email){
    return res.status(400).json({message:"All fields are required."})
  }
  const hashedPassword = await bcrypt.hashSync(password, 10);
  const newUser = new User({
    username,
    fullname,
    password: hashedPassword,
    email,
    status,
    avatar,
  });
  try {
    await newUser.save();
    res.status(201).json({ message: "User created successfully!" });
  } catch (error) {
    errorHandler(error, req, res, next);
  }
}

function loginUserHandler(req, res, next) {
  console.log(req.body);
}

export { registerUserHandler, loginUserHandler };
