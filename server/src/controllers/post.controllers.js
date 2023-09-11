import { PostModel } from "../models/Posts.js";

export const ctrlGetPosts = async (req, res) => {
  try {
    const posts = await PostModel.findAll();
    if (!posts) {
      return res.status(404).json({ message: "No posts found" });
    } else {
      return res.status(200).json(posts);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};
export const ctrlCreatePost = async (req, res) => {
  try {
    const { title, content, imgUrl } = req.body;
    const newPost = await PostModel.create({
      title,
      content,
      imgUrl,
    });
    return res.status(201).json(newPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};
export const ctrlUpdatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedPost = await PostModel.findByPk(id);
    if (!updatedPost) {
      return res.status(404).json({ message: "Posts not found" });
    } else {
      await updatedPost.update(req.body);
      return res.status(200).json(updatedPost);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};
export const ctrlDeletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPost = await PostModel.destroy({
      where: {
        id,
      },
    });
    if (!deletedPost) {
      return res.status(404).json({ message: "Post not found" });
    } else {
      return res.status(200).json({ message: "Post successfully deleted" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};
