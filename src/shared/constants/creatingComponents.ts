import image1 from "../../assets/images/creatingComponents/image1.png";
import Notification from "../../assets/svgs/Notification";

export const SECTION_TITLE_1 = "WHAT ARE COMPONENTS?";

export const SECTION_TEXT_1 = "Components are like master files. If you edit the master component, the changes will reflect on all instances that you’ve copy pasted. It’s super useful when you have to change the design half way through your project.";

export const SECTION_TITLE_2 = "CREATE A COMPONENT";

export const SECTION_INSTRUCTION_EXAMPLE_2 = [
  {
    text: "Select any element you want to turn into a component. Let’s use the bell icon below.",
    points: [],
  },
  {
    text: "Click on the “Create Component” icon at the top center of the Figma application.",
    points: [],
    images: [
      {
        image: image1,
        imageHeight: 60.8,
      },
    ],
  },
  {
    text: "Copy paste the bell icon and try changing the color of the dot in the master bell icon. You will see the change in your copy pasted instance.",
    points: [],
    Svg: Notification,
  },
];
