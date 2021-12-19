import image1 from "../../assets/images/columnGutterMargin/image1.png";
import image2 from "../../assets/images/columnGutterMargin/image2.png";
import image3 from "../../assets/images/columnGutterMargin/image3.png";
import ControlKey from "../../assets/svgs/ControlKey";
import Plus from "../../assets/svgs/PlusSymbol";
import Gkey from "../../assets/svgs/Gkey";

export const SECTION_TITLE_1 = "CREATE A LAYOUT GRID";

export const SECTION_TEXT_1 = "Layout grids are super helpful to make sure your layout is consistent when designing screens. There’s no single rule, but this is how I usually set up mine.";

export const SECTION_INSTRUCTION_EXAMPLE_1 = [
  {
    text: "Click on the frame (this one) in which you want to create your layout grid",
    points: [],
    image: undefined,
    imageHeight: undefined,
  },
  {
    text: "Click on the + beside ‘Layout grid’ on your right",
    points: [],
    image: image1,
    imageHeight: 36,
  },
  {
    text: "Click on the ‘Layout grid settings’ icon",
    points: [],
    image: image2,
    imageHeight: 65,
  },
  {
    text: "Change from ‘Grid’ to ‘Columns’ and set:",
    points: [
      "Count = 4",
      "Margin = 20",
      "Gutter = 20",
    ],
    image: image3,
    imageHeight: 209,
  },
];

export const SECTION_TITLE_2 = "SHOW & HIDE LAYOUT GRIDS";

export const SECTION_TEXT_2 = "Here is the shortcut to show and hide layout grids:";

export const SECTION_SHORTCUT_EXAMPLE_2 = [
  {
    image: ControlKey,
    text: "Press",
  },
  {
    image: Plus,
    text: undefined,
  },
  {
    image: Gkey,
    text: "Press",
  },
];