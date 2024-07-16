const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.static(path.join(__dirname)));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/views'));
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
