const WHITE = "#fff";
const BLACK = "#000";
const TINT_COLOR = "#2f95dc";
const TAB_ICON_COLOR = "#ccc";
const SLIDER_GRADIENT_PINK = "#FFA0DF";
const SLIDER_GRADIENT_BLUE = "#6FADFF";
const SLIDER_GRADIENT_PURPLE = "#5B43EA";
const BACKGROUND_WHITE = "#F8F8F8";
const BACKGROUND_DARK_GRAY = "#323639";
const BACKGROUND_PINK = "rgba(255, 160, 223, 0.15)";
const BACKGROUND_BLUE = "rgba(111, 173, 255, 0.15)";
const BACKGROUND_PURPLE = "rgba(91, 67, 234, 0.15)";
const LIGHT_GREY = "#AAAAAA";
const GREY = "#888888";

export const colors = {
  white: WHITE,
  black: BLACK,
  tintColorLight: TINT_COLOR,
  tintColorDark: WHITE,
  pink: SLIDER_GRADIENT_PINK,
  blue: SLIDER_GRADIENT_BLUE,
  purple: SLIDER_GRADIENT_PURPLE,
  backgroundWhite: BACKGROUND_WHITE,
  tabIconDefault: TAB_ICON_COLOR,
  backgroundDarkGray: BACKGROUND_DARK_GRAY,
  sectionTitlePurple: SLIDER_GRADIENT_PURPLE,
  sectionTitlePink: SLIDER_GRADIENT_PINK,
  pinkOpaque: BACKGROUND_PINK,
  blueOpaque: BACKGROUND_BLUE,
  purpleOpaque: BACKGROUND_PURPLE,
  lightGrey: LIGHT_GREY,
  shortcutText: GREY,
};

export const themes = {
  light: {
    text: colors.black,
    background: colors.backgroundWhite,
    tint: colors.tintColorLight,
    tabIconDefault: colors.tabIconDefault,
    tabIconSelected: colors.tintColorLight,
    gradientOne: colors.pink,
    gradientTwo: colors.blue,
    gradientThree: colors.purple,
    sectionTitle: colors.sectionTitlePurple,
    gradientOneOpaque: colors.pinkOpaque,
    gradientTwoOpaque: colors.blueOpaque,
    gradientThreeOpaque: colors.purpleOpaque,
    shortcutText: colors.shortcutText,
    bulletText: colors.white,
  },
  dark: {
    text: colors.backgroundWhite,
    background: colors.backgroundDarkGray,
    tint: colors.tintColorDark,
    tabIconDefault: colors.tabIconDefault,
    tabIconSelected: colors.tintColorDark,
    gradientOne: colors.purple,
    gradientTwo: colors.blue,
    gradientThree: colors.pink,
    sectionTitle: colors.sectionTitlePink,
    gradientOneOpaque: colors.purpleOpaque,
    gradientTwoOpaque: colors.blueOpaque,
    gradientThreeOpaque: colors.pinkOpaque,
    shortcutText: colors.backgroundWhite,
    bulletText: colors.black,
  },
};
