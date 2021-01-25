const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
require("dotenv").config();

let port = process.env.PORT || 3000;


app.get("/", (req, res) => {
  res.send("<h1>Renk Değiştir</h1>");
});

let initData = { color: "#fff", name: "....."};

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.emit("initial-data", initData);

  socket.on("new-bg", (data) => {
    socket.broadcast.emit("receive-bg", data);
    initData = data;
  });

  socket.on("disconnect", () => console.log("a user disconnected"));
});

http.listen(port, () => {
  console.log("listening on *:3000");
});
