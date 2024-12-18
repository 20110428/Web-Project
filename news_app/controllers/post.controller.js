const Post = require('../models/Post');

const PostController = {
    createPost: async (req, res) => {
        try {
            const { title, content, category, tags } = req.body;
            const newPost = new Post({ title, content, category, tags });
            await newPost.save();
            res.status(201).json({ message: 'Post created successfully', post: newPost });
        } catch (error) {
            res.status(500).json({ error: 'Error creating post', details: error.message });
        }
    },
    getPostsByCategory: async (req, res) => {
        try {
            const { category } = req.params;
            const posts = await Post.find({ category });
            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({ error: 'Error fetching posts by category', details: error.message });
        }
    },
    getPostById: async (req, res) => {
        try {
            const { id } = req.params;
            const post = await Post.findById(id);
            if (!post) {
                return res.status(404).json({ error: 'Post not found' });
            }
            res.status(200).json(post);
        } catch (error) {
            res.status(500).json({ error: 'Error fetching post by ID', details: error.message });
        }
    },
    searchPosts: async (req, res) => {
        try {
            const { query } = req.query;
            const posts = await Post.find({ $text: { $search: query } });
            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({ error: 'Error searching posts', details: error.message });
        }
    },
};

module.exports = PostController;
