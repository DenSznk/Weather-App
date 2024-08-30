import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withRepeat,
} from 'react-native-reanimated';

const SIZE = 100;

const Reanim = () => {
  const progress = useSharedValue(1);
  const scale = useSharedValue(1);

  const reanimStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      borderRadius: progress.value * (SIZE / 10),
      transform: [
        {scale: scale.value},
        {rotate: `${progress.value * 2 * Math.PI}rad}`},
      ],
    };
  }, []);

  useEffect(() => {
    progress.value = withRepeat(withSpring(2, {duration: 2000}), 3, true);
    scale.value = withRepeat(withSpring(2, {duration: 2000}), 3, true);
  }, [progress, scale]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.animatedBox, reanimStyle]}>
        <Text style={styles.text}>Hello</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  animatedBox: {
    height: SIZE,
    width: SIZE,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});

export default Reanim;
