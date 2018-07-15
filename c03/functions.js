function sayHello() {
  document.write('Hello!');
}

function getArea(width, height){
  return width * height;
}

function calculateArea(width, height){
  var area = width * height;
  return area;
}

function getSize(width, height, depth){
  var area = width * height;
  var volume = width * height * depth;
  var sizes = [area, volume];
  return sizes;
}

// var areaOne = getSize(3, 2, 3)[0];
// var volumeOne = getSize(3, 2, 3)[1];

// Immediately invoked function expressions (IIFF)
var area = (function() { // Grouping operator
  var width = 3;
  var height = 2;
  return width * height;
}()) // Final parentheses tells the interpreter to call the function immediately

// Objects

var hotel = {
  name: 'Quay',     // Properties
  rooms: 40,
  booked: 25,
  gym: true,
  roomTypes: ['twin', 'doble', 'suite'],
  checkAvailability: function() {   // Method
    return this.rooms - this.booked;  // this keyword refers to the object reference
  }
};
// console.log('Rooms available: ' + hotel.checkAvailability());

var hotelName = hotel.name; // hotel
var roomsFree = hotel.checkAvailability();
