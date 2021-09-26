
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

import { pickBackgroundColor, pickEmoji, getSoundNameForEmoji } from './Utils';
import EmojiContainer from './emojis/EmojiContainer';
import SoundPlayer from 'react-native-sound-player';

import {
  StatusBar,
  Pressable,
  StyleSheet
} from 'react-native';

const BabysFirstApp = () => {

  const [emoji, setEmoji] = useState(pickEmoji());
  const backgroundColor = useSharedValue(pickBackgroundColor());

  const changeBackgroundColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(backgroundColor.value, { duration: 1000}),
    };
  });

  const backgroundClicked = () => {
    backgroundColor.value = pickBackgroundColor(backgroundColor.value)
    const newEmoji = pickEmoji(emoji);
    setEmoji(newEmoji);
    playSound(newEmoji);
  }

  const playSound = (newEmoji: string) => {
    const sound = getSoundNameForEmoji(newEmoji);
    if (sound) {
      try {
        SoundPlayer.playSoundFile(sound, 'mp3');
      } catch (error) {
        console.log('Unable to play the sound file', error);
      }
    }
  }

  return (
    <SafeAreaView>
      <StatusBar hidden={true} />
      <Pressable onPress={backgroundClicked}>
        <Animated.View style={[styles.background, changeBackgroundColorStyle]}>
          <EmojiContainer emoji={emoji} />
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