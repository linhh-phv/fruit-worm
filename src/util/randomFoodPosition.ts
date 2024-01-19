import {ICoordinate} from '../models';
import {Size} from '../styles/size';

export const randomFoodPosition = (maxX: number, maxY: number): ICoordinate => {
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);
  return {
    x: randomX + Size.WORM_SIZE > maxX ? maxX - Size.WORM_SIZE : randomX,
    y: randomY + Size.WORM_SIZE > maxY ? maxY - Size.WORM_SIZE : randomY,
  };
};
