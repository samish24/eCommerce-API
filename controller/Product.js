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
  const { name, description, price, catagoryId } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO products (name, description, price, catagoryId) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, description, price, catagoryId]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

export const updateProduct = async (req, res, next) => {
  const { id } = req.params;
  const { name, description, price, catagoryId } = req.body;
  try {
    const result = await pool.query(
      "UPDATE product SET name = $1, description = $2, price = $3, catagoryId = $4 WHERE id = $5 RETURNING *;",
      [name, description, price, catagoryId, id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM products WHERE ID = $1", [id]);
    res.json({ message: `product with the id ${id} was deleted` });
  } catch (error) {
    next(error);
  }
};
