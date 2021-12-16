import HomeScreen from "../../screens/HomeScreen";
import NotFoundScreen from "../../screens/NotFoundScreen";
import RootScreen from "../../screens/RootScreen";

export const SCREEN_DATA: any = {
  Root: {
    name: "Root",
    component: RootScreen,
    data: {
      pageNumber: 0,
      topicNumber: undefined
    }
  },
  Home: {
    name: "Home",
    component: HomeScreen,
    data: {
      pageNumber: 1,
      topicNumber: "00"
    }
  },
  NotFound: {
    name: "NotFound",
    component: NotFoundScreen,
    data: {
      pageNumber: 0,
      topicNumber: undefined
    }
  },
};

export const APP_DATA = [
  {
    name: SCREEN_DATA.Root.name,
    initialParams: SCREEN_DATA.Root.data,
  },
  {
    name: SCREEN_DATA.Home.name,
    initialParams: SCREEN_DATA.Home.data,
  },
  {
    name: SCREEN_DATA.NotFound.name,
    initialParams: SCREEN_DATA.NotFound.data,
  },
];

const UNUSED_PAGE_NUMBER = 1;

export const MAX_PAGE_NUMBER = APP_DATA.length - UNUSED_PAGE_NUMBER - 1;

