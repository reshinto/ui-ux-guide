import React, {useEffect} from "react";
import {StyleSheet} from "react-native";
import normalize from "react-native-normalize";
import {useRoute} from "@react-navigation/native";

import {ScreenRouteProps} from "../../shared/components/Navigation/navigationTypes";
import View from "../../shared/components/ThemedComponents/View";
import {getThemeColor} from "../../shared/utils/helpers";
import ContentsText from "../../assets/svgs/ContentsText.svg";
import ScrollView from "../../shared/components/ThemedComponents/ScrollView";
import {CONTENTS_DATA} from "../../shared/constants/contents";
import ContentsSection from "./ContentsSection";

function ContentsScreen() {
  const {params} = useRoute<ScreenRouteProps<"Contents">>() as any;

  useEffect(() => {
    if (params?.topicNumber !== params?.currentTopicNumber) {
      params?.setCurrentTopicNumber(params?.topicNumber);
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <ContentsText fill={getThemeColor("text")} />
      </View>
      <View style={styles.mainContainer}>
        <ScrollView
          showsVerticalScrollIndicator={true}
          decelerationRate={"fast"}
        >
          {CONTENTS_DATA.map((content, index) => (
            <ContentsSection key={index} {...content} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

export default ContentsScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  titleContainer: {
    paddingLeft: normalize(20),
    paddingRight: normalize(20),
  },
  mainContainer: {
    marginTop: normalize(32),
    marginLeft: normalize(20),
    marginRight: normalize(20),
    height: "85%",
    overflow: "hidden",
  },
});
