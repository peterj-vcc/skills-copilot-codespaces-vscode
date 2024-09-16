// Create web server
// Run the server
// Create a new comment
// Read the comments
// Update a comment
// Delete a comment

// Create web server
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Run the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// Create a new comment
app.post('/comments', (req, res) => {
  const { comment } = req.body;
  console.log(comment);
  res.status(201).send('Comment created');
});

// Read the comments
app.get('/comments', (req, res) => {
  const comments = [
    {
      id: 1,
      comment: 'Hello, World!',
    },
    {
      id: 2,
      comment: 'This is a comment',
    },
  ];
  res.status(200).json(comments);
});

// Update a comment
app.put('/comments/:id', (req, res) => {
  const id = req.params.id;
  const { comment } = req.body;
  console.log(id, comment);
  res.status(200).send('Comment updated');
});

// Delete a comment
app.delete('/comments/:id', (req, res) => {
  const id = req.params.id;
  console.log(id);
  res.status(200).send('Comment deleted');
});