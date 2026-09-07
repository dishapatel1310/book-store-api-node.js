// bookModel.js
// Yeh file books.json file ko read/write karne ka kaam karti hai.
// Isse humein MongoDB ya kisi bhi external database ki zarurat nahi padti.
// Beginners ke liye easy rehta hai samajhna.

const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "..", "data", "books.json");

// Saari books read karne ke liye function
function readBooks() {
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
}

// Books ko file me wapas save karne ke liye function
function writeBooks(books) {
  fs.writeFileSync(filePath, JSON.stringify(books, null, 2));
}

module.exports = { readBooks, writeBooks };
