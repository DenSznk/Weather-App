import React, { ReactNode } from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type MainButtonProps = {
  title: string;
  onPress: () => void;
  color: string;
  icon?: ReactNode
};

const MainButton: React.FC<MainButtonProps> = ({title, onPress, color, icon}) => {
  return <TouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={onPress}>
      {icon && <View>{icon}</View>}
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>;
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default MainButton;
