const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// Home route
app.get("/", (req, res) => {
  res.send("Hello from Render backend!");
});

// About route
app.get("/about", (req, res) => {
  res.send("This is a beginner backend project hosted on Render.");
});

// Time route
app.get("/time", (req, res) => {
  const now = new Date();
  res.send(`Current server time: ${now.toLocaleString()}`);
});

// Random number route
app.get("/random", (req, res) => {
  const number = Math.floor(Math.random() * 100) + 1;
  res.send(`Your random number is: ${number}`);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
