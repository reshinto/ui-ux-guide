const WHITE = "#fff";
const SLIDER_GRADIENT_PINK = "#FFA0DF";
const SLIDER_GRADIENT_BLUE = "#6FADFF";
const SLIDER_GRADIENT_PURPLE = "#5B43EA";


export const colors = {
  white: WHITE,
  black: "#000",
  tintColorLight: '#2f95dc',
  tintColorDark: WHITE,
  pink: SLIDER_GRADIENT_PINK,
  blue: SLIDER_GRADIENT_BLUE,
  purple: SLIDER_GRADIENT_PURPLE,
};

export const themes = {
  light: {
    text: '#000',
    background: '#fff',
    tint: colors.tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: colors.tintColorLight,
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: colors.tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: colors.tintColorDark,
  },
};
