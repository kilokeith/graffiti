import Typography from "typography";
import colors from "./colors";
import variables from "./variables";

// https://kyleamathews.github.io/typography.js/
// based on the `Stern-Grove` theme: https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-stern-grove/src/index.js
const typography = new Typography({
  title: "Foxbox Digital",
  baseFontSize: variables.baseFontSize,
  baseLineHeight: 5 / 3,
  googleFonts: [
    {
      name: "Montserrat",
      styles: variables.fontWeights,
    }
  ],
  includeNormalize: true,
  headerFontFamily: variables.baseFontFamily,
  bodyFontFamily: variables.baseFontFamily,
  headerColor: colors.blue,
  bodyColor: colors.blue,
  headerWeight: variables.weights.bold,
  bodyWeight: variables.weights.normal,
  boldWeight: variables.weights.bold,
  // blockMarginBottom: "10px",
  overrideStyles: ({
    adjustFontSizeTo,
    scale,
    rhythm
  }, options) => ({
    a: {
      color: colors.orange,
      textDecoration: "none",
      cursor: "pointer",
    },
    "a:hover,a:active": {
      color: "#e32",
    },
    blockquote: {
      ...scale(1 / 5),
      paddingLeft: rhythm(14 / 16),
      paddingRight: rhythm(1 / 2),
      paddingTop: rhythm(1 / 2),
      paddingBottom: rhythm(1 / 2),
      marginLeft: 0,
      marginRight: 0,
      borderLeft: "none",
    },
    "blockquote > :last-child": {
      marginBottom: 0,
    },
    "blockquote cite": {
      ...adjustFontSizeTo(options.baseFontSize),
      color: options.bodyColor,
      fontWeight: options.bodyWeight,
    },
    // "blockquote cite:before": {
    //   content: '"— "',
    // },
    ul: {
      listStyle: "disc",
    },
    "@media only screen and (max-width:480px)": {
      "ul,ol": {
        marginLeft: rhythm(1),
      },
      blockquote: {
        marginLeft: 0,
        marginRight: 0,
      },
    },
    "h1,h2,h3,h4,h5,h6": {
      marginTop: rhythm(2),
    },
    h6: {
      fontStyle: "italic",
    },
  }),
})

// Export helper functions
export const {
  scale,
  rhythm,
  options
} = typography
export default typography