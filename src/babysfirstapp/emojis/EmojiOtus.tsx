

import React from 'react';

import Animated, {
  withTiming,
  withRepeat,  
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import { Emoji } from './Emoji';

import {
  Pressable,
  Text,
  StyleSheet,
  GestureResponderEvent
} from 'react-native';

type Props = {
  emoji: Emoji,
  pressFn: Function,
}

const randomLocation = (): number => {
  return Math.floor(Math.random() * 300) * (Math.sign(Math.random() -0.5));
}

const EmojiOtus : React.FC<Props> = ({emoji, pressFn}) => {

  const rotates = Math.floor(Math.random() * 10) < 3;
  const fades = Math.floor(Math.random() * 10) < 1
  const direction = {top: randomLocation(), left: randomLocation()}

  const positionLeft = useSharedValue(emoji.left);
  const positionTop = useSharedValue(emoji.top);
  const poofDisplay = useSharedValue(0)
  const rotation = useSharedValue(0);
  const fading = useSharedValue(0);

  positionLeft.value = withRepeat(withTiming(direction.left, {duration: 2000}), 100, true);
  positionTop.value = withRepeat(withTiming(direction.top, {duration: 2000}), 100, true);
  rotation.value = rotates ? withRepeat(withTiming(360, {duration: 2000}), 100, true) : 0;
  fading.value = fades ? withRepeat(withTiming(0, {duration: 3000}), 75, true) : 1;

  const animatedStyle = useAnimatedStyle(() => {
    const transform = [{ rotateZ: `${rotation.value}deg` }];
    return {
      left: positionLeft.value,
      top: positionTop.value,
      opacity: Math.max(0, fading.value - poofDisplay.value),
      transform,
    }
  })

  const poofStyle = useAnimatedStyle(() => {
    return {
      opacity: poofDisplay.value,
      left: positionLeft.value,
      top: positionTop.value
    }
  })

  const styles = StyleSheet.create({
    emojiContainer: {
      width: emoji.size.rectSize,
      height: emoji.size.rectSize,
      position: 'absolute',
      zIndex: 5
    },
    emoji: {
      fontSize: emoji.size.fontSize
    },
    poof: {
      width: emoji.size.rectSize,
      height: emoji.size.rectSize,
      position: 'absolute',
      zIndex: 10
    },
  });

  const pressEmoji = (event: GestureResponderEvent) => {    
    event.stopPropagation();
    event.preventDefault();
    if (!event || !event.nativeEvent) {
      return;
    }
    const top = event.nativeEvent.pageY - event.nativeEvent.locationY;
    const left = event.nativeEvent.pageX - event.nativeEvent.locationX;
    poofDisplay.value = 100;
    setTimeout(() => {
      poofDisplay.value = 0;
      pressFn(top, left, emoji)
    }, 300)
  }

  return (
    <>
      <Animated.View style={[styles.poof, poofStyle]} >
        <Pressable onPress={pressEmoji} style={[styles.emojiContainer]}>
          <Text style={[styles.emoji]}>💨</Text>
        </Pressable>
      </Animated.View>
      <Animated.View style={[styles.emojiContainer, animatedStyle]}>
        <Text style={styles.emoji}>{emoji.emoji}</Text>
      </Animated.View>
    </>
  );
};

export default EmojiOtus;