import express from "express";
import mongoose from "mongoose";
import config from "./config";
import cors from "cors";

const port = config.PORT;

const app = express();

if (!config.PRODUCTION) {
  app.use(cors());
}

app.use(express.json());

mongoose.connect(config.DATABASE_URL, (err) => {
  if (err) {
    console.log("error", err);
  } else {
    app.listen(port, () => {
      console.log(`Server listenting on port ${port}`);
    });
  }
});
