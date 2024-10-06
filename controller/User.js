import pool from "../db/server.js";

export const getAllUser = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM user");
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ message: "something broke" });
  }
};

export const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await pool.query("SELECT * FROM user WHERE id = $1", [id]);
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ message: "something broke" });
  }
};
export const addNewUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const result = await pool.query(
      "INSERT INTO user (name,email,password) VALUES ($1,$2, $3) RETURNING *"
    );
    res.status(201).json({ message: "user created successfully" });
  } catch (error) {
    res.status(500).json({ message: "something broke" });
  }
};
export const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, email, password } = req.body;
    const result = await pool.query(
      "UPDATE user SET name = $1, email = $2,password = $3 WHERE id = $4 RETURNING *",
      [name, email, password, id]
    );
    res.status(200).json({ message: "user updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "something broke" });
  }
};
export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await pool.query("DELETE FROM user WHERE id = $1", [id]);
    res.status(200).json({ message: `user ${id} deleted successfully` });
  } catch (error) {
    res.status(500).json({ message: "something broke" });
  }
};
