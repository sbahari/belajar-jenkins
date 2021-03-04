const express = require('express');
const app = express();
const port = 8909;

app.get('/', (req, res) => {
  res.status(200).json({ status: 200, message: 'Hello world' });
});

app.listen(port, () => {
  console.log(`application running on http://localhost:${port}`);
});

module.exports = app;