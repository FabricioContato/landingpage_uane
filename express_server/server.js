// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Fallback: if file not found, return 404
app.use((req, res) => {
  res.status(404).send('File not found');
});

app.listen(PORT, () => {
  console.log(`Static server running at http://localhost:${PORT}`);
});
