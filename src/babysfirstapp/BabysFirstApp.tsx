
// https://restcountries.eu/rest/v2/name/{name}

import React from 'react';
import {
  SafeAreaView
} from 'react-native';

import Animated, {
  withTiming,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import { pickBackgroundColor } from './Utils';
import { Color } from './Constants';

import {
  Pressable,
  StyleSheet
} from 'react-native';

const BabysFirstApp = () => {

  const backgroundColor = useSharedValue(pickBackgroundColor());

  const changeBackgroundColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(Color[backgroundColor.value], { duration: 1000}),
    };
  });

  return (
    <SafeAreaView>
      <Pressable onPress={() => backgroundColor.value = pickBackgroundColor(backgroundColor.value)}>
        <Animated.View style={[styles.background, changeBackgroundColorStyle]} />
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