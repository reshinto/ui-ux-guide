import LayoutText from "../../assets/svgs/LayoutText.svg";
import TypeColorVisualsText from "../../assets/svgs/TypeColorVisualsText.svg";
import ObjectsText from "../../assets/svgs/ObjectsText.svg";

export const LABEL_TO_SVG = {
  layout: LayoutText,
  typeColorVisuals: TypeColorVisualsText,
  objects: ObjectsText,
  // shapesImages: ShapesImagesText,
  // typeColor: TypeColorText,
  // components: ComponentsText,
}

export const ROOT = {name:"Root", topicTitle: undefined, topicNumber: undefined};
export const CONTENTS = {name: "Contents", topicTitle: undefined, topicNumber: undefined};
export const NOT_FOUND = {name: "NotFound", topicTitle: undefined, topicNumber: undefined};

// Topics

// about
export const ABOUT = {
  name: "About",
  topicTitle: "About This Guide",
  topicNumber: "00",
};

// layout
export const COLUMN_GUTTER_MARGIN = {
  name: "ColumnGutterMargin",
  topicTitle: "Column, Gutter, Margin",
  topicNumber: "01",
}
export const ALWAYS_4PX_SIZING = {
  name: "Always4pxSizing",
  topicTitle: "Always 4px Sizing",
  topicNumber: "02",
}
export const AUTO_LAYOUT = {
  name: "AutoLayout",
  topicTitle: "Auto Layout",
  topicNumber: "03",
}

// type & color & visuals

// export const UNKNOWN = {
//   name: "About",
//   topicTitle: "???",
//   topicNumber: "04",
// }
// export const MASK_UNION_SELECTION = {
//   name: "About",
//   topicTitle: "Mask & Union Selection",
//   topicNumber: "05",
// }
// export const PEN_TOOL = {
//   name: "About",
//   topicTitle: "Pen Tool",
//   topicNumber: "06",
// }
export const FILL_WITH_IMAGE = {
  name: "FillWithImage",
  topicTitle: "Fill with Image",
  topicNumber: "04",
}
export const FINDING_ICONS = {
  name: "FindingIcons",
  topicTitle: "Finding Icons",
  topicNumber: "05",
}
export const TYPEFACE = {
  name: "Typeface",
  topicTitle: "Typeface",
  topicNumber: "06",
}
export const TYPE_HIERARCHY = {
  name: "TypeHierarchy",
  topicTitle: "Type Hierarchy",
  topicNumber: "07",
}
// export const COLOR_PALETTES = {
//   name: "About",
//   topicTitle: "Color Palettes",
//   topicNumber: "11",
// }
export const ACCESSIBLE_COLORS = {
  name: "AccessibleColors",
  topicTitle: "Accessible Colors",
  topicNumber: "08",
}
export const GRADIENTS = {
  name: "Gradients",
  topicTitle: "Gradients",
  topicNumber: "09",
}
export const CREATING_COMPONENTS = {
  name: "CreatingComponents",
  topicTitle: "Creating Components",
  topicNumber: "10",
}

// objects
export const CREATING_VARIANTS = {
  name: "CreatingVariants",
  topicTitle: "Creating Variants",
  topicNumber: "11",
}
export const UI_KITS = {
  name: "UiKits",
  topicTitle: "UI Kits",
  topicNumber: "12",
}
export const ULTIMATE_DESIGN_TIP = {
  name: "UltimateDesignTip",
  topicTitle: "Ultimate Design Tip",
  topicNumber: "13",
}

// export const BUTTONS = {
//   name: "About",
//   topicTitle: "Buttons",
//   topicNumber: "16",
// }
// export const TYPE_OF_NAVIGATION = {
//   name: "About",
//   topicTitle: "Types of Navigation",
//   topicNumber: "17",
// }

// design inspiration
// export const DESIGN_INSPIRATION = {
//   name: "About",
//   topicTitle: "Design Inspiration",
//   topicNumber: "18",
// }

// Content Section Arrangement

export const ABOUT_GUIDE_DATA = {
  Label: undefined,
  data: [
    ABOUT,
  ]
}

export const LAYOUT_DATA = {
  Label: LABEL_TO_SVG.layout,
  data: [
    COLUMN_GUTTER_MARGIN,
    ALWAYS_4PX_SIZING,
    AUTO_LAYOUT,
  ]
}

// export const SHAPES_IMAGES_DATA = {
//   Label: LABEL_TO_SVG.shapesImages,
//   data: [
//     UNKNOWN,
//     MASK_UNION_SELECTION,
//     PEN_TOOL,
//   ]
// }

export const TYPE_COLOR_VISUALS = {
  Label: LABEL_TO_SVG.typeColorVisuals,
  data: [
    FILL_WITH_IMAGE,
    FINDING_ICONS,
    TYPEFACE,
    TYPE_HIERARCHY,
    ACCESSIBLE_COLORS,
    GRADIENTS,
    CREATING_COMPONENTS,
  ],
}

export const OBJECTS = {
  Label: LABEL_TO_SVG.objects,
  data: [
    CREATING_VARIANTS,
    UI_KITS,
    ULTIMATE_DESIGN_TIP,
  ],
}

// export const TYPE_COLOR_DATA = {
//   Label: LABEL_TO_SVG.typeColor,
//   data: [
//     TYPEFACE,
//     TYPE_HIERARCHY,
//     COLOR_PALETTES,
//     ACCESSIBLE_COLORS,
//   ]
// }

// export const COMPONENTS_DATA = {
//   Label: LABEL_TO_SVG.components,
//   data: [
//     GRADIENTS,
//     CREATING_COMPONENT,
//     CREATING_VARIANTS,
//     BUTTONS,
//     TYPE_OF_NAVIGATION,
//   ]
// }

// export const DESIGN_INSPIRATION_DATA = {
//   Label: undefined,
//   data: [
//     DESIGN_INSPIRATION
//   ]
// }

// Contents Screen arrangement
export const CONTENTS_DATA = [
  ABOUT_GUIDE_DATA,
  LAYOUT_DATA,
  TYPE_COLOR_VISUALS,
  OBJECTS,
]