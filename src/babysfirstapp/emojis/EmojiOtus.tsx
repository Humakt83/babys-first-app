
// https://restcountries.eu/rest/v2/name/{name}

import React from 'react';

import Animated, {
  withTiming,
  useAnimatedStyle,
  useSharedValue,
  event,
} from 'react-native-reanimated';

import { Emoji } from './Emoji';

import {
  Pressable,
  Text,
  StyleSheet
} from 'react-native';

type Props = {
  emoji: Emoji,
  pressFn: Function
}

const EmojiOtus : React.FC<Props> = ({emoji, pressFn}) => {

  const styles = StyleSheet.create({
    emojiContainer: {
      width: emoji.size.rectSize,
      height: emoji.size.rectSize,
      position: 'absolute',
      top: emoji.top,
      left: emoji.left,
    },
    emoji: {
      fontSize: emoji.size.fontSize,
    },
  });

  return (
    <Pressable onPress={(event) => {
      event.stopPropagation();
      event.preventDefault();
      pressFn(event, emoji);
    }} style={[styles.emojiContainer]}>
      <Animated.View style={[]}>
        <Text style={styles.emoji}>{emoji.emoji}</Text>
      </Animated.View>
    </Pressable>
  );
};

export default EmojiOtus;