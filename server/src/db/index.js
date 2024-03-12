import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${process.env.DB_NAME}`
    );
    console.log("Connected to Mongo");
  } catch (err) {
    console.log("Error connecting to Mongo", err);
    process.exit(1);
  }
};

export default ConnectDB;