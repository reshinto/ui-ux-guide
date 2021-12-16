import HomeScreen from "../../screens/HomeScreen";
import NotFoundScreen from "../../screens/NotFoundScreen";
import RootScreen from "../../screens/RootScreen";

export const SCREEN_NAMES: any = {
  Root: "Root",
  Home: "Home",
  NotFound: "NotFound",
};

export const SCREEN_DATA: any = {
  Root: RootScreen,
  Home: HomeScreen,
  NotFound: NotFoundScreen,
};

export const APP_DATA = [
  {
    name: SCREEN_NAMES.Root,
    initialParams: {pageNumber: 0, topicNumber: undefined},
  },
  {
    name: SCREEN_NAMES.Home,
    initialParams: {pageNumber: 1, topicNumber: "00"},
  },
  {
    name: SCREEN_NAMES.NotFound,
    initialParams: {pageNumber: 0, topicNumber: undefined},
  },
];

const UNUSED_PAGE_NUMBER = 1;

export const MAX_PAGE_NUMBER = APP_DATA.length - UNUSED_PAGE_NUMBER - 1;

