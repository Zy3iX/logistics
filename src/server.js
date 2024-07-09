import express from "express";
import mongoose from "mongoose";
import Driver from "./models/Driver.js";
import cors from "cors";
import Joi from "joi";

const app = express();
app.use(cors());
app.use(express.json());

const driverSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  middleName: Joi.string().required(),
  transport: Joi.string().required(),
  telephone: Joi.string().pattern(/^\+7\d{10}$/),
  iin: Joi.string().pattern(/^\d{12}$/),
  id: Joi.string(),
  createdDate: Joi.string(),
  activated: Joi.boolean()
});

mongoose
  .connect("mongodb://localhost:27017/logistic", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Подключение к базе данных успешно"))
  .catch((e) => {
    console.error("Ошибка подключения к базе данных. Ошибка: ", e);
    process.exit(1);
  });

app.get("/api/drivers", async (req, res) => {
  try {
    const drivers = await Driver.find();
    res.json(drivers);
  } catch (e) {
    console.error("Ошибка при получении данных GET запроса. Ошибка: ", e);
    res.status(500).send("Ошибка сервера");
  }
});

app.post("/api/drivers", async (req, res) => {
  try {
    const { error } = driverSchema.validate(req.body);
    if (error) {
      return res.status(400).send(`Ошибка в валидации данных. ${error}`);
    }
    const newDriver = new Driver(req.body);
    await newDriver.save();
    res.status(201).send(newDriver);
  } catch (e) {
    console.error("Ошибка при отправке данных POST запроса. Ошибка: ", e);
  }
});

app.listen(4000, () => {
  console.log("Сервер запущен на порту 4000!");
});
