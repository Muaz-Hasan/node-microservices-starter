import express from "express";
const app = express();
const PORT = 3000;
app.get("/gateway/health", (_req, res) => {
    res.send("Gateway service is running!");
});
app.listen(PORT, () => {
    console.log(`Gateway service listening on port ${PORT}`);
});
