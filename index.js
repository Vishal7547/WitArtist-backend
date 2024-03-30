import express from "express";
import colors from "colors";
import cors from "cors";
import { config } from "dotenv";
import connectDb from "./config/db.js";
import task from "./routes/task.js";
config({
  path: "./config/config.env",
});
connectDb();
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/v1", task);
app.get("/", (req, res) => {
  res.send(`<div style="display: flex; justify-content: center; align-items: center; height: 100vh; width: 100vw; background-color: rgb(196,141,46);">
  <h1 style="color: white;">Welcome to WitArist It Services Private Limited</h1>
</div>
`);
});
app.listen(process.env.PORT, () => {
  console.log(`Port is running onn server ${process.env.PORT}`.bgCyan.white);
});
