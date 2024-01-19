import React from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Colors} from '../../styles/colors';
import {Size} from '../../styles/size';
import {useGetNavigation} from '../../hooks';
import {ic_worm} from '../../assets/images';

const HomeScreen: React.FC = () => {
  const {navigation} = useGetNavigation();

  const _onGoToGame = () => {
    navigation.push('FRUIT_WORM_GAME_SCREEN', {});
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.containerLogo}>
          <Text style={styles.textLogo}>Worm Fruit</Text>
          <Image style={[styles.wormImg]} source={ic_worm} />
        </View>
        <View style={styles.containerDescription}>
          <Text style={styles.textDescription}>Tap to start playing</Text>
        </View>
        <Pressable onPress={_onGoToGame} style={styles.containerBtnPlay}>
          <Text style={styles.textBtnPlay}>Play</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: Size.size32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerLogo: {height: Size.size200, alignItems: 'center'},
  textLogo: {fontWeight: 'bold', fontSize: 40},
  containerDescription: {
    height: Size.size40,
    justifyContent: 'center',
  },
  textDescription: {
    textAlign: 'center',
    color: Colors.grayNG60,
  },
  containerBtnPlay: {
    borderRadius: Size.borderRadius10,
    backgroundColor: Colors.yellowY50,
    alignItems: 'center',
    justifyContent: 'center',
    height: Size.size44,
  },
  textBtnPlay: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 20,
    textTransform: 'uppercase',
  },
  wormImg: {
    width: Size.size64,
    height: Size.size64,
    marginTop: Size.size20,
  },
});
