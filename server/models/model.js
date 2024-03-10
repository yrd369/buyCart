import mongoose, { Schema } from "mongoose";

// schema
const dataSchema = new Schema({
  product: {
    type: "String",
    required: true,
  },
});

// model
export const dataModel = mongoose.model("products", dataSchema);
