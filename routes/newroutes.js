const path = require("path");
const router = require("express").Router();
const booksController = require("../controllers/bookController.js");

// Add routes, both API and view
router.get("/api/books", function(req, res) {
    booksController.findAll(req, res);
  });
  
  router.post("/api/books", function(req, res) {
    booksController.create(req, res);
  });
  
  router.delete("/api/books/:id", function(req, res) {
    booksController.remove(req, res);  
  });
  
// If no API routes are hit, send the React app
  router.get("*", function(req, res) {
      res.sendFile(path.join(__dirname, "/client/build/index.html"));
  });

module.exports = router;