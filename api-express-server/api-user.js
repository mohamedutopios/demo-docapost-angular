const express = require("express");
const app = express();
const PORT = 3000;
const cors = require("cors");

let users = [
  { id: 1, name: "John", email: "john@utopios.net" },
  { id: 2, name: "Jane", email: "jane@utopios.net" },
];

app.use(
  cors({
    origin: "http://localhost:4200",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.get("/api/users", (req, res) => {
  res.json(users);
});

app.post("/api/users", (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).json(user);
});

app.put("/api/users/:id", (req, res) => {
  const id = req.params.id;
  const user = req.body;
  const index = users.findIndex((user) => user.id === id);
  users[index] = user;
  res.json(user);
});

app.get("/api/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find((user) => user.id === id);

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ error: "User not found" });
  }
});

app.delete("/api/users/:id", (req, res) => {
  const id = req.params.id;
  users = users.filter((user) => user.id !== id);
  res.status(204).json(users);
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});