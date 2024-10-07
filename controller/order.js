import pool from "../db/server.js";

export const getAllOrders = async (req, res, next) => {
  try {
    const result = await pool.query("SELECT * FROM orders");
    res.json(result.rows);
  } catch (error) {
    next(error);
  }
};

export const getOrderById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await pool.query("SELECT * FROM orders WHERE id = $1", [id]);
    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

export const addNewOrder = async (req, res, next) => {
  const { userId, products, total } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO orders (userId, products, total) VALUES ($1, $2, $3) RETURNING *;",
      [userId, JSON.stringify(products), total]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

export const updateOrder = async (req, res, next) => {
  const { id } = req.params;
  const { userId, products, total } = req.body;
  try {
    const result = await pool.query(
      "UPDATE orders SET userId = $1, products = $2, total = $3 WHERE id = $4 RETURNING *;",
      [userId, JSON.stringify(products), total, id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

export const deleteOrder = async (req, res, next) => {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM orders WHERE ID = $1", [id]);
    res.json({ message: `order with the id ${id} was deleted` });
  } catch (error) {
    next(error);
  }
};
