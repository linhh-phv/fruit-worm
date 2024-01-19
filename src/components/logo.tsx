import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

interface IProps {
  text: string;
  radius: number;
  fontSize: number;
}
const LogoFruitWormText: React.FC<IProps> = ({text, radius, fontSize}) => {
  const characters = text.split('');

  return (
    <View style={styles.container}>
      {characters.map((char, index) => {
        const degree = (index * 10) % 360; // Điều chỉnh góc để có hình dạng đẹp hơn
        const radian = (degree * Math.PI) / 180;
        const x = radius * Math.cos(radian);
        const y = radius * Math.sin(radian);

        return (
          <Text key={index} style={[styles.text, {fontSize, top: y, left: x}]}>
            {char}
          </Text>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  text: {
    position: 'absolute',
    textAlign: 'center',
  },
});
export default LogoFruitWormText;
