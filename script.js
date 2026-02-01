let currentUser = null;

function registerUser() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  fetch("http://localhost:3000/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  })
  .then(res => res.json())
  .then(d => {
    document.getElementById("auth-msg").innerText = d.error || "สมัครสำเร็จ!";
  });
}

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  })
  .then(res => res.json())
  .then(d => {
    if (d.error) {
      document.getElementById("auth-msg").innerText = d.error;
    } else {
      currentUser = d.user.username;
      document.getElementById("auth-box").style.display = "none";
      document.getElementById("game-box").style.display = "block";
      document.getElementById("coin").innerText = d.user.coin;
    }
  });
}

function spin() {
  fetch("http://localhost:3000/spin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: currentUser })
  })
  .then(res => res.json())
  .then(d => {
    if (d.error) return (msg.innerText = d.error);
    r1.innerText = d.reels[0];
    r2.innerText = d.reels[1];
    r3.innerText = d.reels[2];
    coin.innerText = d.coin;
    msg.innerText = d.win > 0 ? "🎉 ชนะ +" + d.win : "😅 ไม่โดน";
  });
}