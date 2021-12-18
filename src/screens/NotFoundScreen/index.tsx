import React, {useEffect} from "react";
import {StyleSheet, TouchableOpacity} from "react-native";
import {useRoute} from "@react-navigation/native";

import {
  RootStackScreenProps,
  ScreenRouteProps,
} from "../../shared/components/Navigation/navigationTypes";
import View from "../../shared/components/ThemedComponents/View";
import Text from "../../shared/components/ThemedComponents/Text";
import normalize from "react-native-normalize";
import {colors} from "../../shared/styles/palette";
import {ROOT} from "../../shared/constants/contents";

function NotFoundScreen({navigation}: RootStackScreenProps<"NotFound">) {
  const {params} = useRoute<ScreenRouteProps<"NotFound">>() as any;

  useEffect(() => {
    if (params?.topicNumber !== params?.currentTopicNumber) {
      params?.setCurrentTopicNumber(params?.topicNumber);
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>This screen doesn't exist.</Text>
      <TouchableOpacity
        style={styles.link}
        onPress={() => {
          params?.setCurrentPageNumber(0);
          navigation.reset({
            index: 0,
            routes: [{name: ROOT.name as any}],
          });
        }}
      >
        <Text style={styles.linkText}>Go to root screen!</Text>
      </TouchableOpacity>
    </View>
  );
}

export default NotFoundScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: normalize(20),
  },
  title: {
    fontSize: normalize(20),
    fontWeight: "bold",
  },
  link: {
    marginTop: normalize(15),
    paddingVertical: normalize(15),
  },
  linkText: {
    fontSize: normalize(14),
    color: colors.blue,
  },
});
