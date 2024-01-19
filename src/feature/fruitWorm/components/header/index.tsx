import React, {ReactNode} from 'react';
import {Image, Pressable, StyleSheet} from 'react-native';
import Row from '../../../../components/row';
import {Size} from '../../../../styles/size';
import {Colors} from '../../../../styles/colors';
import {ic_back, ic_pause, ic_play} from '../../../../assets/images';

interface IProps {
  onBack: () => void;
  pauseGame: () => void;
  children: ReactNode;
  isPause: boolean;
}

const Header: React.FC<IProps> = ({children, isPause, pauseGame, onBack}) => {
  return (
    <Row justify="space-between" style={styles.container}>
      <Pressable onPress={onBack}>
        <Image style={styles.backImg} source={ic_back} />
      </Pressable>

      <Pressable onPress={pauseGame}>
        <Image style={styles.backImg} source={isPause ? ic_play : ic_pause} />
      </Pressable>
      {children}
    </Row>
  );
};

interface IProps {
  onBack: () => void;
  pauseGame: () => void;
  children: ReactNode;
  isPause: boolean;
}

export default Header;

const styles = StyleSheet.create({
  container: {
    height: Size.size60,
    borderColor: Colors.primary,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: Size.size16,
    backgroundColor: Colors.background,
    marginHorizontal: Size.size12,
  },
  backImg: {width: Size.size24, height: Size.size24},
});
