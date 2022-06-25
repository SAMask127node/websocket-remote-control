import WebSocket, { WebSocketServer, createWebSocketStream } from "ws";
import robot from "robotjs";
import { TParams } from "../../types/type";
import { getMessage } from "../../services/operations.js";
import { Duplex } from "stream";

export const createWebSocketServer = async (portNumber: number) => {
  const wss = new WebSocketServer({
    port: portNumber,
  });

  wss.on("connection", async (wsClient: WebSocket) => {
    const duplex: Duplex = createWebSocketStream(wsClient, {
      encoding: "utf8",
      decodeStrings: false,
    });

    duplex.on("data", async (data: string) => {
      console.log("Received: ", data);
      try {
        const messageCommand: string = await getMessage(data);
        duplex.write(messageCommand);
        if (messageCommand) console.log("Result: Operation resolved");
        else console.log("Result: Operation rejected");
      } catch (error) {
        console.log("Result: Operation rejected");
      }
    });
  });
  process.on("SIGINT", () => {
    process.stdout.write("Closing websocket...\n");
    wss.close();
    process.exit(0);
  });
};
