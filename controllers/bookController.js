

const { readBooks, writeBooks } = require("../models/bookModel");

function getAllBooks(req, res) {
  const books = readBooks();
  res.status(200).json({
    success: true,
    count: books.length,
    data: books,
  });
}


function getBookById(req, res) {
  const books = readBooks();
  const id = parseInt(req.params.id);

  const book = books.find((b) => b.id === id);

  if (!book) {
    return res.status(404).json({
      success: false,
      message: "Book not found",
    });
  }

  res.status(200).json({
    success: true,
    data: book,
  });
}

// 3) Nayi book add karna --> POST /api/books
function createBook(req, res) {
  const { title, author, price, quantity } = req.body;

  // Simple validation
  if (!title || !author || price == null || quantity == null) {
    return res.status(400).json({
      success: false,
      message: "Please provide title, author, price and quantity",
    });
  }

  const books = readBooks();


  const newId = books.length > 0 ? books[books.length - 1].id + 1 : 1;

  const newBook = {
    id: newId,
    title,
    author,
    price,
    quantity,
  };

  books.push(newBook);
  writeBooks(books);

  res.status(201).json({
    success: true,
    message: "Book added successfully",
    data: newBook,
  });
}

function updateBook(req, res) {
  const books = readBooks();
  const id = parseInt(req.params.id);

  const index = books.findIndex((b) => b.id === id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: "Book not found",
    });
  }

  const { title, author, price, quantity } = req.body;


  books[index] = {
    ...books[index],
    title: title !== undefined ? title : books[index].title,
    author: author !== undefined ? author : books[index].author,
    price: price !== undefined ? price : books[index].price,
    quantity: quantity !== undefined ? quantity : books[index].quantity,
  };

  writeBooks(books);

  res.status(200).json({
    success: true,
    message: "Book updated successfully",
    data: books[index],
  });
}

function deleteBook(req, res) {
  const books = readBooks();
  const id = parseInt(req.params.id);

  const index = books.findIndex((b) => b.id === id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: "Book not found",
    });
  }

  const deletedBook = books.splice(index, 1);
  writeBooks(books);

  res.status(200).json({
    success: true,
    message: "Book deleted successfully",
    data: deletedBook[0],
  });
}

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};
