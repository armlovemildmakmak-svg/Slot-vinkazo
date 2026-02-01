const users = []; // เก็บผู้เล่น (จำลอง DB แบบง่าย)

function register(username, password) {
  if (users.find(u => u.username === username)) {
    return { error: "username มีคนใช้แล้ว" };
  }
  const user = { username, password, coin: 100 };
  users.push(user);
  return { success: true, user };
}

function login(username, password) {
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return { error: "username/password ผิด" };
  return { success: true, user };
}

module.exports = { register, login, users };