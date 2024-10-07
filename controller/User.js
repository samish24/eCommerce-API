import pool from "../db/server.js";

export const getAllUser = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM user1");
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ message: "something broke" });
  }
};

export const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await pool.query("SELECT * FROM user1 WHERE id = $1", [id]);
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ message: "something broke" });
  }
};
export const addNewUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Ensure all required fields are provided
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Perform the INSERT query with the provided values
    const result = await pool.query(
      "INSERT INTO user1 (name, email, password) VALUES ($1, $2, $3) RETURNING *",
      [name, email, password] // Pass values for $1, $2, $3
    );

    // Return the newly created user data as a response
    res.status(201).json({ message: "User created successfully", user: result.rows[0] });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, email, password } = req.body;
    const result = await pool.query(
      "UPDATE user1 SET name = $1, email = $2,password = $3 WHERE id = $4 RETURNING *",
      [name, email, password, id]
    );
    res.status(200).json({ message: "user1 updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "something broke" });
  }
};
export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await pool.query("DELETE FROM user1 WHERE id = $1", [id]);
    res.status(200).json({ message: `user1 ${id} deleted successfully` });
  } catch (error) {
    res.status(500).json({ message: "something broke" });
  }
};
