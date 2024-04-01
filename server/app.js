require("dotenv/config");
const express = require("express");
const app = new express();
const port = process.env.PORT || 3004;
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

// 1. Register
// 2. Login
// 3. Logout
// -------------
// -------------
// 4. Setup a protected route
// 5. Get a new accesstoken with a refresh token
// -------------
// -------------

//get ALL usernames
app.get("/users", async (req, res) => {
  try {
    const allUsers = await pool.query("SELECT * FROM usernames");
    res.send(allUsers.rows);
  } catch (error) {
    console.log(error);
  }
});

//Register User
//add username and password to usernames table
app.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  const allUsers = await pool.query("SELECT * FROM usernames");

  try {
    const user = allUsers.rows.find((user) => user.username === username);
    if (user) throw new Error("User already exists!");

    const register = await pool.query(
      "INSERT INTO usernames (username, password) VALUES ($1, $2) RETURNING *",
      [username, password]
    );
    res.send(register.rows[0]);
  } catch (error) {
    res.send({
      error: `${error.message}`,
      allUsers,
    });
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  // const allUsers = await

  // try {

  // } catch (error) {

  // }
});

app.listen(port, () => {
  console.log(`port is ${port}`);
});
