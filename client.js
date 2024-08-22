import net from "net";

const socket = net.createConnection({ port: 3000 }, () => {
  console.log("connected to server!");
});

socket.write("Hello server! 🎈", "utf8", (err) => {
  if (err) {
    console.error(err);
  }
});

socket.addListener("data", (msg) => {
  console.log(msg.toString());
});
