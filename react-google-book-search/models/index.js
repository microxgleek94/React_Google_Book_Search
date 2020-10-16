const router = require("express").Router();
const bookRoutes = require("./booksModel");

// Book routes
router.use("/books", bookRoutes);

module.exports = router;