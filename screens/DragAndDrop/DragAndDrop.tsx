import React from 'react';
import {StyleSheet, View} from 'react-native';
import Animated from 'react-native-reanimated';
import {PanGestureHandler} from 'react-native-gesture-handler';

const SIZE = 100;

const DragAndDrop = () => {


  return (
    <View style={styles.container}>
      <PanGestureHandler>
        <Animated.View style={styles.square} />
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    width: SIZE,
    height: SIZE,
    backgroundColor: 'lightblue',
    borderRadius: 10,
  },
});

export default DragAndDrop;
