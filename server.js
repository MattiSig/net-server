import net from "net";

const PORT = process.env.PORT || 3000;

const server = net.createServer();

server.on("connection", (socket) => {
  console.log("client connected");
});

server.listen(PORT);

server.on("listening", () => {
  console.log(`server listening on port ${PORT}`);
});
