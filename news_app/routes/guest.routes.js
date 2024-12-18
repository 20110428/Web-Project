const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.controller');

// Public routes for viewing content
router.get('/categories', postController.getCategories);
router.get('/homepage', postController.getHomepageArticles);
router.get('/articles', postController.getArticlesByCategoryOrTag);
router.get('/article/:id', postController.getArticleDetails);
router.get('/search', postController.searchArticles);

module.exports = router;
