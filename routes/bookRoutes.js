// bookRoutes.js
// Yaha par saare routes (URLs) define kiye gaye hain
// aur unhe controller ke function ke sath jode gaya hai.

const express = require("express");
const router = express.Router();

const {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");

router.get("/", getAllBooks);       // GET    /api/books
router.get("/:id", getBookById);    // GET    /api/books/1
router.post("/", createBook);       // POST   /api/books
router.put("/:id", updateBook);     // PUT    /api/books/1
router.delete("/:id", deleteBook);  // DELETE /api/books/1

module.exports = router;
