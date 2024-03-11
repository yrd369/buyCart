import { dataModel } from "../models/model.js";

// get all data from database
export const getAllData = async (req, res) => {
  const allDatas = await dataModel.find({});
  res.json(allDatas);
};

// get single data from database
export const getSingleData = (req, res) => {
  const { id } = req.params;
  res.json();
};

// send data to database
export const sendData = (req, res) => {
  res.json(req.body);
};

// edit data
export const editData = (req, res) => {};

// delete data
export const deleteData = (req, res) => {};
