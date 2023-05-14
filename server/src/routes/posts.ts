import express, { Router } from 'express';
import { getPosts, getPost, createPost, updatePost, deletePost } from '../controllers/postsController';

const router: Router = express.Router();

router.post('/post', createPost);
router.get('/posts', getPosts);
router.get('/post/:id', getPost);
router.put('/post/:id', updatePost);
router.delete('/post/:id', deletePost);

export default router;
