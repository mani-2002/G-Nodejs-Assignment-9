const express = require("express");
const router = express.Router();
const services = require("../service/serviceBook");

router.get("/", async (req, res) => {
  const books = await services.getAllBooks();
  res.send(books);
});

router.get("/:id", async (req, res) => {
  const book = await services.getBook(req.params.id);
  if (book.length == 0) {
    res.status(404).json("no book found with given id " + req.params.id);
  } else {
    res.send(book);
  }
});

router.delete("/:id", async (req, res) => {
  const affectedRows = await services.deleteBook(req.params.id);
  if (affectedRows.length == 0) {
    res.status(404).json("no book found with given id " + req.params.id);
  } else {
    res.send("deleted successfully");
  }
});

router.post("/", async (req, res) => {
  console.log("Request Body:", req.body);
  await services.addEditBook(req.body);
  res.status(201).send("Created Successfully");
});

router.put("/:id", async (req, res) => {
  const record = await services.addEditBook(req.body, req.params.id);
  res.send(record);
});

module.exports = router;
