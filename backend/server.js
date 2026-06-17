require("dotenv").config();

const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Portfolio Backend Running");
});

app.get("/projects", async (req, res) => {
  const result = await pool.query(
    "SELECT * FROM projects"
  );

  res.json(result.rows);
});

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  await pool.query(
    "INSERT INTO contacts(name,email,message) VALUES($1,$2,$3)",
    [name, email, message]
  );

  res.json({
    message: "Saved Successfully"
  });
});

app.listen(process.env.PORT, () => {
  console.log("Server Running");
});
