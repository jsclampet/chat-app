const express = require("express");
const app = new express();
const port = process.env.port || 3004;
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

app.get("/chat", async (req, res) => {
  try {
    const allMessages = await pool.query("SELECT * FROM messages");
    res.send(allMessages.rows[0]);
  } catch (error) {
    console.log(error);
  }
});

app.post("/signup", async (req, res) => {
  try {
    const { username } = req.body;
    const { password } = req.body;
    const register = await pool.query(
      "INSERT INTO usernames (username, password) VALUES ($1, $2) RETURNING *",
      [username, password]
    );

    res.send(register);
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`port is ${port}`);
});
