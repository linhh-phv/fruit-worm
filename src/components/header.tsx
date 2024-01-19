import React, {ReactNode} from 'react';
import Row from './row';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {useGetNavigation} from '../hooks';
import {Size} from '../styles/size';
import {ic_back_default} from '../assets/images';

interface IProps {
  isGoBack?: boolean;
  children?: ReactNode;
  title: string;
  componentLeft?: ReactNode;
}
const AppHeader: React.FC<IProps> = ({
  isGoBack,
  title,
  children,
  componentLeft,
}) => {
  const {navigation} = useGetNavigation();

  const _onPressLeft = () => {
    if (isGoBack && navigation.canGoBack()) {
      navigation.pop();
    }
  };
  return (
    <Row style={styles.container} justify="space-between">
      <View style={styles.left}>
        {componentLeft ? (
          componentLeft
        ) : (
          <Pressable onPress={_onPressLeft}>
            <Image style={styles.backImg} source={ic_back_default} />
          </Pressable>
        )}
      </View>

      <View style={styles.center}>
        <Text style={styles.textTitle}>{title}</Text>
      </View>

      {children ? children : <View style={styles.right} />}
    </Row>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Size.size16,
    height: Size.size40,
  },
  left: {
    width: '20%',
  },
  center: {
    width: '60%',
    alignItems: 'center',
  },
  right: {
    width: '60%',
  },
  backImg: {
    width: Size.size16,
    height: Size.size16,
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
