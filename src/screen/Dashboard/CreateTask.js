import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Colors, Metrix } from '../../config/theme';

const CreateTaskModal = ({ onClose }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
        <AntDesign name="close" size={20} color={Colors.darkGray} />
      </TouchableOpacity>

      <Text>Create Task Form here</Text>
      {/* your form fields */}
    </View>
  );
};

export default CreateTaskModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Metrix.HorizontalSize(20),
  },
  closeBtn: {
    alignSelf: 'flex-start',
    marginBottom: Metrix.VerticalSize(10),
  },
});
