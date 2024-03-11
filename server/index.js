import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import router from "./routes/router.js";
import cors from "cors";

const server = express();

server.use(cors());

server.use(express.json());

server.use(router);

server.listen(process.env.PORT, (error) => {
  error && console.log(error);
});

// connecting database
try {
  mongoose.connect(process.env.mongo_db_url);
} catch (err) {
  console.log(err);
}
