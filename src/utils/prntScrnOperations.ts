import robot from "robotjs";
import { TParams } from "../types/type";
import Jimp from "jimp";

export const prntScrn = async ({ mouseX, mouseY }: TParams) => {
  const xPos = mouseX;
  const yPos = mouseY;

  const size = 200;
  const rimg = robot.screen.capture(mouseX - 100, mouseY - 100, size, size);
  let jimg = new Jimp(size, size);
  for (var x = 0; x < size; x++) {
    for (var y = 0; y < size; y++) {
      var hex = rimg.colorAt(x, y);
      var num = parseInt(hex + "ff", 16);
      jimg.setPixelColor(num, x, y);
    }
  }
  const pngBase64 = await jimg.getBase64Async("image/png");
  const message = `prnt_scrn ${pngBase64.split(",")[1]}\0`;
  return message;
};
