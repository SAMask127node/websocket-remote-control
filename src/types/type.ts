export type TParams = {
  mouseX: number;
  mouseY: number;
  commandValues: string[];
};

export type TMouseMove = {
  up: string;
  down: string;
  left: string;
  right: string;
  position: string;
};

export type TDraw = {
  circle: string;
  rectangle: string;
  square: string;
};

export type TPrnt = {
  scrn: string;
};

export type TOperations = {
  [key: string]: string | undefined;
};
