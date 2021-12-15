import React from "react";
import {StyleSheet, Button} from "react-native";
import normalize from "react-native-normalize";
import {useRoute} from "@react-navigation/native";

import {
  RootStackScreenProps,
  ScreenRouteProps,
} from "../../shared/components/Navigation/navigationTypes";
import View from "../../shared/components/ThemedComponents/View";
import MonoText from "../../shared/components/ThemedComponents/StyledText/MonoText";
import ScreenHeader from "../../shared/components/ScreenHeader";

function HomeScreen({navigation}: RootStackScreenProps<"Home">) {
  const {params} = useRoute<ScreenRouteProps<"Home">>() as any;

  return (
    <View style={styles.box}>
      <ScreenHeader pageNumber={params?.pageNumber} />
      <MonoText style={styles.text}>Hello World 2!</MonoText>
      <Button
        title="Go to Not Found"
        onPress={() => navigation.navigate("NotFound")}
      />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  box: {
    height: "100%",
  },
  text: {
    height: "80%",
    fontSize: normalize(30),
  },
});
