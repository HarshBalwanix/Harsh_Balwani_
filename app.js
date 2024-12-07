import express from "express";
import { config } from "dotenv";
config();
import cookieParser from "cookie-parser";
import DBConnection from "./config/DB.Connect.js";
import UserRoutes from "./routes/user.routes.js";
import ExamRoutes from "./routes/exam.routes.js";
const app = express();
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Welcome to VRV Backend by Harsh Balwani");
});

app.use("/api/user", UserRoutes);
app.use("/api/exam", ExamRoutes);
app.get("/api/docs", (req, res) => {
  res.redirect(
    "https://www.postman.com/cryosat-technologist-36387445/2e9770fe-70d5-4845-9b66-520157a7c89b/collection/fq5dlen/vrv-backend"
  );
});
app.listen(process.env.PORT, async () => {
  console.log("Our App is working on " + process.env.PORT);
  await DBConnection();
});
