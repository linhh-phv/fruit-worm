import React, {ReactNode} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Colors} from '../styles/colors';
import {Size} from '../styles/size';

interface IProps {
  children: ReactNode;
}
const Container: React.FC<IProps> = ({children}) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: Size.size32,
  },
});
