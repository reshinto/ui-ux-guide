import RootScreen from "../../../screens/RootScreen";
import HomeScreen from "../../../screens/HomeScreen";
import NotFoundScreen from "../../../screens/NotFoundScreen";

export default [
  {
    name: "Root",
    component: RootScreen,
    initialParams: {pageNumber: ""},
  },
  {
    name: "Home",
    component: HomeScreen,
    initialParams: {pageNumber: "00"},
  },
  {
    name: "NotFound",
    component: NotFoundScreen,
    initialParams: {pageNumber: ""},
  },
];

