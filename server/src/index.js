import { app } from "./app.js";
import ConnectDB from "./db/index.js";
import dotenv from "dotenv";
import userRoutes from './routes/auth.routes.js'

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

  app.use("/api/v1/user", userRoutes);

