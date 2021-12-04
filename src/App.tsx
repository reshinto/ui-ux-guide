import {registerRootComponent} from "expo";
import React from "react";
import {StyleSheet, StatusBar} from "react-native";
import {SafeAreaProvider} from "react-native-safe-area-context";
import Navigation from "./shared/components/Navigation";
import useCachedResources from "./shared/hooks/useCachedResources";
import useColorScheme from "./shared/hooks/useColorScheme";
import {getBarStyle} from "./shared/utils/helpers/statusBar";
import SafeAreaView from "./shared/components/ThemedComponents/SafeAreaView";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={getBarStyle(colorScheme)} />
        <Navigation colorScheme={colorScheme} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

registerRootComponent(App);
