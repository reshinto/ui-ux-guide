import useColorScheme from "../../hooks/useColorScheme";
import {themes} from "../../styles/palette";

export const useThemeColor = (
  props: { light?: string; dark?: string },
  colorName: keyof typeof themes.light & keyof typeof themes.dark
) => {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } 
  
  return themes[theme][colorName];
}
