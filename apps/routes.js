const Book = require('./models/book');

module.exports = function(app) {

  app.get('/book', async (req, res) => {
    try {
      const books = await Book.find();
      res.json(books);
    } catch (err) {
      res.status(500).json({ message: 'Error fetching books', error: err.message });
    }
  });

  app.post('/book', async (req, res) => {
    try {
      const book = new Book(req.body);
      const savedBook = await book.save();
      res.status(201).json(savedBook);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

  app.delete('/book/:isbn', async (req, res) => {
    try {
      const result = await Book.findOneAndDelete({ isbn: req.params.isbn });

      if (!result) {
        return res.status(404).json({ message: 'Book not found' });
      }

      res.json(result);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

};
