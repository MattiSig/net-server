import net from "net";

const PORT = process.env.PORT || 3000;

const server = net.createServer((socket) => {
  console.log("Client connected"); // Handle incoming data (HTTP request)
  socket.on("data", (data) => {
    // Send a basic HTTP response
    const httpResponse =
      "HTTP/1.1 200 OK\r\n" +
      "Content-Type: text/plain\r\n" +
      "Content-Length: 13\r\n" +
      "\r\n" +
      "Hello, world!";

    socket.write(httpResponse, "utf8", (err) => {
      console.error(err);
    });
    socket.end(); // Close the connection after sending the response
  });

  socket.on("end", () => {
    console.log("Client disconnected");
  });
});

server.listen(PORT, () => {
  console.log(`Frigging HTTP server listening on port ${PORT}`);
});
