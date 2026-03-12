import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { Metrix,Colors,Fonts } from '../config'
const ToggleButton = (
    {
        items,
        activeToggle,
        setActiveToggle
    }
) => {



  return (
   <View style={[styles.toggleContaier, {...styles.shadow}]}>
          {items.map(item=>{
           const isActive=item.value;
            return (
              <TouchableOpacity
              key={item.id}
                style={
                  activeToggle === isActive
                    ? [styles.toggleTask, {...styles.shadow}]
                    : null
                }
                onPress={() => setActiveToggle(isActive)}>
                <Text
                  style={
                    activeToggle === isActive
                      ? [styles.toggleTitle, {color: Colors.black}]
                      : styles.toggleTitle
                  }>
                  {item.label}
                </Text>
              </TouchableOpacity>
            );
          })}
       
         </View>
  )
}

export default ToggleButton

const styles = StyleSheet.create({
  toggleContaier: {
    height: Metrix.VerticalSize(45),
    // alignSelf: 'stretch',
    marginHorizontal: Metrix.HorizontalSize(20),
    paddingHorizontal: Metrix.HorizontalSize(30),
    borderRadius: Metrix.Radius,
    backgroundColor: Colors.lightBlue,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Metrix.VerticalSize(20),
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -4},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 1,
  },
  toggleTask: {
    width: Metrix.HorizontalSize(130),
    height: Metrix.VerticalSize(25),
    borderRadius: Metrix.Radius,
    backgroundColor: Colors.white,
    alignItems: 'center',
  },
  toggleTitle: {
    fontSize: Metrix.FontRegular,
  },
});