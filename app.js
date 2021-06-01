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

//%%
// Working with classes in js

class MyColor {
  constructor(r, g, b, name) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
  }
  rgb() {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
  }
  hex() {
    const { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
}

const white = new MyColor(255, 190, 189, "whitish");
const red = new MyColor(255, 20, 36, "redish");

//%%

// "Extend" and "Super" keywords in Classes
// ^^

class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating !`;
  }
}

/*
 "extends"
1.The extends keyword is used to create a child class of another class (parent).
2.The child class inherits all the methods from another class.
3.Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class. 
*/

class Cat extends Pet {
  constructor(name, age, livesLeft = 9) {
    console.log("This will call pet constructor also alongside itself !");
    // the "super" keyword below calls the constructor of class "Pet" , so there is no need for using "this" to relate with constructor objects like : , thats its purpose

    /*
    this.name = name;
    this.age = age;
    */

    super(name, age);
    this.livesLeft = livesLeft;
  }
  meow() {
    return "MEEOOWWW !!";
  }
}

class Dog extends Pet {
  bark() {
    return "WOOOOOF";
  }
  eat() {
    return `${this.name} scarfs his food`;
  }
}

// ^^
