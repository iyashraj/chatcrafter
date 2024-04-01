import bcrypt from "bcrypt";
import { User } from "../models/user.models.js";
import { errorHandler } from "../utils/errorHandler.js";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../utils/jwtTokens.js";

async function registerUserHandler(req, res, next) {
  try {
    const { username, fullname, password, email, status, avatar } = req.body;
    if (!username || !fullname || !password || !email) {
      return res.status(400).json({ message: "All fields are required." });
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
    await newUser.save();
    res.status(201).json({ message: "User created successfully!" });
  } catch (error) {
    errorHandler(error, req, res, next);
  }
}

async function loginUserHandler(req, res, next) {
  try {
    const { username, email, password } = req.body;
    if (!username && !email) {
      return res
        .status(400)
        .json({ message: "Username or email is required." });
    }

    const user = await User.findOne({
      $or: [{ username: username }, { email: email }],
    });
    console.log(user);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }
    const isValidPassword = bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid password." });
    }

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    res.status(200).json({ accessToken, refreshToken });
  } catch (error) {
    errorHandler(error, req, res, next);
  }
}

export { registerUserHandler, loginUserHandler };
