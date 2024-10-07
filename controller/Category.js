import pool from "../db/server.js";

export const getAllCategories = async (req, res, next) => {
  try {
    const result = await pool.query("SELECT * FROM category");
    res.json(result.rows);
  } catch (error) {
    next(error);
  }
};

export const getCategoryById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await pool.query("SELECT * FROM category WHERE id = $1", [
      id,
    ]);
    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

export const addNewCategory = async (req, res, next) => {
  const { name } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO category (name) VALUES ($1) RETURNING *",
      [name]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

export const updateCategory = async (req, res, next) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const result = await pool.query(
      "UPDATE category SET name = $1 WHERE id = $2 RETURNING *;",
      [name, id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

export const deleteCategory = async (req, res, next) => {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM category WHERE ID = $1", [id]);
    res.json({ message: `category with the id ${id} was deleted` });
  } catch (error) {
    next(error);
  }
};
