const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3030;

app.get('/course_create', (req, res) => {
    res.render('course_create.ejs', { title: 'Add a new course'});
});
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
