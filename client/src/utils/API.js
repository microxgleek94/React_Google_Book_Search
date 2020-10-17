import axios from "axios"

export default {

  search: function (searchTerm, cb) {
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + searchTerm).then(function (data) {
      console.log(data, "data")
      cb(data)
    })
  },

  getBooks: function () {
    return axios.get("/api/books");
  },

  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },

  saveBook: function (bookData) {
    console.log("this book saved successfully:" +  JSON.parse(JSON.stringify(bookData)));
    return axios.post("/api/books", bookData);
  }

};