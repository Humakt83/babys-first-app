
// https://restcountries.eu/rest/v2/name/{name}

import React from 'react';

import Animated, {
  withTiming,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import {
  Pressable,
  Text,
  StyleSheet
} from 'react-native';

type Props = {
  emoji: String
}

const EmojiOtus : React.FC<Props> = ({emoji}) => {

  return (
    <Pressable>
      <Animated.View style={[]}>
        <Text style={styles.emoji}>{emoji}</Text>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  emoji: {
    width: 80,
    height: 80,
    position: 'absolute',
    top: 100,
    left: 100,
    fontSize: 64,
  },
});

export default EmojiOtus;