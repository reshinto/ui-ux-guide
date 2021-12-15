import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {RootStackParamList} from "./navigationTypes";
import APP_DATA from "../../utils/helpers/rootNavigator";

function RootNavigator() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "none",
      }}
    >
      {APP_DATA.map(
        ({
          name,
          component,
          initialParams,
        }: {
          name: string;
          component: any;
          initialParams: {pageNumber: string};
        }) => (
          <Stack.Screen
            key={name}
            name={name as any}
            component={component}
            initialParams={initialParams}
          />
        )
      )}
    </Stack.Navigator>
  );
}

export default RootNavigator;
