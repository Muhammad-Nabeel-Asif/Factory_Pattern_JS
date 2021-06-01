// Simple functions to return hex and rgb values to reusable format :
//##
const changeToHex = function (r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

const changeToRgb = function (r, g, b) {
  return `rgb(${r}, ${g}, ${b})`;
};
//##

// Factory Functions to extract different functions via same values/arguments , a separate approach. we can invoke functions as e.g ( firstColor.rgb OR firstColor.hex to get results.
//@@
const makeColor = function (r, g, b) {
  const color = {};
  color.r = r;
  color.g = g;
  color.b = b;
  color.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
  };
  color.hex = function () {
    const { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };
  return color;
};
const firstColor = makeColor(150, 250, 69);
//@@
