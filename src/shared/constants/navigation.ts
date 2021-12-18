import RootScreen from "../../screens/RootScreen";
import ContentsScreen from "../../screens/ContentsScreen";
import AboutScreen from "../../screens/AboutScreen";
import NotFoundScreen from "../../screens/NotFoundScreen";
import { ROOT, CONTENTS, ABOUT, NOT_FOUND } from "./contents";

export const SCREEN_COMPONENTS: any = {
  [ROOT.name]: RootScreen,
  [CONTENTS.name]: ContentsScreen,
  [ABOUT.name]: AboutScreen,
  [NOT_FOUND.name]: NotFoundScreen,
}

export const APP_DATA = [
  ROOT,
  CONTENTS,
  ABOUT,
  NOT_FOUND,
];

const UNUSED_PAGE_NUMBER = 1;

export const MAX_PAGE_NUMBER = APP_DATA.length - UNUSED_PAGE_NUMBER - 1;

