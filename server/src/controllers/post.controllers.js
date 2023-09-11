import { PostModel } from "../models/Posts.js";


export const getPosts = async (req, res) => {
    try {
        const posts = await PostModel.findAll();
        if(!posts){
            return res.status(404)
        }else {
            return res.status(200).json(posts)
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message });
    }
};
export const createPost = async (req, res) => {

    try {
        const { title, content, imgUrl } = req.body
        const post = await PostModel.create({
            
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message });
    }
};
export const updatePost = (req, res) => {
    try {
        
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message });
    }
};
export const deletePost = (req, res) => {
    try {
        
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message });
    }
}

//SEGUIMOS MAS TARDE POR ACA