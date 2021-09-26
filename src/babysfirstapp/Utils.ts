import { Color, EMOJIS } from "./Constants";

// Divisor by 2 since compiled javascript has two entries per enum
const COLOR_AMOUNT = Object.entries(Color).length / 2;

export const pickBackgroundColor = (previousColor: string = Color[Color.white] ) : string => { 
  const newColor = Color[Math.floor(Math.random() * COLOR_AMOUNT)];
  return newColor !== previousColor ? newColor : pickBackgroundColor(previousColor);
}

export const pickEmoji = (previousEmoji: string = '') : string => {
  const newEmoji = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
  return newEmoji !== previousEmoji ? newEmoji : pickEmoji(previousEmoji);
}
