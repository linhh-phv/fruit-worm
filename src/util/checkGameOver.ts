import {IBoundaries, ICoordinate} from '../models';

export const checkGameOver = (
  wormHead: ICoordinate,
  boundaries: IBoundaries,
): boolean => {
  const wormX = Math.floor(wormHead.x);
  const wormY = Math.floor(wormHead.y);

  const minX = Math.floor(boundaries.xMin);
  const maxX = Math.floor(boundaries.xMax);
  const minY = Math.floor(boundaries.yMin);
  const maxY = Math.floor(boundaries.yMax);

  return wormX < minX || wormX > maxX || wormY < minY || wormY > maxY;
};
