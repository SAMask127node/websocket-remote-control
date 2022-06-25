import robot from "robotjs";
import { TParams } from "../types/type";

export const mouseUp = async ({ mouseX, mouseY, commandValues }: TParams) => {
  const offset = parseInt(commandValues[0]);
  const xPos = mouseX;
  const yPos = mouseY - offset;

  robot.moveMouse(xPos, yPos);
  return "mouse_up";
};

export const mouseDown = async ({ mouseX, mouseY, commandValues }: TParams) => {
  const offset = parseInt(commandValues[0]);
  const xPos = mouseX;
  const yPos = mouseY + offset;

  robot.moveMouse(xPos, yPos);

  return "mouse_down";
};

export const mouseLeft = async ({ mouseX, mouseY, commandValues }: TParams) => {
  const offset = parseInt(commandValues[0]);
  const xPos = mouseX - offset;
  const yPos = mouseY;

  robot.moveMouse(xPos, yPos);

  return "mouse_left";
};
export const mouseRight = async ({
  mouseX,
  mouseY,
  commandValues,
}: TParams) => {
  const offset = parseInt(commandValues[0]);
  const xPos = mouseX + offset;
  const yPos = mouseY;

  robot.moveMouse(xPos, yPos);

  return "mouse_right";
};
export const mousePosition = async ({ mouseX, mouseY }: TParams) => {
  const xPos = mouseX;
  const yPos = mouseY;

  robot.moveMouse(xPos, yPos);

  const message = `mouse_position ${xPos},${yPos}\0`;
  return message;
};
