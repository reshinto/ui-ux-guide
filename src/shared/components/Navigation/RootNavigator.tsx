import React, {useState} from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import {RootStackParamList} from "./navigationTypes";
import {
  APP_DATA,
  MAX_PAGE_NUMBER,
  SCREEN_COMPONENTS,
} from "../../constants/navigation";
import ScreenHeader from "../ScreenHeader";
import Slider from "../Slider";

function RootNavigator() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const [currentTopicNumber, setCurrentTopicNumber] = useState(undefined);
  const [currentPageNumber, setCurrentPageNumber] = useState(0);

  return (
    <>
      <ScreenHeader topicNumber={currentTopicNumber} />
      <Slider
        maxPageNumber={MAX_PAGE_NUMBER}
        currentPageNumber={currentPageNumber}
        setCurrentPageNumber={setCurrentPageNumber}
      />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: "none",
        }}
      >
        {APP_DATA.map((screenData: any) => (
          <Stack.Screen
            key={screenData.name}
            name={screenData.name as any}
            component={SCREEN_COMPONENTS[screenData.name]}
            initialParams={{
              ...screenData,
              maxPageNumber: MAX_PAGE_NUMBER,
              currentTopicNumber,
              setCurrentTopicNumber,
              currentPageNumber,
              setCurrentPageNumber,
            }}
          />
        ))}
      </Stack.Navigator>
    </>
  );
}

export default RootNavigator;
