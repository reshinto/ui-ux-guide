import LayoutText from "../../assets/svgs/LayoutText.svg";
import ShapesImagesText from "../../assets/svgs/ShapesImagesText.svg";
import TypeColorText from "../../assets/svgs/TypeColorText.svg";
import ComponentsText from "../../assets/svgs/ComponentsText.svg";

export const LABEL_TO_SVG = {
  layout: LayoutText,
  shapesImages: ShapesImagesText,
  typeColor: TypeColorText,
  components: ComponentsText,
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

// shapes & images
export const UNKNOWN = {
  name: "About",
  topicTitle: "???",
  topicNumber: "04",
}
export const MASK_UNION_SELECTION = {
  name: "About",
  topicTitle: "Mask & Union Selection",
  topicNumber: "05",
}
export const PEN_TOOL = {
  name: "About",
  topicTitle: "Pen Tool",
  topicNumber: "06",
}
export const FILL_WITH_IMAGE = {
  name: "FillWithImage",
  topicTitle: "Fill with Image",
  topicNumber: "07",
}
export const FINDING_ICONS = {
  name: "About",
  topicTitle: "Finding Icons",
  topicNumber: "08",
}

// type & color
export const TYPEFACE = {
  name: "About",
  topicTitle: "Typeface",
  topicNumber: "09",
}
export const TYPE_HIERARCHY = {
  name: "About",
  topicTitle: "Type Hierarchy",
  topicNumber: "10",
}
export const COLOR_PALETTES = {
  name: "About",
  topicTitle: "Color Palettes",
  topicNumber: "11",
}
export const ACCESSIBLE_COLORS = {
  name: "About",
  topicTitle: "Accessible Colors",
  topicNumber: "12",
}

// components
export const GRADIENTS = {
  name: "About",
  topicTitle: "Gradients",
  topicNumber: "13",
}
export const CREATING_COMPONENT = {
  name: "About",
  topicTitle: "Creating Components",
  topicNumber: "14",
}
export const CREATING_VARIANTS = {
  name: "About",
  topicTitle: "Creating Variants",
  topicNumber: "15",
}
export const BUTTONS = {
  name: "About",
  topicTitle: "Buttons",
  topicNumber: "16",
}
export const TYPE_OF_NAVIGATION = {
  name: "About",
  topicTitle: "Types of Navigation",
  topicNumber: "17",
}

// design inspiration
export const DESIGN_INSPIRATION = {
  name: "About",
  topicTitle: "Design Inspiration",
  topicNumber: "18",
}

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

export const SHAPES_IMAGES_DATA = {
  Label: LABEL_TO_SVG.shapesImages,
  data: [
    UNKNOWN,
    MASK_UNION_SELECTION,
    PEN_TOOL,
    FILL_WITH_IMAGE,
    FINDING_ICONS,
  ]
}

export const TYPE_COLOR_DATA = {
  Label: LABEL_TO_SVG.typeColor,
  data: [
    TYPEFACE,
    TYPE_HIERARCHY,
    COLOR_PALETTES,
    ACCESSIBLE_COLORS,
  ]
}

export const COMPONENTS_DATA = {
  Label: LABEL_TO_SVG.components,
  data: [
    GRADIENTS,
    CREATING_COMPONENT,
    CREATING_VARIANTS,
    BUTTONS,
    TYPE_OF_NAVIGATION,
  ]
}

export const DESIGN_INSPIRATION_DATA = {
  Label: undefined,
  data: [
    DESIGN_INSPIRATION
  ]
}

// Contents Screen arrangement
export const CONTENTS_DATA = [
  ABOUT_GUIDE_DATA,
  LAYOUT_DATA,
  SHAPES_IMAGES_DATA,
  TYPE_COLOR_DATA,
  COMPONENTS_DATA,
  DESIGN_INSPIRATION_DATA,
]