const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

const frontendPath = path.join(__dirname, "..", "frontend", "dist");

app.use(express.static(frontendPath));

app.get("/api/status", (req, res) => {
  res.json({
    status: "Running 🚀",
    build: process.env.BUILD_NUMBER || "local",
    time: new Date().toLocaleString(),
    commit: (process.env.GITHUB_SHA || "unknown").slice(0, 7)
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});