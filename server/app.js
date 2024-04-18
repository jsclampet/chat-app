require("dotenv/config");
const express = require("express");
const app = new express();
const port = process.env.PORT;
const path = require("path");
const cors = require("cors");
const pool = require("./db");
const { hash, compare } = require("bcrypt");

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "client", "dist")));

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
app.get("/messages", async (req, res) => {
  try {
    const allChats = await pool.query("SELECT * FROM messages");
    res.send(allChats.rows);
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

    const encryptedPassword = await hash(password, parseInt(process.env.SALT));

    const register = await pool.query(
      "INSERT INTO usernames (username, password) VALUES ($1, $2) RETURNING *",
      [username, encryptedPassword]
    );
    res.send(register.rows[0]);
  } catch (error) {
    res.send({
      error: `${error.message}`,
    });
  }
});

// LOGIN user
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const allUsers = await pool.query("SELECT * FROM usernames");

  try {
    const user = allUsers.rows.find((user) => user.username === username);
    if (!user) throw new Error(`User "${username}" could not be found`);

    const isValid = compare(password, user.password);
    if (!isValid) throw new Error("Incorrect password");
    res.send(user);
  } catch (err) {
    res.send({
      error: `${err.message}`,
    });
  }
});

app.listen(port, () => {
  console.log(`port is ${port}`);
});
