import { httpServer } from "./servers/http_server/index.js";
import { createWebSocketServer } from "./servers/ws_server/index.js";

const HTTP_PORT = 3000;
const WS_PORT = 8080;

createWebSocketServer(WS_PORT);

console.log(`Start static http server on the ${HTTP_PORT} port!`);
console.log(
  `WebSocket params: Client port ${HTTP_PORT}, server port ${WS_PORT}`
);
httpServer.listen(HTTP_PORT);
