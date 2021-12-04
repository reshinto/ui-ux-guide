import {registerRootComponent} from "expo";
import React from "react";
import {StyleSheet, StatusBar} from "react-native";
import {colors} from "./shared/styles/palette";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import Navigation from "./shared/components/Navigation";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Navigation />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

registerRootComponent(App);
