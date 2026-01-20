const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware to read form data
app.use(express.urlencoded({ extended: true }));

// Serve static files (HTML, CSS)
app.use(express.static(path.join(__dirname, "public")));

// Home route (serves the form)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Handle form submission
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  console.log("New Registration:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Password:", password);

  res.send(`
    <h2>Registration Successful 🎉</h2>
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <a href="/">Go Back</a>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
