import app from "./src/app.js";
import mongoose from "mongoose";
import secrets from "./src/utils/secrets.js";

mongoose.connect(secrets.dbUrl, () => {
  console.log("connected to database!");
  app.listen(secrets.port, () => {
    console.log(`App is listening to port ${secrets.port}`);
  });
});
