import express from "express";
import {
  addNewCategory,
  deleteCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
} from "../controller/category.js";

const categoryRouter = express.Router();

categoryRouter.route("/").get(getAllCategories).post(addNewCategory);
categoryRouter
  .route("/:id")
  .get(getCategoryById)
  .put(updateCategory)
  .delete(deleteCategory);

export default categoryRouter;
