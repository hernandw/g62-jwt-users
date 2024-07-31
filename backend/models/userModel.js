import pool from "../config/db.js";

const addUser = async ({ name, email, password }) => {
  try {
    const sql =
        "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) returning *",
      values = [name, email, password];

    const result = await pool.query(sql, values);
    if (result.rowCount > 0) {
      return result.rows;
    } else {
      return false;
    }
  } catch (error) {
    console.log("Error", error.message);
  }
};

const getUser = async (email) => {
  try {
    const sql = "SELECT * FROM users WHERE email = $1",
      values = [email];

    const result = await pool.query(sql, values);
    if (result.rowCount > 0) {
      return result.rows;
    } else {
      return false;
    }
  } catch (error) {
    console.log("Error", error.message);
  }
};

export const model = {
  addUser,
  getUser,
};
