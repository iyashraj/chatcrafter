import jwt from "jsonwebtoken";

// Generate access token
function generateAccessToken(user) {
  return jwt.sign({ userId: user._id }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "60m",
  });
}

// Generate refresh token
function generateRefreshToken(user) {
  return jwt.sign({ userId: user._id }, process.env.REFRESH_TOKEN_SECRET);
}

// Verify token
function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

export {generateAccessToken, generateRefreshToken, verifyToken}
