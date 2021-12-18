import React, {useEffect} from "react";
import {StyleSheet, TouchableOpacity} from "react-native";
import normalize from "react-native-normalize";
import {useRoute, useNavigation} from "@react-navigation/native";
import {LinearGradient} from "expo-linear-gradient";

import {ScreenRouteProps} from "../../shared/components/Navigation/navigationTypes";
import View from "../../shared/components/ThemedComponents/View";
import {getThemeColor} from "../../shared/utils/helpers";
import ForumText from "../../shared/components/ThemedComponents/StyledText/ForumText";
import AppTitle from "../../assets/svgs/AppTitle.svg";
import ScrollRightArrow from "../../assets/svgs/ScrollRightArrow.svg";
import {colors} from "react-native-elements";
import {getPageNumFromScreenName} from "../../shared/utils/helpers/rootNavigator";
import {CONTENTS} from "../../shared/constants/contents";

function RootScreen() {
  const {params} = useRoute<ScreenRouteProps<"Root">>() as any;
  const navigation = useNavigation();

  useEffect(() => {
    if (params?.topicNumber !== params?.currentTopicNumber) {
      params?.setCurrentTopicNumber(params?.topicNumber);
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.svgContainer}>
        <AppTitle width={"100%"} fill={getThemeColor("text")} />
      </View>
      <ForumText style={[styles.textContainer, styles.text]}>
        starter guide for devs (& designers)
      </ForumText>
      <View style={styles.mainContainer}>
        <LinearGradient
          start={[0, 0]}
          end={[1, 1]}
          locations={[0, 0.5, 1]}
          style={[styles.main]}
          colors={[
            getThemeColor("gradientOne"),
            getThemeColor("gradientTwo"),
            getThemeColor("gradientThree"),
          ]}
        ></LinearGradient>
        <TouchableOpacity
          style={styles.mainTextContainer}
          onPress={() => {
            const nextScreenName = CONTENTS.name;
            params?.setCurrentPageNumber(
              getPageNumFromScreenName(nextScreenName)
            );
            navigation.reset({
              index: 0,
              routes: [{name: nextScreenName}] as any,
            });
          }}
        >
          <ForumText style={styles.mainText}>Scroll </ForumText>
          <ScrollRightArrow />
        </TouchableOpacity>
      </View>
      <View style={styles.bottomTextContainer}>
        <ForumText style={styles.text}>using Figma</ForumText>
        <ForumText style={styles.text}>
          and with follow along exercises.
        </ForumText>
      </View>
    </View>
  );
}

export default RootScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  svgContainer: {
    paddingLeft: normalize(14),
    paddingRight: normalize(14),
  },
  text: {
    fontSize: normalize(16),
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: normalize(17.66),
  },
  textContainer: {
    textAlign: "right",
    marginTop: normalize(16),
    paddingRight: normalize(20),
    paddingLeft: normalize(20),
  },
  mainContainer: {
    marginTop: normalize(16),
    marginLeft: normalize(20),
    marginRight: normalize(20),
    height: "62%",
    overflow: "hidden",
    position: "relative",
  },
  main: {
    width: "100%",
    height: "100%",
  },
  mainTextContainer: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    right: normalize(0),
    paddingRight: normalize(16),
    top: normalize(0),
    bottom: normalize(0),
  },
  mainText: {
    color: colors.white,
    fontSize: normalize(12),
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: normalize(13.25),
    textAlign: "right",
    marginRight: normalize(4),
  },
  bottomTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: normalize(16),
    marginLeft: normalize(20),
    marginRight: normalize(20),
  },
});
