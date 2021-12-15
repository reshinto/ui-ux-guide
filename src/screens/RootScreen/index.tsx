import React from "react";
import {StyleSheet, Button} from "react-native";
import normalize from "react-native-normalize";
import {useRoute} from "@react-navigation/native";

import {
  RootStackScreenProps,
  ScreenRouteProps,
} from "../../shared/components/Navigation/navigationTypes";
import View from "../../shared/components/ThemedComponents/View";
import Text from "../../shared/components/ThemedComponents/Text";
import ScreenHeader from "../../shared/components/ScreenHeader";

function RootScreen({navigation}: RootStackScreenProps<"Root">) {
  const {params} = useRoute<ScreenRouteProps<"Root">>() as any;

  return (
    <View style={styles.box}>
      <ScreenHeader pageNumber={params?.pageNumber} />
      <Text style={styles.text}>Hello World 1!</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

export default RootScreen;

const styles = StyleSheet.create({
  box: {
    height: "100%",
  },
  text: {
    height: "80%",
    fontSize: normalize(30),
  },
});
