const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  _id: {
    type: String,
  },

  link: {
    type: String,
  },

  image: {
    type: String,
  },

  title: {
    type: String,
  },

  authors: {
    type: [String],
  },

  description: {
    type: String,
  },
  date: { 
    type: Date, 
    default: Date.now 
  }
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;