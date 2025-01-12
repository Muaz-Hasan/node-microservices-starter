import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.AUTH_PORT;

app.get("/auth/health", (_req, res) => {
  res.send("Auth service is running!");
});

app.listen(PORT, () => {
  console.log(`Auth service listening on port ${PORT}`);
});
