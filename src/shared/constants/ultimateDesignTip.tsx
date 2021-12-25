import React from "react";
import {TouchableOpacity} from "react-native";
import normalize from "react-native-normalize";

import ForumText from "../components/ThemedComponents/StyledText/ForumText";
import {openBrowser} from "../utils/helpers";

export const SECTION_TITLE_1 = "DRUM ROLE PLEASE";

export const SECTION_TEXT_1 =
  "Maybe I should’ve had this page right at the beginning of the guide...With this ultimate tip, you can basically become an expert UI designer without any formal experience because it is so easy! This will make your life so much easier when you are forced to be a designer when you’re suppose to just be a develeoper.";

export const SECTION_TITLE_2 = "HURRY UP & TELL ME";

export const SECTION_TEXT_2 =
  "So my mentor, an expert UX/UI designer taught me this ultimate design tip. Which is to take screenshots of good interface design, drag it into Figma and basically trace. You can use this tip anytime including when you’re not sure if your button height is tall enough, your font size is legible, and to replicate certain design elements.";

export const SECTION_TITLE_3 = "WHERE CAN I GET SCREENSHOTS";

// export const SECTION_TEXT_3 =
//   "Of course you can take screenshots from the apps you’ve installed, but there are some pages you won’t be able to access or apps you can’t download for free. In this case, you can access Mobbin, a growing platform that provides screenshots of every single page in all sorts of apps.";

export const SECTION_TEXT_3 = (() => (
  <>
    <ForumText>
      Of course you can take screenshots from the apps you’ve installed, but
      there are some pages you won’t be able to access or apps you can’t
      download for free. In this case, you can access{" "}
    </ForumText>
    <TouchableOpacity
      style={{
        paddingLeft: normalize(20),
        paddingRight: normalize(0),
        paddingBottom: normalize(0),
        marginBottom: normalize(0),
      }}
      onPress={() => openBrowser("https://mobbin.design/browse/ios/apps")}
    >
      <ForumText
        style={{
          paddingLeft: normalize(0),
          textDecorationLine: "underline",
          paddingRight: normalize(0),
          marginRight: normalize(-20),
        }}
      >
        Mobbin
      </ForumText>
    </TouchableOpacity>
    <ForumText>
      , a growing platform that provides screenshots of every single page in all
      sorts of apps.
    </ForumText>
  </>
))();
