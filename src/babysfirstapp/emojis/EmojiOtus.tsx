
// https://restcountries.eu/rest/v2/name/{name}

import React from 'react';

import Animated, {
  withTiming,
  withRepeat,  
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

const randomLocation = (): number => {
  return Math.floor(Math.random() * 400);
}

const EmojiOtus : React.FC<Props> = ({emoji, pressFn}) => {

  const direction = {top: randomLocation(), left: randomLocation()}

  const positionLeft = useSharedValue(emoji.left);
  const positionTop = useSharedValue(emoji.top);

  positionLeft.value = withRepeat(withTiming(direction.left, {duration: 2000}), 50, true);
  positionTop.value = withRepeat(withTiming(direction.top, {duration: 2000}), 50, true);

  const animatedStyle = useAnimatedStyle(() => {    
    return {
      left: positionLeft.value,
      top: positionTop.value
    }
  })

  const styles = StyleSheet.create({
    emojiContainer: {
      width: emoji.size.rectSize,
      height: emoji.size.rectSize,
      position: 'absolute',
    },
    emoji: {
      fontSize: emoji.size.fontSize,
    },
  });

  return (
    <Animated.View style={[styles.emojiContainer, animatedStyle]}>
      <Pressable onPress={(event) => {
        event.stopPropagation();
        event.preventDefault();
        pressFn(event, emoji);
      }} style={[styles.emojiContainer]}>      
          <Text style={styles.emoji}>{emoji.emoji}</Text>
      </Pressable>
    </Animated.View>
  );
};

export default EmojiOtus;