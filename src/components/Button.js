import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import { Colors, Metrix } from '../config/theme/';
// import Fonts from '../config/Fonts';

const Button = ({
  title = '',
  onPress = () => {},
  buttonStyle = {},
  titleStyle,
  leftIcon=null,
  image=null,
}) => {


  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={{...styles.container, ...buttonStyle}}>
      <View style={styles.content}>
        {image ? <View style={styles.image}>{image}</View> : null}
        {leftIcon ? <View style={styles.leftIcon}>{leftIcon}</View> : null}
        <Text style={{...styles.title, ...titleStyle}}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    height: Metrix.HorizontalSize(45),
    width: '100%',
    borderRadius: Metrix.HorizontalSize(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    // fontFamily: Fonts.SemiBold,
    fontSize: Metrix.FontExtraSmall,
    color: Colors.white,
  },
  content:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  leftIcon:{
    marginRight:Metrix.HorizontalSize(10)
  }
});
