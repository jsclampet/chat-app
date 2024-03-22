const express = require("express");
const app = new express();
const env = require("dotenv");
const port = process.env.port || 3004;
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

app.get("/messages", async (req, res) => {
  try {
    const allMessages = await pool.query("SELECT * FROM messages");
    res.send(allMessages.rows[0]);
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`port is ${port}`);
});
