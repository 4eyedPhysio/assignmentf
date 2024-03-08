const express = require('express');
const router = express.Router();


let authors = [
  { id: 1, name: 'ikegbunam michael' },
  { id: 2, name: 'ikegbunam janeFrances' }
];


router.get('/', (req, res) => {
  res.json(authors);
});

// returns an author by id
router.get('/:id', (req, res) => {
  const authorId = parseInt(req.params.id);
  const author = authors.find((aut) => aut.id === authorId);

  if (author) {
    res.json(author);
  } else {
    res.status(404).json({ message: 'Author not found' });
  }
});

// to create a new author
router.post('/', (req, res) => {
  const newAuthor = {
    id: authors.length + 1,
    name: req.body.name,
  };

  authors.push(newAuthor);
  res.status(201).json(newAuthor);
});

// to update an author
router.put('/:id', (req, res) => {
  const authorId = req.params.id;
  const author = authors.find((a) => a.id === authorId);

  if (author) {
    author.name = req.body.name;
    res.json(author);
  } else {
    res.status(404).json({ message: 'Author not found' });
  }
});

// Delete an author
router.delete('/:id', (req, res) => {
  const authorId = req.params.id;
  authors = authors.filter((a) => a.id !== authorId);
  res.json({ message: 'Author deleted successfully' });
});

module.exports = router;
