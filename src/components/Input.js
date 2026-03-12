import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import { Colors,Metrix} from '../config/theme/';
// import Fonts from '../config/Fonts';

const Input = ({
  onChangeText = () => {},
  value = '',
  placeholder = '',
  rightIcon = null,
  style = {},
  secureTextEntry = false,
  multiline = false,
  inputStyle,
  leftIcon=null

}) => {
  return (
    <View style={{...styles.container, ...style}}>
      {leftIcon ? <View style={styles.icon}>{leftIcon}</View> : null}

      <TextInput
        onChangeText={onChangeText}
        value={value}
        multiline={multiline}
        style={{...styles.input, ...inputStyle}}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={Colors.darkGray}
      />
      {rightIcon ? <View style={[styles.icon,{marginRight:Metrix.HorizontalSize(10)}]}>{rightIcon}</View> : null}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: Metrix.VerticalSize(45),
    backgroundColor: Colors.lightgray,
    flexDirection: 'row',
    borderRadius: Metrix.HorizontalSize(20),
  },
  input: {
    flex: 1,
    paddingHorizontal: Metrix.HorizontalSize(15),
    color: Colors.text,
    // fontFamily: Fonts.Regular,
    fontSize: Metrix.FontExtraSmall,
  },
  icon:{
    marginTop:Metrix.VerticalSize(10),
    marginLeft:Metrix.HorizontalSize(10)
  }
});
