import React, {useEffect, useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import LottieView from 'lottie-react-native';

const Loading: React.FC = () => {
  const lottieRef = useRef<LottieView>(null);

  useEffect(() => {
    lottieRef.current?.play();
  }, []);
  return (
    <View style={styles.container}>
      <LottieView
        ref={lottieRef}
        source={require('../assets/ani/loading.json')}
      />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
