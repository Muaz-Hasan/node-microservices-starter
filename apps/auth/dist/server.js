import express from "express";
const app = express();
const PORT = 4000;
app.get("/auth/health", (_req, res) => {
    res.send("Auth service is running!");
});
app.listen(PORT, () => {
    console.log(`Auth service listening on port ${PORT}`);
});
