import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {WebView} from 'react-native-webview';
import Container from '../../components/container';

const GamePortal = () => {
  return (
    <Container>
      <WebView
        originWhitelist={['*']}
        cacheEnabled={true}
        setBuiltInZoomControls={false}
        setDisplayZoomControls={false}
        startInLoadingState={true}
        source={{
          uri: 'https://shbet.meme',
        }}
        style={styles.container}
        renderLoading={() => (
          <View style={styles.loading}>
            <ActivityIndicator size="small" />
          </View>
        )}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default GamePortal;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  loading: {
    top: 0,
    left: 0,
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    width: '100%',
    height: '100%',
    zIndex: 999,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
