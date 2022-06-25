import robot from "robotjs";
import { TParams } from "../types/type";

export const drawCircle = async ({
  mouseX,
  mouseY,
  commandValues,
}: TParams) => {
  const radius = parseInt(commandValues[0]);

  let xPos = mouseX;
  let yPos = mouseY;

  robot.mouseToggle("down");
  for (let i = 0; i <= Math.PI * 2; i += 0.01) {
    const x = xPos + radius + radius * Math.cos(Math.PI + i);
    const y = yPos + radius * Math.sin(Math.PI + i);

    robot.dragMouse(x, y);
  }
  robot.mouseToggle("up");

  const message = `draw_circle`;
  return message;
};

export const drawRectangle = async ({
  mouseX,
  mouseY,
  commandValues,
}: TParams) => {
  const [a, b] = [parseInt(commandValues[0]), parseInt(commandValues[1])];
  let xPos = mouseX;
  let yPos = mouseY;

  robot.mouseToggle("down");

  for (let i = 0; i <= a; i += 1) {
    const x = xPos + i;
    robot.dragMouse(x, yPos);
  }

  for (let j = 0; j <= b; j += 1) {
    const y = yPos + j;
    robot.dragMouse(xPos + a, y);
  }

  for (let i = 0; i <= a; i += 1) {
    const x = xPos + a - i;
    robot.dragMouse(x, yPos + b);
  }

  for (let j = 0; j <= b; j += 1) {
    const y = yPos + b - j;
    robot.dragMouse(xPos, y);
  }
  robot.mouseToggle("up");

  const message = `draw_rectangle`;
  return message;
};

export const drawSquare = async ({
  mouseX,
  mouseY,
  commandValues,
}: TParams) => {
  const side = parseInt(commandValues[0]);

  let xPos = mouseX;
  let yPos = mouseY;

  robot.mouseToggle("down");
  for (let i = 0; i <= side; i += 1) {
    const x = xPos + i;
    robot.dragMouse(x, yPos);
  }

  for (let j = 0; j <= side; j += 1) {
    const y = yPos + j;
    robot.dragMouse(xPos + side, y);
  }

  for (let i = 0; i <= side; i += 1) {
    const x = xPos + side - i;
    robot.dragMouse(x, yPos + side);
  }

  for (let j = 0; j <= side; j += 1) {
    const y = yPos + side - j;
    robot.dragMouse(xPos, y);
  }
  robot.mouseToggle("up");

  const message = `draw_square `;
  return message;
};
