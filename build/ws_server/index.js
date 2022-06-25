var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { WebSocketServer, createWebSocketStream } from "ws";
export const createWebSocketServer = () => __awaiter(void 0, void 0, void 0, function* () {
    const wss = new WebSocketServer({
        port: 8080,
    });
    wss.on("connection", (wsClient) => __awaiter(void 0, void 0, void 0, function* () {
        const duplex = createWebSocketStream(wsClient, {
            encoding: "utf8",
            decodeStrings: false,
        });
        duplex.on("data", (data) => __awaiter(void 0, void 0, void 0, function* () {
            console.log("data: ", data);
            duplex.write("mouse_position 444,333\0", (e) => {
                if (e) {
                    console.log(e);
                }
            });
        }));
    }));
});
