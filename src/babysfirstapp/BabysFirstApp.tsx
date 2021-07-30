
// https://restcountries.eu/rest/v2/name/{name}

import React, {useState} from 'react';
import {
  SafeAreaView
} from 'react-native';

import { pickBackgroundColor } from './Utils';

import {
  View,
  Pressable,
  StyleSheet
} from 'react-native';

const BabysFirstApp = () => {

  const [backgroundColor, setBackgroundColor] = useState(pickBackgroundColor());


  return (
    <SafeAreaView>
      <Pressable onPress={() => setBackgroundColor(pickBackgroundColor())}>
        <View style={[styles.background, {backgroundColor: backgroundColor}]}></View>
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