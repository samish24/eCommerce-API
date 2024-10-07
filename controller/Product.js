import pool from "../db/server.js";

export const getAllProducts = async (req, res, next) => {
  try {
    const result = await pool.query("SELECT * FROM products");
    res.json(result.rows);
  } catch (error) {
    next(error);
  }
};

export const getProductById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const result = await pool.query("SELECT * FROM products WHERE id = $1", [
      id,
    ]);
    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

export const addNewProduct = async (req, res, next) => {
  const { productName, description, image_url } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO products (productName, description, image_url) VALUES ($1, $2, $3) RETURNING *",
      [productName, description, image_url]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

export const updateProduct = async (req, res, next) => {
  const { id } = req.params;
  const { productName, description, image_url } = req.body;

  try {
    const result = await pool.query(
      "UPDATE products SET productName = $1, description = $2, image_url = $3 WHERE id = $4 RETURNING *",
      [productName, description, image_url, id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error.stack);
    next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  const { id } = req.params;

  try {
    await pool.query("DELETE FROM products WHERE ID = $1", [id]);
    res.json({ message: `Product with the id ${id} was deleted.` });
  } catch (error) {
    next(error);
  }
};
