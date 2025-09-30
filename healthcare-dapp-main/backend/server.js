import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() => console.log("MongoDB Connected 🎉"))
  .catch((err) => console.error("MongoDB Error 💀", err.message));

app.use("/api/auth", authRoutes);
//app.use("/api/auth/logout", authRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
