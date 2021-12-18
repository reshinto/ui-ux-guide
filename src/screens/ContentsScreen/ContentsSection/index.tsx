import React, {useState} from "react";
import {StyleSheet} from "react-native";
import normalize from "react-native-normalize";

import View from "../../../shared/components/ThemedComponents/View";
import DisplayLabel from "./DisplayLabel";
import DisplayGradient from "./DisplayGradient";
import DisplayTopic from "./DisplayTopic";

function ContentsSection(props: any) {
  const [sectionHeight, setSectionHeight] = useState(0);

  return (
    <View style={styles.container}>
      <DisplayLabel {...props} />
      <DisplayGradient {...props} sectionHeight={sectionHeight} />
      <DisplayTopic {...props} setSectionHeight={setSectionHeight} />
    </View>
  );
}

export default ContentsSection;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingLeft: normalize(132),
  },
});
