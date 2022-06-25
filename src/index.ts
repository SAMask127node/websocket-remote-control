import Jimp from "jimp";
import { httpServer } from "./servers/http_server/index.js";
import { createWebSocketServer } from "./servers/ws_server/index.js";

const HTTP_PORT = 3000;
const WS_PORT = 8080;

createWebSocketServer(WS_PORT);

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);
