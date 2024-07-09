import { Schema, model } from "mongoose";

const driverSchema = new Schema({
  firstName: String,
  lastName: String,
  middleName: String,
  transport: String,
  status: String,
  telephone: Number,
  iin: Number,
  _id: Number,
});

export default model("Driver", driverSchema);
