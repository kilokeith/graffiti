const variables = {
  baseFontSize: "16px",
  baseFontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"],
  fontWeights: [200, 400, 700],
  modalContentWidth: "900px",
  inputRadius: 0,
  controlRadius: 0,
  standardInputSize: "2rem",
  defaultRoundedCorners: "42px",
};
variables.weights = {
  normal: variables.fontWeights[1],
  bold: variables.fontWeights[2]
}
variables.familySerif = variables.familySansSerif = `"${variables.baseFontFamily.join('","')}"`;

export default variables;
