import {ICoordinate} from '../models';

export const checkEatsFood = (
  head: ICoordinate,
  food: ICoordinate,
  area: number,
): boolean => {
  const distanceBetweenFoodNWormX = Math.abs(head.x - food.x);
  const distanceBetweenFoodNWormY = Math.abs(head.y - food.y);
  return distanceBetweenFoodNWormX < area && distanceBetweenFoodNWormY < area;
};
