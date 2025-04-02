const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello, World from Express.js!, I am Parthraj Rathod");
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});