import React, {useEffect, useRef} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ICoordinate} from '../../../../models';
import {Size} from '../../../../styles/size';
import LottieView from 'lottie-react-native';

interface IProps {
  food: ICoordinate;
}

const Food: React.FC<IProps> = ({food}) => {
  const lottieRef = useRef<LottieView>(null);

  useEffect(() => {
    lottieRef.current?.play();
  }, []);
  return (
    <View style={[styles.container, {top: food.y, left: food.x}]}>
      {/* <Text style={[styles.food]}>🍎</Text> */}
      <View style={styles.foodLotie}>
        <LottieView
          resizeMode="cover"
          ref={lottieRef}
          source={require('../../../../assets/ani/ani_apple_food.json')}
        />
      </View>
    </View>
  );
};

export default Food;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: Size.WORM_SIZE,
    height: Size.WORM_SIZE,
    position: 'absolute',
    justifyContent: 'center',
  },
  food: {
    fontSize: Size.WORM_SIZE / 1.5,
    //
  },
  foodLotie: {
    width: Size.WORM_SIZE,
    height: Size.WORM_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
