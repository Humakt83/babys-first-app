import { BACKGROUND_COLORS, Color, EMOJIS } from "./Constants";

export const pickBackgroundColor = (previousColor: Color = Color.white ) : Color => {
  const newColor = BACKGROUND_COLORS[Math.floor(Math.random() * Object.keys(Color).length)];
  return newColor !== previousColor ? newColor : pickBackgroundColor(previousColor);
}

export const pickEmoji = (previousEmoji: string = '') : string => {
  const newEmoji = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
  return newEmoji !== previousEmoji ? newEmoji : pickEmoji(previousEmoji);
}
