import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import LinkingConfig from "./LinkingConfig";
import RootNavigator from "./RootNavigator";

function Navigation() {
  return (
    <NavigationContainer linking={LinkingConfig}>
      <RootNavigator />
    </NavigationContainer>
  );
}

export default Navigation;
