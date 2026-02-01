const express = require("express");
const cors = require("cors");
const spin = require("./slot");
const { register, login, users } = require("./users");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
  const { username, password } = req.body;
  const result = register(username, password);
  res.json(result);
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const result = login(username, password);
  res.json(result);
});

app.post("/spin", (req, res) => {
  const { username } = req.body;
  const user = users.find(u => u.username === username);
  if (!user) return res.json({ error: "ไม่พบผู้เล่น" });

  const bet = 10;
  if (user.coin < bet) return res.json({ error: "coin ไม่พอ", coin: user.coin });

  user.coin -= bet;
  const result = spin(bet);
  user.coin += result.win;

  res.json({ reels: result.reels, win: result.win, coin: user.coin });
});

app.listen(3000, () => console.log("Backend running at http://localhost:3000"));