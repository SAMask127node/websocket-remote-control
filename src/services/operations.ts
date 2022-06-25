import robot from "robotjs";
import {
  drawCircle,
  drawRectangle,
  drawSquare,
} from "../utils/geometryOperations.js";
import {
  mouseDown,
  mouseLeft,
  mousePosition,
  mouseRight,
  mouseUp,
} from "../utils/mouseOperations.js";
import { prntScrn } from "../utils/prntScrnOperations.js";

export const getMessage = async (data: string) => {
  const commandName: string = data.split(" ")[0];
  const commandValues: string[] = data.split(" ").slice(1);
  const mouseXY = robot.getMousePos();
  const mouseX: number = mouseXY.x;
  const mouseY: number = mouseXY.y;

  let message: string = "";
  switch (commandName) {
    case "mouse_up":
      message = await mouseUp({ mouseX, mouseY, commandValues });
      break;
    case "mouse_down":
      message = await mouseDown({ mouseX, mouseY, commandValues });
      break;
    case "mouse_left":
      message = await mouseLeft({ mouseX, mouseY, commandValues });
      break;
    case "mouse_right":
      message = await mouseRight({ mouseX, mouseY, commandValues });
      break;
    case "mouse_position":
      message = await mousePosition({ mouseX, mouseY, commandValues });
      break;
    case "draw_circle":
      message = await drawCircle({ mouseX, mouseY, commandValues });
      break;
    case "draw_rectangle":
      message = await drawRectangle({ mouseX, mouseY, commandValues });
      break;
    case "draw_square":
      message = await drawSquare({ mouseX, mouseY, commandValues });
      break;
    case "prnt_scrn":
      message = await prntScrn({ mouseX, mouseY, commandValues });
      break;
    default:
  }

  return message;
};
