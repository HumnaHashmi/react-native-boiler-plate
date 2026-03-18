import React from 'react';
import Modal from 'react-native-modal';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
// import { CreateTask } from '../../screen/Dashboard';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Colors, Metrix } from '../../config/theme';

export default function FabModal({ visible, onClose ,children}) {
  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onClose}
      style={{ margin: 0 }}
      backdropTransitionOutTiming={0}
    >
      <View style={styles.modalContainer}>

          {children}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: Colors.white,
    flex: 1,
    paddingTop: Metrix.VerticalSize(30),
  },
  closeBtn: {
    marginLeft: Metrix.HorizontalSize(10),
  },
});
