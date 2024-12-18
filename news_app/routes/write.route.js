const express = require('express');
const router = express.Router();
const writerController = require('../controllers/post.controller');
const authMiddleware = require('../middleware/auth.middleware');

// Middleware kiểm tra vai trò "writer"
const isWriter = (req, res, next) => {
    if (req.user && req.user.role === 'writer') {
        return next();
    }
    return res.status(403).send('Access denied');
};

// Đăng bài viết
router.post('/create', authMiddleware, isWriter, writerController.createPost);

// Danh sách bài viết của writer
router.get('/my-posts', authMiddleware, isWriter, writerController.getMyPosts);

// Hiệu chỉnh bài viết
router.put('/edit/:id', authMiddleware, isWriter, writerController.editPost);

// Xem danh sách bài viết với trạng thái cụ thể
router.get('/status/:status', authMiddleware, isWriter, writerController.getPostsByStatus);

module.exports = router;
