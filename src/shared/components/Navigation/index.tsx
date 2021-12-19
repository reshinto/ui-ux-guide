import React from "react";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import {ColorSchemeName} from "react-native";

import LinkingConfig from "./LinkingConfig";
import RootNavigator from "./RootNavigator";

function Navigation({colorScheme}: {colorScheme: ColorSchemeName}) {
  return (
    <NavigationContainer
      linking={LinkingConfig}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

export default Navigation;
