export type EmojiSize = {
  fontSize: number,
  rectSize: number
}

export type Emoji = {
  emoji: string,
  top: number,
  left: number,
  size: EmojiSize;
}

export const createEmoji = (emoji: string, top: number = 100, left: number = 100, 
  size: EmojiSize = {fontSize: 128, rectSize: 160}): Emoji => {
    return {emoji, top, left, size};
}
