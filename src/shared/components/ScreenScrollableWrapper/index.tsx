import React from "react";
import {StyleSheet} from "react-native";

import ScrollView from "../ThemedComponents/ScrollView";
import View from "../ThemedComponents/View";

function ScreenScrollableWrapper({children}: any) {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={true} decelerationRate={"fast"}>
        {children}
      </ScrollView>
    </View>
  );
}

export default ScreenScrollableWrapper;

const styles = StyleSheet.create({
  container: {
    height: "95%",
  },
});
