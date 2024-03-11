import express from "express";
import {
  deleteData,
  editData,
  getAllData,
  getSingleData,
  sendData,
} from "../controllers/controller.js";

const router = express.Router();

// get data
router.get("/products", getAllData);

// get a single data
router.get("/products/:id", getSingleData);

// send data
router.post("/products/create", sendData);

// edit data
router.patch("/products/:id", editData);

//delete data
router.delete("/products/:id", deleteData);

export default router;
