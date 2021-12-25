import * as contents from "./contents";
import RootScreen from "../../screens/RootScreen";
import ContentsScreen from "../../screens/ContentsScreen";
import AboutScreen from "../../screens/AboutScreen";
import NotFoundScreen from "../../screens/NotFoundScreen";
import ColumnGutterMarginScreen from "../../screens/ColumnGutterMarginScreen";
import Always4pxSizingScreen from "../../screens/Always4pxSizingScreen";
import AutoLayoutScreen from "../../screens/AutoLayoutScreen";
import FillWithImageScreen from "../../screens/FillWithImageScreen";
import FindingIconsScreen from "../../screens/FindingIconsScreen";
import TypefaceScreen from "../../screens/TypefaceScreen";
import TypeHierarchyScreen from "../../screens/TypeHierarchyScreen";
import AccessibleColorsScreen from "../../screens/AccessibleColorsScreen";
import GradientsScreen from "../../screens/GradientsScreen";
import CreatingComponentsScreen from "../../screens/CreatingComponentsScreen";
import CreatingVariantsScreen from "../../screens/CreatingVariantsScreen";
import UiKitsScreen from "../../screens/UiKitsScreen";
import UltimateDesignTipScreen from "../../screens/UltimateDesignTipScreen";

export const SCREEN_COMPONENTS: any = {
  [contents.ROOT.name]: RootScreen,
  [contents.CONTENTS.name]: ContentsScreen,
  [contents.ABOUT.name]: AboutScreen,
  [contents.COLUMN_GUTTER_MARGIN.name]: ColumnGutterMarginScreen,
  [contents.ALWAYS_4PX_SIZING.name]: Always4pxSizingScreen,
  [contents.AUTO_LAYOUT.name]: AutoLayoutScreen,
  [contents.FILL_WITH_IMAGE.name]: FillWithImageScreen,
  [contents.FINDING_ICONS.name]: FindingIconsScreen,
  [contents.TYPEFACE.name]: TypefaceScreen,
  [contents.TYPE_HIERARCHY.name]: TypeHierarchyScreen,
  [contents.ACCESSIBLE_COLORS.name]: AccessibleColorsScreen,
  [contents.GRADIENTS.name]: GradientsScreen,
  [contents.CREATING_COMPONENTS.name]: CreatingComponentsScreen,
  [contents.CREATING_VARIANTS.name]: CreatingVariantsScreen,
  [contents.UI_KITS.name]: UiKitsScreen,
  [contents.ULTIMATE_DESIGN_TIP.name]: UltimateDesignTipScreen,
  [contents.NOT_FOUND.name]: NotFoundScreen,
}

export const APP_DATA = [
  contents.ROOT,
  contents.CONTENTS,
  contents.ABOUT,
  contents.COLUMN_GUTTER_MARGIN,
  contents.ALWAYS_4PX_SIZING,
  contents.AUTO_LAYOUT,
  contents.FILL_WITH_IMAGE,
  contents.FINDING_ICONS,
  contents.TYPEFACE,
  contents.TYPE_HIERARCHY,
  contents.ACCESSIBLE_COLORS,
  contents.GRADIENTS,
  contents.CREATING_COMPONENTS,
  contents.CREATING_VARIANTS,
  contents.UI_KITS,
  contents.ULTIMATE_DESIGN_TIP,
  contents.NOT_FOUND,
];

const UNUSED_PAGE_NUMBER = 1;

export const MAX_PAGE_NUMBER = APP_DATA.length - UNUSED_PAGE_NUMBER - 1;

