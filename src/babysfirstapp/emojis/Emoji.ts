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

export const createEmoji = (emoji: string, top: number = 0, left: number = 0, 
  size: EmojiSize = {fontSize: 200, rectSize: 300}): Emoji => {
    return {emoji, top, left, size};
}
