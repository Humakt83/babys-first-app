import { BACKGROUND_COLORS } from "./Constants";

export const pickBackgroundColor = () : string => {
  return BACKGROUND_COLORS[Math.floor(Math.random() * BACKGROUND_COLORS.length)];
}