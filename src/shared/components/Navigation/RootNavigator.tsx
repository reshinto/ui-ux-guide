import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "../../../screens/HomeScreen";
import RootScreen from "../../../screens/RootScreen";
import {RootStackParamList} from "./navigationTypes";
import NotFoundScreen from "../../../screens/NotFoundScreen";

function RootNavigator() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "none",
      }}
    >
      <Stack.Screen name="Root" component={RootScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
