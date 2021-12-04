import React from "react";
import {StyleSheet, Button} from "react-native";
import normalize from "react-native-normalize";
import {RootStackScreenProps} from "../../shared/components/Navigation/navigationTypes";
import View from "../../shared/components/ThemedComponents/View";
import {MonoText} from "../../shared/components/ThemedComponents/StyledText";

function HomeScreen({navigation}: RootStackScreenProps<"Home">) {
  return (
    <View style={styles.box}>
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
