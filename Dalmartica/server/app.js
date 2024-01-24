const express    = require('express');
const sqlite3    = require('sqlite3');
const bodyParser = require('body-parser');
const path       = require('path');

const app        = express();
const port       = 3000;

const db         = new sqlite3.Database('./database/blog.db');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// use public folder for providing static files to client
app.use(express.static(path.join(__dirname, '/../public')));

db.run(`
  CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    content TEXT NOT NULL
  )
`);

// GET all blog posts
app.get('/posts', (req, res) => {
  db.all('SELECT * FROM posts', (err, rows) => {
    if (err) {
      res.status(500).json({ error: 'Error fetching blog posts' });
    } else {
      res.json(rows);
    }
  });
});

// POST a new blog post
app.post('/posts', (req, res) => {
  const { title, content } = req.body;
  db.run('INSERT INTO posts (title, content) VALUES (?, ?)', [title, content], function (err) {
    if (err) {
      res.status(500).json({ error: 'Error adding blog post' });
    } else {
      res.json({ id: this.lastID, title, content });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
