import { LinkingOptions } from "@react-navigation/native";
import { RootStackParamList } from "./navigationTypes";
import * as Linking from "expo-linking";

const LinkingConfig: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: "root",
      Contents: "contents",
      About: "about",
      ColumnGutterMargin: "column-gutter-margin",
      Always4pxSizing: "always-4px-sizing",
      AutoLayout: "auto-layout",
      FillWithImage: "fill-with-image",
      FindingIcons: "finding-icons",
      Typeface: "typeface",
      TypeHierarchy: "type-hierarchy",
      AccessibleColors: "accessible-colors",
      Gradients: "gradients",
      CreatingComponents: "creating-components",
      CreatingVariants: "creating-variants",
      UiKits: "ui-kits",
      UltimateDesignTip: "ultimate-design-tip",
      NotFound: "*",
    },
  },
};

export default LinkingConfig;