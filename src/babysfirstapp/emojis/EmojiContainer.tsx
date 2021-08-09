
// https://restcountries.eu/rest/v2/name/{name}

import React, {useState, useEffect} from 'react';

import EmojiOtus from './EmojiOtus';

import { createEmoji, Emoji, EmojiSize } from './Emoji';

import {
  View,
  StyleSheet
} from 'react-native';

type Props = {
  emoji: string
}

const EmojiContainer : React.FC<Props> = ({emoji}) => {

  const [emojis, setEmojis] = useState<Emoji[]>([])

  useEffect(() => {
    setEmojis([createEmoji(emoji)])
  }, [emoji])

  const quadrupleEmojis = (top: number, left: number, emoji: Emoji) => {
    const newSize: EmojiSize = {fontSize: (emoji.size.fontSize / 2),
                                rectSize: (emoji.size.rectSize / 2)};
    const newEmojis = [
      createEmoji(emoji.emoji, top, left, newSize),
      createEmoji(emoji.emoji, top, left + newSize.rectSize, newSize),
      createEmoji(emoji.emoji, top + newSize.rectSize, left, newSize),
      createEmoji(emoji.emoji, top + newSize.rectSize, left + newSize.rectSize, newSize)
    ];    
    setEmojis(newEmojis.concat(emojis.filter(emo => emo !== emoji)));
  }

  return (
    <View style={[styles.container]}>
      {emojis.map((emo, index) => {
        return <EmojiOtus pressFn={quadrupleEmojis} key={`emoji-${index}`} emoji={emo} />
      })}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
});

export default EmojiContainer;