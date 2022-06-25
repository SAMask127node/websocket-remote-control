import WebSocket, { WebSocketServer, createWebSocketStream } from "ws";
export const createWebSocketServer = async (portNumber: number) => {
  const wss = new WebSocketServer({
    port: portNumber,
  });

  wss.on("connection", async (wsClient: WebSocket) => {
    const duplex = createWebSocketStream(wsClient, {
      encoding: "utf8",
      decodeStrings: false,
    });

    duplex.on("data", async (data: string) => {
      const message = "mouse_position 444,333\0";
      // duplex.write("mouse_position 444,333\0", (error) => {
      duplex.write(message, (error) => {
        if (error) {
          console.log(error);
        }
      });
    });
  });
};
