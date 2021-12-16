import useColorScheme from "../../hooks/useColorScheme";
import { themes } from "../../styles/palette";

export const getThemeColor = (colorType: keyof typeof themes.light & keyof typeof themes.dark) => {
  const theme = useColorScheme();

  return themes[theme][colorType];
}