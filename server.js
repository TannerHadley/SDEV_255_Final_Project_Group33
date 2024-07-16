const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.static(path.join(__dirname)));

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use('/', (req, res) => {
  res.redirect('/views')
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
