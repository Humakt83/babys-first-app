

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
  pressFn: Function
}

const randomLocation = (): number => {
  return Math.floor(Math.random() * 400);
}

const EmojiOtus : React.FC<Props> = ({emoji, pressFn}) => {


  const direction = {top: randomLocation(), left: randomLocation()}

  const positionLeft = useSharedValue(emoji.left);
  const positionTop = useSharedValue(emoji.top);
  const poofDisplay = useSharedValue(0)

  positionLeft.value = withRepeat(withTiming(direction.left, {duration: 2000}), 50, true);
  positionTop.value = withRepeat(withTiming(direction.top, {duration: 2000}), 50, true);  

  const animatedStyle = useAnimatedStyle(() => {    
    return {
      left: positionLeft.value,
      top: positionTop.value,
      opacity: 100 - poofDisplay.value
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
      fontSize: emoji.size.fontSize,
    },
    poof: {
      width: emoji.size.rectSize,
      height: emoji.size.rectSize,
      position: 'absolute',
      zIndex: 10
    }
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
    }, 400)
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