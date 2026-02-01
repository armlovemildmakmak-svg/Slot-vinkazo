let coin = 100;
const symbols = ["🍒","🍋","🔔","💎","7️⃣","❌","❌"];

function spin() {
  if (coin < 10) {
    msg.innerText = "coin ไม่พอ";
    return;
  }
  coin -= 10;
  const r1 = rand();
  const r2 = rand();
  const r3 = rand();
  document.getElementById("r1").innerText = r1;
  document.getElementById("r2").innerText = r2;
  document.getElementById("r3").innerText = r3;
  if (r1 === r2 && r2 === r3) {
    coin += 50;
    msg.innerText = "🎉 ชนะ!";
  } else {
    msg.innerText = "😅 ไม่โดน";
  }
  coin.innerText = coin;
}
function rand() {
  return symbols[Math.floor(Math.random()*symbols.length)];
}
