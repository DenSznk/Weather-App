import React, {ReactNode} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type MainButtonProps = {
  title: string;
  onPress: () => void;
  color: string;
  icon?: ReactNode;
};

const MainButton: React.FC<MainButtonProps> = ({
  title,
  onPress,
  color,
  icon,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: color}]}
      onPress={onPress}>
      <View style={styles.content}>
        <Text style={styles.buttonText}>{title}</Text>
        {icon && <View style={styles.iconContainer}>{icon}</View>}
      </View>
    </TouchableOpacity>
  );
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
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  iconContainer: {
    marginRight: 8,
  },
});

export default MainButton;
