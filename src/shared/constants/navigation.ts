import { ROOT, CONTENTS, ABOUT, NOT_FOUND, COLUMN_GUTTER_MARGIN, ALWAYS_4PX_SIZING, AUTO_LAYOUT, FILL_WITH_IMAGE } from "./contents";
import RootScreen from "../../screens/RootScreen";
import ContentsScreen from "../../screens/ContentsScreen";
import AboutScreen from "../../screens/AboutScreen";
import NotFoundScreen from "../../screens/NotFoundScreen";
import ColumnGutterMarginScreen from "../../screens/ColumnGutterMarginScreen";
import Always4pxSizingScreen from "../../screens/Always4pxSizingScreen";
import AutoLayoutScreen from "../../screens/AutoLayoutScreen";
import FillWithImageScreen from "../../screens/FillWithImageScreen";

export const SCREEN_COMPONENTS: any = {
  [ROOT.name]: RootScreen,
  [CONTENTS.name]: ContentsScreen,
  [ABOUT.name]: AboutScreen,
  [COLUMN_GUTTER_MARGIN.name]: ColumnGutterMarginScreen,
  [ALWAYS_4PX_SIZING.name]: Always4pxSizingScreen,
  [AUTO_LAYOUT.name]: AutoLayoutScreen,
  [FILL_WITH_IMAGE.name]: FillWithImageScreen,
  [NOT_FOUND.name]: NotFoundScreen,
}

export const APP_DATA = [
  ROOT,
  CONTENTS,
  ABOUT,
  COLUMN_GUTTER_MARGIN,
  ALWAYS_4PX_SIZING,
  AUTO_LAYOUT,
  FILL_WITH_IMAGE,
  NOT_FOUND,
];

const UNUSED_PAGE_NUMBER = 1;

export const MAX_PAGE_NUMBER = APP_DATA.length - UNUSED_PAGE_NUMBER - 1;

