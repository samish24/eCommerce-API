import express from "express";

import {
  addNewProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
} from "../controller/product.js";

const productsRouter = express.Router();

productsRouter.route("/").get(getAllProducts);
productsRouter.route("/").post(addNewProduct);
productsRouter.route("/:id").get(getProductById);
productsRouter.route("/:id").put(updateProduct);
productsRouter.route("/:id").delete(deleteProduct);

export default productsRouter;
