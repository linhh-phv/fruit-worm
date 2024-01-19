export interface ICoordinate {
  x: number;
  y: number;
}

export interface IBoundaries {
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
}

export enum EDirection {
  Right = 'Right',
  Up = 'Up',
  Left = 'Left',
  Down = 'Down',
}
