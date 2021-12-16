import React, {useEffect} from "react";
import {StyleSheet} from "react-native";
import normalize from "react-native-normalize";
import {useRoute} from "@react-navigation/native";

import {ScreenRouteProps} from "../../shared/components/Navigation/navigationTypes";
import View from "../../shared/components/ThemedComponents/View";
import Text from "../../shared/components/ThemedComponents/Text";

function RootScreen() {
  const {params} = useRoute<ScreenRouteProps<"Root">>() as any;

  useEffect(() => {
    if (params?.topicNumber !== params?.currentTopicNumber) {
      params?.setCurrentTopicNumber(params?.topicNumber);
    }
  }, []);

  return (
    <View style={styles.box}>
      <Text style={styles.text}>Hello World 1!</Text>
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
