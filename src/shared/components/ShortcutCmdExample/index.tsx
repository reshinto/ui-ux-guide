import React from "react";
import {StyleSheet} from "react-native";
import normalize from "react-native-normalize";
import {getThemeColor} from "../../utils/helpers";

import GradientBackground from "../GradientBackground";
import ForumText from "../ThemedComponents/StyledText/ForumText";
import View from "../ThemedComponents/View";

function ShortcutCmdExample({example}: any) {
  return (
    <GradientBackground>
      <View style={[styles.container, styles.removeBackground]}>
        {example.map(({image: Svg, text}: any, index: number) => (
          <View
            key={index}
            style={[
              styles.removeBackground,
              styles.contentsContainer,
              !text && {marginTop: normalize(16)},
            ]}
          >
            <Svg style={styles.svg} />
            {text && (
              <ForumText
                style={[styles.text, {color: getThemeColor("shortcutText")}]}
              >
                {text}
              </ForumText>
            )}
          </View>
        ))}
      </View>
    </GradientBackground>
  );
}

export default ShortcutCmdExample;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingBottom: normalize(16),
  },
  removeBackground: {
    backgroundColor: "transparent",
  },
  contentsContainer: {
    alignItems: "center",
    marginRight: normalize(20),
  },
  svg: {
    marginBottom: normalize(8),
  },
  text: {
    fontSize: normalize(12),
  },
});
