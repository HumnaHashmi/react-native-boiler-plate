import React from 'react';
import { TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Hamburger = ({ onPress, isOpen = false, size = 26, color = '#000' }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Ionicons name={isOpen ? 'close' : 'menu'} size={size} color={color} />
    </TouchableOpacity>
  );
};

export default Hamburger;
