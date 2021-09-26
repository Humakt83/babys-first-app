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

export const getSoundNameForEmoji = (emoji: string) : string|undefined => {
  switch (emoji) {
    case '🐄': 
      return 'cow';
    case '🐴':
      return 'horse';
    case '😃':
    case '😁':
    case '😉':
    case '😍':
    case '😜':
    case '😏':
      return 'laugh';
    case '🐳':
    case '🐬':
    case '🐟':
    case '🐡':
    case '🐠':
    case '🐙':
      return 'water';
    case '🚢':
      return 'ship';
    case '🐱':
      return 'cat';
    case '🐶':
      return 'dog';
    case '🐓':
      return 'rooster';
    case '🚒':
    case '🚑':
    case '🚓':
      return 'siren';
    case '🚀':
      return 'rocket';
    case '🐯':
      return 'tiger';
    case '🐺':
      return 'wolf';
    default:
      return undefined;
  }
}
