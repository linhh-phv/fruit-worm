import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {ic_worm} from '../../../../assets/images';
import {EDirection, ICoordinate} from '../../../../models';
import {Colors} from '../../../../styles/colors';
import {Size} from '../../../../styles/size';
import {GAME_BOUNDS} from '../board';

interface IProps {
  worm: ICoordinate[];
  direction: EDirection;
}

const Worm: React.FC<IProps> = ({worm, direction}) => {
  const _rotateWorm = (): string => {
    switch (direction) {
      case EDirection.Right:
        return '-90deg';

      case EDirection.Down:
        return '0deg';

      case EDirection.Left:
        return '90deg';

      case EDirection.Up:
        return '-180deg';

      default:
        return '-90deg';
    }
  };

  let isDie = false;

  return (
    <>
      {worm?.map((segment: ICoordinate, index: number) => {
        let styleLeft = segment.x;
        let styleTop = segment.y;
        const wormX = segment.x;
        const wormY = segment.y;
        const sizeDie = Size.WORM_SIZE / 4;

        if (wormX + Size.WORM_SIZE > Size.WIDTH_BOARD) {
          styleLeft = Size.WIDTH_BOARD - Size.WORM_SIZE + sizeDie;
        } else if (wormX < GAME_BOUNDS.xMin) {
          styleLeft = wormX + Size.WORM_SIZE - sizeDie;
          isDie = true;
        } else if (isDie && index !== 0) {
          styleLeft = wormX + Size.WORM_SIZE;
        }

        if (wormY + Size.WORM_SIZE > Size.HEIGHT_BOARD) {
          styleTop = Size.HEIGHT_BOARD - Size.WORM_SIZE + sizeDie;
        } else if (wormY < GAME_BOUNDS.yMin) {
          styleTop = segment.y + Size.WORM_SIZE - sizeDie;
          isDie = true;
        } else if (isDie && index !== 0) {
          styleTop = segment.y + Size.WORM_SIZE - sizeDie;
        }

        const segmantStyle = {
          left: styleLeft,
          top: styleTop,
        };

        return (
          <View style={[styles.container, segmantStyle]} key={index}>
            {index === 0 ? (
              <Image
                style={[styles.wormImg, {transform: [{rotate: _rotateWorm()}]}]}
                source={ic_worm}
              />
            ) : (
              <View style={[styles.wormNor]} />
            )}
          </View>
        );
      })}
    </>
  );
};

export default Worm;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: Size.WORM_SIZE,
    height: Size.WORM_SIZE,
    position: 'absolute',
    justifyContent: 'center',
  },
  wormNor: {
    backgroundColor: Colors.primary,
    width: Size.WORM_SIZE,
    height: Size.WORM_SIZE,
    borderRadius: Size.borderRadius100,
  },
  wormImg: {
    width: Size.WORM_SIZE,
    height: Size.WORM_SIZE,
  },
});
