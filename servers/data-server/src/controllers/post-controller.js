import { Router } from "express";

import postRepositories from "../repositories/post-repositries.js";
import userRepositories from "../repositories/user-repositories.js";

const postController = Router();

postController.get('/posts', async (req, res) => {

    try {
        const allPosts = await postRepositories.fetchAll();

        res.json(allPosts);
        res.end();
    } catch (error) {
        console.error(error);
    }
})

postController.post('/posts', async (req, res) => {
    const postData = req.body;
    const ownerId = req.body.owner;

    try {
        const newPost = await postRepositories.create(postData);

        await userRepositories.attachPostToUser(ownerId, newPost._id);

        res.json(newPost);
        res.end();
    } catch (error) {
        console.error(error);
    }
})

export default postController;