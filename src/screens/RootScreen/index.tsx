import React from "react";
import {StyleSheet, View, Button, Text} from "react-native";
import normalize from "react-native-normalize";
import {colors} from "../../shared/styles/palette";
import {RootStackScreenProps} from "../../shared/components/Navigation/navigationTypes";

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
    backgroundColor: colors.white,
  },
  text: {
    height: "80%",
    fontSize: normalize(30),
  },
});
