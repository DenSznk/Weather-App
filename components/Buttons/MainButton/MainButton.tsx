import React from 'react';
import {Button} from 'react-native';

type MainButtonProps = {
  title: string;
  onPress: () => void;
  color: string;
};

const MainButton: React.FC<MainButtonProps> = ({title, onPress, color}) => {
  return <Button title={title} onPress={onPress} color={color} />;
};

export default MainButton;
