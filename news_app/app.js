const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/index.html'));
});

app.get('/category', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/category.html'));
});

app.get('/article', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/article.html'));
});

app.get('/search', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/search.html'));
});

app.listen(3000, () => console.log('Server running on port 3000'));
