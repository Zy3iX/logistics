import express from "express";
import mongoose from "mongoose";
import Driver from "./models/Driver.js";
import cors from "cors";

const app = express();
app.use(cors());

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

app.listen(4000, () => {
  console.log("Сервер запущен на порту 4000!");
});
