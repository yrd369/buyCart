import { dataModel } from "../models/model.js";

// get all data from database
export const getAllData = async (req, res) => {
  const allDatas = await dataModel.find({});
  res.json(allDatas);
};

// get single data from database
export const getSingleData = async (req, res) => {
  const { id } = req.params;
  const selectedData = await dataModel.find({ _id: id });
  res.status(200).json(selectedData);
};

// send data to database
export const sendData = async (req, res) => {
  try {
    const response = await dataModel.create(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// edit data
export const editData = async (req, res) => {
  const { id } = req.params;
  const editedData = await dataModel.findByIdAndUpdate({ _id: id }, req.body);
  res.status(200).json(editedData);
};

// delete data
export const deleteData = async (req, res) => {
  const { id } = req.params;
  const deletedData = await dataModel.findOneAndDelete({ _id: id });
  res.status(200).json(deletedData);
};
