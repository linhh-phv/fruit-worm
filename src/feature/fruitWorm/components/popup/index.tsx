import React from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Modal from 'react-native-modal';
import {Size} from '../../../../styles/size';
import Row from '../../../../components/row';

interface IProps {
  visible: boolean;
  onReplay: () => void;
  onClose: () => void;
  title?: string;
}

const PopupLose: React.FC<IProps> = ({
  onReplay,
  onClose,
  visible,
  title = '',
}) => {
  return (
    visible && (
      <Modal
        style={[styles.root]}
        animationIn={'bounceInUp'}
        animationInTiming={400}
        animationOut={'bounceInDown'}
        animationOutTiming={200}
        isVisible={visible}
        avoidKeyboard
        onBackButtonPress={onClose}
        onBackdropPress={onClose}>
        <SafeAreaView style={[styles.container]}>
          <View style={styles.containerContent}>
            <View style={styles.container}>
              <Text style={styles.textTitle}>{title}</Text>
            </View>
            <Row justify="space-between">
              <Pressable style={styles.containerButton} onPress={onReplay}>
                <Text>Replay</Text>
              </Pressable>

              <Pressable style={styles.containerButton} onPress={onClose}>
                <Text>Home</Text>
              </Pressable>
            </Row>
          </View>
        </SafeAreaView>
      </Modal>
    )
  );
};

export default PopupLose;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  root: {
    margin: 0,
  },
  containerContent: {
    width: Size.WINDOW_WIDTH - 64,
    height: Size.size150,
    backgroundColor: '#fff',
    borderRadius: Size.borderRadius12,
    padding: Size.size16,
  },
  textTitle: {fontSize: 20, fontWeight: 'bold', textAlign: 'center'},
  containerButton: {
    alignItems: 'center',
    width: '50%',
    paddingVertical: Size.size8,
    borderRadius: Size.borderRadius8,
  },
});
