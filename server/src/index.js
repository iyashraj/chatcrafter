import { app } from "./app";
import ConnectDB from "./db";
import dotenv from "dotenv";

// env configuration
dotenv.config({
  path: "./env",
});

ConnectDB()
  .then((res) => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is running at ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(`server connection error: ${err}`);
  });

