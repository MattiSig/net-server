import net from "net";

net.createConnection({ port: 3000 }, () => {
  console.log("connected to server!");
});
