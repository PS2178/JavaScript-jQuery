// The keyword 'this' is commonly used inside functions and objects.
// Where the function is declared alters what 'this' means. It always
// refers to one object, usually the object in which the function operates.

// A FUNCTION IN GLOBAL SCOPE
// The default object in this context is te window object, so when
// 'this' is used inside a function in the global context it refers
// to the window object.

// function windowSize() {
//   var width = this.innerWidth;
//   var height = this.innerHeight;
//   return [height, width];
// }

var width = 600;
var shape = {width: 300};

var showWidth = function() {
  document.write(this.wdith);
};

showWidth(); // outputs 600