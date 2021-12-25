import React from "react";
import {StyleSheet, TouchableOpacity} from "react-native";
import normalize from "react-native-normalize";
import {useNavigation, useRoute} from "@react-navigation/native";

import View from "../ThemedComponents/View";
import {getThemeColor} from "../../utils/helpers";
import ContentsIcon from "../../../assets/svgs/ContentsIcon.svg";
import {CONTENTS} from "../../constants/contents";
import {getPageNumFromScreenName} from "../../utils/helpers/rootNavigator";
import {ScreenRouteProps} from "../Navigation/navigationTypes";

function ScreenTitle({svgScreenTitle: SvgScreenTitle}: any) {
  const {params} = useRoute<ScreenRouteProps<"Root">>() as any;
  const navigation = useNavigation();

  return (
    <View style={styles.svgContainer}>
      <SvgScreenTitle fill={getThemeColor("text")} />
      <TouchableOpacity
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
        <ContentsIcon />
      </TouchableOpacity>
    </View>
  );
}

export default ScreenTitle;

const styles = StyleSheet.create({
  svgContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingLeft: normalize(20),
    paddingRight: normalize(20),
    marginBottom: normalize(32),
  },
});
