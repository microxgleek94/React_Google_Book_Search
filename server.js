const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bookController = require("./controllers/bookController");
const PORT = process.env.PORT || 9090;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
// Add routes, both API and view
app.get("/api/books", function(req, res) {
  bookController.findAll(req, res);
});

app.post("/api/books", function(req, res) {
  bookController.create(req, res);
});

app.delete("/api/books/:id", function(req, res) {
  bookController.remove(req, res);  
});

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/books", { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> App running on: http://localhost:${PORT}!`);
});