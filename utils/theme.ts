export interface Space {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface FontSizes {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}
export interface FontWeights {
  normal: string;
  medium: string;
  bold: string;
  extraBold: string;
}
export interface Colors {
  primary: string;
  secondary: string;
  grey: string;
}

export interface BreakPoints {
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export const fontSizes: FontSizes = {
  xs: "10px",
  sm: "12px",
  md: "16px",
  lg: "24px",
  xl: "32px",
};

export const fontWeights: FontWeights = {
  normal: "400",
  medium: "500",
  bold: "600",
  extraBold: "700",
};

export const breakpoints: BreakPoints = {
  sm: "600px",
  md: "900px",
  lg: "1200px",
  xl: "1800px",
};

export const spaces: Space = {
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "32px",
  xl: "48px",
};

export const colors = {
  primary: "#1F1F1F",
  secondary: "#FE6F61",
  grey: "#F5F5F5",
};

export interface Theme {
  colors: Colors;
  fontSizes: FontSizes;
  breakpoints: BreakPoints;
  spaces: Space;
  fontWeights: FontWeights;
}

const theme: Theme = {
  colors,
  fontSizes,
  breakpoints,
  spaces,
  fontWeights,
};

export default theme;
