// server.js
// Yeh project ki main / entry file hai.
// Yaha se server start hota hai.

const express = require("express");
const bookRoutes = require("./routes/bookRoutes");

const app = express();
const PORT = 5000;

// Middleware - JSON body ko read karne ke liye zaruri hai
app.use(express.json());

// Home route - sirf check karne ke liye ki server chal raha hai
app.get("/", (req, res) => {
  res.send("📚 Book Store API is running... Visit /api/books to see books.");
});

// Book routes ko "/api/books" path par mount kiya
app.use("/api/books", bookRoutes);

// Agar koi galat route hit kare
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
