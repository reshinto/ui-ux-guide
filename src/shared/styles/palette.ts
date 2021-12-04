const WHITE = "#fff";

export const colors = {
  white: WHITE,
  black: "#000",
  tintColorLight: '#2f95dc',
  tintColorDark: WHITE,
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
