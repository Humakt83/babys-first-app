import { BACKGROUND_COLORS, Color } from "./Constants";

export const pickBackgroundColor = (previousColor: Color = Color.white ) : Color => {
  const newColor = BACKGROUND_COLORS[Math.floor(Math.random() * Object.keys(Color).length)];
  return newColor !== previousColor ? newColor : pickBackgroundColor(previousColor);
}
