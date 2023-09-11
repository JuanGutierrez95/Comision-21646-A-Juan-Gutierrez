import { PostModel } from "../models/Posts.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await PostModel.findAll();
    if (!posts) {
      return res.status(404);
    } else {
      return res.status(200).json(posts);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};
export const createPost = async (req, res) => {
  try {
    const { title, content, imgUrl } = req.body;
    const newPost = await PostModel.create({
      title: title,
      content: content,
      imgUrl: imgUrl,
    });
    return res.status(200).json(newPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};
export const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedPost = await PostModel.findByPk(id);
    if (!updatedPost) {
      return res.status(404).json({ message: "Posts no encontrado" });
    } else {
      await updatedPost.update(req.body);
      return res.status(200).json(updatePost);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};
export const deletePost = (req, res) => {
  try {
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

//SEGUIMOS MAS TARDE POR ACA
//await newPost.save()
