import React, {useEffect} from "react";
import {StyleSheet, Button} from "react-native";
import normalize from "react-native-normalize";
import {useRoute} from "@react-navigation/native";

import {
  RootStackScreenProps,
  ScreenRouteProps,
} from "../../shared/components/Navigation/navigationTypes";
import View from "../../shared/components/ThemedComponents/View";
import MonoText from "../../shared/components/ThemedComponents/StyledText/MonoText";
import {NOT_FOUND} from "../../shared/constants/contents";

function AboutScreen({navigation}: RootStackScreenProps<"About">) {
  const {params} = useRoute<ScreenRouteProps<"About">>() as any;

  useEffect(() => {
    if (params?.topicNumber !== params?.currentTopicNumber) {
      params?.setCurrentTopicNumber(params?.topicNumber);
    }
  }, []);

  return (
    <View style={styles.box}>
      <MonoText style={styles.text}>Hello World 2!</MonoText>
      <Button
        title="Go to Not Found"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: NOT_FOUND.name}] as any,
          })
        }
      />
    </View>
  );
}

export default AboutScreen;

const styles = StyleSheet.create({
  box: {
    height: "100%",
  },
  text: {
    height: "80%",
    fontSize: normalize(30),
  },
});