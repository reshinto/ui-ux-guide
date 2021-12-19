import {useNavigation, useRoute} from "@react-navigation/native";
import React from "react";
import {StyleSheet, TouchableOpacity} from "react-native";
import normalize from "react-native-normalize";

import {ScreenRouteProps} from "../../../../shared/components/Navigation/navigationTypes";
import ForumText from "../../../../shared/components/ThemedComponents/StyledText/ForumText";
import View from "../../../../shared/components/ThemedComponents/View";
import {getPageNumFromScreenName} from "../../../../shared/utils/helpers/rootNavigator";

function DisplayTopic({data, setSectionHeight}: any) {
  const {params} = useRoute<ScreenRouteProps<"Contents">>() as any;
  const navigation = useNavigation();

  return (
    <View
      onLayout={(event) => {
        const {height} = event.nativeEvent.layout;
        setSectionHeight(height);
      }}
    >
      {data.map(({topicNumber, topicTitle, name}: any, index: number) => (
        <TouchableOpacity
          key={index}
          style={styles.topicContainer}
          onPress={() => {
            params?.setCurrentPageNumber(getPageNumFromScreenName(name));
            navigation.reset({
              index: 0,
              routes: [{name: name}] as any,
            });
          }}
        >
          <ForumText style={styles.text}>{topicNumber}</ForumText>
          <ForumText style={[styles.topicTitle, styles.text]}>
            {topicTitle}
          </ForumText>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default DisplayTopic;

const styles = StyleSheet.create({
  topicContainer: {
    flexDirection: "row",
    paddingBottom: normalize(16),
  },
  topicTitle: {
    marginLeft: normalize(16),
  },
  text: {
    fontSize: normalize(16),
  },
});
