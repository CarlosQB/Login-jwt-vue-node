import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { conectarDB } from "./db/db.js";
import { router as authRouter } from "./routes/auth.router.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ mensaje: "API Login JWT funcionando" });
});

app.use("/auth", authRouter);

app.listen(PORT, async () => {
  await conectarDB();
  console.log(` Servidor ejecutándose en http://localhost:${PORT}`);
});
