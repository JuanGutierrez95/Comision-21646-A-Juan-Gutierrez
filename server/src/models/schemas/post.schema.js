import { body } from "express-validator";

export const createPost = [
  body("title")
    .notEmpty()
    .isString()
    .withMessage("Title is required and must be a string."),
  body("content")
    .notEmpty()
    .isString()
    .withMessage("Content is required and must be a string."),
  body("imgUrl").isURL().withMessage("The image URL is not valid."),
];

export const editPost = [
  body("title").optional().isString().withMessage("Title must be a string."),
  body("content")
    .optional()
    .isString()
    .withMessage("Content must be a string."),
  body("imgUrl").optional().isURL().withMessage("The image URL is not valid."),
];
