
// https://restcountries.eu/rest/v2/name/{name}

import React, {useState} from 'react';
import {
  SafeAreaView
} from 'react-native';

import Animated, {
  withTiming,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import { pickBackgroundColor, pickEmoji } from './Utils';
import { Color } from './Constants';
import EmojiOtus from './EmojiOtus'

import {
  Pressable,
  StyleSheet
} from 'react-native';

const BabysFirstApp = () => {

  const [emoji, setEmoji] = useState(pickEmoji());
  const backgroundColor = useSharedValue(pickBackgroundColor());

  const changeBackgroundColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(Color[backgroundColor.value], { duration: 1000}),
    };
  });

  const backgroundClicked = () => {
    backgroundColor.value = pickBackgroundColor(backgroundColor.value)
    setEmoji(pickEmoji(emoji));
  }

  return (
    <SafeAreaView>
      <Pressable onPress={backgroundClicked}>
        <Animated.View style={[styles.background, changeBackgroundColorStyle]}>
          <EmojiOtus emoji={emoji} />
        </Animated.View>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
  },
});

export default BabysFirstApp;