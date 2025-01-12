import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.GATEWAY_PORT;

app.get("/gateway/health", (_req, res) => {
  res.send("Gateway service is running!");
});

app.listen(PORT, () => {
  console.log(`Gateway service flying on port ${PORT}`);
});
