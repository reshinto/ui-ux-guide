import {registerRootComponent} from "expo";
import {StatusBar} from "expo-status-bar";
import React from "react";
import {StyleSheet, View} from "react-native";
import {Text, ActivityIndicator} from "react-native-normalized";
import normalize from "react-native-normalize";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.box}>
        <Text style={styles.text}>Hello World!</Text>
        <ActivityIndicator />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    top: normalize(180, "height"),
    left: normalize(40),
    width: normalize(300),
    height: normalize(300),
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: normalize(30),
  },
});

registerRootComponent(App);
