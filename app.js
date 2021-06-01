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

// $$
// Introducing our constructor functions :
/*
The "new" keyword does the following things:
1.Creates a blank, plain JavaScript object.
2.Adds a property to the new object (__proto__) that links to the constructor function's prototype object.
3.Binds the newly created object instance as the this context (i.e. all references to this in the constructor function now refer to the object created in the first step).
4.Returns this if the function doesn't return an object.
*/

function Color(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
}

Color.prototype.rgb = function () {
  const { r, g, b } = this;
  return `rgb(${r}, ${g}, ${b})`;
};

Color.prototype.hex = function () {
  const { r, g, b } = this;
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

const color1 = new Color(40, 60, 80);
color1.hex();
const color2 = new Color(250, 150, 99);
color2.hex();

//$$
