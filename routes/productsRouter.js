import express from "express";

import upload from "../services/Upload.js";
import {
  addNewProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
} from "../controller/Product.js";

const booksRouter = express.Router();

booksRouter.route("/").get(getAllProducts);
booksRouter.route("/").post(upload.single("image"), addNewProduct);
booksRouter.route("/:id").get(getProductById);
booksRouter.route("/:id").put(updateProduct);
booksRouter.route("/:id").delete(deleteProduct);

export default productsRouter;
