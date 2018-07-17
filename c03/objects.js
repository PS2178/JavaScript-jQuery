// Object literal notation is the easiestand most popular way to create objects

// var hotel = {
//   name: 'Quay',
//   rooms: 40,
//   booked: 25,
//   checkAvailability: function() {
//     return this.rooms - this.booked;
//   }
// };

// Accessing an object and dot notation
// var hotelName = hotel.name;
// var roomsFree = hotel.checkAvailability();

// var elName = document.getElementByld('hotelName');
// elName.textContent = hotel.name;

// var elRooms = document.getElementByid('rooms');
// elRooms.textContent = hotel.checkAvailability();


// Another object literal example

// var hotel = {
//   name: 'Park',
//   rooms: 120,
//   booked: 77,
//   checkAvailability: function(){
//     return this.rooms - this.booked;
//   }
// };

// var elName = document.getElementById('hotelName');
// console.log(elName);
// elName.textContent = hotel.name;

// var elRooms = document.getElementById('rooms');
// elRooms.textContent = hotel.checkAvailability();


// CREATING AN OBJECT: CONSTRUCTOR NOTATION
// The new keyword and the object constructor create a blank object.
// You can then add properties and methods to the object.

var hotel = new Object();
hotel.name = 'Quay';
hotel.rooms = 40;
hotel.booked = 25;
hotel.checkAvailability = function(){
  return this.rooms - this.booked;
};
// console.log(hotel.checkAvailability());

// UPDATING AN OBJECT
// To update the value of properties, use dot notation or square 
// brackets. They work on objects created using literal or constructor 
// notation. To delete a property, use the 'delete' keyword.

hotel.name = 'Park'; // if the object does not have it, it will be added
hotel['name'] = 'Park'; // same output

// delete hotel.name; property deleted entirely
// hotel.name = ''; property cleared