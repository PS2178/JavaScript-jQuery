// CREATING MANY OBJECTS: CONSTRUCTOR NOTATION
// Sometimes you will want several objects to represent similar things.
// Object constructors can use a function as a template for creating objects.
// First, create the template with the object's properties and methods.

// Constructor function begin with a capital letter
// function Hotel(name, rooms, booked) {
//   this.name = name;
//   this.rooms = rooms;
//   this.booked = booked;
//   this.checkAvailability = function() {
//     return this.rooms - this.booked;
//   };
// }

// Create instances of a hotel
// var quayHotel = new Hotel('Quay', 40, 25);
// var parkHotel = new Hotel('Park', 120, 77);

// CREATING OBJECTS USING CONSTRUCTOR SYNTAX
var hotel = new Object();

hotel.name = 'Park';
hotel.rooms = 120;
hotel.booked = 77;
hotel.checkAvailability = function() {
  return this.rooms - this.booked;
};

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();