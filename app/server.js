const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/status", (req, res) => {
  res.json({
    status: "ok",
    buildNumber: process.env.BUILD_NUMBER || "local",
    githubSha: process.env.GITHUB_SHA || "unknown"
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`🌐 Visit: http://localhost:${PORT}`);
});
const path = require("path");

// Serve frontend
app.use(express.static(path.join(__dirname, "public")));

// Catch all
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});