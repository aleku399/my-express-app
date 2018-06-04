const express = require('express');
const router = express.Router();
const Book = require('../../models/Book')

router.post('/test', (req, res) => {
  Book.find().then(book => {
      if (book) {
        return res.status(400).json('Book arleady exists');
      } else {
          const newBook = new Book({
              title: req.body.title,
              author: req.body.author,
              category: req.body.category
          })
      }
  })  
});
module.exports = router;
