import { Schema, model } from "mongoose";

const driverSchema = new Schema({
  firstName: String,
  lastName: String,
  middleName: String,
  transport: String,
  status: String,
  telephone: String,
  iin: String,
  id: String,
  createdDate: String,
  key: String
});

export default model("Driver", driverSchema);
