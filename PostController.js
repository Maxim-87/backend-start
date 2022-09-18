import Post from "./Post.js";
import PostService from "./PostService.js";

class PostController {
    async create(req, res) {
        try {
            const post = await PostService.create(req.body,req.files.picture);
            res.json(post)
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getAll(req, res) {
        try {
            const posts = await PostService.getAll();
            console.log(posts)
            return res.json(posts);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getOne(req, res) {
        try {
            const post = await PostService.getOne(req.params.id); /* обращение к базе данных */
            return res.json(post);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async update(req, res) {
        try {
            const updatePost = await PostService.update(req.body);
            return res.json(updatePost)
        } catch (e) {
            res.status(500).json(e.message);
        }
    }

    async delete(req, res) {
        try {
            console.log(req.params.id)
            const post = await PostService.delete(req.params.id);
            console.log('POST DELETED = ', post)
            return res.json(post)
        } catch (e) {
            res.status(500).json(e.message);
        }
    }
}

export default new PostController();