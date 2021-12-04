import React from "react";
import {StyleSheet, Button} from "react-native";
import normalize from "react-native-normalize";
import {RootStackScreenProps} from "../../shared/components/Navigation/navigationTypes";
import View from "../../shared/components/ThemedComponents/View";
import Text from "../../shared/components/ThemedComponents/Text";

function RootScreen({navigation}: RootStackScreenProps<"Root">) {
  return (
    <View style={styles.box}>
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
